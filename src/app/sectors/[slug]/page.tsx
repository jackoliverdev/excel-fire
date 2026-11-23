import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSector, sectors } from "@/lib/sectors";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/Ui/PageHero";
import { SectorIntro, SectorServices, SectorProjects, SectorOthers } from "@/components/Sectors/SectorDetail";
import { CtaStrip } from "@/components/Ui/CtaStrip";

export const dynamicParams = false;

export function generateStaticParams() {
  return sectors.map((sector) => ({ slug: sector.id }));
}

export async function generateMetadata({ params }: PageProps<"/sectors/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const sector = getSector(slug);
  if (!sector) return {};

  return buildMetadata({
    title: sector.metaTitle,
    description: sector.metaDescription,
    path: `/sectors/${sector.id}`,
    image: sector.image,
    imageAlt: sector.imageAlt,
  });
}

export default async function SectorPage({ params }: PageProps<"/sectors/[slug]">) {
  const { slug } = await params;
  const sector = getSector(slug);
  if (!sector) notFound();

  return (
    <>
      <PageHero
        eyebrow={sector.title}
        title={sector.heading}
        description={sector.metaDescription}
        image={sector.image}
        imageAlt={sector.imageAlt}
        layout="split"
        breadcrumbs={[{ name: "Sectors", href: "/sectors" }, { name: sector.title }]}
        primaryAction={{ label: "Discuss your building", href: "/contact-us" }}
        secondaryAction={{ label: "View projects", href: "/projects" }}
      />
      <SectorIntro sector={sector} />
      <SectorProjects sector={sector} />
      <SectorServices sector={sector} />
      <CtaStrip />
      <SectorOthers current={sector} />
    </>
  );
}
