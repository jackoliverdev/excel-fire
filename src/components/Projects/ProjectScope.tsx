import type { Project } from "@/lib/projects";
import { Section } from "@/components/Ui/Section";
import { SectionHeading } from "@/components/Ui/SectionHeading";
import { tidy } from "@/lib/text";

/** Ruled scope-of-works table. Renders nothing when the case study has no scope breakdown. */
export function ProjectScope({ project }: { project: Project }) {
  if (!project.scope?.length) return null;

  return (
    <Section>
      <SectionHeading eyebrow="Scope of works" title="What the package covered" />
      <dl className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
        {project.scope.map((row) => (
          <div key={row.label} className="grid gap-1 py-4 md:grid-cols-[220px_1fr] md:gap-8 md:py-5">
            <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-accent">{tidy(row.label, 12)}</dt>
            <dd className="text-sm leading-7 text-[var(--text-muted)] md:text-base">{row.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
