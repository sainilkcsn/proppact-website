import type { Metadata } from "next";
import { CategorySection } from "@/components/sections/CategorySection";
import { CTASection } from "@/components/sections/CTASection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";
import { TrustSection } from "@/components/sections/TrustSection";
import { SITE } from "@/lib/site";

const homeDescription = `${SITE.legalName} provides property guidance and residential property options in ${SITE.city}. Current pricing and availability are confirmed with the team.`;

export const metadata: Metadata = {
  title: {
    absolute: `${SITE.legalName} | Residential Projects in ${SITE.city}`,
  },
  description: homeDescription,
  alternates: { canonical: SITE.url },
  openGraph: {
    url: SITE.url,
    siteName: SITE.legalName,
    title: `${SITE.legalName} | Residential Projects in ${SITE.city}`,
    description: homeDescription,
    images: [{ url: "/images/hero-home.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.legalName} | Residential Projects in ${SITE.city}`,
    description: homeDescription,
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
