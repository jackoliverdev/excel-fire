import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Ui/Section";
import { inlineLinkClass } from "@/components/Ui/buttons";
import { tidy } from "@/lib/text";

const aboutHighlights = [
  "UKAS third-party certified assessors, supervisors and technicians",
  "FIRAS-accredited fire stopping and installation",
  "Housing, commercial and public sector delivery",
  "Serving London, the South East and wider England",
];

export function AboutIntro() {
  return (
    <Section>
      <article className="grid items-center gap-10 md:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-black">
          <Image
            src="/images/brand/van-livery-detail.webp"
            alt="Excel Fire van livery: our forward thinking gives you reassurance"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="eyebrow">Who we are</p>
          <h2 className="heading-2 mt-3">
            A trusted fire safety partner
          </h2>
          <p className="mt-3 max-w-[56ch] text-sm leading-7 text-[var(--text-muted)] md:text-base">
            Excel Fire supports principal contractors, housing providers and asset teams with
            compliant, well-managed passive fire protection delivery. Our team focuses on practical
            solutions, clear communication and high standards on every project, from survey through
            to certified handover. Founded in 2019, we now deliver for councils, housing providers, Tier 1
            contractors and some of London&apos;s best-known venues.
          </p>

          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {aboutHighlights.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-[var(--text-muted)]">
                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" aria-hidden />
                <span>{tidy(item)}</span>
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
