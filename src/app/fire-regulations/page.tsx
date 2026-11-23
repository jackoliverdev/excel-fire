import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/Ui/PageHero";
import { RegulationsOverview, RegulationsKeyLegislation } from "@/components/Regulations/RegulationsContent";
import { CtaStrip } from "@/components/Ui/CtaStrip";

export const metadata = buildMetadata({
  title: "Fire Safety Regulations Explained",
  description:
    "The Fire Safety Order 2005, Fire Safety Act 2021, Regulation 10 and the Building Safety Act 2022 explained: who they apply to and what you must do.",
  path: "/fire-regulations",
});

export default function FireRegulationsPage() {
  return (
    <>
      <PageHero
        title="Fire safety law, in plain English"
        description="Understand your duties under the Regulatory Reform (Fire Safety) Order 2005 and the Fire Safety (England) Regulations 2022, and how Excel Fire helps you meet them."
        image="/images/projects/david-lee-point-brasset-point-newham/tower-22-floors.webp"
        layout="split"
        imageAlt="22-storey residential tower, the kind of building covered by Regulation 10 fire door checks"
        eyebrow="Your legal duties"
        breadcrumbs={[{ name: "Fire regulations" }]}
        primaryAction={{ label: "Book an assessment", href: "/contact-us" }}
        secondaryAction={{ label: "View services", href: "/services" }}
      />

      <RegulationsOverview />
      <RegulationsKeyLegislation />

      <CtaStrip
        title="Unsure whether the regulations apply to you?"
        description="Five minutes on the phone will tell you exactly where you stand, and what to do about it."
        actionLabel="Get clarity"
      />
    </>
  );
}
