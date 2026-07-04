import { Section } from "@/components/Ui/Section";
import { SectionHeading } from "@/components/Ui/SectionHeading";

const values = [
  {
    title: "Expertise you can trust",
    description:
      "A well-established passive fire protection company offering a reliable, personal and diligent service. Our team includes UKAS third-party certified assessors, supervisors and technicians, ensuring every project is completed to the highest industry standards.",
  },
  {
    title: "Accredited, industry-leading solutions",
    description:
      "A third-party accredited provider of passive fire protection services, utilising industry-leading products, materials and software to ensure compliance and safety at every level.",
  },
  {
    title: "Comprehensive fire safety services",
    description:
      "From fire door inspections and compartmentation surveys to fire door and passive fire protection installations, we manage entire fire safety projects — providing end-to-end solutions tailored to your needs.",
  },
  {
    title: "Integrity and professionalism",
    description:
      "We operate with honesty, transparency and accountability, ensuring you receive clear, actionable advice with no compromises. Our team is responsive and professional, keeping you informed at every step.",
  },
  {
    title: "A life-saving mission",
    description:
      "Fire safety is more than a job to us — it is our passion and responsibility. We are committed to saving lives and property through accurate reporting, consulting and advisory services.",
  },
  {
    title: "Evidence at every stage",
    description:
      "Digital reporting, QR asset tagging and cloud-based dashboards keep your golden thread of building safety information complete and audit-ready at all times.",
  },
];

export function AboutValues() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Why engage with Excel Fire"
        title="What sets our delivery apart"
        description="Partner with Excel Fire and experience a proactive, professional and expert-driven approach to fire safety."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {values.map((value) => (
          <article
            key={value.title}
            className="rounded-xl border border-[var(--border)] bg-[var(--surface-nav-panel)] p-5"
          >
            <h3 className="text-base font-semibold text-foreground">{value.title}</h3>
            <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">{value.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
