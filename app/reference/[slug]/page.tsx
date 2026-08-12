import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allSites, getEmbeddedSourceUrl, sitesBySlug } from "../../data";

export function generateStaticParams() {
  return allSites.map((site) => ({ slug: site.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const site = sitesBySlug.get(slug);
  if (!site) return {};

  return {
    title: `${site.name} isolated AI reference`,
    description: `An isolated interactive reference for ${site.name}, without gallery navigation or related content.`,
    alternates: { canonical: `https://unslop.site/site/${site.slug}` },
    robots: { index: false, follow: false },
  };
}

export default async function IsolatedReferencePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const site = sitesBySlug.get(slug);
  if (!site) notFound();

  return (
    <main className="isolated-reference-page">
      <iframe
        src={getEmbeddedSourceUrl(site)}
        title={`${site.name} isolated interactive reference`}
        loading="eager"
      />
    </main>
  );
}
