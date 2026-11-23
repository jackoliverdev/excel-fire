import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/Ui/PageHero";
import {
  ServiceKeyPoints,
  ServiceProcess,
  ServiceSections,
  ServiceProjects,
  ServiceFaqs,
  ServiceOthers,
  ServiceSchema,
} from "@/components/Services/ServiceDetail";
import { CtaStrip } from "@/components/Ui/CtaStrip";
import { getService, services } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    image: service.detailImage,
    imageAlt: service.detailImageAlt,
  });
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  // Split the service name over two deliberate lines: "Passive Fire" / "Protection" in orange.
  const words = service.title.split(" ");
  const headline = words.length > 1 ? words.slice(0, -1).join(" ") : service.title;
  const accent = words.length > 1 ? words[words.length - 1] : undefined;

  return (
    <>
      <ServiceSchema service={service} />
      <PageHero
        eyebrow="Fire safety services"
        title={headline}
        titleAccent={accent}
        description={service.heroDescription}
        image={service.heroImage}
        imageAlt={service.heroImageAlt}
        layout="split"
        breadcrumbs={[{ name: "Services", href: "/services" }, { name: service.title }]}
        primaryAction={{ label: "Book an assessment", href: "/contact-us" }}
        secondaryAction={{ label: "All services", href: "/services" }}
      />
      <ServiceKeyPoints service={service} />
      <ServiceProcess service={service} />
      <ServiceSections service={service} />
      <ServiceProjects service={service} />
      <ServiceFaqs service={service} />
      <CtaStrip
        title={`Need ${service.title.toLowerCase()} on your building?`}
        description="Speak to an accredited specialist about scope, timescales and pricing. Practical advice from the first call."
      />
      <ServiceOthers current={service} />
    </>
  );
}
