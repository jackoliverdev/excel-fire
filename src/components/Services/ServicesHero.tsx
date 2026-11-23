import { PageHero } from "@/components/Ui/PageHero";

export function ServicesHero() {
  return (
    <PageHero
      eyebrow="Services"
      title="Fire doors and fire stopping, installed, inspected and certified"
      description="Eight services covering a building's passive fire protection, from first survey to certified handover, delivered by UKAS third-party certified teams across London and the South East."
      image="/images/projects/printworks-tottenham/site-view.webp"
      imageAlt="Printworks new-build site in Tottenham where Excel Fire fire stopped 2,300+ locations"
      breadcrumbs={[{ name: "Services" }]}
      primaryAction={{ label: "Book an assessment", href: "/contact-us" }}
      secondaryAction={{ label: "View projects", href: "/projects" }}
    />
  );
}
