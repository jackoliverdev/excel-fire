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
      aria-label="Cookie consent"
      className="fixed inset-x-4 bottom-4 z-[130] mx-auto max-w-xl rounded-xl border border-[var(--border)] bg-[var(--surface-nav-panel)] p-5 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.45)]"
    >
      <h2 className="text-sm font-semibold text-foreground">Cookies on this website</h2>
      <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
        We use essential cookies to make this site work. With your consent, we would also like to
        use analytics cookies to understand how the site is used. Read our{" "}
        <Link href="/legal/cookie-policy" className="font-semibold text-brand-accent hover:opacity-80">
          cookie policy
        </Link>{" "}
        for details.
      </p>

      <div className="mt-4 flex flex-wrap gap-2.5">
        <button
          type="button"
          onClick={() => handleConsent("accepted")}
          className="inline-flex items-center justify-center rounded-md bg-brand-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Accept all
        </button>
        <button
          type="button"
          onClick={() => handleConsent("declined")}
          className="inline-flex items-center justify-center rounded-md border border-[var(--border)] px-5 py-2.5 text-sm font-semibold text-[var(--text-muted)] transition hover:border-brand-accent hover:text-foreground"
        >
          Essential only
        </button>
      </div>
    </div>
  );
}
