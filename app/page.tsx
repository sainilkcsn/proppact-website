import type { Metadata } from "next";
import { CategorySection } from "@/components/sections/CategorySection";
import { CTASection } from "@/components/sections/CTASection";
import { Hero } from "@/components/sections/Hero";
import { TrustSection } from "@/components/sections/TrustSection";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: `PropPact | Residential & Commercial Property for Sale in ${SITE.city}`,
  },
  description: `Find verified flats, villas, plots & commercial spaces for sale in ${SITE.city} with PropPact. Trusted local experts, transparent deals, zero brokerage hassle.`,
  alternates: { canonical: SITE.url },
  openGraph: {
    title: `PropPact | Residential & Commercial Property for Sale in ${SITE.city}`,
    description: `Find verified flats, villas, plots & commercial spaces for sale in ${SITE.city} with PropPact.`,
    images: [{ url: "/images/hero-home.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `PropPact | Property for Sale in ${SITE.city}`,
    description: `Verified residential & commercial property with PropPact.`,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <CategorySection />
      <CTASection />
    </>
  );
}
