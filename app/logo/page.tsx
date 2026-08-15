import type { Metadata } from "next";
import { LogoMaker } from "./logo-maker";

export const metadata: Metadata = {
  title: { absolute: "Facet — Logo & Mascot Maker" },
  description: "Create logos, app icons, mascots, and branded posters from a reference image and a short creative brief.",
  alternates: { canonical: "https://unslop.site/logo" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Facet — Logo & Mascot Maker",
    description: "Turn a reference image into three polished identity directions.",
    type: "website",
    url: "https://unslop.site/logo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Facet — Logo & Mascot Maker",
    description: "Turn a reference image into three polished identity directions.",
  },
};

export default function LogoPage() {
  return <LogoMaker />;
}
