import { PageHero } from "@/components/Ui/PageHero";

export function AreasHero() {
  return (
    <PageHero
      eyebrow="Coverage"
      title="Areas we cover"
      description="Offices in London and Birmingham, with teams working across England. Choose your area to see the boroughs and towns we cover."
      breadcrumbs={[{ name: "Areas we cover" }]}
      image="/images/brand/van-street.webp"
      imageAlt="Excel Fire van on a London street"
      primaryAction={{ label: "Book an assessment", href: "/contact-us" }}
      secondaryAction={{ label: "View services", href: "/services" }}
    />
  );
}
