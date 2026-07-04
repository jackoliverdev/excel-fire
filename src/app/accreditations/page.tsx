import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/Ui/PageHero";
import { Section } from "@/components/Ui/Section";
import { SectionHeading } from "@/components/Ui/SectionHeading";
import { CtaStrip } from "@/components/Ui/CtaStrip";

export const metadata: Metadata = {
  title: "Accreditations & Compliance",
  description:
    "Excel Fire holds FIRAS, UKAS third-party, BM TRADA Q-Mark, CHAS, Constructionline Gold and SMAS accreditations — independently audited proof of compliant fire safety delivery.",
  alternates: { canonical: "/accreditations" },
};

const accreditations = [
  {
    name: "UKAS Third-Party Certification — Fire Door Inspection",
    logo: "/Excel/Accreditations/Excel_FireFDInsp_UKASlogo.png.webp",
    meaning:
      "Our fire door inspection capability is certified under a UKAS-accredited scheme — the highest level of independent assurance available in the UK. It means our inspectors are audited against a published standard, not self-declared.",
    covers: "Fire door inspections and reporting",
  },
  {
    name: "BM TRADA Q-Mark — Fire Door Maintenance",
    logo: "/Excel/Accreditations/UKAS-Q-Mark-Fire-Door-Maintenance-Colour-clear-UKAS71.jpg.webp",
    meaning:
      "The Q-Mark scheme certifies that our fire door maintenance and repair works are carried out by trained operatives, using compatible components, with every job documented and auditable.",
    covers: "Fire door maintenance and remediation",
  },
  {
    name: "BM TRADA Certification",
    logo: "/Excel/Accreditations/A0A1E93E-48AF-4DBB-9A9A-383C9CC7D0CA-scaled-1-1920x1106.jpg.webp",
    meaning:
      "BM TRADA third-party certification independently verifies the competence of our installation teams and the traceability of the products and processes we use.",
    covers: "Installation competence and traceability",
  },
  {
    name: "CHAS",
    logo: "/Excel/Accreditations/chas-1024x537-1.png.webp",
    meaning:
      "The Contractors Health and Safety Assessment Scheme confirms our health and safety policies, processes and track record meet the standard required by public and private sector clients.",
    covers: "Health and safety compliance",
  },
  {
    name: "Constructionline Gold",
    logo: "/Excel/Accreditations/constructionline-gold.jpg.webp",
    meaning:
      "Gold membership means we have passed enhanced prequalification covering governance, financials, environmental practice, modern slavery and equality — simplifying supplier onboarding for procurement teams.",
    covers: "Prequalification and procurement assurance",
  },
  {
    name: "SMAS Worksafe",
    logo: "/Excel/Accreditations/smas-300x105-1.jpg.webp",
    meaning:
      "SMAS Worksafe certification demonstrates our health and safety arrangements meet the SSIP (Safety Schemes in Procurement) core criteria recognised across the construction industry.",
    covers: "SSIP health and safety assurance",
  },
  {
    name: "Injectaclad Approved Installer",
    logo: "/Excel/Accreditations/Injectaclad.webp",
    meaning:
      "We are approved by the system manufacturer to install Injectaclad cavity barrier remediation — training, technique and documentation audited by the people who make the product.",
    covers: "Injectaclad cavity barrier remediation",
  },
  {
    name: "Industry Scheme Membership",
    logo: "/Excel/Accreditations/image001.jpg@01D93BB8.A719FDE0.jpg.webp",
    meaning:
      "Alongside our core certifications, we maintain memberships that keep our teams current with evolving fire safety legislation, standards and best practice.",
    covers: "Continuing competence and standards",
  },
];

export default function AccreditationsPage() {
  return (
    <>
      <PageHero
        title="Accreditation you can verify, not just claim"
        description="Anyone can say they are compliant. Our fire safety delivery is independently audited by UKAS-accredited bodies, manufacturer schemes and industry prequalification standards — here is what each one actually means for you."
        image="/Excel/Services/site-firestopping-4.jpg"
        imageAlt="Independently audited fire protection works"
        primaryAction={{ label: "Book an assessment", href: "/contact-us" }}
        secondaryAction={{ label: "View services", href: "/services" }}
      />

      <Section>
        <SectionHeading
          eyebrow="Our accreditations"
          title="What each accreditation means for your building"
          description="Third-party certification matters because it is audited — an independent body checks our people, processes and paperwork, so you do not have to take our word for it."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {accreditations.map((accreditation) => (
            <article
              key={accreditation.name}
              className="flex gap-5 rounded-xl border border-[var(--border)] bg-[var(--surface-nav-panel)] p-5 md:p-6"
            >
              <div className="flex h-20 w-28 shrink-0 items-center justify-center rounded-lg bg-white p-2">
                <div className="relative h-full w-full">
                  <Image
                    src={accreditation.logo}
                    alt={`${accreditation.name} logo`}
                    fill
                    sizes="112px"
                    className="object-contain"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-base font-semibold leading-snug text-foreground">
                  {accreditation.name}
                </h2>
                <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{accreditation.meaning}</p>
                <p className="mt-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-brand-accent">
                  Covers: {accreditation.covers}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Why it matters"
          title="Compliance is only as strong as its evidence"
        />

        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "For responsible persons",
              text: "Using third-party accredited contractors is the clearest way to demonstrate you discharged your duties competently under the Fire Safety Order — it stands up to scrutiny from fire authorities and insurers.",
            },
            {
              title: "For procurement teams",
              text: "CHAS, SMAS and Constructionline Gold mean prequalification is already done. We slot into your approved supplier list without months of paperwork.",
            },
            {
              title: "For building users",
              text: "Audited installers, tested products and documented works mean the fire protection in your building will actually perform when it matters.",
            },
          ].map((card) => (
            <article
              key={card.title}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface-nav-panel)] p-5"
            >
              <h3 className="text-base font-semibold text-foreground">{card.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">{card.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <CtaStrip
        title="Want copies of our certificates?"
        description="We provide certification, insurance and prequalification documents on request — usually the same day."
        actionLabel="Request documents"
      />
    </>
  );
}
