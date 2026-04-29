import { HomeHero } from "@/components/Home/HomeHero";
import { HomeClientsCarousel } from "@/components/Home/HomeClientsCarousel";
import { HomeStatsStrip } from "@/components/Home/HomeStatsStrip";
import { HomeAboutMini } from "@/components/Home/HomeAboutMini";
import { HomeAccreditationsCarousel } from "@/components/Home/HomeAccreditationsCarousel";
import { HomeLocations } from "@/components/Home/HomeLocations";
import { HomeTestimonials } from "@/components/Home/HomeTestimonials";
import { HomeCta } from "@/components/Home/HomeCta";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeClientsCarousel />
      <HomeAboutMini />
      <HomeStatsStrip />
      <HomeLocations />
      <HomeTestimonials />
      <HomeCta />
      <HomeAccreditationsCarousel />
    </>
  );
}
