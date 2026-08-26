import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read PropPact's privacy policy to understand how we collect, use, and protect your personal information.",
  alternates: { canonical: `${SITE.url}/privacy-policy` },
  openGraph: {
    title: "Privacy Policy | PropPact",
    description: "How PropPact collects, uses, and protects personal information.",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | PropPact",
    description: "PropPact privacy practices overview.",
  },
};

const sections = [
  {
    title: "Information We Collect",
    body: `We may collect personal information you provide through our website forms and communications, including your name, phone number, email address, and property preferences. We may also collect limited technical information such as browser type and pages visited to improve site performance.`,
  },
  {
    title: "How We Use Your Information",
    body: `We use your information to respond to inquiries, contact leads about property opportunities, schedule site visits, and send relevant updates about listings or services when you have requested them.`,
  },
  {
    title: "Sharing With Third Parties",
    body: `We may share necessary details with trusted partners such as legal advisors or lending partners only when required to fulfill a service you requested. We do not sell personal information.`,
  },
  {
    title: "Cookies",
    body: `Our website may use cookies or similar technologies to remember preferences and understand how visitors use the site. You can control cookies through your browser settings.`,
  },
  {
    title: "Data Retention",
    body: `We retain personal information only for as long as needed to provide our services, meet legal obligations, or resolve disputes.`,
  },
  {
    title: "Your Rights",
    body: `You may request access, correction, or deletion of your personal information by contacting us at ${SITE.email}. We will respond within a reasonable timeframe.`,
  },
  {
    title: "Contact",
    body: `For privacy-related requests, contact PropPact at ${SITE.email} or ${SITE.phone}. This policy is a template and should be reviewed by a lawyer before publishing.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" />
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
