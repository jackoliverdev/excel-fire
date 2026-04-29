import Link from "next/link";
import Image from "next/image";
import { LogoVideo } from "@/components/Brand/LogoVideo";

const primaryLinks = [
  { label: "Services", href: "/services" },
  { label: "Areas We Cover", href: "/areas-we-cover" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact-us" },
  { label: "Blog", href: "/articles" },
];

const legalLinks = [
  { label: "Regulations", href: "/legal" },
  { label: "Privacy Notice", href: "/legal" },
  { label: "Cookie Policy", href: "/legal" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/excelfireuk/",
    iconSrc: "/icons/2023_Facebook_icon.svg",
  },
  {
    label: "LinkedIn",
    href: "https://uk.linkedin.com/company/excelfire",
    iconSrc: "/icons/linkedin.svg",
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#05070b] text-slate-200">
      <div className="mx-auto w-full max-w-7xl px-6 py-10 md:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <Link href="/" aria-label="Excel Fire home" className="inline-block">
              <span className="block h-12 w-[180px] overflow-hidden">
                <LogoVideo className="h-full w-full scale-[1.05] object-cover object-center" />
              </span>
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-slate-300">
              Passive fire protection and fire door specialists delivering compliant, practical
              solutions across London and the South East.
            </p>
          </div>

          <div className="space-y-4 md:text-right">
            <nav
              aria-label="Footer primary links"
              className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-300 md:justify-end"
            >
              {primaryLinks.map((link, index) => (
                <div key={link.label} className="flex items-center gap-3">
                  <Link href={link.href} className="transition hover:text-brand-accent">
                    {link.label}
                  </Link>
                  {index < primaryLinks.length - 1 ? <span className="text-slate-500">|</span> : null}
                </div>
              ))}
            </nav>

            <nav
              aria-label="Footer legal links"
              className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-slate-400 md:justify-end"
            >
              {legalLinks.map((link, index) => (
                <div key={link.label} className="flex items-center gap-3">
                  <Link href={link.href} className="transition hover:text-brand-accent">
                    {link.label}
                  </Link>
                  {index < legalLinks.length - 1 ? <span className="text-slate-600">|</span> : null}
                </div>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-7 h-px w-full bg-white/10" />

        <div className="mt-5 flex flex-col gap-4 text-sm md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
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

          <div className="flex flex-col gap-1 text-slate-400 md:items-end">
            <p>
              <a href="mailto:info@excelfireltd.com" className="transition hover:text-brand-accent">
                info@excelfireltd.com
              </a>{" "}
              |{" "}
              <a href="tel:02033029558" className="transition hover:text-brand-accent">
                0203 302 9558
              </a>
            </p>
            <p className="text-xs text-slate-500">Company Number 11776179</p>
          </div>
        </div>

        <div className="mt-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Excel Fire Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
