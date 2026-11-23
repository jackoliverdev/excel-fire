import Link from "next/link";
import { inlineLinkClass } from "@/components/Ui/buttons";
import { tidy } from "@/lib/text";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  action?: { label: string; href: string };
  /** Renders the title as an h1 for page-level headings without a hero. */
  as?: "h1" | "h2";
  /** Centred header (used above full-width row lists, as on the Excel Electrics services page). */
  align?: "left" | "center";
};

/**
 * Standard section header matching the homepage hierarchy:
 * eyebrow label, heading, optional supporting copy and action link.
 */
export function SectionHeading({ eyebrow, title, description, action, as = "h2", align = "left" }: SectionHeadingProps) {
  const HeadingTag = as;
  const headingClass =
    as === "h1"
      ? "heading-1 mt-3 text-foreground"
      : "heading-2 mt-3";

  if (align === "center") {
    return (
      <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
        <p className="eyebrow justify-center">{eyebrow}</p>
        <HeadingTag className={headingClass}>{tidy(title, 18)}</HeadingTag>
        {description ? (
          <p className="mx-auto mt-4 max-w-[62ch] text-base leading-7 text-[var(--text-muted)]">{tidy(description, 28)}</p>
        ) : null}
        {action ? (
          <Link href={action.href} className={`mt-5 ${inlineLinkClass}`}>
            {tidy(action.label)}
          </Link>
        ) : null}
      </div>
    );
  }

  return (
    <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between md:gap-6">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <HeadingTag className={headingClass}>{tidy(title, 18)}</HeadingTag>
        {description ? (
          <p className="mt-4 max-w-[62ch] text-base leading-7 text-[var(--text-muted)]">
            {tidy(description, 28)}
          </p>
        ) : null}
      </div>
      {action ? (
        <Link href={action.href} className={`shrink-0 ${inlineLinkClass}`}>
          {tidy(action.label)}
        </Link>
      ) : null}
    </div>
  );
}
