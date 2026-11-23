"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ThemeToggleButton } from "@/components/Theme/ThemeToggleButton";
import { LogoVideo } from "@/components/Brand/LogoVideo";
import { primaryNav } from "@/lib/navigation";

export function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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
      <div className="flex h-16 w-full items-center justify-between gap-3 px-4 sm:h-[4.5rem] sm:px-6">
        <Link href="/" aria-label="Excel Fire home" className="shrink-0" onClick={handleCloseMenu}>
          <LogoVideo className="w-[172px] sm:w-[210px]" priority media="(max-width: 1023.98px)" />
        </Link>

        <div className="flex items-center gap-2">
          <a
            href="tel:02033029558"
            aria-label="Call Excel Fire on 0203 302 9558"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-accent text-white transition hover:opacity-90"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-panel"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-slate-200 transition hover:border-brand-accent hover:text-brand-accent"
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
            className="fixed inset-0 top-16 z-[110] sm:top-[4.5rem] bg-slate-950/60"
          />
          <div
            id="mobile-nav-panel"
            className="fixed inset-x-0 top-16 z-[120] max-h-[calc(100dvh-4rem)] sm:top-[4.5rem] sm:max-h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain border-t border-white/10 bg-black shadow-[0_22px_50px_-30px_rgba(2,6,23,0.85)]"
          >
            <nav aria-label="Mobile navigation" className="flex w-full flex-col px-4 py-4 sm:px-6">
              {primaryNav.map((menu) =>
                menu.items ? (
                  <div key={menu.label}>
                    <button
                      type="button"
                      aria-expanded={openDropdown === menu.label}
                      onClick={() => setOpenDropdown((prev) => (prev === menu.label ? null : menu.label))}
                      className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-sm font-semibold text-slate-200 transition hover:bg-white/5 hover:text-brand-accent"
                    >
                      {menu.label}
                      <span className="text-slate-400" aria-hidden>
                        {openDropdown === menu.label ? "−" : "+"}
                      </span>
                    </button>
                    {openDropdown === menu.label ? (
                      <div className="mb-1 ml-3 flex flex-col border-l border-white/10 pl-3">
                        {menu.items.map((item) => (
                          <Link
                            key={item.href + item.label}
                            href={item.href}
                            onClick={handleCloseMenu}
                            className="rounded-md px-2 py-2 transition hover:text-brand-accent"
                          >
                            <span className="block truncate text-[13px] font-semibold text-slate-200">{item.label}</span>
                            <span className="block truncate text-xs text-slate-400">{item.blurb}</span>
                          </Link>
                        ))}
                        {menu.viewAll ? (
                          <Link
                            href={menu.viewAll.href}
                            onClick={handleCloseMenu}
                            className="rounded-md px-2 py-2 text-[13px] font-semibold text-brand-accent"
                          >
                            {menu.viewAll.label}
                          </Link>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <Link
                    key={menu.label}
                    href={menu.href}
                    onClick={handleCloseMenu}
                    className="rounded-md px-3 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/5 hover:text-brand-accent"
                  >
                    {menu.label}
                  </Link>
                ),
              )}
              <a
                href="tel:02033029558"
                className="rounded-md px-3 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/5 hover:text-brand-accent"
              >
                Call 0203 302 9558
              </a>
              <Link
                href="/contact-us"
                onClick={handleCloseMenu}
                className="mt-2 inline-flex items-center justify-center rounded-md bg-brand-accent px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Contact
              </Link>
              <div className="mt-4 flex items-center justify-between border-t border-white/10 px-3 pt-4">
                <span className="text-xs font-medium text-slate-400">Appearance</span>
                <ThemeToggleButton className="h-10 w-10" />
              </div>
            </nav>
          </div>
        </>
      ) : null}
    </header>
  );
}
