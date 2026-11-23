import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Ui/Section";
import { SectionHeading } from "@/components/Ui/SectionHeading";
import { articles } from "@/lib/articles";
import { tidy } from "@/lib/text";

export function ArticlesGrid() {
  return (
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
                {tidy(article.title, 18)}
              </h2>
              <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{tidy(article.summary)}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-brand-accent">
                Read article
              </p>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
