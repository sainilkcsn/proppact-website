import type { Project } from "@/lib/projects-data";
import { getPropertyMapLinks } from "@/lib/projects-data";

const linkClass =
  "inline-flex min-h-11 items-center font-medium text-primary underline decoration-primary/30 underline-offset-2 hover:text-accent";

export function PropertyMapLinks({ project }: { project: Project }) {
  const links = getPropertyMapLinks(project);

  return (
    <div className="mt-4 space-y-3">
      {links.note ? (
        <p className="text-sm leading-relaxed text-muted-foreground">{links.note}</p>
      ) : null}
      <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
        <a
          href={links.viewHref}
          className={linkClass}
          target="_blank"
          rel="noopener noreferrer"
        >
          {links.viewLabel}
        </a>
        <a
          href={links.directionsHref}
          className={linkClass}
          target="_blank"
          rel="noopener noreferrer"
        >
          {links.directionsLabel}
        </a>
      </div>
    </div>
  );
}
