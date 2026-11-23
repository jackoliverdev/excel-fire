import { Section } from "@/components/Ui/Section";
import { SectionHeading } from "@/components/Ui/SectionHeading";
import { NumberedSteps } from "@/components/Ui/NumberedSteps";

const steps = [
  {
    title: "Listen first",
    detail:
      "Every engagement starts with your building and your obligations, not a standard package. We scope what you actually need, and tell you plainly if you do not need something.",
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
      "Digital reports, certification and asset records at completion. Your golden thread updated, your next audit already easier.",
  },
  {
    title: "Stay accountable",
    detail:
      "We answer the phone after handover. Planned maintenance, quarterly checks and responsive support keep buildings compliant year-round.",
  },
];

export function AboutHow() {
  return (
    <Section className="themed-muted-surface">
      <SectionHeading
        eyebrow="How we work"
        title="How every job runs"
        description="From the first call to handover, and the phone still gets answered afterwards."
      />
      <NumberedSteps steps={steps} />
    </Section>
  );
}
