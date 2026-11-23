import Image from "next/image";
import Link from "next/link";
const primaryButtonClass =
  "inline-flex items-center justify-center rounded-md bg-brand-accent px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90";
const secondaryButtonClass =
  "inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white hover:bg-white hover:text-slate-900";

export function HomeCta() {
  return (
    <section className="section-y">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#0b0f14] via-[#111827] to-[#0b0f14] px-5 py-5 text-white shadow-lg sm:px-8 sm:py-7 md:px-10 md:py-8 lg:px-12 lg:py-8">
          <div className="pointer-events-none absolute inset-0 opacity-25 [background:radial-gradient(circle_at_15%_20%,#ea591b_0,transparent_36%),radial-gradient(circle_at_80%_85%,#ffffff_0,transparent_50%)]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[45%] bg-gradient-to-l from-black/45 to-transparent md:block" />

          <div className="relative grid items-center gap-6 sm:gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-6 xl:gap-8">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-3xl font-semibold leading-[1.08] tracking-tight sm:text-4xl md:text-5xl">
                <span className="block">Doors, fire stopping or a survey?</span>{" "}
                <span className="block text-brand-accent">Talk to the people who do the work.</span>
              </h2>

              <p className="max-w-xl text-sm leading-7 text-slate-200 sm:text-base sm:leading-8 md:text-lg">
                Tell us about the building and what you need. We reply the same or next working day with clear
                next steps, and a site visit if it helps.
              </p>

              <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
                <Link href="/contact-us" className={primaryButtonClass}>
                  Start an enquiry
                </Link>
                <a href="tel:02033029558" className={secondaryButtonClass}>
                  Call 0203 302 9558
                </a>
              </div>

              <div className="relative mx-auto h-[300px] w-full max-w-md sm:h-[380px] md:hidden">
                <Image
                  src="/Excel/van-mockup.webp"
                  alt="Excel Fire branded service van"
                  fill
                  sizes="(max-width: 768px) min(100vw - 3rem, 28rem)"
                  className="object-contain object-right scale-125"
                />
              </div>
            </div>

            <div className="relative hidden h-[420px] w-full md:block lg:h-[480px]">
              <Image
                src="/Excel/van-mockup.webp"
                alt="Excel Fire branded service van"
                fill
                sizes="(min-width: 1280px) 50vw, (min-width: 1024px) 48vw, 45vw"
                className="object-contain object-right drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
