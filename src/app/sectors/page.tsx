import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/Ui/PageHero";
import { Section } from "@/components/Ui/Section";
import { SectionHeading } from "@/components/Ui/SectionHeading";
import { CtaStrip } from "@/components/Ui/CtaStrip";
import { sectors } from "@/lib/sectors";

export const metadata: Metadata = {
  title: "Sectors We Serve",
  description:
    "Excel Fire delivers passive fire protection and fire door services for social housing, main contractors, commercial estates, healthcare, public sector and education across England.",
  alternates: { canonical: "/sectors" },
};

export default function SectorsPage() {
  return (
    <>
      <PageHero
        title="Fire safety, shaped to your sector"
        description="Every sector carries different duties, occupants and delivery constraints. We adapt how we survey, install and evidence our work to fit yours — from occupied social housing to live hospital estates."
        image="/Excel/Services/site-firestopping-2.jpg"
        imageAlt="Excel Fire delivering works across multiple building sectors"
        primaryAction={{ label: "Discuss your sector", href: "/contact-us" }}
        secondaryAction={{ label: "View services", href: "/services" }}
      />

      <Section>
        <SectionHeading
          eyebrow="Sectors"
          title="Who we work with"
          description="Jump to your sector to see the challenges we solve and the services most relevant to you."
        />

        <div className="flex flex-wrap gap-2">
          {sectors.map((sector) => (
            <a
              key={sector.id}
              href={`#${sector.id}`}
              className="rounded-full border border-[var(--border)] bg-[var(--surface-nav-panel)] px-4 py-2 text-sm font-semibold text-[var(--text-muted)] transition hover:border-brand-accent hover:text-foreground"
            >
              {sector.title}
            </a>
          ))}
        </div>
      </Section>

      {sectors.map((sector, index) => (
        <section key={sector.id} id={sector.id} className="scroll-mt-28 pt-10 pb-10 md:pt-12 md:pb-12">
          <div className="mx-auto w-full max-w-7xl px-6">
            <article
              className={`grid items-stretch gap-4 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-nav-panel)] md:grid-cols-[1fr_1.15fr] ${
                index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative min-h-[220px] md:min-h-[340px]">
                <Image
                  src={sector.image}
                  alt={sector.imageAlt}
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-center p-5 md:p-8">
                <p className="text-muted text-xs font-medium uppercase tracking-[0.16em]">{sector.strap}</p>
                <h2 className="text-foreground mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                  {sector.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[var(--text-muted)] md:text-base">
                  {sector.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {sector.challenges.map((challenge) => (
                    <li key={challenge} className="flex items-start gap-2.5 text-sm leading-6 text-[var(--text-muted)]">
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" aria-hidden />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {sector.relevantServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="rounded-full border border-[var(--border)] bg-[var(--surface-muted)] px-3.5 py-1.5 text-xs font-semibold text-[var(--text-muted)] transition hover:border-brand-accent hover:text-foreground"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>
      ))}

      <CtaStrip
        title="Don't see your sector?"
        description="If you are responsible for a building, we can almost certainly help. Tell us what you manage and we will map the right services to it."
        actionLabel="Talk to us"
      />
    </>
  );
}
