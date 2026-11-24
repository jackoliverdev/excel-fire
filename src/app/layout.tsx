import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Geist, Geist_Mono } from "next/font/google";
import { DesktopNavbar } from "@/components/Navigation/DesktopNavbar/DesktopNavbar";
import { MobileNavbar } from "@/components/Navigation/MobileNavbar/MobileNavbar";
import { ComingSoonScreen } from "@/components/ComingSoon/ComingSoonScreen";
import { ThemeProvider } from "@/components/Theme/ThemeProvider";
import { SiteFooter } from "@/components/Footer/SiteFooter";
import { CookieBanner } from "@/components/Cookies/CookieBanner";
import { siteConfig } from "@/lib/site";
import { organisationId } from "@/lib/seo";
import { accreditations } from "@/lib/accreditations";
import { JsonLd } from "@/components/Seo/JsonLd";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
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
  authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
  creator: siteConfig.legalName,
  formatDetection: { telephone: true },
  openGraph: {
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Excel Fire branded van" }],
    type: "website",
    locale: "en_GB",
    url: siteConfig.url,
    siteName: "Excel Fire",
    title: "Excel Fire | Passive Fire Protection & Fire Door Specialists",
    description: siteConfig.description,
  },
  twitter: {
    images: [siteConfig.ogImage],
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

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "light dark",
};

const organisationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["GeneralContractor", "LocalBusiness"],
      "@id": organisationId,
      name: siteConfig.legalName,
      alternateName: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/Excel/excelxlogo.png`,
      image: `${siteConfig.url}${siteConfig.ogImage}`,
      description: siteConfig.description,
      slogan: siteConfig.tagline,
      telephone: siteConfig.phoneE164,
      email: siteConfig.email,
      foundingDate: siteConfig.foundingDate,
      vatID: `GB${siteConfig.vatNumber}`,
      identifier: { "@type": "PropertyValue", propertyID: "Companies House", value: siteConfig.companyNumber },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Kemp House, 124 City Road",
        addressLocality: "London",
        postalCode: "EC1V 2NX",
        addressCountry: "GB",
      },
      location: [
        {
          "@type": "Place",
          name: "Excel Fire Sawbridgeworth office",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Unit G207, Weston House, Allen House Business Centre, The Maltings",
            addressLocality: "Sawbridgeworth",
            postalCode: "CM21 9FP",
            addressCountry: "GB",
          },
        },
      ],
      areaServed: siteConfig.areasServed.map((name) => ({ "@type": "Place", name })),
      knowsAbout: [
        "Passive fire protection",
        "Fire stopping",
        "Compartmentation",
        "Fire door installation",
        "Fire door inspection",
        "Fire door maintenance",
        "Flat entrance doors",
        "Cavity barriers",
        "Fire Safety (England) Regulations 2022",
        "BS 8214",
      ],
      hasCredential: accreditations
        .filter((item) => item.logo)
        .map((item) => ({ "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: item.name })),
      subOrganization: {
        "@type": "Electrician",
        name: siteConfig.electrics.name,
        url: siteConfig.electrics.url,
        telephone: siteConfig.electrics.phone,
      },
      hasMap: siteConfig.social.googleBusiness,
      sameAs: [siteConfig.social.facebook, siteConfig.social.linkedin, siteConfig.social.googleBusiness, siteConfig.electrics.url],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      inLanguage: "en-GB",
      publisher: { "@id": organisationId },
    },
  ],
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
      className={`${geistSans.variable} ${geistMono.variable} ${barlowCondensed.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col overflow-x-clip bg-background text-foreground transition-colors duration-300">
        <a
          href="#main"
          className="sr-only z-[200] rounded-md bg-brand-accent px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <JsonLd data={organisationJsonLd} />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {isComingSoon ? (
            <ComingSoonScreen />
          ) : (
            <>
              <MobileNavbar />
              <DesktopNavbar />
              <main id="main" className="flex-1">{children}</main>
              <SiteFooter />
              <CookieBanner />
            </>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
