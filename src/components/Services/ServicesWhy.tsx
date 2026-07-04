import { Section } from "@/components/Ui/Section";
import { SectionHeading } from "@/components/Ui/SectionHeading";

const reasons = [
  {
    title: "Accredited teams",
    description:
      "FIRAS-accredited fire stopping and installation, with UKAS third-party certified assessors, supervisors and technicians on every project.",
  },
  {
    title: "Evidence-led delivery",
    description:
      "Photographic reporting, QR asset tagging and cloud-based dashboards keep your golden thread of building safety information complete.",
  },
  {
    title: "England-wide coverage",
    description:
      "Teams operating across England, including Greater London and the Home Counties, with responsive, competitively priced support.",
  },
  {
    title: "One accountable partner",
    description:
      "Passive fire protection, fire doors and active systems under one roof — simplifying compliance for responsible persons and duty holders.",
  },
];

export function ServicesWhy() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Why Excel Fire"
        title="Compliance you can evidence, delivery you can trust"
        description="The responsible person or duty holder must carry out a fire safety risk assessment and maintain a fire management plan. Failure to do so can result in a fine, imprisonment, or both — we make staying compliant straightforward."
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {reasons.map((reason) => (
          <article
            key={reason.title}
            className="rounded-xl border border-[var(--border)] bg-[var(--surface-nav-panel)] p-5"
          >
            <h3 className="text-base font-semibold text-foreground">{reason.title}</h3>
            <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">{reason.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
