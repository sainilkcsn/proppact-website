import Image from "next/image";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { EmptyState } from "@/components/ui/EmptyState";
import type { Project } from "@/lib/projects-data";

type ProjectListingProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  projects: Project[];
  emptyTitle: string;
  emptyDescription: string;
  breadcrumbLabel: string;
  note?: string;
};

export function ProjectListing({
  title,
  description,
  imageSrc,
  imageAlt,
  projects,
  emptyTitle,
  emptyDescription,
  breadcrumbLabel,
  note,
}: ProjectListingProps) {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-primary">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-primary/70" aria-hidden />
        <Container className="relative py-12 sm:py-16">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Projects", href: "/projects" },
              { label: breadcrumbLabel },
            ]}
          />
          <h1 className="max-w-3xl font-heading text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/90 sm:text-lg">
            {description}
          </p>
        </Container>
      </section>
      <section className="py-12 sm:py-16">
        <Container>
          {note ? <p className="mb-6 text-sm text-muted-foreground">{note}</p> : null}
          {projects.length ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <EmptyState
              title={emptyTitle}
              description={emptyDescription}
              actionLabel="View featured projects"
              actionHref="/projects"
            />
          )}
        </Container>
      </section>
    </>
  );
}
