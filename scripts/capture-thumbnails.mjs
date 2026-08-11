import { mkdir, writeFile } from "node:fs/promises";
import { allSites, getSourceUrl } from "../app/data.ts";

const webdriver = process.env.WEBDRIVER_URL || "http://127.0.0.1:4444";
const origin = process.env.GALLERY_ORIGIN || "http://localhost:3000";
const outputDirectory = new URL("../public/previews/", import.meta.url);
const requestedSlugs = new Set(process.argv.slice(2));
const requestedSections = new Set(
  (process.env.CAPTURE_SECTIONS || "").split(",").map((value) => value.trim()).filter(Boolean),
);
const selectedSites = requestedSlugs.size || requestedSections.size
  ? allSites.filter((site) => requestedSlugs.has(site.slug) || requestedSections.has(site.sectionId))
  : allSites;

async function request(path, options = {}) {
  const response = await fetch(`${webdriver}${path}`, {
    ...options,
    headers: { "content-type": "application/json", ...(options.headers || {}) },
  });
  const payload = await response.json();
  if (!response.ok || payload.value?.error) {
    throw new Error(payload.value?.message || `WebDriver request failed: ${response.status}`);
  }
  return payload.value;
}

async function waitForArtboard(sessionId) {
  const started = Date.now();
  while (Date.now() - started < 20000) {
    const ready = await request(`/session/${sessionId}/execute/sync`, {
      method: "POST",
      body: JSON.stringify({
        script: "return document.readyState === 'complete' && document.querySelector('.dc-embedded-card, .dc-card') !== null",
        args: [],
      }),
    });
    if (ready) {
      await new Promise((resolve) => setTimeout(resolve, 450));
      return;
    }
    await new Promise((resolve) => setTimeout(resolve, 180));
  }
  throw new Error("Timed out waiting for the design artboard");
}

await mkdir(outputDirectory, { recursive: true });

const session = await request("/session", {
  method: "POST",
  body: JSON.stringify({
    capabilities: {
      alwaysMatch: {
        browserName: "firefox",
        "moz:firefoxOptions": { args: ["-headless"] },
      },
    },
  }),
});
const sessionId = session.sessionId;

try {
  await request(`/session/${sessionId}/window/rect`, {
    method: "POST",
    body: JSON.stringify({ width: 720, height: 520 }),
  });

  for (const [index, site] of selectedSites.entries()) {
    const pageUrl = `${origin}${getSourceUrl(site)}&embed=1`;
    await request(`/session/${sessionId}/url`, {
      method: "POST",
      body: JSON.stringify({ url: pageUrl }),
    });
    await waitForArtboard(sessionId);
    const screenshot = await request(`/session/${sessionId}/screenshot`);
    await writeFile(new URL(`${site.slug}.png`, outputDirectory), Buffer.from(screenshot, "base64"));
    process.stdout.write(`[${String(index + 1).padStart(3, "0")}/${selectedSites.length}] ${site.slug}\n`);
  }
} finally {
  await request(`/session/${sessionId}`, { method: "DELETE", body: "{}" }).catch(() => {});
}
