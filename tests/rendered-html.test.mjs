import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
const workerPromise = import(workerUrl.href).then(({ default: worker }) => worker);

async function render(pathname = "/", init = {}) {
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
  const [homeResponse, logoResponse, unlockedLogoResponse] = await Promise.all([
    render(),
    render("/logo"),
    render("/logo?letmein=please"),
  ]);
  assert.equal(logoResponse.status, 200);
  assert.equal(unlockedLogoResponse.status, 200);

  const [home, logo, unlockedLogo] = await Promise.all([
    homeResponse.text(),
    logoResponse.text(),
    unlockedLogoResponse.text(),
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
  assert.doesNotMatch(unlockedLogo, /Turn any idea into a/i);
  assert.doesNotMatch(unlockedLogo, /polygon|cost/i);
});

test("gates the logo generator APIs behind the temporary access key", async () => {
  const [generateDenied, searchDenied] = await Promise.all([
    render("/api/logo/generate", {
      method: "POST",
      headers: { accept: "application/json", "content-type": "application/json" },
      body: "{}",
    }),
    render("/api/logo/search?q=Acorn", { headers: { accept: "application/json" } }),
  ]);

  assert.equal(generateDenied.status, 403);
  assert.match((await generateDenied.json()).error, /trial has ended/i);
  assert.equal(searchDenied.status, 403);
  assert.match((await searchDenied.json()).error, /trial has ended/i);
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
  assert.match(sitemap, /<loc>https:\/\/unslop\.site\/financial-apps<\/loc>/i);
  assert.match(sitemap, /<loc>https:\/\/unslop\.site\/site\/editorial-serif<\/loc>/i);
  assert.equal((sitemap.match(/<url>/g) ?? []).length, 154);
});
