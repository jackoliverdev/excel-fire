import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";
import { buildMetadata } from "@/lib/seo";
import { ProjectSchema } from "@/components/Projects/ProjectSchema";
import { ProjectHero } from "@/components/Projects/ProjectHero";
import { ProjectOverview } from "@/components/Projects/ProjectOverview";
import { ProjectSteps } from "@/components/Projects/ProjectSteps";
import { ProjectBeforeAfter } from "@/components/Projects/ProjectBeforeAfter";
import { ProjectScope } from "@/components/Projects/ProjectScope";
import { ProjectGallery } from "@/components/Projects/ProjectGallery";
import { ProjectRelated } from "@/components/Projects/ProjectRelated";
import { CtaStrip } from "@/components/Ui/CtaStrip";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return buildMetadata({
    title: project.metaTitle,
    description: project.metaDescription,
    path: `/projects/${project.slug}`,
    image: project.cover.src,
    imageAlt: project.cover.alt,
    type: "article",
  });
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <ProjectSchema project={project} />
      <ProjectHero project={project} />
      <ProjectOverview project={project} />
      <ProjectSteps project={project} />
      <ProjectBeforeAfter project={project} />
      <ProjectScope project={project} />
      <ProjectGallery project={project} />
      <ProjectRelated project={project} />
      <CtaStrip
        title="Planning a similar programme?"
        description="Talk to the team that delivered this one. We will walk you through scope, resident or occupier liaison, programme and the evidence you get at handover."
        actionLabel="Talk to the team"
      />
    </>
  );
}
