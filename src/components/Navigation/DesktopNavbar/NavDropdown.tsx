"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { NavMenu } from "@/lib/navigation";

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

/**
 * Single-column dropdown in the Excel Electrics style: optional thumbnail, one-line title, one-line blurb,
 * and a "View all" link at the foot. Opens on hover, on click of the chevron, and closes on Escape or outside click.
 */
export function NavDropdown({ menu }: { menu: NavMenu }) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const items = menu.items ?? [];
  const hasImages = items.some((item) => item.image);

  return (
    <div
      ref={wrapRef}
      className="relative flex h-20 items-center"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false);
      }}
    >
      <Link
        href={menu.href}
        className={`rounded-md py-2 pl-3 text-sm font-semibold tracking-tight transition-colors hover:text-brand-accent ${
          open ? "text-brand-accent" : "text-slate-200"
        }`}
      >
        {menu.label}
      </Link>
      <button
        type="button"
        aria-label={`${menu.label} pages`}
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
        className={`inline-flex h-9 w-7 items-center justify-center rounded-md transition-colors hover:text-brand-accent ${
          open ? "text-brand-accent" : "text-slate-400"
        }`}
      >
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open ? (
        <div id={menuId} className="absolute left-0 top-full z-[80] w-[22.5rem] pt-1">
          <div className="overflow-hidden rounded-md border border-[var(--border)] bg-[var(--surface-nav-panel)] py-2 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.45)] dark:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.7)]">
            <ul>
              {items.map((item) => (
                <li key={item.href + item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group/item flex items-center gap-3 px-3 py-2.5 transition-colors hover:bg-brand-accent/[0.07] focus-visible:bg-brand-accent/[0.07]"
                  >
                    {hasImages ? (
                      <span className="relative h-11 w-14 shrink-0 overflow-hidden rounded-sm bg-[var(--surface-muted)]">
                        {item.image ? <Image src={item.image} alt="" fill sizes="56px" loading="eager" className="object-cover" /> : null}
                      </span>
                    ) : null}
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-semibold leading-snug text-foreground transition-colors group-hover/item:text-brand-accent">
                        {item.label}
                      </span>
                      <span className="mt-0.5 block truncate text-xs leading-snug text-[var(--text-muted)]">{item.blurb}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            {menu.viewAll ? (
              <div className="mt-1 border-t border-[var(--border)] px-3 pt-2">
                <Link
                  href={menu.viewAll.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm font-semibold text-brand-accent transition-opacity hover:opacity-80"
                >
                  {menu.viewAll.label}
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
