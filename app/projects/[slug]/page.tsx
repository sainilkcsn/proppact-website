import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/projects/ProjectDetail";
import { getProjectBySlug, PROJECTS } from "@/lib/projects-data";
import { SITE } from "@/lib/site";

type ProjectPageProps = {
  params: { slug: string };
  searchParams: { intent?: string };
};

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Project Not Found" };
  const title = `${project.name} | ${project.locality}`;
  const description = `${project.name} in ${project.address}. ${project.priceLabel}. Confirm current pricing and availability with PropPact.`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE.url}/projects/${project.slug}` },
    openGraph: {
      title: `${title} | PropPact`,
      description,
      images: [{ url: project.coverImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | PropPact`,
      description,
    },
  };
}

export default function ProjectPage({ params, searchParams }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();
  return <ProjectDetail project={project} intent={searchParams.intent} />;
}
