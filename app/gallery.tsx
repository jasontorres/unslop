"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { allSites, categoryDefinitions, getCategoryCount } from "./data";

const fallbackColors = [
  "#ff6b3d",
  "#c8ed4a",
  "#8ea5ff",
  "#efb8d6",
  "#f5c744",
  "#5ac4a2",
  "#a78bfa",
  "#ef7357",
];

function Preview({ slug, name, index }: { slug: string; name: string; index: number }) {
  const accent = fallbackColors[index % fallbackColors.length];
  return (
    <div
      className="card-preview"
      style={{ backgroundColor: accent }}
      role="img"
      aria-label={`${name} design preview`}
    >
      <span className="preview-fallback">{String(index + 1).padStart(3, "0")}</span>
      <img src={`/previews/${slug}.png`} alt="" loading="lazy" decoding="async" />
    </div>
  );
}

export function Gallery() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [copied, setCopied] = useState<string | null>(null);

  const visibleSites = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return allSites.filter((site) => {
      const inCategory = category === "all" || site.categorySlug === category;
      const haystack = [site.name, site.category, site.subcategory, ...site.tags]
        .join(" ")
        .toLowerCase();
      return inCategory && (!normalizedQuery || haystack.includes(normalizedQuery));
    });
  }, [category, query]);

  async function copySite(slug: string) {
    const url = `${window.location.origin}/site/${slug}`;
    await navigator.clipboard.writeText(url);
    setCopied(slug);
    window.setTimeout(() => setCopied(null), 1400);
  }

  return (
    <main>
      <header className="topbar">
        <Link href="/" className="brand" aria-label="Design Index home">
          <span className="brand-mark">DI</span>
          <span>Design Index</span>
        </Link>
        <p className="topbar-note">Curated interface references · {allSites.length} studies</p>
        <a className="topbar-link" href="#library">Browse library <span>↓</span></a>
      </header>

      <section className="hero">
        <div className="hero-kicker"><span /> Agent-ready design archive</div>
        <h1>Find the interface<br />you mean.</h1>
        <p className="hero-copy">
          A visual reference library for choosing a direction, briefing an AI agent,
          and sharing exactly the design you want to build from.
        </p>
        <div className="hero-stats" aria-label="Library statistics">
          <div><strong>{allSites.length}</strong><span>Design references</span></div>
          <div><strong>{categoryDefinitions.length}</strong><span>Categories</span></div>
          <div><strong>1-click</strong><span>Agent brief</span></div>
        </div>
      </section>

      <section id="library" className="library">
        <div className="library-head">
          <div>
            <p className="section-label">Library / 2026</p>
            <h2>All references</h2>
          </div>
          <label className="searchbox">
            <span aria-hidden="true">⌕</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search styles, formats, products…"
              aria-label="Search the design library"
            />
            {query && <button onClick={() => setQuery("")} aria-label="Clear search">×</button>}
          </label>
        </div>

        <nav className="filters" aria-label="Design categories">
          <button className={category === "all" ? "active" : ""} onClick={() => setCategory("all")}>
            All <span>{allSites.length}</span>
          </button>
          {categoryDefinitions.map((item) => (
            <button
              key={item.slug}
              className={category === item.slug ? "active" : ""}
              onClick={() => setCategory(item.slug)}
            >
              {item.name} <span>{getCategoryCount(item.slug)}</span>
            </button>
          ))}
        </nav>

        <div className="results-row">
          <p>{visibleSites.length} {visibleSites.length === 1 ? "reference" : "references"}</p>
          {(category !== "all" || query) && (
            <button onClick={() => { setCategory("all"); setQuery(""); }}>Reset filters</button>
          )}
        </div>

        {visibleSites.length ? (
          <div className="gallery-grid">
            {visibleSites.map((site) => (
              <article className="gallery-card" key={site.slug}>
                <Link href={`/site/${site.slug}`} className="preview-link" aria-label={`Open ${site.name}`}>
                  <Preview slug={site.slug} name={site.name} index={site.index} />
                  <span className="open-corner" aria-hidden="true">↗</span>
                </Link>
                <div className="card-meta">
                  <Link href={`/site/${site.slug}`}>
                    <h3>{site.name}</h3>
                    <p>{site.category} <span>·</span> {site.subcategory}</p>
                  </Link>
                  <button className="copy-mini" onClick={() => copySite(site.slug)} aria-label={`Copy link to ${site.name}`}>
                    {copied === site.slug ? "Copied" : "Copy link"}
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <span>∅</span>
            <h3>No references found</h3>
            <p>Try a broader phrase or reset the current category.</p>
            <button onClick={() => { setQuery(""); setCategory("all"); }}>Show everything</button>
          </div>
        )}
      </section>

      <footer>
        <div><span className="brand-mark inverse">DI</span><strong>Design Index</strong></div>
        <p>Built for taste-making, clear briefs, and better first drafts.</p>
        <a href="#library">Back to library ↑</a>
      </footer>
    </main>
  );
}
