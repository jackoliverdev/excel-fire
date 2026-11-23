export const enquiryTypes = [
  { value: "quote", label: "Quote or survey for a building" },
  { value: "tender", label: "Tender or package for a project" },
  { value: "programme", label: "Planned programme (housing / estate)" },
  { value: "electrics", label: "Excel Electrics enquiry" },
  { value: "other", label: "Something else" },
] as const;

/** Kept as a plain list so the client form does not bundle the full services content. Slugs match lib/services.ts. */
export const enquiryServiceOptions = [
  { value: "passive-fire-protection", label: "Passive Fire Protection" },
  { value: "fire-door-installation", label: "Fire Door Installation" },
  { value: "fire-door-maintenance", label: "Fire Door Maintenance" },
  { value: "fire-door-inspections", label: "Fire Door Inspections" },
  { value: "fire-stopping-inspections", label: "Fire Stopping Inspections" },
  { value: "validation-surveys", label: "Validation Surveys" },
  { value: "injectaclad", label: "Injectaclad" },
  { value: "active-fire-systems", label: "Active Fire Systems" },
  { value: "not-sure", label: "Not sure yet" },
];

export type EnquiryField = "name" | "email" | "phone" | "company" | "postcode" | "service" | "type" | "message" | "consent";

export type EnquiryState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<EnquiryField, string>>;
  values?: Partial<Record<EnquiryField, string>>;
};

export const initialEnquiryState: EnquiryState = { status: "idle" };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEnquiry(values: Partial<Record<EnquiryField, string>>) {
  const errors: Partial<Record<EnquiryField, string>> = {};
  if (!values.name?.trim()) errors.name = "Enter your name.";
  if (!values.email?.trim()) errors.email = "Enter your email address.";
  else if (!EMAIL.test(values.email.trim())) errors.email = "Enter an email address like name@company.co.uk.";
  if (values.phone && values.phone.replace(/[^\d]/g, "").length < 10) errors.phone = "Enter a phone number with at least 10 digits.";
  if (!values.message?.trim() || values.message.trim().length < 10)
    errors.message = "Tell us a little about the building or project (at least 10 characters).";
  if (values.consent !== "yes") errors.consent = "Tick the box so we can reply to you.";
  return errors;
}
