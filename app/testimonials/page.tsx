import type { Metadata } from "next";
import { Quote, Star } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { SITE, TESTIMONIALS } from "@/lib/site";

export const metadata: Metadata = {
  title: `Client Testimonials | Reviews in ${SITE.city}`,
  description: `Read what buyers, sellers and investors say about their experience working with PropPact for residential and commercial property in ${SITE.city}.`,
  alternates: { canonical: `${SITE.url}/testimonials` },
  openGraph: {
    url: `${SITE.url}/testimonials`,
    title: `Client Testimonials | PropPact ${SITE.city}`,
    description: `Buyer, seller and investor experiences with PropPact.`,
    images: [{ url: "/images/testimonials.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `What Our Clients Say | PropPact`,
    description: `Social proof from PropPact property journeys in ${SITE.city}.`,
  },
};

/** Placeholder quotes for layout only — replace with approved client testimonials. */
const displayTestimonials = TESTIMONIALS.map((item, index) => ({
  ...item,
  rating: 5,
  quote:
    item.quote.startsWith("[")
      ? [
          "PropPact guided us patiently through shortlisting and documentation. The process felt organised and transparent from first visit to closing.",
          "We appreciated the clear communication and locality advice while evaluating villa options. Site visits were well coordinated.",
          "The team helped us understand paperwork checkpoints before we committed to a plot. That due diligence gave us confidence.",
          "For our commercial search, PropPact compared locations and use-case fit without pressure. A professional experience overall.",
        ][index] ?? item.quote
      : item.quote,
  name: item.name.startsWith("[")
    ? ["A. Sharma", "R. Mehta", "S. Kapoor", "N. Verma"][index]
    : item.name,
  locality: item.locality.startsWith("[")
    ? ["Sector 62", "Greater Noida West", "Yamuna Expressway", "Sector 18"][
        index
      ]
    : item.locality,
}));

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        title="What Our Clients Say"
        description={`Don't just take our word for it — hear from buyers, sellers, and investors who've worked with PropPact across ${SITE.city}.`}
        imageSrc="/images/testimonials.jpg"
        imageAlt={`Client testimonials for PropPact in ${SITE.city}`}
      />

      <section className="py-14 sm:py-16">
        <Container>
          <p className="mb-8 max-w-2xl text-sm text-muted-foreground">
            Placeholder testimonials for website layout. Replace with approved
            client reviews before public launch.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {displayTestimonials.map((item) => (
              <blockquote
                key={`${item.name}-${item.propertyType}`}
                className="rounded-lg border border-border bg-white p-6 shadow-card"
              >
                <div className="flex items-center justify-between gap-3">
                  <Quote className="h-6 w-6 text-accent" aria-hidden />
                  <div className="flex gap-0.5" aria-label={`${item.rating} out of 5 stars`}>
                    {Array.from({ length: item.rating }).map((_, star) => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-accent text-accent"
                        aria-hidden
                      />
                    ))}
                  </div>
                </div>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  “{item.quote}”
                </p>
                <footer className="mt-5 border-t border-border pt-4">
                  <cite className="not-italic">
                    <span className="font-semibold text-primary">{item.name}</span>
                    <span className="mt-1 block text-sm text-muted-foreground">
                      {item.locality} · {item.propertyType}
                    </span>
                  </cite>
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/contact-us" variant="outline">
              Share Your Experience
            </ButtonLink>
            <ButtonLink href="/contact-us">Talk to PropPact</ButtonLink>
          </div>
        </Container>
      </section>

      <CTASection title="Share Your Experience" ctaHref="/contact-us" />
    </>
  );
}
