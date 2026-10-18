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
    url: `${SITE.url}/privacy-policy`,
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
    title: "Website Analytics",
    body: `PropPact uses Vercel Web Analytics on the public website to understand aggregate traffic: which pages and projects are visited, referring sites, approximate country, and browser, device and operating-system types. Clicks on Call Now, WhatsApp, Enquire Now and project pages can be counted in the same way. These events record the page path and, for a project page, the project name. They do not include your name, phone number, email address, enquiry message or raw IP address, and they are not stored as a visitor register on this website. Figures may be approximate. Hosting and server logs can still contain technical request details, including an IP address, for operating and securing the site. This analytics setup does not copy those addresses into analytics events. A separate system that stored raw IP addresses would need its own purpose, retention period, access limits and an updated notice before it was introduced. Vercel describes the analytics data points at https://vercel.com/docs/analytics/privacy-policy.`,
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
          <p className="text-sm text-muted-foreground">Last Updated: 18 Oct 2026</p>
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
