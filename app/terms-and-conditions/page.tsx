import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "PropPact's terms and conditions governing use of our website and real estate services.",
  alternates: { canonical: `${SITE.url}/terms-and-conditions` },
  openGraph: {
    title: "Terms & Conditions | PropPact",
    description: "Terms governing use of the PropPact website and services.",
  },
  twitter: {
    card: "summary",
    title: "Terms & Conditions | PropPact",
    description: "Website and service terms for PropPact.",
  },
};

const sections = [
  {
    title: "Acceptance of Terms",
    body: `By accessing or using the PropPact website, you agree to these terms and conditions. If you do not agree, please discontinue use of the site.`,
  },
  {
    title: "Accuracy of Listing Information",
    body: `Property details shown on this website are provided for general information and remain subject to verification. Availability, pricing, area, and specifications may change without notice.`,
  },
  {
    title: "No Guarantee",
    body: `PropPact does not guarantee that any listing will remain available, that financing will be approved, or that a transaction will complete. All deals are subject to due diligence, documentation, and mutual agreement between parties.`,
  },
  {
    title: "Intellectual Property",
    body: `All website content, branding, and materials are owned by PropPact or its licensors and may not be copied or reused without permission.`,
  },
  {
    title: "Limitation of Liability",
    body: `To the fullest extent permitted by law, PropPact is not liable for indirect, incidental, or consequential losses arising from use of this website or reliance on published information.`,
  },
  {
    title: "Governing Law",
    body: `These terms are governed by the laws of India. Disputes shall be subject to the jurisdiction of competent courts in ${SITE.city}, unless otherwise required by law. This page is a template and should be reviewed by a lawyer before publishing.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms & Conditions" />
      <section className="py-14 sm:py-16">
        <Container className="max-w-3xl space-y-8">
          <p className="text-sm text-muted-foreground">Last Updated: [Date]</p>
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-heading text-2xl font-semibold text-primary">
                {section.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {section.body}
              </p>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
