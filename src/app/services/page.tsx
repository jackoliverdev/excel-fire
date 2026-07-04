import type { Metadata } from "next";
import { ServicesHero } from "@/components/Services/ServicesHero";
import { ServicesGrid } from "@/components/Services/ServicesGrid";
import { ServicesWhy } from "@/components/Services/ServicesWhy";
import { CtaStrip } from "@/components/Ui/CtaStrip";

export const metadata: Metadata = {
  title: "Fire Safety Services",
  description:
    "Passive fire protection, fire door installation, inspections, fire stopping, validation surveys, Injectaclad and active fire systems — accredited fire safety services from Excel Fire Ltd.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServicesWhy />
      <CtaStrip
        title="Not sure which service you need?"
        description="Describe the building and the problem — we will map the right survey or works to it, and tell you plainly if you don't need us."
      />
    </>
  );
}
