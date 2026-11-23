import Image from "next/image";
import { accreditations } from "@/lib/accreditations";
import { siteConfig, companiesHouseUrl } from "@/lib/site";
import { Section } from "@/components/Ui/Section";
import { SectionHeading } from "@/components/Ui/SectionHeading";
import { tidy } from "@/lib/text";

export function AccreditationsList() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Our accreditations"
        title="What each accreditation means for your building"
        description="Third-party certification matters because it is audited. An independent body checks our people, processes and paperwork, so you do not have to take our word for it."
      />

      <ul className="border-t border-[var(--border)]">
        {accreditations.map((item) => (
          <li
            key={item.name}
            className="grid gap-4 border-b border-[var(--border)] py-7 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-8 lg:grid-cols-[10rem_minmax(0,1fr)_14rem] lg:items-center"
          >
            <div className="flex h-20 w-36 items-center justify-center rounded-lg border border-[var(--border)] bg-white p-3 sm:w-full">
              {item.logo ? (
                <div className="relative h-full w-full">
                  <Image src={item.logo} alt={`${item.short} logo`} fill sizes="160px" className="object-contain" />
                </div>
              ) : (
                <span className="figure text-center text-lg text-slate-800">{item.short}</span>
              )}
            </div>
            <div>
              <h2 className="text-lg font-semibold leading-snug tracking-tight text-foreground">{tidy(item.name, 18)}</h2>
              <p className="mt-2 max-w-[68ch] text-[0.9375rem] leading-7 text-[var(--text-muted)]">{tidy(item.meaning)}</p>
            </div>
            <p className="text-sm text-[var(--text-muted)] sm:col-start-2 lg:col-start-3 lg:text-right">
              <span className="eyebrow block">Covers</span>
              <span className="mt-1 block font-semibold text-foreground">{tidy(item.covers)}</span>
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

const reasons = [
  {
    title: "For responsible persons",
    text: "Using third-party accredited contractors is the clearest way to show you discharged your duties competently under the Fire Safety Order. It stands up to scrutiny from fire authorities and insurers.",
  },
  {
    title: "For procurement teams",
    text: "CHAS, SMAS, Avetta and Constructionline Gold mean prequalification is already done. We slot into your approved supplier list without months of paperwork.",
  },
  {
    title: "For building users",
    text: "Audited installers, tested products and logged works mean the fire protection in your building will actually perform when it matters.",
  },
];

export function AccreditationsWhy() {
  return (
    <Section>
      <SectionHeading eyebrow="Why it matters" title="Compliance is only as strong as its evidence" />
      <ul className="grid gap-x-10 gap-y-10 md:grid-cols-3">
        {reasons.map((card) => (
          <li key={card.title} className="border-t border-[var(--border)] pt-6">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">{tidy(card.title, 18)}</h3>
            <p className="mt-2 text-[0.9375rem] leading-7 text-[var(--text-muted)]">{tidy(card.text)}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/** Desk-check facts a buyer looks for: legal name, company number and offices. */
export function CompanyFacts() {
  const facts = [
    { label: "Legal name", value: siteConfig.legalName },
    { label: "Company number", value: siteConfig.companyNumber, href: companiesHouseUrl },
    { label: "Registered in", value: "England and Wales" },
    { label: "Incorporated", value: "18/01/2019" },
    { label: "VAT number", value: siteConfig.vatNumber },
    { label: "Registered office", value: siteConfig.offices.registered },
  ];

  return (
    <Section>
      <div className="rounded-2xl bg-[#0b0f14] p-6 text-white md:p-8">
        <p className="eyebrow text-slate-400">Company facts</p>
        <h2 className="heading-2 mt-3 text-white">Everything your supplier check needs</h2>
        <dl className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">{tidy(fact.label, 12)}</dt>
              <dd className="mt-1 text-sm font-semibold leading-6">
                {fact.href ? (
                  <a href={fact.href} target="_blank" rel="noopener" className="underline-offset-4 hover:text-brand-accent hover:underline">
                    {fact.value} ↗
                  </a>
                ) : (
                  fact.value
                )}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 text-sm leading-6 text-slate-300">
          Certificates, insurance and policy documents are available on request, usually the same day.
        </p>
      </div>
    </Section>
  );
}
