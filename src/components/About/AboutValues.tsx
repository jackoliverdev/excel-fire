import Link from "next/link";
import { Section } from "@/components/Ui/Section";
import { SectionHeading } from "@/components/Ui/SectionHeading";
import { tidy } from "@/lib/text";

/** What makes the delivery different, each point backed by a named project. */
const values = [
  {
    title: "Third-party certified",
    description:
      "FIRAS, BM TRADA Q-Mark and Bluesky certification are audited by UKAS-accredited bodies. At CHP every one of 1,000+ doorsets left with its own FIRAS certificate.",
    proof: { label: "CHP Chelmsford", href: "/projects/chp-chelmsford" },
  },
  {
    title: "Labelled, logged and provable",
    description:
      "Every seal carries an install label and QR code tied to our installation log. Nearly 3,000 penetrations at the Royal Albert Hall are recorded by size, substrate and system.",
    proof: { label: "Royal Albert Hall", href: "/projects/royal-albert-hall" },
  },
  {
    title: "Residents treated as customers",
    description:
      "We act as Resident Liaison Officer on door programmes: booking every visit, fitting in one appointment, and at Bryanston & Harewood letting residents choose their door colour.",
    proof: { label: "LB Ealing", href: "/projects/lb-ealing" },
  },
  {
    title: "Built around live buildings",
    description:
      "Works phased around fixtures at Emirates Stadium, shows at the Royal Albert Hall and round-the-clock trains at Eurostar's Temple Mills depot.",
    proof: { label: "Eurostar Temple Mills", href: "/projects/eurostar-temple-mills" },
  },
  {
    title: "Fast when it is urgent",
    description:
      "On an emergency programme in Newham we surveyed and fixed 396 communal doorsets and the escape-route fire stopping across 44 floors, same day, floor by floor.",
    proof: { label: "Newham towers", href: "/projects/david-lee-point-brasset-point-newham" },
  },
  {
    title: "Doors and electrics, one team",
    description:
      "Our electrical division, Excel Electrics, wires and interlinks the maglocks and hold-open devices on the doors we fit, so there is no gap between trades.",
    proof: { label: "Emirates Stadium", href: "/projects/emirates-stadium" },
  },
];

export function AboutValues() {
  return (
    <Section>
      <SectionHeading
        eyebrow="How we are different"
        title="Six things clients can check for themselves"
        description="No adjectives. Each point links to the project that proves it."
      />

      <ol className="grid gap-x-10 border-t border-[var(--border)] sm:grid-cols-2 lg:grid-cols-3">
        {values.map((value, index) => (
          <li key={value.title} className="flex flex-col border-b border-[var(--border)] py-8">
            <span className="figure text-2xl text-brand-accent" aria-hidden>
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground">{tidy(value.title, 18)}</h3>
            <p className="mt-2 text-[0.9375rem] leading-7 text-[var(--text-muted)]">{tidy(value.description)}</p>
            <Link
              href={value.proof.href}
              className="mt-auto pt-4 text-sm font-semibold text-foreground underline decoration-brand-accent decoration-2 underline-offset-4 transition hover:text-brand-accent"
            >
              {value.proof.label} →
            </Link>
          </li>
        ))}
      </ol>
    </Section>
  );
}
