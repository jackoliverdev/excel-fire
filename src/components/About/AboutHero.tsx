import { PageHero } from "@/components/Ui/PageHero";

export function AboutHero() {
  return (
    <PageHero
      eyebrow="About Excel Fire"
      title="Ignite awareness, extinguish risk"
      description="Excel Fire Ltd is your fire safety partner, protecting lives and property through expert consultation, rigorous assessment and high-quality installation."
      image="/images/brand/van-side.webp"
      imageAlt="Excel Fire branded van in black and orange livery"
      imagePosition="object-[center_60%]"
      breadcrumbs={[{ name: "About us" }]}
      primaryAction={{ label: "Speak to our team", href: "/contact-us" }}
      secondaryAction={{ label: "View projects", href: "/projects" }}
    />
  );
}
