"use client";

import { useEffect, useRef } from "react";

const scriptId = "_carbonads_js";
const scriptSrc = "//cdn.carbonads.com/carbon.js?serve=CWBIT5QI&placement=unslopsite&format=responsive";

/** Carbon reserves this much vertical space so the slot never shifts layout when the unit lands. */
export const carbonMinHeight = 155;

export type CarbonAdProps = {
  placement: "landing-hero" | "site-detail-band" | "logo-maker-preview" | "logo-gallery-top";
  className?: string;
};

export function CarbonAd({ placement, className }: CarbonAdProps) {
  const slot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = slot.current;
    if (!host) return;

    // Client-routed pages can briefly overlap while React swaps route trees. The new
    // route owns the single active unit; stale Carbon nodes are removed before it loads.
    document.getElementById(scriptId)?.remove();
    document.querySelectorAll("#carbonads").forEach((node) => node.remove());

    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "text/javascript";
    script.async = true;
    script.setAttribute("src", scriptSrc);
    host.append(script);

    return () => {
      // Only clear this component's host. A destination route may already own a new unit.
      host.replaceChildren();
    };
  }, []);

  return (
    <div
      ref={slot}
      className={className ? `carbon-slot ${className}` : "carbon-slot"}
      data-carbon-slot={placement}
      style={{ minHeight: carbonMinHeight }}
    />
  );
}
