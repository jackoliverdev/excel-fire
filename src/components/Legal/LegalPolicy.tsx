import Link from "next/link";
import { Section } from "@/components/Ui/Section";
import { Breadcrumbs } from "@/components/Ui/Breadcrumbs";
import { LegalMarkdown } from "@/components/Legal/LegalMarkdown";
import { legalPolicies, type LegalPolicy as Policy } from "@/components/Legal/legal";
import { tidy } from "@/lib/text";

export function LegalPolicy({ policy }: { policy: Policy }) {
  const otherPolicies = legalPolicies.filter((item) => item.id !== policy.id);

  return (
    <Section last>
      <div className="mx-auto max-w-3xl">
        <Breadcrumbs items={[{ name: "Legal", href: "/legal" }, { name: policy.title }]} tone="light" />

        <h1 className="text-foreground mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
          {tidy(policy.title, 18)}
        </h1>
        <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
          Last updated: {policy.lastUpdated}
        </p>

        <article className="mt-8 space-y-4 rounded-xl border border-[var(--border)] bg-[var(--surface-nav-panel)] p-6 md:p-8">
          <LegalMarkdown markdown={policy.markdown} />
        </article>

        <div className="mt-8 flex flex-wrap gap-2">
          {otherPolicies.map((item) => (
            <Link
              key={item.id}
              href={`/legal/${item.id}`}
              className="rounded-md border border-[var(--border)] bg-[var(--surface-nav-panel)] px-4 py-2 text-sm font-semibold text-[var(--text-muted)] transition hover:border-brand-accent hover:text-foreground"
            >
              {tidy(item.title, 18)}
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}
