import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlbumLightbox } from "@/components/gallery/AlbumLightbox";
import { PageHero } from "@/components/sections/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { getGalleryAlbum } from "@/lib/gallery-data";
import { SITE } from "@/lib/site";

const album = getGalleryAlbum("diwali-2026");

export const metadata: Metadata = album
  ? {
      title: { absolute: "Diwali 2026 Photo Gallery | PropPact Realty" },
      description: album.description,
      alternates: { canonical: `${SITE.url}/photo-gallery/diwali-2026` },
      openGraph: {
        url: `${SITE.url}/photo-gallery/diwali-2026`,
        title: "Diwali 2026 Photo Gallery | PropPact Realty",
        description: album.description,
        images: [{ url: album.coverImage, alt: album.coverAlt }],
      },
      twitter: {
        card: "summary_large_image",
        title: "Diwali 2026 Photo Gallery | PropPact Realty",
        description: album.description,
      },
    }
  : { title: "Album Not Found" };

export default function Diwali2026AlbumPage() {
  if (!album) notFound();

  const imageObjects = album.photos.map((photo) => ({
    "@type": "ImageObject",
    contentUrl: `${SITE.url}${photo.image}`,
    name: photo.title,
    description: photo.caption,
    caption: photo.caption,
  }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Diwali 2026 – PropPact Realty",
    description: album.description,
    url: `${SITE.url}/photo-gallery/diwali-2026`,
    image: imageObjects,
    isPartOf: {
      "@type": "WebSite",
      name: SITE.legalName,
      url: `${SITE.url}/`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Photo Gallery",
        item: `${SITE.url}/photo-gallery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: album.title,
        item: `${SITE.url}/photo-gallery/diwali-2026`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHero
        title="Diwali 2026"
        description="Celebrate the spirit of Diwali with PropPact Realty through a collection of photographs capturing festive moments, decorations and togetherness."
      />

      <section className="bg-[#F8F7F4] py-10 sm:py-12">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Photo Gallery", href: "/photo-gallery" },
              { label: album.title },
            ]}
          />
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#1A1A1A]">
            {album.description} This album includes {album.photos.length}{" "}
            photographs from the celebration at the PropPact office.
          </p>
          {album.blogSlug ? (
            <p className="mt-4 text-sm text-muted-foreground">
              Read the story:{" "}
              <Link
                href={`/blog/${album.blogSlug}`}
                className="font-medium text-primary underline underline-offset-2 hover:text-accent"
              >
                Diwali 2026 at PropPact Realty
              </Link>
            </p>
          ) : null}

          <AlbumLightbox photos={album.photos} albumTitle={album.title} />
        </Container>
      </section>
    </>
  );
}
