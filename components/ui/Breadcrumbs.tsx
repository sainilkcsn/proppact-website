import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  tone?: "onDark" | "onLight";
};

export function Breadcrumbs({ items, tone = "onDark" }: BreadcrumbsProps) {
  const muted =
    tone === "onDark"
      ? "text-primary-foreground/80"
      : "text-muted-foreground";
  const current =
    tone === "onDark" ? "text-primary-foreground" : "text-primary";
  const hover =
    tone === "onDark"
      ? "hover:text-primary-foreground"
      : "hover:text-primary";

  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className={cn("flex flex-wrap items-center gap-1.5 text-sm", muted)}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li
              key={`${item.label}-${index}`}
              className="inline-flex items-center gap-1.5"
            >
              {index > 0 ? (
                <ChevronRight className="h-3.5 w-3.5 opacity-70" aria-hidden />
              ) : null}
              {item.href && !isLast ? (
                <Link href={item.href} className={hover}>
                  {item.label}
                </Link>
              ) : (
                <span
                  className={isLast ? cn("font-medium", current) : undefined}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
