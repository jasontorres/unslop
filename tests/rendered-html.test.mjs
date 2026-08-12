import assert from "node:assert/strict";
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
  assert.match(html, /aria-label="unslop\.site home"/i);
  assert.match(html, /131<!-- --> studies/i);
  assert.match(html, /<img src="\/previews\/editorial-serif\.png"/i);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
});

test("server-renders an AI-ready detail page", async () => {
  const response = await render("/site/editorial-serif");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>Editorial Serif — unslop\.site<\/title>/i);
  assert.match(html, /Editorial Serif interactive design reference/i);
  assert.match(html, /Copy agent brief/i);
  assert.match(html, /Copy HTML \+ CSS/i);
  assert.match(html, /AI-ready export/i);
});
