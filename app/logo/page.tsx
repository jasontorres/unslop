import type { Metadata } from "next";
import { LogoMaker } from "./logo-maker";
import { isLogoAccessKey, LOGO_ACCESS_KEY } from "./access";
import { LogoTrialEnded } from "./trial-ended";

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
  referrer: "no-referrer",
};

type LogoPageProps = {
  searchParams: Promise<{ letmein?: string | string[] }>;
};

export default async function LogoPage({ searchParams }: LogoPageProps) {
  const accessValue = (await searchParams).letmein;
  const key = Array.isArray(accessValue) ? accessValue[0] : accessValue;

  if (!isLogoAccessKey(key)) return <LogoTrialEnded />;

  return <LogoMaker apiAccessKey={LOGO_ACCESS_KEY} />;
}
