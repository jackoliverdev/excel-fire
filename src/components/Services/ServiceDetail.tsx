import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/services";
import { services } from "@/lib/services";
import { Section } from "@/components/Ui/Section";
import { SectionHeading } from "@/components/Ui/SectionHeading";
import { primaryButtonClass } from "@/components/Ui/buttons";
import { ProjectCard } from "@/components/Projects/ProjectCard";
import { getProjectsByService } from "@/lib/projects";
import { siteConfig } from "@/lib/site";
import { organisationId } from "@/lib/seo";
import { JsonLd } from "@/components/Seo/JsonLd";
import { NumberedSteps } from "@/components/Ui/NumberedSteps";
import { FaqList } from "@/components/Ui/FaqList";
import { LinkList } from "@/components/Ui/LinkList";
import { tidy } from "@/lib/text";
import { accreditations } from "@/lib/accreditations";
import { AccreditationBadge } from "@/components/Ui/AccreditationBadge";

export function ServiceKeyPoints({ service }: { service: Service }) {
  const badge = service.accreditation ? accreditations.find((item) => item.short === service.accreditation) : undefined;

  return (
    <Section>
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-black lg:col-span-6 lg:aspect-[5/4]">
          <Image
            src={service.detailImage}
            alt={service.detailImageAlt}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="lg:col-span-6">
          <p className="eyebrow">At a glance</p>
          <h2 className="heading-2 mt-3">What you get from Excel Fire</h2>

          <ul className="mt-7 divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {service.keyPoints.map((point) => (
              <li key={point} className="flex items-start gap-4 py-4 text-[0.9375rem] leading-7 text-foreground">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" className="mt-1.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden>
                  <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{tidy(point)}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm leading-7 text-[var(--text-muted)]">
            <span className="font-semibold text-foreground">Standards: </span>
            {service.standards.map((standard, index) => (
              <Fragment key={standard}>
                <span className="whitespace-nowrap">{tidy(standard)}</span>
                {index < service.standards.length - 1 ? <span className="px-2 text-brand-accent" aria-hidden>·</span> : null}{" "}
              </Fragment>
            ))}
          </p>

          {badge ? (
            <AccreditationBadge
              item={badge}
              text={`Electrical and active fire works are carried out by ${siteConfig.legalName} under its ${badge.name} certification.`}
              className="mt-6"
            />
          ) : null}

          <Link href="/contact-us" className={`mt-8 ${primaryButtonClass}`}>
            Book an assessment
          </Link>
        </div>
      </div>
    </Section>
  );
}

export function ServiceProcess({ service }: { service: Service }) {
  return (
    <Section className="themed-muted-surface">
      <SectionHeading
        eyebrow="How it works"
        title="From first survey to certified handover"
        description="The same four stages on every job, so you always know what happens next and what you will receive."
      />
      <NumberedSteps steps={service.process} />
    </Section>
  );
}

export function ServiceSections({ service }: { service: Service }) {
  return (
    <Section>
      <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-8">
          {service.sections.map((section, index) => (
            <article
              key={section.heading}
              className={`grid gap-3 md:grid-cols-[minmax(0,13rem)_1fr] md:gap-10 ${index === 0 ? "" : "mt-10 border-t border-[var(--border)] pt-10"}`}
            >
              <h2 className="text-xl font-semibold leading-snug tracking-tight text-foreground">{tidy(section.heading, 18)}</h2>
              <div>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="mb-4 text-base leading-8 text-[var(--text-muted)] last:mb-0">
                    {tidy(paragraph)}
                  </p>
                ))}
                {section.bullets ? (
                  <ul className="mt-5 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-[0.9375rem] leading-6 text-foreground">
                        <span className="mt-[9px] h-1.5 w-1.5 shrink-0 bg-brand-accent" aria-hidden />
                        <span>{tidy(bullet)}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <aside className="rounded-2xl bg-[#0b0f14] p-6 text-white md:p-8 lg:sticky lg:top-32 lg:col-span-4">
          <p className="eyebrow text-slate-400">What you receive</p>
          <ul className="mt-5 space-y-3.5">
            {service.deliverables.map((deliverable) => (
              <li key={deliverable} className="flex items-start gap-3 text-[0.9375rem] leading-6 text-slate-200">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" className="mt-1 h-4 w-4 shrink-0 text-brand-accent" aria-hidden>
                  <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{tidy(deliverable)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-7 border-t border-white/10 pt-6">
            <p className="text-sm leading-6 text-slate-300">Want to see a sample report before you commit?</p>
            <Link href="/contact-us" className="mt-3 inline-flex text-sm font-semibold text-brand-accent transition hover:opacity-80">
              Request a sample report →
            </Link>
          </div>
        </aside>
      </div>
    </Section>
  );
}

export function ServiceFaqs({ service }: { service: Service }) {
  return (
    <Section>
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <p className="eyebrow">FAQs</p>
          <h2 className="heading-2 mt-3">Common questions</h2>
          <p className="mt-4 text-[0.9375rem] leading-7 text-[var(--text-muted)]">
            Something not covered here? Call {siteConfig.phone} and you will speak to a specialist.
          </p>
        </div>
        <div className="lg:col-span-8">
          <FaqList faqs={service.faqs} />
        </div>
      </div>
    </Section>
  );
}

export function ServiceOthers({ current }: { current: Service }) {
  const others = services.filter((service) => service.slug !== current.slug);

  return (
    <Section last>
      <SectionHeading
        eyebrow="More services"
        title="Other ways we can help"
        action={{ label: "View all services", href: "/services" }}
      />
      <LinkList
        columns={2}
        items={others.map((service) => ({
          label: service.title,
          href: `/services/${service.slug}`,
          description: service.cardSummary,
        }))}
      />
    </Section>
  );
}

export function ServiceProjects({ service }: { service: Service }) {
  const related = getProjectsByService(service.slug).slice(0, 3);
  if (!related.length) return null;

  return (
    <Section>
      <SectionHeading
        eyebrow="Proof"
        title="Recent projects"
        description="Named clients, real numbers and before and after photos from the job."
        action={{ label: "View all projects", href: "/projects" }}
      />
      <div className="grid gap-x-6 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
        {related.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}

/** Service + FAQPage schema. FAQ answers are the same text shown in ServiceFaqs. */
export function ServiceSchema({ service }: { service: Service }) {
  const url = `${siteConfig.url}/services/${service.slug}`;
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Service",
            "@id": `${url}#service`,
            name: service.title,
            serviceType: service.title,
            description: service.metaDescription,
            url,
            image: `${siteConfig.url}${service.detailImage}`,
            provider: { "@id": organisationId },
            areaServed: siteConfig.areasServed.map((name) => ({ "@type": "Place", name })),
          },
          {
            "@type": "FAQPage",
            "@id": `${url}#faq`,
            mainEntity: service.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          },
        ],
      }}
    />
  );
}
