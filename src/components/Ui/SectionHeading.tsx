import Link from "next/link";
import { inlineLinkClass } from "@/components/Ui/buttons";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  action?: { label: string; href: string };
  /** Renders the title as an h1 for page-level headings without a hero. */
  as?: "h1" | "h2";
};

/**
 * Standard section header matching the homepage hierarchy:
 * eyebrow label, heading, optional supporting copy and action link.
 */
export function SectionHeading({ eyebrow, title, description, action, as = "h2" }: SectionHeadingProps) {
  const HeadingTag = as;
  const headingClass =
    as === "h1"
      ? "text-foreground mt-2 text-3xl font-semibold tracking-tight md:text-4xl"
      : "text-foreground mt-2 text-2xl font-semibold tracking-tight md:text-3xl";

  return (
    <div className="mb-6 flex items-end justify-between gap-4 md:mb-8">
      <div>
        <p className="text-muted text-xs font-medium uppercase tracking-[0.16em]">{eyebrow}</p>
        <HeadingTag className={headingClass}>{title}</HeadingTag>
        {description ? (
          <p className="mt-3 max-w-[68ch] text-sm leading-7 text-[var(--text-muted)] md:text-base">
            {description}
          </p>
        ) : null}
      </div>
      {action ? (
        <Link href={action.href} className={`hidden md:inline-flex ${inlineLinkClass}`}>
          {action.label}
        </Link>
      ) : null}
    </div>
  );
}
