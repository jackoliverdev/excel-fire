import { Section } from "@/components/Ui/Section";
import { SectionHeading } from "@/components/Ui/SectionHeading";

const steps = [
  {
    title: "Listen first",
    detail:
      "Every engagement starts with your building and your obligations — not a standard package. We scope what you actually need, and tell you plainly if you do not need something.",
  },
  {
    title: "Survey and evidence",
    detail:
      "Accredited assessors establish the true position with photographic evidence, so decisions are made on facts rather than assumptions.",
  },
  {
    title: "Deliver cleanly",
    detail:
      "Tidy, respectful teams who communicate with residents and site staff. Most of our feedback mentions the finish and the manner in the same sentence.",
  },
  {
    title: "Hand over properly",
    detail:
      "Digital reports, certification and asset records at completion — your golden thread updated, your next audit already easier.",
  },
  {
    title: "Stay accountable",
    detail:
      "We answer the phone after handover. Planned maintenance, quarterly checks and responsive support keep buildings compliant year-round.",
  },
];

export function AboutHow() {
  return (
    <Section>
      <SectionHeading
        eyebrow="How we work"
        title="The Excel Fire way"
        description="The habits that turn one-off jobs into decade-long client relationships."
      />

      <ol className="relative space-y-0 border-l border-[var(--border)] pl-8 md:pl-10">
        {steps.map((step, index) => (
          <li key={step.title} className="relative pb-8 last:pb-0">
            <span
              className="absolute -left-[45px] flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-nav-panel)] text-sm font-semibold text-brand-accent md:-left-[59px] md:h-10 md:w-10"
              aria-hidden
            >
              {index + 1}
            </span>
            <h3 className="text-base font-semibold text-foreground md:text-lg">{step.title}</h3>
            <p className="mt-1.5 max-w-[68ch] text-sm leading-7 text-[var(--text-muted)] md:text-base">
              {step.detail}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
