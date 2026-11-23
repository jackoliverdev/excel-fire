"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";

type LogoVideoProps = {
  /** Sizing for the logo box, e.g. a width. The box keeps the logo's own aspect ratio, so nothing is cropped. */
  className?: string;
  /** Play the animated logo. Off gives the static logo (used in the footer). */
  animate?: boolean;
  /** How many times the animation plays before it rests on the finished logo. */
  plays?: number;
  /** Load the static logo with high priority (above-the-fold headers). */
  priority?: boolean;
  /** Only play the animation while this media query matches (e.g. the header that is actually visible). */
  media?: string;
};

const ALLOWED = "(prefers-reduced-motion: no-preference)";

/** True while the media query matches; false on the server so the static logo is what gets server-rendered. */
function useMediaQuery(query: string) {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const list = window.matchMedia(query);
      list.addEventListener("change", onChange);
      return () => list.removeEventListener("change", onChange);
    },
    [query],
  );
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
}

/**
 * Excel Fire logo. The finished logo is always rendered as an image underneath; the reveal animation plays on top
 * a few times and then stops on the final frame. With reduced motion turned on, only the static logo shows.
 */
export function LogoVideo({ className = "", animate = true, plays = 2, priority = false, media }: LogoVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeoutRef = useRef<number | null>(null);
  const playCount = useRef(0);
  const [ready, setReady] = useState(false);
  const canAnimate = useMediaQuery(media ? `${ALLOWED} and ${media}` : ALLOWED);
  const showVideo = animate && canAnimate;

  useEffect(() => {
    const el = videoRef.current;
    if (!showVideo || !el) return;
    playCount.current = 0;
    el.play().catch(() => {
      // Autoplay blocked (e.g. low power mode): the static logo underneath stays visible.
    });
    return () => {
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
    };
  }, [showVideo]);

  const handleEnded = () => {
    playCount.current += 1;
    if (playCount.current >= plays) return; // Rest on the finished logo.
    timeoutRef.current = window.setTimeout(() => {
      const el = videoRef.current;
      if (!el) return;
      el.currentTime = 0;
      el.play().catch(() => {});
    }, 2500);
  };

  return (
    <span className={`relative block aspect-[960/212] overflow-hidden bg-black ${className}`}>
      <Image
        src="/Excel/excel-fire-logo.webp"
        alt="Excel Fire, our forward thinking gives you reassurance"
        fill
        sizes="(min-width: 1024px) 280px, 200px"
        preload={priority}
        className={`object-contain transition-opacity duration-300 ${showVideo && ready ? "opacity-0" : "opacity-100"}`}
      />
      {showVideo ? (
        <video
          ref={videoRef}
          src="/Excel/ExcelLogo.mp4"
          muted
          playsInline
          preload="auto"
          onPlaying={() => setReady(true)}
          onEnded={handleEnded}
          aria-hidden
          className={`absolute inset-0 h-full w-full object-cover object-center ${ready ? "opacity-100" : "opacity-0"}`}
        />
      ) : null}
    </span>
  );
}
