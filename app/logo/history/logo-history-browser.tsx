"use client";

/* eslint-disable @next/next/no-img-element -- History contains external generated-image URLs. */

import Link from "next/link";
import { useMemo, useState, useSyncExternalStore } from "react";
import {
  historySnapshot,
  parseHistory,
  serverHistorySnapshot,
  subscribeToHistory,
  type GenerationHistoryItem,
  type ModelId,
  type OutputType,
} from "../history";

const outputLabels: Record<OutputType, string> = {
  logo: "Logo",
  "app-icon": "App icon",
  mascot: "Mascot",
  poster: "Poster",
  "logo-with-name": "Logo + name",
};

const modelLabels: Record<ModelId, string> = {
  "openai:gpt-image@2": "Model 1",
  "ideogram:4@0": "Model 2",
};

const filterOptions: Array<{ value: "all" | OutputType; label: string }> = [
  { value: "all", label: "All" },
  { value: "logo", label: "Logos" },
  { value: "app-icon", label: "App icons" },
  { value: "mascot", label: "Mascots" },
  { value: "poster", label: "Posters" },
  { value: "logo-with-name", label: "Lockups" },
];

function historyDate(timestamp: number) {
  return new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(timestamp);
}

type HistoryImage = {
  id: string;
  imageURL: string;
  item: GenerationHistoryItem;
};

function HistoryCard({ entry }: { entry: HistoryImage }) {
  const [unavailable, setUnavailable] = useState(false);
  const { item } = entry;
  const outputLabel = outputLabels[item.result.outputType];

  return (
    <article className="logo-history-card">
      <a
        className="logo-history-art"
        href={entry.imageURL}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${item.appName} ${outputLabel} full size`}
      >
        {unavailable ? (
          <span className="logo-history-unavailable"><b>◇</b>Image no longer available</span>
        ) : (
          <img
            src={entry.imageURL}
            alt={`${item.appName} ${outputLabel}`}
            loading="lazy"
            decoding="async"
            onError={() => setUnavailable(true)}
          />
        )}
        <span className="logo-history-type">{outputLabel}</span>
        <span className="logo-history-open" aria-hidden="true">↗</span>
      </a>
      <div className="logo-history-meta">
        <strong>{item.appName}</strong>
        <span>{modelLabels[item.result.model]} · {historyDate(item.createdAt)}</span>
        <p>{item.context}</p>
      </div>
    </article>
  );
}

export function LogoHistoryBrowser() {
  const historyValue = useSyncExternalStore(subscribeToHistory, historySnapshot, serverHistorySnapshot);
  const history = useMemo(() => parseHistory(historyValue), [historyValue]);
  const [filter, setFilter] = useState<"all" | OutputType>("all");

  const images = useMemo(() => history.flatMap((item) => item.result.images.map((image, imageIndex) => ({
    id: `${item.id}-${image.imageUUID || imageIndex}`,
    imageURL: image.imageURL,
    item,
  }))), [history]);
  const visibleImages = filter === "all"
    ? images
    : images.filter((entry) => entry.item.result.outputType === filter);

  return (
    <main className="logo-maker-page logo-history-page">
      <header className="topbar logo-topbar">
        <Link href="/" className="brand" aria-label="unslop.site home">
          <span className="brand-mark">u.</span>
          <span>unslop.site</span>
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          <Link href="/">Gallery</Link>
          <Link href="/logo">Logo Maker</Link>
          <Link href="/logo/gallery">Logo Gallery</Link>
          <Link href="/logo/history" className="active" aria-current="page">History</Link>
        </nav>
        <p className="topbar-context">Private to this browser</p>
      </header>

      <section className="logo-history-intro">
        <div>
          <p className="section-label">Logo maker / saved on this device</p>
          <h1>Your history.</h1>
          <p>Revisit every direction generated in this browser. Your history stays local to this device.</p>
        </div>
        <div className="logo-history-count" aria-label={`${history.length} saved generations`}>
          <strong>{history.length}</strong>
          <span>{history.length === 1 ? "saved generation" : "saved generations"}<small>{images.length} {images.length === 1 ? "image" : "images"}</small></span>
        </div>
      </section>

      <section className="logo-history-library" aria-label="Your saved logo generations">
        {images.length ? (
          <>
            <div className="logo-history-toolbar">
              <div className="logo-history-filters" aria-label="Filter history by output type">
                {filterOptions.map((option) => {
                  const count = option.value === "all"
                    ? images.length
                    : images.filter((entry) => entry.item.result.outputType === option.value).length;
                  if (option.value !== "all" && !count) return null;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      className={filter === option.value ? "is-active" : ""}
                      aria-pressed={filter === option.value}
                      onClick={() => setFilter(option.value)}
                    >
                      {option.label}<span>{count}</span>
                    </button>
                  );
                })}
              </div>
              <p>Newest first · Select an image to open it full size</p>
            </div>

            {visibleImages.length ? (
              <div className="logo-history-grid">
                {visibleImages.map((entry) => <HistoryCard key={entry.id} entry={entry} />)}
              </div>
            ) : null}
          </>
        ) : (
          <div className="logo-history-empty">
            <div className="logo-history-empty-copy">
              <span>Example generations</span>
              <h2>Your saved work will live here.</h2>
              <p>No history was found in this browser yet. Past generations made on this device will appear here automatically.</p>
              <Link href="/logo">See Logo Maker status <b aria-hidden="true">→</b></Link>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
