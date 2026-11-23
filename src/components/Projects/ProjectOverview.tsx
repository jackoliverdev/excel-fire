import type { Project } from "@/lib/projects";
import { Section } from "@/components/Ui/Section";
import { tidy } from "@/lib/text";

export function ProjectOverview({ project }: { project: Project }) {
  return (
    <Section>
      <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
        <div>
          <p className="eyebrow">Project overview</p>
          <h2 className="heading-2 mt-3">
            What we were asked to do, and how it went
          </h2>
          <div className="mt-5 space-y-4">
            {project.overview.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="text-base leading-8 text-[var(--text-muted)]">
                {tidy(paragraph)}
              </p>
            ))}
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-x-6 self-start border-t border-[var(--border)] lg:grid-cols-1">
          {project.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse border-b border-[var(--border)] py-5">
              <dt className="mt-1.5 text-sm leading-snug text-[var(--text-muted)]">{tidy(stat.label, 18)}</dt>
              <dd className="figure text-3xl text-brand-accent md:text-4xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
