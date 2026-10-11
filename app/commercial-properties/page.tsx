import type { Metadata } from "next";
import { ProjectListing } from "@/components/projects/ProjectListing";
import { PROPERTY_CATEGORY_CONFIGS } from "@/lib/property-categories";
import { SITE } from "@/lib/site";

const category = PROPERTY_CATEGORY_CONFIGS.commercial;
const description =
  "PropPact is not publishing commercial projects on this page. Contact the team if you want to discuss commercial property in Greater Noida West.";

export const metadata: Metadata = {
  title: `Commercial property in ${SITE.city}`,
  description,
  alternates: { canonical: `${SITE.url}/${category.slug}` },
  openGraph: {
    title: `Commercial property in ${SITE.city} | PropPact`,
    description,
    images: [{ url: category.heroImage }],
  },
};

export default function CommercialPropertiesPage() {
  return (
    <ProjectListing
      title={`Commercial property in ${SITE.city}`}
      description={description}
      imageSrc={category.heroImage}
      imageAlt={category.heroAlt}
      breadcrumbLabel="Commercial"
      projects={[]}
      emptyTitle="No commercial projects published"
      emptyDescription="There is no confirmed commercial project to show. Contact PropPact to discuss what you need."
    />
  );
}
