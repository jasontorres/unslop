"use client";

import { useState } from "react";

export function SiteActions({ slug, brief }: { slug: string; brief: string }) {
  const [copied, setCopied] = useState<"link" | "brief" | null>(null);

  async function copy(kind: "link" | "brief") {
    const url = `${window.location.origin}/site/${slug}`;
    await navigator.clipboard.writeText(kind === "link" ? url : `${brief}\n\nReference: ${url}`);
    setCopied(kind);
    window.setTimeout(() => setCopied(null), 1600);
  }

  async function share() {
    const url = `${window.location.origin}/site/${slug}`;
    if (navigator.share) {
      await navigator.share({ title: "unslop.site reference", url });
      return;
    }
    await copy("link");
  }

  return (
    <div className="action-group">
      <button className="primary-action" onClick={() => copy("brief")}>
        <span>{copied === "brief" ? "✓" : "＋"}</span>
        {copied === "brief" ? "Brief copied" : "Copy agent brief"}
      </button>
      <button className="secondary-action" onClick={() => copy("link")}>
        {copied === "link" ? "Copied" : "Copy URL"}
      </button>
      <button className="icon-action" onClick={share} aria-label="Share this design reference">↗</button>
    </div>
  );
}

export function CopyBrief({ brief, slug }: { brief: string; slug: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    const url = `${window.location.origin}/site/${slug}`;
    await navigator.clipboard.writeText(`${brief}\n\nReference: ${url}`);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return <button onClick={copy}>{copied ? "✓ Copied to clipboard" : "Copy full brief"}</button>;
}
