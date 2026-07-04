import Link from "next/link";
import { ThemeToggleButton } from "@/components/Theme/ThemeToggleButton";
import { LogoVideo } from "@/components/Brand/LogoVideo";
import { siteConfig } from "@/lib/site";

type DropdownItem = {
  label: string;
  description: string;
  href: string;
};

type NavItem = {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
};

const navItems: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "All Services", description: "Overview of every service line.", href: "/services" },
      { label: "Passive Fire Protection", description: "FIRAS-accredited fire stopping.", href: "/services/passive-fire-protection" },
      { label: "Fire Door Installation", description: "Certified supply and installation.", href: "/services/fire-door-installation" },
      { label: "Fire Door Maintenance", description: "Accredited repair and upkeep.", href: "/services/fire-door-maintenance" },
      { label: "Fire Door Inspections", description: "QR-tagged, evidence-led reporting.", href: "/services/fire-door-inspections" },
      { label: "Fire Stopping Inspections", description: "Compartmentation assurance.", href: "/services/fire-stopping-inspections" },
      { label: "Validation Surveys", description: "Non-intrusive communal assessments.", href: "/services/validation-surveys" },
      { label: "Injectaclad", description: "Cavity barrier remediation.", href: "/services/injectaclad" },
      { label: "Active Fire Systems", description: "Detection and alarm support.", href: "/services/active-fire-systems" },
    ],
  },
  { label: "Sectors", href: "/sectors" },
  { label: "Projects", href: "/projects" },
  {
    label: "About",
    href: "/about-us",
    dropdown: [
      { label: "Our Story", description: "Who we are and how we work.", href: "/about-us" },
      { label: "Accreditations", description: "What our certifications mean.", href: "/accreditations" },
      { label: "Areas We Cover", description: "Where our teams operate.", href: "/areas-we-cover" },
      { label: "Fire Regulations", description: "Your legal duties, explained.", href: "/fire-regulations" },
      { label: "Insights", description: "Guidance from our specialists.", href: "/articles" },
      { label: "Contact", description: "Speak to the team.", href: "/contact-us" },
    ],
  },
];

export function DesktopNavbar() {
  return (
    <header className="sticky top-0 z-[70] hidden border-b border-white/10 bg-black lg:block">
      <div className="mx-auto flex h-24 w-full max-w-7xl items-center justify-between px-6 xl:px-8">
        <Link href="/" aria-label="Excel Fire home" className="shrink-0">
          <span className="block h-16 w-[280px] overflow-hidden">
            <LogoVideo className="h-full w-full scale-[1.05] object-cover object-center" />
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.label} className="group relative flex h-24 items-center">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 text-sm font-semibold tracking-tight text-slate-200 transition-colors hover:text-brand-accent"
                >
                  {item.label}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-3.5 w-3.5 text-slate-400 transition group-hover:text-brand-accent"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.511a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>

                <div className="pointer-events-none absolute left-1/2 top-full z-[80] w-[680px] -translate-x-1/2 pt-2 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                  <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-nav-panel)] p-4 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.55)] backdrop-blur">
                    <div className="grid gap-2.5 md:grid-cols-3">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.label}
                          href={dropdownItem.href}
                          className="rounded-lg px-3 py-2 transition hover:bg-[var(--surface-muted)]"
                        >
                          <p className="text-[13px] font-semibold text-foreground">{dropdownItem.label}</p>
                          <p className="mt-0.5 text-[11px] leading-relaxed text-[var(--text-muted)]">
                            {dropdownItem.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-semibold tracking-tight text-slate-200 transition-colors hover:text-brand-accent"
              >
                {item.label}
              </Link>
            ),
          )}

          <a
            href={siteConfig.phoneHref}
            className="hidden text-sm font-semibold tracking-tight text-slate-200 transition-colors hover:text-brand-accent xl:inline-flex"
          >
            {siteConfig.phone}
          </a>

          <Link
            href="/contact-us"
            className="inline-flex items-center rounded-md bg-brand-accent px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Contact
          </Link>
          <ThemeToggleButton />
        </nav>
      </div>
    </header>
  );
}
