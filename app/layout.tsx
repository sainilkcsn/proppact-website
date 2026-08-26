import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { OrganizationJsonLd } from "@/components/seo/OrganizationJsonLd";
import { SITE } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `PropPact | Residential & Commercial Property for Sale in ${SITE.city}`,
    template: `%s | PropPact`,
  },
  description: `Find verified flats, villas, plots & commercial spaces for sale in ${SITE.city} with PropPact. Trusted local experts, transparent deals, zero brokerage hassle.`,
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: SITE.name,
    title: `PropPact | Residential & Commercial Property for Sale in ${SITE.city}`,
    description: `Find verified flats, villas, plots & commercial spaces for sale in ${SITE.city} with PropPact.`,
    images: [{ url: "/images/hero-home.jpg", alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `PropPact | Property for Sale in ${SITE.city}`,
    description: `Verified residential & commercial property with PropPact.`,
    images: ["/images/hero-home.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="min-h-screen font-sans">
        <OrganizationJsonLd />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-primary"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
