import { tidy } from "@/lib/text";

type Stat = {
  value: string;
  label: string;
};

/** Every figure traces to the 2025-2026 case study sheets (CHP + LB Ealing; Royal Albert Hall + Printworks). */
const defaultStats: Stat[] = [
  { value: "2019", label: "Established" },
  { value: "1,500+", label: "Flat entrance doors fitted" },
  { value: "5,000+", label: "Penetrations fire stopped" },
  { value: "UKAS", label: "Third-party certified" },
];

/**
 * Metric band in the style used by leading fire protection firms:
 * immediate, quantified proof beneath a hero or intro.
 */
export function StatsBand({ stats = defaultStats }: { stats?: Stat[] }) {
  return (
    <section className="section-y">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[var(--surface-nav-panel)] px-6 py-7 text-center">
              <p className="text-3xl font-semibold tracking-tight text-brand-accent md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-balance text-xs font-medium uppercase tracking-[0.14em] text-[var(--text-muted)] md:text-sm md:tracking-[0.1em]">
                {tidy(stat.label, 12)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
