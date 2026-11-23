import type { Project } from "@/lib/projects";
import { Section } from "@/components/Ui/Section";
import { SectionHeading } from "@/components/Ui/SectionHeading";
import { NumberedSteps } from "@/components/Ui/NumberedSteps";

export function ProjectSteps({ project }: { project: Project }) {
  return (
    <Section className="themed-muted-surface">
      <SectionHeading eyebrow="How we delivered it" title="Four steps, start to handover" />
      <NumberedSteps steps={project.steps} />
    </Section>
  );
}
