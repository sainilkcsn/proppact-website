import type { Metadata } from "next";
import { CategorySection } from "@/components/sections/CategorySection";
import { CTASection } from "@/components/sections/CTASection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";
import { TrustSection } from "@/components/sections/TrustSection";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: `${SITE.legalName} | Residential Projects in ${SITE.city}`,
  },
  description: SITE.description,
  alternates: { canonical: SITE.url },
  openGraph: {
    url: SITE.url,
    siteName: SITE.legalName,
    title: `${SITE.legalName} | Residential Projects in ${SITE.city}`,
    description: SITE.description,
    images: [{ url: "/images/hero-home.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.legalName} | Residential Projects in ${SITE.city}`,
    description: SITE.description,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <FeaturedProjects />
      <CategorySection />
      <CTASection />
    </>
  );
}
