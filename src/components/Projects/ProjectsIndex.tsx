import Image from "next/image";
import { projects, clientLogos, clientQuotes, CLIENT_LOGO_STYLE, clientLogoClass, clientLogoSrc } from "@/lib/projects";
import { Section } from "@/components/Ui/Section";
import { SectionHeading } from "@/components/Ui/SectionHeading";
import { ProjectsExplorer } from "@/components/Projects/ProjectsExplorer";
import { tidy } from "@/lib/text";

export function ProjectsGrid() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Case studies"
        title={`${projects.length} programmes, in detail`}
        description="Each case study names the client, the scope, the numbers and how we delivered it, with before and after photos from the job itself."
      />
      <ProjectsExplorer projects={projects} />
    </Section>
  );
}

export function ProjectsClientLogos() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Our clients"
        title="Organisations that rely on Excel Fire"
        description="Tier 1 contractors, facilities management providers, councils, housing providers and the NHS."
      />
      <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-3 lg:grid-cols-6">
        {clientLogos.map((logo) => (
          <li
            key={logo.src}
            className={`group flex h-28 items-center justify-center p-7 ${
              CLIENT_LOGO_STYLE === "mono" ? "bg-[var(--surface-nav-panel)]" : "bg-white"
            }`}
          >
            <div className="relative h-full w-full">
              <Image
                src={clientLogoSrc(logo.src)}
                alt={logo.alt}
                fill
                sizes="(min-width: 1024px) 14vw, (min-width: 640px) 30vw, 45vw"
                className={`${clientLogoClass} group-hover:opacity-100`}
              />
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function ProjectsClientQuotes() {
  return (
    <Section>
      <SectionHeading eyebrow="In their words" title="What clients say about the delivery" />
      <div className="grid gap-x-10 border-t border-[var(--border)] sm:grid-cols-2 lg:grid-cols-3">
        {clientQuotes.map((item) => (
          <figure key={item.author + item.quote.slice(0, 12)} className="flex flex-col border-b border-[var(--border)] py-8">
            <blockquote className="flex-1 text-lg font-medium leading-snug tracking-tight text-foreground">
              <span className="text-brand-accent">&ldquo;</span>
              {tidy(item.quote)}
              <span className="text-brand-accent">&rdquo;</span>
            </blockquote>
            <figcaption className="mt-5 text-sm">
              <span className="font-semibold text-foreground">{item.author}</span>
              <span className="text-[var(--text-muted)]"> · {item.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
