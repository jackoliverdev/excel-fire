import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/Ui/PageHero";
import { ProjectsGrid, ProjectsClientLogos, ProjectsClientQuotes } from "@/components/Projects/ProjectsIndex";
import { CtaStrip } from "@/components/Ui/CtaStrip";

export const metadata = buildMetadata({
  title: "Projects & Case Studies",
  description:
    "Fire door and fire stopping case studies: Royal Albert Hall, Emirates Stadium, Eurostar, Printworks and 1,500+ flat entrance doors for councils.",
  path: "/projects",
  image: "/images/projects/royal-albert-hall/venue.webp",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects & case studies"
        title="Work we're proud to put our name to"
        description="From the Royal Albert Hall to 1,000+ flat entrance doors in occupied homes. Real programmes, named clients, hard numbers and before and after photos."
        image="/images/projects/emirates-stadium/stadium.webp"
        imageAlt="Emirates Stadium, one of Excel Fire's fire door programmes"
        breadcrumbs={[{ name: "Projects" }]}
        primaryAction={{ label: "Start your project", href: "/contact-us" }}
        secondaryAction={{ label: "View services", href: "/services" }}
      />
      <ProjectsGrid />
      <ProjectsClientQuotes />
      <ProjectsClientLogos />
      <CtaStrip
        title="Add your building to this page"
        description="Tell us what you are planning and we will show you exactly how we would deliver it: scope, programme and evidence."
        actionLabel="Start a conversation"
      />
    </>
  );
}
