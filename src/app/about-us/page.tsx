import type { Metadata } from "next";
import Link from "next/link";
import { AboutHero } from "@/components/About/AboutHero";
import { AboutIntro } from "@/components/About/AboutIntro";
import { AboutValues } from "@/components/About/AboutValues";
import { AboutHow } from "@/components/About/AboutHow";
import { StatsBand } from "@/components/Ui/StatsBand";
import { CtaStrip } from "@/components/Ui/CtaStrip";
import { Section } from "@/components/Ui/Section";
import { SectionHeading } from "@/components/Ui/SectionHeading";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Excel Fire Ltd is a trusted fire safety partner with UKAS third-party certified assessors, supervisors and technicians, delivering accredited passive fire protection across London, the South East and England.",
  alternates: { canonical: "/about-us" },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StatsBand />
      <AboutIntro />
      <AboutHow />
      <AboutValues />

      <Section>
        <SectionHeading
          eyebrow="Go deeper"
          title="See the proof behind the words"
        />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Our accreditations",
              text: "FIRAS, UKAS, Q-Mark, CHAS, Constructionline Gold — what each one means and why it matters.",
              href: "/accreditations",
              label: "View accreditations",
            },
            {
              title: "Projects & clients",
              text: "Case studies from Holland Park Gate to occupied housing programmes, with real client feedback.",
              href: "/projects",
              label: "View projects",
            },
            {
              title: "Sectors we serve",
              text: "How we adapt delivery for social housing, contractors, healthcare, education and commercial estates.",
              href: "/sectors",
              label: "View sectors",
            },
          ].map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group rounded-xl border border-[var(--border)] bg-[var(--surface-nav-panel)] p-5 transition hover:border-brand-accent"
            >
              <h3 className="text-base font-semibold text-foreground transition group-hover:text-brand-accent">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{card.text}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-brand-accent">
                {card.label}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <CtaStrip
        title="Get to know us properly"
        description="A 15-minute call is usually enough to understand your building and map the right next step."
        actionLabel="Speak to our team"
      />
    </>
  );
}
