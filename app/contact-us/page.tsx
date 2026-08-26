import type { Metadata } from "next";
import Image from "next/image";
import {
  Clock3,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SITE, SOCIAL_LINKS } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact | Real Estate Experts in ${SITE.city}`,
  description: `Get in touch with PropPact for residential & commercial property inquiries in ${SITE.city}. Call, email, or visit our office — we're here to help.`,
  alternates: { canonical: `${SITE.url}/contact-us` },
  openGraph: {
    title: `Contact PropPact | Real Estate Experts in ${SITE.city}`,
    description: `Reach PropPact for property inquiries in ${SITE.city}.`,
    images: [{ url: "/images/contact-office.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact PropPact | ${SITE.city}`,
    description: `Call, email, or visit PropPact — responses typically within 24 hours.`,
  },
};

const socialIcons = {
  Facebook,
  Instagram,
  LinkedIn: Linkedin,
  Twitter,
} as const;

const socialLinks = SOCIAL_LINKS.map((link) => ({
  ...link,
  icon: socialIcons[link.label as keyof typeof socialIcons],
}));

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get in Touch with PropPact"
        description={`Have a question about a listing, want a free property valuation, or ready to start your property search in ${SITE.city}? Reach out — our team typically responds within 24 hours.`}
        imageSrc="/images/contact-office.jpg"
        imageAlt={`Contact PropPact office in ${SITE.city}`}
      />

      <section className="py-14 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <h2 className="font-heading text-2xl font-semibold text-primary sm:text-3xl">
              Office Details
            </h2>
            <ul className="space-y-4 text-sm text-muted-foreground sm:text-base">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                <div>
                  <p className="font-medium text-foreground">Office Address</p>
                  <p>{SITE.address}</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <a href={`tel:${SITE.phone}`} className="hover:text-primary">
                    {SITE.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a href={`mailto:${SITE.email}`} className="hover:text-primary">
                    {SITE.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                <div>
                  <p className="font-medium text-foreground">Working Hours</p>
                  <p>{SITE.hours}</p>
                </div>
              </li>
            </ul>

            <div className="flex gap-3 pt-1">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-white text-primary transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>

            <div className="relative mt-2 aspect-[16/10] overflow-hidden rounded-lg border border-border">
              <Image
                src="/images/contact-office.jpg"
                alt={`PropPact office visual in ${SITE.city}`}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-lg border border-border bg-muted">
              <div className="flex aspect-[16/9] items-center justify-center px-6 text-center text-sm text-muted-foreground">
                Google Map placeholder — add the verified PropPact office map
                embed for {SITE.city} when coordinates are confirmed.
              </div>
            </div>
          </div>

          <ContactForm />
        </Container>
      </section>
    </>
  );
}
