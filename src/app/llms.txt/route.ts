import { siteConfig } from "@/lib/site";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { sectors } from "@/lib/sectors";
import { accreditations } from "@/lib/accreditations";

export const dynamic = "force-static";

/**
 * llms.txt: a plain-text map of the site for AI assistants. Cheap to keep, generated from the same
 * content as the pages so it can never drift from them.
 */
export function GET() {
  const u = (path: string) => `${siteConfig.url}${path}`;
  const body = `# ${siteConfig.legalName}

> ${siteConfig.description} Founded ${siteConfig.foundingYear}. Trading address: ${siteConfig.offices.london}. Registered office: ${siteConfig.offices.registered}. Further offices in Sawbridgeworth (${siteConfig.offices.sawbridgeworth}) and Birmingham. Phone ${siteConfig.phone}, email ${siteConfig.email}. Companies House ${siteConfig.companyNumber}.

Excel Fire installs, inspects and maintains fire doors and passive fire protection (fire stopping, compartmentation, cavity barriers) for councils, housing providers, Tier 1 contractors and commercial estates. Excel Fire Ltd is an NICEIC Approved Contractor, covering all its electrical and active fire works, delivered through its electrical division ${siteConfig.electrics.name} (${siteConfig.electrics.url}).

Accreditations: ${accreditations.map((item) => item.short).join(", ")}.

## Services
${services.map((s) => `- [${s.title}](${u(`/services/${s.slug}`)}): ${s.cardSummary}`).join("\n")}

## Case studies
${projects.map((p) => `- [${p.name}](${u(`/projects/${p.slug}`)}): ${p.summary} Client: ${p.client}. ${p.location}, ${p.period}.`).join("\n")}

## Sectors
${sectors.map((s) => `- [${s.title}](${u(`/sectors/${s.id}`)}): ${s.strap}`).join("\n")}

## Company
- [About Excel Fire](${u("/about-us")})
- [Accreditations and company facts](${u("/accreditations")})
- [Fire regulations explained](${u("/fire-regulations")})
- [Areas we cover](${u("/areas-we-cover")})
- [Excel Electrics](${u("/excel-electrics")})
- [Contact](${u("/contact-us")})
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
