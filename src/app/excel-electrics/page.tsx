import { buildMetadata } from "@/lib/seo";
import { electricsFaqs } from "@/lib/electrics";
import { siteConfig } from "@/lib/site";
import { PageHero } from "@/components/Ui/PageHero";
import { JsonLd } from "@/components/Seo/JsonLd";
import {
  ElectricsIntro,
  ElectricsServicesList,
  ElectricsWireAndFire,
  ElectricsFaqs,
} from "@/components/Electrics/ElectricsSections";
import { CtaStrip } from "@/components/Ui/CtaStrip";

export const metadata = buildMetadata({
  title: "Excel Electrics, NICEIC Approved Electricians",
  description:
    "Excel Electrics is the NICEIC approved electrical division of Excel Fire: electrical work, fire alarms, access control, gates and EV charging for homes and businesses.",
  path: "/excel-electrics",
  image: "/images/electrics/bp-forecourt-ipswich.webp",
  imageAlt: "Excel Electrics engineers on a BP forecourt in Ipswich",
});

export default function ExcelElectricsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: electricsFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }}
      />
      <PageHero
        eyebrow="Our electrical division"
        title="Excel Electrics. Wire and fire, under one roof."
        description="NICEIC approved electricians for homes, landlords and businesses, from the team behind Excel Fire."
        image="/images/brand/van-street.webp"
        imageAlt="Excel Fire branded van, the group behind Excel Electrics"
        breadcrumbs={[{ name: "Excel Electrics" }]}
        primaryAction={{ label: `Call ${siteConfig.electrics.phone}`, href: siteConfig.electrics.phoneHref }}
        secondaryAction={{ label: "Visit excelelectrics.com", href: siteConfig.electrics.url }}
      />
      <ElectricsIntro />
      <ElectricsServicesList />
      <ElectricsWireAndFire />
      <ElectricsFaqs />
      <CtaStrip
        title="Need fire safety works and electrics on the same job?"
        description="Talk to us once. We will put the right Excel Fire and Excel Electrics teams on one programme."
        actionLabel="Talk to the team"
      />
    </>
  );
}
