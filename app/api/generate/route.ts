import { NextResponse } from "next/server";

export const runtime = "edge";

const MODELS = ["openai:gpt-image@2", "ideogram:4@0"] as const;
type ModelId = (typeof MODELS)[number];

type GenerateBody = {
  appName?: unknown;
  context?: unknown;
  model?: unknown;
  sourceImage?: unknown;
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
  try {
    const apiKey = process.env.RUNWARE_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Image generation isn’t configured yet." }, { status: 503 });
    }

    const body = (await request.json()) as GenerateBody;
    const appName = cleanText(body.appName, 60);
    const context = cleanText(body.context, 240);
    const sourceImage = cleanText(body.sourceImage, 7_500_000);
    const model = MODELS.includes(body.model as ModelId) ? (body.model as ModelId) : "openai:gpt-image@2";

    if (!appName || !context) {
      return NextResponse.json({ error: "An app name and short context are required." }, { status: 400 });
    }
    if (!isAllowedSource(sourceImage)) {
      return NextResponse.json({ error: "The source must be a small image upload or public HTTPS image URL." }, { status: 400 });
    }

    const prompt = [
      `Create one polished low-poly cartoon mascot and app-logo symbol for an app named “${appName}”.`,
      `App context: ${context}.`,
      sourceImage && model === "openai:gpt-image@2"
        ? "Transform the subject in the reference image. Preserve its most recognizable silhouette, proportions, expression, and core colors while simplifying it into a charming character."
        : "Invent a memorable visual metaphor from the app name and context.",
      "Art direction: friendly modern cartoon, bold readable silhouette, 8–16 clean faceted polygon planes, crisp edges, subtle dimensional shading, expressive face when appropriate, playful but professional, distinctive at small icon size.",
      "Composition: one centered character or emblem, full object visible, generous padding, front-facing or slight three-quarter view, square app-icon composition.",
      "Do not include a device mockup, scenery, border, badge container, watermark, extra objects, or tiny decorative clutter. Do not render words or letters unless essential to the concept.",
      "Use a clean, flat warm-white background with no cast shadow or floor line.",
    ].filter(Boolean).join(" ");

    const task: Record<string, unknown> = {
      taskType: "imageInference",
      taskUUID: crypto.randomUUID(),
      model,
      positivePrompt: prompt,
      width: 1024,
      height: 1024,
      numberResults: 1,
      outputFormat: "PNG",
      outputType: "URL",
      includeCost: true,
      deliveryMethod: "sync",
    };

    if (model === "openai:gpt-image@2") {
      task.providerSettings = {
        openai: {
          quality: "medium",
          background: "opaque",
          moderation: "auto",
        },
      };
      if (sourceImage) task.inputs = { referenceImages: [sourceImage] };
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 150_000);
    let runwareResponse: Response;
    try {
      runwareResponse = await fetch("https://api.runware.ai/v1", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
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
    const image = payload.data?.find((item) => Boolean(item.imageURL));

    if (!runwareResponse.ok || !image?.imageURL) {
      const providerMessage = payload.errors?.[0]?.message || payload.error;
      console.error("Runware generation failed", runwareResponse.status, providerMessage || "No image returned");
      return NextResponse.json({ error: providerMessage || "The image model couldn’t complete that request." }, { status: 502 });
    }

    return NextResponse.json({
      imageURL: image.imageURL,
      imageUUID: image.imageUUID,
      cost: image.cost,
      model,
    });
  } catch (error) {
    const message = error instanceof Error && error.name === "AbortError"
      ? "The image model took too long to respond. Please try again."
      : "The image model couldn’t complete that request.";
    console.error("Generation route error", error instanceof Error ? error.message : error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
