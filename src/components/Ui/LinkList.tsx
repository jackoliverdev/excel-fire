import Link from "next/link";
import { tidy } from "@/lib/text";

type LinkItem = { label: string; href: string; description?: string; external?: boolean };

/** Ruled rows of links with an arrow that nudges on hover. Used for related services, sectors and pages. */
export function LinkList({ items, columns = 1 }: { items: LinkItem[]; columns?: 1 | 2 | 3 }) {
  const grid = columns === 3 ? "md:grid-cols-2 lg:grid-cols-3" : columns === 2 ? "md:grid-cols-2" : "";

  return (
    <ul className={`grid gap-x-10 border-t border-[var(--border)] ${grid}`}>
      {items.map((item) => {
        const content = (
          <>
            <span className="min-w-0">
              <span className="block text-base font-semibold text-foreground transition group-hover:text-brand-accent">
                {tidy(item.label)}
              </span>
              {item.description ? (
                <span className="mt-1 block text-sm leading-6 text-[var(--text-muted)]">{tidy(item.description)}</span>
              ) : null}
            </span>
            <span aria-hidden className="shrink-0 text-lg text-brand-accent transition group-hover:translate-x-1">
              {item.external ? "↗" : "→"}
            </span>
          </>
        );
        const className = "group flex items-center justify-between gap-6 py-5";

        return (
          <li key={item.href + item.label} className="border-b border-[var(--border)]">
            {item.external ? (
              <a href={item.href} target="_blank" rel="noopener" className={className}>
                {content}
              </a>
            ) : (
              <Link href={item.href} className={className}>
                {content}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}
