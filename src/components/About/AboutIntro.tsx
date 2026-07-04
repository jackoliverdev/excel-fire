import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Ui/Section";
import { inlineLinkClass } from "@/components/Ui/buttons";

const aboutHighlights = [
  "UKAS third-party certified assessors, supervisors and technicians",
  "FIRAS-accredited fire stopping and installation",
  "Housing, commercial and public sector delivery",
  "Serving London, the South East and wider England",
];

export function AboutIntro() {
  return (
    <Section>
      <article className="grid items-stretch gap-4 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-nav-panel)] md:grid-cols-[1.05fr_1fr]">
        <div className="relative min-h-[240px] md:min-h-[320px]">
          <Image
            src="/Excel/Services/site-installation-1.jpg"
            alt="Excel Fire engineer carrying out certified fire door works"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center p-5 md:p-7">
          <p className="text-muted text-xs font-medium uppercase tracking-[0.16em]">Who we are</p>
          <h2 className="text-foreground mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
            A trusted fire safety partner
          </h2>
          <p className="mt-3 max-w-[56ch] text-sm leading-7 text-[var(--text-muted)] md:text-base">
            Excel Fire supports principal contractors, housing providers and asset teams with
            compliant, well-managed passive fire protection delivery. Our team focuses on practical
            solutions, clear communication and high standards on every project — from survey through
            to certified handover.
          </p>

          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {aboutHighlights.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-[var(--text-muted)]">
                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Link href="/contact-us" className={`mt-5 ${inlineLinkClass}`}>
            Speak to our team
          </Link>
        </div>
      </article>
    </Section>
  );
}
