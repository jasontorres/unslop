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

const createGenerationLimitsTable = `
  CREATE TABLE IF NOT EXISTS logo_browser_generation_limits (
    browser_id TEXT PRIMARY KEY
      CHECK (length(browser_id) = 36),
    generation_count INTEGER NOT NULL DEFAULT 0
      CHECK (generation_count BETWEEN 0 AND 10),
    created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
    updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
  )
`;

const createGenerationLimitsIndex = `
  CREATE INDEX IF NOT EXISTS logo_browser_generation_limits_updated_at_idx
    ON logo_browser_generation_limits (updated_at)
`;

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

function databaseErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return typeof error === "string" ? error : "";
}

function isMissingGenerationLimitsTable(error: unknown) {
  return /no such table:\s*logo_browser_generation_limits/i.test(databaseErrorMessage(error));
}

async function ensureGenerationLimitsSchema(database: D1Database) {
  const tableResult = await database.prepare(createGenerationLimitsTable).run();
  if (!tableResult.success) {
    throw new Error(tableResult.error || "D1 could not create the logo generation limit table.");
  }

  const indexResult = await database.prepare(createGenerationLimitsIndex).run();
  if (!indexResult.success) {
    throw new Error(indexResult.error || "D1 could not create the logo generation limit index.");
  }
}

async function insertGenerationReservation(database: D1Database, browserId: string) {
  return database
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
  let result: D1Result;

  try {
    result = await insertGenerationReservation(database, browserId);
  } catch (error) {
    if (!isMissingGenerationLimitsTable(error)) throw error;
    await ensureGenerationLimitsSchema(database);
    result = await insertGenerationReservation(database, browserId);
  }

  if (!result.success && isMissingGenerationLimitsTable(result.error)) {
    await ensureGenerationLimitsSchema(database);
    result = await insertGenerationReservation(database, browserId);
  }

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
