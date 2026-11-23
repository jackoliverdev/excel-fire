import type { Project } from "@/lib/projects";
import { getService } from "@/lib/services";
import { siteConfig } from "@/lib/site";
import { organisationId } from "@/lib/seo";
import { JsonLd } from "@/components/Seo/JsonLd";

/** Article schema for a case study. Mirrors the visible page: client, place, services and photos. */
export function ProjectSchema({ project }: { project: Project }) {
  const url = `${siteConfig.url}/projects/${project.slug}`;
  const images = [project.cover, ...project.pairs.flatMap((pair) => [pair.after]), ...project.gallery]
    .slice(0, 6)
    .map((image) => `${siteConfig.url}${image.src}`);

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": `${url}#article`,
        headline: project.title,
        description: project.metaDescription,
        url,
        mainEntityOfPage: url,
        image: images,
        datePublished: project.publishedIso,
        dateModified: project.publishedIso,
        inLanguage: "en-GB",
        author: { "@id": organisationId },
        publisher: { "@id": organisationId },
        about: project.services
          .map((slug) => getService(slug))
          .filter((service) => service !== undefined)
          .map((service) => ({ "@type": "Service", name: service.title, url: `${siteConfig.url}/services/${service.slug}` })),
        mentions: [
          { "@type": "Organization", name: project.client },
          ...(project.partner ? [{ "@type": "Organization", name: project.partner.value }] : []),
        ],
        contentLocation: { "@type": "Place", name: project.location },
      }}
    />
  );
}
