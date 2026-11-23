import { buildMetadata } from "@/lib/seo";
import { AreasHero } from "@/components/Areas/AreasHero";
import { AreasSeo } from "@/components/Areas/AreasSeo";
import { HomeLocations } from "@/components/Home/HomeLocations";
import { CtaStrip } from "@/components/Ui/CtaStrip";

export const metadata = buildMetadata({
  title: "Areas We Cover",
  description:
    "Fire door and passive fire protection services across England, from offices in London and Birmingham. London, Essex, Hertfordshire, Kent and Surrey.",
  path: "/areas-we-cover",
});

export default function AreasWeCoverPage() {
  return (
    <>
      <AreasHero />
      <HomeLocations />
      <CtaStrip
        title="Working somewhere on this map?"
        description="Tell us the postcode and the scope, we will confirm availability and typical lead times for your area."
        actionLabel="Check availability"
      />
      <AreasSeo />
    </>
  );
}
