import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  id?: string;
  /** Adds extra bottom padding for the final section on a page. */
  last?: boolean;
  className?: string;
};

/**
 * Standard page section with the site-wide vertical rhythm used on the
 * signed-off homepage. Keeps spacing identical across every page.
 */
export function Section({ children, id, last = false, className = "" }: SectionProps) {
  const spacing = last ? "section-y section-last" : "section-y";

  return (
    <section id={id} className={`${spacing} ${className}`.trim()}>
      <div className="reveal mx-auto w-full max-w-7xl px-6">{children}</div>
    </section>
  );
}
