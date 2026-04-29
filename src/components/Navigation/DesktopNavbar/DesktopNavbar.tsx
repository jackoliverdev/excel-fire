import Link from "next/link";
import { ThemeToggleButton } from "@/components/Theme/ThemeToggleButton";
import { LogoVideo } from "@/components/Brand/LogoVideo";

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
    label: "About",
    href: "/about-us",
    dropdown: [
      { label: "Our Mission", description: "Who we are and how we work.", href: "/about-us" },
      { label: "Fire Regulations", description: "Key compliance and safety guidance.", href: "/legal" },
      { label: "Vacancies", description: "Current opportunities at Excel Fire.", href: "/contact-us" },
      { label: "Legal - Privacy", description: "How we handle your data.", href: "/legal" },
      { label: "Legal - Cookies", description: "Cookie and tracking policy.", href: "/legal" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "Excel Fire Services", description: "Overview of all service lines.", href: "/services" },
      { label: "Passive Fire Protection", description: "Certified installation and remediation.", href: "/services" },
      { label: "Fire Door Installation", description: "Supply, install and compliance checks.", href: "/services" },
      { label: "Fire Door Maintenance", description: "Planned and reactive maintenance.", href: "/services" },
      { label: "Fire Door Inspections", description: "Evidence-led reporting and actions.", href: "/services" },
      { label: "Fire Stopping Inspections", description: "Compartmentation assurance checks.", href: "/services" },
      { label: "Injectaclad", description: "Cavity barrier repair system.", href: "/services" },
      { label: "Active Fire Systems", description: "Detection and alarm system support.", href: "/services" },
      { label: "FAQs", description: "Answers to common client queries.", href: "/contact-us" },
    ],
  },
  { label: "Clients", href: "/clients" },
  { label: "Articles", href: "/articles" },
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
              <div key={item.label} className="group relative">
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

                <div className="pointer-events-none absolute left-1/2 top-full z-[80] mt-4 w-[680px] -translate-x-1/2 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
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
