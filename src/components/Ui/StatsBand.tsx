type Stat = {
  value: string;
  label: string;
};

const defaultStats: Stat[] = [
  { value: "2019", label: "Established" },
  { value: "10,000+", label: "Fire doors inspected" },
  { value: "8", label: "Industry accreditations" },
  { value: "100%", label: "Digitally evidenced works" },
];

/**
 * Metric band in the style used by leading fire protection firms —
 * immediate, quantified proof beneath a hero or intro.
 */
export function StatsBand({ stats = defaultStats }: { stats?: Stat[] }) {
  return (
    <section className="pt-10 pb-10 md:pt-12 md:pb-12">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[var(--surface-nav-panel)] px-6 py-7 text-center">
              <p className="text-3xl font-semibold tracking-tight text-brand-accent md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-xs font-medium uppercase tracking-[0.14em] text-[var(--text-muted)] md:text-sm md:tracking-[0.1em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
