import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type PageMetaInput = {
  /** Page title without the brand; the layout template appends "| Excel Fire". */
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  noIndex?: boolean;
};

/** Shared title, description, canonical, Open Graph and Twitter tags for every page. */
export function buildMetadata({
  title,
  description,
  path,
  image = siteConfig.ogImage,
  imageAlt = "Excel Fire branded van, passive fire protection and fire door specialists",
  type = "website",
  noIndex = false,
}: PageMetaInput): Metadata {
  const url = path === "/" ? siteConfig.url : `${siteConfig.url}${path}`;
  const fullTitle = `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: "en_GB",
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: [{ url: image, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}

export const organisationId = `${siteConfig.url}/#organisation`;

export type Crumb = { name: string; href?: string };

export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      ...(crumb.href ? { item: `${siteConfig.url}${crumb.href === "/" ? "" : crumb.href}` } : {}),
    })),
  };
}
