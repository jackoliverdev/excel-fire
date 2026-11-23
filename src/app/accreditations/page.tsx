import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/Ui/PageHero";
import { AccreditationsList, AccreditationsWhy, CompanyFacts } from "@/components/Accreditations/AccreditationsSections";
import { CtaStrip } from "@/components/Ui/CtaStrip";

export const metadata = buildMetadata({
  title: "Accreditations & Compliance",
  description:
    "FIRAS, BM TRADA Q-Mark, Bluesky FDIN, CHAS, Constructionline Gold and SMAS: what each accreditation covers, plus company facts for supplier checks.",
  path: "/accreditations",
});

export default function AccreditationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Accreditations & compliance"
        title="Our accreditations and what they cover"
        description="Our fire safety delivery is independently audited by UKAS-accredited bodies, manufacturer schemes and industry prequalification standards. Here is what each one means for you."
        image="/images/projects/printworks-tottenham/riser-after.webp"
        imageAlt="Fire stopping with an Excel Fire QR install label, logged for the building safety file"
        breadcrumbs={[{ name: "Accreditations" }]}
        primaryAction={{ label: "Request documents", href: "/contact-us" }}
        secondaryAction={{ label: "View projects", href: "/projects" }}
      />
      <AccreditationsList />
      <AccreditationsWhy />
      <CompanyFacts />
      <CtaStrip
        title="Want copies of our certificates?"
        description="We provide certification, insurance and prequalification documents on request, usually the same day."
        actionLabel="Request documents"
      />
    </>
  );
}
