import { LinkList } from "@/components/Ui/LinkList";
import { Section } from "@/components/Ui/Section";
import { SectionHeading } from "@/components/Ui/SectionHeading";

const cards = [
  {
    title: "Our accreditations",
    text: "FIRAS, BM TRADA Q-Mark, Bluesky, CHAS, Constructionline Gold: what each one means and why it matters.",
    href: "/accreditations",
    label: "View accreditations",
  },
  {
    title: "Projects & case studies",
    text: "The Royal Albert Hall, Emirates Stadium, Eurostar and 1,500+ flat entrance doors in occupied homes.",
    href: "/projects",
    label: "View projects",
  },
  {
    title: "Sectors we serve",
    text: "How we adapt delivery for social housing, main contractors, live venues, healthcare and education.",
    href: "/sectors",
    label: "View sectors",
  },
];

export function AboutProof() {
  return (
    <Section>
      <SectionHeading eyebrow="Go deeper" title="See the proof behind the words" />
      <LinkList columns={3} items={cards.map((card) => ({ label: card.title, href: card.href, description: card.text }))} />
    </Section>
  );
}
