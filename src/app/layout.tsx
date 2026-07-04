import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { DesktopNavbar } from "@/components/Navigation/DesktopNavbar/DesktopNavbar";
import { MobileNavbar } from "@/components/Navigation/MobileNavbar/MobileNavbar";
import { ComingSoonScreen } from "@/components/ComingSoon/ComingSoonScreen";
import { ThemeProvider } from "@/components/Theme/ThemeProvider";
import { SiteFooter } from "@/components/Footer/SiteFooter";
import { CookieBanner } from "@/components/Cookies/CookieBanner";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Excel Fire | Passive Fire Protection & Fire Door Specialists",
    template: "%s | Excel Fire",
  },
  description: siteConfig.description,
  applicationName: "Excel Fire",
  keywords: [
    "passive fire protection",
    "fire doors",
    "fire stopping",
    "fire door installation",
    "fire door inspections",
    "compartmentation surveys",
    "FIRAS accredited",
    "London",
    "South East",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteConfig.url,
    siteName: "Excel Fire",
    title: "Excel Fire | Passive Fire Protection & Fire Door Specialists",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Excel Fire | Passive Fire Protection & Fire Door Specialists",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/Excel/excelxlogo.ico",
    shortcut: "/Excel/excelxlogo.ico",
    apple: "/Excel/excelxlogo.png",
  },
};

const organisationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteConfig.url}/#organisation`,
  name: siteConfig.legalName,
  url: siteConfig.url,
  logo: `${siteConfig.url}/Excel/excelxlogo.png`,
  description: siteConfig.description,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  vatID: siteConfig.vatNumber,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kemp House, 124 City Road",
    addressLocality: "London",
    postalCode: "EC1V 2NX",
    addressCountry: "GB",
  },
  areaServed: "England, United Kingdom",
  sameAs: [siteConfig.social.facebook, siteConfig.social.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const comingSoonFlag = process.env.coming_soon ?? process.env.COMING_SOON ?? "";
  const isComingSoon = comingSoonFlag.toLowerCase() === "true";

  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationJsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {isComingSoon ? (
            <ComingSoonScreen />
          ) : (
            <>
              <MobileNavbar />
              <DesktopNavbar />
              <main className="flex-1">{children}</main>
              <SiteFooter />
              <CookieBanner />
            </>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
