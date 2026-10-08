import { NextResponse } from "next/server";

/**
 * Receives a lead from the site and appends it to the Google Sheet through an
 * Apps Script web app (see scripts/google-sheets-lead-webhook.gs). The webhook
 * URL stays on the server so it can't be scraped and spammed from the client.
 */

const WEBHOOK_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
const WEBHOOK_SECRET = process.env.GOOGLE_SHEETS_WEBHOOK_SECRET ?? "";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function text(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — real visitors never see or fill this field. Answer as if it
  // worked so bots don't learn to leave it blank.
  if (text(body.company_website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const lead = {
    name: text(body.name, 120),
    email: text(body.email, 200),
    phone: text(body.phone, 40),
    service: text(body.service, 80),
    message: text(body.message, 2000),
    source: text(body.source, 60),
    page: text(body.page, 300),
  };

  if (!lead.name || !EMAIL.test(lead.email)) {
    return NextResponse.json(
      { error: "Please enter your name and a valid email address." },
      { status: 400 }
    );
  }

  if (!WEBHOOK_URL) {
    console.error("Lead not stored: GOOGLE_SHEETS_WEBHOOK_URL is not set.", lead);
    return NextResponse.json(
      { error: "We couldn't save your details. Please email us directly." },
      { status: 503 }
    );
  }

  try {
    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...lead, secret: WEBHOOK_SECRET }),
      signal: AbortSignal.timeout(10_000),
    });
    // Apps Script answers 200 even when the script throws, so trust its body.
    const result = (await res.json().catch(() => null)) as { ok?: boolean } | null;
    if (!res.ok || !result?.ok) {
      throw new Error(`Sheet webhook answered ${res.status}`);
    }
  } catch (err) {
    console.error("Lead not stored: sheet webhook failed.", err, lead);
    return NextResponse.json(
      { error: "We couldn't save your details. Please email us directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
