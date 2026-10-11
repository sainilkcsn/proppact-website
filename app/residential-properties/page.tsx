import type { Metadata } from "next";
import { ProjectListing } from "@/components/projects/ProjectListing";
import { PROPERTY_CATEGORY_CONFIGS } from "@/lib/property-categories";
import { getProjectsByCategory } from "@/lib/projects-data";
import { SITE } from "@/lib/site";

const category = PROPERTY_CATEGORY_CONFIGS.residential;
const description =
  "Selected apartment projects in Greater Noida West that PropPact can discuss. Figures on each project page come from supplied material and must be reconfirmed.";

export const metadata: Metadata = {
  title: `Apartment projects in ${SITE.city}`,
  description,
  alternates: { canonical: `${SITE.url}/${category.slug}` },
  openGraph: {
    url: `${SITE.url}/${category.slug}`,
    title: `Apartment projects in ${SITE.city} | PropPact`,
    description,
    images: [{ url: category.heroImage }],
  },
};

export default function ResidentialPropertiesPage() {
  return (
    <ProjectListing
      title={`Apartment projects in ${SITE.city}`}
      description={description}
      imageSrc={category.heroImage}
      imageAlt={category.heroAlt}
      breadcrumbLabel="Residential"
      projects={getProjectsByCategory("residential")}
      emptyTitle="No apartment projects published"
      emptyDescription="Contact PropPact to ask about residential projects in Greater Noida West."
    />
  );
}
