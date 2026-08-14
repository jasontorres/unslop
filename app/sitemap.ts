import type { MetadataRoute } from "next";
import { allSites, categoryDefinitions } from "./data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://unslop.site/",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://unslop.site/featured",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...categoryDefinitions.map((category) => ({
      url: `https://unslop.site/${category.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...allSites.map((site) => ({
      url: `https://unslop.site/site/${site.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
