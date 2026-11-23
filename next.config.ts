import type { NextConfig } from "next";

const isComingSoon =
  (process.env.coming_soon ?? process.env.COMING_SOON ?? "").toLowerCase() === "true";

const nextConfig: NextConfig = {
  devIndicators: false,
  allowedDevOrigins: ["192.168.0.21", "192.168.0.41", "192.168.0.32", "192.168.0.141"],
  async redirects() {
    // While the coming-soon screen is live, funnel every route to the homepage.
    const comingSoonRedirects = [
      { source: "/about", destination: "/", permanent: false },
      { source: "/about/:path*", destination: "/", permanent: false },
      { source: "/about-us", destination: "/", permanent: false },
      { source: "/about-us/:path*", destination: "/", permanent: false },
      { source: "/services", destination: "/", permanent: false },
      { source: "/services/:path*", destination: "/", permanent: false },
      { source: "/clients", destination: "/", permanent: false },
      { source: "/clients/:path*", destination: "/", permanent: false },
      { source: "/articles", destination: "/", permanent: false },
      { source: "/articles/:path*", destination: "/", permanent: false },
      { source: "/contact-us", destination: "/", permanent: false },
      { source: "/contact-us/:path*", destination: "/", permanent: false },
      { source: "/legal", destination: "/", permanent: false },
      { source: "/legal/:path*", destination: "/", permanent: false },
      { source: "/areas-we-cover", destination: "/", permanent: false },
      { source: "/areas-we-cover/:path*", destination: "/", permanent: false },
      { source: "/fire-regulations", destination: "/", permanent: false },
      { source: "/projects/:path*", destination: "/", permanent: false },
      { source: "/projects", destination: "/", permanent: false },
      { source: "/sectors/:path*", destination: "/", permanent: false },
      { source: "/sectors", destination: "/", permanent: false },
      { source: "/accreditations", destination: "/", permanent: false },
      { source: "/excel-electrics", destination: "/", permanent: false },
    ];

    // Permanent redirects from the old WordPress site (excelfireltd.com page and post sitemaps, 13/11/2026).
    // Blog posts are mapped to the closest topic page rather than a generic index.
    const postTargets: Record<string, string[]> = {
      "/services/fire-door-inspections": [
        "the-importance-of-fire-door-inspections",
        "the-ins-outs-of-fire-door-surveys",
        "fire-door-or-fire-exit-whats-the-difference",
      ],
      "/services/fire-door-installation": ["accredited-fire-doors"],
      "/services/passive-fire-protection": [
        "fire-compartmentation-in-action-how-it-works",
        "how-fire-spreads-and-what-we-can-do-to-stop-it",
        "how-smoke-spreads-and-how-to-slow-it-down",
        "fire-partitioning-systems",
      ],
      "/services/active-fire-systems": [
        "how-to-reduce-false-fire-alarms",
        "how-often-should-i-conduct-smoke-and-fire-alarm-inspections",
        "which-fire-detection-system-should-you-be-using",
        "fire-sprinkler-installation",
        "electrical-consumer-unit-enclosures",
      ],
      "/accreditations": ["ukas-3rd-party-accredited-what-does-it-really-mean", "institute-of-fire-safety-managers"],
      "/fire-regulations": [
        "fire-safety-bill-2019-2021",
        "fire-safety-for-landlords-what-do-you-need-to-know",
        "high-rise-fire-safety-tips-for-landlords",
        "fire-safety-flats",
        "fire-risk-assessment",
        "fire-risk-assessments-an-essential-service",
        "type-4-fire-risk-assessments",
        "fracs-fire-risk-assessments-in-london",
        "conducting-fire-risk-assessments-safely",
      ],
      "/sectors/education": ["guide-to-fire-safety-in-student-accommodation"],
      "/about-us": [
        "excel-fire-during-covid-19",
        "your-fire-safety-partner-keeping-busy-during-covid-19",
        "3-reasons-to-consider-a-career-in-fire-safety",
        "from-firefighter-to-fire-risk-assessor-all-in-the-name-of-safety",
        "what-makes-a-fire-safety-expert",
        "fire-prevention-why-we-do-what-we-do",
      ],
      "/articles": [
        "beyond-face-value-how-we-prevent-fires-in-homes",
        "which-type-of-fire-extinguisher-do-i-need",
        "types-of-fire-extinguishers",
        "uk-fire-statistics",
        "guide-to-fire-safety-signs",
        "fire-safety-in-empty-buildings-all-you-need-to-know",
        "workplace-fire-safety-housekeeping-tips",
        "bonfire-night-safety-tips",
        "3-questions-to-ask-your-fire-safety-company",
        "3-things-to-include-in-your-fire-safety-plan",
        "4-fire-safety-tips-for-summer",
        "fire-safety-in-the-office",
      ],
    };

    const postRedirects = Object.entries(postTargets).flatMap(([destination, slugs]) =>
      slugs.map((slug) => ({ source: `/${slug}`, destination, permanent: true })),
    );

    const legacyRedirects = [
      { source: "/clients", destination: "/projects", permanent: true },
      { source: "/our-clients", destination: "/projects", permanent: true },
      { source: "/our-mission", destination: "/about-us", permanent: true },
      { source: "/vacancies", destination: "/about-us", permanent: true },
      { source: "/vacancy/:path*", destination: "/about-us", permanent: true },
      { source: "/frequently-asked-questions", destination: "/contact-us", permanent: true },
      { source: "/contact-thank-you", destination: "/contact-us", permanent: true },
      { source: "/video-tutorials", destination: "/articles", permanent: true },
      { source: "/blog", destination: "/articles", permanent: true },
      { source: "/blog/:path*", destination: "/articles", permanent: true },
      { source: "/category/:path*", destination: "/articles", permanent: true },
      { source: "/tag/:path*", destination: "/articles", permanent: true },
      { source: "/author/:path*", destination: "/about-us", permanent: true },
      { source: "/privacy-notice", destination: "/legal/privacy-policy", permanent: true },
      { source: "/cookie-policy-uk", destination: "/legal/cookie-policy", permanent: true },
      { source: "/services/fire-door-installations", destination: "/services/fire-door-installation", permanent: true },
      { source: "/services/validation-and-fire-door-surveys", destination: "/services/validation-surveys", permanent: true },
      { source: "/contact", destination: "/contact-us", permanent: true },
      { source: "/about", destination: "/about-us", permanent: true },
      { source: "/electrics", destination: "/excel-electrics", permanent: true },
      ...postRedirects,
    ];

    return isComingSoon ? comingSoonRedirects : legacyRedirects;
  },
};

export default nextConfig;
