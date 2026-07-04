import Link from "next/link";
import Image from "next/image";
import { LogoVideo } from "@/components/Brand/LogoVideo";
import { siteConfig } from "@/lib/site";

const serviceLinks = [
  { label: "Passive Fire Protection", href: "/services/passive-fire-protection" },
  { label: "Fire Door Installation", href: "/services/fire-door-installation" },
  { label: "Fire Door Inspections", href: "/services/fire-door-inspections" },
  { label: "Fire Stopping Inspections", href: "/services/fire-stopping-inspections" },
  { label: "Injectaclad", href: "/services/injectaclad" },
  { label: "All Services", href: "/services" },
];

const companyLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Sectors", href: "/sectors" },
  { label: "Projects & Clients", href: "/projects" },
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
    <footer className="border-t border-white/10 bg-[#05070b] text-slate-200">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="space-y-5">
            <Link href="/" aria-label="Excel Fire home" className="inline-block">
              <span className="block h-12 w-[180px] overflow-hidden">
                <LogoVideo className="h-full w-full scale-[1.05] object-cover object-center" />
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-slate-400">
              Passive fire protection and fire door specialists delivering accredited, compliant
              works across London, the South East and England.
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
                    {link.label}
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
                    {link.label}
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
                    {link.label}
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
            <p>© {new Date().getFullYear()} Excel Fire Ltd. All rights reserved.</p>
            <p>
              Registered in England and Wales No. {siteConfig.companyNumber} | VAT No. {siteConfig.vatNumber}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
