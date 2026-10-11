import type { Metadata } from "next";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { FAQS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `FAQs | Buying & Selling Property in ${SITE.city}`,
  description: `Answers to common questions about buying, selling, and investing in residential & commercial property in ${SITE.city} with PropPact.`,
  alternates: { canonical: `${SITE.url}/faq` },
  openGraph: {
    url: `${SITE.url}/faq`,
    title: `FAQs | PropPact ${SITE.city}`,
    description: `Common questions about buying and selling property with PropPact.`,
  },
  twitter: {
    card: "summary",
    title: `FAQs | PropPact`,
    description: `Buying & selling property questions answered.`,
  },
};

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero
        title="Frequently Asked Questions"
        description={`Answers to common questions about buying, selling, and investing in residential & commercial property in ${SITE.city} with PropPact.`}
      />

      <section className="py-14 sm:py-16">
        <Container className="max-w-3xl">
          <FaqAccordion items={FAQS} />
        </Container>
      </section>

      <CTASection
        title="Still Have Questions? Contact Us"
        ctaLabel="Get in Touch"
        ctaHref="/contact-us"
      />
    </>
  );
}
