import Link from "next/link";
import { ThemeToggleButton } from "@/components/Theme/ThemeToggleButton";
import { LogoVideo } from "@/components/Brand/LogoVideo";
import { NavDropdown } from "@/components/Navigation/DesktopNavbar/NavDropdown";
import { siteConfig } from "@/lib/site";
import { primaryNav } from "@/lib/navigation";

export function DesktopNavbar() {
  return (
    <header className="sticky top-0 z-[70] hidden border-b border-white/10 bg-black lg:block">
      <div className="relative flex h-20 w-full items-center justify-between gap-8 px-8 xl:px-12 2xl:px-16">
        <Link href="/" aria-label="Excel Fire home" className="shrink-0">
          <LogoVideo className="w-[236px] xl:w-[260px]" priority media="(min-width: 1024px)" />
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex xl:gap-2">
          {primaryNav.map((menu) =>
            menu.items ? (
              <NavDropdown key={menu.label} menu={menu} />
            ) : (
              <Link
                key={menu.label}
                href={menu.href}
                className="rounded-md px-3 py-2 text-sm font-semibold tracking-tight text-slate-200 transition-colors hover:text-brand-accent"
              >
                {menu.label}
              </Link>
            ),
          )}

          <a
            href={siteConfig.phoneHref}
            className="ml-2 hidden px-2 text-sm font-semibold tracking-tight text-slate-200 transition-colors hover:text-brand-accent xl:inline-flex"
          >
            {siteConfig.phone}
          </a>

          <Link
            href="/contact-us"
            className="ml-2 inline-flex items-center rounded-md bg-brand-accent px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Contact
          </Link>
          <ThemeToggleButton className="ml-1" />
        </nav>
      </div>
    </header>
  );
}
