import Image from "next/image";
import Link from "next/link";

export function HomeAboutMini() {
  return (
    <section className="pt-10 pb-10 md:pt-12 md:pb-12">
      <div className="mx-auto w-full max-w-7xl px-6">
        <article className="grid items-stretch gap-4 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-nav-panel)] md:grid-cols-[1.05fr_1fr]">
          <div className="relative min-h-[220px] md:min-h-[280px]">
            <Image
              src="/Excel/london.jpg"
              alt="London skyline representing Excel Fire's UK project delivery"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              priority={false}
            />
          </div>

          <div className="flex flex-col justify-center p-5 md:p-7">
            <p className="text-muted text-xs font-medium uppercase tracking-[0.16em]">About Excel Fire</p>
            <h2 className="text-foreground mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
              Fire safety delivery built on quality, pace and trust
            </h2>
            <p className="mt-3 max-w-[52ch] text-sm leading-7 text-[var(--text-muted)] md:text-base">
              Excel Fire supports principal contractors, housing providers and asset teams with compliant, well-managed
              fire safety works across England. Our teams deliver active fire systems, fire doors, fire stopping and
              specialist remedial packages with a practical, site-first approach. We focus on clear communication, clean
              execution and consistent handover quality from survey through to completion.
            </p>

            <Link
              href="/about"
              className="mt-5 inline-flex w-fit text-sm font-semibold text-brand-accent transition hover:opacity-80"
            >
              Learn more about us
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}

