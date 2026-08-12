import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
const workerPromise = import(workerUrl.href).then(({ default: worker }) => worker);

async function render(pathname = "/") {
  const worker = await workerPromise;

  return worker.fetch(
    new Request(`https://unslop.site${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
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
  assert.match(html, /131<!-- --> studies/i);
  assert.match(html, /<h2>Browse<\/h2>/i);
  assert.match(html, /<img src="\/previews\/editorial-serif\.png"/i);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);

  const agencyCategory = html.indexOf("Software Agency");
  const mobileCategory = html.indexOf("Mobile Apps");
  const socialCategory = html.indexOf("Social Media");
  assert.ok(agencyCategory >= 0 && mobileCategory > agencyCategory);
  assert.ok(socialCategory > mobileCategory);
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
  assert.match(html, /AI-only reference/i);
  assert.match(html, /<link rel="canonical" href="https:\/\/unslop\.site\/site\/editorial-serif"\/>/i);
  assert.match(html, /"@type":"CreativeWork"/i);
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
  const [mobileResponse, socialResponse, desktopResponse] = await Promise.all([
    render("/site/food-delivery"),
    render("/site/spotify-share-card"),
    render("/site/editorial-serif"),
  ]);

  const [mobile, social, desktop] = await Promise.all([
    mobileResponse.text(),
    socialResponse.text(),
    desktopResponse.text(),
  ]);

  assert.match(mobile, /fit=contain/i);
  assert.match(social, /fit=contain/i);
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
  assert.match(sitemap, /<loc>https:\/\/unslop\.site\/site\/editorial-serif<\/loc>/i);
  assert.equal((sitemap.match(/<url>/g) ?? []).length, 132);
});
