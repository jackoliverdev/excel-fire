import Link from "next/link";
import { BackgroundVideo } from "@/components/Brand/BackgroundVideo";

const primaryButtonClass =
  "inline-flex items-center justify-center rounded-md bg-brand-accent px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90";

const secondaryButtonClass =
  "inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white hover:bg-white hover:text-slate-900";

export function HomeHero() {
  return (
    <section className="relative isolate min-h-[70vh] overflow-hidden bg-black md:min-h-[76vh]">
      <BackgroundVideo src="/Excel/LondonHeroVideo.mp4" poster="/Excel/london-hero-poster.webp" />

      <div className="absolute inset-0 bg-slate-950/42" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/62 via-black/45 to-black/18" />

      <div className="relative mx-auto flex min-h-[70vh] w-full max-w-7xl items-end px-6 pb-14 pt-16 md:min-h-[76vh] md:items-center md:pb-16">
        <div className="max-w-3xl space-y-6">
          <p className="eyebrow text-slate-200">Passive fire protection &amp; fire doors</p>
          <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-white md:text-6xl">
            <span className="block">Fire doors and fire stopping,</span>{" "}
            <span className="block text-brand-accent">installed, logged and&nbsp;evidenced.</span>
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-slate-200 md:text-lg">
            Accredited works for councils, housing providers, Tier 1 contractors and live venues across London
            and England. Every door and every seal logged, so you can prove it was done right.
          </p>

          <div className="grid gap-3 pt-1 sm:flex sm:flex-wrap sm:items-center">
            <Link href="/contact-us" className={primaryButtonClass}>
              Book an assessment
            </Link>
            <Link href="/services" className={secondaryButtonClass}>
              View services
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
