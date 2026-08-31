export type RequestSecurityFailure = {
  status: 403 | 415;
  error: string;
  reason: string;
};

function originOf(value: string) {
  try {
    return new URL(value).origin;
  } catch {
    return "";
  }
}

export function requestSecurityFailure(request: Request): RequestSecurityFailure | null {
  const contentType = request.headers.get("content-type")?.split(";", 1)[0].trim().toLowerCase();
  if (contentType !== "application/json") {
    return {
      status: 415,
      error: "Logo creation only accepts JSON requests from unslop.site.",
      reason: "invalid-content-type",
    };
  }

  const fetchSite = request.headers.get("sec-fetch-site")?.trim().toLowerCase();
  if (fetchSite && fetchSite !== "same-origin") {
    return {
      status: 403,
      error: "This request must come from unslop.site.",
      reason: "cross-site-fetch",
    };
  }

  const expectedOrigin = new URL(request.url).origin;
  const origin = request.headers.get("origin");
  if (origin) {
    if (originOf(origin) === expectedOrigin) return null;
    return {
      status: 403,
      error: "This request must come from unslop.site.",
      reason: "origin-mismatch",
    };
  }

  const referer = request.headers.get("referer");
  if (referer && originOf(referer) === expectedOrigin) return null;
  return {
    status: 403,
    error: "This request must come from unslop.site.",
    reason: referer ? "referer-mismatch" : "missing-origin",
  };
}
