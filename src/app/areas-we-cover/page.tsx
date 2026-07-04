import type { Metadata } from "next";
import { AreasHero } from "@/components/Areas/AreasHero";
import { AreasSeo } from "@/components/Areas/AreasSeo";
import { HomeLocations } from "@/components/Areas/Locations";
import { CtaStrip } from "@/components/Ui/CtaStrip";

export const metadata: Metadata = {
  title: "Areas We Cover",
  description:
    "Excel Fire delivers fire door and passive fire protection services across England, including London, Essex, Hertfordshire, Kent, Surrey and the wider Home Counties.",
  alternates: { canonical: "/areas-we-cover" },
};

export default function AreasWeCoverPage() {
  return (
    <>
      <AreasHero />
      <HomeLocations />
      <CtaStrip
        title="Working somewhere on this map?"
        description="Tell us the postcode and the scope — we will confirm availability and typical lead times for your area."
        actionLabel="Check availability"
      />
      <AreasSeo />
    </>
  );
}
