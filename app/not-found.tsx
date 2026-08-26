import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: `The page you requested could not be found on PropPact.`,
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <Container className="max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
          404
        </p>
        <h1 className="mt-3 font-heading text-4xl font-semibold text-primary sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          The page you are looking for may have moved or no longer exists.
          Continue exploring PropPact properties and services in {SITE.city}.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/">Back to Home</ButtonLink>
          <ButtonLink href="/residential-properties" variant="outline">
            Browse Properties
          </ButtonLink>
          <ButtonLink href="/contact-us" variant="ghost">
            Contact an Expert
          </ButtonLink>
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Need help?{" "}
          <Link href="/faq" className="font-medium text-primary hover:underline">
            Visit FAQs
          </Link>
        </p>
      </Container>
    </section>
  );
}
