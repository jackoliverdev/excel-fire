import Image from "next/image";
import Link from "next/link";
import { primaryButtonClass, heroSecondaryButtonClass } from "@/components/Ui/buttons";

type HeroAction = {
  label: string;
  href: string;
};

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;
};

/**
 * Shared interior-page hero matching the signed-off homepage treatment:
 * full-bleed image, layered dark gradient, left-aligned content column.
 */
export function PageHero({
  eyebrow = "Passive fire protection specialists",
  title,
  description,
  image = "/Excel/london.jpg",
  imageAlt = "London skyline representing Excel Fire's project delivery",
  primaryAction = { label: "Book an assessment", href: "/contact-us" },
  secondaryAction,
}: PageHeroProps) {
  return (
    <section className="relative isolate min-h-[42vh] overflow-hidden bg-black md:min-h-[48vh]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-slate-950/42" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/62 via-black/45 to-black/18" />

      <div className="relative mx-auto flex min-h-[42vh] w-full max-w-7xl items-end px-6 pb-12 pt-16 md:min-h-[48vh] md:items-center md:pb-14">
        <div className="max-w-2xl space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-200">
            {eyebrow}
          </p>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
            {title}
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-slate-200 md:text-lg">
            {description}
          </p>

          {(primaryAction || secondaryAction) && (
            <div className="flex flex-wrap items-center gap-3 pt-1">
              {primaryAction ? (
                <Link href={primaryAction.href} className={primaryButtonClass}>
                  {primaryAction.label}
                </Link>
              ) : null}
              {secondaryAction ? (
                <Link href={secondaryAction.href} className={heroSecondaryButtonClass}>
                  {secondaryAction.label}
                </Link>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
