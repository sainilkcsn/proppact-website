import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { ContactCTA } from "@/components/ui/ContactCTA";
import type { Project } from "@/lib/projects-data";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-white shadow-card transition-shadow duration-300 hover:shadow-soft">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Link href={`/projects/${project.slug}`} className="block h-full">
          <Image
            src={project.coverImage}
            alt={project.coverAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </Link>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
          {project.categoryLabel}
        </p>
        <h3 className="font-heading text-xl font-semibold leading-snug text-primary">
          <Link
            href={`/projects/${project.slug}`}
            className="transition-colors hover:text-accent"
          >
            {project.name}
          </Link>
        </h3>
        <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 shrink-0 text-accent" aria-hidden />
          {project.locality}, {project.city}
        </p>
        <p className="text-sm text-muted-foreground">
          {project.configurations.join(" · ")} · {project.areaRange}
        </p>
        <p className="font-heading text-lg font-semibold text-primary">
          {project.priceLabel}
        </p>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          <ButtonLink href={`/projects/${project.slug}`} size="sm" variant="outline">
            View Project
          </ButtonLink>
          <ContactCTA
            action="enquire"
            href={`/projects/${project.slug}#enquire`}
            size="sm"
          />
        </div>
      </div>
    </article>
  );
}
