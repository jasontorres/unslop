import { NextResponse } from "next/server";
import { storeGalleryImage } from "../gallery/storage";
import {
  browserGenerationLimit,
  browserIdentity,
  dailyGenerationLimit,
  generationRateAllowed,
  releaseBrowserGeneration,
  releaseDailyGeneration,
  reserveBrowserGeneration,
  reserveDailyGeneration,
  type BrowserIdentity,
  workerBinding,
} from "./rate-limit";
import { requestSecurityFailure } from "./request-security";
import { validateTurnstile } from "./turnstile";

export const runtime = "edge";

const GENERATION_MODEL = "openai:gpt-image@2";
const OUTPUT_TYPES = ["logo", "app-icon", "mascot", "poster", "logo-with-name"] as const;
type OutputType = (typeof OUTPUT_TYPES)[number];

type GenerateBody = {
  appName?: unknown;
  context?: unknown;
  outputType?: unknown;
  sourceImage?: unknown;
  turnstileToken?: unknown;
};

const outputSpecs: Record<OutputType, { width: number; height: number; direction: string }> = {
  logo: {
    width: 1024,
    height: 1024,
    direction: "Create a standalone logo symbol with no words or letters. It must have a distinctive silhouette and work in one color as well as full color.",
  },
  "app-icon": {
    width: 1024,
    height: 1024,
    direction: "Create a mobile app logo designed to read clearly at small sizes. Use a bold centered subject and a strong square icon composition. Do not show a phone or app-store mockup.",
  },
  mascot: {
    width: 1024,
    height: 1024,
    direction: "Create one memorable full mascot character with a clear pose, expressive personality, readable silhouette, and no words or letters.",
  },
  poster: {
    width: 1024,
    height: 1536,
    direction: "Create a portrait brand poster. Feature the app name exactly as provided as the main headline, paired with one strong illustrative symbol or character. Keep the typography large and legible.",
  },
  "logo-with-name": {
    width: 1536,
    height: 1024,
    direction: "Create a complete horizontal brand lockup that pairs one memorable symbol with the app name exactly as provided. The name must be large, correctly spelled, and easy to read.",
  },
};

function cleanText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isAllowedSource(value: string) {
  if (!value) return true;
  if (value.startsWith("data:image/")) return value.length <= 7_500_000;
  try {
    return new URL(value).protocol === "https:" && value.length <= 2048;
  } catch {
    return false;
  }
}

function json(payload: Record<string, unknown>, status = 200, identity?: BrowserIdentity, retryAfter?: number) {
  const headers = new Headers({ "Cache-Control": "no-store" });
  if (identity?.setCookie) headers.set("Set-Cookie", identity.setCookie);
  if (retryAfter) headers.set("Retry-After", String(retryAfter));
  return NextResponse.json(payload, { status, headers });
}

export async function POST(request: Request) {
  let reservedBrowserId = "";
  let reservedBudgetDay = "";
  let generationCompleted = false;
  try {
    const securityFailure = requestSecurityFailure(request);
    if (securityFailure) {
      console.warn("Logo generation request rejected", securityFailure.reason);
      return json({ error: securityFailure.error }, securityFailure.status);
    }

    let body: GenerateBody;
    try {
      body = (await request.json()) as GenerateBody;
    } catch {
      return json({ error: "The request body must be valid JSON." }, 400);
    }
    const appName = cleanText(body.appName, 60);
    const context = cleanText(body.context, 240);
    const sourceImage = cleanText(body.sourceImage, 7_500_000);
    const outputType = OUTPUT_TYPES.includes(body.outputType as OutputType) ? (body.outputType as OutputType) : "app-icon";
    const spec = outputSpecs[outputType];

    if (!appName || !context) {
      return json({ error: "An app name and short context are required." }, 400);
    }
    if (!isAllowedSource(sourceImage)) {
      return json({ error: "The source must be a small image upload or public HTTPS image URL." }, 400);
    }

    const turnstile = await validateTurnstile(request, body.turnstileToken);
    if (!turnstile.ok) {
      console.warn("Logo generation security check failed", turnstile.reason);
      return json({ error: turnstile.error }, turnstile.status);
    }

    const apiKey = await workerBinding<string>("RUNWARE_API_KEY") || process.env.RUNWARE_API_KEY;
    if (!apiKey) return json({ error: "Image generation isn’t configured yet." }, 503);

    const identity = await browserIdentity(request);
    const rateLimit = await generationRateAllowed(request, identity.id);
    if (!rateLimit.allowed) {
      console.warn("Logo generation rate limited", rateLimit.scope);
      const error = rateLimit.scope === "client"
        ? "You’re creating logos too quickly. Try again in a minute."
        : "Logo creation is busy right now. Try again in a minute.";
      return json({ error }, 429, identity, 60);
    }

    const browserAllowed = await reserveBrowserGeneration(identity.id);
    if (!browserAllowed) {
      return json({ error: `This browser has reached its limit of ${browserGenerationLimit} generations.` }, 429, identity);
    }
    reservedBrowserId = identity.id;

    const dailyReservation = await reserveDailyGeneration();
    if (!dailyReservation.allowed) {
      console.warn("Logo generation daily budget reached", dailyReservation.budgetDay);
      return json({ error: `The daily limit of ${dailyGenerationLimit.toLocaleString("en-US")} logo generations has been reached. Try again tomorrow.` }, 429, identity);
    }
    reservedBudgetDay = dailyReservation.budgetDay;

    const prompt = [
      `Design a polished visual identity direction for an app named “${appName}”.`,
      `App context: ${context}.`,
      spec.direction,
      sourceImage
        ? "Transform the subject in the reference image. Preserve its most recognizable silhouette, proportions, expression, and core colors while simplifying it into a charming graphic identity."
        : "Invent a memorable visual metaphor from the app name and context.",
      "Art direction: friendly modern cartoon style, bold readable silhouette, clean faceted shapes, crisp edges, subtle dimensional shading, restrained color palette, playful but professional.",
      "Create one finished design. Return a single result, never multiple variations, a contact sheet, a grid, or repeated versions inside the image.",
      "No device mockup, stock presentation board, comparison layout, watermark, tiny decorative clutter, or unrelated objects. Use a clean flat warm-white background with no cast shadow or floor line.",
    ].join(" ");

    const task: Record<string, unknown> = {
      taskType: "imageInference",
      taskUUID: crypto.randomUUID(),
      model: GENERATION_MODEL,
      positivePrompt: prompt,
      width: spec.width,
      height: spec.height,
      numberResults: 1,
      outputFormat: "JPG",
      outputQuality: 95,
      outputType: "URL",
      includeCost: true,
      deliveryMethod: "sync",
    };

    task.providerSettings = { openai: { quality: "low", background: "opaque", moderation: "auto" } };
    if (sourceImage) task.inputs = { referenceImages: [sourceImage] };

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 240_000);
    let runwareResponse: Response;
    try {
      runwareResponse = await fetch("https://api.runware.ai/v1", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify([task]),
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timeout);
    }

    const payload = await runwareResponse.json() as {
      data?: Array<{ imageURL?: string; imageUUID?: string; cost?: number }>;
      errors?: Array<{ message?: string }>;
      error?: string;
    };
    const images = (payload.data ?? [])
      .filter((item): item is { imageURL: string; imageUUID?: string; cost?: number } => Boolean(item.imageURL))
      .map((item) => ({ imageURL: item.imageURL, imageUUID: item.imageUUID, cost: item.cost }));

    if (!runwareResponse.ok || !images.length) {
      const providerMessage = payload.errors?.[0]?.message || payload.error;
      console.error("Runware generation failed", runwareResponse.status, providerMessage || "No image returned");
      return json({ error: providerMessage || "The image model couldn’t complete that request." }, 502, identity);
    }

    const galleryWrites = await Promise.allSettled(images.map((image) => storeGalleryImage({
      ...image,
      appName,
      model: GENERATION_MODEL,
      outputType,
      width: spec.width,
      height: spec.height,
    })));
    for (const write of galleryWrites) {
      if (write.status === "rejected") {
        console.error("Logo gallery save failed", write.reason instanceof Error ? write.reason.message : write.reason);
      }
    }

    generationCompleted = true;
    return json({ images, model: GENERATION_MODEL, outputType, width: spec.width, height: spec.height }, 200, identity);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    const timedOut = error instanceof Error && error.name === "AbortError";
    const infrastructureFailed = /\bD1\b|DB D1 binding|rate limiter/i.test(errorMessage);
    const message = timedOut
      ? "The image model took too long to respond. Please try again."
      : infrastructureFailed
        ? "Logo creation is temporarily unavailable. Please try again shortly."
        : "The image model couldn’t complete that request.";
    console.error("Generation route error", errorMessage);
    return json({ error: message }, infrastructureFailed ? 503 : 500);
  } finally {
    if (reservedBrowserId && !generationCompleted) {
      try {
        await releaseBrowserGeneration(reservedBrowserId);
      } catch (error) {
        console.error("Browser generation reservation release failed", error instanceof Error ? error.message : error);
      }
    }
    if (reservedBudgetDay && !generationCompleted) {
      try {
        await releaseDailyGeneration(reservedBudgetDay);
      } catch (error) {
        console.error("Daily generation reservation release failed", error instanceof Error ? error.message : error);
      }
    }
  }
}
