import { buildMetadata } from "@/lib/seo";
import { ServicesHero } from "@/components/Services/ServicesHero";
import { ServicesGrid } from "@/components/Services/ServicesGrid";
import { ServicesWhy } from "@/components/Services/ServicesWhy";
import { CtaStrip } from "@/components/Ui/CtaStrip";

export const metadata = buildMetadata({
  title: "Fire Door & Passive Fire Protection Services",
  description:
    "Fire door installation, maintenance and inspections, fire stopping, surveys, Injectaclad and alarm interlinks, by UKAS third-party certified teams.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServicesWhy />
      <CtaStrip
        title="Not sure which service you need?"
        description="Describe the building and the problem, we will map the right survey or works to it, and tell you plainly if you don't need us."
      />
    </>
  );
}
