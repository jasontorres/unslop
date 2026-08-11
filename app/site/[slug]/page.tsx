import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allSites, getSourceUrl, sitesBySlug } from "../../data";
import { CopyBrief, SiteActions } from "./actions";

export function generateStaticParams() {
  return allSites.map((site) => ({ slug: site.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const site = sitesBySlug.get(slug);
  if (!site) return {};
  return {
    title: `${site.name} — Design Index`,
    description: `${site.name}, a ${site.subcategory.toLowerCase()} reference from the Design Index.`,
  };
}

export default async function SitePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const site = sitesBySlug.get(slug);
  if (!site) notFound();

  const related = allSites
    .filter((item) => item.categorySlug === site.categorySlug && item.slug !== site.slug)
    .slice(Math.max(0, allSites.indexOf(site) % 4), Math.max(0, allSites.indexOf(site) % 4) + 4);

  const brief = `Use “${site.name}” as the visual direction for this interface. It belongs to ${site.category} / ${site.subcategory}. Study the reference for its hierarchy, typography, color system, spacing, density, border treatment, and interaction vocabulary. Adapt those principles to my product and content—do not copy the sample brand or wording. Keep the result responsive, accessible, and production-ready.`;
  const sourceUrl = `${getSourceUrl(site)}&embed=1`;

  return (
    <main className="detail-page">
      <header className="detail-topbar">
        <Link href="/" className="brand"><span className="brand-mark">DI</span><span>Design Index</span></Link>
        <nav aria-label="Breadcrumb">
          <Link href="/">Library</Link><span>/</span><span>{site.category}</span><span>/</span><strong>{site.name}</strong>
        </nav>
      </header>

      <section className="detail-intro">
        <div>
          <p className="eyebrow"><span>{String(site.index + 1).padStart(3, "0")}</span> {site.category} / {site.subcategory}</p>
          <h1>{site.name}</h1>
          <p className="detail-summary">A shareable visual reference with a ready-to-copy brief for your next build.</p>
        </div>
        <SiteActions slug={site.slug} brief={brief} />
      </section>

      <section className="reference-stage" aria-label={`${site.name} interactive design reference`}>
        <div className="stage-bar">
          <div className="stage-dots"><i /><i /><i /></div>
          <p>Interactive reference</p>
          <a href={sourceUrl} target="_blank" rel="noreferrer">Open full screen ↗</a>
        </div>
        <iframe src={sourceUrl} title={`${site.name} interactive preview`} loading="eager" />
      </section>

      <section className="reference-notes">
        <div className="reference-about">
          <p className="section-label">Reference notes</p>
          <h2>Give your agent the direction,<br />not just the screenshot.</h2>
          <p>
            This brief names the design decisions worth preserving while leaving your agent room
            to adapt the system to a different product, brand, and content model.
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
              <div style={{ backgroundImage: `url(/previews/${item.slug}.png)` }}><span>{String(item.index + 1).padStart(3, "0")}</span></div>
              <h3>{item.name}</h3>
              <p>{item.subcategory}</p>
            </Link>
          ))}
        </div>
      </section>

      <footer className="detail-footer">
        <Link href="/">← Back to the full library</Link>
        <p>Design Index · {allSites.length} references for humans and agents</p>
      </footer>
    </main>
  );
}
