import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
const workerPromise = import(workerUrl.href).then(({ default: worker }) => worker);

const archiveImageId = "3f8d1825-f9a3-40ef-9d35-90e0c9d7f00b";
const archiveImageKey = `logo-gallery/images/${archiveImageId}.png`;
const liveImageId = "e8013692-008b-49a9-9a52-e7872ea6eef6";
const liveImageKey = `logo_8213182300000_${liveImageId}.png`;
const mockGalleryBucket = {
  async list() {
    return {
      objects: [{
        key: liveImageKey,
        size: 3,
        customMetadata: {
          appName: "Live%20Logo",
          model: "openai:gpt-image@2",
          outputType: "logo",
          width: "1024",
          height: "1024",
          createdAt: "1786817700000",
          imageUUID: liveImageId,
        },
      }],
      truncated: false,
    };
  },
  async get(key) {
    if (key === "logo-gallery/manifest.json") {
      return { body: new Blob([JSON.stringify({ total: 1, pageSize: 200, pageCount: 1 })]).stream() };
    }
    if (key === "logo-gallery/pages/page-0001.json") {
      return {
        body: new Blob([JSON.stringify([{
          id: archiveImageId,
          imageKey: archiveImageKey,
          appName: "Archive Logo",
          model: "ideogram:4@0",
          outputType: "app-icon",
          width: 2048,
          height: 2048,
          createdAt: 1786817600000,
        }])]).stream(),
      };
    }
    if (key === archiveImageKey || key === liveImageKey) {
      return {
        body: new Blob(["PNG"]).stream(),
        etag: "gallery-test-etag",
        httpMetadata: { contentType: "image/png", cacheControl: "public, max-age=31536000, immutable" },
      };
    }
    return null;
  },
  async put() {},
};

async function render(pathname = "/", environment = {}, init = {}) {
  const worker = await workerPromise;
  const headers = new Headers(init.headers);
  if (!headers.has("accept")) headers.set("accept", "text/html");

  return worker.fetch(
    new Request(`https://unslop.site${pathname}`, {
      ...init,
      headers,
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
      LOGO_GALLERY: mockGalleryBucket,
      ...environment,
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the unslop.site landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>unslop\.site — Interface References for Better AI Builds<\/title>/i);
  assert.match(html, /<link rel="canonical" href="https:\/\/unslop\.site"\/>/i);
  assert.match(html, /<meta property="og:image" content="https:\/\/unslop\.site\/og\.png"\/>/i);
  assert.match(html, /<meta property="og:image:width" content="1200"\/>/i);
  assert.match(html, /<meta property="og:image:height" content="630"\/>/i);
  assert.match(html, /<script type="application\/ld\+json">/i);
  assert.match(html, /aria-label="unslop\.site home"/i);
  assert.match(html, /href="\/" class="active" aria-current="page">Gallery/i);
  assert.match(html, /href="\/logo">Logo Maker/i);
  assert.match(html, /<h2>Browse<\/h2>/i);
  assert.match(html, /<img src="\/previews\/editorial-serif\.png"/i);
  assert.match(html, /href="\/featured"[^>]*>Featured/i);
  assert.match(html, /href="\/financial-apps"[^>]*>Financial Apps/i);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);

  const agencyCategory = html.indexOf("Software Agency");
  const financialCategory = html.indexOf("Financial Apps");
  const mobileCategory = html.indexOf("Mobile Apps");
  const socialCategory = html.indexOf("Social Media");
  assert.ok(agencyCategory >= 0 && financialCategory > agencyCategory);
  assert.ok(mobileCategory > financialCategory);
  assert.ok(socialCategory > mobileCategory);
});

test("serves the identity maker only under /logo", async () => {
  const [homeResponse, logoResponse, unlockedLogoResponse, galleryResponse] = await Promise.all([
    render(),
    render("/logo"),
    render("/logo?letmein=please"),
    render("/logo/gallery"),
  ]);
  assert.equal(logoResponse.status, 200);
  assert.equal(unlockedLogoResponse.status, 200);
  assert.equal(galleryResponse.status, 200);

  const [home, logo, unlockedLogo, gallery] = await Promise.all([
    homeResponse.text(),
    logoResponse.text(),
    unlockedLogoResponse.text(),
    galleryResponse.text(),
  ]);
  assert.doesNotMatch(home, /What would you like to make\?/i);
  assert.match(logo, /<title>Facet — Logo &amp; Mascot Maker<\/title>/i);
  assert.match(logo, /Logo Maker trial has officially ended/i);
  assert.match(logo, /We’ll be back/i);
  assert.match(logo, /Watch this space for further announcements/i);
  assert.doesNotMatch(logo, /What would you like to make\?/i);
  assert.match(unlockedLogo, /What would you like to make\?/i);
  assert.match(unlockedLogo, /Mobile app logo/i);
  assert.match(unlockedLogo, /Poster \+ app name/i);
  assert.match(unlockedLogo, /Logo \+ name/i);
  assert.match(unlockedLogo, /Create a variation/i);
  assert.match(unlockedLogo, /1 variation/i);
  assert.match(unlockedLogo, /Find existing logo/i);
  assert.match(unlockedLogo, />Model 1</i);
  assert.match(unlockedLogo, />Model 2</i);
  assert.match(unlockedLogo, /aria-controls="logo-history"/i);
  assert.doesNotMatch(unlockedLogo, />OpenAI Image</i);
  assert.doesNotMatch(unlockedLogo, />Ideogram 4</i);
  assert.match(logo, /aria-label="unslop\.site home"/i);
  assert.match(logo, /href="\/">Gallery/i);
  assert.match(logo, /href="\/logo" class="active" aria-current="page">Logo Maker/i);
  assert.match(logo, /name="robots" content="noindex, nofollow"/i);
  assert.doesNotMatch(home, /href="\/logo\/gallery"/i);
  assert.doesNotMatch(logo, /href="\/logo\/gallery"/i);
  assert.doesNotMatch(unlockedLogo, /Turn any idea into a/i);
  assert.doesNotMatch(unlockedLogo, /polygon|cost/i);
  assert.match(gallery, /<title>Generated Logo Showcase — unslop\.site<\/title>/i);
  assert.match(gallery, /Logo showcase/i);
  assert.match(gallery, /generated by users/i);
  assert.match(gallery, /name="robots" content="noindex, nofollow"/i);
});

test("gates the logo generator APIs behind the temporary access key", async () => {
  const generateInit = {
    method: "POST",
    headers: { accept: "application/json", "content-type": "application/json" },
    body: "{}",
  };
  const [generateDenied, generateAllowed, searchDenied, searchAllowed] = await Promise.all([
    render("/api/logo/generate", {}, generateInit),
    render("/api/logo/generate?letmein=please", {}, generateInit),
    render("/api/logo/search?q=Acorn"),
    render("/api/logo/search?letmein=please&q=Acorn"),
  ]);

  assert.equal(generateDenied.status, 403);
  assert.match((await generateDenied.json()).error, /trial has ended/i);
  assert.equal(generateAllowed.status, 400);
  assert.equal(searchDenied.status, 403);
  assert.match((await searchDenied.json()).error, /trial has ended/i);
  assert.equal(searchAllowed.status, 200);
  assert.deepEqual(await searchAllowed.json(), { configured: false, items: [] });
});

test("serves the shared paginated logo gallery from R2", async () => {
  const response = await render("/api/logo/gallery");
  assert.equal(response.status, 200);
  const payload = await response.json();
  assert.equal(payload.images.length, 2);
  assert.deepEqual(payload.images.map((image) => image.appName), ["Live Logo", "Archive Logo"]);
  assert.equal(payload.cursor, null);

  const archiveImage = payload.images.find((image) => image.id === archiveImageId);
  assert.equal(
    archiveImage?.imageUrl,
    `https://assets.unslop.site/logo-gallery/images/${archiveImageId}.png`,
  );

  const invalidCursorResponse = await render("/api/logo/gallery?cursor=not-a-valid-cursor");
  assert.equal(invalidCursorResponse.status, 400);
});

test("serves linkable category and featured collection pages", async () => {
  const [financialResponse, featuredResponse] = await Promise.all([
    render("/financial-apps"),
    render("/featured"),
  ]);

  assert.equal(financialResponse.status, 200);
  assert.equal(featuredResponse.status, 200);

  const [financial, featured] = await Promise.all([
    financialResponse.text(),
    featuredResponse.text(),
  ]);

  assert.match(financial, /<title>Financial Apps Interface References — unslop\.site<\/title>/i);
  assert.match(financial, /<link rel="canonical" href="https:\/\/unslop\.site\/financial-apps"\/>/i);
  assert.match(financial, /12(?:<!-- -->|\s)+references/i);
  assert.match(financial, /Centsible · Envelope Budget/i);
  assert.doesNotMatch(financial, /Editorial Serif design preview/i);
  assert.match(financial, /"@type":"CollectionPage"/i);

  assert.match(featured, /<title>Featured Interface References — unslop\.site<\/title>/i);
  assert.match(featured, /<link rel="canonical" href="https:\/\/unslop\.site\/featured"\/>/i);
  assert.match(featured, /8(?:<!-- -->|\s)+references/i);
  assert.match(featured, /Display \/ Anti-design/i);
});

test("server-renders an AI-ready detail page", async () => {
  const response = await render("/site/editorial-serif");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>Editorial Serif — unslop\.site<\/title>/i);
  assert.match(html, /Editorial Serif interactive design reference/i);
  assert.match(html, /Copy agent brief/i);
  assert.match(html, /Copy HTML \+ CSS/i);
  assert.match(html, /Copy AI guide URL/i);
  assert.match(html, /href="\/view\/editorial-serif"[^>]*>Full screen/i);
  assert.match(html, /AI-only reference/i);
  assert.match(html, /<link rel="canonical" href="https:\/\/unslop\.site\/site\/editorial-serif"\/>/i);
  assert.match(html, /"@type":"CreativeWork"/i);
});

test("serves a full-screen reference with persistent copy actions", async () => {
  const response = await render("/view/editorial-serif");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /class="fullscreen-reference-page"/i);
  assert.match(html, /class="fullscreen-reference-topbar"/i);
  assert.match(html, /aria-label="unslop\.site home"/i);
  assert.match(html, /Copy agent brief/i);
  assert.match(html, /Copy HTML and CSS/i);
  assert.match(html, /Copy AI guide URL/i);
  assert.match(html, /href="\/site\/editorial-serif"[^>]*aria-label="Exit full screen"/i);
  assert.match(html, /id="reference-frame"/i);
  assert.match(html, /Editorial Serif full-screen interactive preview/i);
  assert.match(html, /name="robots" content="noindex, nofollow"/i);
  assert.doesNotMatch(html, /Reference notes|Related directions|detail-footer/i);
});

test("keeps the AI guide URL isolated from gallery chrome", async () => {
  const response = await render("/reference/editorial-serif");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /class="isolated-reference-page"/i);
  assert.match(html, /Editorial Serif isolated interactive reference/i);
  assert.match(html, /name="robots" content="noindex, nofollow"/i);
  assert.doesNotMatch(html, /unslop\.site home|Reference notes|Related directions|detail-footer/i);
});

test("contains mobile and social embeds without shrinking desktop references", async () => {
  const [mobileResponse, socialResponse, financialResponse, desktopResponse] = await Promise.all([
    render("/site/food-delivery"),
    render("/site/spotify-share-card"),
    render("/site/centsible-envelope-budget"),
    render("/site/editorial-serif"),
  ]);

  const [mobile, social, financial, desktop] = await Promise.all([
    mobileResponse.text(),
    socialResponse.text(),
    financialResponse.text(),
    desktopResponse.text(),
  ]);

  assert.match(mobile, /fit=contain/i);
  assert.match(social, /fit=contain/i);
  assert.match(financial, /fit=contain/i);
  assert.doesNotMatch(desktop, /fit=contain/i);

  const canvasSource = await readFile(
    new URL("../public/source/design-canvas.jsx", import.meta.url),
    "utf8",
  );
  assert.match(canvasSource, /embeddedFit.*contain/);
  assert.match(canvasSource, /Math\.min\(\(vp\.w - gutter \* 2\) \/ width, \(vp\.h - gutter \* 2\) \/ height, 1\)/);
});

test("publishes crawl directives and every reference in the sitemap", async () => {
  const [robotsResponse, sitemapResponse] = await Promise.all([
    render("/robots.txt"),
    render("/sitemap.xml"),
  ]);

  assert.equal(robotsResponse.status, 200);
  assert.equal(sitemapResponse.status, 200);

  const robots = await robotsResponse.text();
  const sitemap = await sitemapResponse.text();
  assert.match(robots, /User-Agent: \*/i);
  assert.match(robots, /Allow: \//i);
  assert.match(robots, /Sitemap: https:\/\/unslop\.site\/sitemap\.xml/i);
  assert.match(sitemap, /<loc>https:\/\/unslop\.site\/<\/loc>/i);
  assert.match(sitemap, /<loc>https:\/\/unslop\.site\/featured<\/loc>/i);
  assert.doesNotMatch(sitemap, /<loc>https:\/\/unslop\.site\/logo<\/loc>/i);
  assert.doesNotMatch(sitemap, /<loc>https:\/\/unslop\.site\/logo\/browse<\/loc>/i);
  assert.doesNotMatch(sitemap, /<loc>https:\/\/unslop\.site\/logo\/gallery<\/loc>/i);
  assert.match(sitemap, /<loc>https:\/\/unslop\.site\/financial-apps<\/loc>/i);
  assert.match(sitemap, /<loc>https:\/\/unslop\.site\/site\/editorial-serif<\/loc>/i);
  assert.equal((sitemap.match(/<url>/g) ?? []).length, 154);
});
