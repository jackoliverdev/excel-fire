import { buildMetadata } from "@/lib/seo";
import { AboutHero } from "@/components/About/AboutHero";
import { AboutIntro } from "@/components/About/AboutIntro";
import { AboutValues } from "@/components/About/AboutValues";
import { AboutHow } from "@/components/About/AboutHow";
import { AboutGroup } from "@/components/About/AboutGroup";
import { AboutProof } from "@/components/About/AboutProof";
import { StatsBand } from "@/components/Ui/StatsBand";
import { CtaStrip } from "@/components/Ui/CtaStrip";

export const metadata = buildMetadata({
  title: "About Excel Fire, Fire Safety Contractor",
  description:
    "Excel Fire Ltd installs, inspects and maintains fire doors and fire stopping. Founded 2019, UKAS-certified teams, offices in London and Birmingham.",
  path: "/about-us",
  image: "/images/brand/og-default.jpg",
});

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StatsBand />
      <AboutIntro />
      <AboutHow />
      <AboutGroup />
      <AboutValues />
      <AboutProof />
      <CtaStrip
        title="Get to know us properly"
        description="A 15-minute call is usually enough to understand your building and map the right next step."
        actionLabel="Speak to our team"
      />
    </>
  );
}
