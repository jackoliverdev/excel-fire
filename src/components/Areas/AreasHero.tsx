import { PageHero } from "@/components/Ui/PageHero";

export function AreasHero() {
  return (
    <PageHero
      title="Areas we cover"
      description="Excel Fire supports housing, commercial and public sector projects across England — including Greater London and the Home Counties — delivering compliant fire door and passive fire protection services where you need them."
      primaryAction={{ label: "Book an assessment", href: "/contact-us" }}
      secondaryAction={{ label: "View services", href: "/services" }}
    />
  );
}
