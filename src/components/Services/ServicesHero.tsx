import { PageHero } from "@/components/Ui/PageHero";

export function ServicesHero() {
  return (
    <PageHero
      title="Fire safety services delivered by accredited specialists"
      description="From fire door installation and inspections to fire stopping, validation surveys and Injectaclad remediation — Excel Fire provides compliant solutions backed by accredited teams and responsive support."
      image="/Excel/Services/site-firestopping-2.jpg"
      imageAlt="Excel Fire operative delivering compliant fire stopping works"
      primaryAction={{ label: "Book an assessment", href: "/contact-us" }}
      secondaryAction={{ label: "Areas we cover", href: "/areas-we-cover" }}
    />
  );
}
