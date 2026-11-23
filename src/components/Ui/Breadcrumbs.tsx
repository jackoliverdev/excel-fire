import Link from "next/link";
import { JsonLd } from "@/components/Seo/JsonLd";
import { breadcrumbJsonLd, type Crumb } from "@/lib/seo";
import { tidy } from "@/lib/text";

type BreadcrumbsProps = {
  items: Crumb[];
  tone?: "light" | "dark";
};

/** Visible breadcrumb trail plus BreadcrumbList schema. The last item is the current page. */
export function Breadcrumbs({ items, tone = "dark" }: BreadcrumbsProps) {
  const trail: Crumb[] = [{ name: "Home", href: "/" }, ...items];
  const linkClass =
    tone === "dark" ? "text-slate-300 hover:text-white" : "text-[var(--text-muted)] hover:text-foreground";
  const currentClass = tone === "dark" ? "text-white" : "text-foreground";
  const sepClass = tone === "dark" ? "text-slate-500" : "text-[var(--border)]";

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(trail)} />
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium">
          {trail.map((crumb, index) => {
            const isLast = index === trail.length - 1;
            return (
              <li key={`${crumb.name}-${index}`} className="flex items-center gap-2">
                {isLast || !crumb.href ? (
                  <span aria-current={isLast ? "page" : undefined} className={currentClass}>
                    {tidy(crumb.name, 18)}
                  </span>
                ) : (
                  <Link href={crumb.href} className={`transition ${linkClass}`}>
                    {tidy(crumb.name, 18)}
                  </Link>
                )}
                {!isLast ? (
                  <span aria-hidden className={sepClass}>
                    /
                  </span>
                ) : null}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
