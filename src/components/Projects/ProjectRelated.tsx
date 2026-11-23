import Link from "next/link";
import { LinkList } from "@/components/Ui/LinkList";
import type { Project } from "@/lib/projects";
import { getRelatedProjects } from "@/lib/projects";
import { getService } from "@/lib/services";
import { siteConfig } from "@/lib/site";
import { Section } from "@/components/Ui/Section";
import { SectionHeading } from "@/components/Ui/SectionHeading";
import { ProjectCard } from "@/components/Projects/ProjectCard";

/** Services used on this job, a note when Excel Electrics delivered alongside, and related case studies. */
export function ProjectRelated({ project }: { project: Project }) {
  const services = project.services.map((slug) => getService(slug)).filter((service) => service !== undefined);
  const related = getRelatedProjects(project);

  return (
    <>
      <Section>
        <div className={`grid gap-10 ${project.jointWithElectrics ? "lg:grid-cols-2 lg:gap-16" : ""}`}>
          <div>
            <p className="eyebrow">Services on this project</p>
            <h2 className="heading-2 mt-3 mb-6">What we delivered</h2>
            <LinkList
              items={services.map((service) => ({
                label: service.title,
                href: `/services/${service.slug}`,
                description: service.cardSummary,
              }))}
            />
          </div>

          {project.jointWithElectrics ? (
            <div className="flex flex-col justify-between rounded-2xl bg-[#0b0f14] p-5 text-white md:p-7">
              <div>
                <p className="eyebrow text-slate-400">Wire & fire</p>
                <p className="mt-3 text-xl font-semibold leading-snug tracking-tight md:text-2xl">
                  Fire doors and the electrics that control them, from one group.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  On this project our sister division, {siteConfig.electrics.name}, installed and commissioned every
                  maglock, hold-open device and strike, and interlinked them with the fire alarm. One team, one
                  programme, no gaps between trades.
                </p>
              </div>
              <Link
                href="/excel-electrics"
                className="mt-6 inline-flex w-fit text-sm font-semibold text-brand-accent transition hover:opacity-80"
              >
                About Excel Electrics →
              </Link>
            </div>
          ) : null}
        </div>
      </Section>

      {related.length ? (
        <Section>
          <SectionHeading
            eyebrow="More case studies"
            title="Related projects"
            action={{ label: "View all projects", href: "/projects" }}
          />
          <div className="grid gap-x-6 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
            {related.map((item) => (
              <ProjectCard key={item.slug} project={item} />
            ))}
          </div>
        </Section>
      ) : null}
    </>
  );
}
