import type { Metadata } from "next";
import { ContactContent } from "@/components/Contact/ContactContent";
import { Section } from "@/components/Ui/Section";
import { SectionHeading } from "@/components/Ui/SectionHeading";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Excel Fire Ltd to book a fire safety assessment or discuss fire door and passive fire protection works. Call 0203 302 9558 or email info@excelfireltd.com.",
  alternates: { canonical: "/contact-us" },
};

const contactFaqs = [
  {
    question: "How quickly can you respond to an enquiry?",
    answer:
      "We aim to respond promptly during business hours and will confirm next steps based on your project requirements.",
  },
  {
    question: "Do you work on live construction or occupied sites?",
    answer:
      "Yes. Our teams regularly deliver fire door and passive fire protection works on live sites with minimal disruption.",
  },
  {
    question: "Can I request a quote for planned fire protection works?",
    answer:
      "Absolutely. Share your requirements in the form and our team will review the details and provide next steps.",
  },
  {
    question: "Do you cover both residential and commercial properties?",
    answer:
      "Yes. Excel Fire delivers services for housing providers, principal contractors, commercial premises and public-sector sites.",
  },
];

export default function ContactPage() {
  return (
    <>
      <ContactContent />

      <Section last>
        <SectionHeading eyebrow="FAQs" title="Before you call" />
        <div className="grid gap-4 md:grid-cols-2">
          {contactFaqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface-nav-panel)] p-5"
            >
              <h3 className="text-base font-semibold text-foreground">{faq.question}</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">{faq.answer}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
