"use client";

import { useEffect, useRef } from "react";

type LogoVideoProps = {
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

export function LogoVideo({ className, ariaLabel = "Excel Fire logo" }: LogoVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const restartTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const attemptPlay = () => safePlay(el);

    attemptPlay();
    el.addEventListener("canplay", attemptPlay);

    return () => {
      el.removeEventListener("canplay", attemptPlay);
      if (restartTimeoutRef.current !== null) {
        window.clearTimeout(restartTimeoutRef.current);
      }
    };
  }, []);

  const handleEnded = () => {
    if (restartTimeoutRef.current !== null) {
      window.clearTimeout(restartTimeoutRef.current);
    }

    restartTimeoutRef.current = window.setTimeout(() => {
      const el = videoRef.current;
      if (!el) return;
      el.currentTime = 0;
      safePlay(el);
    }, 2000);
  };

  return (
    <video
      ref={videoRef}
      src="/Excel/ExcelLogo.mp4"
      muted
      playsInline
      preload="metadata"
      onEnded={handleEnded}
      className={className}
      aria-label={ariaLabel}
    />
  );
}
