import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/Ui/PageHero";
import { SectorsIndex } from "@/components/Sectors/SectorsIndex";
import { CtaStrip } from "@/components/Ui/CtaStrip";

export const metadata = buildMetadata({
  title: "Sectors We Work In",
  description:
    "Fire doors and passive fire protection for social housing, main contractors, venues and transport, healthcare and education across England.",
  path: "/sectors",
});

export default function SectorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sectors"
        title="Fire safety, shaped to your sector"
        description="We adapt how we survey, install and evidence our work to fit the building: occupied social housing, live venues, 24/7 depots and new-build sites."
        image="/images/projects/emirates-stadium/stadium.webp"
        imageAlt="Emirates Stadium, a live venue where Excel Fire phased fire door works around fixtures"
        breadcrumbs={[{ name: "Sectors" }]}
        primaryAction={{ label: "Discuss your sector", href: "/contact-us" }}
        secondaryAction={{ label: "View projects", href: "/projects" }}
      />
      <SectorsIndex />
      <CtaStrip
        title="Don't see your sector?"
        description="If you are responsible for a building, we can almost certainly help. Tell us what you manage and we will map the right services to it."
        actionLabel="Talk to us"
      />
    </>
  );
}
