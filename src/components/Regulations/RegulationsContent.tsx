import { Section } from "@/components/Ui/Section";
import { SectionHeading } from "@/components/Ui/SectionHeading";
import { tidy } from "@/lib/text";

const applicability = [
  "Responsible for business premises",
  "An employer or self-employed with business premises",
  "Responsible for a part of a dwelling where that part is solely used for business purposes",
  "A charity or voluntary organisation",
  "A contractor with a degree of control over any premises",
  "Providing accommodation for paying guests",
  "A residential property with any communal area",
];

export function RegulationsOverview() {
  return (
    <Section>
      <SectionHeading
        eyebrow="The law"
        title="The Regulatory Reform (Fire Safety) Order 2005"
        description="Under the Regulatory Reform (Fire Safety) Order 2005, the responsible person or duty holder must carry out a fire safety risk assessment and implement and maintain a fire management plan. Failure to carry this out could result in a fine, imprisonment, or both."
      />

      <div className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-xl border border-[var(--border)] bg-[var(--surface-nav-panel)] p-5 md:p-6">
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            The law applies to you if you are:
          </h3>
          <ul className="mt-4 space-y-2.5">
            {applicability.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-7 text-[var(--text-muted)] md:text-base">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" aria-hidden />
                <span>{tidy(item)}</span>
              </li>
            ))}
          </ul>
        </article>

        <div className="space-y-4">
          <article className="rounded-xl border border-[var(--border)] bg-[var(--surface-nav-panel)] p-5 md:p-6">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              The Fire Safety (England) Regulations 2022
            </h3>
            <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
              Regulation 10 made it a legal requirement from 23 January 2023 for responsible
              persons of all multi-occupied residential buildings in England with storeys over 11
              metres in height to undertake quarterly checks of all fire doors (including
              self-closing devices) in the common parts, and, on a best endeavour basis, annual
              checks of all flat entrance doors (including self-closing devices) that lead onto a
              building&apos;s common parts.
            </p>
          </article>

          <article className="rounded-xl border border-[var(--border)] bg-[var(--surface-nav-panel)] p-5 md:p-6">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">Did you know?</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
              When taking out insurance cover, the insurance company assumes all fire regulations
              have been complied with. In the event of a claim, there could be a costly shock if
              your obligations have not been met.
            </p>
          </article>
        </div>
      </div>
    </Section>
  );
}

const keyLegislation = [
  {
    name: "Regulatory Reform (Fire Safety) Order 2005",
    detail:
      "The core fire safety law for non-domestic premises and the common parts of residential buildings. The responsible person must carry out a fire risk assessment and put the findings into practice.",
  },
  {
    name: "Fire Safety Act 2021",
    detail:
      "Confirmed that, in multi-occupied residential buildings, the Fire Safety Order covers the structure, external walls (including windows and balconies) and flat entrance doors onto common parts.",
  },
  {
    name: "Fire Safety (England) Regulations 2022",
    detail:
      "Regulation 10 requires quarterly checks of communal fire doors and best-endeavours annual checks of flat entrance doors in residential buildings over 11 metres, from 23 January 2023.",
  },
  {
    name: "Building Safety Act 2022",
    detail:
      "Created the Building Safety Regulator and new duties for higher-risk buildings (at least 18 metres or seven storeys, with two or more homes), including keeping the golden thread of building safety information.",
  },
  {
    name: "BS 8214:2016",
    detail:
      "The code of practice for fire door assemblies. Covers specification, installation and maintenance, and is the standard our fire door installers work to.",
  },
];

export function RegulationsKeyLegislation() {
  return (
    <Section>
      <SectionHeading
        eyebrow="At a glance"
        title="The key fire safety legislation and standards"
        description="A plain-English summary. It is general guidance, not legal advice for a specific building."
      />
      <dl className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
        {keyLegislation.map((item) => (
          <div key={item.name} className="grid gap-1 py-4 md:grid-cols-[320px_1fr] md:gap-8 md:py-5">
            <dt className="text-base font-semibold text-foreground">{tidy(item.name, 18)}</dt>
            <dd className="text-sm leading-7 text-[var(--text-muted)] md:text-base">{tidy(item.detail)}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
