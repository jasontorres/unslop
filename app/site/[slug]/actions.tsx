"use client";

import { useState } from "react";
import Link from "next/link";
import { writeTextToClipboard } from "../../clipboard";

type CopyKind = "guide" | "brief" | "html" | "share";

type ReferenceWindow = Window & {
  __UNSLOP_EXPORT_HTML__?: () => Promise<string>;
};

type SiteActionsProps = {
  slug: string;
  brief: string;
  descriptionId?: string;
  viewHref?: string;
  showShare?: boolean;
};

export function SiteActions({
  slug,
  brief,
  descriptionId,
  viewHref,
  showShare = true,
}: SiteActionsProps) {
  const [copied, setCopied] = useState<CopyKind | null>(null);
  const [error, setError] = useState<string | null>(null);

  function showCopied(kind: CopyKind) {
    setCopied(kind);
    setError(null);
    window.setTimeout(() => setCopied(null), 1600);
  }

  async function copy(kind: "guide" | "brief") {
    const guideUrl = `${window.location.origin}/reference/${slug}`;
    try {
      await writeTextToClipboard(kind === "guide" ? guideUrl : `${brief}\n\nAI-only reference: ${guideUrl}`);
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
    try {
      if (navigator.share) {
        await navigator.share({ title: "unslop.site reference", url });
        return;
      }
      await writeTextToClipboard(url);
      showCopied("share");
    } catch (shareError) {
      setError(shareError instanceof Error ? shareError.message : "Share failed");
    }
  }

  return (
    <div className="action-group">
      <button className="primary-action" onClick={() => copy("brief")} aria-label="Copy agent brief">
        <span className="copy-symbol">{copied === "brief" ? "✓" : "＋"}</span>
        <span className="action-label-full">{copied === "brief" ? "Brief copied" : "Copy agent brief"}</span>
        <span className="action-label-short">{copied === "brief" ? "Copied" : "Brief"}</span>
      </button>
      <button
        className="secondary-action html-action"
        onClick={copyHtml}
        aria-label="Copy HTML and CSS"
        aria-describedby={descriptionId}
      >
        <span className="action-label-full">{copied === "html" ? "HTML + CSS copied" : "Copy HTML + CSS"}</span>
        <span className="action-label-short">{copied === "html" ? "Copied" : "HTML + CSS"}</span>
      </button>
      <button
        className="secondary-action"
        onClick={() => copy("guide")}
        aria-label="Copy AI guide URL"
        aria-describedby={descriptionId}
      >
        <span className="action-label-full">{copied === "guide" ? "AI URL copied" : "Copy AI guide URL"}</span>
        <span className="action-label-short">{copied === "guide" ? "Copied" : "AI URL"}</span>
      </button>
      {viewHref && (
        <Link className="secondary-action fullscreen-action" href={viewHref}>
          Full screen <span aria-hidden="true">↗</span>
        </Link>
      )}
      {showShare && (
        <button className="icon-action" onClick={share} aria-label="Share this design reference">
          {copied === "share" ? "✓" : "↗"}
        </button>
      )}
      {error && <p className="copy-error" role="status">{error}</p>}
    </div>
  );
}

export function CopyBrief({ brief, slug }: { brief: string; slug: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    const guideUrl = `${window.location.origin}/reference/${slug}`;
    try {
      await writeTextToClipboard(`${brief}\n\nAI-only reference: ${guideUrl}`);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return <button onClick={copy}>{copied ? "✓ Copied to clipboard" : "Copy full brief"}</button>;
}
