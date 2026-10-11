import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PropertyAmenities } from "@/components/property/PropertyAmenities";
import { PropertyEnquiryForm } from "@/components/property/PropertyEnquiryForm";
import { PropertyGallery } from "@/components/property/PropertyGallery";
import { PropertyHighlights } from "@/components/property/PropertyHighlights";
import { PropertyLocation } from "@/components/property/PropertyLocation";
import { PropertyOverview } from "@/components/property/PropertyOverview";
import { SimilarProperties } from "@/components/property/SimilarProperties";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { PROPERTY_CATEGORY_CONFIGS } from "@/lib/property-categories";
import {
  PROPERTIES,
  getPropertyBySlug,
  getSimilarProperties,
} from "@/lib/property-data";
import { SITE } from "@/lib/site";

type PropertyPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return PROPERTIES.map((property) => ({ slug: property.slug }));
}

export function generateMetadata({ params }: PropertyPageProps): Metadata {
  const property = getPropertyBySlug(params.slug);
  if (!property) {
    return { title: "Property Not Found" };
  }

  const title = `${property.title} | ${property.locality}`;
  const description = `${property.title} in ${property.locality}, ${property.city}. ${property.priceLabel} · Demo listing for PropPact property discovery.`;

  return {
    robots: { index: false, follow: false },
    title,
    description,
    alternates: {
      canonical: `${SITE.url}/property/${property.slug}`,
    },
    openGraph: {
      url: `${SITE.url}/property/${property.slug}`,
      title: `${title} | PropPact`,
      description,
      images: [{ url: property.image }],
      type: "website",
    },
  };
}

export default function PropertyDetailPage({ params }: PropertyPageProps) {
  const property = getPropertyBySlug(params.slug);
  if (!property) notFound();

  const category = PROPERTY_CATEGORY_CONFIGS[property.category];
  const similar = getSimilarProperties(property, 3);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: category.title,
        item: `${SITE.url}/${category.slug}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: property.title,
        item: `${SITE.url}/property/${property.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="border-b border-border bg-background py-6">
        <Container>
          <p className="mb-4 rounded-md border border-secondary/30 bg-secondary/10 px-4 py-3 text-sm text-foreground">
            Demonstration listing for interface development. This is not a live
            PropPact project or a confirmed unit for sale.
          </p>
          <Breadcrumbs
            tone="onLight"
            items={[
              { label: "Home", href: "/" },
              { label: category.title, href: `/${category.slug}` },
              { label: property.title },
            ]}
          />
        </Container>
      </section>

      <section className="py-8 sm:py-12">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <PropertyGallery images={property.gallery} title={property.title} />
            <PropertyOverview property={property} />
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-10 sm:py-12">
        <Container className="max-w-3xl">
          <h2 className="font-heading text-2xl font-semibold text-primary sm:text-3xl">
            Property Overview
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {property.description}
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            Demonstration listing for PropPact UI development — not a live
            inventory claim.
          </p>
        </Container>
      </section>

      <PropertyHighlights highlights={property.highlights} />
      <PropertyAmenities amenities={property.amenities} />
      <PropertyLocation property={property} />
      <SimilarProperties properties={similar} />
      <PropertyEnquiryForm property={property} />
    </>
  );
}
