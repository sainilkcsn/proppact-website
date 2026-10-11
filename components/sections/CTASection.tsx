import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type CTASectionProps = {
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function CTASection({
  title = "Talk to a Property Expert",
  description = "Ask the PropPact team about projects in Greater Noida West, pricing guidance and site visits.",
  ctaLabel = "Get in Touch",
  ctaHref = "/contact-us",
}: CTASectionProps) {
  return (
    <section className="bg-primary py-16 sm:py-20">
      <Container className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        <ButtonLink href={ctaHref} variant="onDark" size="lg" className="shrink-0">
          {ctaLabel}
        </ButtonLink>
      </Container>
    </section>
  );
}
