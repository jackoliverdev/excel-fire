import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/Ui/PageHero";
import { ArticlesGrid } from "@/components/Articles/ArticlesGrid";
import { CtaStrip } from "@/components/Ui/CtaStrip";

export const metadata = buildMetadata({
  title: "Articles & Insights",
  description:
    "Fire safety guidance from the Excel Fire team, passive fire protection, fire door compliance and practical delivery advice for property and asset teams.",
  path: "/articles",
});

export default function ArticlesPage() {
  return (
    <>
      <PageHero
        title="Insights from the Excel Fire team"
        description="Practical guidance for property teams, responsible persons and project stakeholders on compliant fire safety delivery."
        eyebrow="Insights"
        breadcrumbs={[{ name: "Insights" }]}
        primaryAction={{ label: "Speak with our team", href: "/contact-us" }}
        secondaryAction={{ label: "View services", href: "/services" }}
      />

      <ArticlesGrid />

      <CtaStrip
        title="Got a question these articles don't answer?"
        description="Our specialists are happy to talk through your specific building, no obligation."
        actionLabel="Ask the team"
      />
    </>
  );
}
