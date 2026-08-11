// Eight more hero/landing variations — pushing into different territories
// than heroes.jsx.

const W2 = 1280;
const H2 = 800;

// ─────────────────────────────────────────────────────────────────────────────
// 9. Y2K CHROME — chrome gradients, bubble type, lens flare
// ─────────────────────────────────────────────────────────────────────────────
function HeroY2K() {
  const s = {
    root: { width: W2, height: H2, color: '#0a0014', position: 'relative',
      background: 'radial-gradient(ellipse at 20% 30%, #c2e5ff 0%, #f7c8ff 35%, #ffe79e 70%, #b8f3d6 100%)',
      fontFamily: '"Bricolage Grotesque", "Inter Tight", sans-serif',
      display: 'flex', flexDirection: 'column', overflow: 'hidden' },
    star: (x, y, sz) => ({ position: 'absolute', left: x, top: y,
      width: sz, height: sz, color: '#fff', fontSize: sz,
      textShadow: '0 0 12px #fff, 0 0 24px #ff8dd6' }),
    nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '20px 36px', position: 'relative', zIndex: 3, fontSize: 13, fontWeight: 600 },
    brand: { fontFamily: '"Bricolage Grotesque", sans-serif',
      fontWeight: 800, fontSize: 26, letterSpacing: '-0.04em',
      background: 'linear-gradient(180deg, #fff, #b8e6ff 40%, #5a9fd9 60%, #fff 100%)',
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
      textShadow: '0 2px 0 rgba(0,0,0,0.15)', filter: 'drop-shadow(0 2px 0 rgba(255,255,255,0.6))' },
    links: { display: 'flex', gap: 26, color: '#3a0a4a' },
    cta: { background: 'linear-gradient(180deg, #ff8dd6 0%, #c44fb5 50%, #ff8dd6 100%)',
      color: '#fff', padding: '10px 18px', borderRadius: 999, fontWeight: 700,
      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.6), 0 4px 0 rgba(196,79,181,0.5)',
      border: '1px solid rgba(255,255,255,0.6)', cursor: 'pointer' },
    main: { flex: 1, display: 'flex', alignItems: 'center',
      padding: '0 56px', position: 'relative', zIndex: 2 },
    left: { flex: 1 },
    sparkle: { fontSize: 14, fontWeight: 700, color: '#c44fb5',
      letterSpacing: '0.06em', textTransform: 'uppercase',
      display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 },
    h1: { fontSize: 132, lineHeight: 0.9, fontWeight: 800, margin: 0,
      letterSpacing: '-0.04em',
      background: 'linear-gradient(180deg, #ffffff 0%, #c2e5ff 30%, #6890c8 50%, #fff 70%, #ff8dd6 100%)',
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
      filter: 'drop-shadow(0 4px 0 rgba(58,10,74,0.25)) drop-shadow(0 8px 16px rgba(196,79,181,0.4))' },
    p: { fontSize: 18, lineHeight: 1.5, marginTop: 24, maxWidth: 460,
      color: '#3a0a4a', fontWeight: 500 },
    ctas: { display: 'flex', gap: 14, marginTop: 32 },
    btnA: { background: 'linear-gradient(180deg, #fff 0%, #ffd9f0 40%, #ff8dd6 60%, #fff 100%)',
      color: '#3a0a4a', padding: '16px 28px', borderRadius: 999, fontWeight: 800,
      fontSize: 15, cursor: 'pointer', letterSpacing: '0.02em',
      border: '2px solid #fff',
      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.8), 0 6px 16px rgba(196,79,181,0.4), 0 2px 0 rgba(58,10,74,0.2)' },
    btnB: { background: 'rgba(255,255,255,0.4)', color: '#3a0a4a',
      padding: '16px 24px', borderRadius: 999, fontWeight: 700, fontSize: 15,
      border: '1px solid rgba(255,255,255,0.8)', cursor: 'pointer',
      backdropFilter: 'blur(8px)' },
    orb: { width: 340, height: 340, borderRadius: '50%',
      background: 'radial-gradient(circle at 30% 30%, #fff 0%, #c2e5ff 25%, #ff8dd6 60%, #c44fb5 100%)',
      boxShadow: 'inset -20px -40px 60px rgba(58,10,74,0.4), 0 30px 80px rgba(196,79,181,0.5)',
      position: 'relative' },
    orbHighlight: { position: 'absolute', top: 30, left: 60, width: 90, height: 50,
      borderRadius: '50%', background: 'rgba(255,255,255,0.8)', filter: 'blur(4px)' },
    badge: { position: 'absolute', top: -10, right: -20,
      background: '#ffe79e', color: '#3a0a4a',
      padding: '14px 18px', borderRadius: '50%', width: 96, height: 96,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', fontWeight: 800, fontSize: 12, lineHeight: 1.1,
      transform: 'rotate(15deg)',
      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.8), 0 6px 0 #b89539' },
  };
  return (
    <div style={s.root}>
      <div style={s.star(80, 100, 18)}>✦</div>
      <div style={s.star(440, 60, 12)}>✦</div>
      <div style={s.star(680, 160, 22)}>✧</div>
      <div style={s.star(120, 540, 14)}>✦</div>
      <div style={s.star(560, 640, 16)}>✧</div>
      <div style={s.nav}>
        <div style={s.brand}>★ glossy.fm</div>
        <div style={s.links}>
          <span>Discover</span><span>Profiles</span><span>Drops</span><span>Help</span>
        </div>
        <div style={s.cta}>Sign up ✨</div>
      </div>
      <div style={s.main}>
        <div style={s.left}>
          <div style={s.sparkle}>✦ The new social, but make it cute</div>
          <h1 style={s.h1}>your<br/>internet,<br/>shinier.</h1>
          <p style={s.p}>
            A homepage on the web that's actually yours. Stickers, glitter,
            a tiny shop, three favorite songs. Like 2003 but it works.
          </p>
          <div style={s.ctas}>
            <button style={s.btnA}>Claim your URL</button>
            <button style={s.btnB}>Browse profiles →</button>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <div style={s.orb}>
            <div style={s.orbHighlight}></div>
          </div>
          <div style={s.badge}>NEW!<br/>v2.0<br/>★★★</div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 10. HAND-SKETCHED — handwritten, drawn underlines, doodles
// ─────────────────────────────────────────────────────────────────────────────
function HeroSketch() {
  const s = {
    root: { width: W2, height: H2, background: '#fdfaf2', color: '#1f1c14',
      fontFamily: '"Kalam", "Caveat", "Comic Sans MS", cursive',
      display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' },
    grid: { position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none',
      backgroundImage: 'linear-gradient(rgba(31,28,20,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(31,28,20,0.06) 1px, transparent 1px)',
      backgroundSize: '32px 32px' },
    nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '24px 48px', position: 'relative', zIndex: 2,
      fontFamily: '"Kalam", cursive', fontSize: 18, fontWeight: 400 },
    brand: { fontSize: 32, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8 },
    links: { display: 'flex', gap: 26 },
    cta: { padding: '8px 20px', border: '2px solid #1f1c14', borderRadius: 24,
      background: '#ffe066', fontWeight: 700, cursor: 'pointer',
      transform: 'rotate(-1deg)' },
    main: { flex: 1, display: 'grid', gridTemplateColumns: '1.2fr 1fr',
      padding: '0 48px 48px', gap: 40, position: 'relative', zIndex: 2 },
    left: { display: 'flex', flexDirection: 'column', justifyContent: 'center' },
    chip: { display: 'inline-flex', alignItems: 'center', gap: 8,
      fontSize: 16, marginBottom: 12, color: '#1f1c14' },
    h1: { fontSize: 96, lineHeight: 1.0, fontWeight: 700, margin: 0,
      letterSpacing: '-0.01em' },
    underline: { position: 'relative', display: 'inline-block' },
    underlineSvg: { position: 'absolute', bottom: -16, left: -8, width: 'calc(100% + 16px)' },
    p: { fontSize: 22, lineHeight: 1.4, marginTop: 32, maxWidth: 480, fontWeight: 400 },
    ctas: { display: 'flex', gap: 16, marginTop: 32, alignItems: 'center' },
    btnA: { background: '#1f1c14', color: '#fdfaf2', padding: '14px 28px',
      borderRadius: 32, fontWeight: 700, fontSize: 18, cursor: 'pointer',
      border: 'none', fontFamily: 'inherit', transform: 'rotate(-0.5deg)' },
    btnB: { background: 'transparent', color: '#1f1c14', padding: '14px 8px',
      fontWeight: 700, fontSize: 18, cursor: 'pointer', border: 'none', fontFamily: 'inherit' },
    right: { display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative' },
    card: { background: '#fff', border: '2px solid #1f1c14', borderRadius: 8,
      padding: 24, width: 320, transform: 'rotate(2deg)',
      boxShadow: '8px 8px 0 #1f1c14' },
    cardH: { fontSize: 24, fontWeight: 700, marginBottom: 8 },
    cardP: { fontSize: 16, lineHeight: 1.4 },
    arrow: { position: 'absolute', left: -80, top: 100, transform: 'rotate(-15deg)' },
    label: { position: 'absolute', left: -100, top: 60, fontSize: 18,
      transform: 'rotate(-8deg)', color: '#1f1c14' },
  };
  const wiggleUnderline = (
    <svg style={s.underlineSvg} viewBox="0 0 300 20" preserveAspectRatio="none">
      <path d="M 4 12 Q 50 4, 100 10 T 200 10 T 296 12"
        fill="none" stroke="#ff5e3a" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
  return (
    <div style={s.root}>
      <div style={s.grid}></div>
      <div style={s.nav}>
        <div style={s.brand}>
          <svg width="36" height="36" viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="14" fill="#ffe066" stroke="#1f1c14" strokeWidth="2"/>
            <circle cx="13" cy="15" r="1.6" fill="#1f1c14"/>
            <circle cx="23" cy="15" r="1.6" fill="#1f1c14"/>
            <path d="M 11 22 Q 18 26, 25 22" stroke="#1f1c14" strokeWidth="2" fill="none" strokeLinecap="round"/>
          </svg>
          jot.
        </div>
        <div style={s.links}>
          <span>Templates</span><span>Examples</span><span>Pricing</span>
        </div>
        <div style={s.cta}>Start drawing →</div>
      </div>
      <div style={s.main}>
        <div style={s.left}>
          <div style={s.chip}>
            <svg width="20" height="20" viewBox="0 0 20 20"><path d="M 3 10 L 8 15 L 17 4" stroke="#22a06b" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
            For people who think with their hands
          </div>
          <h1 style={s.h1}>
            A whiteboard<br/>
            for{' '}
            <span style={s.underline}>
              messy ideas
              {wiggleUnderline}
            </span><br/>
            and big ones.
          </h1>
          <p style={s.p}>
            Sketch, scribble, sticky-note. Then turn the good ones into
            real plans without leaving the canvas.
          </p>
          <div style={s.ctas}>
            <button style={s.btnA}>Try the canvas — free</button>
            <button style={s.btnB}>watch 60s demo ▶</button>
          </div>
        </div>
        <div style={s.right}>
          <div style={s.card}>
            <div style={s.cardH}>brainstorm ✏️</div>
            <div style={s.cardP}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <span style={{ width: 12, height: 12, border: '2px solid #1f1c14', borderRadius: 3 }}></span>
                what if we shipped on a tuesday
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <span style={{ width: 12, height: 12, background: '#22a06b', border: '2px solid #1f1c14', borderRadius: 3 }}></span>
                <s>ask david about the api</s>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 12, height: 12, border: '2px solid #1f1c14', borderRadius: 3 }}></span>
                rewrite onboarding (← this!!)
              </div>
            </div>
            <svg width="80" height="60" viewBox="0 0 80 60" style={{ position: 'absolute', right: -50, bottom: -30, transform: 'rotate(20deg)' }}>
              <path d="M 10 40 Q 20 10, 60 20 L 55 14 M 60 20 L 56 28"
                stroke="#ff5e3a" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div style={s.label}>
            "drag anything here"
            <svg width="80" height="40" viewBox="0 0 80 40" style={s.arrow}>
              <path d="M 4 4 Q 30 30, 70 30 L 64 24 M 70 30 L 64 36"
                stroke="#1f1c14" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 11. BAUHAUS GEOMETRIC — primary colors, shapes, geometric type
// ─────────────────────────────────────────────────────────────────────────────
function HeroBauhaus() {
  const s = {
    root: { width: W2, height: H2, background: '#f0ead6', color: '#1a1a1a',
      fontFamily: '"Archivo", "Inter Tight", sans-serif',
      display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' },
    nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '28px 48px', borderBottom: '2px solid #1a1a1a',
      position: 'relative', zIndex: 3,
      fontSize: 13, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' },
    brand: { display: 'flex', alignItems: 'center', gap: 12, fontWeight: 800, fontSize: 18,
      letterSpacing: '-0.01em', textTransform: 'none' },
    bMark: { display: 'flex' },
    links: { display: 'flex', gap: 32 },
    main: { flex: 1, display: 'grid', gridTemplateColumns: '1.4fr 1fr',
      position: 'relative', zIndex: 2 },
    left: { padding: '56px 48px', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', position: 'relative' },
    eyebrow: { fontSize: 12, fontWeight: 700, letterSpacing: '0.16em',
      textTransform: 'uppercase', marginBottom: 16,
      display: 'flex', alignItems: 'center', gap: 12 },
    rule: { width: 40, height: 4, background: '#e63946' },
    h1: { fontSize: 124, lineHeight: 0.88, fontWeight: 800, margin: 0,
      letterSpacing: '-0.05em' },
    red: { color: '#e63946' },
    blue: { color: '#1d4ed8' },
    yellow: { color: '#facc15' },
    p: { fontSize: 18, lineHeight: 1.5, marginTop: 32, maxWidth: 480, fontWeight: 500 },
    ctas: { display: 'flex', gap: 0, marginTop: 36 },
    btnA: { background: '#1a1a1a', color: '#f0ead6', padding: '18px 28px',
      fontFamily: 'inherit', fontWeight: 700, fontSize: 14,
      letterSpacing: '0.06em', textTransform: 'uppercase', border: 'none',
      cursor: 'pointer' },
    btnB: { background: '#facc15', color: '#1a1a1a', padding: '18px 28px',
      fontFamily: 'inherit', fontWeight: 700, fontSize: 14,
      letterSpacing: '0.06em', textTransform: 'uppercase', border: 'none',
      cursor: 'pointer' },
    right: { position: 'relative', display: 'flex',
      alignItems: 'center', justifyContent: 'center' },
    circle: { position: 'absolute', width: 260, height: 260, borderRadius: '50%',
      background: '#e63946', right: 60, top: 100 },
    square: { position: 'absolute', width: 180, height: 180, background: '#1d4ed8',
      right: 200, top: 280 },
    tri: { position: 'absolute', right: 80, top: 380, width: 0, height: 0,
      borderLeft: '90px solid transparent', borderRight: '90px solid transparent',
      borderBottom: '160px solid #facc15' },
    semi: { position: 'absolute', width: 120, height: 60, background: '#1a1a1a',
      borderRadius: '120px 120px 0 0', right: 380, top: 240 },
    foot: { position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex',
      borderTop: '2px solid #1a1a1a', fontSize: 12, fontWeight: 700,
      letterSpacing: '0.1em', textTransform: 'uppercase', zIndex: 3 },
    fCell: { flex: 1, padding: '14px 24px', borderRight: '2px solid #1a1a1a' },
  };
  return (
    <div style={s.root}>
      <div style={s.nav}>
        <div style={s.brand}>
          <div style={s.bMark}>
            <div style={{ width: 16, height: 16, background: '#e63946' }}></div>
            <div style={{ width: 16, height: 16, background: '#1d4ed8' }}></div>
            <div style={{ width: 16, height: 16, background: '#facc15' }}></div>
          </div>
          Form Atelier
        </div>
        <div style={s.links}>
          <span>Work</span><span>Studio</span><span>Index</span><span>Contact</span>
        </div>
        <div>EST. 2014 / BERLIN</div>
      </div>
      <div style={s.main}>
        <div style={s.left}>
          <div style={s.eyebrow}><span style={s.rule}></span> Independent design studio</div>
          <h1 style={s.h1}>
            <span style={s.red}>Form,</span><br/>
            <span style={s.blue}>function,</span><br/>
            <span style={s.yellow}>feeling.</span>
          </h1>
          <p style={s.p}>
            We build identity systems for cultural institutions, type
            foundries, and people who care about getting the small things right.
          </p>
          <div style={s.ctas}>
            <button style={s.btnA}>See selected work →</button>
            <button style={s.btnB}>Brief us</button>
          </div>
        </div>
        <div style={s.right}>
          <div style={s.circle}></div>
          <div style={s.square}></div>
          <div style={s.semi}></div>
          <div style={s.tri}></div>
        </div>
      </div>
      <div style={s.foot}>
        <div style={s.fCell}>01 — Identity</div>
        <div style={s.fCell}>02 — Editorial</div>
        <div style={s.fCell}>03 — Type Design</div>
        <div style={{ ...s.fCell, borderRight: 'none' }}>04 — Web &amp; Motion</div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 12. NEWSPAPER BROADSHEET — condensed serif, columns, classified feel
// ─────────────────────────────────────────────────────────────────────────────
function HeroNewspaper() {
  const s = {
    root: { width: W2, height: H2, background: '#f6f1e3', color: '#1a1a1a',
      fontFamily: 'Georgia, "Times New Roman", serif',
      display: 'flex', flexDirection: 'column' },
    mast: { padding: '24px 48px 16px', borderBottom: '3px double #1a1a1a',
      textAlign: 'center', position: 'relative' },
    title: { fontFamily: '"Cormorant Garamond", "Playfair Display", Georgia, serif',
      fontSize: 72, lineHeight: 1, fontWeight: 500, letterSpacing: '-0.01em',
      margin: 0, fontStyle: 'italic' },
    sub: { fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase',
      marginTop: 8, color: '#3a3a3a' },
    mastLeft: { position: 'absolute', left: 48, top: 24, fontSize: 11,
      letterSpacing: '0.16em', textTransform: 'uppercase', textAlign: 'left',
      lineHeight: 1.6 },
    mastRight: { position: 'absolute', right: 48, top: 24, fontSize: 11,
      letterSpacing: '0.16em', textTransform: 'uppercase', textAlign: 'right',
      lineHeight: 1.6 },
    sections: { display: 'flex', justifyContent: 'center', gap: 28,
      padding: '12px 48px', borderBottom: '1px solid #1a1a1a',
      fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase' },
    body: { flex: 1, display: 'grid', gridTemplateColumns: '2fr 1fr 1fr',
      borderBottom: '1px solid #1a1a1a' },
    col: { padding: 32, borderRight: '1px solid #1a1a1a',
      columnRule: '1px solid #ccc' },
    colLast: { padding: 32 },
    kicker: { fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
      borderBottom: '1px solid #1a1a1a', paddingBottom: 8, marginBottom: 16,
      display: 'flex', justifyContent: 'space-between' },
    leadH: { fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontSize: 56, lineHeight: 1, fontWeight: 500, letterSpacing: '-0.02em',
      margin: 0 },
    deck: { fontSize: 16, lineHeight: 1.45, marginTop: 16, fontStyle: 'italic',
      paddingBottom: 16, borderBottom: '1px solid #1a1a1a' },
    leadBody: { fontSize: 13, lineHeight: 1.55, marginTop: 16, columnCount: 2,
      columnGap: 18, textAlign: 'justify', hyphens: 'auto' },
    dropCap: { float: 'left', fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontSize: 56, lineHeight: 0.85, fontWeight: 500,
      paddingRight: 8, paddingTop: 4 },
    sideH: { fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontSize: 22, lineHeight: 1.05, fontWeight: 500, margin: '0 0 8px' },
    sideBody: { fontSize: 12, lineHeight: 1.5, marginBottom: 16,
      paddingBottom: 16, borderBottom: '1px dotted #999' },
    photo: { width: '100%', aspectRatio: '4/3',
      backgroundImage: 'repeating-linear-gradient(45deg, #d0c8b0 0 3px, #aaa090 3px 4px)',
      marginBottom: 8, position: 'relative' },
    caption: { fontSize: 10, fontStyle: 'italic', color: '#555', marginBottom: 14 },
    cta: { background: '#1a1a1a', color: '#f6f1e3', padding: '10px 16px',
      fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase',
      textAlign: 'center', cursor: 'pointer', display: 'inline-block', marginTop: 8 },
    foot: { display: 'flex', justifyContent: 'space-between',
      padding: '10px 48px', fontSize: 10, letterSpacing: '0.18em',
      textTransform: 'uppercase' },
  };
  return (
    <div style={s.root}>
      <div style={s.mast}>
        <div style={s.mastLeft}>Vol. CXVI<br/>No. 24,318</div>
        <div style={s.mastRight}>Sunday<br/>May 17, 2026</div>
        <h1 style={s.title}>The Quiet Times</h1>
        <div style={s.sub}>A weekly dispatch for readers who like to think slowly</div>
      </div>
      <div style={s.sections}>
        <span>Front Page</span><span>Essays</span><span>Letters</span>
        <span>Books</span><span>The Margin</span><span>Subscribe</span>
      </div>
      <div style={s.body}>
        <div style={s.col}>
          <div style={s.kicker}><span>The Lead</span><span>By the Editors</span></div>
          <h2 style={s.leadH}>Against the<br/>Algorithm Feed</h2>
          <div style={s.deck}>Why a thousand small newsrooms — read on Sunday with coffee — may yet outlive the infinite scroll.</div>
          <div style={s.leadBody}>
            <span style={s.dropCap}>S</span>omething peculiar is happening at the edges of the internet. Readers, exhausted, are paying real money for slow things. Newsletters that arrive once a week. Magazines printed on paper. Podcasts that take an hour to make a single point. <br/><br/>
            The Quiet Times exists for this reader. Twelve essays a month, two books reviewed properly, one long letter from somewhere strange. No notifications, no streaks, no infinite scroll—just a stack of pages on a Sunday morning.<br/><br/>
            The first three issues are free. After that, eight dollars a month, or thereabouts. Cancel any time.
          </div>
        </div>
        <div style={s.col}>
          <div style={s.kicker}><span>This Issue</span><span>05·17</span></div>
          <div style={s.photo}></div>
          <div style={s.caption}>Above: a reader, undisturbed.</div>
          <h3 style={s.sideH}>The Last Bookshop in Astoria</h3>
          <div style={s.sideBody}>A profile of Maris Cohen, who has run the same shop for forty-one years and intends to keep going.</div>
          <h3 style={s.sideH}>On Patience as Style</h3>
          <div style={s.sideBody}>An essay on slowness as an aesthetic choice, rather than a moral one.</div>
        </div>
        <div style={s.colLast}>
          <div style={s.kicker}><span>Subscribe</span><span>$8 / month</span></div>
          <h3 style={s.sideH}>Try three issues, on us.</h3>
          <div style={s.sideBody}>
            A reader-supported weekly. No ads. No data sold. Print or digital,
            your choice. Cancel any time, by post or by tap.
          </div>
          <input style={{ width: '100%', padding: '10px 12px', border: '1px solid #1a1a1a',
            background: 'transparent', fontFamily: 'inherit', fontSize: 13, marginBottom: 8 }}
            placeholder="your@address.com" />
          <div style={{ ...s.cta, width: 'calc(100% - 32px)' }}>Begin reading →</div>
          <div style={{ ...s.kicker, marginTop: 24 }}><span>The Margin</span></div>
          <div style={{ fontSize: 12, lineHeight: 1.6, fontStyle: 'italic' }}>
            "I read it the way I used to read on Sundays as a child—as a kind of weather."<br/>
            <span style={{ fontStyle: 'normal', fontSize: 11, color: '#555', marginTop: 6, display: 'block' }}>— A reader, in Vermont</span>
          </div>
        </div>
      </div>
      <div style={s.foot}>
        <span>Printed in Brooklyn · Mailed Worldwide</span>
        <span>Page A1 · Continued on A2</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 13. RISOGRAPH — duotone, halftones, paper texture
// ─────────────────────────────────────────────────────────────────────────────
function HeroRiso() {
  const s = {
    root: { width: W2, height: H2, color: '#1a1f3a',
      background: '#f4eedb',
      fontFamily: '"Archivo", "Inter Tight", sans-serif',
      display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' },
    paper: { position: 'absolute', inset: 0, opacity: 0.6, pointerEvents: 'none',
      backgroundImage: 'radial-gradient(rgba(26,31,58,0.08) 1px, transparent 1.5px)',
      backgroundSize: '4px 4px' },
    blob: { position: 'absolute', borderRadius: '50%', mixBlendMode: 'multiply',
      filter: 'blur(1px)' },
    nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '24px 48px', position: 'relative', zIndex: 3, fontSize: 13, fontWeight: 600 },
    brand: { fontSize: 22, fontWeight: 900, letterSpacing: '-0.04em',
      display: 'flex', alignItems: 'center', gap: 10 },
    links: { display: 'flex', gap: 28, fontWeight: 500 },
    cta: { background: '#1a1f3a', color: '#f4eedb', padding: '8px 18px',
      borderRadius: 4, fontWeight: 600, cursor: 'pointer' },
    main: { flex: 1, display: 'grid', gridTemplateColumns: '1.3fr 1fr',
      padding: '0 48px 32px', gap: 40, position: 'relative', zIndex: 2,
      alignItems: 'center' },
    eyebrow: { fontSize: 12, fontWeight: 800, letterSpacing: '0.16em',
      textTransform: 'uppercase', color: '#ff6e3e', marginBottom: 20 },
    h1: { fontSize: 116, lineHeight: 0.9, fontWeight: 800, margin: 0,
      letterSpacing: '-0.04em', color: '#1a1f3a' },
    orange: { color: '#ff6e3e' },
    p: { fontSize: 18, lineHeight: 1.55, marginTop: 28, maxWidth: 480 },
    ctas: { display: 'flex', gap: 14, marginTop: 32 },
    btnA: { background: '#ff6e3e', color: '#1a1f3a', padding: '16px 28px',
      borderRadius: 4, fontFamily: 'inherit', fontWeight: 700, fontSize: 15,
      border: 'none', cursor: 'pointer' },
    btnB: { background: 'transparent', color: '#1a1f3a', padding: '16px 24px',
      fontFamily: 'inherit', fontWeight: 700, fontSize: 15,
      border: '2px solid #1a1f3a', borderRadius: 4, cursor: 'pointer' },
    art: { position: 'relative', height: 460 },
    halftone: { position: 'absolute', width: 320, height: 320, borderRadius: '50%',
      background: 'radial-gradient(circle, #ff6e3e 0%, #ff6e3e 60%, transparent 60%)',
      backgroundImage: 'radial-gradient(#ff6e3e 1.5px, transparent 1.8px)',
      backgroundSize: '6px 6px', backgroundColor: 'transparent',
      WebkitMaskImage: 'radial-gradient(circle, #000 50%, transparent 70%)',
      maskImage: 'radial-gradient(circle, #000 50%, transparent 70%)',
      right: 0, top: 20, mixBlendMode: 'multiply' },
    shape: { position: 'absolute', width: 280, height: 280,
      background: '#1a1f3a', mixBlendMode: 'multiply',
      borderRadius: '60% 40% 50% 50%', left: 20, top: 80, opacity: 0.92 },
    eye: { position: 'absolute', left: 100, top: 200, width: 100, height: 60,
      background: '#f4eedb', borderRadius: '50%' },
    pupil: { position: 'absolute', left: 130, top: 215, width: 30, height: 30,
      background: '#1a1f3a', borderRadius: '50%' },
  };
  return (
    <div style={s.root}>
      <div style={s.paper}></div>
      <div style={{ ...s.blob, width: 220, height: 220, background: '#ff6e3e',
        left: 80, bottom: 60, opacity: 0.5 }}></div>
      <div style={{ ...s.blob, width: 160, height: 160, background: '#1a1f3a',
        right: 480, top: 100, opacity: 0.15 }}></div>
      <div style={s.nav}>
        <div style={s.brand}>
          <span style={{ display: 'inline-block', width: 24, height: 24,
            background: '#ff6e3e', borderRadius: 4, mixBlendMode: 'multiply' }}></span>
          PRESS &amp; PULP
        </div>
        <div style={s.links}>
          <span>Shop</span><span>Workshops</span><span>Studio</span><span>Journal</span>
        </div>
        <div style={s.cta}>Visit the press →</div>
      </div>
      <div style={s.main}>
        <div>
          <div style={s.eyebrow}>★ Two-color riso prints · since 2019</div>
          <h1 style={s.h1}>
            Printed slow.<br/>
            Made <span style={s.orange}>loud.</span>
          </h1>
          <p style={s.p}>
            Limited-run risograph posters from a Brooklyn basement studio.
            Two inks, one press, a hundred copies before the drum gets tired.
          </p>
          <div style={s.ctas}>
            <button style={s.btnA}>Shop new prints</button>
            <button style={s.btnB}>Book a workshop</button>
          </div>
        </div>
        <div style={s.art}>
          <div style={s.shape}></div>
          <div style={s.eye}></div>
          <div style={s.pupil}></div>
          <div style={s.halftone}></div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 14. CYBERPUNK NEON — magenta/cyan/black, glitch
// ─────────────────────────────────────────────────────────────────────────────
function HeroCyberpunk() {
  const s = {
    root: { width: W2, height: H2, color: '#f0f7ff', position: 'relative',
      background: 'linear-gradient(180deg, #0a0218 0%, #1a0028 50%, #0a0218 100%)',
      fontFamily: '"Archivo", "Inter Tight", sans-serif',
      display: 'flex', flexDirection: 'column', overflow: 'hidden' },
    grid: { position: 'absolute', inset: 0, opacity: 0.3, pointerEvents: 'none',
      backgroundImage: 'linear-gradient(rgba(255,0,200,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,255,0.3) 1px, transparent 1px)',
      backgroundSize: '40px 40px',
      maskImage: 'linear-gradient(180deg, transparent, #000 30%, #000 70%, transparent)',
      WebkitMaskImage: 'linear-gradient(180deg, transparent, #000 30%, #000 70%, transparent)' },
    horizon: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 280,
      background: 'linear-gradient(180deg, transparent, rgba(255,0,200,0.2) 60%, rgba(0,200,255,0.4) 100%)',
      backgroundImage: 'linear-gradient(180deg, transparent 0%, rgba(255,0,200,0.15) 50%, rgba(0,200,255,0.25) 100%), repeating-linear-gradient(0deg, transparent 0 30px, rgba(0,200,255,0.4) 30px 31px)',
      pointerEvents: 'none' },
    nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '20px 40px', position: 'relative', zIndex: 3,
      borderBottom: '1px solid rgba(255,0,200,0.3)',
      fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase' },
    brand: { fontWeight: 800, fontSize: 18, letterSpacing: '0.06em',
      color: '#ff00c8', textShadow: '0 0 10px #ff00c8, 0 0 20px rgba(255,0,200,0.5)' },
    links: { display: 'flex', gap: 32, color: '#00d9ff' },
    cta: { color: '#0a0218', background: '#00d9ff',
      padding: '8px 16px', fontWeight: 700, letterSpacing: '0.08em',
      cursor: 'pointer', boxShadow: '0 0 16px rgba(0,217,255,0.6)',
      clipPath: 'polygon(8% 0, 100% 0, 92% 100%, 0 100%)' },
    main: { flex: 1, display: 'grid', gridTemplateColumns: '1.2fr 1fr',
      alignItems: 'center', padding: '0 56px', gap: 40, position: 'relative', zIndex: 2 },
    sysline: { fontSize: 11, color: '#00d9ff', letterSpacing: '0.14em',
      textTransform: 'uppercase', marginBottom: 24, display: 'flex', gap: 16 },
    dot: { width: 8, height: 8, borderRadius: '50%', background: '#00ff8c',
      boxShadow: '0 0 8px #00ff8c' },
    h1: { fontSize: 96, lineHeight: 0.92, fontWeight: 900, margin: 0,
      letterSpacing: '-0.03em', color: '#f0f7ff',
      textShadow: '3px 0 0 #ff00c8, -3px 0 0 #00d9ff' },
    pink: { color: '#ff00c8', textShadow: '0 0 20px #ff00c8, 0 0 40px rgba(255,0,200,0.5)' },
    p: { fontSize: 15, lineHeight: 1.7, marginTop: 32, maxWidth: 480,
      color: '#a0b0d0', fontFamily: '"JetBrains Mono", monospace' },
    bracket: { color: '#ff00c8' },
    ctas: { display: 'flex', gap: 14, marginTop: 36 },
    btnA: { background: 'linear-gradient(90deg, #ff00c8, #c800ff)',
      color: '#fff', padding: '16px 28px',
      fontFamily: 'inherit', fontWeight: 800, fontSize: 13,
      letterSpacing: '0.12em', textTransform: 'uppercase',
      border: 'none', cursor: 'pointer',
      clipPath: 'polygon(8% 0, 100% 0, 92% 100%, 0 100%)',
      boxShadow: '0 0 24px rgba(255,0,200,0.5)' },
    btnB: { background: 'transparent', color: '#00d9ff', padding: '16px 28px',
      fontFamily: 'inherit', fontWeight: 700, fontSize: 13,
      letterSpacing: '0.12em', textTransform: 'uppercase',
      border: '1px solid #00d9ff', cursor: 'pointer',
      textShadow: '0 0 8px rgba(0,217,255,0.6)' },
    panel: { position: 'relative', padding: 24, color: '#f0f7ff',
      background: 'rgba(255,0,200,0.05)',
      border: '1px solid #ff00c8',
      boxShadow: '0 0 32px rgba(255,0,200,0.3), inset 0 0 32px rgba(255,0,200,0.05)',
      clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))',
      fontFamily: '"JetBrains Mono", monospace', fontSize: 12, lineHeight: 1.7 },
    pLine: { color: '#7a90b0' },
    pKey: { color: '#00d9ff' },
    pVal: { color: '#ff00c8' },
    pHead: { fontSize: 10, letterSpacing: '0.2em', color: '#ff00c8',
      textTransform: 'uppercase', marginBottom: 16, display: 'flex',
      justifyContent: 'space-between' },
  };
  return (
    <div style={s.root}>
      <div style={s.grid}></div>
      <div style={s.horizon}></div>
      <div style={s.nav}>
        <div style={s.brand}>◆ NULLPOINT//9</div>
        <div style={s.links}>
          <span>[ ARSENAL ]</span><span>[ LORE ]</span><span>[ JACK-IN ]</span>
        </div>
        <div style={s.cta}>CONNECT →</div>
      </div>
      <div style={s.main}>
        <div>
          <div style={s.sysline}>
            <span><span style={s.dot}></span>&nbsp; SYS::ONLINE</span>
            <span>NET::09.842</span>
            <span>PING::4ms</span>
          </div>
          <h1 style={s.h1}>
            Run the<br/>
            <span style={s.pink}>nightcity</span><br/>
            from your terminal.
          </h1>
          <p style={s.p}>
            <span style={s.bracket}>{'// '}</span>
            A cyberpunk MMO that lives in your shell. Compete in heists,
            run hacks, decrypt the static. No installer, no launcher.
            Just a binary and your wits.
          </p>
          <div style={s.ctas}>
            <button style={s.btnA}>$ Jack in</button>
            <button style={s.btnB}>View the manifest</button>
          </div>
        </div>
        <div style={s.panel}>
          <div style={s.pHead}><span>◆ AGENT // V3LV</span><span>STATUS · ACTIVE</span></div>
          <div><span style={s.pKey}>cred_balance</span>: <span style={s.pVal}>¥ 24,808</span></div>
          <div><span style={s.pKey}>rep</span>: <span style={s.pVal}>fixer_t2</span></div>
          <div><span style={s.pKey}>last_run</span>: <span style={s.pVal}>arasaka.tower.34f</span></div>
          <div style={s.pLine}>{'└─ '}<span style={{ color: '#00ff8c' }}>SUCCESS · 2.4kg DATA</span></div>
          <div style={{ borderTop: '1px solid rgba(255,0,200,0.3)', margin: '12px 0' }}></div>
          <div style={s.pLine}>&gt; jobs_available [3]</div>
          <div>&nbsp;&nbsp;◇ <span style={{ color: '#f0f7ff' }}>night.market.payroll</span> <span style={s.pVal}>¥4.2k</span></div>
          <div>&nbsp;&nbsp;◇ <span style={{ color: '#f0f7ff' }}>militech.uplink.crk</span> <span style={s.pVal}>¥12k</span></div>
          <div>&nbsp;&nbsp;◇ <span style={{ color: '#f0f7ff' }}>sci.hardlock.ext</span> <span style={s.pVal}>¥38k</span></div>
          <div style={s.pLine}>&gt; <span style={{ color: '#00ff8c' }}>accept_</span><span style={{ display: 'inline-block', width: 8, height: 14, background: '#00ff8c', verticalAlign: 'text-bottom', marginLeft: 4 }}></span></div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 15. BOTANICAL — sage/cream, organic, slow
// ─────────────────────────────────────────────────────────────────────────────
function HeroBotanical() {
  const s = {
    root: { width: W2, height: H2, background: '#ebe4d2', color: '#2a3024',
      fontFamily: '"Fraunces", Georgia, serif',
      display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' },
    leafBig: { position: 'absolute', right: -80, bottom: -120, width: 600, height: 600,
      opacity: 0.6, pointerEvents: 'none' },
    leafSm: { position: 'absolute', left: -40, top: -40, width: 280, height: 280,
      opacity: 0.4, pointerEvents: 'none' },
    nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '32px 56px', position: 'relative', zIndex: 3,
      fontFamily: '"DM Sans", sans-serif',
      fontSize: 13, fontWeight: 500, letterSpacing: '0.04em' },
    brand: { fontFamily: '"Fraunces", serif', fontSize: 26, fontWeight: 400,
      letterSpacing: '-0.02em', fontStyle: 'italic' },
    links: { display: 'flex', gap: 32, textTransform: 'uppercase',
      letterSpacing: '0.14em', fontSize: 11 },
    cta: { fontFamily: '"Fraunces", serif', fontSize: 16, fontStyle: 'italic',
      borderBottom: '1px solid #2a3024', paddingBottom: 2, cursor: 'pointer',
      textTransform: 'none', letterSpacing: 0 },
    main: { flex: 1, display: 'grid', gridTemplateColumns: '1.2fr 1fr',
      alignItems: 'center', padding: '0 56px 40px', gap: 56, position: 'relative', zIndex: 2 },
    eyebrow: { fontFamily: '"DM Sans", sans-serif', fontSize: 11,
      letterSpacing: '0.3em', textTransform: 'uppercase', color: '#6a7a5a',
      marginBottom: 28, display: 'flex', alignItems: 'center', gap: 14 },
    rule: { width: 40, height: 1, background: '#6a7a5a' },
    h1: { fontSize: 104, lineHeight: 0.98, fontWeight: 300, margin: 0,
      letterSpacing: '-0.03em' },
    italic: { fontStyle: 'italic', fontWeight: 300, color: '#6a7a5a' },
    p: { fontFamily: '"DM Sans", sans-serif', fontSize: 17, lineHeight: 1.65,
      marginTop: 32, maxWidth: 460, color: '#4a5440', fontWeight: 400 },
    ctas: { display: 'flex', gap: 24, marginTop: 40, alignItems: 'center' },
    btnA: { background: '#2a3024', color: '#ebe4d2', padding: '16px 32px',
      borderRadius: 999, fontFamily: '"DM Sans", sans-serif',
      fontWeight: 500, fontSize: 14, letterSpacing: '0.04em', cursor: 'pointer',
      border: 'none' },
    btnB: { background: 'transparent', color: '#2a3024',
      fontFamily: '"Fraunces", serif', fontSize: 17, fontStyle: 'italic',
      border: 'none', cursor: 'pointer', padding: '16px 8px',
      borderBottom: '1px solid #2a3024' },
    art: { width: '100%', aspectRatio: '3/4', position: 'relative',
      background: 'linear-gradient(180deg, #c9c3a8, #a8b08a)',
      borderRadius: '50% 50% 50% 50% / 8% 8% 92% 92%',
      overflow: 'hidden' },
    artInner: { position: 'absolute', inset: 24,
      borderRadius: '50% 50% 50% 50% / 8% 8% 92% 92%',
      border: '1px dashed rgba(42,48,36,0.4)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: '"DM Sans", sans-serif', fontSize: 11,
      letterSpacing: '0.25em', textTransform: 'uppercase',
      color: 'rgba(42,48,36,0.6)' },
    tagsRow: { position: 'absolute', bottom: 40, right: 56, display: 'flex',
      gap: 8, zIndex: 3, fontFamily: '"DM Sans", sans-serif',
      fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase' },
    tag: { padding: '6px 12px', border: '1px solid #2a3024', borderRadius: 999 },
  };
  const Leaf = ({ style }) => (
    <svg style={style} viewBox="0 0 200 200" fill="none">
      <path d="M 100 20 C 60 40, 30 90, 40 160 C 90 150, 140 110, 160 50 C 140 30, 120 22, 100 20 Z"
        fill="#6a7a5a"/>
      <path d="M 100 25 C 88 60, 75 110, 50 155" stroke="#3a4030" strokeWidth="1.5" fill="none"/>
      <path d="M 90 60 C 100 65, 110 65, 125 55" stroke="#3a4030" strokeWidth="1" fill="none"/>
      <path d="M 75 100 C 90 105, 110 102, 135 90" stroke="#3a4030" strokeWidth="1" fill="none"/>
      <path d="M 62 135 C 80 138, 100 132, 130 120" stroke="#3a4030" strokeWidth="1" fill="none"/>
    </svg>
  );
  return (
    <div style={s.root}>
      <Leaf style={{ ...s.leafBig, transform: 'rotate(-25deg)' }} />
      <Leaf style={{ ...s.leafSm, transform: 'rotate(170deg)' }} />
      <div style={s.nav}>
        <div style={s.brand}>Florae &amp; Co.</div>
        <div style={s.links}>
          <span>The Field</span><span>The Studio</span><span>Stockists</span><span>Journal</span>
        </div>
        <div style={s.cta}>Visit the shop →</div>
      </div>
      <div style={s.main}>
        <div>
          <div style={s.eyebrow}><span style={s.rule}></span> Slow goods · Ojai, California</div>
          <h1 style={s.h1}>
            Of the field,<br/>
            <span style={s.italic}>for the home.</span>
          </h1>
          <p style={s.p}>
            Botanical inks, pressed papers, and small-batch ceramics
            made by hand and shipped the slow way. Made when the season
            allows; sold while we have them.
          </p>
          <div style={s.ctas}>
            <button style={s.btnA}>Shop the season →</button>
            <button style={s.btnB}>Our story</button>
          </div>
        </div>
        <div style={s.art}>
          <div style={s.artInner}>PRESSED · NO. 14</div>
        </div>
      </div>
      <div style={s.tagsRow}>
        <span style={s.tag}>Spring '26</span>
        <span style={s.tag}>14 pieces</span>
        <span style={s.tag}>Naturally dyed</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 16. STICKER COLLAGE — chaotic, layered, scrappy maximalism
// ─────────────────────────────────────────────────────────────────────────────
function HeroCollage() {
  const s = {
    root: { width: W2, height: H2, background: '#e8e3d8', color: '#1a1a1a',
      fontFamily: '"Archivo", "Inter Tight", sans-serif',
      display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' },
    tape: { position: 'absolute', width: 120, height: 28, background: 'rgba(255,224,102,0.7)',
      boxShadow: '0 1px 4px rgba(0,0,0,0.15)' },
    nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '24px 40px', position: 'relative', zIndex: 10,
      fontSize: 13, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase' },
    brand: { fontFamily: '"Archivo Black", sans-serif', fontSize: 24,
      letterSpacing: '-0.02em', textTransform: 'none' },
    links: { display: 'flex', gap: 24 },
    main: { flex: 1, position: 'relative' },
    headline: { position: 'absolute', left: 40, top: 60, zIndex: 4,
      fontFamily: '"Archivo Black", sans-serif',
      fontSize: 144, lineHeight: 0.88, fontWeight: 900,
      letterSpacing: '-0.04em', margin: 0, maxWidth: 800,
      transform: 'rotate(-1deg)' },
    headlineHL: { background: '#ffe066', padding: '0 6px', display: 'inline-block',
      transform: 'rotate(-2deg)', boxShadow: '0 4px 0 rgba(0,0,0,0.1)' },
    headlineUnderline: { borderBottom: '6px solid #ff3b6f' },
    sub: { position: 'absolute', left: 40, top: 460, zIndex: 4,
      fontSize: 18, lineHeight: 1.4, maxWidth: 420, fontWeight: 500 },
    ctas: { position: 'absolute', left: 40, bottom: 48, zIndex: 5,
      display: 'flex', gap: 14, alignItems: 'center' },
    btnA: { background: '#1a1a1a', color: '#fff', padding: '18px 28px',
      fontFamily: '"Archivo Black", sans-serif', fontSize: 15,
      letterSpacing: '0.04em', textTransform: 'uppercase',
      border: 'none', cursor: 'pointer', transform: 'rotate(-1deg)',
      boxShadow: '6px 6px 0 #ff3b6f' },
    btnB: { background: '#ffe066', color: '#1a1a1a', padding: '18px 24px',
      fontFamily: '"Archivo Black", sans-serif', fontSize: 15,
      letterSpacing: '0.04em', textTransform: 'uppercase',
      border: '2px solid #1a1a1a', cursor: 'pointer', transform: 'rotate(1deg)' },
    sticker: (bg, color, rot, x, y, sz) => ({
      position: 'absolute', left: x, top: y, transform: `rotate(${rot}deg)`,
      background: bg, color, padding: '12px 18px', fontWeight: 800,
      fontSize: sz, letterSpacing: '0.02em', textTransform: 'uppercase',
      borderRadius: 999, border: '2px solid #1a1a1a', zIndex: 6,
      boxShadow: '3px 3px 0 #1a1a1a', textAlign: 'center', lineHeight: 1.1 }),
    polaroid: (x, y, rot) => ({ position: 'absolute', left: x, top: y,
      transform: `rotate(${rot}deg)`, background: '#fff', padding: 10,
      paddingBottom: 36, boxShadow: '6px 8px 18px rgba(0,0,0,0.15)', zIndex: 5 }),
    polaroidImg: { width: 180, height: 180, position: 'relative' },
    polaroidCap: { fontFamily: '"Kalam", "Caveat", cursive', fontSize: 14,
      textAlign: 'center', marginTop: 6, color: '#1a1a1a' },
    star: (x, y, sz, rot) => ({ position: 'absolute', left: x, top: y,
      width: sz, height: sz, color: '#ff3b6f', fontSize: sz,
      transform: `rotate(${rot}deg)`, zIndex: 3 }),
  };
  return (
    <div style={s.root}>
      <div style={s.nav}>
        <div style={s.brand}>scrapbook*</div>
        <div style={s.links}>
          <span>Discover</span><span>Make</span><span>Print</span><span>Sell</span>
        </div>
        <div>Sign up — free</div>
      </div>
      <div style={s.main}>
        <div style={s.star(380, 80, 36, 12)}>✦</div>
        <div style={s.star(880, 200, 28, -20)}>✦</div>
        <div style={s.star(1140, 540, 42, 8)}>✧</div>

        <h1 style={s.headline}>
          Make a<br/>
          <span style={s.headlineHL}>mess</span> of<br/>
          <span style={s.headlineUnderline}>the internet.</span>
        </h1>

        {/* Polaroid 1 */}
        <div style={{ ...s.polaroid(820, 80, 6) }}>
          <div style={{ ...s.polaroidImg, background: 'linear-gradient(135deg, #ff8dd6, #ffe066)' }}></div>
          <div style={s.polaroidCap}>last summer ♡</div>
          <div style={{ ...s.tape, top: -10, left: 60, transform: 'rotate(-4deg)' }}></div>
        </div>
        {/* Polaroid 2 */}
        <div style={{ ...s.polaroid(1050, 280, -8) }}>
          <div style={{ ...s.polaroidImg, background: 'linear-gradient(135deg, #6c4cff, #4cf0e8)', width: 140, height: 140 }}></div>
          <div style={s.polaroidCap}>nora's birthday</div>
        </div>

        {/* Stickers */}
        <div style={s.sticker('#ff3b6f', '#fff', -8, 1080, 100, 14)}>NEW!<br/>v2</div>
        <div style={s.sticker('#4cf0e8', '#1a1a1a', 10, 1100, 480, 12)}>cute<br/>tools</div>
        <div style={s.sticker('#ffe066', '#1a1a1a', -4, 760, 540, 16)}>free</div>

        {/* Tape pieces */}
        <div style={{ ...s.tape, top: 220, left: 720, transform: 'rotate(-15deg)' }}></div>

        <p style={s.sub}>
          A scrapbooking app for the internet. Polaroids, stickers,
          terrible handwriting. Save the receipts. Print the highlights.
        </p>

        <div style={s.ctas}>
          <button style={s.btnA}>Start scrapbooking →</button>
          <button style={s.btnB}>See the gallery</button>
          <span style={{ fontFamily: '"Kalam", cursive', fontSize: 18,
            transform: 'rotate(-3deg)', marginLeft: 8 }}>
            ← it's free, promise
          </span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section + extras (uses globals from heroes.jsx)
// ─────────────────────────────────────────────────────────────────────────────
function ExtrasSection() {
  return (
    <DCSection id="heroes-more" title="More Directions"
      subtitle="Eight further explorations — pushing into Y2K, hand-drawn, print, riso, cyberpunk, botanical, and collage.">
      <DCArtboard id="y2k" label="09 · Y2K Chrome" width={W2} height={H2}>
        <HeroY2K />
      </DCArtboard>
      <DCArtboard id="sketch" label="10 · Hand-sketched" width={W2} height={H2}>
        <HeroSketch />
      </DCArtboard>
      <DCArtboard id="bauhaus" label="11 · Bauhaus Geometric" width={W2} height={H2}>
        <HeroBauhaus />
      </DCArtboard>
      <DCArtboard id="newspaper" label="12 · Newspaper Broadsheet" width={W2} height={H2}>
        <HeroNewspaper />
      </DCArtboard>
      <DCArtboard id="riso" label="13 · Risograph" width={W2} height={H2}>
        <HeroRiso />
      </DCArtboard>
      <DCArtboard id="cyberpunk" label="14 · Cyberpunk Neon" width={W2} height={H2}>
        <HeroCyberpunk />
      </DCArtboard>
      <DCArtboard id="botanical" label="15 · Botanical Slow" width={W2} height={H2}>
        <HeroBotanical />
      </DCArtboard>
      <DCArtboard id="collage" label="16 · Sticker Collage" width={W2} height={H2}>
        <HeroCollage />
      </DCArtboard>
    </DCSection>
  );
}

// expose so the main App picks it up
window.ExtrasSection = ExtrasSection;
