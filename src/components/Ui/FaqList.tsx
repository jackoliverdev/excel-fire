import { tidy } from "@/lib/text";
type Faq = { question: string; answer: string };

/**
 * Accessible FAQ accordion built on <details>, so it works without JavaScript and every answer is in the HTML
 * (good for search engines and AI answer engines). The first answer starts open.
 */
export function FaqList({ faqs, openFirst = true }: { faqs: Faq[]; openFirst?: boolean }) {
  return (
    <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
      {faqs.map((faq, index) => (
        <details key={faq.question} className="group py-1" open={openFirst && index === 0}>
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left text-base font-semibold text-foreground transition hover:text-brand-accent md:text-lg [&::-webkit-details-marker]:hidden">
            {tidy(faq.question)}
            <span
              aria-hidden
              className="relative mt-1.5 h-3.5 w-3.5 shrink-0 before:absolute before:left-0 before:top-1/2 before:h-0.5 before:w-full before:-translate-y-1/2 before:bg-current after:absolute after:left-1/2 after:top-0 after:h-full after:w-0.5 after:-translate-x-1/2 after:bg-current after:transition group-open:after:scale-y-0"
            />
          </summary>
          <p className="max-w-[70ch] pb-6 text-[0.9375rem] leading-7 text-[var(--text-muted)]">{tidy(faq.answer)}</p>
        </details>
      ))}
    </div>
  );
}
