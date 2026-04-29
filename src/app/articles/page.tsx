import Link from "next/link";

const featuredArticles = [
  {
    title: "Passive Fire Protection: What Building Managers Need to Know",
    summary: "A clear overview of compliance priorities, inspection cadence and delivery standards.",
  },
  {
    title: "Fire Door Programmes: Common Risks and How to Reduce Them",
    summary: "Practical guidance on survey planning, remediation sequencing and evidence handover.",
  },
  {
    title: "Compartmentation in Live Buildings: A Practical Delivery Checklist",
    summary: "How to deliver high-quality fire stopping works with minimal disruption to operations.",
  },
];

export default function ArticlesPage() {
  return (
    <section className="pt-10 pb-10 md:pt-12 md:pb-12">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-7">
          <p className="text-muted text-xs font-medium uppercase tracking-[0.16em]">Articles</p>
          <h1 className="text-foreground mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
            Insights from the Excel Fire team
          </h1>
          <p className="mt-3 max-w-[68ch] text-sm leading-7 text-[var(--text-muted)] md:text-base">
            Guidance for property teams and project stakeholders on compliant, practical fire safety delivery.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {featuredArticles.map((article) => (
            <article
              key={article.title}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface-nav-panel)] p-5"
            >
              <h2 className="text-base font-semibold text-foreground">{article.title}</h2>
              <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">{article.summary}</p>
            </article>
          ))}
        </div>

        <div className="mt-6">
          <Link href="/contact-us" className="text-sm font-semibold text-brand-accent transition hover:opacity-80">
            Speak with our team
          </Link>
        </div>
      </div>
    </section>
  );
}

