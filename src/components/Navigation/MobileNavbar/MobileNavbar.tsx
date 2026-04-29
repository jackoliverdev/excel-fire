"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ThemeToggleButton } from "@/components/Theme/ThemeToggleButton";
import { LogoVideo } from "@/components/Brand/LogoVideo";

type MobileDropdownItem = {
  label: string;
  href: string;
};

const aboutItems: MobileDropdownItem[] = [
  { label: "Our Mission", href: "/about-us" },
  { label: "Fire Regulations", href: "/legal" },
  { label: "Vacancies", href: "/contact-us" },
  { label: "Legal - Privacy", href: "/legal" },
  { label: "Legal - Cookies", href: "/legal" },
];

const serviceItems: MobileDropdownItem[] = [
  { label: "Excel Fire Services", href: "/services" },
  { label: "Passive Fire Protection", href: "/services" },
  { label: "Fire Door Installation", href: "/services" },
  { label: "Fire Door Maintenance", href: "/services" },
  { label: "Fire Door Inspections", href: "/services" },
  { label: "Fire Stopping Inspections", href: "/services" },
  { label: "Injectaclad", href: "/services" },
  { label: "Active Fire Systems", href: "/services" },
  { label: "FAQs", href: "/contact-us" },
];

export function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<"about" | "services" | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setOpenDropdown(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleCloseMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="sticky top-0 z-[120] border-b border-white/10 bg-black lg:hidden">
      <div className="mx-auto flex h-24 w-full max-w-7xl items-center justify-between px-6">
        <Link href="/" aria-label="Excel Fire home" className="shrink-0" onClick={handleCloseMenu}>
          <span className="block h-14 w-[220px] overflow-hidden">
            <LogoVideo className="h-full w-full translate-x-[2px] scale-[1.08] object-cover object-center" />
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <ThemeToggleButton />
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-panel"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/20 text-slate-200 transition hover:border-brand-accent hover:text-brand-accent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              {isOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen ? (
        <>
          <button
            type="button"
            aria-label="Close mobile menu backdrop"
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 top-24 z-[110] bg-slate-950/60"
          />
          <div
            id="mobile-nav-panel"
            className="fixed inset-x-0 top-24 z-[120] border-t border-white/10 bg-black shadow-[0_22px_50px_-30px_rgba(2,6,23,0.85)]"
          >
            <nav aria-label="Mobile navigation" className="mx-auto flex w-full max-w-7xl flex-col px-6 py-4">
              <button
                type="button"
                onClick={() => setOpenDropdown((prev) => (prev === "about" ? null : "about"))}
                className="inline-flex items-center justify-between rounded-md px-3 py-3 text-left text-sm font-semibold text-slate-200 transition hover:bg-white/5 hover:text-brand-accent"
              >
                About
                <span className="text-slate-400">{openDropdown === "about" ? "−" : "+"}</span>
              </button>
              {openDropdown === "about" ? (
                <div className="mb-1 ml-3 flex flex-col border-l border-white/10 pl-3">
                  {aboutItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={handleCloseMenu}
                      className="rounded-md px-2 py-2 text-xs font-medium text-slate-300 transition hover:text-brand-accent"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ) : null}

              <button
                type="button"
                onClick={() => setOpenDropdown((prev) => (prev === "services" ? null : "services"))}
                className="inline-flex items-center justify-between rounded-md px-3 py-3 text-left text-sm font-semibold text-slate-200 transition hover:bg-white/5 hover:text-brand-accent"
              >
                Services
                <span className="text-slate-400">{openDropdown === "services" ? "−" : "+"}</span>
              </button>
              {openDropdown === "services" ? (
                <div className="mb-1 ml-3 flex flex-col border-l border-white/10 pl-3">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={handleCloseMenu}
                      className="rounded-md px-2 py-2 text-xs font-medium text-slate-300 transition hover:text-brand-accent"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ) : null}

              <Link
                href="/clients"
                onClick={handleCloseMenu}
                className="rounded-md px-3 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/5 hover:text-brand-accent"
              >
                Clients
              </Link>
              <Link
                href="/articles"
                onClick={handleCloseMenu}
                className="rounded-md px-3 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/5 hover:text-brand-accent"
              >
                Articles
              </Link>
              <Link
                href="/contact-us"
                onClick={handleCloseMenu}
                className="mt-2 inline-flex items-center justify-center rounded-md bg-brand-accent px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Contact
              </Link>
            </nav>
          </div>
        </>
      ) : null}
    </header>
  );
}
