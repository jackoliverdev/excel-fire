"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/lib/testimonials";
import { tidy } from "@/lib/text";

const ROTATE_MS = 7000;

/**
 * Editorial testimonial rotator. Every quote is rendered into the same grid cell, so the block is always
 * as tall as the longest quote and the page never jumps. Pauses on hover, focus, the pause button and
 * when the visitor prefers reduced motion.
 */
export function HomeTestimonials() {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const paused = hovered || userPaused || reducedMotion;
  const total = testimonials.length;

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = window.setTimeout(() => setIndex((current) => (current + 1) % total), ROTATE_MS);
    return () => window.clearTimeout(id);
  }, [index, paused, total]);

  const go = (next: number) => setIndex((next + total) % total);

  return (
    <section className="section-y">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div
          className="grid gap-8 border-y border-[var(--border)] py-10 md:py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)] lg:gap-16"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocusCapture={() => setHovered(true)}
          onBlurCapture={() => setHovered(false)}
        >
          <div className="flex flex-col justify-between gap-6">
            <div>
              <p className="eyebrow">Client feedback</p>
              <h2 className="heading-2 mt-3">In their words</h2>
              <p className="mt-3 max-w-[32ch] text-sm leading-6 text-[var(--text-muted)]">
                From Tier 1 contractors, housing providers and FM teams we work alongside.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="mr-1 whitespace-nowrap font-mono text-sm tabular-nums text-[var(--text-muted)]">
                {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
              <button type="button" aria-label="Previous testimonial" onClick={() => go(index - 1)} className="icon-button">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4" aria-hidden>
                  <path d="M12 4l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button type="button" aria-label="Next testimonial" onClick={() => go(index + 1)} className="icon-button">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4" aria-hidden>
                  <path d="M8 4l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => setUserPaused((value) => !value)}
                aria-pressed={userPaused}
                aria-label={userPaused ? "Resume testimonials" : "Pause testimonials"}
                className="icon-button"
              >
                {userPaused ? (
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5" aria-hidden>
                    <path d="M6 4l10 6-10 6z" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5" aria-hidden>
                    <path d="M5 4h3v12H5zM12 4h3v12h-3z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div>
            <div className="grid" aria-live={paused ? "polite" : "off"}>
              {testimonials.map((item, i) => {
                const active = i === index;
                return (
                  <figure
                    key={item.author + i}
                    aria-hidden={!active}
                    className={`col-start-1 row-start-1 transition-[opacity,transform] ease-out motion-reduce:transition-none ${
                      active ? "translate-y-0 opacity-100 delay-200 duration-500" : "pointer-events-none -translate-y-1 opacity-0 duration-200"
                    }`}
                  >
                    <blockquote className="text-balance text-lg font-medium leading-snug tracking-tight text-foreground sm:text-2xl md:text-[1.9rem] md:leading-[1.3]">
                      <span className="text-brand-accent">&ldquo;</span>
                      {tidy(item.quote)}
                      <span className="text-brand-accent">&rdquo;</span>
                    </blockquote>
                    <figcaption className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                      <span className="font-semibold text-foreground">{item.author}</span>
                      <span className="text-[var(--text-muted)]">{tidy(item.role)}</span>
                    </figcaption>
                  </figure>
                );
              })}
            </div>

            <div className="mt-8 flex gap-1.5" aria-hidden>
              {testimonials.map((item, i) => (
                <button
                  key={`bar-${item.author}-${i}`}
                  type="button"
                  tabIndex={-1}
                  onClick={() => go(i)}
                  className="group relative h-6 flex-1"
                >
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 overflow-hidden rounded-full bg-[var(--border)]">
                    <span
                      key={i === index ? `${index}-${paused}` : undefined}
                      className={`block h-full bg-brand-accent ${
                        i < index ? "w-full" : i === index ? (paused ? "w-full" : "testimonial-progress") : "w-0"
                      }`}
                      style={i === index && !paused ? { animationDuration: `${ROTATE_MS}ms` } : undefined}
                    />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
