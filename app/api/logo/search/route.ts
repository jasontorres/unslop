import { NextResponse } from "next/server";
import { hasLogoApiAccess, logoAccessDeniedResponse } from "../../../logo/access";

export const runtime = "edge";

type GoogleSearchResponse = {
  items?: Array<{
    title?: string;
    link?: string;
    image?: { thumbnailLink?: string; contextLink?: string };
  }>;
  error?: { message?: string };
};

export async function GET(request: Request) {
  if (!hasLogoApiAccess(request)) return logoAccessDeniedResponse();

  const query = new URL(request.url).searchParams.get("q")?.trim().slice(0, 60) ?? "";
  if (!query) return NextResponse.json({ error: "An app name is required." }, { status: 400 });

  const apiKey = process.env.GOOGLE_SEARCH_API_KEY;
  const engineId = process.env.GOOGLE_SEARCH_ENGINE_ID;
  if (!apiKey || !engineId) return NextResponse.json({ configured: false, items: [] });

  const searchUrl = new URL("https://customsearch.googleapis.com/customsearch/v1");
  searchUrl.searchParams.set("key", apiKey);
  searchUrl.searchParams.set("cx", engineId);
  searchUrl.searchParams.set("q", `${query} logo`);
  searchUrl.searchParams.set("searchType", "image");
  searchUrl.searchParams.set("num", "8");
  searchUrl.searchParams.set("safe", "active");
  searchUrl.searchParams.set("imgSize", "large");

  try {
    const response = await fetch(searchUrl, { headers: { Accept: "application/json" } });
    const payload = await response.json() as GoogleSearchResponse;
    if (!response.ok) {
      console.error("Google image search failed", response.status, payload.error?.message);
      return NextResponse.json({ configured: true, error: "Logo search is temporarily unavailable." }, { status: 502 });
    }

    const items = (payload.items ?? []).flatMap((item) => {
      if (!item.link || !item.image?.thumbnailLink) return [];
      return [{
        title: item.title || `${query} logo`,
        imageUrl: item.link,
        thumbnailUrl: item.image.thumbnailLink,
        contextUrl: item.image.contextLink || item.link,
      }];
    });
    return NextResponse.json({ configured: true, items });
  } catch (error) {
    console.error("Google image search route error", error instanceof Error ? error.message : error);
    return NextResponse.json({ configured: true, error: "Logo search is temporarily unavailable." }, { status: 502 });
  }
}
