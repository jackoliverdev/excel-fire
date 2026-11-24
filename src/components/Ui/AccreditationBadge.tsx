import Image from "next/image";
import Link from "next/link";
import type { Accreditation } from "@/lib/accreditations";
import { tidy } from "@/lib/text";

/** One accreditation shown inline: logo on a white tile, a short line of what it covers, and a link to the full list. */
export function AccreditationBadge({ item, text, className = "" }: { item: Accreditation; text: string; className?: string }) {
  return (
    <div className={`flex items-center gap-4 rounded-lg border border-[var(--border)] p-3 ${className}`}>
      {item.logo ? (
        <span className="relative h-14 w-28 shrink-0 overflow-hidden rounded-md bg-white">
          <Image src={item.logo} alt={`${item.short} logo`} fill sizes="112px" className="object-contain p-1.5" />
        </span>
      ) : null}
      <p className="text-sm leading-6 text-[var(--text-muted)]">
        {tidy(text)}{" "}
        <Link href="/accreditations" className="whitespace-nowrap font-semibold text-brand-accent transition hover:opacity-80">
          Our accreditations →
        </Link>
      </p>
    </div>
  );
}
