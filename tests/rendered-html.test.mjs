import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
const workerPromise = import(workerUrl.href).then(({ default: worker }) => worker);

const archiveImageId = "3f8d1825-f9a3-40ef-9d35-90e0c9d7f00b";
const archiveImageKey = `logo-gallery/images/${archiveImageId}.png`;
const liveImageId = "e8013692-008b-49a9-9a52-e7872ea6eef6";
const liveImageKey = `logo_8213182300000_${liveImageId}.jpg`;
const archiveImages = [
  {
    id: archiveImageId,
    imageKey: archiveImageKey,
    appName: "Archive Logo",
    model: "ideogram:4@0",
    outputType: "app-icon",
    width: 2048,
    height: 2048,
    createdAt: 1786817600000,
  },
  ...Array.from({ length: 200 }, (_, index) => {
    const id = `00000000-0000-4000-8000-${String(index + 1).padStart(12, "0")}`;
    return {
      id,
      imageKey: `logo-gallery/images/${id}.png`,
      appName: `Archive Logo ${index + 2}`,
      model: "ideogram:4@0",
      outputType: "app-icon",
      width: 1024,
      height: 1024,
      createdAt: 1786817599000 - index,
    };
  }),
];
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
      return { body: new Blob([JSON.stringify({ total: 201, pageSize: 200, pageCount: 2 })]).stream() };
    }
    if (key === "logo-gallery/pages/page-0001.json") {
      return { body: new Blob([JSON.stringify(archiveImages.slice(0, 200))]).stream() };
    }
    if (key === "logo-gallery/pages/page-0002.json") {
      return { body: new Blob([JSON.stringify(archiveImages.slice(200))]).stream() };
    }
    if (key === archiveImageKey || key === liveImageKey) {
      const isJpeg = key.endsWith(".jpg");
      return {
        body: new Blob([isJpeg ? "JPG" : "PNG"]).stream(),
        etag: "gallery-test-etag",
        httpMetadata: { contentType: isJpeg ? "image/jpeg" : "image/png", cacheControl: "public, max-age=31536000, immutable" },
      };
    }
    return null;
  },
  async put() {},
};

const waitlistRows = new Map();
const logoGenerationCounts = new Map();
const mockWaitlistDatabase = {
  prepare(query) {
    let values = [];
    return {
      bind(...boundValues) {
        values = boundValues;
        return this;
      },
      async run() {
        if (/INSERT INTO waitlist_entries/i.test(query)) {
          const [email, source] = values;
          const exists = waitlistRows.has(email);
          if (!exists) waitlistRows.set(email, { email, source });
          return { success: true, meta: { changes: exists ? 0 : 1 } };
        }

        if (/INSERT INTO logo_browser_generation_limits/i.test(query)) {
          const [browserId, maximum] = values;
          const current = logoGenerationCounts.get(browserId) ?? 0;
          if (current >= maximum) return { success: true, meta: { changes: 0 } };
          logoGenerationCounts.set(browserId, current + 1);
          return { success: true, meta: { changes: 1 } };
        }

        if (/UPDATE logo_browser_generation_limits/i.test(query)) {
          const [browserId] = values;
          const current = logoGenerationCounts.get(browserId) ?? 0;
          if (current > 0) logoGenerationCounts.set(browserId, current - 1);
          return { success: true, meta: { changes: current > 0 ? 1 : 0 } };
        }

        assert.fail(`Unexpected D1 query: ${query}`);
      },
    };
  },
};

const mockLogoRateLimiter = {
  async limit() {
    return { success: true };
  },
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
      DB: mockWaitlistDatabase,
      LOGO_GENERATION_RATE_LIMITER: mockLogoRateLimiter,
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
  assert.match(html, /href="\/logo\/gallery">Logo Gallery/i);
  assert.match(html, /<h2>Browse<\/h2>/i);
  assert.match(html, /<img src="\/previews\/editorial-serif\.png"/i);
  assert.match(html, /href="\/featured"[^>]*>Featured/i);
  assert.match(html, /href="\/financial-apps"[^>]*>Financial Apps/i);
  assert.match(html, /href="\/dashboards"[^>]*>Dashboards/i);
  assert.match(html, /href="\/animation"[^>]*>Animation/i);
  assert.match(html, /Claude 4\.7/i);
  assert.match(html, /Fable 5/i);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);

  const agencyCategory = html.indexOf("Software Agency");
  const financialCategory = html.indexOf("Financial Apps");
  const dashboardsCategory = html.indexOf('href="/dashboards"');
  const mobileCategory = html.indexOf("Mobile Apps");
  const socialCategory = html.indexOf("Social Media");
  assert.ok(agencyCategory >= 0 && financialCategory > agencyCategory);
  assert.ok(dashboardsCategory > financialCategory);
  assert.ok(mobileCategory > dashboardsCategory);
  assert.ok(socialCategory > mobileCategory);
});

test("serves the identity maker only under /logo", async () => {
  const [homeResponse, logoResponse, galleryResponse, historyResponse] = await Promise.all([
    render(),
    render("/logo"),
    render("/logo/gallery"),
    render("/logo/history"),
  ]);
  assert.equal(logoResponse.status, 200);
  assert.equal(galleryResponse.status, 200);
  assert.equal(historyResponse.status, 200);

  const [home, logo, gallery, history] = await Promise.all([
    homeResponse.text(),
    logoResponse.text(),
    galleryResponse.text(),
    historyResponse.text(),
  ]);
  assert.doesNotMatch(home, /What would you like to make\?/i);
  assert.match(logo, /<title>Facet — Logo &amp; Mascot Maker<\/title>/i);
  assert.match(logo, /class="poly-page logo-maker-page logo-creator-page"/i);
  assert.match(logo, /What would you like to make\?/i);
  assert.match(logo, /Mobile app logo/i);
  assert.match(logo, /Poster \+ app name/i);
  assert.match(logo, /Logo \+ name/i);
  assert.match(logo, /Create a variation/i);
  assert.match(logo, /1 variation/i);
  assert.match(logo, /Find existing logo/i);
  assert.match(logo, />Model 1</i);
  assert.match(logo, />Model 2</i);
  assert.match(logo, /aria-controls="logo-history"/i);
  assert.match(logo, /href="\/logo\/history"[^>]*>Browse all/i);
  assert.doesNotMatch(logo, />OpenAI Image</i);
  assert.doesNotMatch(logo, />Ideogram 4</i);
  assert.doesNotMatch(logo, /Logo Maker trial has officially ended|Join waitlist/i);
  assert.match(logo, /aria-label="unslop\.site home"/i);
  assert.match(logo, /href="\/">Gallery/i);
  assert.match(logo, /href="\/logo" class="active" aria-current="page">Logo Maker/i);
  assert.match(logo, /href="\/logo\/gallery">Logo Gallery/i);
  assert.doesNotMatch(logo, /name="robots" content="noindex, nofollow"/i);
  assert.match(home, /href="\/logo\/gallery">Logo Gallery/i);
  assert.doesNotMatch(logo, /Turn any idea into a/i);
  assert.doesNotMatch(logo, /polygon|cost/i);
  assert.match(gallery, /<title>Generated Logo Showcase — unslop\.site<\/title>/i);
  assert.match(gallery, /Logo showcase/i);
  assert.match(gallery, /generated by users/i);
  assert.match(gallery, /href="\/logo\/gallery" class="active" aria-current="page">Logo Gallery/i);
  assert.doesNotMatch(gallery, /name="robots" content="noindex, nofollow"/i);
  assert.match(history, /<title>Your Logo History — unslop\.site<\/title>/i);
  assert.match(history, /Your history\./i);
  assert.match(history, /Private to this browser/i);
  assert.match(history, /Your saved work will live here/i);
  assert.match(history, /href="\/logo\/gallery">Logo Gallery/i);
  assert.match(history, /name="robots" content="noindex, nofollow"/i);
});

test("stores valid waitlist signups in D1 without duplicate rows", async () => {
  waitlistRows.clear();
  const signup = (body) => render("/api/waitlist", {}, {
    method: "POST",
    headers: { accept: "application/json", "content-type": "application/json" },
    body: JSON.stringify(body),
  });

  const firstResponse = await signup({ email: "  HELLO@example.com  ", website: "" });
  assert.equal(firstResponse.status, 200);
  assert.equal(firstResponse.headers.get("cache-control"), "no-store");
  assert.deepEqual(await firstResponse.json(), { ok: true });
  assert.deepEqual(waitlistRows.get("hello@example.com"), {
    email: "hello@example.com",
    source: "logo-maker",
  });

  const duplicateResponse = await signup({ email: "hello@example.com" });
  assert.equal(duplicateResponse.status, 200);
  assert.equal(waitlistRows.size, 1);

  const invalidResponse = await signup({ email: "not-an-email" });
  assert.equal(invalidResponse.status, 400);
  assert.match((await invalidResponse.json()).error, /valid email/i);
  assert.equal(waitlistRows.size, 1);

  const honeypotResponse = await signup({ email: "bot@example.com", website: "https://spam.example" });
  assert.equal(honeypotResponse.status, 200);
  assert.equal(waitlistRows.size, 1);
});

test("serves the public logo generator APIs", async () => {
  const generateInit = {
    method: "POST",
    headers: { accept: "application/json", "content-type": "application/json" },
    body: "{}",
  };
  const [generateResponse, searchResponse] = await Promise.all([
    render("/api/logo/generate", {}, generateInit),
    render("/api/logo/search?q=Acorn"),
  ]);

  assert.equal(generateResponse.status, 400);
  assert.match((await generateResponse.json()).error, /app name and short context/i);
  assert.equal(searchResponse.status, 200);
  assert.deepEqual(await searchResponse.json(), { configured: false, items: [] });
});

test("limits logo generation overall and to 10 successful generations per browser", async () => {
  logoGenerationCounts.clear();
  const originalFetch = globalThis.fetch;
  let runwareCalls = 0;
  let runwareTask;
  globalThis.fetch = async (input, init) => {
    const url = String(input);
    if (url === "https://api.runware.ai/v1") {
      runwareCalls += 1;
      runwareTask = JSON.parse(String(init?.body))[0];
      return Response.json({
        data: [{
          imageURL: "https://im.runware.ai/test-logo.jpg",
          imageUUID: `00000000-0000-4000-8000-${String(runwareCalls).padStart(12, "0")}`,
          cost: 0.006,
        }],
      });
    }
    if (url === "https://im.runware.ai/test-logo.jpg") {
      return new Response("JPG", { headers: { "Content-Type": "image/jpeg" } });
    }
    return originalFetch(input);
  };

  const generate = (cookie = "", environment = {}) => render("/api/logo/generate", {
    RUNWARE_API_KEY: "test-runware-key",
    ...environment,
  }, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      ...(cookie ? { cookie } : {}),
    },
    body: JSON.stringify({ appName: "Acorn", context: "A calm savings app" }),
  });

  try {
    let cookie = "";
    for (let index = 0; index < 10; index += 1) {
      const response = await generate(cookie);
      assert.equal(response.status, 200);
      if (!cookie) {
        const setCookie = response.headers.get("set-cookie") ?? "";
        assert.match(setCookie, /^unslop_logo_browser=[^;]+;/i);
        assert.match(setCookie, /HttpOnly/i);
        assert.match(setCookie, /Secure/i);
        cookie = setCookie.split(";", 1)[0];
      }
      if (index === 0) {
        const payload = await response.json();
        assert.equal(payload.images[0].cost, 0.006);
      }
    }

    const browserLimited = await generate(cookie);
    assert.equal(browserLimited.status, 429);
    assert.match((await browserLimited.json()).error, /limit of 10 generations/i);
    assert.equal(runwareCalls, 10);
    assert.equal(runwareTask.providerSettings.openai.quality, "low");
    assert.equal(runwareTask.includeCost, true);
    assert.equal(runwareTask.outputQuality, 95);
    assert.equal(runwareTask.deliveryMethod, "sync");

    logoGenerationCounts.clear();
    const overallLimited = await generate("", {
      LOGO_GENERATION_RATE_LIMITER: { async limit() { return { success: false }; } },
    });
    assert.equal(overallLimited.status, 429);
    assert.equal(overallLimited.headers.get("retry-after"), "60");
    assert.match((await overallLimited.json()).error, /try again in a minute/i);
    assert.deepEqual([...logoGenerationCounts.values()], [0]);
    assert.equal(runwareCalls, 10);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("creates the browser generation limit schema when a deployment skipped migrations", async () => {
  let schemaReady = false;
  let tableCreates = 0;
  let indexCreates = 0;
  let generationCount = 0;
  const databaseWithoutMigrations = {
    prepare(query) {
      let values = [];
      return {
        bind(...boundValues) {
          values = boundValues;
          return this;
        },
        async run() {
          if (/CREATE TABLE IF NOT EXISTS logo_browser_generation_limits/i.test(query)) {
            tableCreates += 1;
            schemaReady = true;
            return { success: true, meta: { changes: 0 } };
          }
          if (/CREATE INDEX IF NOT EXISTS logo_browser_generation_limits_updated_at_idx/i.test(query)) {
            indexCreates += 1;
            return { success: true, meta: { changes: 0 } };
          }
          if (/INSERT INTO logo_browser_generation_limits/i.test(query)) {
            if (!schemaReady) throw new Error("D1_ERROR: no such table: logo_browser_generation_limits");
            assert.equal(values[1], 10);
            generationCount += 1;
            return { success: true, meta: { changes: 1 } };
          }
          assert.fail(`Unexpected D1 query: ${query}`);
        },
      };
    },
  };

  const originalFetch = globalThis.fetch;
  globalThis.fetch = async (input) => {
    const url = String(input);
    if (url === "https://api.runware.ai/v1") {
      return Response.json({
        data: [{
          imageURL: "https://im.runware.ai/self-healed-logo.jpg",
          imageUUID: "00000000-0000-4000-8000-000000000099",
        }],
      });
    }
    if (url === "https://im.runware.ai/self-healed-logo.jpg") {
      return new Response("JPG", { headers: { "Content-Type": "image/jpeg" } });
    }
    return originalFetch(input);
  };

  try {
    const response = await render("/api/logo/generate", {
      DB: databaseWithoutMigrations,
      RUNWARE_API_KEY: "test-runware-key",
    }, {
      method: "POST",
      headers: { accept: "application/json", "content-type": "application/json" },
      body: JSON.stringify({ appName: "Acorn", context: "A calm savings app" }),
    });

    assert.equal(response.status, 200);
    assert.equal((await response.json()).images.length, 1);
    assert.equal(tableCreates, 1);
    assert.equal(indexCreates, 1);
    assert.equal(generationCount, 1);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("serves the shared paginated logo gallery from R2", async () => {
  const response = await render("/api/logo/gallery");
  assert.equal(response.status, 200);
  const payload = await response.json();
  assert.equal(payload.images.length, 200);
  assert.deepEqual(payload.images.slice(0, 2).map((image) => image.appName), ["Live Logo", "Archive Logo"]);
  assert.equal(payload.page, 1);
  assert.equal(payload.pageCount, 2);
  assert.equal(payload.total, 202);

  const liveImage = payload.images.find((image) => image.id === liveImageKey);
  assert.equal(liveImage?.imageUrl, `https://assets.unslop.site/${liveImageKey}`);

  const archiveImage = payload.images.find((image) => image.id === archiveImageId);
  assert.equal(
    archiveImage?.imageUrl,
    `https://assets.unslop.site/logo-gallery/images/${archiveImageId}.png`,
  );
  assert.equal(
    archiveImage?.thumbnailUrl,
    `https://assets.unslop.site/cdn-cgi/image/width=512,fit=scale-down,format=auto,quality=80/logo-gallery/images/${archiveImageId}.png`,
  );

  const secondPageResponse = await render("/api/logo/gallery?page=2");
  assert.equal(secondPageResponse.status, 200);
  const secondPage = await secondPageResponse.json();
  assert.equal(secondPage.page, 2);
  assert.equal(secondPage.images.length, 2);
  assert.deepEqual(secondPage.images.map((image) => image.appName), ["Archive Logo 200", "Archive Logo 201"]);

  const invalidPageResponse = await render("/api/logo/gallery?page=not-a-page");
  assert.equal(invalidPageResponse.status, 400);
});

test("serves linkable category and featured collection pages", async () => {
  const [financialResponse, dashboardsResponse, saasResponse, animationResponse, featuredResponse] = await Promise.all([
    render("/financial-apps"),
    render("/dashboards"),
    render("/saas"),
    render("/animation"),
    render("/featured"),
  ]);

  assert.equal(financialResponse.status, 200);
  assert.equal(dashboardsResponse.status, 200);
  assert.equal(saasResponse.status, 200);
  assert.equal(animationResponse.status, 200);
  assert.equal(featuredResponse.status, 200);

  const [financial, dashboards, saas, animation, featured] = await Promise.all([
    financialResponse.text(),
    dashboardsResponse.text(),
    saasResponse.text(),
    animationResponse.text(),
    featuredResponse.text(),
  ]);

  assert.match(financial, /<title>Financial Apps Interface References — unslop\.site<\/title>/i);
  assert.match(financial, /<link rel="canonical" href="https:\/\/unslop\.site\/financial-apps"\/>/i);
  assert.match(financial, /12(?:<!-- -->|\s)+references/i);
  assert.match(financial, /Centsible · Envelope Budget/i);
  assert.match(financial, /GPT 5\.6 Sol/i);
  assert.doesNotMatch(financial, /Editorial Serif design preview/i);
  assert.match(financial, /"@type":"CollectionPage"/i);

  assert.match(dashboards, /<title>Dashboards Interface References — unslop\.site<\/title>/i);
  assert.match(dashboards, /<link rel="canonical" href="https:\/\/unslop\.site\/dashboards"\/>/i);
  assert.match(dashboards, /12(?:<!-- -->|\s)+references/i);
  assert.match(dashboards, /Meridian · Hospital Command/i);
  assert.doesNotMatch(dashboards, /Nock · Activation/i);
  assert.match(dashboards, /Grok 4\.6/i);
  assert.doesNotMatch(dashboards, /Editorial Serif design preview/i);

  assert.match(saas, /<title>SaaS Interface References — unslop\.site<\/title>/i);
  assert.match(saas, /<link rel="canonical" href="https:\/\/unslop\.site\/saas"\/>/i);
  assert.match(saas, /20(?:<!-- -->|\s)+references/i);
  assert.match(saas, /Bento Wall/i);
  assert.match(saas, /Nock · Activation/i);
  assert.match(saas, /Tollgate · API Console/i);
  assert.match(saas, /GLM 5\.3 Flash/i);
  assert.match(saas, /Grok 4\.6/i);
  assert.doesNotMatch(saas, /Editorial Serif design preview/i);
  assert.match(saas, /"@type":"CollectionPage"/i);

  assert.match(animation, /<title>Animation Interface References — unslop\.site<\/title>/i);
  assert.match(animation, /<link rel="canonical" href="https:\/\/unslop\.site\/animation"\/>/i);
  assert.match(animation, /16(?:<!-- -->|\s)+references/i);
  assert.match(animation, /Solstice · Aurora Drift/i);
  assert.match(animation, /Voltlane · Glitch Neon/i);
  assert.match(animation, /Helix · DNA Spin/i);
  assert.match(animation, /Ampersand · Projector Flicker/i);
  assert.match(animation, /Fable 5/i);
  assert.doesNotMatch(animation, /Editorial Serif design preview/i);

  assert.match(featured, /<title>Featured Interface References — unslop\.site<\/title>/i);
  assert.match(featured, /<link rel="canonical" href="https:\/\/unslop\.site\/featured"\/>/i);
  assert.match(featured, /12(?:<!-- -->|\s)+references/i);
  assert.match(featured, /Display \/ Anti-design/i);
  assert.match(featured, /Nock · Activation/i);
  assert.match(featured, /Helix · DNA Spin/i);
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
  assert.match(html, /Claude 4\.7/i);
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
  const [mobileResponse, socialResponse, financialResponse, desktopResponse, dashboardResponse] = await Promise.all([
    render("/site/food-delivery"),
    render("/site/spotify-share-card"),
    render("/site/centsible-envelope-budget"),
    render("/site/editorial-serif"),
    render("/site/meridian-hospital-command"),
  ]);

  const [mobile, social, financial, desktop, dashboard] = await Promise.all([
    mobileResponse.text(),
    socialResponse.text(),
    financialResponse.text(),
    desktopResponse.text(),
    dashboardResponse.text(),
  ]);

  assert.match(mobile, /fit=contain/i);
  assert.match(social, /fit=contain/i);
  assert.match(financial, /fit=contain/i);
  assert.match(financial, /GPT 5\.6 Sol/i);
  assert.doesNotMatch(desktop, /fit=contain/i);
  assert.match(desktop, /Claude 4\.7/i);
  assert.doesNotMatch(dashboard, /fit=contain/i);
  assert.match(dashboard, /Grok 4\.6/i);

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
  assert.match(sitemap, /<loc>https:\/\/unslop\.site\/logo<\/loc>/i);
  assert.doesNotMatch(sitemap, /<loc>https:\/\/unslop\.site\/logo\/browse<\/loc>/i);
  assert.match(sitemap, /<loc>https:\/\/unslop\.site\/logo\/gallery<\/loc>/i);
  assert.match(sitemap, /<loc>https:\/\/unslop\.site\/financial-apps<\/loc>/i);
  assert.match(sitemap, /<loc>https:\/\/unslop\.site\/dashboards<\/loc>/i);
  assert.match(sitemap, /<loc>https:\/\/unslop\.site\/saas<\/loc>/i);
  assert.match(sitemap, /<loc>https:\/\/unslop\.site\/site\/editorial-serif<\/loc>/i);
  assert.match(sitemap, /<loc>https:\/\/unslop\.site\/animation<\/loc>/i);
  assert.doesNotMatch(sitemap, /<loc>https:\/\/unslop\.site\/industry-heroes<\/loc>/i);
  assert.match(sitemap, /<loc>https:\/\/unslop\.site\/site\/nock-activation<\/loc>/i);
  assert.match(sitemap, /<loc>https:\/\/unslop\.site\/site\/solstice-aurora-drift<\/loc>/i);
  assert.match(sitemap, /<loc>https:\/\/unslop\.site\/site\/helix-dna-spin<\/loc>/i);
  assert.equal((sitemap.match(/<url>/g) ?? []).length, 219);
});
