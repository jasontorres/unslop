"use client";

import { useState } from "react";
import { writeTextToClipboard } from "../../clipboard";

type CopyKind = "link" | "brief" | "html";

type ReferenceWindow = Window & {
  __UNSLOP_EXPORT_HTML__?: () => Promise<string>;
};

export function SiteActions({ slug, brief }: { slug: string; brief: string }) {
  const [copied, setCopied] = useState<CopyKind | null>(null);
  const [error, setError] = useState<string | null>(null);

  function showCopied(kind: CopyKind) {
    setCopied(kind);
    setError(null);
    window.setTimeout(() => setCopied(null), 1600);
  }

  async function copy(kind: "link" | "brief") {
    const url = `${window.location.origin}/site/${slug}`;
    try {
      await writeTextToClipboard(kind === "link" ? url : `${brief}\n\nReference: ${url}`);
      showCopied(kind);
    } catch (copyError) {
      setError(copyError instanceof Error ? copyError.message : "Copy failed");
    }
  }

  async function copyHtml() {
    try {
      const frame = document.getElementById("reference-frame") as HTMLIFrameElement | null;
      const exporter = (frame?.contentWindow as ReferenceWindow | null)?.__UNSLOP_EXPORT_HTML__;
      if (!exporter) throw new Error("Reference is still loading—try again in a moment");
      await writeTextToClipboard(await exporter());
      showCopied("html");
    } catch (copyError) {
      setError(copyError instanceof Error ? copyError.message : "Copy failed");
    }
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
      <button className="secondary-action html-action" onClick={copyHtml} aria-describedby="html-export-note">
        {copied === "html" ? "HTML + CSS copied" : "Copy HTML + CSS"}
      </button>
      <button className="secondary-action" onClick={() => copy("link")}>
        {copied === "link" ? "Copied" : "Copy URL"}
      </button>
      <button className="icon-action" onClick={share} aria-label="Share this design reference">↗</button>
      {error && <p className="copy-error" role="status">{error}</p>}
    </div>
  );
}

export function CopyBrief({ brief, slug }: { brief: string; slug: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    const url = `${window.location.origin}/site/${slug}`;
    try {
      await writeTextToClipboard(`${brief}\n\nReference: ${url}`);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return <button onClick={copy}>{copied ? "✓ Copied to clipboard" : "Copy full brief"}</button>;
}
