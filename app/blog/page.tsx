import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BlogCard } from "@/components/blog/BlogCard";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { BLOG_CATEGORIES, BLOG_POSTS } from "@/lib/blog-data";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Real Estate Guides & Market Updates in ${SITE.city}`,
  description: `Buying guides for published residential projects in ${SITE.city}, plus checklists for documents, visits, and price lists. Current prices are confirmed with PropPact.`,
  alternates: { canonical: `${SITE.url}/blog` },
  openGraph: {
    url: `${SITE.url}/blog`,
    title: `PropPact Blog | ${SITE.city} Real Estate Resources`,
    description: `Buying guides and checklists for ${SITE.city}. Current prices are confirmed with PropPact.`,
    images: [{ url: "/images/blog-property.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `PropPact Real Estate Resources`,
    description: `Stay informed before you buy, sell, or invest in ${SITE.city}.`,
  },
};

export default function BlogPage() {
  const featured = BLOG_POSTS.find((post) => post.featured) ?? BLOG_POSTS[0];
  const recent = BLOG_POSTS.filter((post) => post.slug !== featured.slug);

  return (
    <>
      <PageHero
        title="PropPact Real Estate Resources"
        description={`Guides for buyers comparing published residential projects in ${SITE.city}, with checklists for documents, site visits, and how to read a price list. Current prices and availability are confirmed with the PropPact team.`}
        imageSrc="/images/blog-property.jpg"
        imageAlt={`Real estate guides and market updates for ${SITE.city}`}
      />

      <section className="py-10">
        <Container>
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
            These articles describe supplied project material and the checks a buyer can make.
            They do not publish a city-wide price index, predicted returns, or unpublished inventory.
            Open any article below. Each card links to a published guide.
          </p>
          <nav aria-label="Topics covered" className="mt-6 flex flex-wrap gap-2">
            {BLOG_CATEGORIES.map((category) => (
              <span
                key={category}
                className="rounded-md border border-border bg-white px-3 py-1.5 text-sm font-medium text-foreground"
              >
                {category}
              </span>
            ))}
          </nav>
        </Container>
      </section>

      <section className="pb-14 sm:pb-16">
        <Container className="space-y-12">
          <article className="grid overflow-hidden rounded-lg border border-border bg-white shadow-card lg:grid-cols-2">
            <div className="relative aspect-[16/11] lg:aspect-auto lg:min-h-[360px]">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                Featured Article · {featured.category}
              </p>
              <h2 className="mt-3 font-heading text-2xl font-semibold text-primary sm:text-3xl">
                <Link href={`/blog/${featured.slug}`}>{featured.title}</Link>
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                {featured.dateLabel}
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {featured.excerpt}
              </p>
              <Link
                href={`/blog/${featured.slug}`}
                className="mt-6 inline-flex text-sm font-medium text-primary hover:text-accent"
              >
                Read More
              </Link>
            </div>
          </article>

          <div>
            <h2 className="font-heading text-2xl font-semibold text-primary">
              Recent Articles
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {recent.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Subscribe for Market Updates"
        description="Reach out and ask to be added to PropPact market updates for your preferred localities."
        ctaLabel="Get in Touch"
        ctaHref="/contact-us"
      />
    </>
  );
}
