import Link from "next/link";
import Image from "next/image";
import { LogoVideo } from "@/components/Brand/LogoVideo";
import { siteConfig, companiesHouseUrl } from "@/lib/site";
import { tidy } from "@/lib/text";

const serviceLinks = [
  { label: "Passive Fire Protection", href: "/services/passive-fire-protection" },
  { label: "Fire Door Installation", href: "/services/fire-door-installation" },
  { label: "Fire Door Inspections", href: "/services/fire-door-inspections" },
  { label: "Fire Stopping Inspections", href: "/services/fire-stopping-inspections" },
  { label: "Injectaclad", href: "/services/injectaclad" },
  { label: "Active Fire Systems", href: "/services/active-fire-systems" },
  { label: "All Services", href: "/services" },
];

const companyLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Projects & Case Studies", href: "/projects" },
  { label: "Sectors", href: "/sectors" },
  { label: "Excel Electrics", href: "/excel-electrics" },
  { label: "Accreditations", href: "/accreditations" },
  { label: "Areas We Cover", href: "/areas-we-cover" },
  { label: "Insights", href: "/articles" },
];

const legalLinks = [
  { label: "Fire Regulations", href: "/fire-regulations" },
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
  { label: "Cookie Policy", href: "/legal/cookie-policy" },
  { label: "Terms & Conditions", href: "/legal/terms-and-conditions" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: siteConfig.social.facebook,
    iconSrc: "/icons/2023_Facebook_icon.svg",
  },
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    iconSrc: "/icons/linkedin.svg",
  },
];

const footerLinkClass = "text-sm text-slate-400 transition hover:text-brand-accent";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black text-slate-200">
      <div className="w-full px-6 py-12 md:px-8 md:py-16 xl:px-12 2xl:px-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="space-y-5">
            <Link href="/" aria-label="Excel Fire home" className="inline-block">
              <LogoVideo className="w-[200px] bg-transparent" animate={false} />
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-slate-400">
              Passive fire protection and fire door specialists delivering accredited, compliant
              works across London, the South East and England. Electrical works by our sister
              division, Excel Electrics.
            </p>

            <div className="space-y-1 text-sm">
              <a href={siteConfig.phoneHref} className="block font-semibold text-white transition hover:text-brand-accent">
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="block text-slate-400 transition hover:text-brand-accent">
                {siteConfig.email}
              </a>
            </div>

            <div className="flex items-center gap-2 pt-1">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/25 bg-white/95 text-slate-900 transition hover:border-brand-accent"
                >
                  <Image src={social.iconSrc} alt="" width={14} height={14} className="h-[14px] w-[14px] object-contain" />
                </Link>
              ))}
            </div>
          </div>

          <nav aria-label="Footer services">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Services</h2>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={footerLinkClass}>
                    {tidy(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer company">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Company</h2>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={footerLinkClass}>
                    {tidy(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer legal and compliance">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Compliance</h2>
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={footerLinkClass}>
                    {tidy(link.label)}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-2 text-xs leading-5 text-slate-500">
              <p>London: {siteConfig.offices.london}</p>
              <p>Birmingham: {siteConfig.offices.birmingham}</p>
            </div>
          </nav>
        </div>

        <div className="mt-10 border-t border-white/10 pt-5">
          <div className="flex flex-col gap-1.5 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} Excel Fire Ltd. All rights reserved. Registered in England and Wales No.{" "}
              <a href={companiesHouseUrl} target="_blank" rel="noopener" className="transition hover:text-brand-accent">
                {siteConfig.companyNumber}
              </a>{" "}
              | VAT No. {siteConfig.vatNumber}
            </p>
            <p>
              Website by{" "}
              <a href={siteConfig.developer.url} target="_blank" rel="noopener" className="text-slate-400 transition hover:text-brand-accent">
                {tidy(siteConfig.developer.name, 18)}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
