/** Cloudflare Worker entry point for unslop.site. */
import handler from "vinext/server/app-router-entry";

type AppHandler = {
  fetch(request: Request, environment: Record<string, unknown>, context: unknown): Promise<Response>;
};

type WorkerGlobal = typeof globalThis & {
  __UNSLOP_WORKER_ENV__?: Record<string, unknown>;
};

const appHandler = handler as unknown as AppHandler;

const worker = {
  fetch(request: Request, environment: Record<string, unknown>, context: unknown) {
    (globalThis as WorkerGlobal).__UNSLOP_WORKER_ENV__ = environment;
    return appHandler.fetch(request, environment, context);
  },
};

export default worker;
