import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  allowedDevOrigins: ["192.168.0.21", "192.168.0.41", "192.168.0.32", "192.168.0.141"],
  async redirects() {
    return [
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
    ];
  },
};

export default nextConfig;
