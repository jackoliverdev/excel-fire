"use client";

import { useEffect, useRef } from "react";

type BackgroundVideoProps = {
  src: string;
  poster?: string;
  className?: string;
  ariaLabel?: string;
};

function safePlay(video: HTMLVideoElement) {
  const playPromise = video.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // Autoplay can be interrupted by browser power-saving policies.
    });
  }
}

export function BackgroundVideo({ src, poster, className, ariaLabel }: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const attemptPlay = () => safePlay(el);

    attemptPlay();
    el.addEventListener("canplay", attemptPlay);

    return () => {
      el.removeEventListener("canplay", attemptPlay);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      className={className}
      aria-label={ariaLabel}
    />
  );
}
