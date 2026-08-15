import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allSites, getAgentBrief, getEmbeddedSourceUrl, sitesBySlug } from "../../data";
import { SiteActions } from "../../site/[slug]/actions";

export function generateStaticParams() {
  return allSites.map((site) => ({ slug: site.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const site = sitesBySlug.get(slug);
  if (!site) return {};

  return {
    title: `${site.name} full-screen reference`,
    description: `A full-screen interactive reference for ${site.name} with AI-ready copy actions.`,
    alternates: { canonical: `https://unslop.site/site/${site.slug}` },
    robots: { index: false, follow: false },
  };
}

export default async function FullscreenReferencePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const site = sitesBySlug.get(slug);
  if (!site) notFound();

  return (
    <main className="fullscreen-reference-page">
      <header className="fullscreen-reference-topbar">
        <Link href="/" className="brand" aria-label="unslop.site home">
          <span className="brand-mark">u.</span>
          <span>unslop.site</span>
        </Link>
        <SiteActions
          slug={site.slug}
          brief={getAgentBrief(site)}
          exitHref={`/site/${site.slug}`}
          showShare={false}
        />
      </header>
      <section className="fullscreen-reference-stage" aria-label={`${site.name} full-screen design reference`}>
        <iframe
          id="reference-frame"
          src={getEmbeddedSourceUrl(site)}
          title={`${site.name} full-screen interactive preview`}
          loading="eager"
        />
      </section>
    </main>
  );
}
