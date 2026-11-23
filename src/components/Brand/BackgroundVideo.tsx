"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type BackgroundVideoProps = {
  src: string;
  /** Still frame shown first (and only, on phones, slow connections and reduced motion). Served through next/image. */
  poster: string;
  posterAlt?: string;
  className?: string;
};

type NetworkInformation = { saveData?: boolean; effectiveType?: string };

/**
 * Hero background: the optimised poster image is the LCP element, and the video only loads on
 * tablet and desktop when motion is allowed, fading in once it is actually playing.
 */
export function BackgroundVideo({ src, poster, posterAlt = "", className = "" }: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: no-preference)");
    const wide = window.matchMedia("(min-width: 768px)");
    const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection;
    const slow = Boolean(connection?.saveData) || /(^|-)2g$/.test(connection?.effectiveType ?? "");

    const update = () => setEnabled(motion.matches && wide.matches && !slow);
    update();
    motion.addEventListener("change", update);
    wide.addEventListener("change", update);
    return () => {
      motion.removeEventListener("change", update);
      wide.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    if (!enabled || !el) return;
    el.play().catch(() => {
      // Autoplay can be blocked by power-saving modes; the poster stays in place.
    });
  }, [enabled]);

  return (
    <div className={`absolute inset-0 ${className}`} aria-hidden={posterAlt ? undefined : true}>
      <Image src={poster} alt={posterAlt} fill preload sizes="100vw" className="object-cover object-center" />
      {enabled ? (
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          onPlaying={() => setPlaying(true)}
          onEmptied={() => setPlaying(false)}
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${
            playing ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden
        />
      ) : null}
    </div>
  );
}
