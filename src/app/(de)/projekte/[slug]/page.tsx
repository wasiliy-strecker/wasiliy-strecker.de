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
  return project ? projectMetadata(project, "de") : {};
}

export default async function GermanProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) {
    notFound();
  }
  return <ProjectDetail project={project} locale="de" />;
}
