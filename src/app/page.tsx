import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { HomeHero } from "@/components/Home/HomeHero";
import { HomeClientsCarousel } from "@/components/Home/HomeClientsCarousel";
import { HomeStatsStrip } from "@/components/Home/HomeStatsStrip";
import { HomeAboutMini } from "@/components/Home/HomeAboutMini";
import { HomeProjects } from "@/components/Home/HomeProjects";
import { HomeAccreditationsCarousel } from "@/components/Home/HomeAccreditationsCarousel";
import { HomeLocations } from "@/components/Home/HomeLocations";
import { HomeTestimonials } from "@/components/Home/HomeTestimonials";
import { HomeCta } from "@/components/Home/HomeCta";

const homeTitle = "Excel Fire | Passive Fire Protection & Fire Door Specialists";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Passive Fire Protection & Fire Door Specialists",
    description:
      "FIRAS-accredited fire doors and fire stopping across London and the South East, trusted at the Royal Albert Hall, Emirates Stadium and Eurostar.",
    path: "/",
  }),
  title: { absolute: homeTitle },
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeClientsCarousel />
      <HomeAboutMini />
      <HomeStatsStrip />
      <HomeProjects />
      <HomeLocations />
      <HomeTestimonials />
      <HomeCta />
      <HomeAccreditationsCarousel />
    </>
  );
}
