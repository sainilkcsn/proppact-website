import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { LeadCaptureForm } from "@/components/forms/LeadCaptureForm";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { OfficeMap } from "@/components/maps/OfficeMap";
import { ContactCTA } from "@/components/ui/ContactCTA";
import { Container } from "@/components/ui/Container";
import type { Project } from "@/lib/projects-data";
import { getSimilarProjects } from "@/lib/projects-data";
import { SITE, projectWhatsappMessage } from "@/lib/site";

type ProjectDetailProps = {
  project: Project;
  intent?: string;
};

export function ProjectDetail({ project, intent }: ProjectDetailProps) {
  const similar = getSimilarProjects(project.slug);
  const initialEnquiryType = intent === "site-visit" ? "site_visit" : "project";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: `${SITE.url}/projects`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.name,
        item: `${SITE.url}/projects/${project.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="border-b border-border bg-background py-6">
        <Container>
          <Breadcrumbs
            tone="onLight"
            items={[
              { label: "Home", href: "/" },
              { label: "Projects", href: "/projects" },
              { label: project.name },
            ]}
          />
        </Container>
      </section>

      <section className="py-8 sm:py-12">
        <Container className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border">
            <Image
              src={project.coverImage}
              alt={project.coverAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
              {project.categoryLabel}
            </p>
            <h1 className="mt-2 font-heading text-3xl font-semibold text-primary sm:text-4xl">
              {project.name}
            </h1>
            <p className="mt-3 flex items-start gap-2 text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
              {project.address}
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              {project.configurations.join(" · ")}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{project.areaRange}</p>
            <p className="mt-4 font-heading text-2xl font-semibold text-primary">
              {project.priceLabel}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{project.priceInformation}</p>
            <p className="mt-2 text-sm text-muted-foreground">{project.availabilityLabel}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ContactCTA action="enquire" href={`/projects/${project.slug}#enquire`} />
              <ContactCTA action="call" />
              <ContactCTA
                action="enquire"
                href={`/projects/${project.slug}?intent=site-visit#enquire`}
                label="Request a Site Visit"
                variant="outline"
              />
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              A site-visit request is an enquiry. The team will confirm the arrangements separately.
            </p>
            <div className="mt-3">
              <ContactCTA
                action="whatsapp"
                whatsappMessage={projectWhatsappMessage(project.name)}
                label={`WhatsApp about ${project.name}`}
                size="sm"
                variant="ghost"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-12 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-2xl font-semibold text-primary">
                Project overview
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-semibold text-primary">
                From the supplied material
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {project.developer ? (
                <p className="mt-4 text-sm text-muted-foreground">
                  Developer named in the supplied brochure: {project.developer}
                </p>
              ) : null}
              {project.marketer ? (
                <p className="mt-1 text-sm text-muted-foreground">
                  Marketing attribution in the supplied brochure: {project.marketer}
                </p>
              ) : null}
            </div>
            <div>
              <h2 className="font-heading text-2xl font-semibold text-primary">
                Pricing
              </h2>
              <p className="mt-3 text-base leading-relaxed text-foreground">
                {project.priceLabel}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {project.priceInformation}
              </p>
            </div>
            {project.historicalPriceGuide ? (
              <div>
                <h2 className="font-heading text-2xl font-semibold text-primary">
                  {project.historicalPriceGuide.heading}
                </h2>
                <div className="mt-4 overflow-x-auto rounded-lg border border-border">
                  <table className="min-w-full text-left text-sm">
                    <thead className="bg-muted text-foreground">
                      <tr>
                        <th className="px-4 py-3 font-medium">Configuration</th>
                        <th className="px-4 py-3 font-medium">Detail</th>
                        <th className="px-4 py-3 font-medium">Amount in source</th>
                      </tr>
                    </thead>
                    <tbody>
                      {project.historicalPriceGuide.rows.map((row) => (
                        <tr key={`${row.configuration}-${row.detail}`} className="border-t border-border">
                          <td className="px-4 py-3">{row.configuration}</td>
                          <td className="px-4 py-3">{row.detail}</td>
                          <td className="px-4 py-3">{row.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  {project.historicalPriceGuide.extraCharges.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {project.historicalPriceGuide.disclaimer}
                </p>
              </div>
            ) : null}
            <div>
              <h2 className="font-heading text-2xl font-semibold text-primary">
                Location
              </h2>
              <p className="mt-3 text-muted-foreground">{project.address}</p>
              {project.verifiedOfficePin ? (
                <div className="mt-4">
                  <OfficeMap />
                </div>
              ) : (
                <p className="mt-3 text-sm text-muted-foreground">
                  A map pin is shown only when this project&apos;s coordinates have been verified.
                  The address above is the location stated in the supplied material.
                </p>
              )}
              <p className="mt-3">
                <Link
                  href={project.mapUrl}
                  className="font-medium text-primary underline-offset-2 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open this location in Google Maps
                </Link>
              </p>
            </div>
          </div>
          <LeadCaptureForm
            id="enquire"
            title={`Enquire about ${project.name}`}
            sourcePath={`/projects/${project.slug}`}
            enquiryType={initialEnquiryType}
            projectSlug={project.slug}
            projectName={project.name}
            allowSiteVisit
          />
        </Container>
      </section>

      <section className="border-t border-border bg-[#F1EFE9] py-12 sm:py-16">
        <Container>
          <h2 className="font-heading text-2xl font-semibold text-primary sm:text-3xl">
            Similar projects
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {similar.map((item) => (
              <ProjectCard key={item.id} project={item} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
