import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { primaryButtonClass } from "@/components/Ui/buttons";

type CtaStripProps = {
  title?: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
};

/**
 * Compact contact band for interior pages. Deliberately lighter than the
 * homepage van CTA so each page keeps its own character.
 */
export function CtaStrip({
  title = "Ready to talk through your project?",
  description = "Speak to an accredited specialist about surveys, installation or remediation — no obligation, practical advice from the first call.",
  actionLabel = "Book an assessment",
  actionHref = "/contact-us",
}: CtaStripProps) {
  return (
    <section className="pt-10 pb-10 md:pt-12 md:pb-12">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col gap-6 rounded-2xl bg-[#0b0f14] px-6 py-8 text-white md:flex-row md:items-center md:justify-between md:px-10 md:py-9">
          <div className="max-w-xl">
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">{title}</h2>
            <p className="mt-2 text-sm leading-7 text-slate-300 md:text-base">{description}</p>
          </div>

          <div className="flex flex-wrap items-center gap-4 md:shrink-0">
            <a
              href={siteConfig.phoneHref}
              className="text-lg font-semibold text-white transition hover:text-brand-accent"
            >
              {siteConfig.phone}
            </a>
            <Link href={actionHref} className={primaryButtonClass}>
              {actionLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
