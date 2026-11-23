import type { Sector } from "@/lib/sectors";
import { sectors } from "@/lib/sectors";
import { getProjectsBySector } from "@/lib/projects";
import { Section } from "@/components/Ui/Section";
import { SectionHeading } from "@/components/Ui/SectionHeading";
import { ProjectCard } from "@/components/Projects/ProjectCard";
import { LinkList } from "@/components/Ui/LinkList";
import { tidy } from "@/lib/text";

export function SectorIntro({ sector }: { sector: Sector }) {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <p className="eyebrow">How we plan the work</p>
          <h2 className="heading-2 mt-3">{tidy(sector.strap, 18)}</h2>
          <p className="mt-5 text-base leading-8 text-[var(--text-muted)] md:text-lg md:leading-8">{tidy(sector.description)}</p>
        </div>
        <div className="lg:col-span-5">
          <h3 className="eyebrow">What we plan around</h3>
          <ul className="mt-5 border-t border-[var(--border)]">
            {sector.challenges.map((challenge) => (
              <li key={challenge} className="flex items-start gap-3 border-b border-[var(--border)] py-4 text-[0.9375rem] leading-7 text-foreground">
                <span className="mt-[11px] h-1.5 w-1.5 shrink-0 bg-brand-accent" aria-hidden />
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export function SectorServices({ sector }: { sector: Sector }) {
  return (
    <Section>
      <SectionHeading eyebrow="Services" title="The services we deliver most in this sector" />
      <LinkList columns={3} items={sector.relevantServices.map((service) => ({ label: service.label, href: service.href }))} />
    </Section>
  );
}

export function SectorProjects({ sector }: { sector: Sector }) {
  const list = getProjectsBySector(sector.id);
  if (!list.length) return null;

  return (
    <Section>
      <SectionHeading
        eyebrow="Case studies"
        title="Recent work in this sector"
        action={{ label: "View all projects", href: "/projects" }}
      />
      <div className="grid gap-x-6 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
        {list.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}

export function SectorOthers({ current }: { current: Sector }) {
  return (
    <Section last>
      <SectionHeading eyebrow="Other sectors" title="More sectors we work in" action={{ label: "All sectors", href: "/sectors" }} />
      <LinkList
        columns={2}
        items={sectors
          .filter((sector) => sector.id !== current.id)
          .map((sector) => ({ label: sector.title, href: `/sectors/${sector.id}` }))}
      />
    </Section>
  );
}
