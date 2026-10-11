import type { Metadata } from "next";
import { ProjectListing } from "@/components/projects/ProjectListing";
import { PROPERTY_CATEGORY_CONFIGS } from "@/lib/property-categories";
import { SITE } from "@/lib/site";

const category = PROPERTY_CATEGORY_CONFIGS.plot;
const description =
  "PropPact is not publishing plot or land projects on this page. Contact the team if you want to discuss land in Greater Noida West.";

export const metadata: Metadata = {
  title: `Plots in ${SITE.city}`,
  description,
  alternates: { canonical: `${SITE.url}/${category.slug}` },
  openGraph: {
    url: `${SITE.url}/${category.slug}`,
    title: `Plots in ${SITE.city} | PropPact`,
    description,
    images: [{ url: category.heroImage }],
  },
};

export default function PlotsForSalePage() {
  return (
    <ProjectListing
      title={`Plots in ${SITE.city}`}
      description={description}
      imageSrc={category.heroImage}
      imageAlt={category.heroAlt}
      breadcrumbLabel="Plots"
      projects={[]}
      emptyTitle="No plot projects published"
      emptyDescription="There is no confirmed plot project to show. Contact PropPact if you want to discuss land in Greater Noida West."
    />
  );
}
