import { buildMetadata } from "@/lib/seo";
import { ContactContent, ContactFaqs } from "@/components/Contact/ContactContent";

export const metadata = buildMetadata({
  title: "Contact Us, Book a Fire Safety Survey",
  description:
    "Contact Excel Fire to book a fire door or passive fire protection survey, request a quote or send a tender. Call 0203 302 9558 or email info@excelfireltd.com.",
  path: "/contact-us",
});

export default function ContactPage() {
  return (
    <>
      <ContactContent />
      <ContactFaqs />
    </>
  );
}
