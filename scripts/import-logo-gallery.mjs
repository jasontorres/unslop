import { createHash, createHmac } from "node:crypto";
import { mkdir, readFile, rename, stat, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const args = new Set(process.argv.slice(2));
const sourcePath = resolve(process.env.RUNWARE_USAGE_FILE || "runware_api_usage.json");
const stagingDirectory = resolve(".logo-gallery-import");
const pagesDirectory = resolve(stagingDirectory, "pages");
const imagesDirectory = resolve(stagingDirectory, "images");
const checkpointPath = resolve(stagingDirectory, "uploaded.json");
const bucketName = process.env.LOGO_GALLERY_BUCKET || "unslop";
const r2Endpoint = process.env.R2_ENDPOINT || "https://198b4eeead855393592a983a0dc8f539.r2.cloudflarestorage.com";
const pageSize = 200;
const upload = args.has("--upload");
const verify = upload || args.has("--verify");
const download = upload || args.has("--download");
const concurrencyArgument = process.argv.find((argument) => argument.startsWith("--concurrency="));
const concurrency = Math.max(1, Math.min(12, Number(concurrencyArgument?.split("=")[1] || 6)));
const limitArgument = process.argv.find((argument) => argument.startsWith("--limit="));
const limit = limitArgument ? Math.max(1, Number(limitArgument.split("=")[1])) : Number.POSITIVE_INFINITY;
const allowedModels = new Set(["openai:gpt-image@2", "ideogram:4@0"]);

function parseJson(value) {
  if (typeof value !== "string") return null;
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

function outputTypeFromPrompt(prompt) {
  if (prompt.includes("Create a standalone logo symbol")) return "logo";
  if (prompt.includes("Create a mobile app logo")) return "app-icon";
  if (prompt.includes("Create one memorable full mascot character")) return "mascot";
  if (prompt.includes("Create a portrait brand poster")) return "poster";
  if (prompt.includes("Create a complete horizontal brand lockup")) return "logo-with-name";
  if (prompt.includes("mascot and app-logo symbol")) return "app-icon";
  return null;
}

function appNameFromPrompt(prompt) {
  return prompt.match(/app named [“"]([^”"]+)[”"]/i)?.[1]?.trim().slice(0, 60) || "";
}

function createdAtFromRow(row) {
  if (typeof row.responseDateUTC === "string") {
    const parsed = Date.parse(`${row.responseDateUTC.replace(" ", "T")}Z`);
    if (Number.isFinite(parsed)) return parsed;
  }
  const seconds = Number(row.responseDate);
  return Number.isFinite(seconds) ? seconds * 1000 : 0;
}

function imageFormatFromUrl(value) {
  try {
    const extension = new URL(value).pathname.toLowerCase().match(/\.([a-z0-9]+)$/)?.[1];
    if (extension === "jpg" || extension === "jpeg") return { extension: "jpg", contentType: "image/jpeg" };
    if (extension === "png") return { extension, contentType: "image/png" };
    if (extension === "webp") return { extension, contentType: "image/webp" };
  } catch {
    // Invalid source URLs are rejected by galleryRecord.
  }
  return null;
}

function galleryRecord(row) {
  if (row?.status !== "success" || !allowedModels.has(row.modelId)) return null;
  const request = parseJson(row.requestObjectString)?.[0];
  const response = parseJson(row.response)?.data?.[0];
  const prompt = typeof request?.positivePrompt === "string" ? request.positivePrompt : "";
  const appName = appNameFromPrompt(prompt) || (!request ? "Untitled" : "");
  const outputType = outputTypeFromPrompt(prompt) || (!request ? "app-icon" : null);
  const sourceUrl = response?.imageURL || row.assetURL || row.imageURL;
  const imageUUID = typeof response?.imageUUID === "string"
    ? response.imageUUID
    : String(sourceUrl || "").match(/([0-9a-f-]{36})\.(?:jpe?g|png|webp)(?:$|\?)/i)?.[1];
  const imageFormat = imageFormatFromUrl(sourceUrl);
  const width = Number(request?.width || 1024);
  const height = Number(request?.height || 1024);
  const createdAt = createdAtFromRow(row);

  if (!appName
    || !outputType
    || !imageUUID
    || !imageFormat
    || !/^https:\/\/im\.runware\.ai\//i.test(sourceUrl || "")
    || !Number.isFinite(width)
    || !Number.isFinite(height)
    || !createdAt) {
    return null;
  }

  return {
    id: imageUUID,
    imageKey: `logo-gallery/images/${imageUUID}.${imageFormat.extension}`,
    imageExtension: imageFormat.extension,
    contentType: imageFormat.contentType,
    sourceUrl,
    appName,
    model: row.modelId,
    outputType,
    width,
    height,
    createdAt,
  };
}

async function prepareArchive() {
  const rows = JSON.parse(await readFile(sourcePath, "utf8"));
  if (!Array.isArray(rows)) throw new Error("Runware usage export must be a JSON array.");

  const deduplicated = new Map();
  for (const row of rows) {
    const record = galleryRecord(row);
    if (record && !deduplicated.has(record.id)) deduplicated.set(record.id, record);
  }

  const records = [...deduplicated.values()]
    .sort((a, b) => b.createdAt - a.createdAt)
    .slice(0, limit);
  const pages = Array.from({ length: Math.ceil(records.length / pageSize) }, (_, index) =>
    records.slice(index * pageSize, (index + 1) * pageSize));

  await mkdir(pagesDirectory, { recursive: true });
  await Promise.all(pages.map(async (page, index) => {
    const publicItems = page.map(({ id, imageKey, appName, model, outputType, width, height, createdAt }) => ({
      id,
      imageKey,
      appName,
      model,
      outputType,
      width,
      height,
      createdAt,
    }));
    const pagePath = resolve(pagesDirectory, `page-${String(index + 1).padStart(4, "0")}.json`);
    await writeFile(pagePath, `${JSON.stringify(publicItems)}\n`);
  }));

  const manifest = {
    generatedAt: new Date().toISOString(),
    total: records.length,
    pageSize,
    pageCount: pages.length,
  };
  await writeFile(resolve(stagingDirectory, "manifest.json"), `${JSON.stringify(manifest)}\n`);
  return { records, manifest };
}

function awsEncode(value) {
  return encodeURIComponent(value).replace(/[!'()*]/g, (character) =>
    `%${character.charCodeAt(0).toString(16).toUpperCase()}`);
}

function sha256(value) {
  return createHash("sha256").update(value).digest("hex");
}

function hmac(key, value) {
  return createHmac("sha256", key).update(value).digest();
}

async function signedR2Request(method, key = "", body = Buffer.alloc(0), metadata = {}, query = {}) {
  const accessKeyId = process.env.R2_ACCESS_KEY_ID;
  const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;
  if (!accessKeyId || !secretAccessKey) {
    throw new Error("R2_ACCESS_KEY_ID and R2_SECRET_ACCESS_KEY are required for upload.");
  }

  const now = new Date();
  const amzDate = now.toISOString().replace(/[:-]|\.\d{3}/g, "");
  const dateStamp = amzDate.slice(0, 8);
  const endpoint = new URL(r2Endpoint);
  const canonicalUri = `/${[bucketName, ...key.split("/").filter(Boolean)].map(awsEncode).join("/")}`;
  const canonicalQuery = Object.entries(query)
    .filter(([, value]) => value !== undefined && value !== null && value !== "")
    .sort(([leftKey, leftValue], [rightKey, rightValue]) =>
      leftKey.localeCompare(rightKey) || String(leftValue).localeCompare(String(rightValue)))
    .map(([name, value]) => `${awsEncode(name)}=${awsEncode(String(value))}`)
    .join("&");
  const payloadHash = sha256(body);
  const requestHeaders = {
    host: endpoint.host,
    "x-amz-content-sha256": payloadHash,
    "x-amz-date": amzDate,
    ...metadata,
  };
  const headerNames = Object.keys(requestHeaders).sort();
  const canonicalHeaders = headerNames
    .map((name) => `${name}:${String(requestHeaders[name]).trim().replace(/\s+/g, " ")}\n`)
    .join("");
  const signedHeaders = headerNames.join(";");
  const canonicalRequest = [method, canonicalUri, canonicalQuery, canonicalHeaders, signedHeaders, payloadHash].join("\n");
  const scope = `${dateStamp}/auto/s3/aws4_request`;
  const stringToSign = ["AWS4-HMAC-SHA256", amzDate, scope, sha256(canonicalRequest)].join("\n");
  const dateKey = hmac(Buffer.from(`AWS4${secretAccessKey}`), dateStamp);
  const regionKey = hmac(dateKey, "auto");
  const serviceKey = hmac(regionKey, "s3");
  const signingKey = hmac(serviceKey, "aws4_request");
  const signature = createHmac("sha256", signingKey).update(stringToSign).digest("hex");
  const authorization = `AWS4-HMAC-SHA256 Credential=${accessKeyId}/${scope}, SignedHeaders=${signedHeaders}, Signature=${signature}`;

  const requestUrl = new URL(canonicalUri, endpoint);
  requestUrl.search = canonicalQuery;
  const response = await fetch(requestUrl, {
    method,
    headers: {
      ...requestHeaders,
      Authorization: authorization,
    },
    ...(method === "PUT" ? { body } : {}),
  });
  if (!response.ok) {
    const details = method === "HEAD" ? "" : ` ${await response.text()}`;
    throw new Error(`R2 ${method} failed with ${response.status}.${details}`);
  }
  return response;
}

async function putR2Object(key, body, contentType, cacheControl) {
  await signedR2Request("PUT", key, body, {
    "cache-control": cacheControl,
    "content-type": contentType,
  });
}

function cachedImagePath(record) {
  return resolve(imagesDirectory, `${record.id}.${record.imageExtension}`);
}

async function hasCachedImage(record) {
  try {
    return (await stat(cachedImagePath(record))).size > 0;
  } catch {
    return false;
  }
}

async function downloadImages(records) {
  await mkdir(imagesDirectory, { recursive: true });
  const pending = [];
  for (const record of records) {
    if (!(await hasCachedImage(record))) pending.push(record);
  }

  let nextIndex = 0;
  let downloadedThisRun = 0;
  async function worker() {
    while (nextIndex < pending.length) {
      const record = pending[nextIndex++];
      const response = await fetch(record.sourceUrl, { headers: { Accept: "image/*" } });
      if (!response.ok) throw new Error(`Download failed (${response.status}) for ${record.id}`);
      const image = Buffer.from(await response.arrayBuffer());
      if (!image.length) throw new Error(`Downloaded an empty image for ${record.id}`);
      const destination = cachedImagePath(record);
      const partial = `${destination}.part`;
      await writeFile(partial, image);
      await rename(partial, destination);
      downloadedThisRun += 1;
      const completed = records.length - pending.length + downloadedThisRun;
      if (downloadedThisRun % 25 === 0 || completed === records.length) {
        process.stdout.write(`Downloaded ${completed}/${records.length} images\n`);
      }
    }
  }

  await Promise.all(Array.from({ length: Math.min(concurrency, pending.length) }, () => worker()));
}

async function loadCheckpoint() {
  try {
    const values = JSON.parse(await readFile(checkpointPath, "utf8"));
    return new Set(Array.isArray(values) ? values : []);
  } catch {
    return new Set();
  }
}

async function uploadImages(records) {
  const completed = await loadCheckpoint();
  const pending = records.filter((record) => !completed.has(record.id));
  let nextIndex = 0;
  let uploadedThisRun = 0;

  async function worker() {
    while (nextIndex < pending.length) {
      const record = pending[nextIndex++];
      const image = await readFile(cachedImagePath(record));
      await putR2Object(record.imageKey, image, record.contentType, "public, max-age=31536000, immutable");
      completed.add(record.id);
      uploadedThisRun += 1;
      await writeFile(checkpointPath, `${JSON.stringify([...completed])}\n`);
      if (uploadedThisRun % 25 === 0 || completed.size === records.length) {
        process.stdout.write(`Uploaded ${completed.size}/${records.length} images\n`);
      }
    }
  }

  await Promise.all(Array.from({ length: Math.min(concurrency, pending.length) }, () => worker()));
}

async function uploadIndexes(manifest) {
  for (let page = 1; page <= manifest.pageCount; page += 1) {
    const filename = `page-${String(page).padStart(4, "0")}.json`;
    await putR2Object(
      `logo-gallery/pages/${filename}`,
      await readFile(resolve(pagesDirectory, filename)),
      "application/json",
      "public, max-age=60",
    );
  }
  await putR2Object(
    "logo-gallery/manifest.json",
    await readFile(resolve(stagingDirectory, "manifest.json")),
    "application/json",
    "public, max-age=60",
  );
}

function decodeXml(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", "\"")
    .replaceAll("&apos;", "'");
}

async function verifyR2Archive(expectedCount, manifest) {
  let continuationToken;
  let imageCount = 0;
  do {
    const response = await signedR2Request("GET", "", Buffer.alloc(0), {}, {
      "list-type": "2",
      prefix: "logo-gallery/images/",
      "max-keys": "1000",
      ...(continuationToken ? { "continuation-token": continuationToken } : {}),
    });
    const xml = await response.text();
    imageCount += [...xml.matchAll(/<Key>(.*?)<\/Key>/g)].length;
    const isTruncated = /<IsTruncated>true<\/IsTruncated>/.test(xml);
    continuationToken = isTruncated
      ? decodeXml(xml.match(/<NextContinuationToken>(.*?)<\/NextContinuationToken>/)?.[1] || "")
      : undefined;
    if (isTruncated && !continuationToken) throw new Error("R2 listing was truncated without a continuation token.");
  } while (continuationToken);

  if (imageCount !== expectedCount) {
    throw new Error(`R2 contains ${imageCount} imported images; expected ${expectedCount}.`);
  }
  await signedR2Request("HEAD", "logo-gallery/manifest.json");
  await signedR2Request("HEAD", "logo-gallery/pages/page-0001.json");
  await signedR2Request("HEAD", `logo-gallery/pages/page-${String(manifest.pageCount).padStart(4, "0")}.json`);
  process.stdout.write(`Verified ${imageCount} images and ${manifest.pageCount} index pages in R2.\n`);
}

const { records, manifest } = await prepareArchive();
process.stdout.write(`Prepared ${manifest.total} images across ${manifest.pageCount} archive pages.\n`);

if (upload) {
  await signedR2Request("HEAD");
  process.stdout.write(`Verified access to R2 bucket ${bucketName}.\n`);
  await downloadImages(records);
  await uploadImages(records);
  await uploadIndexes(manifest);
  await verifyR2Archive(records.length, manifest);
  process.stdout.write(`Uploaded the gallery archive to R2 bucket ${bucketName}.\n`);
} else if (verify) {
  await signedR2Request("HEAD");
  await verifyR2Archive(records.length, manifest);
} else if (download) {
  await downloadImages(records);
  process.stdout.write(`Downloaded the gallery archive to ${imagesDirectory}.\n`);
} else {
  process.stdout.write("Preparation only. Run npm run gallery:download, then npm run gallery:upload after Cloudflare authentication.\n");
}
