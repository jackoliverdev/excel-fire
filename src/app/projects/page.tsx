import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/Ui/PageHero";
import { Section } from "@/components/Ui/Section";
import { SectionHeading } from "@/components/Ui/SectionHeading";
import { CtaStrip } from "@/components/Ui/CtaStrip";
import { caseStudies, clientLogos } from "@/lib/projects";

const shortQuotes = [
  {
    quote: "Tidiest firestopping the architect had ever seen.",
    author: "Amanda Holland",
    role: "McConnell",
  },
  {
    quote: "Very professional from start to finish — we look forward to using you much more.",
    author: "Dave Clay",
    role: "Equans",
  },
  {
    quote: "Proactive and innovative where others have struggled.",
    author: "Dave Fogarty",
    role: "T&B Contractors",
  },
  {
    quote: "The NHBC approved every one of your installations and remarked on the workmanship.",
    author: "DC",
    role: "Weston Group Plc",
  },
  {
    quote: "A valued addition to our supply chain. Great service, great people.",
    author: "Dan Read",
    role: "Boom Construction Ltd",
  },
  {
    quote: "Knowledgeable and reassuring — a credit to work alongside.",
    author: "Alexander Charter",
    role: "TfL",
  },
];

export const metadata: Metadata = {
  title: "Projects & Clients",
  description:
    "Fire safety projects delivered by Excel Fire — case studies from Holland Park Gate, The Trees and social housing programmes, for clients including United Living, Durkan, the NHS and CBRE.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Work we're proud to put our name to"
        description="From premium London residential to occupied social housing programmes — a selection of projects, the clients behind them, and what they said about the delivery."
        image="/Excel/Services/site-firestopping-1.jpg"
        imageAlt="High-quality fire stopping delivered by Excel Fire"
        primaryAction={{ label: "Start your project", href: "/contact-us" }}
        secondaryAction={{ label: "View services", href: "/services" }}
      />

      <Section>
        <SectionHeading
          eyebrow="Case studies"
          title="Selected projects"
          description="Real projects, real client feedback — a snapshot of how we deliver."
        />

        <div className="space-y-4">
          {caseStudies.map((study, index) => (
            <article
              key={study.id}
              className={`grid items-stretch gap-4 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-nav-panel)] md:grid-cols-[1fr_1.3fr] ${
                index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative min-h-[220px] md:min-h-[320px]">
                <Image
                  src={study.image}
                  alt={study.imageAlt}
                  fill
                  sizes="(min-width: 768px) 43vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-center p-5 md:p-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-brand-accent/10 px-3 py-1 text-xs font-semibold text-brand-accent">
                    {study.sector}
                  </span>
                  {study.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-semibold text-[var(--text-muted)]"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <h2 className="text-foreground mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                  {study.title}
                </h2>
                <p className="mt-1 text-sm font-semibold text-[var(--text-muted)]">
                  Client: {study.client}
                </p>

                <p className="mt-3 text-sm leading-7 text-[var(--text-muted)] md:text-base">
                  {study.summary}
                </p>
                <p className="mt-2 text-sm leading-7 text-foreground md:text-base">
                  <span className="font-semibold">Outcome:</span> {study.outcome}
                </p>

                {study.quote ? (
                  <blockquote className="mt-4 border-l-2 border-brand-accent pl-4">
                    <p className="text-sm italic leading-6 text-[var(--text-muted)]">
                      &ldquo;{study.quote.text}&rdquo;
                    </p>
                    <footer className="mt-2 text-xs font-semibold text-foreground">
                      {study.quote.author}
                      <span className="font-normal text-[var(--text-muted)]"> — {study.quote.role}</span>
                    </footer>
                  </blockquote>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Our clients"
          title="Organisations that rely on Excel Fire"
          description="National contractors, facilities management providers, councils and the NHS trust us with their most important buildings."
        />

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {clientLogos.map((logo) => (
            <div
              key={logo.src}
              className="flex h-24 items-center justify-center rounded-xl border border-[var(--border)] bg-white p-4"
            >
              <div className="relative h-full w-full">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="In their words"
          title="More client feedback"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shortQuotes.map((item) => (
            <figure
              key={item.author + item.quote.slice(0, 12)}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface-nav-panel)] p-5"
            >
              <blockquote className="text-sm leading-7 text-foreground">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-3 text-xs font-semibold text-foreground">
                {item.author}
                <span className="font-normal text-[var(--text-muted)]"> — {item.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <CtaStrip
        title="Add your project to this page"
        description="Tell us what you are planning and we will show you exactly how we would deliver it — scope, programme and evidence."
        actionLabel="Start a conversation"
      />
    </>
  );
}
