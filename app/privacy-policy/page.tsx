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
    body: `If you send an enquiry through this website, we collect the details you submit, such as your name, phone number, email address if you provide one, the project or property you ask about, and your message. We also store the page the form was sent from so the team can see what you were viewing.`,
  },
  {
    title: "How We Use Your Information",
    body: `PropPact uses those details to respond to your enquiry and to follow up on the property interest you described. We do not publish enquiry records on the website.`,
  },
  {
    title: "Contact",
    body: `For privacy questions about an enquiry, contact PropPact at ${SITE.email} or ${SITE.phone}. Office address: ${SITE.address}.`,
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
