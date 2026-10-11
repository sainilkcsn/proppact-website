import type { Metadata } from "next";
import Image from "next/image";
import {
  BadgeCheck,
  Handshake,
  LineChart,
  Megaphone,
  ShieldCheck,
  Users,
} from "lucide-react";
import { LeadCaptureForm } from "@/components/forms/LeadCaptureForm";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Sell Your Property in ${SITE.city}`,
  description: `Tell PropPact about a property you want to sell in ${SITE.city}. The team will follow up using the contact details you provide.`,
  alternates: { canonical: `${SITE.url}/sell-your-property` },
  openGraph: {
    url: `${SITE.url}/sell-your-property`,
    title: `Sell Your Property in ${SITE.city} | PropPact`,
    description: `Sell your flat, villa, plot or commercial property faster with PropPact.`,
    images: [{ url: "/images/sell-property.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Sell Your Property in ${SITE.city} | PropPact`,
    description: `Free property valuation and end-to-end selling support with PropPact.`,
  },
};

const whySell = [
  {
    title: "Serious buyer network",
    description:
      "Share your property and the team will follow up with buyers they are already speaking with.",
    icon: Users,
  },
  {
    title: "Transparent pricing guidance",
    description:
      "Market-based valuation support so you price confidently from day one.",
    icon: LineChart,
  },
  {
    title: "End-to-end process support",
    description:
      "From site visits and negotiations to paperwork and registration support.",
    icon: Handshake,
  },
  {
    title: "Documentation discussed with you",
    description:
      "Ownership and paperwork questions are reviewed with you. This page does not confirm a completed legal check.",
    icon: ShieldCheck,
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Share Your Property",
    description:
      "Share your property details for a free valuation — configuration, locality, size, and expected price.",
  },
  {
    step: "02",
    title: "Property Evaluation",
    description:
      "Our team reviews pricing against local market context and prepares a clear listing approach.",
  },
  {
    step: "03",
    title: "Marketing & Buyer Matching",
    description:
      "We share it with buyers the team is already speaking with and coordinate site visits you approve.",
  },
  {
    step: "04",
    title: "Negotiation & Closing",
    description:
      "We manage negotiations and paperwork so you can close with full documentation support.",
  },
];

const propertyTypes = [
  "Residential flats & apartments",
  "Villas & independent houses",
  "Plots & land",
  "Commercial spaces",
];

const processNotes = [
  "Pricing it right",
  "Reaching genuine buyers",
  "Closing the deal safely",
];

export default function SellPropertyPage() {
  return (
    <>
      <PageHero
        title="Sell Your Property with PropPact"
        description={`Selling property involves more than just listing it — pricing it right, reaching genuine buyers, and closing the deal safely. PropPact helps property owners in ${SITE.city} do all three, faster.`}
        imageSrc="/images/sell-property.jpg"
        imageAlt={`Sell your property in ${SITE.city} with PropPact`}
      />

      <section className="py-14 sm:py-16">
        <Container>
          <h2 className="font-heading text-2xl font-semibold text-primary sm:text-3xl">
            Why Sell Through PropPact
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whySell.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-lg border border-border bg-white p-5 shadow-card"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-[#F1EFE9] py-14 sm:py-16">
        <Container>
          <h2 className="font-heading text-2xl font-semibold text-primary sm:text-3xl">
            How It Works
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((item) => (
              <article
                key={item.step}
                className="rounded-lg border border-border bg-white p-5 shadow-card"
              >
                <p className="text-sm font-semibold tracking-[0.14em] text-accent">
                  {item.step}
                </p>
                <h3 className="mt-3 font-heading text-xl font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-primary sm:text-3xl">
              Property Types We Handle
            </h2>
            <ul className="mt-6 space-y-3">
              {propertyTypes.map((type) => (
                <li
                  key={type}
                  className="flex items-center gap-3 rounded-md border border-border bg-white px-4 py-3 text-sm text-muted-foreground"
                >
                  <BadgeCheck className="h-4 w-4 text-accent" aria-hidden />
                  {type}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[16/11] overflow-hidden rounded-lg border border-border">
            <Image
              src="/images/sell-property.jpg"
              alt={`Property owners selling with PropPact in ${SITE.city}`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="bg-[#F1EFE9] py-14 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-primary sm:text-3xl">
              Selling Process
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Selling through PropPact starts with the details you share. The team follows up on pricing, visits and paperwork. Buyer verification is not claimed on this page.
            </p>
            <ul className="mt-6 space-y-3">
              {processNotes.map((note) => (
                <li
                  key={note}
                  className="flex items-center gap-3 text-sm font-medium text-foreground"
                >
                  <Megaphone className="h-4 w-4 text-accent" aria-hidden />
                  {note}
                </li>
              ))}
            </ul>
            <ButtonLink href="#seller-form" className="mt-8">
              List My Property
            </ButtonLink>
          </div>
          <LeadCaptureForm
            id="seller-form"
            title="Tell us about the property"
            sourcePath="/sell-your-property"
            enquiryType="seller"
            variant="seller"
          />
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container className="max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-semibold text-primary sm:text-3xl">
            Why PropPact
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            PropPact follows up on seller enquiries in {SITE.city} using the
            contact details you provide. Current pricing is discussed with the
            team and is not calculated on this page.
          </p>
        </Container>
      </section>

      <CTASection
        title="Get a Free Property Valuation"
        ctaLabel="List My Property"
        ctaHref="#seller-form"
      />
    </>
  );
}
