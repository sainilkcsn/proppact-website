import type { Metadata } from "next";
import Image from "next/image";
import { ClipboardCheck, Eye, Users } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { SITE } from "@/lib/site";

const pageTitle = "About PropPact Realty Pvt Ltd | Our Founders & Experience";
const pageDescription =
  "Meet the founders of PropPact Realty and learn about their collective real-estate experience, customer-focused approach and property guidance in Greater Noida West.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${SITE.url}/about-us` },
  openGraph: {
    url: `${SITE.url}/about-us`,
    siteName: SITE.legalName,
    title: pageTitle,
    description: pageDescription,
    images: [{ url: "/images/about-hero.jpg", alt: "PropPact Realty" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

const founders = [
  {
    name: "Vikash Kumar",
    role: "Managing Director & Chief Executive Officer (MD & CEO)",
    image: "/images/founders/vikash-kumar.jpg",
    alt: "Vikash Kumar, Managing Director and CEO of PropPact Realty",
    bio: "Vikash Kumar leads PropPact Realty as Managing Director & CEO. With the founding team's experience spanning more than a decade in the real estate business, he contributes to the company's direction and its focus on customer-oriented property discovery and guidance.",
  },
  {
    name: "Anamika Singh",
    role: "Director",
    image: "/images/founders/anamika-singh.jpg",
    alt: "Anamika Singh, Director of PropPact Realty",
    bio: "Anamika Singh is a Director at PropPact Realty and is part of the founding team behind the company's real-estate journey. The founders' collective experience informs PropPact's emphasis on understanding customer requirements and helping people evaluate property options.",
  },
  {
    name: "Saurabh Kumar",
    role: "Director",
    image: "/images/founders/saurabh-kumar.jpg",
    alt: "Saurabh Kumar, Director of PropPact Realty",
    bio: "Saurabh Kumar serves as a Director at PropPact Realty and is part of the founding team bringing more than a decade of collective real-estate experience to the business. The team's approach is centred on practical property guidance, clarity and customer relationships.",
  },
];

const principles = [
  {
    title: "Transparency",
    description:
      "We encourage customers to ask questions, understand relevant property details and seek clear information about pricing and availability.",
    icon: Eye,
  },
  {
    title: "Customer Focus",
    description:
      "We recognise that every buyer has different requirements. Our aim is to help people compare options according to their individual needs and circumstances.",
    icon: Users,
  },
  {
    title: "Informed Decisions",
    description:
      "We encourage property buyers to review layouts, understand total costs, inspect locations and verify relevant documentation before committing.",
    icon: ClipboardCheck,
  },
];

export default function AboutPage() {
  const peopleSchema = {
    "@context": "https://schema.org",
    "@graph": founders.map((founder) => ({
      "@type": "Person",
      name: founder.name,
      jobTitle: founder.role,
      image: `${SITE.url}${founder.image}`,
      description: founder.bio,
      worksFor: { "@id": `${SITE.url}/#organization` },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(peopleSchema) }}
      />
      <PageHero
        title="About PropPact Realty Pvt Ltd"
        description="PropPact Realty is focused on helping people explore property opportunities with greater clarity and confidence."
        imageSrc="/images/about-hero.jpg"
        imageAlt="Residential architecture associated with PropPact Realty"
      />

      <section className="bg-[#F8F7F4] py-14 sm:py-16">
        <Container className="max-w-3xl space-y-4 text-base leading-relaxed text-[#1A1A1A]">
          <p>
            We believe that finding the right property involves more than browsing listings—it requires understanding the location, comparing available options, asking the right questions and verifying important details before making a decision.
          </p>
          <p>
            Serving buyers exploring Greater Noida West and the surrounding areas, PropPact brings together property information, practical guidance and a people-first approach to the home-buying journey.
          </p>
          <p>
            Our goal is to make the process of discovering and evaluating property options more informed, transparent and convenient for the people we serve.
          </p>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border">
            <Image
              src="/images/about-hero.jpg"
              alt="Residential building exterior"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-heading text-3xl font-semibold text-primary sm:text-4xl">
              Built on Experience. Focused on People.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                The founders of PropPact Realty have been working in the real estate business for over a decade. Their experience has shaped the way we approach property discovery, customer conversations and the importance of understanding a buyer&apos;s individual requirements.
              </p>
              <p>
                We recognise that purchasing or selling property is a significant decision. Every customer has different priorities, whether they are searching for a family home, comparing residential configurations or exploring a property opportunity for the future.
              </p>
              <p>
                At PropPact, we aim to make those decisions easier to navigate by helping customers explore their options, ask informed questions and seek clarity on property details, pricing and availability.
              </p>
              <p>
                We believe that lasting relationships are built through clear communication, realistic expectations and a customer-focused approach.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#F1EFE9] py-14 sm:py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-semibold text-primary sm:text-4xl">
              Meet Our Founders
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              PropPact Realty is guided by its founding team, bringing real-estate experience, leadership and a shared commitment to helping customers navigate property decisions with greater clarity.
            </p>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {founders.map((founder) => (
              <article
                key={founder.name}
                className="flex flex-col overflow-hidden rounded-lg border border-border bg-white shadow-card"
              >
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={founder.image}
                    alt={founder.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover object-[center_20%]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-2xl font-semibold text-primary">
                    {founder.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-accent">{founder.role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {founder.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <h2 className="font-heading text-3xl font-semibold text-primary sm:text-4xl">
            Our Approach
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {principles.map((principle) => {
              const Icon = principle.icon;
              return (
                <article
                  key={principle.title}
                  className="rounded-lg border border-border bg-white p-6 shadow-card"
                >
                  <Icon className="h-6 w-6 text-accent" aria-hidden />
                  <h3 className="mt-4 font-heading text-xl font-semibold text-primary">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {principle.description}
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-primary py-16 sm:py-20">
        <Container>
          <h2 className="max-w-3xl font-heading text-3xl font-semibold text-primary-foreground sm:text-4xl">
            Let&apos;s Find the Right Property for You
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            Every property search begins with understanding what matters to you. Tell us about your requirements, preferred location and budget, and our team can help you explore relevant property options and request current project information.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/residential-properties" variant="onDark" size="lg">
              Explore Properties
            </ButtonLink>
            <ButtonLink href="/contact-us" variant="onDarkOutline" size="lg">
              Contact PropPact
            </ButtonLink>
          </div>
          <ul className="mt-8 space-y-2 text-sm text-primary-foreground/90">
            <li>
              Phone:{" "}
              <a className="underline underline-offset-2" href={SITE.phoneHref}>
                {SITE.phone}
              </a>
            </li>
            <li>
              Email:{" "}
              <a className="underline underline-offset-2" href={SITE.emailHref}>
                {SITE.email}
              </a>
            </li>
            <li>
              Website:{" "}
              <a className="underline underline-offset-2" href={SITE.url}>
                {SITE.url}
              </a>
            </li>
          </ul>
        </Container>
      </section>
    </>
  );
}
