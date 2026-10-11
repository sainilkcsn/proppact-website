import { ProjectCard } from "@/components/projects/ProjectCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getFeaturedProjects } from "@/lib/projects-data";

export function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <section className="bg-background py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Selected developments"
          title="Featured Projects in Greater Noida West"
          description="Explore selected residential projects across Greater Noida West. Enquire with PropPact for updated pricing, availability and site visits."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
