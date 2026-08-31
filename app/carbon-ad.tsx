"use client";

import { useEffect, useRef, useState } from "react";

const scriptId = "_carbonads_js";
const scriptSrc = "//cdn.carbonads.com/carbon.js?serve=CWBIT5QI&placement=unslopsite&format=responsive";

export type CarbonAdProps = {
  placement: "landing-hero" | "site-detail-band" | "logo-maker-preview" | "logo-gallery-top";
  className?: string;
  onAvailabilityChange?: (isAvailable: boolean) => void;
};

export function CarbonAd({ placement, className, onAvailabilityChange }: CarbonAdProps) {
  const slot = useRef<HTMLDivElement>(null);
  const availabilityCallback = useRef(onAvailabilityChange);
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    availabilityCallback.current = onAvailabilityChange;
  }, [onAvailabilityChange]);

  useEffect(() => {
    const host = slot.current;
    if (!host) return;

    let lastAvailability = false;
    const syncAvailability = () => {
      const ad = host.querySelector<HTMLElement>("#carbonads");
      const nextAvailability = Boolean(
        ad && (ad.querySelector("a, img") || ad.textContent?.trim()),
      );

      if (nextAvailability === lastAvailability) return;
      lastAvailability = nextAvailability;
      setIsAvailable(nextAvailability);
      availabilityCallback.current?.(nextAvailability);
    };

    // Carbon injects the unit after its script loads. Watching the slot lets blocked,
    // failed, and no-inventory requests stay collapsed without relying on a timeout.
    const observer = new MutationObserver(syncAvailability);
    observer.observe(host, { childList: true, subtree: true, characterData: true });

    // Client-routed pages can briefly overlap while React swaps route trees. The new
    // route owns the single active unit; stale Carbon nodes are removed before it loads.
    document.getElementById(scriptId)?.remove();
    document.querySelectorAll("#carbonads").forEach((node) => node.remove());

    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "text/javascript";
    script.async = true;
    script.setAttribute("src", scriptSrc);
    script.addEventListener("error", syncAvailability);
    host.append(script);

    return () => {
      observer.disconnect();
      // Only clear this component's host. A destination route may already own a new unit.
      host.replaceChildren();
    };
  }, []);

  return (
    <div
      ref={slot}
      className={`${className ? `carbon-slot ${className}` : "carbon-slot"}${isAvailable ? " is-available" : ""}`}
      data-carbon-slot={placement}
      data-carbon-status={isAvailable ? "available" : "pending"}
      aria-hidden={isAvailable ? undefined : true}
    />
  );
}
