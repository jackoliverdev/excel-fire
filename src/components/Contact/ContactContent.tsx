import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { ContactForm } from "@/components/Contact/ContactForm";
import { Breadcrumbs } from "@/components/Ui/Breadcrumbs";
import { FaqList } from "@/components/Ui/FaqList";
import { inlineLinkClass } from "@/components/Ui/buttons";
import { tidy } from "@/lib/text";

const nextSteps = [
  {
    title: "We come back to you",
    detail: "One of our specialists replies during business hours to understand your building.",
  },
  {
    title: "Survey or scope",
    detail: "Where needed, we survey the building first so the proposal is based on what is there.",
  },
  {
    title: "Clear proposal",
    detail: "Scope, programme and price in plain English, with the compliance reasoning behind it.",
  },
];

export function ContactContent() {
  return (
    <section className="pt-12 pb-10 md:pt-16 md:pb-12">
      <div className="mx-auto w-full max-w-7xl px-6">
        <Breadcrumbs items={[{ name: "Contact" }]} tone="light" />
        <div className="mt-6 max-w-2xl">
          <p className="eyebrow">Contact</p>
          <h1 className="text-foreground mt-2 text-3xl font-semibold tracking-tight md:text-5xl">
            Speak to a fire safety specialist
          </h1>
          <p className="mt-4 text-base leading-8 text-[var(--text-muted)]">
            Whether it is a single door, a full compartmentation survey or an estate-wide programme,
            start with a conversation. No obligation, no jargon.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-nav-panel)] p-5 md:p-8">
            <h2 className="text-lg font-semibold text-foreground">Send an enquiry</h2>
            <p className="mt-1 text-sm leading-6 text-[var(--text-muted)]">
              Fields marked (optional) can be left blank. We reply during business hours.
            </p>
            <div className="mt-5">
              <ContactForm />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-2xl bg-[#0b0f14] p-5 text-white md:p-6">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
                Prefer to talk?
              </p>
              <a
                href={siteConfig.phoneHref}
                className="mt-2 block text-2xl font-semibold tracking-tight transition hover:text-brand-accent"
              >
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-1 block text-sm text-slate-300 transition hover:text-brand-accent"
              >
                {siteConfig.email}
              </a>

              <div className="mt-5 space-y-3 border-t border-white/10 pt-5 text-sm leading-6 text-slate-300">
                <p>
                  <span className="font-semibold text-white">London</span>
                  <br />
                  {siteConfig.offices.london}
                </p>
                <p>
                  <span className="font-semibold text-white">Sawbridgeworth</span>
                  <br />
                  {siteConfig.offices.sawbridgeworth}
                </p>
              </div>
            </div>

            <div className="flex flex-1 flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface-nav-panel)] p-5 md:p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                What happens next
              </h2>
              <ol className="mt-4 space-y-4">
                {nextSteps.map((step, index) => (
                  <li key={step.title} className="flex gap-3.5">
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-accent/10 text-xs font-semibold text-brand-accent"
                      aria-hidden
                    >
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{tidy(step.title, 18)}</p>
                      <p className="mt-0.5 text-sm leading-6 text-[var(--text-muted)]">{tidy(step.detail)}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-auto pt-6">
                <div className="border-t border-[var(--border)] pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                  Independently accredited
                </p>
                <p className="mt-2 text-sm leading-6 text-foreground">
                  FIRAS, BM TRADA Q-Mark, Bluesky FDIN, NICEIC, CHAS, Constructionline Gold and SMAS.
                </p>
                <Link href="/accreditations" className={`mt-3 ${inlineLinkClass}`}>
                  What these cover →
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const contactFaqs = [
  {
    question: "How quickly can you respond to an enquiry?",
    answer:
      "We reply during business hours, usually the same or next working day, and confirm next steps based on your building and timescales.",
  },
  {
    question: "Do you work on live construction sites or in occupied buildings?",
    answer:
      "Yes. Most of our work is in occupied homes, live venues and active sites, from the Royal Albert Hall to occupied tower blocks in Newham.",
  },
  {
    question: "Can I request a quote for planned fire protection works?",
    answer:
      "Yes. Send the details through the form, with drawings or a schedule if you have them, and we will come back with next steps or arrange a survey.",
  },
  {
    question: "Do you cover both residential and commercial properties?",
    answer:
      "Yes. We work for housing providers, councils, principal contractors, FM providers and commercial building owners across London, the South East and England.",
  },
];

export function ContactFaqs() {
  return (
    <section className="section-y section-last">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow">FAQs</p>
            <h2 className="heading-2 mt-3">Before you get in touch</h2>
          </div>
          <div className="lg:col-span-8">
            <FaqList faqs={contactFaqs} />
          </div>
        </div>
      </div>
    </section>
  );
}
