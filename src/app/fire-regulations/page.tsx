import type { Metadata } from "next";
import { PageHero } from "@/components/Ui/PageHero";
import { Section } from "@/components/Ui/Section";
import { SectionHeading } from "@/components/Ui/SectionHeading";
import { CtaStrip } from "@/components/Ui/CtaStrip";

export const metadata: Metadata = {
  title: "Fire Regulations",
  description:
    "An overview of the Regulatory Reform (Fire Safety) Order 2005 and the Fire Safety (England) Regulations 2022 — who they apply to and what responsible persons must do.",
  alternates: { canonical: "/fire-regulations" },
};

const applicability = [
  "Responsible for business premises",
  "An employer or self-employed with business premises",
  "Responsible for a part of a dwelling where that part is solely used for business purposes",
  "A charity or voluntary organisation",
  "A contractor with a degree of control over any premises",
  "Providing accommodation for paying guests",
  "A residential property with any communal area",
];

export default function FireRegulationsPage() {
  return (
    <>
      <PageHero
        title="Fire regulations"
        description="Understand your duties under the Regulatory Reform (Fire Safety) Order 2005 and the Fire Safety (England) Regulations 2022 — and how Excel Fire helps you meet them."
        image="/Excel/Services/fire-regulations.jpg"
        imageAlt="Fire safety regulations documentation and guidance"
        primaryAction={{ label: "Book an assessment", href: "/contact-us" }}
        secondaryAction={{ label: "View services", href: "/services" }}
      />

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
                  <span>{item}</span>
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
                self-closing devices) in the common parts, and — on a best endeavour basis — annual
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

      <CtaStrip
        title="Unsure whether the regulations apply to you?"
        description="Five minutes on the phone will tell you exactly where you stand — and what to do about it."
        actionLabel="Get clarity"
      />
    </>
  );
}
