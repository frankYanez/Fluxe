import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "FLUXE Labs | Agencia de Marketing Digital Premium",
  description: "Transformamos marcas en experiencias digitales memorables. Estrategias de marketing que combinan creatividad, datos y tecnología para impulsar el crecimiento de tu negocio.",
  keywords: ["marketing digital", "branding", "desarrollo web", "SEO", "SEM", "social media", "agencia digital"],
  authors: [{ name: "FLUXE Labs" }],
  openGraph: {
    title: "FLUXE Labs | Agencia de Marketing Digital Premium",
    description: "Estrategias de marketing que combinan creatividad, datos y tecnología",
    type: "website",
    locale: "es_ES",
    siteName: "FLUXE Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "FLUXE Labs | Agencia de Marketing Digital Premium",
    description: "Estrategias de marketing que combinan creatividad, datos y tecnología",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "FLUXE Labs",
              description: "Agencia de Marketing Digital Premium",
              url: "https://FLUXElabs.com",
              logo: "https://FLUXElabs.com/logo.png",
              sameAs: [
                "https://linkedin.com/company/FLUXElabs",
                "https://twitter.com/FLUXElabs",
                "https://instagram.com/FLUXElabs",
              ],
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
