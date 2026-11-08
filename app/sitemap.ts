import { SITE } from "@/lib/site";
import { PROJECTS } from "@/lib/projects-data";
import { BLOG_POSTS } from "@/lib/blog-data";
import { GALLERY_ALBUMS } from "@/lib/gallery-data";

export default function sitemap() {
  const staticRoutes = [
    "",
    "/about-us",
    "/projects",
    "/residential-properties",
    "/villas-for-sale",
    "/plots-for-sale",
    "/commercial-properties",
    "/sell-your-property",
    "/services",
    "/blog",
    "/photo-gallery",
    "/testimonials",
    "/faq",
    "/contact-us",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  const projectRoutes = PROJECTS.map((project) => ({
    url: `${SITE.url}/projects/${project.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${SITE.url}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const galleryRoutes = GALLERY_ALBUMS.map((album) => ({
    url: `${SITE.url}/photo-gallery/${album.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.65,
    images: album.photos.map((photo) => `${SITE.url}${photo.image}`),
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE.url}${route}`,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...projectRoutes,
    ...blogRoutes,
    ...galleryRoutes,
  ];
}
