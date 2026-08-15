export const LOGO_ACCESS_PARAM = "letmein";
export const LOGO_ACCESS_KEY = "please";

export const LOGO_TRIAL_ENDED_MESSAGE =
  "The Logo Maker trial has ended for now. We’ll be back—watch for the next announcement!";

export function isLogoAccessKey(value?: string) {
  return value === LOGO_ACCESS_KEY;
}

export function hasLogoApiAccess(request: Request) {
  return isLogoAccessKey(new URL(request.url).searchParams.get(LOGO_ACCESS_PARAM) ?? undefined);
}

export function logoAccessDeniedResponse() {
  return Response.json(
    { error: LOGO_TRIAL_ENDED_MESSAGE },
    {
      status: 403,
      headers: { "Cache-Control": "no-store" },
    },
  );
}
