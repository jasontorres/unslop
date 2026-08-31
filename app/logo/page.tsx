import type { Metadata } from "next";
import { LogoMaker } from "./logo-maker";

export const metadata: Metadata = {
  title: { absolute: "Facet — Logo & Mascot Maker" },
  description: "Create logos, app icons, mascots, and branded posters from a reference image and a short creative brief.",
  alternates: { canonical: "https://unslop.site/logo" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Facet — Logo & Mascot Maker",
    description: "Turn a reference image into one polished identity direction.",
    type: "website",
    url: "https://unslop.site/logo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Facet — Logo & Mascot Maker",
    description: "Turn a reference image into one polished identity direction.",
  },
  referrer: "no-referrer",
};

export default function LogoPage() {
  return <LogoMaker turnstileSiteKey="0x4AAAAAAEjMBc0BFD2ytEra" />;
}
