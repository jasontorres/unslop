import { NextResponse } from "next/server";
import { addWaitlistEntry } from "./storage";

export const runtime = "edge";

type WaitlistBody = {
  email?: unknown;
  website?: unknown;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizedEmail(value: unknown) {
  if (typeof value !== "string") return "";
  return value.trim().toLowerCase();
}

function json(payload: Record<string, unknown>, status = 200) {
  return NextResponse.json(payload, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as WaitlistBody;
    const email = normalizedEmail(body.email);

    if (!email || email.length > 254 || !EMAIL_PATTERN.test(email)) {
      return json({ error: "Enter a valid email address." }, 400);
    }

    // A filled honeypot is treated like a successful signup without writing it.
    if (typeof body.website === "string" && body.website.trim()) {
      return json({ ok: true });
    }

    await addWaitlistEntry(email);
    return json({ ok: true });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return json({ error: "Send a valid JSON request." }, 400);
    }
    console.error("Waitlist signup error", error instanceof Error ? error.message : error);
    return json({ error: "We couldn’t join the waitlist right now. Please try again." }, 503);
  }
}
