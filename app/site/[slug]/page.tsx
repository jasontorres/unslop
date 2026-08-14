import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allSites, getEmbeddedSourceUrl, sitesBySlug } from "../../data";
import { CopyBrief, SiteActions } from "./actions";

export function generateStaticParams() {
  return allSites.map((site) => ({ slug: site.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const site = sitesBySlug.get(slug);
  if (!site) return {};
  const canonicalUrl = `https://unslop.site/site/${site.slug}`;
  const description = `${site.name}, a ${site.subcategory.toLowerCase()} interface reference with an AI-ready brief and standalone HTML.`;
  return {
    title: { absolute: `${site.name} — unslop.site` },
    description,
    keywords: [...site.tags, site.category, site.subcategory, "interface reference", "design inspiration"],
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `${site.name} — unslop.site`,
      description,
      url: canonicalUrl,
      type: "website",
      siteName: "unslop.site",
      images: [{
        url: `https://unslop.site/previews/${site.slug}.png`,
        alt: `${site.name} interface preview`,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${site.name} — unslop.site`,
      description,
      images: [`https://unslop.site/previews/${site.slug}.png`],
    },
  };
}

export default async function SitePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const site = sitesBySlug.get(slug);
  if (!site) notFound();

  const related = allSites
    .filter((item) => item.categorySlug === site.categorySlug && item.slug !== site.slug)
    .slice(Math.max(0, allSites.indexOf(site) % 4), Math.max(0, allSites.indexOf(site) % 4) + 4);

  const brief = `Use “${site.name}” as the visual direction for this interface. It belongs to ${site.category} / ${site.subcategory}. Study the reference for its hierarchy, typography, color system, spacing, density, border treatment, and interaction vocabulary. Adapt those principles to my product and content—do not copy the sample brand or wording. If I provide an unslop.site HTML export, inspect its inline computed CSS, embedded fonts, and asset data for exact visual values; treat it as an implementation reference, not production-ready source. Keep the result responsive, accessible, and production-ready.`;
  const sourceUrl = getEmbeddedSourceUrl(site);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: site.name,
    description: `${site.name}, a ${site.subcategory.toLowerCase()} interface reference from unslop.site.`,
    url: `https://unslop.site/site/${site.slug}`,
    image: `https://unslop.site/previews/${site.slug}.png`,
    genre: [site.category, site.subcategory],
    keywords: site.tags.join(", "),
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://unslop.site/#website",
      name: "unslop.site",
      url: "https://unslop.site/",
    },
  };

  return (
    <main className="detail-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <header className="detail-topbar">
        <Link href="/" className="brand"><span className="brand-mark">u.</span><span>unslop.site</span></Link>
        <nav aria-label="Breadcrumb">
          <Link href="/">Library</Link><span>/</span><span>{site.category}</span><span>/</span><strong>{site.name}</strong>
        </nav>
      </header>

      <section className="detail-intro">
        <div>
          <p className="eyebrow"><span>{String(site.index + 1).padStart(3, "0")}</span> {site.category} / {site.subcategory}</p>
          <h1>{site.name}</h1>
          <p className="detail-summary">Copy the direction as an agent brief—or take the standalone HTML with its styles included.</p>
        </div>
        <SiteActions slug={site.slug} brief={brief} />
      </section>

      <section className="reference-stage" aria-label={`${site.name} interactive design reference`}>
        <iframe id="reference-frame" src={sourceUrl} title={`${site.name} interactive preview`} loading="eager" />
      </section>

      <div id="html-export-note" className="reference-export-note">
        <span>AI-only reference</span>
        <p><strong>Copy AI guide URL</strong> opens only this interactive design—no gallery header, notes, footer, or related directions. <strong>Copy HTML + CSS</strong> adds exact visual values.</p>
      </div>

      <section className="reference-notes">
        <div className="reference-about">
          <p className="section-label">Reference notes</p>
          <h2>Give your agent the direction,<br />not just the screenshot.</h2>
          <p>
            This brief names the design decisions worth preserving while leaving your agent room
            to adapt the system to a different product, brand, and content model. Pair it with
            the standalone HTML when the agent also needs exact type, spacing, color, and layout values.
          </p>
          <div className="tag-list">
            {site.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </div>
        <div className="brief-card">
          <div className="brief-card-head"><span>AGENT_BRIEF.txt</span><i>Ready</i></div>
          <p>{brief}</p>
          <CopyBrief brief={brief} slug={site.slug} />
        </div>
      </section>

      <section className="related-section">
        <div className="related-head">
          <div><p className="section-label">Keep exploring</p><h2>Related directions</h2></div>
          <Link href="/">View all {allSites.length} references ↗</Link>
        </div>
        <div className="related-grid">
          {related.map((item) => (
            <Link href={`/site/${item.slug}`} key={item.slug} className="related-card">
              <div>
                <img src={`/previews/${item.slug}.png`} alt="" loading="lazy" decoding="async" />
                <span>{String(item.index + 1).padStart(3, "0")}</span>
              </div>
              <h3>{item.name}</h3>
              <p>{item.subcategory}</p>
            </Link>
          ))}
        </div>
      </section>

      <footer className="detail-footer">
        <Link href="/">← Back to the full library</Link>
        <p>unslop.site · {allSites.length} references for better AI builds</p>
      </footer>
    </main>
  );
}
