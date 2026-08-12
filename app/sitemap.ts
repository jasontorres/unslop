import type { MetadataRoute } from "next";
import { allSites } from "./data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://unslop.site/",
      changeFrequency: "weekly",
      priority: 1,
    },
    ...allSites.map((site) => ({
      url: `https://unslop.site/site/${site.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
