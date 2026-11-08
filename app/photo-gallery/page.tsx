import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { GALLERY_ALBUMS } from "@/lib/gallery-data";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "Browse PropPact Realty photo albums, including festive celebrations and memorable moments from our team.",
  alternates: { canonical: `${SITE.url}/photo-gallery` },
  openGraph: {
    url: `${SITE.url}/photo-gallery`,
    title: "Photo Gallery | PropPact Realty",
    description:
      "Browse PropPact Realty photo albums, including festive celebrations and memorable moments from our team.",
    images: [{ url: GALLERY_ALBUMS[0].coverImage, alt: GALLERY_ALBUMS[0].coverAlt }],
  },
};

export default function PhotoGalleryPage() {
  return (
    <>
      <PageHero
        title="Photo Gallery"
        description="Memorable moments and activities from PropPact Realty — celebrations, team gatherings and festive occasions."
      />
      <section className="bg-[#F8F7F4] py-14 sm:py-16">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY_ALBUMS.map((album) => (
              <article
                key={album.slug}
                className="overflow-hidden rounded-lg border border-border bg-white shadow-card"
              >
                <Link href={`/photo-gallery/${album.slug}`} className="block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#F1EFE9]">
                    <Image
                      src={album.coverImage}
                      alt={album.coverAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                </Link>
                <div className="space-y-3 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                    {album.year}
                  </p>
                  <h2 className="font-heading text-2xl font-semibold text-primary">
                    <Link
                      href={`/photo-gallery/${album.slug}`}
                      className="hover:text-accent"
                    >
                      {album.title}
                    </Link>
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {album.description}
                  </p>
                  <Link
                    href={`/photo-gallery/${album.slug}`}
                    className="inline-flex min-h-11 items-center text-sm font-medium text-primary underline underline-offset-2 hover:text-accent"
                  >
                    View album
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
