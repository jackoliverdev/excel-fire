"use client";

import Link from "next/link";
import { useActionState, useEffect, useRef } from "react";
import { sendEnquiry } from "@/app/contact-us/actions";
import {
  enquiryServiceOptions,
  enquiryTypes,
  initialEnquiryState,
  type EnquiryField,
} from "@/lib/enquiry";

const inputBase =
  "w-full rounded-md border bg-transparent px-4 py-3 text-base text-foreground outline-none transition placeholder:text-[var(--text-muted)]/70 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/25 sm:text-sm";

function Field({
  id,
  label,
  optional,
  error,
  children,
}: {
  id: EnquiryField;
  label: string;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-foreground">
        {label} {optional ? <span className="font-normal text-[var(--text-muted)]">(optional)</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="text-sm font-medium text-red-600 dark:text-red-400">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendEnquiry, initialEnquiryState);
  const startedRef = useRef<HTMLInputElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const errors = state.errors ?? {};
  const values = state.values ?? {};

  useEffect(() => {
    if (startedRef.current) startedRef.current.value = String(Date.now());
  }, [state]);

  useEffect(() => {
    if (state.status !== "idle") statusRef.current?.focus();
  }, [state]);

  const fieldClass = (field: EnquiryField) =>
    `${inputBase} ${errors[field] ? "border-red-500" : "border-[var(--border)]"}`;
  const describedBy = (field: EnquiryField) => (errors[field] ? `${field}-error` : undefined);

  if (state.status === "success") {
    return (
      <div ref={statusRef} tabIndex={-1} role="status" className="rounded-xl border border-green-600/30 bg-green-600/5 p-6 outline-none">
        <p className="text-lg font-semibold text-foreground">Enquiry sent</p>
        <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="flex flex-col gap-4" key={state.status === "error" ? "retry" : "fresh"}>
      {state.status === "error" ? (
        <div ref={statusRef} tabIndex={-1} role="alert" className="rounded-md border border-red-500/40 bg-red-500/5 p-4 text-sm font-medium text-foreground outline-none">
          {state.message}
        </div>
      ) : null}

      <input ref={startedRef} type="hidden" name="startedAt" defaultValue="0" />
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="name" label="Full name" error={errors.name}>
          <input id="name" name="name" type="text" autoComplete="name" defaultValue={values.name} aria-invalid={!!errors.name} aria-describedby={describedBy("name")} className={fieldClass("name")} />
        </Field>
        <Field id="company" label="Company" optional>
          <input id="company" name="company" type="text" autoComplete="organization" defaultValue={values.company} className={fieldClass("company")} />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="email" label="Email address" error={errors.email}>
          <input id="email" name="email" type="email" autoComplete="email" inputMode="email" defaultValue={values.email} aria-invalid={!!errors.email} aria-describedby={describedBy("email")} className={fieldClass("email")} />
        </Field>
        <Field id="phone" label="Phone number" optional error={errors.phone}>
          <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" defaultValue={values.phone} aria-invalid={!!errors.phone} aria-describedby={describedBy("phone")} className={fieldClass("phone")} />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="type" label="What is this about?" optional>
          <select id="type" name="type" defaultValue={values.type ?? ""} className={fieldClass("type")}>
            <option value="">Choose one</option>
            {enquiryTypes.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>
        <Field id="service" label="Service" optional>
          <select id="service" name="service" defaultValue={values.service ?? ""} className={fieldClass("service")}>
            <option value="">Choose a service</option>
            {enquiryServiceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field id="postcode" label="Building postcode or area" optional>
        <input id="postcode" name="postcode" type="text" autoComplete="postal-code" defaultValue={values.postcode} className={fieldClass("postcode")} />
      </Field>

      <Field id="message" label="Message" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={5}
          defaultValue={values.message}
          aria-invalid={!!errors.message}
          aria-describedby={describedBy("message")}
          className={`min-h-[140px] ${fieldClass("message")}`}
          placeholder="The building, how many doors or floors, and when you need it done."
        />
      </Field>

      <div className="space-y-1.5">
        <label className="flex items-start gap-3 text-sm leading-6 text-[var(--text-muted)]">
          <input
            type="checkbox"
            name="consent"
            value="yes"
            defaultChecked={values.consent === "yes"}
            aria-invalid={!!errors.consent}
            aria-describedby={describedBy("consent")}
            className="mt-1 h-4 w-4 shrink-0 accent-[var(--brand-accent)]"
          />
          <span>
            I agree to Excel Fire using these details to reply to my enquiry, as set out in the{" "}
            <Link href="/legal/privacy-policy" className="font-semibold text-foreground underline underline-offset-4">
              privacy policy
            </Link>
            .
          </span>
        </label>
        {errors.consent ? (
          <p id="consent-error" className="text-sm font-medium text-red-600 dark:text-red-400">
            {errors.consent}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full items-center justify-center rounded-md bg-brand-accent px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-60 sm:w-auto sm:self-start"
      >
        {pending ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
