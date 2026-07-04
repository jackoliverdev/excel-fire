import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { articles } from "@/lib/articles";
import { legalPolicies } from "@/components/Legal/legal";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteConfig.url, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/sectors`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/projects`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/about-us`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/contact-us`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/accreditations`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteConfig.url}/areas-we-cover`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteConfig.url}/articles`, lastModified, changeFrequency: "weekly", priority: 0.6 },
    { url: `${siteConfig.url}/fire-regulations`, lastModified, changeFrequency: "yearly", priority: 0.5 },
    { url: `${siteConfig.url}/legal`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${siteConfig.url}/articles/${article.slug}`,
    lastModified: new Date(article.publishedIso),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  const legalRoutes: MetadataRoute.Sitemap = legalPolicies.map((policy) => ({
    url: `${siteConfig.url}/legal/${policy.id}`,
    lastModified,
    changeFrequency: "yearly",
    priority: 0.2,
  }));

  return [...staticRoutes, ...serviceRoutes, ...articleRoutes, ...legalRoutes];
}
