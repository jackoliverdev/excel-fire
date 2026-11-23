import type { Metadata } from "next";
import Link from "next/link";
import { primaryButtonClass, outlineButtonClass } from "@/components/Ui/buttons";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="pt-24 pb-24 md:pt-32 md:pb-32">
      <div className="mx-auto w-full max-w-7xl px-6 text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="text-foreground mt-2 text-3xl font-semibold tracking-tight md:text-5xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-[52ch] text-base leading-8 text-[var(--text-muted)]">
          The page you are looking for does not exist or may have moved. Head back to the homepage
          or browse our services and case studies.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/" className={primaryButtonClass}>
            Back to home
          </Link>
          <Link href="/services" className={outlineButtonClass}>
            View services
          </Link>
          <Link href="/projects" className={outlineButtonClass}>
            View projects
          </Link>
        </div>
      </div>
    </section>
  );
}
