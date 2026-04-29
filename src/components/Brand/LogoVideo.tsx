"use client";

import { useEffect, useRef } from "react";

type LogoVideoProps = {
  className?: string;
  ariaLabel?: string;
};

export function LogoVideo({ className, ariaLabel = "Excel Fire logo" }: LogoVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const restartTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
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
      void el.play();
    }, 2000);
  };

  return (
    <video
      ref={videoRef}
      src="/Excel/ExcelLogo.mp4"
      autoPlay
      muted
      playsInline
      preload="metadata"
      onEnded={handleEnded}
      className={className}
      aria-label={ariaLabel}
    />
  );
}

