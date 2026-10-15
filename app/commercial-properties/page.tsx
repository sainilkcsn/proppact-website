import type { Metadata } from "next";
import Link from "next/link";
import { ProjectListing } from "@/components/projects/ProjectListing";
import { Container } from "@/components/ui/Container";
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
    url: `${SITE.url}/${category.slug}`,
    title: `Commercial property in ${SITE.city} | PropPact`,
    description,
    images: [{ url: category.heroImage }],
  },
};

export default function CommercialPropertiesPage() {
  return (
    <>
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
      <section className="border-t border-border pb-16">
        <Container>
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
            <Link
              href="/blog/commercial-property-first-time-buyers"
              className="font-medium text-primary underline decoration-primary/30 underline-offset-2 hover:text-accent"
            >
              Read what first-time commercial buyers should check
            </Link>{" "}
            before you enquire. The guide covers cost, lease assumptions, occupancy, and documents. It does not quote a yield.
          </p>
        </Container>
      </section>
    </>
  );
}
