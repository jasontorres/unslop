import { NextResponse } from "next/server";
import { listArchiveGalleryPage, listLiveGalleryImages } from "./storage";

export const runtime = "edge";

type GalleryCursor =
  | { source: "live"; cursor: string }
  | { source: "archive"; page: number };

function encodeCursor(cursor: GalleryCursor) {
  return btoa(JSON.stringify(cursor)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function decodeCursor(value?: string): GalleryCursor | null {
  if (!value) return null;
  if (!/^[A-Za-z0-9_-]+$/.test(value) || value.length > 4096) throw new Error("Invalid gallery cursor.");
  try {
    const padded = value.replace(/-/g, "+").replace(/_/g, "/").padEnd(Math.ceil(value.length / 4) * 4, "=");
    const parsed = JSON.parse(atob(padded)) as Partial<GalleryCursor>;
    if (parsed.source === "live" && typeof parsed.cursor === "string" && parsed.cursor) {
      return { source: "live", cursor: parsed.cursor };
    }
    if (parsed.source === "archive" && Number.isInteger(parsed.page) && Number(parsed.page) > 0) {
      return { source: "archive", page: Number(parsed.page) };
    }
  } catch {
    // Normalize all malformed cursors to the same client-safe error.
  }
  throw new Error("Invalid gallery cursor.");
}

export async function GET(request: Request) {
  try {
    const cursor = decodeCursor(new URL(request.url).searchParams.get("cursor")?.trim() || undefined);
    if (cursor?.source === "archive") {
      const archivePage = await listArchiveGalleryPage(cursor.page);
      return NextResponse.json({
        images: archivePage.images,
        cursor: archivePage.nextPage
          ? encodeCursor({ source: "archive", page: archivePage.nextPage })
          : null,
      }, {
        headers: { "Cache-Control": "public, max-age=30, stale-while-revalidate=120" },
      });
    }

    const livePage = await listLiveGalleryImages(cursor?.source === "live" ? cursor.cursor : undefined);
    if (livePage.cursor) {
      return NextResponse.json({
        images: livePage.images,
        cursor: encodeCursor({ source: "live", cursor: livePage.cursor }),
      }, {
        headers: { "Cache-Control": "public, max-age=30, stale-while-revalidate=120" },
      });
    }

    const archivePage = await listArchiveGalleryPage(1);
    const page = {
      images: [...livePage.images, ...archivePage.images],
      cursor: archivePage.nextPage
        ? encodeCursor({ source: "archive", page: archivePage.nextPage })
        : null,
    };
    return NextResponse.json(page, {
      headers: { "Cache-Control": "public, max-age=30, stale-while-revalidate=120" },
    });
  } catch (error) {
    if (error instanceof Error && error.message === "Invalid gallery cursor.") {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    console.error("Logo gallery list error", error instanceof Error ? error.message : error);
    return NextResponse.json({ error: "The shared gallery is temporarily unavailable." }, { status: 503 });
  }
}
