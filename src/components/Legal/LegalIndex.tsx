import { LinkList } from "@/components/Ui/LinkList";
import { Section } from "@/components/Ui/Section";
import { Breadcrumbs } from "@/components/Ui/Breadcrumbs";
import { legalPolicies } from "@/components/Legal/legal";

export function LegalIndex() {
  return (
    <Section last className="pt-14 md:pt-20">
      <Breadcrumbs items={[{ name: "Legal" }]} tone="light" />
      <div className="mt-6 max-w-2xl">
        <p className="eyebrow">Legal</p>
        <h1 className="text-foreground mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
          Legal information
        </h1>
        <p className="mt-3 text-base leading-8 text-[var(--text-muted)]">
          How Excel Fire Ltd handles your data, uses cookies, and the terms that apply to this
          website.
        </p>
      </div>

      <div className="mt-10">
        <LinkList columns={3} items={legalPolicies.map((policy) => ({ label: policy.title, href: `/legal/${policy.id}`, description: policy.summary }))} />
      </div>
    </Section>
  );
}
