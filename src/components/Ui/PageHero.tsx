import Image from "next/image";
import Link from "next/link";
import { primaryButtonClass, heroSecondaryButtonClass } from "@/components/Ui/buttons";
import { Breadcrumbs } from "@/components/Ui/Breadcrumbs";
import type { Crumb } from "@/lib/seo";
import { tidy } from "@/lib/text";

type HeroAction = {
  label: string;
  href: string;
};

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  /** Optional second headline line, shown in brand orange on its own line (the Excel Electrics split-heading pattern). */
  titleAccent?: string;
  description: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  primaryAction?: HeroAction | null;
  secondaryAction?: HeroAction;
  /** Trail after "Home". The last item is the current page. */
  breadcrumbs?: Crumb[];
  /** "image": full-bleed photo (needs a wide, high-res image). "split": dark panel with a framed photo, for portrait job photos. */
  layout?: "image" | "split";
};

/**
 * Shared interior-page hero matching the signed-off homepage treatment:
 * full-bleed image, layered dark gradient, left-aligned content column.
 */
export function PageHero({
  eyebrow = "Passive fire protection specialists",
  title,
  titleAccent,
  description,
  image = "/Excel/london.jpg",
  imageAlt = "London skyline representing Excel Fire's project delivery",
  imagePosition = "object-center",
  primaryAction = { label: "Book an assessment", href: "/contact-us" },
  secondaryAction,
  breadcrumbs,
  layout = "image",
}: PageHeroProps) {
  const actions =
    primaryAction || secondaryAction ? (
      <div className="grid gap-3 pt-2 sm:flex sm:flex-wrap sm:items-center">
        {primaryAction ? (
          <Link href={primaryAction.href} className={primaryButtonClass}>
            {tidy(primaryAction.label)}
          </Link>
        ) : null}
        {secondaryAction ? (
          <Link href={secondaryAction.href} className={heroSecondaryButtonClass}>
            {tidy(secondaryAction.label)}
          </Link>
        ) : null}
      </div>
    ) : null;

  const heading = titleAccent ? (
    <>
      <span className="block">{title}</span>{" "}
      <span className="block text-brand-accent">{titleAccent}</span>
    </>
  ) : (
    // Big headings rely on CSS text-wrap: balance; gluing words here could overflow narrow screens.
    title
  );

  if (layout === "split") {
    return (
      <section className="relative overflow-hidden bg-[#0b0f14] text-white">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-brand-accent/10 blur-3xl" aria-hidden />
        <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-6 pb-12 pt-8 md:pb-16 md:pt-10 lg:grid-cols-12 lg:items-center lg:gap-12 lg:pb-20">
          <div className="lg:col-span-7">
            {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
            <p className="eyebrow mt-10 text-slate-300 lg:mt-14">{eyebrow}</p>
            <h1 className="heading-1 mt-4 max-w-[18ch]">{heading}</h1>
            <p className="lead mt-5 max-w-xl text-slate-300">{tidy(description, 28)}</p>
            <div className="mt-8">{actions}</div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-black sm:aspect-[16/10] lg:aspect-[4/5]">
              <Image src={image} alt={imageAlt} fill preload sizes="(min-width: 1024px) 40vw, 100vw" className={`object-cover ${imagePosition}`} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative isolate min-h-[46vh] overflow-hidden bg-black md:min-h-[52vh]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        preload
        sizes="100vw"
        className={`object-cover ${imagePosition}`}
      />

      <div className="absolute inset-0 bg-slate-950/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/15" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />

      <div className="relative mx-auto flex min-h-[46vh] w-full max-w-7xl flex-col justify-end px-6 pb-12 pt-8 md:min-h-[52vh] md:pb-16 md:pt-10">
        {breadcrumbs ? (
          <div className="mb-10 md:mb-12">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        ) : null}

        <div className="max-w-2xl space-y-5">
          <p className="eyebrow text-slate-200">{eyebrow}</p>

          <h1 className="heading-1 text-white">{heading}</h1>

          <p className="lead max-w-xl text-slate-200">{tidy(description, 28)}</p>

          {actions}
        </div>
      </div>
    </section>
  );
}
