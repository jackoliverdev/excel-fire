import { tidy } from "@/lib/text";
type Step = { title: string; detail: string };

/**
 * Process steps as ruled columns: a hairline rule, a condensed number, a title and a short line.
 * No boxes, so a page of steps reads as one calm band rather than a wall of cards.
 */
export function NumberedSteps({ steps, tone = "light" }: { steps: Step[]; tone?: "light" | "dark" }) {
  const muted = tone === "dark" ? "text-slate-300" : "text-[var(--text-muted)]";
  const rule = tone === "dark" ? "border-white/15" : "border-[var(--border)]";
  const cols = steps.length === 3 ? "lg:grid-cols-3" : steps.length >= 5 ? "lg:grid-cols-5" : "lg:grid-cols-4";

  return (
    <ol className={`grid gap-x-8 gap-y-10 sm:grid-cols-2 ${cols}`}>
      {steps.map((step, index) => (
        <li key={step.title} className={`relative border-t pt-6 ${rule}`}>
          <span className="figure block text-4xl text-brand-accent" aria-hidden>
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className={`mt-4 text-lg font-semibold tracking-tight ${tone === "dark" ? "text-white" : "text-foreground"}`}>
            {tidy(step.title, 18)}
          </h3>
          <p className={`mt-2 text-[0.9375rem] leading-7 ${muted}`}>{tidy(step.detail)}</p>
        </li>
      ))}
    </ol>
  );
}
