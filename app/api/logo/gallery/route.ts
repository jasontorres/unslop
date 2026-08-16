import { NextResponse } from "next/server";
import { listNumberedGalleryPage } from "./storage";

export const runtime = "edge";

function galleryPageNumber(request: Request) {
  const value = new URL(request.url).searchParams.get("page")?.trim();
  if (!value) return 1;
  if (!/^[1-9]\d{0,5}$/.test(value)) throw new Error("Invalid gallery page.");
  return Number(value);
}

export async function GET(request: Request) {
  try {
    const pageNumber = galleryPageNumber(request);
    const page = await listNumberedGalleryPage(pageNumber);
    if (!page) throw new Error("Invalid gallery page.");
    return NextResponse.json(page, {
      headers: { "Cache-Control": "public, max-age=30, stale-while-revalidate=120" },
    });
  } catch (error) {
    if (error instanceof Error && error.message === "Invalid gallery page.") {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    console.error("Logo gallery list error", error instanceof Error ? error.message : error);
    return NextResponse.json({ error: "The shared gallery is temporarily unavailable." }, { status: 503 });
  }
}
