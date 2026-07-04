import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/Ui/PageHero";
import { Section } from "@/components/Ui/Section";
import { SectionHeading } from "@/components/Ui/SectionHeading";
import { CtaStrip } from "@/components/Ui/CtaStrip";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Articles & Insights",
  description:
    "Fire safety guidance from the Excel Fire team — passive fire protection, fire door compliance and practical delivery advice for property and asset teams.",
  alternates: { canonical: "/articles" },
};

export default function ArticlesPage() {
  return (
    <>
      <PageHero
        title="Insights from the Excel Fire team"
        description="Practical guidance for property teams, responsible persons and project stakeholders on compliant fire safety delivery."
        primaryAction={{ label: "Speak with our team", href: "/contact-us" }}
        secondaryAction={{ label: "View services", href: "/services" }}
      />

      <Section>
        <SectionHeading
          eyebrow="Latest articles"
          title="Fire safety guidance, written plainly"
        />

        <div className="grid gap-4 md:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface-nav-panel)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_32px_-24px_rgba(15,23,42,0.4)]"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.imageAlt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
              </div>

              <div className="p-5">
                <p className="text-xs font-medium text-[var(--text-muted)]">
                  {article.publishedDate} · {article.readingTime}
                </p>
                <h2 className="mt-2 text-base font-semibold leading-snug text-foreground">
                  {article.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{article.summary}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-brand-accent">
                  Read article
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CtaStrip
        title="Got a question these articles don't answer?"
        description="Our specialists are happy to talk through your specific building — no obligation."
        actionLabel="Ask the team"
      />
    </>
  );
}
