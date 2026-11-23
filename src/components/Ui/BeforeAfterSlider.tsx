"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProjectImage } from "@/lib/projects";

type BeforeAfterSliderProps = {
  before: ProjectImage;
  after: ProjectImage;
  /** Tailwind aspect class for the frame, e.g. "aspect-[4/5]". */
  aspect?: string;
  sizes?: string;
};

/**
 * Drag, tap or use the arrow keys to compare a before and after photo.
 * Both images are always in the DOM, so they stay crawlable and work without JS.
 */
export function BeforeAfterSlider({
  before,
  after,
  aspect = "aspect-[4/5]",
  sizes = "(min-width: 1024px) 40vw, 100vw",
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);

  return (
    <div
      className={`group relative w-full touch-pan-y select-none overflow-hidden rounded-xl bg-black ${aspect}`}
    >
      <Image src={after.src} alt={after.alt} fill sizes={sizes} className="object-cover" draggable={false} />

      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <Image src={before.src} alt={before.alt} fill sizes={sizes} className="object-cover" draggable={false} />
      </div>

      <span className="pointer-events-none absolute left-2 top-2 rounded bg-black/75 px-1.5 py-0.5 text-[9px] sm:left-3 sm:top-3 sm:px-2 sm:py-1 sm:text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
        Before
      </span>
      <span className="pointer-events-none absolute right-2 top-2 rounded bg-brand-accent px-1.5 py-0.5 text-[9px] sm:right-3 sm:top-3 sm:px-2 sm:py-1 sm:text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
        After
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.15)]"
        style={{ left: `${position}%` }}
      />

      <input
        type="range"
        min={0}
        max={100}
        value={Math.round(position)}
        onChange={(event) => setPosition(Number(event.target.value))}
        aria-label="Compare before and after"
        className="before-after-range touch-pan-y absolute inset-x-0 bottom-0 top-0 h-full w-full cursor-ew-resize opacity-0"
      />

      <span
        aria-hidden
        className="pointer-events-none absolute top-1/2 flex h-8 w-8 -translate-x-1/2 sm:h-10 sm:w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg ring-1 ring-black/10 transition group-focus-within:ring-2 group-focus-within:ring-brand-accent"
        style={{ left: `${position}%` }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
          <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </div>
  );
}
