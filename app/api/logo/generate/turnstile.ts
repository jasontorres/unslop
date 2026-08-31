import { workerBinding } from "./rate-limit";

const SITEVERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const LOCAL_TEST_SECRET = "1x0000000000000000000000000000000AA";
export const turnstileAction = "logo_generate";

type TurnstileResponse = {
  success?: boolean;
  hostname?: string;
  action?: string;
  "error-codes"?: string[];
};

export type TurnstileResult =
  | { ok: true }
  | { ok: false; status: 403 | 503; error: string; reason: string };

function cleanToken(value: unknown) {
  return typeof value === "string" && value.length <= 2048 ? value.trim() : "";
}

export async function validateTurnstile(request: Request, value: unknown): Promise<TurnstileResult> {
  const token = cleanToken(value);
  if (!token) {
    return { ok: false, status: 403, error: "Complete the security check before creating a logo.", reason: "missing-token" };
  }

  const requestHostname = new URL(request.url).hostname;
  const localRequest = requestHostname === "localhost" || requestHostname === "127.0.0.1" || requestHostname === "0.0.0.0";
  const secret = localRequest
    ? LOCAL_TEST_SECRET
    : await workerBinding<string>("TURNSTILE_SECRET") || process.env.TURNSTILE_SECRET;
  if (!secret) {
    return { ok: false, status: 503, error: "Logo creation is temporarily unavailable.", reason: "missing-secret" };
  }

  const form = new URLSearchParams({
    secret,
    response: token,
    idempotency_key: crypto.randomUUID(),
  });
  const remoteAddress = request.headers.get("cf-connecting-ip")?.trim();
  if (remoteAddress) form.set("remoteip", remoteAddress);

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);
  let response: Response;
  try {
    response = await fetch(SITEVERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: form,
      signal: controller.signal,
    });
  } catch (error) {
    console.warn("Turnstile verification unavailable", error instanceof Error ? error.name : "unknown-error");
    return { ok: false, status: 503, error: "The security check is temporarily unavailable. Try again shortly.", reason: "verify-unavailable" };
  } finally {
    clearTimeout(timeout);
  }

  if (!response.ok) {
    console.warn("Turnstile verification HTTP failure", response.status);
    return { ok: false, status: 503, error: "The security check is temporarily unavailable. Try again shortly.", reason: "verify-http-error" };
  }

  const payload = await response.json() as TurnstileResponse;
  const expectedHostname = requestHostname;
  if (!payload.success || payload.hostname !== expectedHostname || payload.action !== turnstileAction) {
    console.warn("Turnstile verification rejected", {
      success: Boolean(payload.success),
      hostnameMatch: payload.hostname === expectedHostname,
      actionMatch: payload.action === turnstileAction,
      errorCodes: payload["error-codes"] ?? [],
    });
    return { ok: false, status: 403, error: "The security check expired or was rejected. Please try again.", reason: "verify-rejected" };
  }

  return { ok: true };
}
