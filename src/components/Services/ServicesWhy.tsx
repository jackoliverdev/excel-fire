import { Section } from "@/components/Ui/Section";
import { SectionHeading } from "@/components/Ui/SectionHeading";
import { tidy } from "@/lib/text";

const reasons = [
  {
    title: "Accredited teams",
    description:
      "FIRAS-accredited fire stopping and installation, with UKAS third-party certified assessors, supervisors and technicians on every project.",
  },
  {
    title: "Evidence-led delivery",
    description:
      "Every door and seal is photographed, labelled and logged, so your golden thread of building safety information stays complete.",
  },
  {
    title: "England-wide coverage",
    description:
      "Offices in London and Birmingham, with teams working across London, the South East and the rest of England.",
  },
  {
    title: "One accountable partner",
    description:
      "Fire stopping, fire doors and, through Excel Electrics, the alarm interlinks that control them. One programme, one point of contact.",
  },
];

export function ServicesWhy() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Why Excel Fire"
        title="Why clients choose Excel Fire"
        description="Responsible persons must be able to prove their building's fire safety measures work. Everything we do is designed to leave you with that proof."
      />

      <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2 xl:grid-cols-4">
        {reasons.map((reason) => (
          <li key={reason.title} className="border-t border-[var(--border)] pt-6">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">{tidy(reason.title, 18)}</h3>
            <p className="mt-2 text-[0.9375rem] leading-7 text-[var(--text-muted)]">{tidy(reason.description)}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
