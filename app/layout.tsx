import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
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
const title = "Facet — Turn Any Image Into a Low-Poly Mascot";
const description = "Create a polished low-poly cartoon mascot or app logo from a reference image and a short creative brief.";
const socialImage = `${canonicalOrigin}/og.png`;

export const metadata: Metadata = {
    metadataBase: new URL(canonicalOrigin),
    applicationName: "Facet",
    title: {
      default: title,
      template: "%s — Facet",
    },
    description,
    keywords: [
      "AI mascot maker",
      "low-poly logo generator",
      "cartoon app icon",
      "image to mascot",
    ],
    authors: [{ name: "Facet", url: canonicalOrigin }],
    creator: "Facet",
    publisher: "Facet",
    category: "Design",
    alternates: { canonical: canonicalOrigin },
    icons: { icon: "/favicon.png", shortcut: "/favicon.png" },
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
      siteName: "Facet",
      locale: "en_US",
      images: [{
        url: socialImage,
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Facet — low-poly mascot maker",
      }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: socialImage, alt: "Facet — low-poly mascot maker" }],
    },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f7f2e8",
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
