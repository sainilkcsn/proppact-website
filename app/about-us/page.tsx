import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `About Us | Trusted Real Estate Consultants in ${SITE.city}`,
  description: `Learn about PropPact's mission, team, and why buyers and sellers across ${SITE.city} trust us for residential and commercial property transactions.`,
  alternates: { canonical: `${SITE.url}/about-us` },
  openGraph: {
    url: `${SITE.url}/about-us`,
    title: `About PropPact | ${SITE.city}`,
    description: `Mission, values and team behind PropPact.`,
    images: [{ url: "/images/about-hero.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `About PropPact`,
    description: `Trusted real estate consultants in ${SITE.city}.`,
  },
};

const values = [
  {
    title: "Transparency",
    description: "no hidden charges, no misrepresented listings",
  },
  {
    title: "Integrity",
    description: "pricing and availability are confirmed with the team before you rely on them",
  },
  {
    title: "Client-first",
    description:
      "your budget and needs shape our recommendations, not our commission",
  },
];

const team = [
  {
    name: "[Founder/Owner Name]",
    role: "Founder",
    bio: "[Founder/owner name and short bio]",
    image: "/images/team-1.jpg",
  },
  {
    name: "[Team Member]",
    role: "Property Advisor",
    bio: "[Key team member bio — agents, legal advisor, etc.]",
    image: "/images/team-2.jpg",
  },
  {
    name: "[Team Member]",
    role: "Legal Advisor",
    bio: "[Key team member bio — agents, legal advisor, etc.]",
    image: "/images/team-3.jpg",
  },
];

const trustPoints = [
  "Verified listings with clear ownership and legal documentation",
  `Local market expertise across ${SITE.city} and surrounding areas`,
  "Dedicated relationship manager for every buyer and seller",
  "Support with home loans, legal paperwork, and property registration",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Who We Are"
        description={`PropPact is a ${SITE.city} property advisory. The published project pages use material supplied for Vista Homez, Madhav Kunj, Yuvraj Villa and Rudransh Urban Vista. Current prices and availability are confirmed with the team.`}
        imageSrc="/images/about-hero.jpg"
        imageAlt={`PropPact real estate consultants serving ${SITE.city}`}
      />

      <section className="py-14 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-heading text-3xl font-semibold text-primary">
              Our Story
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              [1–2 sentences on how/why the business started — founder
              background, years of experience, what gap in the market it fills.]
            </p>
          </div>
          <div>
            <h2 className="font-heading text-3xl font-semibold text-primary">
              Our Mission
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              To help buyers and sellers in {SITE.city} understand the projects we discuss, including the figures in the supplied material, and to confirm current pricing before a decision.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[#F1EFE9] py-14 sm:py-16">
        <Container>
          <h2 className="font-heading text-3xl font-semibold text-primary">
            Our Values
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-lg border border-border bg-white p-6 shadow-card"
              >
                <h3 className="font-heading text-xl font-semibold text-primary">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <h2 className="font-heading text-3xl font-semibold text-primary">
            Meet the Team
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {team.map((member) => (
              <article key={member.name + member.role} className="text-center">
                <div className="relative mx-auto aspect-square w-40 overflow-hidden rounded-full border border-border">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 font-heading text-xl font-semibold text-primary">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-accent">{member.role}</p>
                <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#F1EFE9] py-14 sm:py-16">
        <Container className="max-w-3xl">
          <h2 className="font-heading text-3xl font-semibold text-primary">
            Why Clients Trust PropPact
          </h2>
          <ul className="mt-6 space-y-3">
            {trustPoints.map((point) => (
              <li
                key={point}
                className="rounded-md border border-border bg-white px-4 py-3 text-sm text-muted-foreground"
              >
                {point}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-base leading-relaxed text-muted-foreground">
            PropPact has helped [X]+ families and businesses find the right
            property across {SITE.city}. Whether you&apos;re buying your first
            home or expanding your business footprint, we&apos;re here to make
            the process straightforward and trustworthy.
          </p>
          <div className="mt-8">
            <ButtonLink href="/contact-us" size="lg">
              Get in Touch With Our Team
            </ButtonLink>
          </div>
        </Container>
      </section>

      <CTASection
        title="Ready to work with PropPact?"
        ctaLabel="Get in Touch With Our Team"
        ctaHref="/contact-us"
      />
    </>
  );
}
