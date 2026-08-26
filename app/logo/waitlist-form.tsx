"use client";

import { FormEvent, useState } from "react";

type SubmissionState = "idle" | "submitting" | "success" | "error";

export function LogoWaitlistForm() {
  const [email, setEmail] = useState("");
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmissionState("submitting");
    setMessage("");

    const form = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          website: form.get("website"),
        }),
      });
      const payload = await response.json() as { error?: string };
      if (!response.ok) throw new Error(payload.error || "We couldn’t join the waitlist right now.");

      setSubmissionState("success");
      setMessage("You’re on the list. We’ll email you when the Logo Maker returns.");
    } catch (error) {
      setSubmissionState("error");
      setMessage(error instanceof Error ? error.message : "We couldn’t join the waitlist right now.");
    }
  }

  return (
    <div className="logo-waitlist">
      <p><strong>Be first in line.</strong> Join the waitlist for the next Logo Maker release.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="waitlist-email">Email address</label>
        <div className="logo-waitlist-fields">
          <input
            id="waitlist-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              if (submissionState !== "idle") {
                setSubmissionState("idle");
                setMessage("");
              }
            }}
            maxLength={254}
            disabled={submissionState === "submitting" || submissionState === "success"}
            required
          />
          <input className="logo-waitlist-honeypot" name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <button type="submit" disabled={submissionState === "submitting" || submissionState === "success" || !email.trim()}>
            {submissionState === "submitting" ? "Joining…" : submissionState === "success" ? "Joined ✓" : "Join waitlist"}
          </button>
        </div>
        {message ? (
          <p className={`logo-waitlist-message is-${submissionState}`} role={submissionState === "error" ? "alert" : "status"}>
            {message}
          </p>
        ) : (
          <small>Only launch updates. No spam.</small>
        )}
      </form>
    </div>
  );
}
