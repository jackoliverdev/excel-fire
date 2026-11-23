"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";

const CONSENT_STORAGE_KEY = "excel-fire-cookie-consent";
const CONSENT_EVENT = "excel-fire-cookie-consent-change";

export type CookieConsent = "accepted" | "declined";

export function getStoredConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  return value === "accepted" || value === "declined" ? value : null;
}

function subscribeToConsent(callback: () => void) {
  window.addEventListener(CONSENT_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CONSENT_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function useConsent(): CookieConsent | null | "server" {
  return useSyncExternalStore(
    subscribeToConsent,
    getStoredConsent,
    // Keep the banner out of the server-rendered HTML; it appears after hydration if needed.
    () => "server" as const,
  );
}

export function CookieBanner() {
  const consent = useConsent();

  if (consent !== null) return null;

  const handleConsent = (choice: CookieConsent) => {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, choice);
    // Notifies this store and any future analytics initialisation.
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: choice }));
  };

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-desc"
      className="fixed inset-x-3 bottom-3 z-[130] mx-auto max-w-4xl rounded-xl border border-[var(--border)] bg-[var(--surface-nav-panel)] px-4 py-3.5 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.45)] md:bottom-5 md:px-6 md:py-4"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-8">
        <div className="min-w-0">
          <h2 id="cookie-title" className="text-sm font-semibold text-foreground">
            Cookies
          </h2>
          <p id="cookie-desc" className="mt-0.5 text-[13px] leading-snug text-[var(--text-muted)] md:text-sm">
            Essential cookies keep the site working. Optional analytics only run if you accept.{" "}
            <Link href="/legal/cookie-policy" className="font-semibold text-brand-accent underline-offset-2 hover:underline">
              Cookie policy
            </Link>
          </p>
        </div>
        <div className="grid shrink-0 grid-cols-2 gap-2 md:flex">
          <button
            type="button"
            onClick={() => handleConsent("accepted")}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-brand-accent px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 md:px-5"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={() => handleConsent("declined")}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-[var(--border)] px-4 py-2.5 text-sm font-semibold text-foreground transition hover:border-brand-accent md:px-5"
          >
            Essential only
          </button>
        </div>
      </div>
    </div>
  );
}
