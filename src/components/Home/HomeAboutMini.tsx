import Image from "next/image";
import Link from "next/link";

export function HomeAboutMini() {
  return (
    <section className="section-y">
      <div className="mx-auto w-full max-w-7xl px-6">
        <article className="grid items-stretch gap-4 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-nav-panel)] md:grid-cols-[1.05fr_1fr]">
          <div className="relative min-h-[220px] md:min-h-[280px]">
            <Image
              src="/images/brand/van-street.webp"
              alt="Excel Fire branded van on a London street"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center p-5 md:p-7">
            <p className="eyebrow">About Excel Fire</p>
            <h2 className="heading-2 mt-3">
              A fire safety contractor that turns up, logs everything and hands over properly
            </h2>
            <p className="mt-3 max-w-[52ch] text-sm leading-7 text-[var(--text-muted)] md:text-base">
              Since 2019 we have installed, inspected and maintained fire doors and fire stopping for councils, housing
              providers, Tier 1 contractors and some of London&apos;s best-known venues. Every door and every seal is
              recorded on our installation log, so you get proof of what was done, where, and to which standard.
            </p>

            <Link
              href="/about-us"
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

