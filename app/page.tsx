import { Gallery } from "./gallery";
import { allSites } from "./data";

const description = `Browse ${allSites.length} curated interface references, copy AI-ready briefs and HTML, and give your coding agent a clearer visual direction.`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://unslop.site/#website",
      name: "unslop.site",
      url: "https://unslop.site/",
      description,
      inLanguage: "en",
    },
    {
      "@type": "CollectionPage",
      "@id": "https://unslop.site/#collection",
      name: "unslop.site interface reference library",
      url: "https://unslop.site/",
      description,
      image: "https://unslop.site/og.png",
      isPartOf: { "@id": "https://unslop.site/#website" },
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: allSites.length,
        itemListElement: allSites.map((site, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: site.name,
          url: `https://unslop.site/site/${site.slug}`,
        })),
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <Gallery showLandingAd />
    </>
  );
}
