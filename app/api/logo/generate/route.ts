import { NextResponse } from "next/server";
import { hasLogoApiAccess, logoAccessDeniedResponse } from "../../../logo/access";
import { storeGalleryImage } from "../gallery/storage";

export const runtime = "edge";

const MODELS = ["openai:gpt-image@2", "ideogram:4@0"] as const;
const OUTPUT_TYPES = ["logo", "app-icon", "mascot", "poster", "logo-with-name"] as const;
type ModelId = (typeof MODELS)[number];
type OutputType = (typeof OUTPUT_TYPES)[number];

type GenerateBody = {
  appName?: unknown;
  context?: unknown;
  outputType?: unknown;
  model?: unknown;
  sourceImage?: unknown;
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

const ideogramDimensions: Record<OutputType, { width: number; height: number }> = {
  logo: { width: 2048, height: 2048 },
  "app-icon": { width: 2048, height: 2048 },
  mascot: { width: 2048, height: 2048 },
  poster: { width: 1664, height: 2496 },
  "logo-with-name": { width: 2496, height: 1664 },
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

export async function POST(request: Request) {
  if (!hasLogoApiAccess(request)) return logoAccessDeniedResponse();

  try {
    const body = (await request.json()) as GenerateBody;
    const appName = cleanText(body.appName, 60);
    const context = cleanText(body.context, 240);
    const sourceImage = cleanText(body.sourceImage, 7_500_000);
    const model = MODELS.includes(body.model as ModelId) ? (body.model as ModelId) : "openai:gpt-image@2";
    const outputType = OUTPUT_TYPES.includes(body.outputType as OutputType) ? (body.outputType as OutputType) : "app-icon";
    const spec = outputSpecs[outputType];
    const dimensions = model === "ideogram:4@0" ? ideogramDimensions[outputType] : spec;

    if (!appName || !context) {
      return NextResponse.json({ error: "An app name and short context are required." }, { status: 400 });
    }
    if (!isAllowedSource(sourceImage)) {
      return NextResponse.json({ error: "The source must be a small image upload or public HTTPS image URL." }, { status: 400 });
    }

    const apiKey = process.env.RUNWARE_API_KEY;
    if (!apiKey) return NextResponse.json({ error: "Image generation isn’t configured yet." }, { status: 503 });

    const prompt = [
      `Design a polished visual identity direction for an app named “${appName}”.`,
      `App context: ${context}.`,
      spec.direction,
      sourceImage && model === "openai:gpt-image@2"
        ? "Transform the subject in the reference image. Preserve its most recognizable silhouette, proportions, expression, and core colors while simplifying it into a charming graphic identity."
        : "Invent a memorable visual metaphor from the app name and context.",
      "Art direction: friendly modern cartoon style, bold readable silhouette, clean faceted shapes, crisp edges, subtle dimensional shading, restrained color palette, playful but professional.",
      "Create one finished design. Return a single result, never multiple variations, a contact sheet, a grid, or repeated versions inside the image.",
      "No device mockup, stock presentation board, comparison layout, watermark, tiny decorative clutter, or unrelated objects. Use a clean flat warm-white background with no cast shadow or floor line.",
    ].join(" ");

    const task: Record<string, unknown> = {
      taskType: "imageInference",
      taskUUID: crypto.randomUUID(),
      model,
      positivePrompt: prompt,
      width: dimensions.width,
      height: dimensions.height,
      numberResults: 1,
      outputFormat: "PNG",
      outputType: "URL",
      deliveryMethod: "sync",
    };

    if (model === "openai:gpt-image@2") {
      task.providerSettings = { openai: { quality: "medium", background: "opaque", moderation: "auto" } };
      if (sourceImage) task.inputs = { referenceImages: [sourceImage] };
    }

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
      data?: Array<{ imageURL?: string; imageUUID?: string }>;
      errors?: Array<{ message?: string }>;
      error?: string;
    };
    const images = (payload.data ?? [])
      .filter((item): item is { imageURL: string; imageUUID?: string } => Boolean(item.imageURL))
      .map((item) => ({ imageURL: item.imageURL, imageUUID: item.imageUUID }));

    if (!runwareResponse.ok || !images.length) {
      const providerMessage = payload.errors?.[0]?.message || payload.error;
      console.error("Runware generation failed", runwareResponse.status, providerMessage || "No image returned");
      return NextResponse.json({ error: providerMessage || "The image model couldn’t complete that request." }, { status: 502 });
    }

    const galleryWrites = await Promise.allSettled(images.map((image) => storeGalleryImage({
      ...image,
      appName,
      model,
      outputType,
      width: dimensions.width,
      height: dimensions.height,
    })));
    for (const write of galleryWrites) {
      if (write.status === "rejected") {
        console.error("Logo gallery save failed", write.reason instanceof Error ? write.reason.message : write.reason);
      }
    }

    return NextResponse.json({ images, model, outputType, width: dimensions.width, height: dimensions.height });
  } catch (error) {
    const message = error instanceof Error && error.name === "AbortError"
      ? "The image model took too long to respond. Please try again."
      : "The image model couldn’t complete that request.";
    console.error("Generation route error", error instanceof Error ? error.message : error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
