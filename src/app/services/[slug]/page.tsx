import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/Ui/PageHero";
import {
  ServiceKeyPoints,
  ServiceProcess,
  ServiceSections,
  ServiceFaqs,
  ServiceOthers,
} from "@/components/Services/ServiceDetail";
import { CtaStrip } from "@/components/Ui/CtaStrip";
import { getService, services } from "@/lib/services";
import { siteConfig } from "@/lib/site";

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.metaTitle} | Excel Fire`,
      description: service.metaDescription,
      url: `${siteConfig.url}/services/${service.slug}`,
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.title,
        description: service.metaDescription,
        url: `${siteConfig.url}/services/${service.slug}`,
        areaServed: "England, United Kingdom",
        provider: {
          "@type": "LocalBusiness",
          name: siteConfig.legalName,
          telephone: siteConfig.phone,
          email: siteConfig.email,
          url: siteConfig.url,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services` },
          { "@type": "ListItem", position: 3, name: service.title },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        title={service.title}
        description={service.heroDescription}
        image={service.heroImage}
        imageAlt={service.detailImageAlt}
        primaryAction={{ label: "Book an assessment", href: "/contact-us" }}
        secondaryAction={{ label: "All services", href: "/services" }}
      />
      <ServiceKeyPoints service={service} />
      <ServiceProcess service={service} />
      <ServiceSections service={service} />
      <ServiceFaqs service={service} />
      <CtaStrip
        title={`Need ${service.title.toLowerCase()} on your building?`}
        description="Speak to an accredited specialist about scope, timescales and pricing — practical advice from the first call."
      />
      <ServiceOthers current={service} />
    </>
  );
}
