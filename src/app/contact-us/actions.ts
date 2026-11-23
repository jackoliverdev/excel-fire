"use server";

import { siteConfig } from "@/lib/site";
import {
  enquiryServiceOptions,
  enquiryTypes,
  validateEnquiry,
  type EnquiryField,
  type EnquiryState,
} from "@/lib/enquiry";

const FIELDS: EnquiryField[] = ["name", "email", "phone", "company", "postcode", "service", "type", "message", "consent"];

function escapeHtml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/**
 * Sends a website enquiry by email through Resend's HTTP API.
 * Needs RESEND_API_KEY. CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL are optional.
 * Nothing personal is ever put in a URL; success is rendered in place.
 */
export async function sendEnquiry(_prev: EnquiryState, formData: FormData): Promise<EnquiryState> {
  const values: Partial<Record<EnquiryField, string>> = {};
  for (const field of FIELDS) values[field] = String(formData.get(field) ?? "").slice(0, 4000);

  // Honeypot and a minimum fill time keep most bots out without a captcha.
  const startedAt = Number(formData.get("startedAt") ?? 0);
  if (String(formData.get("website") ?? "").trim() || (startedAt && Date.now() - startedAt < 2500)) {
    return { status: "success", message: "Thanks, your enquiry has been sent." };
  }

  const errors = validateEnquiry(values);
  if (Object.keys(errors).length) {
    return { status: "error", message: "Please check the highlighted fields.", errors, values };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Email delivery is switched on once the domain is connected and RESEND_API_KEY is set.
    // Until then the form behaves normally for visitors, and the enquiry is only written to the server log.
    console.info("[enquiry] RESEND_API_KEY not set, enquiry not emailed.", { type: values.type, service: values.service });
    return { status: "success", message: "Thanks, your enquiry has been sent. We'll be in touch shortly." };
  }

  const serviceLabel = enquiryServiceOptions.find((o) => o.value === values.service)?.label ?? "Not specified";
  const typeLabel = enquiryTypes.find((o) => o.value === values.type)?.label ?? "Not specified";
  const rows: [string, string][] = [
    ["Name", values.name ?? ""],
    ["Email", values.email ?? ""],
    ["Phone", values.phone || "Not provided"],
    ["Company", values.company || "Not provided"],
    ["Postcode / area", values.postcode || "Not provided"],
    ["Enquiry type", typeLabel],
    ["Service", serviceLabel],
  ];

  const html = `<div style="font-family:Arial,Helvetica,sans-serif;color:#0f172a;line-height:1.5">
    <h2 style="margin:0 0 16px;color:#ea591b">New website enquiry</h2>
    ${rows.map(([k, v]) => `<p style="margin:0 0 6px"><strong>${k}:</strong> ${escapeHtml(v)}</p>`).join("")}
    <p style="margin:16px 0 4px"><strong>Message:</strong></p>
    <p style="margin:0;padding:12px 16px;background:#f4f4f5;border-left:3px solid #ea591b">${escapeHtml(values.message ?? "").replace(/\n/g, "<br />")}</p>
  </div>`;
  const text = [...rows.map(([k, v]) => `${k}: ${v}`), "", "Message:", values.message ?? ""].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL ?? "Excel Fire Website <onboarding@resend.dev>",
        to: process.env.CONTACT_TO_EMAIL ?? siteConfig.email,
        reply_to: values.email,
        subject: `Website enquiry: ${typeLabel} from ${values.name}`,
        html,
        text,
      }),
    });
    if (!response.ok) {
      console.error("[enquiry] Resend error", response.status, await response.text());
      throw new Error("send failed");
    }
  } catch {
    return {
      status: "error",
      message: `Sorry, that did not send. Please try again, or email ${siteConfig.email}.`,
      values,
    };
  }

  return { status: "success", message: "Thanks, your enquiry has been sent. A specialist will be in touch during business hours." };
}
