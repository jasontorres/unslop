import Link from "next/link";
import { LogoWaitlistForm } from "./waitlist-form";

export function LogoTrialEnded() {
  return (
    <main className="logo-maker-page logo-closed-page">
      <header className="topbar logo-topbar">
        <Link href="/" className="brand" aria-label="unslop.site home">
          <span className="brand-mark">u.</span>
          <span>unslop.site</span>
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          <Link href="/">Gallery</Link>
          <Link href="/logo" className="active" aria-current="page">Logo Maker</Link>
          <Link href="/logo/gallery">Logo Gallery</Link>
          <Link href="/logo/history">History</Link>
        </nav>
        <p className="topbar-context">We’ll be back</p>
      </header>

      <aside className="logo-closed-announcement" aria-label="Logo Maker availability">
        <span><i aria-hidden="true" /> Trial complete</span>
        <p>The Logo Maker trial has officially ended. Thanks for an incredible first run.</p>
        <strong>We’ll be back <b aria-hidden="true">✦</b></strong>
      </aside>

      <section className="logo-closed-hero">
        <span className="logo-closed-orbit logo-closed-orbit-one" aria-hidden="true">◇</span>
        <span className="logo-closed-orbit logo-closed-orbit-two" aria-hidden="true">✦</span>
        <div className="logo-closed-copy">
          <p className="logo-closed-kicker">The comeback is already cooking</p>
          <h1>Hold that idea.<br /><em>We’re not done yet.</em></h1>
          <p className="logo-closed-lede">
            We’re sharpening what comes next and turning up the creative power.
            The Logo Maker will return—bolder, brighter, and ready for another round.
          </p>
          <LogoWaitlistForm />
          <div className="logo-closed-actions">
            <Link className="logo-closed-history-link" href="/logo/history">
              Browse your history <span aria-hidden="true">→</span>
            </Link>
            <Link className="logo-closed-gallery-link" href="/">
              Explore the design gallery <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="logo-closed-card" aria-hidden="true">
          <span className="logo-closed-card-label">Status / recharging</span>
          <div className="logo-closed-mark"><i>u.</i><b>✦</b></div>
          <p>Next<br />drop</p>
          <strong>Coming soon<span>!</span></strong>
          <small>Stay curious · Stay tuned</small>
        </div>
      </section>
    </main>
  );
}
