import type { Metadata } from "next";
import { LogoHistoryBrowser } from "./logo-history-browser";

export const metadata: Metadata = {
  title: { absolute: "Your Logo History — unslop.site" },
  description: "Browse logo, mascot, icon, and poster generations saved in this browser.",
  robots: { index: false, follow: false },
  referrer: "no-referrer",
};

export default function LogoHistoryPage() {
  return <LogoHistoryBrowser />;
}
