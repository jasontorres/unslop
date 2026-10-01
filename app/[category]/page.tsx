import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categoryDefinitions, getCollection, modelDefinitions } from "../data";
import { Gallery } from "../gallery";

const canonicalOrigin = "https://unslop.site";

export function generateStaticParams() {
  return [
    { category: "featured" },
    ...categoryDefinitions.map(({ slug }) => ({ category: slug })),
    ...modelDefinitions.map(({ slug }) => ({ category: slug })),
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category: slug } = await params;
  const collection = getCollection(slug);
  if (!collection) return {};

  const canonicalUrl = `${canonicalOrigin}/${collection.slug}`;
  const socialImage = collection.sites[0]
    ? `${canonicalOrigin}/previews/${collection.sites[0].slug}.png`
    : undefined;
  const title = `${collection.name} Interface References`;

  return {
    title,
    description: collection.description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `${title} — unslop.site`,
      description: collection.description,
      url: canonicalUrl,
      type: "website",
      siteName: "unslop.site",
      images: socialImage ? [{ url: socialImage, alt: `${collection.name} interface reference preview` }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — unslop.site`,
      description: collection.description,
      images: socialImage ? [socialImage] : [],
    },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: slug } = await params;
  const collection = getCollection(slug);
  if (!collection) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${collection.name} interface references`,
    description: collection.description,
    url: `${canonicalOrigin}/${collection.slug}`,
    isPartOf: { "@id": `${canonicalOrigin}/#website` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: collection.sites.length,
      itemListElement: collection.sites.map((site, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: site.name,
        url: `${canonicalOrigin}/site/${site.slug}`,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <Gallery initialCategory={collection.slug} />
    </>
  );
}
