import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { allSites } from "./data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

const canonicalOrigin = "https://unslop.site";
const title = "unslop.site — Interface References for Better AI Builds";
const description = `Browse ${allSites.length} curated interface references, copy AI-ready briefs and HTML, and give your coding agent a clearer visual direction.`;
const socialImage = `${canonicalOrigin}/og.png`;

export const metadata: Metadata = {
    metadataBase: new URL(canonicalOrigin),
    applicationName: "unslop.site",
    title: {
      default: title,
      template: "%s — unslop.site",
    },
    description,
    keywords: [
      "interface design references",
      "web design inspiration",
      "UI design library",
      "AI coding agent briefs",
      "landing page inspiration",
      "dashboard design inspiration",
      "product design references",
    ],
    authors: [{ name: "unslop.site", url: canonicalOrigin }],
    creator: "unslop.site",
    publisher: "unslop.site",
    category: "Design",
    alternates: { canonical: canonicalOrigin },
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    referrer: "origin-when-cross-origin",
    formatDetection: { email: false, address: false, telephone: false },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonicalOrigin,
      siteName: "unslop.site",
      locale: "en_US",
      images: [{
        url: socialImage,
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "unslop.site landing page — Find the interface you mean",
      }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: socialImage, alt: "unslop.site landing page — Find the interface you mean" }],
    },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f4f3ee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
