import { SITE } from "@/lib/site";
import { PROJECTS } from "@/lib/projects-data";
import { BLOG_POSTS } from "@/lib/blog-data";

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

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE.url}${route}`,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...projectRoutes,
    ...blogRoutes,
  ];
}
