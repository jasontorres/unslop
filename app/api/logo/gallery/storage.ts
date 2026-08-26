const GALLERY_PREFIX = "logo_";
const ARCHIVE_PREFIX = "logo-gallery";
const ARCHIVE_MANIFEST_KEY = `${ARCHIVE_PREFIX}/manifest.json`;
const GALLERY_ASSET_ORIGIN = "https://assets.unslop.site";
const GALLERY_THUMBNAIL_OPTIONS = "width=512,fit=scale-down,format=auto,quality=80";
const GALLERY_PAGE_SIZE = 200;
const MAX_IMAGE_BYTES = 25 * 1024 * 1024;
const REVERSE_TIME_CEILING = 9_999_999_999_999;

type StoredGalleryMetadata = {
  appName: string;
  model: string;
  outputType: string;
  width: string;
  height: string;
  createdAt: string;
  imageUUID: string;
};

type GalleryR2Object = {
  key: string;
  size: number;
  etag?: string;
  customMetadata?: Partial<StoredGalleryMetadata>;
  httpMetadata?: { contentType?: string; cacheControl?: string };
  body?: ReadableStream<Uint8Array>;
};

type GalleryR2Bucket = {
  put(
    key: string,
    value: ArrayBuffer,
    options: {
      httpMetadata: { contentType: string; cacheControl: string };
      customMetadata: StoredGalleryMetadata;
    },
  ): Promise<unknown>;
  list(options: {
    prefix: string;
    limit: number;
    cursor?: string;
    include: ["customMetadata"];
  }): Promise<{
    objects: GalleryR2Object[];
    truncated: boolean;
    cursor?: string;
  }>;
  get(key: string): Promise<GalleryR2Object | null>;
};

type WorkerGlobal = typeof globalThis & {
  __UNSLOP_WORKER_ENV__?: Record<string, unknown>;
};

export type PublicGalleryImage = {
  id: string;
  imageUrl: string;
  thumbnailUrl: string;
  appName: string;
  model: "openai:gpt-image@2" | "ideogram:4@0";
  outputType: "logo" | "app-icon" | "mascot" | "poster" | "logo-with-name";
  width: number;
  height: number;
  createdAt: number;
};

type ArchiveManifest = {
  total: number;
  pageSize: number;
  pageCount: number;
};

type ArchiveGalleryImage = Omit<PublicGalleryImage, "imageUrl" | "thumbnailUrl"> & {
  imageKey: string;
};

function encodeMetadata(value: string) {
  return encodeURIComponent(value);
}

function decodeMetadata(value?: string) {
  if (!value) return "";
  try {
    return decodeURIComponent(value);
  } catch {
    return "";
  }
}

function galleryKey(createdAt: number, imageUUID: string, extension: string) {
  const reverseTime = String(REVERSE_TIME_CEILING - createdAt).padStart(13, "0");
  return `${GALLERY_PREFIX}${reverseTime}_${imageUUID}.${extension}`;
}

function storedImageFormat(contentTypeHeader: string | null, pathname: string) {
  const contentType = contentTypeHeader?.split(";")[0].trim().toLowerCase();
  if (contentType === "image/jpeg" || contentType === "image/jpg") {
    return { contentType: "image/jpeg", extension: "jpg" };
  }
  if (contentType === "image/png") return { contentType, extension: "png" };
  if (contentType === "image/webp") return { contentType, extension: "webp" };

  const extension = pathname.toLowerCase().match(/\.([a-z0-9]+)$/)?.[1];
  if (extension === "jpg" || extension === "jpeg") return { contentType: "image/jpeg", extension: "jpg" };
  if (extension === "png") return { contentType: "image/png", extension };
  if (extension === "webp") return { contentType: "image/webp", extension };
  throw new Error("Generated asset returned an unsupported image format.");
}

function publicAssetPath(key: string) {
  return key.split("/").map(encodeURIComponent).join("/");
}

function publicImageUrl(key: string) {
  return `${GALLERY_ASSET_ORIGIN}/${publicAssetPath(key)}`;
}

function publicThumbnailUrl(key: string) {
  return `${GALLERY_ASSET_ORIGIN}/cdn-cgi/image/${GALLERY_THUMBNAIL_OPTIONS}/${publicAssetPath(key)}`;
}

async function readJsonObject<T>(bucket: GalleryR2Bucket, key: string) {
  const object = await bucket.get(key);
  if (!object?.body) return null;
  try {
    return await new Response(object.body).json() as T;
  } catch {
    return null;
  }
}

export async function getGalleryBucket() {
  const workerEnvironment = (globalThis as WorkerGlobal).__UNSLOP_WORKER_ENV__;
  const workerBucket = workerEnvironment?.LOGO_GALLERY as GalleryR2Bucket | undefined;
  if (workerBucket) return workerBucket;

  const { env } = await import("cloudflare:workers");
  const bucket = env.LOGO_GALLERY as GalleryR2Bucket | undefined;
  if (!bucket) throw new Error("LOGO_GALLERY R2 binding is not configured.");
  return bucket;
}

export async function storeGalleryImage(input: {
  imageURL: string;
  imageUUID?: string;
  appName: string;
  model: PublicGalleryImage["model"];
  outputType: PublicGalleryImage["outputType"];
  width: number;
  height: number;
}) {
  const sourceUrl = new URL(input.imageURL);
  if (sourceUrl.protocol !== "https:" || sourceUrl.hostname !== "im.runware.ai") {
    throw new Error("The generated image URL is not a trusted Runware asset.");
  }

  const response = await fetch(sourceUrl, { headers: { Accept: "image/*" } });
  if (!response.ok) throw new Error(`Generated image download failed with ${response.status}.`);

  const format = storedImageFormat(response.headers.get("content-type"), sourceUrl.pathname);

  const declaredSize = Number(response.headers.get("content-length") || 0);
  if (declaredSize > MAX_IMAGE_BYTES) throw new Error("Generated image is too large for the gallery.");

  const imageData = await response.arrayBuffer();
  if (imageData.byteLength > MAX_IMAGE_BYTES) throw new Error("Generated image is too large for the gallery.");

  const createdAt = Date.now();
  const imageUUID = input.imageUUID || crypto.randomUUID();
  const key = galleryKey(createdAt, imageUUID, format.extension);
  const bucket = await getGalleryBucket();
  await bucket.put(key, imageData, {
    httpMetadata: {
      contentType: format.contentType,
      cacheControl: "public, max-age=31536000, immutable",
    },
    customMetadata: {
      appName: encodeMetadata(input.appName),
      model: input.model,
      outputType: input.outputType,
      width: String(input.width),
      height: String(input.height),
      createdAt: String(createdAt),
      imageUUID,
    },
  });
}

export async function listLiveGalleryImages(cursor?: string) {
  const bucket = await getGalleryBucket();
  const page = await bucket.list({
    prefix: GALLERY_PREFIX,
    limit: 1000,
    ...(cursor ? { cursor } : {}),
    include: ["customMetadata"],
  });

  const images = page.objects.flatMap<PublicGalleryImage>((object) => {
    const metadata = object.customMetadata;
    const appName = decodeMetadata(metadata?.appName);
    const width = Number(metadata?.width);
    const height = Number(metadata?.height);
    const createdAt = Number(metadata?.createdAt);
    const model = metadata?.model;
    const outputType = metadata?.outputType;
    if (!appName
      || !Number.isFinite(width)
      || !Number.isFinite(height)
      || !Number.isFinite(createdAt)
      || (model !== "openai:gpt-image@2" && model !== "ideogram:4@0")
      || !["logo", "app-icon", "mascot", "poster", "logo-with-name"].includes(outputType || "")) {
      return [];
    }

    return [{
      id: object.key,
      imageUrl: publicImageUrl(object.key),
      thumbnailUrl: publicThumbnailUrl(object.key),
      appName,
      model,
      outputType: outputType as PublicGalleryImage["outputType"],
      width,
      height,
      createdAt,
    }];
  });

  return {
    images,
    cursor: page.truncated ? page.cursor || null : null,
  };
}

async function listAllLiveGalleryImages() {
  const images: PublicGalleryImage[] = [];
  const seenCursors = new Set<string>();
  let cursor: string | undefined;

  do {
    const page = await listLiveGalleryImages(cursor);
    images.push(...page.images);
    cursor = page.cursor || undefined;
    if (cursor) {
      if (seenCursors.has(cursor)) throw new Error("R2 returned a repeated gallery cursor.");
      seenCursors.add(cursor);
    }
  } while (cursor);

  return images;
}

export async function listArchiveGalleryPage(pageNumber: number) {
  const bucket = await getGalleryBucket();
  const manifest = await readJsonObject<ArchiveManifest>(bucket, ARCHIVE_MANIFEST_KEY);
  if (!manifest
    || !Number.isInteger(manifest.pageCount)
    || manifest.pageCount < 1
    || !Number.isInteger(pageNumber)
    || pageNumber < 1
    || pageNumber > manifest.pageCount) {
    return { images: [] as PublicGalleryImage[], nextPage: null as number | null };
  }

  const pageKey = `${ARCHIVE_PREFIX}/pages/page-${String(pageNumber).padStart(4, "0")}.json`;
  const page = await readJsonObject<ArchiveGalleryImage[]>(bucket, pageKey);
  const images = (Array.isArray(page) ? page : []).flatMap<PublicGalleryImage>((image) => {
    if (!isGalleryImageKey(image.imageKey)
      || !image.id
      || !image.appName
      || !Number.isFinite(image.width)
      || !Number.isFinite(image.height)
      || !Number.isFinite(image.createdAt)
      || (image.model !== "openai:gpt-image@2" && image.model !== "ideogram:4@0")
      || !["logo", "app-icon", "mascot", "poster", "logo-with-name"].includes(image.outputType)) {
      return [];
    }

    return [{
      ...image,
      imageUrl: publicImageUrl(image.imageKey),
      thumbnailUrl: publicThumbnailUrl(image.imageKey),
    }];
  });

  return {
    images,
    nextPage: pageNumber < manifest.pageCount ? pageNumber + 1 : null,
  };
}

export async function listNumberedGalleryPage(pageNumber: number) {
  const bucket = await getGalleryBucket();
  const [liveImages, manifest] = await Promise.all([
    listAllLiveGalleryImages(),
    readJsonObject<ArchiveManifest>(bucket, ARCHIVE_MANIFEST_KEY),
  ]);

  if (!manifest
    || !Number.isInteger(manifest.total)
    || manifest.total < 0
    || !Number.isInteger(manifest.pageSize)
    || manifest.pageSize < 1
    || !Number.isInteger(manifest.pageCount)
    || manifest.pageCount < 1) {
    throw new Error("The gallery archive manifest is invalid.");
  }

  const total = liveImages.length + manifest.total;
  const pageCount = Math.max(1, Math.ceil(total / GALLERY_PAGE_SIZE));
  if (!Number.isInteger(pageNumber) || pageNumber < 1 || pageNumber > pageCount) return null;

  const start = (pageNumber - 1) * GALLERY_PAGE_SIZE;
  const end = Math.min(start + GALLERY_PAGE_SIZE, total);
  const pageLiveImages = liveImages.slice(start, end);
  const archiveLimit = GALLERY_PAGE_SIZE - pageLiveImages.length;
  const archiveOffset = Math.max(0, start - liveImages.length);
  const archivePageImages: PublicGalleryImage[] = [];

  if (archiveLimit > 0 && archiveOffset < manifest.total) {
    const firstArchivePage = Math.floor(archiveOffset / manifest.pageSize) + 1;
    const offsetInFirstPage = archiveOffset % manifest.pageSize;
    for (let archivePageNumber = firstArchivePage;
      archivePageNumber <= manifest.pageCount && archivePageImages.length < archiveLimit + offsetInFirstPage;
      archivePageNumber += 1) {
      const archivePage = await listArchiveGalleryPage(archivePageNumber);
      archivePageImages.push(...archivePage.images);
    }
  }

  const offsetInFirstArchivePage = archiveOffset % manifest.pageSize;
  const pageArchiveImages = archivePageImages.slice(
    offsetInFirstArchivePage,
    offsetInFirstArchivePage + archiveLimit,
  );

  return {
    images: [...pageLiveImages, ...pageArchiveImages],
    page: pageNumber,
    pageCount,
    pageSize: GALLERY_PAGE_SIZE,
    total,
  };
}

export function isGalleryImageKey(value: string) {
  return /^logo_\d{13}_[0-9a-f-]{36}\.(?:jpe?g|png|webp)$/i.test(value)
    || /^logo-gallery\/images\/[0-9a-f-]{36}\.(?:jpe?g|png|webp)$/i.test(value);
}
