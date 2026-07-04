import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/Ui/Section";
import { CtaStrip } from "@/components/Ui/CtaStrip";
import { inlineLinkClass } from "@/components/Ui/buttons";
import { articles, getArticle } from "@/lib/articles";
import { siteConfig } from "@/lib/site";

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/articles/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.metaDescription,
    alternates: { canonical: `/articles/${article.slug}` },
    openGraph: {
      title: `${article.title} | Excel Fire`,
      description: article.metaDescription,
      url: `${siteConfig.url}/articles/${article.slug}`,
      type: "article",
      publishedTime: article.publishedIso,
    },
  };
}

export default async function ArticlePage({ params }: PageProps<"/articles/[slug]">) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.publishedIso,
    image: `${siteConfig.url}${article.image}`,
    author: { "@type": "Organization", name: siteConfig.legalName },
    publisher: { "@type": "Organization", name: siteConfig.legalName, url: siteConfig.url },
    mainEntityOfPage: `${siteConfig.url}/articles/${article.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          <Link href="/articles" className={inlineLinkClass}>
            ← All articles
          </Link>

          <p className="mt-6 text-xs font-medium text-[var(--text-muted)]">
            {article.publishedDate} · {article.readingTime}
          </p>
          <h1 className="text-foreground mt-2 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            {article.title}
          </h1>
          <p className="mt-4 text-base leading-8 text-[var(--text-muted)]">{article.intro}</p>

          <div className="relative mt-8 h-[240px] overflow-hidden rounded-xl md:h-[380px]">
            <Image
              src={article.image}
              alt={article.imageAlt}
              fill
              priority
              sizes="(min-width: 768px) 48rem, 100vw"
              className="object-cover"
            />
          </div>

          <div className="mt-10 space-y-10">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-foreground text-xl font-semibold tracking-tight md:text-2xl">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="mt-3 text-base leading-8 text-[var(--text-muted)]"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.bullets ? (
                  <ul className="mt-4 space-y-2.5">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 text-base leading-7 text-[var(--text-muted)]"
                      >
                        <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" aria-hidden />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </div>
      </Section>

      <CtaStrip
        title="Need help applying this to your building?"
        description="Speak to an accredited specialist about surveys, remediation or compliance programmes."
        actionLabel="Talk to a specialist"
      />
    </>
  );
}
