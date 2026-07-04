import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/Ui/Section";
import { LegalMarkdown } from "@/components/Legal/LegalMarkdown";
import { getPolicy, legalPolicies } from "@/components/Legal/legal";
import { inlineLinkClass } from "@/components/Ui/buttons";

export async function generateStaticParams() {
  return legalPolicies.map((policy) => ({ policy: policy.id }));
}

export async function generateMetadata({
  params,
}: PageProps<"/legal/[policy]">): Promise<Metadata> {
  const { policy: policyId } = await params;
  const policy = getPolicy(policyId);
  if (!policy) return {};

  return {
    title: policy.title,
    description: policy.summary,
    alternates: { canonical: `/legal/${policy.id}` },
  };
}

export default async function LegalPolicyPage({ params }: PageProps<"/legal/[policy]">) {
  const { policy: policyId } = await params;
  const policy = getPolicy(policyId);
  if (!policy) notFound();

  const otherPolicies = legalPolicies.filter((item) => item.id !== policy.id);

  return (
    <Section last>
      <div className="mx-auto max-w-3xl">
        <Link href="/legal" className={inlineLinkClass}>
          ← All legal information
        </Link>

        <h1 className="text-foreground mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
          {policy.title}
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
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}
