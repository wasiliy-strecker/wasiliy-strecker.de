import { notFound } from "next/navigation";

import { ProjectDetail } from "@/components/project-detail";
import { getProject, projects } from "@/data/projects";
import { projectMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  return project ? projectMetadata(project, "en") : {};
}

export default async function EnglishProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) {
    notFound();
  }
  return <ProjectDetail project={project} locale="en" />;
}
