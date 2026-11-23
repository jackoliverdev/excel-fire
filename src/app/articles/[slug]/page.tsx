import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/lib/articles";
import { buildMetadata } from "@/lib/seo";
import { ArticleBody, ArticleSchema } from "@/components/Articles/ArticleBody";
import { CtaStrip } from "@/components/Ui/CtaStrip";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps<"/articles/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  return buildMetadata({
    title: article.metaTitle,
    description: article.metaDescription,
    path: `/articles/${article.slug}`,
    image: article.image,
    imageAlt: article.imageAlt,
    type: "article",
  });
}

export default async function ArticlePage({ params }: PageProps<"/articles/[slug]">) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <>
      <ArticleSchema article={article} />
      <ArticleBody article={article} />
      <CtaStrip
        title="Need help applying this to your building?"
        description="Speak to an accredited specialist about surveys, remediation or compliance programmes."
        actionLabel="Talk to a specialist"
      />
    </>
  );
}
