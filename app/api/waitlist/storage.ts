type D1Result = {
  success: boolean;
  error?: string;
};

type D1PreparedStatement = {
  bind(...values: Array<string | number | null>): D1PreparedStatement;
  run(): Promise<D1Result>;
};

type D1Database = {
  prepare(query: string): D1PreparedStatement;
};

type WorkerGlobal = typeof globalThis & {
  __UNSLOP_WORKER_ENV__?: Record<string, unknown>;
};

async function getWaitlistDatabase() {
  const workerEnvironment = (globalThis as WorkerGlobal).__UNSLOP_WORKER_ENV__;
  const workerDatabase = workerEnvironment?.DB as D1Database | undefined;
  if (workerDatabase) return workerDatabase;

  const { env } = await import("cloudflare:workers");
  const database = env.DB as D1Database | undefined;
  if (!database) throw new Error("DB D1 binding is not configured.");
  return database;
}

export async function addWaitlistEntry(email: string) {
  const database = await getWaitlistDatabase();
  const result = await database
    .prepare(`
      INSERT INTO waitlist_entries (email, source)
      VALUES (?, ?)
      ON CONFLICT(email) DO NOTHING
    `)
    .bind(email, "logo-maker")
    .run();

  if (!result.success) {
    throw new Error(result.error || "D1 could not save the waitlist entry.");
  }
}
