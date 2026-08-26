import type { Metadata } from "next";
import { CategoryPageTemplate } from "@/components/property/CategoryPageTemplate";
import { PROPERTY_CATEGORY_CONFIGS } from "@/lib/property-categories";
import { getPropertiesByCategory } from "@/lib/property-data";
import { SITE } from "@/lib/site";

const category = PROPERTY_CATEGORY_CONFIGS.commercial;

export const metadata: Metadata = {
  title: category.seo.title,
  description: category.seo.description,
  alternates: { canonical: `${SITE.url}/${category.slug}` },
  openGraph: {
    title: `${category.seo.title} | PropPact`,
    description: category.seo.description,
    images: [{ url: category.heroImage }],
  },
};

export default function CommercialPropertiesPage() {
  return (
    <CategoryPageTemplate
      category={category}
      properties={getPropertiesByCategory("commercial")}
    />
  );
}
