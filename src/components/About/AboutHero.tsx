import { PageHero } from "@/components/Ui/PageHero";

export function AboutHero() {
  return (
    <PageHero
      title="Ignite awareness, extinguish risk"
      description="Excel Fire Ltd is more than a fire safety provider — we are your trusted fire safety partner, dedicated to protecting lives and property through expert consultation, rigorous assessments and high-quality installations."
      primaryAction={{ label: "Speak to our team", href: "/contact-us" }}
      secondaryAction={{ label: "View services", href: "/services" }}
    />
  );
}
