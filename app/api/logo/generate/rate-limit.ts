const BROWSER_COOKIE_NAME = "unslop_logo_browser";
const BROWSER_GENERATION_LIMIT = 10;
const BROWSER_COOKIE_MAX_AGE = 60 * 60 * 24 * 400;

type D1Result = {
  success: boolean;
  error?: string;
  meta?: { changes?: number };
};

type D1PreparedStatement = {
  bind(...values: Array<string | number | null>): D1PreparedStatement;
  run(): Promise<D1Result>;
};

type D1Database = {
  prepare(query: string): D1PreparedStatement;
};

type RateLimiter = {
  limit(options: { key: string }): Promise<{ success: boolean }>;
};

type WorkerGlobal = typeof globalThis & {
  __UNSLOP_WORKER_ENV__?: Record<string, unknown>;
};

export type BrowserIdentity = {
  id: string;
  setCookie?: string;
};

export async function workerBinding<T>(name: string) {
  const workerEnvironment = (globalThis as WorkerGlobal).__UNSLOP_WORKER_ENV__;
  const injectedBinding = workerEnvironment?.[name] as T | undefined;
  if (injectedBinding) return injectedBinding;

  const { env } = await import("cloudflare:workers");
  return env[name] as T | undefined;
}

async function generationDatabase() {
  const database = await workerBinding<D1Database>("DB");
  if (!database) throw new Error("DB D1 binding is not configured.");
  return database;
}

function cookieValue(request: Request, name: string) {
  const cookies = request.headers.get("cookie") ?? "";
  for (const part of cookies.split(";")) {
    const separator = part.indexOf("=");
    if (separator < 0) continue;
    if (part.slice(0, separator).trim() === name) {
      return decodeURIComponent(part.slice(separator + 1).trim());
    }
  }
  return "";
}

function isBrowserId(value: string) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}

export function browserIdentity(request: Request): BrowserIdentity {
  const existingId = cookieValue(request, BROWSER_COOKIE_NAME);
  if (isBrowserId(existingId)) return { id: existingId };

  const id = crypto.randomUUID();
  return {
    id,
    setCookie: `${BROWSER_COOKIE_NAME}=${encodeURIComponent(id)}; Path=/; Max-Age=${BROWSER_COOKIE_MAX_AGE}; HttpOnly; Secure; SameSite=Lax`,
  };
}

export async function reserveBrowserGeneration(browserId: string) {
  const database = await generationDatabase();
  const result = await database
    .prepare(`
      INSERT INTO logo_browser_generation_limits (browser_id, generation_count)
      VALUES (?, 1)
      ON CONFLICT(browser_id) DO UPDATE SET
        generation_count = logo_browser_generation_limits.generation_count + 1,
        updated_at = strftime('%Y-%m-%dT%H:%M:%fZ', 'now')
      WHERE logo_browser_generation_limits.generation_count < ?
    `)
    .bind(browserId, BROWSER_GENERATION_LIMIT)
    .run();

  if (!result.success) {
    throw new Error(result.error || "D1 could not reserve a logo generation.");
  }

  return (result.meta?.changes ?? 0) > 0;
}

export async function releaseBrowserGeneration(browserId: string) {
  const database = await generationDatabase();
  const result = await database
    .prepare(`
      UPDATE logo_browser_generation_limits
      SET
        generation_count = generation_count - 1,
        updated_at = strftime('%Y-%m-%dT%H:%M:%fZ', 'now')
      WHERE browser_id = ? AND generation_count > 0
    `)
    .bind(browserId)
    .run();

  if (!result.success) {
    throw new Error(result.error || "D1 could not release a logo generation.");
  }
}

export async function overallGenerationAllowed() {
  const limiter = await workerBinding<RateLimiter>("LOGO_GENERATION_RATE_LIMITER");
  if (!limiter) throw new Error("Logo generation rate limiter is not configured.");
  const result = await limiter.limit({ key: "logo-generation" });
  return result.success;
}

export const browserGenerationLimit = BROWSER_GENERATION_LIMIT;
