// Animated heroes — kinetic elements: rotating type, marquees, orbiting
// badges, and neon glitch. Foreground motion rather than backdrop motion.

const KW = 1280;
const KH = 800;

// ─────────────────────────────────────────────────────────────────────────────
// 05. VELLUM — documentation tool, kinetic type rotator + live editor mock
// ─────────────────────────────────────────────────────────────────────────────
function HeroVellum() {
  const ink = '#17161c';
  const accent = '#5148e6';
  const words = ['answer.', 'onboard.', 'convert.', 'ship.', 'answer.'];
  return (
    <div style={{ width: KW, height: KH, background: '#fbfaf7', color: ink, position: 'relative', overflow: 'hidden', fontFamily: '"Inter Tight", sans-serif', display: 'flex', flexDirection: 'column' }}>
      <style>{`
        @keyframes vel-rotate {
          0%, 20% { transform: translateY(0); }
          25%, 45% { transform: translateY(-1.04em); }
          50%, 70% { transform: translateY(-2.08em); }
          75%, 95% { transform: translateY(-3.12em); }
          100% { transform: translateY(-4.16em); }
        }
        @keyframes vel-caret { 0%, 55% { opacity: 1; } 56%, 100% { opacity: 0; } }
        @keyframes vel-type { 0% { width: 36px; } 45%, 100% { width: 218px; } }
        @keyframes vel-cursor-line { 0%, 100% { opacity: .9; } 50% { opacity: .2; } }
      `}</style>
      <nav style={{ display: 'flex', alignItems: 'center', gap: 32, padding: '26px 64px', fontSize: 14, fontWeight: 550 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, fontWeight: 800, fontSize: 18, letterSpacing: '-0.03em', marginRight: 'auto' }}>
          <span style={{ width: 24, height: 24, borderRadius: 7, background: accent, color: '#fff', display: 'grid', placeItems: 'center', fontSize: 13, fontWeight: 800 }}>V</span>
          Vellum
        </div>
        <span>Product</span><span>Templates</span><span>Changelog</span><span>Pricing</span>
        <span style={{ padding: '9px 16px', borderRadius: 9, border: `1.5px solid ${ink}`, fontWeight: 650 }}>Sign in</span>
        <span style={{ padding: '10px 17px', borderRadius: 9, background: ink, color: '#fff', fontWeight: 650 }}>Start writing</span>
      </nav>
      <div style={{ padding: '54px 64px 0', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 14px', borderRadius: 99, background: '#efedff', color: accent, fontFamily: '"JetBrains Mono", monospace', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em' }}>
          NEW · AI ANSWERS FROM YOUR OWN PAGES
        </div>
        <h1 style={{ margin: '26px 0 0', fontSize: 88, lineHeight: 1.04, fontWeight: 800, letterSpacing: '-0.045em' }}>
          Write docs that<br />
          <span style={{ display: 'inline-block', overflow: 'hidden', height: '1.04em', verticalAlign: 'bottom', textAlign: 'left' }}>
            <span style={{ display: 'block', animation: 'vel-rotate 9s cubic-bezier(.85,0,.15,1) infinite' }}>
              {words.map((w, i) => (
                <span key={i} style={{ display: 'block', height: '1.04em', color: accent }}>{w}</span>
              ))}
            </span>
          </span>
          <span style={{ display: 'inline-block', width: 5, height: '0.82em', background: accent, marginLeft: 10, verticalAlign: 'baseline', transform: 'translateY(0.12em)', animation: 'vel-caret 1.1s step-end infinite' }} />
        </h1>
        <p style={{ margin: '22px auto 0', maxWidth: 560, fontSize: 18, lineHeight: 1.55, color: '#55535e', fontWeight: 450 }}>
          One editor for guides, references, and release notes — with search
          that actually finds things and answers drafted from your own words.
        </p>
      </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-end', padding: '38px 64px 0' }}>
        <div style={{ width: 780, background: '#fff', border: '1px solid #e4e2da', borderRadius: '14px 14px 0 0', boxShadow: '0 -18px 60px rgba(23,22,28,.08)', overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '11px 16px', borderBottom: '1px solid #eeece5' }}>
            {['#e8615a', '#f2b13c', '#59b96e'].map((c) => <span key={c} style={{ width: 10, height: 10, borderRadius: 5, background: c }} />)}
            <span style={{ marginLeft: 12, fontFamily: '"JetBrains Mono", monospace', fontSize: 11, color: '#9a97a3' }}>vellum.dev/docs/getting-started</span>
            <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 650, color: '#59b96e' }}>
              <span style={{ width: 7, height: 7, borderRadius: 4, background: '#59b96e' }} /> 3 editing now
            </span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '176px 1fr' }}>
            <div style={{ borderRight: '1px solid #eeece5', padding: '16px 14px', fontSize: 12.5, color: '#6d6a77', display: 'flex', flexDirection: 'column', gap: 9 }}>
              <b style={{ color: ink }}>Getting started</b>
              <span style={{ color: accent, fontWeight: 650 }}>Quickstart</span>
              <span>Authentication</span><span>Webhooks</span><span>Errors</span>
              <b style={{ color: ink, marginTop: 6 }}>Guides</b>
              <span>Migrations</span><span>Self-hosting</span>
            </div>
            <div style={{ padding: '20px 26px 26px' }}>
              <div style={{ fontSize: 21, fontWeight: 750, letterSpacing: '-0.02em' }}>Quickstart</div>
              <div style={{ height: 9, width: '84%', background: '#efede6', borderRadius: 5, margin: '16px 0 8px' }} />
              <div style={{ height: 9, width: '68%', background: '#efede6', borderRadius: 5, marginBottom: 16 }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                <div style={{ height: 11, borderRadius: 6, background: '#dcd9fd', animation: 'vel-type 4.5s ease-in-out infinite' }} />
                <div style={{ width: 2, height: 15, background: accent, marginLeft: 3, animation: 'vel-cursor-line 1s ease-in-out infinite' }} />
                <span style={{ marginLeft: 10, fontSize: 10, fontWeight: 700, color: '#fff', background: accent, borderRadius: 4, padding: '2px 6px' }}>Priya</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 06. RUE NEUF — fashion drop, opposing serif marquee bands + product strip
// ─────────────────────────────────────────────────────────────────────────────
function RueMarquee({ children, duration, reverse, style }) {
  return (
    <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', ...style }}>
      <div style={{ display: 'inline-flex', animation: `rue-scroll ${duration}s linear infinite ${reverse ? 'reverse' : 'normal'}` }}>
        <span>{children}</span>
        <span aria-hidden="true">{children}</span>
      </div>
    </div>
  );
}

function HeroRueNeuf() {
  const ink = '#16130f';
  const ox = '#8a1f2b';
  const cream = '#f1ece3';
  const band = 'DROP 09 — LIVE FOR 48 HOURS — NO RESTOCK — ';
  const tiles = [
    ['No.31', 'Cropped chore coat', '€240', '#b9a58a'],
    ['No.32', 'Split-hem trouser', '€185', '#5d6152'],
    ['No.33', 'Double-face scarf', '€95', ox],
  ];
  return (
    <div style={{ width: KW, height: KH, background: cream, color: ink, position: 'relative', overflow: 'hidden', fontFamily: 'Archivo, sans-serif', display: 'flex', flexDirection: 'column' }}>
      <style>{`@keyframes rue-scroll { to { transform: translateX(-50%); } }`}</style>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 40px', fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: '0.2em', borderBottom: `1px solid ${ink}` }}>
        <span>PARIS · TOKYO · NYC</span><span>WORLDWIDE SHIPPING</span><span>EST. 2019</span>
      </div>
      <nav style={{ display: 'flex', alignItems: 'center', padding: '20px 40px', borderBottom: `1px solid ${ink}` }}>
        <div style={{ fontFamily: '"DM Serif Display", serif', fontSize: 30, letterSpacing: '0.02em', marginRight: 'auto' }}>Rue Neuf</div>
        <div style={{ display: 'flex', gap: 30, fontSize: 12, fontWeight: 600, letterSpacing: '0.14em' }}>
          <span style={{ color: ox }}>DROP 09</span><span>ARCHIVE</span><span>ATELIER</span><span>CART (0)</span>
        </div>
      </nav>
      <RueMarquee duration={16} style={{ background: ox, color: cream, padding: '14px 0', borderBottom: `1px solid ${ink}` }}>
        <span style={{ fontFamily: '"DM Serif Display", serif', fontStyle: 'italic', fontSize: 46, lineHeight: 1, paddingRight: 8 }}>{band}</span>
      </RueMarquee>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderBottom: `1px solid ${ink}` }}>
        {tiles.map(([no, name, price, c], i) => (
          <div key={no} style={{ borderRight: i < 2 ? `1px solid ${ink}` : 'none', display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1, margin: 22, background: c, position: 'relative', backgroundImage: 'repeating-linear-gradient(45deg, transparent 0 14px, rgba(22,19,15,0.09) 14px 15px)' }}>
              <span style={{ position: 'absolute', top: 10, left: 12, fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: '0.16em', color: cream, mixBlendMode: 'difference' }}>{no}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '0 22px 18px', fontSize: 13 }}>
              <span style={{ fontWeight: 650 }}>{name}</span>
              <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 12 }}>{price}</span>
            </div>
          </div>
        ))}
      </div>
      <RueMarquee duration={30} reverse style={{ padding: '10px 0', borderBottom: `1px solid ${ink}` }}>
        <span style={{ fontFamily: '"DM Serif Display", serif', fontSize: 58, lineHeight: 1, paddingRight: 10, color: 'transparent', WebkitTextStroke: `1px ${ink}` }}>
          RUE NEUF — SPRING PIECES — CUT IN MARSEILLE —&nbsp;
        </span>
      </RueMarquee>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 40px' }}>
        <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 12, letterSpacing: '0.12em' }}>ENDS IN 31:42:09</span>
        <span style={{ background: ink, color: cream, padding: '13px 28px', fontSize: 12, fontWeight: 700, letterSpacing: '0.14em' }}>SHOP THE DROP →</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 07. KEPLER — multi-currency account, orbiting currency badges
// ─────────────────────────────────────────────────────────────────────────────
function KepSat({ angle, duration, bg, color, label }) {
  return (
    <div style={{ position: 'absolute', inset: 0, transform: `rotate(${angle}deg)` }}>
      <div style={{ position: 'absolute', top: -21, left: '50%', marginLeft: -21 }}>
        <div style={{ animation: `kep-spin ${duration}s linear infinite reverse` }}>
          <div style={{ transform: `rotate(${-angle}deg)`, width: 42, height: 42, borderRadius: '50%', background: bg, color, display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: 16, border: '1px solid #fff', boxShadow: '0 12px 28px rgba(16,20,38,.16)' }}>{label}</div>
        </div>
      </div>
    </div>
  );
}

function KepOrbit({ size, duration, children }) {
  return (
    <div style={{ position: 'absolute', top: '50%', left: '50%', width: size, height: size, margin: -size / 2, borderRadius: '50%', border: '1.5px dashed #c3cce6', animation: `kep-spin ${duration}s linear infinite` }}>
      {children}
    </div>
  );
}

function HeroKepler() {
  const ink = '#101426';
  const accent = '#2743e0';
  return (
    <div style={{ width: KW, height: KH, background: '#eef1f8', color: ink, position: 'relative', overflow: 'hidden', fontFamily: '"Plus Jakarta Sans", sans-serif', display: 'flex', flexDirection: 'column' }}>
      <style>{`
        @keyframes kep-spin { to { transform: rotate(360deg); } }
        @keyframes kep-pulse { 0% { transform: scale(1); opacity: .5; } 100% { transform: scale(1.9); opacity: 0; } }
      `}</style>
      <nav style={{ display: 'flex', alignItems: 'center', gap: 30, padding: '26px 64px', fontSize: 14, fontWeight: 600 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, fontWeight: 800, fontSize: 19, letterSpacing: '-0.02em', marginRight: 'auto' }}>
          <span style={{ width: 26, height: 26, borderRadius: '50%', border: `6px solid ${accent}` }} />
          Kepler
        </div>
        <span>Accounts</span><span>Cards</span><span>FX desk</span><span>Developers</span>
        <span style={{ padding: '11px 20px', borderRadius: 99, background: ink, color: '#fff', fontWeight: 700, fontSize: 13.5 }}>Open an account</span>
      </nav>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.05fr 1fr', alignItems: 'center', padding: '0 0 0 64px' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 14px', borderRadius: 99, background: '#fff', border: '1px solid #d9deee', fontSize: 12, fontWeight: 700, color: accent }}>
            <span style={{ width: 7, height: 7, borderRadius: 4, background: accent }} /> Multi-currency accounts
          </div>
          <h1 style={{ margin: '24px 0 0', fontSize: 68, lineHeight: 1.05, fontWeight: 800, letterSpacing: '-0.045em' }}>
            Money that moves<br />in your <span style={{ color: accent }}>orbit.</span>
          </h1>
          <p style={{ margin: '22px 0 0', maxWidth: 470, fontSize: 17, lineHeight: 1.6, color: '#4d5268' }}>
            Hold, convert, and send 32 currencies from one balance — with
            mid-market FX, local rails in 40 countries, and settlement
            the same day you press send.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 30 }}>
            <span style={{ padding: '14px 26px', borderRadius: 12, background: accent, color: '#fff', fontWeight: 750, fontSize: 15, boxShadow: '0 14px 30px rgba(39,67,224,.28)' }}>Get started free</span>
            <span style={{ padding: '14px 26px', borderRadius: 12, border: `1.5px solid ${ink}`, fontWeight: 700, fontSize: 15 }}>Talk to sales</span>
          </div>
          <div style={{ display: 'flex', gap: 36, marginTop: 42, fontFamily: '"IBM Plex Mono", monospace', fontSize: 12, color: '#4d5268' }}>
            <span><b style={{ color: ink, fontSize: 17 }}>32</b> currencies</span>
            <span><b style={{ color: ink, fontSize: 17 }}>0.4%</b> FX, flat</span>
            <span><b style={{ color: ink, fontSize: 17 }}>T+0</b> settlement</span>
          </div>
        </div>
        <div style={{ position: 'relative', height: '100%' }}>
          <KepOrbit size={230} duration={26}>
            <KepSat angle={40} duration={26} bg="#ffd9e0" color="#a1224a" label="¥" />
            <KepSat angle={230} duration={26} bg="#d9f4e2" color="#0d6b3d" label="$" />
          </KepOrbit>
          <KepOrbit size={370} duration={44}>
            <KepSat angle={120} duration={44} bg="#dde6ff" color={accent} label="€" />
            <KepSat angle={300} duration={44} bg="#fff0d2" color="#8a5a09" label="£" />
          </KepOrbit>
          <KepOrbit size={510} duration={66}>
            <KepSat angle={0} duration={66} bg="#e8dcff" color="#5b2fa8" label="₣" />
            <KepSat angle={160} duration={66} bg="#d6f0fa" color="#0b5f7d" label="kr" />
          </KepOrbit>
          <div style={{ position: 'absolute', top: '50%', left: '50%', width: 118, height: 118, margin: -59, borderRadius: '50%', background: accent, animation: 'kep-pulse 3.4s ease-out infinite' }} />
          <div style={{ position: 'absolute', top: '50%', left: '50%', width: 118, height: 118, margin: -59, borderRadius: '50%', background: `linear-gradient(150deg, ${accent}, #101c66)`, color: '#fff', display: 'grid', placeItems: 'center', boxShadow: '0 24px 50px rgba(16,20,38,.3)' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 10, opacity: .75, fontWeight: 600, letterSpacing: '0.1em' }}>BALANCE</div>
              <div style={{ fontSize: 19, fontWeight: 800, letterSpacing: '-0.02em' }}>$84,120</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 08. VOLTLANE — esports league, neon glitch headline + scanlines + ticker
// ─────────────────────────────────────────────────────────────────────────────
function HeroVoltlane() {
  const lime = '#caff33';
  const cyan = '#48e6ff';
  const mag = '#ff3d8a';
  const headline = { position: 'absolute', inset: 0, fontStyle: 'italic', fontWeight: 900, fontSize: 148, letterSpacing: '-0.03em', lineHeight: 0.94, whiteSpace: 'nowrap' };
  const ticker = 'RIFT KINGS 2 — 1 NULLSECT · SOLARBYTE 0 — 2 THE FOUNDRY · PIXEL MOB 2 — 0 OVERCLOCKED · DEAD PIXEL SOCIETY 1 — 1 WARDRIVE · ';
  return (
    <div style={{ width: KW, height: KH, background: '#050607', color: '#f2f5ec', position: 'relative', overflow: 'hidden', fontFamily: 'Archivo, sans-serif', display: 'flex', flexDirection: 'column' }}>
      <style>{`
        @keyframes vlt-glitch-a {
          0%, 84%, 100% { clip-path: inset(0 0 100% 0); transform: translate(0, 0); }
          85% { clip-path: inset(8% 0 58% 0); transform: translate(-7px, 2px); }
          88% { clip-path: inset(62% 0 6% 0); transform: translate(6px, -2px); }
          91% { clip-path: inset(32% 0 38% 0); transform: translate(-4px, 1px); }
          94% { clip-path: inset(74% 0 4% 0); transform: translate(5px, 0); }
          97% { clip-path: inset(0 0 100% 0); transform: translate(0, 0); }
        }
        @keyframes vlt-glitch-b {
          0%, 86%, 100% { clip-path: inset(100% 0 0 0); transform: translate(0, 0); }
          87% { clip-path: inset(48% 0 22% 0); transform: translate(6px, -1px); }
          90% { clip-path: inset(10% 0 74% 0); transform: translate(-5px, 2px); }
          93% { clip-path: inset(56% 0 18% 0); transform: translate(4px, -2px); }
          96% { clip-path: inset(100% 0 0 0); transform: translate(0, 0); }
        }
        @keyframes vlt-live { 0%, 100% { opacity: 1; } 50% { opacity: .25; } }
        @keyframes vlt-ticker { to { transform: translateX(-50%); } }
        @keyframes vlt-flicker { 0%, 91%, 100% { opacity: .13; } 92% { opacity: .3; } 94% { opacity: .08; } 96% { opacity: .24; } }
      `}</style>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.045) 0 1px, transparent 1px 3px)', pointerEvents: 'none', zIndex: 3 }} />
      <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(720px 420px at 78% 30%, ${cyan}, transparent 70%)`, animation: 'vlt-flicker 4s linear infinite', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(640px 460px at 16% 76%, ${lime}, transparent 70%)`, opacity: .1, pointerEvents: 'none' }} />
      <nav style={{ display: 'flex', alignItems: 'center', gap: 28, padding: '24px 56px', fontFamily: '"JetBrains Mono", monospace', fontSize: 12, letterSpacing: '0.14em', position: 'relative', zIndex: 4 }}>
        <div style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 900, fontStyle: 'italic', fontSize: 21, letterSpacing: '-0.02em', marginRight: 'auto', color: lime }}>VOLTLANE⚡</div>
        <span>SEASON</span><span>TEAMS</span><span>LADDER</span><span>STORE</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 8, border: `1px solid ${mag}`, color: mag, padding: '7px 14px', fontWeight: 700 }}>
          <span style={{ width: 7, height: 7, borderRadius: 4, background: mag, animation: 'vlt-live 1.2s ease-in-out infinite' }} /> LIVE
        </span>
      </nav>
      <div style={{ flex: 1, position: 'relative', zIndex: 2, padding: '52px 56px 0' }}>
        <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 13, letterSpacing: '0.3em', color: cyan, marginBottom: 18 }}>THE CIRCUIT RETURNS · 03.14</div>
        <div style={{ position: 'relative', height: 300 }}>
          <div style={{ ...headline, color: '#f2f5ec', textShadow: `3px 0 0 ${mag}, -3px 0 0 ${cyan}` }}>SEASON<br />SIX</div>
          <div style={{ ...headline, color: cyan, animation: 'vlt-glitch-a 3.2s steps(1) infinite' }} aria-hidden="true">SEASON<br />SIX</div>
          <div style={{ ...headline, color: mag, animation: 'vlt-glitch-b 3.2s steps(1) infinite' }} aria-hidden="true">SEASON<br />SIX</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 26, marginTop: 30 }}>
          <span style={{ background: lime, color: '#050607', padding: '15px 30px', fontWeight: 900, fontStyle: 'italic', fontSize: 15, letterSpacing: '0.05em' }}>REGISTER YOUR FIVE →</span>
          <span style={{ border: '1px solid rgba(242,245,236,.4)', padding: '14px 26px', fontWeight: 700, fontSize: 13, letterSpacing: '0.1em', fontFamily: '"JetBrains Mono", monospace' }}>WATCH TRAILER</span>
          <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 12, letterSpacing: '0.16em', color: 'rgba(242,245,236,.6)' }}>128 SLOTS · $250K PRIZE POOL · BO5 FINALS</span>
        </div>
      </div>
      <div style={{ borderTop: `1px solid rgba(202,255,51,.35)`, background: 'rgba(202,255,51,.05)', overflow: 'hidden', whiteSpace: 'nowrap', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'inline-flex', animation: 'vlt-ticker 28s linear infinite', padding: '13px 0' }}>
          <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 12, letterSpacing: '0.14em', color: lime }}>{ticker}</span>
          <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 12, letterSpacing: '0.14em', color: lime }} aria-hidden="true">{ticker}</span>
        </div>
      </div>
    </div>
  );
}

function AnimationKineticSection() {
  return (
    <DCSection id="anim-kinetic" title="Animation — Kinetic Elements"
      subtitle="Foreground motion: a kinetic-type word rotator, opposing fashion marquees, orbiting currency badges, and a neon glitch headline.">
      <DCArtboard id="an-vellum" label="05 · Vellum · Kinetic Type" width={KW} height={KH}><HeroVellum /></DCArtboard>
      <DCArtboard id="an-rueneuf" label="06 · Rue Neuf · Marquee" width={KW} height={KH}><HeroRueNeuf /></DCArtboard>
      <DCArtboard id="an-kepler" label="07 · Kepler · Orbit" width={KW} height={KH}><HeroKepler /></DCArtboard>
      <DCArtboard id="an-voltlane" label="08 · Voltlane · Glitch Neon" width={KW} height={KH}><HeroVoltlane /></DCArtboard>
    </DCSection>
  );
}

window.AnimationKineticSection = AnimationKineticSection;
