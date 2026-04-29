import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { DesktopNavbar } from "@/components/Navigation/DesktopNavbar/DesktopNavbar";
import { MobileNavbar } from "@/components/Navigation/MobileNavbar/MobileNavbar";
import { ComingSoonScreen } from "@/components/ComingSoon/ComingSoonScreen";
import { ThemeProvider } from "@/components/Theme/ThemeProvider";
import { SiteFooter } from "@/components/Footer/SiteFooter";
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
  title: "Excel Fire",
  description: "Excel Fire Ltd - passive fire protection specialists and fire door experts.",
  icons: {
    icon: "/Excel/excelxlogo.ico",
    shortcut: "/Excel/excelxlogo.ico",
    apple: "/Excel/excelxlogo.ico",
  },
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
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {isComingSoon ? (
            <ComingSoonScreen />
          ) : (
            <>
              <MobileNavbar />
              <DesktopNavbar />
              <main className="flex-1">{children}</main>
              <SiteFooter />
            </>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
