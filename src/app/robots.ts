import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

/**
 * Search engines and AI answer engines (ChatGPT search, Perplexity, Claude, Copilot via Bing) are all allowed,
 * so the case studies and service pages can be cited. Server actions and Next internals are kept out.
 */
export default function robots(): MetadataRoute.Robots {
  const isComingSoon = (process.env.coming_soon ?? process.env.COMING_SOON ?? "").toLowerCase() === "true";

  if (isComingSoon) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/_next/data/"] },
      {
        userAgent: ["OAI-SearchBot", "ChatGPT-User", "PerplexityBot", "Perplexity-User", "Claude-SearchBot", "Claude-User", "Bingbot", "Googlebot"],
        allow: "/",
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
