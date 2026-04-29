import Link from "next/link";

const primaryButtonClass =
  "inline-flex items-center justify-center rounded-md bg-brand-accent px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90";

const secondaryButtonClass =
  "inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white hover:bg-white hover:text-slate-900";

export function HomeHero() {
  return (
    <section className="relative isolate min-h-[70vh] overflow-hidden bg-black md:min-h-[76vh]">
      <video
        src="/Excel/LondonHeroVideo.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover object-center"
        aria-label="London skyline background video"
      />

      <div className="absolute inset-0 bg-slate-950/42" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/62 via-black/45 to-black/18" />

      <div className="relative mx-auto flex min-h-[70vh] w-full max-w-7xl items-end px-6 pb-14 pt-16 md:min-h-[76vh] md:items-center md:pb-16">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
            Fire safety delivered with clarity, care and proven expertise.
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-slate-200 md:text-lg">
            Excel Fire supports housing, commercial and public sector projects with compliant fire
            door and passive fire protection services across London and the South East.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
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
