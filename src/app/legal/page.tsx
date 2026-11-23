import { buildMetadata } from "@/lib/seo";
import { LegalIndex } from "@/components/Legal/LegalIndex";

export const metadata = buildMetadata({
  title: "Legal Information",
  description: "Legal information for Excel Fire Ltd: privacy policy, cookie policy and website terms and conditions.",
  path: "/legal",
});

export default function LegalPage() {
  return <LegalIndex />;
}
