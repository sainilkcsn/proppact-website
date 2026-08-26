import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type EmptyStateProps = {
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
};

export function EmptyState({
  title,
  description,
  actionLabel = "Browse All Categories",
  actionHref = "/",
}: EmptyStateProps) {
  return (
    <Container className="py-16 sm:py-20">
      <div className="mx-auto max-w-xl rounded-lg border border-dashed border-border bg-white px-6 py-12 text-center shadow-card">
        <h2 className="font-heading text-2xl font-semibold text-primary">
          {title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>
        <ButtonLink href={actionHref} className="mt-6">
          {actionLabel}
        </ButtonLink>
        <p className="mt-4 text-sm text-muted-foreground">
          Or{" "}
          <Link href="/contact-us" className="font-medium text-primary underline-offset-2 hover:underline">
            talk to a property expert
          </Link>
          .
        </p>
      </div>
    </Container>
  );
}
