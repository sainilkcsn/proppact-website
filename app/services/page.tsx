import type { Metadata } from "next";
import Image from "next/image";
import {
  BriefcaseBusiness,
  ClipboardCheck,
  FileSearch,
  HandCoins,
  KeyRound,
  Scale,
} from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SERVICES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Real Estate Services in ${SITE.city}`,
  description: `From property search to loans, legal checks and registration — PropPact offers end-to-end real estate services for buyers, sellers & investors in ${SITE.city}.`,
  alternates: { canonical: `${SITE.url}/services` },
  openGraph: {
    title: `Real Estate Services in ${SITE.city} | PropPact`,
    description: `End-to-end real estate services for buyers, sellers & investors in ${SITE.city}.`,
    images: [{ url: "/images/services.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Real Estate Services in ${SITE.city} | PropPact`,
    description: `Property search, legal checks, loans, valuation and registration support.`,
  },
};

const serviceExtras = [
  {
    icon: FileSearch,
    id: "property-search-advisory",
    benefits: [
      "Budget and locality-aligned shortlists",
      "Site visit coordination",
      "Clear comparison of options",
    ],
  },
  {
    icon: Scale,
    id: "legal-title-verification",
    benefits: [
      "Ownership document review",
      "Title and encumbrance checks",
      "Risk flags before commitment",
    ],
  },
  {
    icon: HandCoins,
    id: "home-loan-assistance",
    benefits: [
      "Loan guidance for eligible buyers",
      "Lender coordination support",
      "Documentation readiness help",
    ],
  },
  {
    icon: ClipboardCheck,
    id: "valuation-services",
    benefits: [
      "Market-based pricing context",
      "Seller and buyer valuation support",
      "Transparent listing recommendations",
    ],
  },
  {
    icon: BriefcaseBusiness,
    id: "registration-documentation-support",
    benefits: [
      "Paperwork coordination",
      "Registration process guidance",
      "End-to-end closing support",
    ],
  },
  {
    icon: KeyRound,
    id: "rental-leasing-assistance",
    benefits: [
      "Owner and tenant matching support",
      "Commercial lease assistance",
      "Process guidance for both sides",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Real Estate Services"
        description={`Buying or selling property involves more than the transaction itself. PropPact supports clients across ${SITE.city} with a full range of services designed to make the process smooth and risk-free.`}
        imageSrc="/images/services.jpg"
        imageAlt={`PropPact real estate services in ${SITE.city}`}
      />

      <section className="py-14 sm:py-16">
        <Container className="space-y-12">
          <h2 className="font-heading text-2xl font-semibold text-primary sm:text-3xl">
            Our Services Include
          </h2>

          {SERVICES.map((service, index) => {
            const extra = serviceExtras[index];
            const Icon = extra?.icon ?? FileSearch;
            const reverse = index % 2 === 1;

            return (
              <article
                key={service.title}
                id={extra?.id}
                className="scroll-mt-28 grid items-center gap-8 rounded-lg border border-border bg-white p-5 shadow-card sm:p-8 lg:grid-cols-2"
              >
                <div className={reverse ? "lg:order-2" : undefined}>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {(extra?.benefits ?? []).map((benefit) => (
                      <li
                        key={benefit}
                        className="text-sm text-muted-foreground before:mr-2 before:text-accent before:content-['•']"
                      >
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <ButtonLink href="/contact-us" className="mt-6">
                    Discuss Your Requirement With Us
                  </ButtonLink>
                </div>
                <div
                  className={`relative aspect-[16/11] overflow-hidden rounded-lg ${
                    reverse ? "lg:order-1" : ""
                  }`}
                >
                  <Image
                    src="/images/services.jpg"
                    alt={`${service.title} with PropPact`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </article>
            );
          })}

          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
            Whether you need a single service or complete end-to-end support,
            PropPact&apos;s team works alongside you at every stage of your
            property journey in {SITE.city}.
          </p>
        </Container>
      </section>

      <CTASection
        title="Discuss Your Requirement With Us"
        ctaLabel="Get in Touch"
        ctaHref="/contact-us"
      />
    </>
  );
}
