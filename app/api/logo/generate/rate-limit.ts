const BROWSER_COOKIE_NAME = "unslop_logo_browser";
const BROWSER_GENERATION_LIMIT = 10;
const DAILY_GENERATION_LIMIT = 2_000;
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

const createDailyBudgetTable = `
  CREATE TABLE IF NOT EXISTS logo_daily_generation_budget (
    budget_day TEXT PRIMARY KEY
      CHECK (length(budget_day) = 10),
    generation_count INTEGER NOT NULL DEFAULT 0
      CHECK (generation_count >= 0),
    updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
  )
`;

export type BrowserIdentity = {
  id: string;
  setCookie?: string;
};

export type DailyGenerationReservation = {
  allowed: boolean;
  budgetDay: string;
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

function isMissingDailyBudgetTable(error: unknown) {
  return /no such table:\s*logo_daily_generation_budget/i.test(databaseErrorMessage(error));
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

async function ensureDailyBudgetSchema(database: D1Database) {
  const result = await database.prepare(createDailyBudgetTable).run();
  if (!result.success) {
    throw new Error(result.error || "D1 could not create the daily logo generation budget table.");
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

async function insertDailyReservation(database: D1Database, budgetDay: string) {
  return database
    .prepare(`
      INSERT INTO logo_daily_generation_budget (budget_day, generation_count)
      VALUES (?, 1)
      ON CONFLICT(budget_day) DO UPDATE SET
        generation_count = logo_daily_generation_budget.generation_count + 1,
        updated_at = strftime('%Y-%m-%dT%H:%M:%fZ', 'now')
      WHERE logo_daily_generation_budget.generation_count < ?
    `)
    .bind(budgetDay, DAILY_GENERATION_LIMIT)
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

function bytesToHex(bytes: ArrayBuffer) {
  return Array.from(new Uint8Array(bytes), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

function hexToBytes(value: string) {
  if (!/^[0-9a-f]{64}$/i.test(value)) return null;
  const bytes = new Uint8Array(value.length / 2);
  for (let index = 0; index < value.length; index += 2) {
    bytes[index / 2] = Number.parseInt(value.slice(index, index + 2), 16);
  }
  return bytes;
}

function isLocalHostname(hostname: string) {
  return hostname === "localhost" || hostname === "127.0.0.1" || hostname === "0.0.0.0";
}

async function browserSigningKey(request: Request) {
  const configuredSecret = await workerBinding<string>("BROWSER_ID_SECRET") || process.env.BROWSER_ID_SECRET;
  const secret = configuredSecret || (isLocalHostname(new URL(request.url).hostname)
    ? "unslop-local-development-browser-signing-key"
    : "");
  if (!secret) throw new Error("Browser identity signing is not configured.");
  return crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"],
  );
}

async function signBrowserId(id: string, request: Request) {
  const signature = await crypto.subtle.sign("HMAC", await browserSigningKey(request), new TextEncoder().encode(id));
  return bytesToHex(signature);
}

async function verifiedBrowserId(value: string, request: Request) {
  const separator = value.lastIndexOf(".");
  if (separator < 0) return "";
  const id = value.slice(0, separator);
  const signature = hexToBytes(value.slice(separator + 1));
  if (!isBrowserId(id) || !signature) return "";
  const valid = await crypto.subtle.verify(
    "HMAC",
    await browserSigningKey(request),
    signature,
    new TextEncoder().encode(id),
  );
  return valid ? id : "";
}

export async function browserIdentity(request: Request): Promise<BrowserIdentity> {
  const existingId = await verifiedBrowserId(cookieValue(request, BROWSER_COOKIE_NAME), request);
  if (existingId) return { id: existingId };

  const id = crypto.randomUUID();
  const signedId = `${id}.${await signBrowserId(id, request)}`;
  return {
    id,
    setCookie: `${BROWSER_COOKIE_NAME}=${encodeURIComponent(signedId)}; Path=/; Max-Age=${BROWSER_COOKIE_MAX_AGE}; HttpOnly; Secure; SameSite=Strict`,
  };
}

export async function generationRateAllowed(request: Request, browserId: string) {
  const [clientLimiter, sharedLimiter] = await Promise.all([
    workerBinding<RateLimiter>("LOGO_GENERATION_CLIENT_RATE_LIMITER"),
    workerBinding<RateLimiter>("LOGO_GENERATION_RATE_LIMITER"),
  ]);
  if (!clientLimiter || !sharedLimiter) throw new Error("Logo generation rate limiter is not configured.");

  const clientAddress = request.headers.get("cf-connecting-ip")?.trim() || browserId;
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(clientAddress));
  const clientKey = `client:${bytesToHex(digest)}`;
  const clientResult = await clientLimiter.limit({ key: clientKey });
  if (!clientResult.success) return { allowed: false, scope: "client" as const };

  const sharedResult = await sharedLimiter.limit({ key: "logo-generation" });
  return sharedResult.success
    ? { allowed: true, scope: "shared" as const }
    : { allowed: false, scope: "shared" as const };
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

export async function reserveDailyGeneration(): Promise<DailyGenerationReservation> {
  const database = await generationDatabase();
  const budgetDay = new Date().toISOString().slice(0, 10);
  let result: D1Result;

  try {
    result = await insertDailyReservation(database, budgetDay);
  } catch (error) {
    if (!isMissingDailyBudgetTable(error)) throw error;
    await ensureDailyBudgetSchema(database);
    result = await insertDailyReservation(database, budgetDay);
  }

  if (!result.success && isMissingDailyBudgetTable(result.error)) {
    await ensureDailyBudgetSchema(database);
    result = await insertDailyReservation(database, budgetDay);
  }

  if (!result.success) {
    throw new Error(result.error || "D1 could not reserve the daily logo generation budget.");
  }

  return { allowed: (result.meta?.changes ?? 0) > 0, budgetDay };
}

export async function releaseDailyGeneration(budgetDay: string) {
  const database = await generationDatabase();
  const result = await database
    .prepare(`
      UPDATE logo_daily_generation_budget
      SET
        generation_count = generation_count - 1,
        updated_at = strftime('%Y-%m-%dT%H:%M:%fZ', 'now')
      WHERE budget_day = ? AND generation_count > 0
    `)
    .bind(budgetDay)
    .run();

  if (!result.success) {
    throw new Error(result.error || "D1 could not release the daily logo generation budget.");
  }
}

export const browserGenerationLimit = BROWSER_GENERATION_LIMIT;
export const dailyGenerationLimit = DAILY_GENERATION_LIMIT;
