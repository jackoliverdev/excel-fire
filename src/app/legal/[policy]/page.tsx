import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPolicy, legalPolicies } from "@/components/Legal/legal";
import { LegalPolicy } from "@/components/Legal/LegalPolicy";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return legalPolicies.map((policy) => ({ policy: policy.id }));
}

export async function generateMetadata({ params }: PageProps<"/legal/[policy]">): Promise<Metadata> {
  const { policy: policyId } = await params;
  const policy = getPolicy(policyId);
  if (!policy) return {};
  return buildMetadata({ title: policy.title, description: policy.metaDescription, path: `/legal/${policy.id}` });
}

export default async function LegalPolicyPage({ params }: PageProps<"/legal/[policy]">) {
  const { policy: policyId } = await params;
  const policy = getPolicy(policyId);
  if (!policy) notFound();
  return <LegalPolicy policy={policy} />;
}
