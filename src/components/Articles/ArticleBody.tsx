import Image from "next/image";
import type { Article } from "@/lib/articles";
import { siteConfig } from "@/lib/site";
import { organisationId } from "@/lib/seo";
import { Section } from "@/components/Ui/Section";
import { Breadcrumbs } from "@/components/Ui/Breadcrumbs";
import { JsonLd } from "@/components/Seo/JsonLd";
import { tidy } from "@/lib/text";

export function ArticleSchema({ article }: { article: Article }) {
  const url = `${siteConfig.url}/articles/${article.slug}`;
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": `${url}#article`,
        headline: article.title,
        description: article.metaDescription,
        datePublished: article.publishedIso,
        dateModified: article.publishedIso,
        image: `${siteConfig.url}${article.image}`,
        inLanguage: "en-GB",
        author: { "@id": organisationId },
        publisher: { "@id": organisationId },
        mainEntityOfPage: url,
      }}
    />
  );
}

export function ArticleBody({ article }: { article: Article }) {
  return (
    <Section>
      <article className="mx-auto max-w-3xl">
        <Breadcrumbs items={[{ name: "Insights", href: "/articles" }, { name: article.title }]} tone="light" />

        <p className="mt-8 text-xs font-medium text-[var(--text-muted)]">
          <time dateTime={article.publishedIso}>{article.publishedDate}</time> · {article.readingTime}
        </p>
        <h1 className="text-foreground mt-2 text-balance text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
          {tidy(article.title, 16)}
        </h1>
        <p className="mt-4 text-lg leading-8 text-[var(--text-muted)]">{tidy(article.intro)}</p>

        <div className="relative mt-8 h-[240px] overflow-hidden rounded-xl md:h-[380px]">
          <Image src={article.image} alt={article.imageAlt} fill preload sizes="(min-width: 768px) 48rem, 100vw" className="object-cover" />
        </div>

        <div className="mt-10 space-y-10">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-foreground text-xl font-semibold tracking-tight md:text-2xl">{tidy(section.heading, 18)}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="mt-3 text-base leading-8 text-[var(--text-muted)]">
                  {tidy(paragraph)}
                </p>
              ))}
              {section.bullets ? (
                <ul className="mt-4 space-y-2.5">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-base leading-7 text-[var(--text-muted)]">
                      <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" aria-hidden />
                      <span>{tidy(bullet)}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </article>
    </Section>
  );
}
