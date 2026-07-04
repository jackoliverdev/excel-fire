import { siteConfig } from "@/lib/site";

const inputClass =
  "w-full rounded-md border border-[var(--border)] bg-transparent px-4 py-2.5 text-sm text-foreground outline-none transition placeholder:text-[var(--text-muted)] focus:border-brand-accent";

const nextSteps = [
  {
    title: "We come back to you",
    detail: "A specialist — not a call centre — responds during business hours to understand your building.",
  },
  {
    title: "Survey or scope",
    detail: "Where needed, we arrange a survey so the proposal is based on evidence, not guesswork.",
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
        <div className="max-w-2xl">
          <p className="text-muted text-xs font-medium uppercase tracking-[0.16em]">Contact</p>
          <h1 className="text-foreground mt-2 text-3xl font-semibold tracking-tight md:text-5xl">
            Speak to a fire safety specialist
          </h1>
          <p className="mt-4 text-base leading-8 text-[var(--text-muted)]">
            Whether it is a single door, a full compartmentation survey or an estate-wide programme,
            start with a conversation. No obligation, no jargon.
          </p>
        </div>

        <div className="mt-10 grid items-start gap-4 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-nav-panel)] p-5 md:p-8">
            <h2 className="text-lg font-semibold text-foreground">Send an enquiry</h2>
            <form className="mt-5 flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-foreground">
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className={inputClass}
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-foreground">
                    Phone number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    className={inputClass}
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-foreground">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className={inputClass}
                    placeholder="you@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-semibold text-foreground">
                    Service needed
                  </label>
                  <input
                    id="service"
                    name="service"
                    type="text"
                    className={inputClass}
                    placeholder="e.g. Fire door inspection"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="min-h-[140px] w-full rounded-md border border-[var(--border)] bg-transparent px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-[var(--text-muted)] focus:border-brand-accent"
                  placeholder="Tell us about your building and what you need."
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md bg-brand-accent px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 sm:w-auto"
              >
                Send enquiry
              </button>
            </form>
          </div>

          <div className="space-y-4">
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
                  <span className="font-semibold text-white">Birmingham</span>
                  <br />
                  {siteConfig.offices.birmingham}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-nav-panel)] p-5 md:p-6">
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
                      <p className="text-sm font-semibold text-foreground">{step.title}</p>
                      <p className="mt-0.5 text-sm leading-6 text-[var(--text-muted)]">{step.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
