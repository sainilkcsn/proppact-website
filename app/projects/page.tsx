import type { Metadata } from "next";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Container } from "@/components/ui/Container";
import { EmptyState } from "@/components/ui/EmptyState";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { filterProjects, PROJECTS } from "@/lib/projects-data";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Projects in ${SITE.city}`,
  description:
    "Selected residential projects in Greater Noida West. Enquire with PropPact for current pricing, charges and availability.",
  alternates: { canonical: `${SITE.url}/projects` },
  openGraph: {
    title: `Projects in ${SITE.city} | PropPact`,
    description:
      "Vista Homez, Madhav Kunj, Yuvraj Villa and Rudransh Urban Vista.",
    images: [{ url: "/images/projects/vista-homez/cover.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Projects in ${SITE.city} | PropPact`,
    description: "Selected residential projects discussed by PropPact.",
  },
};

type ProjectsPageProps = {
  searchParams: { type?: string; budget?: string; locality?: string };
};

export default function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const hasFilter = Boolean(
    searchParams.type || searchParams.budget || searchParams.locality
  );
  const projects = hasFilter ? filterProjects(searchParams) : PROJECTS;

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow={SITE.city}
          title="Projects in Greater Noida West"
          description="These pages summarise project material supplied to PropPact. They are not a live inventory. Current prices and availability are confirmed on enquiry."
        />
        {searchParams.budget ? (
          <p className="mt-4 text-sm text-muted-foreground">
            Projects marked “Price on enquiry” stay in these results because a
            current price band has not been confirmed.
          </p>
        ) : null}
        {searchParams.type === "plot" || searchParams.type === "commercial" ? (
          <p className="mt-4 text-sm text-muted-foreground">
            PropPact is not publishing plot or commercial projects on this site.
          </p>
        ) : null}
        {projects.length ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No matching projects"
            description="Try another property type or locality, or contact PropPact to discuss what you are looking for."
            actionHref="/contact-us"
            actionLabel="Contact PropPact"
          />
        )}
      </Container>
    </section>
  );
}
