import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/services";
import { services } from "@/lib/services";
import { Section } from "@/components/Ui/Section";
import { SectionHeading } from "@/components/Ui/SectionHeading";
import { primaryButtonClass } from "@/components/Ui/buttons";

export function ServiceKeyPoints({ service }: { service: Service }) {
  return (
    <Section>
      <article className="grid items-stretch gap-4 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-nav-panel)] md:grid-cols-[1.05fr_1fr]">
        <div className="relative min-h-[240px] md:min-h-[320px]">
          <Image
            src={service.detailImage}
            alt={service.detailImageAlt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center p-5 md:p-7">
          <p className="text-muted text-xs font-medium uppercase tracking-[0.16em]">At a glance</p>
          <h2 className="text-foreground mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
            {service.title} with Excel Fire
          </h2>

          <ul className="mt-4 space-y-3">
            {service.keyPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm leading-7 text-[var(--text-muted)] md:text-base">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-accent" aria-hidden />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {service.standards.map((standard) => (
              <span
                key={standard}
                className="rounded-full border border-[var(--border)] bg-[var(--surface-muted)] px-3 py-1 text-xs font-semibold text-[var(--text-muted)]"
              >
                {standard}
              </span>
            ))}
          </div>

          <Link href="/contact-us" className={`mt-6 w-fit ${primaryButtonClass}`}>
            Book an assessment
          </Link>
        </div>
      </article>
    </Section>
  );
}

export function ServiceProcess({ service }: { service: Service }) {
  return (
    <Section>
      <SectionHeading
        eyebrow="How it works"
        title="Our process, start to finish"
        description="A clear, evidence-led route from first survey to certified handover."
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {service.process.map((step, index) => (
          <article
            key={step.title}
            className="relative rounded-xl border border-[var(--border)] bg-[var(--surface-nav-panel)] p-5 pt-6"
          >
            <span className="text-4xl font-semibold tracking-tight text-brand-accent/25" aria-hidden>
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 text-base font-semibold text-foreground">{step.title}</h3>
            <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">{step.detail}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function ServiceSections({ service }: { service: Service }) {
  return (
    <Section>
      <div className="grid items-start gap-4 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-4">
          {service.sections.map((section) => (
            <article
              key={section.heading}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface-nav-panel)] p-5 md:p-6"
            >
              <h2 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="mt-3 text-sm leading-7 text-[var(--text-muted)] md:text-base">
                  {paragraph}
                </p>
              ))}
              {section.bullets ? (
                <ul className="mt-3 space-y-2">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-sm leading-6 text-[var(--text-muted)]">
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>

        <aside className="rounded-xl border border-[var(--border)] bg-[#0b0f14] p-5 text-white md:p-6 lg:sticky lg:top-28">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
            What you receive
          </p>
          <ul className="mt-4 space-y-3">
            {service.deliverables.map((deliverable) => (
              <li key={deliverable} className="flex items-start gap-3 text-sm leading-6 text-slate-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{deliverable}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t border-white/10 pt-5">
            <p className="text-sm leading-6 text-slate-300">
              Want a sample report before you commit? Ask and we will send one over.
            </p>
            <Link
              href="/contact-us"
              className="mt-3 inline-flex text-sm font-semibold text-brand-accent transition hover:opacity-80"
            >
              Request a sample report
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
      <SectionHeading
        eyebrow="FAQs"
        title={`Common questions about ${service.title.toLowerCase()}`}
      />

      <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-nav-panel)] p-5 md:p-6">
        <div className="divide-y divide-[var(--border)]">
          {service.faqs.map((faq) => (
            <article key={faq.question} className="py-4 first:pt-0 last:pb-0">
              <h3 className="text-base font-semibold text-foreground">{faq.question}</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">{faq.answer}</p>
            </article>
          ))}
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
        title="Explore our other fire safety services"
        action={{ label: "View all services", href: "/services" }}
      />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {others.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group rounded-xl border border-[var(--border)] bg-[var(--surface-nav-panel)] p-4 transition hover:border-brand-accent"
          >
            <h3 className="text-sm font-semibold text-foreground transition group-hover:text-brand-accent">
              {service.title}
            </h3>
            <p className="mt-1.5 text-xs leading-5 text-[var(--text-muted)]">{service.cardSummary}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
