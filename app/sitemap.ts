import { SITE } from "@/lib/site";
import { PROPERTIES } from "@/lib/property-data";
import { BLOG_POSTS } from "@/lib/blog-data";

export default function sitemap() {
  const staticRoutes = [
    "",
    "/about-us",
    "/residential-properties",
    "/villas-for-sale",
    "/plots-for-sale",
    "/commercial-properties",
    "/sell-your-property",
    "/services",
    "/blog",
    "/testimonials",
    "/faq",
    "/contact-us",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  const propertyRoutes = PROPERTIES.map((property) => ({
    url: `${SITE.url}/property/${property.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${SITE.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE.url}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...propertyRoutes,
    ...blogRoutes,
  ];
}
