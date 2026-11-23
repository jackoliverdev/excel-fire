import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { articles } from "@/lib/articles";
import { projects } from "@/lib/projects";
import { sectors } from "@/lib/sectors";
import { legalPolicies } from "@/components/Legal/legal";
import { siteConfig } from "@/lib/site";

/** Date of the last content update. Bump when copy changes so crawlers get an honest lastModified. */
const CONTENT_UPDATED = new Date("2026-11-13");

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => `${siteConfig.url}${path}`;
  const entry = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly",
    images?: string[],
  ): MetadataRoute.Sitemap[number] => ({
    url: url(path),
    lastModified: CONTENT_UPDATED,
    changeFrequency,
    priority,
    ...(images?.length ? { images: images.map((src) => url(src)) } : {}),
  });

  return [
    entry("", 1, "weekly", ["/images/brand/og-default.jpg"]),
    entry("/services", 0.9),
    ...services.map((service) => entry(`/services/${service.slug}`, 0.9, "monthly", [service.detailImage])),
    entry("/projects", 0.9, "weekly"),
    ...projects.map((project) =>
      entry(`/projects/${project.slug}`, 0.8, "monthly", [project.cover.src, ...project.pairs.map((pair) => pair.after.src)]),
    ),
    entry("/sectors", 0.8),
    ...sectors.map((sector) => entry(`/sectors/${sector.id}`, 0.7, "monthly", [sector.image])),
    entry("/about-us", 0.7),
    entry("/accreditations", 0.7),
    entry("/excel-electrics", 0.6),
    entry("/contact-us", 0.8),
    entry("/areas-we-cover", 0.6),
    entry("/fire-regulations", 0.6),
    entry("/articles", 0.5, "weekly"),
    ...articles.map((article) => ({
      url: url(`/articles/${article.slug}`),
      lastModified: new Date(article.publishedIso),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
    entry("/legal", 0.2, "yearly"),
    ...legalPolicies.map((policy) => entry(`/legal/${policy.id}`, 0.2, "yearly")),
  ];
}
