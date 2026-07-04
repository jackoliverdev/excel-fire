import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Ui/Section";
import { legalPolicies } from "@/components/Legal/legal";

export const metadata: Metadata = {
  title: "Legal Information",
  description:
    "Legal information for Excel Fire Ltd — privacy policy, cookie policy and website terms and conditions.",
  alternates: { canonical: "/legal" },
};

export default function LegalPage() {
  return (
    <Section last className="pt-14 md:pt-20">
      <div className="max-w-2xl">
        <p className="text-muted text-xs font-medium uppercase tracking-[0.16em]">Legal</p>
        <h1 className="text-foreground mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
          Legal information
        </h1>
        <p className="mt-3 text-base leading-8 text-[var(--text-muted)]">
          How Excel Fire Ltd handles your data, uses cookies, and the terms that apply to this
          website.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {legalPolicies.map((policy) => (
          <Link
            key={policy.id}
            href={`/legal/${policy.id}`}
            className="group rounded-xl border border-[var(--border)] bg-[var(--surface-nav-panel)] p-5 transition hover:border-brand-accent"
          >
            <h2 className="text-base font-semibold text-foreground transition group-hover:text-brand-accent">
              {policy.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{policy.summary}</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-brand-accent">
              Read policy
            </p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
