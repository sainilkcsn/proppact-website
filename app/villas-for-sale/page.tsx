import type { Metadata } from "next";
import { ProjectListing } from "@/components/projects/ProjectListing";
import { PROPERTY_CATEGORY_CONFIGS } from "@/lib/property-categories";
import { getProjectsByCategory } from "@/lib/projects-data";
import { SITE } from "@/lib/site";

const category = PROPERTY_CATEGORY_CONFIGS.villa;
const description =
  "Yuvraj Villa is the duplex villa project currently published for Greater Noida West. The indicative price is labelled with its effective date. Availability is not confirmed on this page.";

export const metadata: Metadata = {
  title: `Villas in ${SITE.city}`,
  description,
  alternates: { canonical: `${SITE.url}/${category.slug}` },
  openGraph: {
    url: `${SITE.url}/${category.slug}`,
    title: `Villas in ${SITE.city} | PropPact`,
    description,
    images: [{ url: category.heroImage }],
  },
};

export default function VillasForSalePage() {
  return (
    <ProjectListing
      title={`Villas in ${SITE.city}`}
      description={description}
      imageSrc={category.heroImage}
      imageAlt={category.heroAlt}
      breadcrumbLabel="Villas"
      projects={getProjectsByCategory("villa")}
      emptyTitle="No villa projects published"
      emptyDescription="Contact PropPact to ask about villas in Greater Noida West."
    />
  );
}
