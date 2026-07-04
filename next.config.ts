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
    ];

    // Permanent redirects from old WordPress URLs to their new equivalents.
    const legacyRedirects = [
      { source: "/clients", destination: "/projects", permanent: true },
      { source: "/blog", destination: "/articles", permanent: true },
      { source: "/blog/:path*", destination: "/articles", permanent: true },
      { source: "/privacy-notice", destination: "/legal/privacy-policy", permanent: true },
      { source: "/cookie-policy-uk", destination: "/legal/cookie-policy", permanent: true },
      { source: "/services/fire-door-installations", destination: "/services/fire-door-installation", permanent: true },
      { source: "/services/validation-and-fire-door-surveys", destination: "/services/validation-surveys", permanent: true },
      { source: "/contact", destination: "/contact-us", permanent: true },
      { source: "/about", destination: "/about-us", permanent: true },
    ];

    return isComingSoon ? comingSoonRedirects : legacyRedirects;
  },
};

export default nextConfig;
