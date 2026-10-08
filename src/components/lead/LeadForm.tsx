"use client";

import { useId, useState, type FormEvent } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  "AI agents & automation",
  "Chatbot, voicebot or WhatsApp automation",
  "Website or web app",
  "E-commerce store",
  "SaaS product",
  "Mobile app",
  "CRM or ERP system",
  "Custom software",
  "Not sure yet",
];

/** Set once a lead goes through, so the welcome popup stops asking. */
export const LEAD_SENT_KEY = "nexopsdev-lead-sent";

type Status = "idle" | "sending" | "sent" | "error";

interface LeadFormProps {
  /** Where on the page this form lives — recorded with the lead in the sheet. */
  source: string;
  submitLabel?: string;
  className?: string;
}

export default function LeadForm({
  source,
  submitLabel = "Send my enquiry",
  className,
}: LeadFormProps) {
  const id = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const fields = Object.fromEntries(new FormData(e.currentTarget));
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...fields,
          source,
          page: window.location.href,
        }),
      });
      const data = (await res.json().catch(() => null)) as {
        error?: string;
      } | null;
      if (!res.ok) throw new Error(data?.error);

      try {
        localStorage.setItem(LEAD_SENT_KEY, "1");
      } catch {
        // Storage blocked — the lead is saved, the popup may just show again.
      }
      setStatus("sent");
    } catch (err) {
      setError(
        (err instanceof Error && err.message) ||
          "Something went wrong. Please try again or email us directly."
      );
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className={cn(
          "flex flex-col items-center gap-4 py-10 text-center",
          className
        )}
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-on-accent">
          <Check className="h-5 w-5" />
        </span>
        <p className="font-display type-h3 text-ink">Thanks — we&apos;ve got it.</p>
        <p className="max-w-xs text-sm text-muted">
          We&apos;ll be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={cn("grid gap-4 text-left", className)}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-name`} className="field-label">
            Name
          </label>
          <input
            id={`${id}-name`}
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            className="field"
          />
        </div>
        <div>
          <label htmlFor={`${id}-email`} className="field-label">
            Email
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className="field"
          />
        </div>
        <div>
          <label htmlFor={`${id}-phone`} className="field-label">
            Phone <span className="text-faint">(optional)</span>
          </label>
          <input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 98765 43210"
            className="field"
          />
        </div>
        <div>
          <label htmlFor={`${id}-service`} className="field-label">
            What do you need?
          </label>
          <select
            id={`${id}-service`}
            name="service"
            defaultValue=""
            className="field"
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor={`${id}-message`} className="field-label">
          About your project <span className="text-faint">(optional)</span>
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          rows={3}
          placeholder="A sentence or two is plenty."
          className="field resize-none py-3"
        />
      </div>

      {/* Honeypot: hidden from people, irresistible to bots. */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      {status === "error" && (
        <p role="alert" className="text-sm text-red-600">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn btn-primary group mt-1 w-full disabled:opacity-70"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            {submitLabel}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </>
        )}
      </button>
    </form>
  );
}
