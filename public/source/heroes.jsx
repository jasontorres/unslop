// Eight hero/landing variations exploring different aesthetic systems.
// Each is a complete landing hero (nav + hero + supporting block), sized 1280×800.

const W = 1280;
const H = 800;

// ─────────────────────────────────────────────────────────────────────────────
// 1. EDITORIAL SERIF — magazine, refined neutrals, generous whitespace
// ─────────────────────────────────────────────────────────────────────────────
function HeroEditorial() {
  const s = {
    root: { width: W, height: H, background: '#f4f1ea', color: '#1a1714',
      fontFamily: '"Cormorant Garamond", "EB Garamond", Georgia, serif',
      display: 'flex', flexDirection: 'column', position: 'relative' },
    nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '32px 64px', borderBottom: '1px solid #1a1714',
      fontFamily: '"JetBrains Mono", ui-monospace, monospace',
      fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase' },
    brand: { fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontSize: 22, fontStyle: 'italic', fontWeight: 500, letterSpacing: '-0.01em',
      textTransform: 'none' },
    main: { flex: 1, display: 'grid', gridTemplateColumns: '1.2fr 1fr',
      borderBottom: '1px solid #1a1714' },
    left: { padding: '72px 64px 56px', display: 'flex', flexDirection: 'column',
      justifyContent: 'space-between', borderRight: '1px solid #1a1714' },
    issue: { fontFamily: '"JetBrains Mono", monospace', fontSize: 11,
      letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.7 },
    headline: { fontSize: 96, lineHeight: 0.92, fontWeight: 400,
      letterSpacing: '-0.025em', margin: '24px 0 0' },
    italic: { fontStyle: 'italic', fontWeight: 300 },
    lede: { fontSize: 19, lineHeight: 1.5, maxWidth: 460, marginTop: 40,
      fontFamily: 'Georgia, serif' },
    right: { padding: '72px 56px', display: 'flex', flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundImage: 'repeating-linear-gradient(135deg, transparent 0 14px, rgba(26,23,20,0.04) 14px 15px)' },
    placeholder: { flex: 1, border: '1px solid #1a1714',
      backgroundImage: 'repeating-linear-gradient(45deg, transparent 0 12px, rgba(26,23,20,0.06) 12px 13px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: '"JetBrains Mono", monospace', fontSize: 11,
      letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(26,23,20,0.5)' },
    foot: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
      padding: '24px 64px', fontFamily: '"JetBrains Mono", monospace',
      fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase' },
    cta: { fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 18,
      fontStyle: 'italic', textTransform: 'none', letterSpacing: 0,
      borderBottom: '1px solid #1a1714', paddingBottom: 2, cursor: 'pointer' },
  };
  return (
    <div style={s.root}>
      <div style={s.nav}>
        <div style={s.brand}>Maison&nbsp;&amp;&nbsp;Co.</div>
        <div style={{ display: 'flex', gap: 36 }}>
          <span>Journal</span><span>Atelier</span><span>Stockists</span><span>Contact</span>
        </div>
        <div>EST. MMXXV</div>
      </div>
      <div style={s.main}>
        <div style={s.left}>
          <div>
            <div style={s.issue}>Volume 04 · Spring Edition</div>
            <h1 style={s.headline}>
              A quieter way<br/>
              <span style={s.italic}>to dress</span> the<br/>
              modern home.
            </h1>
            <p style={s.lede}>
              Heirloom linens, slow-fired ceramics and lighting cast in a
              small studio outside Kyoto. Twelve new pieces, available this
              Thursday.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 28, alignItems: 'baseline' }}>
            <span style={s.cta}>Preview the collection →</span>
            <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11,
              letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.6 }}>
              12 pieces · No.001 — No.012
            </span>
          </div>
        </div>
        <div style={s.right}>
          <div style={s.placeholder}>EDITORIAL IMAGE</div>
        </div>
      </div>
      <div style={s.foot}>
        <div>The Atelier · Kyoto / Brooklyn</div>
        <div>Issue 04 — Spring 2026</div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. BRUTALIST MONO — stark, raw, monospace, sharp grid
// ─────────────────────────────────────────────────────────────────────────────
function HeroBrutalist() {
  const s = {
    root: { width: W, height: H, background: '#fafafa', color: '#000',
      fontFamily: '"JetBrains Mono", "IBM Plex Mono", ui-monospace, monospace',
      display: 'flex', flexDirection: 'column', position: 'relative',
      border: '2px solid #000' },
    nav: { display: 'flex', borderBottom: '2px solid #000' },
    navCell: { padding: '16px 22px', borderRight: '2px solid #000',
      fontSize: 12, letterSpacing: '0.06em', textTransform: 'uppercase' },
    navBrand: { padding: '16px 22px', borderRight: '2px solid #000',
      fontSize: 14, fontWeight: 700, letterSpacing: '-0.02em' },
    navSpace: { flex: 1, borderRight: '2px solid #000' },
    navBtn: { padding: '16px 22px', background: '#000', color: '#fafafa',
      fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', cursor: 'pointer' },
    main: { flex: 1, display: 'grid', gridTemplateColumns: '7fr 5fr' },
    left: { padding: '56px 48px', borderRight: '2px solid #000',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
    crumb: { fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase',
      display: 'flex', gap: 10, alignItems: 'center' },
    dot: { width: 8, height: 8, background: '#ff3b1f', borderRadius: 0 },
    h1: { fontSize: 76, lineHeight: 0.95, fontWeight: 800, letterSpacing: '-0.04em',
      margin: '40px 0 0', textTransform: 'uppercase' },
    mark: { background: '#ff3b1f', color: '#fafafa', padding: '0 8px' },
    p: { fontSize: 14, lineHeight: 1.6, maxWidth: 480, marginTop: 32,
      fontFamily: '"JetBrains Mono", monospace' },
    ctas: { display: 'flex', gap: 0, marginTop: 36 },
    btnA: { padding: '18px 28px', background: '#000', color: '#fafafa',
      fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
      cursor: 'pointer', border: '2px solid #000' },
    btnB: { padding: '18px 28px', background: 'transparent', color: '#000',
      fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
      cursor: 'pointer', border: '2px solid #000', borderLeft: 'none' },
    right: { display: 'grid', gridTemplateRows: '1fr 1fr' },
    stat: { padding: '32px 36px', borderBottom: '2px solid #000',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
    statBlk: { padding: '32px 36px', background: '#ff3b1f', color: '#fafafa',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
    statLbl: { fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase' },
    statNum: { fontSize: 88, fontWeight: 800, lineHeight: 1, letterSpacing: '-0.04em' },
  };
  return (
    <div style={s.root}>
      <div style={s.nav}>
        <div style={s.navBrand}>BLOCK//OS</div>
        <div style={s.navCell}>[01] Product</div>
        <div style={s.navCell}>[02] Pricing</div>
        <div style={s.navCell}>[03] Docs</div>
        <div style={s.navSpace}></div>
        <div style={s.navCell}>v2.4.0</div>
        <div style={s.navBtn}>→ Sign in</div>
      </div>
      <div style={s.main}>
        <div style={s.left}>
          <div>
            <div style={s.crumb}><span style={s.dot}></span>NOW SHIPPING / BUILD 240</div>
            <h1 style={s.h1}>
              Build. Ship.<br/>
              <span style={s.mark}>Repeat</span>—<br/>
              no nonsense.
            </h1>
            <p style={s.p}>
              A development environment with sharp edges. No animations, no
              gradients, no "magic". Just keystrokes that produce software.
            </p>
            <div style={s.ctas}>
              <button style={s.btnA}>Install →</button>
              <button style={s.btnB}>$ curl block.dev</button>
            </div>
          </div>
          <div style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.6 }}>
            14kb gzipped · zero dependencies · MIT
          </div>
        </div>
        <div style={s.right}>
          <div style={s.stat}>
            <div style={s.statLbl}>Cold start</div>
            <div style={s.statNum}>0.04s</div>
            <div style={s.statLbl}>↓ 98% vs industry avg</div>
          </div>
          <div style={s.statBlk}>
            <div style={s.statLbl}>Teams shipping</div>
            <div style={s.statNum}>12,408</div>
            <div style={s.statLbl}>This week</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. SWISS MODERNIST — grid, Helvetica, primary accent
// ─────────────────────────────────────────────────────────────────────────────
function HeroSwiss() {
  const s = {
    root: { width: W, height: H, background: '#ffffff', color: '#111',
      fontFamily: '"Inter Tight", Helvetica, Arial, sans-serif',
      display: 'flex', flexDirection: 'column' },
    nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '28px 56px', fontSize: 13, fontWeight: 500, letterSpacing: '-0.01em' },
    brand: { fontWeight: 700, fontSize: 18, letterSpacing: '-0.04em', display: 'flex',
      alignItems: 'center', gap: 10 },
    logo: { width: 22, height: 22, background: '#e8412c', borderRadius: '50%' },
    links: { display: 'flex', gap: 32 },
    cta: { background: '#111', color: '#fff', padding: '10px 18px', borderRadius: 999,
      fontWeight: 500, fontSize: 13, cursor: 'pointer' },
    grid: { flex: 1, display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)',
      gridTemplateRows: 'repeat(6, 1fr)', gap: 1, padding: '0 56px 56px',
      position: 'relative' },
    h1: { gridColumn: '1 / 9', gridRow: '1 / 4', alignSelf: 'end',
      fontSize: 124, lineHeight: 0.9, fontWeight: 600, letterSpacing: '-0.05em',
      margin: 0 },
    accent: { color: '#e8412c' },
    meta: { gridColumn: '9 / 13', gridRow: '1 / 2', display: 'flex', alignItems: 'start',
      fontSize: 12, letterSpacing: '0.04em', textTransform: 'uppercase', color: '#888' },
    block: { gridColumn: '9 / 13', gridRow: '2 / 4', alignSelf: 'end',
      fontSize: 16, lineHeight: 1.5, color: '#333', maxWidth: 320 },
    figure: { gridColumn: '1 / 6', gridRow: '4 / 7', background: '#f3f1ec',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden' },
    circle: { position: 'absolute', width: 280, height: 280, borderRadius: '50%',
      background: '#e8412c' },
    square: { position: 'absolute', width: 200, height: 200, background: '#111',
      right: -40, bottom: -40 },
    statRow: { gridColumn: '6 / 13', gridRow: '4 / 7', display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr', alignSelf: 'stretch', borderTop: '1px solid #111' },
    statCell: { padding: '24px 20px', borderRight: '1px solid #111',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
    statN: { fontSize: 56, fontWeight: 600, letterSpacing: '-0.04em', lineHeight: 1 },
    statL: { fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase',
      color: '#666' },
  };
  return (
    <div style={s.root}>
      <div style={s.nav}>
        <div style={s.brand}><span style={s.logo}></span> Form 01</div>
        <div style={s.links}>
          <span>Index</span><span>Studio</span><span>Process</span><span>Contact</span>
        </div>
        <div style={s.cta}>Start a project →</div>
      </div>
      <div style={s.grid}>
        <h1 style={s.h1}>
          Design,<br/>but<br/><span style={s.accent}>useful.</span>
        </h1>
        <div style={s.meta}>01 — Studio practice<br/>Zürich / Lisboa</div>
        <div style={s.block}>
          We make calm, durable interfaces for software companies that prefer
          their tools out of the way.
        </div>
        <div style={s.figure}>
          <div style={{ ...s.circle, left: -60, top: -60 }}></div>
          <div style={s.square}></div>
          <div style={{ position: 'absolute', width: 60, height: 60, background: '#fff',
            border: '1px solid #111', left: 200, top: 120 }}></div>
        </div>
        <div style={s.statRow}>
          <div style={s.statCell}>
            <div style={s.statL}>Founded</div>
            <div style={s.statN}>2018</div>
          </div>
          <div style={s.statCell}>
            <div style={s.statL}>Projects</div>
            <div style={s.statN}>84</div>
          </div>
          <div style={{ ...s.statCell, borderRight: 'none' }}>
            <div style={s.statL}>Awards</div>
            <div style={s.statN}>12</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. SOFT PASTEL — warm, rounded, friendly, blob shapes
// ─────────────────────────────────────────────────────────────────────────────
function HeroSoft() {
  const s = {
    root: { width: W, height: H, background: '#fff4ec', color: '#3a2418',
      fontFamily: '"DM Sans", "Plus Jakarta Sans", system-ui, sans-serif',
      display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' },
    blob1: { position: 'absolute', width: 520, height: 520, borderRadius: '50%',
      background: '#ffd9b8', left: -180, bottom: -200, filter: 'blur(2px)' },
    blob2: { position: 'absolute', width: 360, height: 360, borderRadius: '50%',
      background: '#ffb3c4', right: -100, top: 80, filter: 'blur(2px)' },
    blob3: { position: 'absolute', width: 220, height: 220, borderRadius: '50%',
      background: '#d4c9ff', right: 200, bottom: 60, filter: 'blur(1px)', opacity: 0.7 },
    nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '24px 48px', position: 'relative', zIndex: 2 },
    brand: { display: 'flex', alignItems: 'center', gap: 10,
      fontFamily: '"Fraunces", "DM Serif Display", serif',
      fontSize: 26, fontWeight: 500, letterSpacing: '-0.02em' },
    bIcon: { width: 32, height: 32, borderRadius: '50%', background: '#ff7a45',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#fff4ec', fontWeight: 700, fontSize: 16 },
    pill: { background: 'rgba(255,255,255,0.7)', padding: '8px 6px 8px 18px',
      borderRadius: 999, display: 'flex', gap: 18, alignItems: 'center',
      fontSize: 14, fontWeight: 500, backdropFilter: 'blur(8px)' },
    pillBtn: { background: '#3a2418', color: '#fff4ec', padding: '8px 18px',
      borderRadius: 999, cursor: 'pointer' },
    main: { flex: 1, display: 'flex', alignItems: 'center', padding: '0 80px',
      position: 'relative', zIndex: 2 },
    left: { flex: 1, maxWidth: 640 },
    chip: { display: 'inline-flex', alignItems: 'center', gap: 8,
      background: 'rgba(255,255,255,0.7)', padding: '6px 14px', borderRadius: 999,
      fontSize: 13, fontWeight: 500, marginBottom: 28 },
    chipDot: { width: 8, height: 8, borderRadius: '50%', background: '#22c55e' },
    h1: { fontSize: 88, lineHeight: 1, fontWeight: 400, margin: 0,
      letterSpacing: '-0.035em',
      fontFamily: '"Fraunces", "DM Serif Display", serif' },
    underline: { textDecoration: 'underline', textDecorationStyle: 'wavy',
      textDecorationColor: '#ff7a45', textUnderlineOffset: 12, fontStyle: 'italic' },
    p: { fontSize: 19, lineHeight: 1.55, marginTop: 28, maxWidth: 460, color: '#5c3d2c' },
    ctas: { display: 'flex', gap: 14, marginTop: 36, alignItems: 'center' },
    btnA: { background: '#3a2418', color: '#fff4ec', padding: '16px 28px',
      borderRadius: 999, fontSize: 15, fontWeight: 600, cursor: 'pointer', border: 'none' },
    btnB: { background: 'transparent', color: '#3a2418', padding: '16px 24px',
      fontSize: 15, fontWeight: 600, cursor: 'pointer', border: 'none',
      textDecoration: 'underline', textUnderlineOffset: 4 },
    card: { width: 340, marginLeft: 'auto', background: '#fff',
      borderRadius: 28, padding: 28, boxShadow: '0 30px 80px -20px rgba(58,36,24,0.2)',
      transform: 'rotate(2.5deg)' },
    cardLabel: { fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase',
      color: '#a07a5e', fontWeight: 600 },
    cardH: { fontFamily: '"Fraunces", serif', fontSize: 28, fontWeight: 500,
      marginTop: 8, letterSpacing: '-0.02em' },
    cardRow: { display: 'flex', alignItems: 'center', gap: 12, marginTop: 16,
      padding: '12px 0', borderTop: '1px dashed #f0d8c4' },
    avatar: { width: 36, height: 36, borderRadius: '50%' },
  };
  return (
    <div style={s.root}>
      <div style={s.blob1}></div>
      <div style={s.blob2}></div>
      <div style={s.blob3}></div>
      <div style={s.nav}>
        <div style={s.brand}><span style={s.bIcon}>m</span> milkpath</div>
        <div style={s.pill}>
          <span>Recipes</span><span>Pantry</span><span>Community</span>
          <span style={s.pillBtn}>Get the app</span>
        </div>
      </div>
      <div style={s.main}>
        <div style={s.left}>
          <div style={s.chip}><span style={s.chipDot}></span> 24,000 home cooks this week</div>
          <h1 style={s.h1}>
            Cooking,<br/>made <span style={s.underline}>cozy</span><br/>again.
          </h1>
          <p style={s.p}>
            Recipes that read like a friend's notebook. A pantry that
            remembers what you have. No 14-paragraph backstories.
          </p>
          <div style={s.ctas}>
            <button style={s.btnA}>Start cooking — free</button>
            <button style={s.btnB}>Watch the tour</button>
          </div>
        </div>
        <div style={s.card}>
          <div style={s.cardLabel}>Tonight's plan</div>
          <div style={s.cardH}>Brown butter<br/>orecchiette</div>
          <div style={s.cardRow}>
            <div style={{ ...s.avatar, background: '#ffd9b8' }}></div>
            <div style={{ fontSize: 13 }}><b>22 min</b> · 6 ingredients<br/>
              <span style={{ color: '#a07a5e' }}>You have 5 already</span></div>
          </div>
          <div style={s.cardRow}>
            <div style={{ ...s.avatar, background: '#ffb3c4' }}></div>
            <div style={{ fontSize: 13 }}>Shared by <b>Nora</b><br/>
              <span style={{ color: '#a07a5e' }}>Saved 12 times today</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 5. DARK TERMINAL — black, neon green/cyan, mono, scanlines
// ─────────────────────────────────────────────────────────────────────────────
function HeroTerminal() {
  const [tick, setTick] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 600);
    return () => clearInterval(id);
  }, []);
  const s = {
    root: { width: W, height: H, background: '#0a0e0a', color: '#c8f5c8',
      fontFamily: '"JetBrains Mono", "IBM Plex Mono", monospace',
      display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' },
    scan: { position: 'absolute', inset: 0,
      backgroundImage: 'repeating-linear-gradient(0deg, transparent 0 2px, rgba(0,255,140,0.025) 2px 3px)',
      pointerEvents: 'none', zIndex: 1 },
    glow: { position: 'absolute', width: 700, height: 700, borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(0,255,140,0.15), transparent 60%)',
      right: -200, top: -200, pointerEvents: 'none' },
    nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '20px 40px', borderBottom: '1px solid rgba(0,255,140,0.2)',
      position: 'relative', zIndex: 2, fontSize: 12, letterSpacing: '0.04em' },
    brand: { color: '#00ff8c', fontWeight: 700, fontSize: 14, letterSpacing: '0.08em',
      display: 'flex', alignItems: 'center', gap: 8 },
    dot: { width: 8, height: 8, borderRadius: '50%', background: '#00ff8c',
      boxShadow: '0 0 12px #00ff8c' },
    links: { display: 'flex', gap: 28, color: '#7eb47e' },
    main: { flex: 1, display: 'grid', gridTemplateColumns: '1.1fr 1fr',
      position: 'relative', zIndex: 2 },
    left: { padding: '64px 56px', display: 'flex', flexDirection: 'column',
      justifyContent: 'center' },
    prompt: { fontSize: 12, color: '#7eb47e', letterSpacing: '0.06em', marginBottom: 28 },
    h1: { fontSize: 72, lineHeight: 1.02, fontWeight: 500, margin: 0,
      letterSpacing: '-0.02em', color: '#eafdea' },
    glowText: { color: '#00ff8c', textShadow: '0 0 24px rgba(0,255,140,0.5)' },
    cursor: { display: 'inline-block', width: 12, height: '0.85em',
      background: '#00ff8c', marginLeft: 4, verticalAlign: 'baseline',
      opacity: tick % 2 ? 0 : 1, boxShadow: '0 0 12px #00ff8c' },
    p: { fontSize: 14, lineHeight: 1.7, color: '#9bc89b', marginTop: 32, maxWidth: 460 },
    ctas: { display: 'flex', gap: 12, marginTop: 36 },
    btnA: { background: '#00ff8c', color: '#0a0e0a', padding: '14px 24px',
      fontFamily: 'inherit', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em',
      textTransform: 'uppercase', border: 'none', cursor: 'pointer',
      boxShadow: '0 0 24px rgba(0,255,140,0.4)' },
    btnB: { background: 'transparent', color: '#c8f5c8', padding: '14px 24px',
      fontFamily: 'inherit', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em',
      textTransform: 'uppercase', border: '1px solid rgba(0,255,140,0.4)', cursor: 'pointer' },
    right: { padding: 40, display: 'flex', alignItems: 'center' },
    term: { width: '100%', background: '#000', border: '1px solid rgba(0,255,140,0.3)',
      borderRadius: 6, fontSize: 13, lineHeight: 1.8 },
    termBar: { display: 'flex', gap: 6, padding: '10px 14px',
      borderBottom: '1px solid rgba(0,255,140,0.2)', alignItems: 'center' },
    tdot: w => ({ width: 10, height: 10, borderRadius: '50%', background: w }),
    termBody: { padding: '16px 18px' },
    line: c => ({ color: c }),
  };
  return (
    <div style={s.root}>
      <div style={s.glow}></div>
      <div style={s.nav}>
        <div style={s.brand}><span style={s.dot}></span> NETRA//OS</div>
        <div style={s.links}>
          <span>~/docs</span><span>~/api</span><span>~/changelog</span><span>~/blog</span>
        </div>
        <div style={{ color: '#7eb47e' }}>uptime · 99.99% ▲</div>
      </div>
      <div style={s.main}>
        <div style={s.left}>
          <div style={s.prompt}>$ ./welcome --version=4.2</div>
          <h1 style={s.h1}>
            Observability,<br/>
            <span style={s.glowText}>without the dashboards</span><span style={s.cursor}></span>
          </h1>
          <p style={s.p}>
            // A query language for your infrastructure. Pipe logs, traces and
            // metrics into one stream. Grep your stack like it's a file.
          </p>
          <div style={s.ctas}>
            <button style={s.btnA}>$ Install →</button>
            <button style={s.btnB}>Read the docs</button>
          </div>
        </div>
        <div style={s.right}>
          <div style={s.term}>
            <div style={s.termBar}>
              <span style={s.tdot('#ff5f56')}></span>
              <span style={s.tdot('#ffbd2e')}></span>
              <span style={s.tdot('#27c93f')}></span>
              <span style={{ marginLeft: 12, fontSize: 11, color: '#7eb47e' }}>~/prod · zsh</span>
            </div>
            <div style={s.termBody}>
              <div style={s.line('#7eb47e')}>$ netra tail --service=api</div>
              <div style={s.line('#c8f5c8')}>→ streaming from 14 pods...</div>
              <div style={s.line('#9bc89b')}>12:04:22  GET  /v2/users      <span style={{ color: '#00ff8c' }}>200</span>  84ms</div>
              <div style={s.line('#9bc89b')}>12:04:22  POST /v2/orders     <span style={{ color: '#00ff8c' }}>201</span>  142ms</div>
              <div style={s.line('#9bc89b')}>12:04:23  GET  /v2/inventory  <span style={{ color: '#ffbd2e' }}>304</span>  12ms</div>
              <div style={s.line('#9bc89b')}>12:04:23  GET  /healthz       <span style={{ color: '#00ff8c' }}>200</span>  3ms</div>
              <div style={s.line('#ff6b6b')}>12:04:24  POST /v2/checkout   <span style={{ background: '#ff6b6b', color: '#000', padding: '0 4px' }}>500</span>  2.1s</div>
              <div style={s.line('#7eb47e')}>  └─ <span style={{ color: '#00ff8c' }}>↳ alert sent to #sev2 · 0.2s</span></div>
              <div style={s.line('#7eb47e')}>$ <span style={s.cursor}></span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 6. DISPLAY / ANTI-DESIGN — chunky oversized type, layered, off-grid
// ─────────────────────────────────────────────────────────────────────────────
function HeroDisplay() {
  const s = {
    root: { width: W, height: H, background: '#1a1a1a', color: '#fff5e1',
      fontFamily: '"Archivo", "Inter Tight", sans-serif',
      display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' },
    nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '24px 48px', position: 'relative', zIndex: 5,
      fontFamily: '"Archivo", sans-serif', fontSize: 13, fontWeight: 700,
      letterSpacing: '0.04em', textTransform: 'uppercase' },
    brand: { fontFamily: '"Archivo Black", "Archivo", sans-serif',
      fontSize: 24, letterSpacing: '-0.02em' },
    links: { display: 'flex', gap: 28 },
    bigType: { position: 'absolute', left: -20, top: 80,
      fontFamily: '"Archivo Black", "Archivo", sans-serif',
      fontSize: 380, lineHeight: 0.82, fontWeight: 900, letterSpacing: '-0.06em',
      color: '#ffea4d', userSelect: 'none', zIndex: 1, whiteSpace: 'nowrap' },
    bigType2: { position: 'absolute', left: 60, top: 380,
      fontFamily: '"Archivo Black", sans-serif',
      fontSize: 380, lineHeight: 0.82, fontWeight: 900, letterSpacing: '-0.06em',
      color: 'transparent', WebkitTextStroke: '2px #ffea4d',
      userSelect: 'none', zIndex: 1 },
    sticker: { position: 'absolute', zIndex: 4,
      background: '#ff3b6f', color: '#fff', padding: '18px 22px',
      borderRadius: '50%', width: 130, height: 130,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', fontWeight: 800, fontSize: 13, lineHeight: 1.2,
      letterSpacing: '0.02em', textTransform: 'uppercase',
      transform: 'rotate(-12deg)', right: 80, top: 120,
      boxShadow: '0 12px 0 #1a1a1a, 0 12px 24px rgba(0,0,0,0.4)' },
    figure: { position: 'absolute', right: 60, bottom: 80, width: 340, height: 340,
      background: '#fff5e1', zIndex: 3,
      boxShadow: '20px 20px 0 #ffea4d',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      transform: 'rotate(3deg)' },
    figureInner: { width: '85%', height: '85%',
      backgroundImage: 'repeating-linear-gradient(45deg, #1a1a1a 0 14px, transparent 14px 28px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: '"Archivo Black", sans-serif', fontSize: 14,
      letterSpacing: '0.2em', color: '#1a1a1a', textTransform: 'uppercase' },
    bottom: { position: 'absolute', left: 48, bottom: 48, zIndex: 5, maxWidth: 540 },
    chip: { display: 'inline-block', background: '#ff3b6f', color: '#fff5e1',
      padding: '6px 12px', fontSize: 12, fontWeight: 700,
      letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 },
    sub: { fontSize: 18, lineHeight: 1.5, fontWeight: 500, color: '#fff5e1',
      maxWidth: 460 },
    ctaRow: { display: 'flex', gap: 14, marginTop: 24, alignItems: 'center' },
    btnA: { background: '#ffea4d', color: '#1a1a1a', padding: '16px 28px',
      fontFamily: '"Archivo", sans-serif', fontWeight: 800, fontSize: 14,
      letterSpacing: '0.06em', textTransform: 'uppercase',
      border: 'none', cursor: 'pointer', borderRadius: 0 },
    btnB: { background: 'transparent', color: '#fff5e1', padding: '16px 28px',
      fontWeight: 800, fontSize: 14, letterSpacing: '0.06em', textTransform: 'uppercase',
      border: '2px solid #fff5e1', cursor: 'pointer' },
  };
  return (
    <div style={s.root}>
      <div style={s.nav}>
        <div style={s.brand}>RIOT*</div>
        <div style={s.links}>
          <span>Shop</span><span>Drops</span><span>Stockists</span><span>Manifesto</span>
        </div>
        <div>Cart (0)</div>
      </div>
      <div style={s.bigType}>LOUD</div>
      <div style={s.bigType2}>&amp; UGLY</div>
      <div style={s.sticker}>New<br/>drop<br/>05.24</div>
      <div style={s.figure}>
        <div style={s.figureInner}>PRODUCT&nbsp;SHOT</div>
      </div>
      <div style={s.bottom}>
        <div style={s.chip}>SS26 / The Anti-Collection</div>
        <p style={s.sub}>
          Clothes that don't ask permission. Made loud, sold direct, in editions
          of fifty. When they're gone, they're gone.
        </p>
        <div style={s.ctaRow}>
          <button style={s.btnA}>Shop the drop →</button>
          <button style={s.btnB}>Get on the list</button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 7. PREMIUM DARK GLASS — deep, sophisticated, champagne accent
// ─────────────────────────────────────────────────────────────────────────────
function HeroPremium() {
  const s = {
    root: { width: W, height: H, color: '#e8e4dc',
      background: 'radial-gradient(ellipse at 30% 20%, #1c2438 0%, #0b0e18 60%, #05070d 100%)',
      fontFamily: '"Inter Tight", system-ui, sans-serif',
      display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' },
    grain: { position: 'absolute', inset: 0, opacity: 0.06, pointerEvents: 'none',
      backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)',
      backgroundSize: '3px 3px' },
    orb: { position: 'absolute', width: 600, height: 600, borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(200,170,108,0.25), transparent 60%)',
      right: -180, bottom: -180, pointerEvents: 'none' },
    nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '28px 64px', position: 'relative', zIndex: 2, fontSize: 13, fontWeight: 400,
      borderBottom: '1px solid rgba(232,228,220,0.08)' },
    brand: { fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 26,
      letterSpacing: '0.2em', fontWeight: 500, color: '#c8aa6c' },
    links: { display: 'flex', gap: 36, color: '#a0a08f', letterSpacing: '0.08em',
      textTransform: 'uppercase', fontSize: 11 },
    cta: { color: '#c8aa6c', borderBottom: '1px solid #c8aa6c', paddingBottom: 4,
      cursor: 'pointer', letterSpacing: '0.12em', textTransform: 'uppercase', fontSize: 11 },
    main: { flex: 1, display: 'grid', gridTemplateColumns: '1.2fr 1fr',
      alignItems: 'center', padding: '0 64px', gap: 64, position: 'relative', zIndex: 2 },
    eyebrow: { fontSize: 11, letterSpacing: '0.32em', textTransform: 'uppercase',
      color: '#c8aa6c', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12 },
    rule: { width: 32, height: 1, background: '#c8aa6c' },
    h1: { fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontSize: 104, lineHeight: 1, fontWeight: 300, margin: 0,
      letterSpacing: '-0.025em', color: '#f3eee2' },
    italic: { fontStyle: 'italic', color: '#c8aa6c', fontWeight: 400 },
    p: { fontSize: 16, lineHeight: 1.7, color: '#a8a59c', marginTop: 32,
      maxWidth: 440, fontWeight: 400 },
    ctas: { display: 'flex', gap: 18, marginTop: 44, alignItems: 'center' },
    btnA: { background: 'linear-gradient(180deg, #d4b87c, #b89557)', color: '#0b0e18',
      padding: '16px 32px', border: 'none', cursor: 'pointer',
      fontSize: 12, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase' },
    btnB: { color: '#e8e4dc', background: 'transparent', border: 'none',
      fontSize: 12, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase',
      cursor: 'pointer', padding: '16px 0' },
    glass: { width: '100%', aspectRatio: '4/5', position: 'relative',
      background: 'linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
      border: '1px solid rgba(232,228,220,0.1)',
      backdropFilter: 'blur(20px)', borderRadius: 4,
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      padding: 32, overflow: 'hidden' },
    glassLabel: { fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase',
      color: '#a0a08f' },
    glassNum: { fontFamily: '"Cormorant Garamond", serif', fontSize: 96,
      fontWeight: 300, color: '#c8aa6c', lineHeight: 1, letterSpacing: '-0.04em' },
    line: { width: '100%', height: 1, background: 'rgba(232,228,220,0.12)' },
    row: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
      padding: '12px 0' },
  };
  return (
    <div style={s.root}>
      <div style={s.grain}></div>
      <div style={s.orb}></div>
      <div style={s.nav}>
        <div style={s.brand}>NORÉ</div>
        <div style={s.links}>
          <span>The House</span><span>Portfolio</span><span>Services</span><span>Journal</span>
        </div>
        <div style={s.cta}>Schedule a consultation</div>
      </div>
      <div style={s.main}>
        <div>
          <div style={s.eyebrow}><span style={s.rule}></span> Private wealth · since 1962</div>
          <h1 style={s.h1}>
            Stewardship<br/>
            for what is<br/>
            <span style={s.italic}>worth keeping.</span>
          </h1>
          <p style={s.p}>
            A multi-family office for the third generation. Discreet advisory,
            patient capital, and a long view of every family we work with.
          </p>
          <div style={s.ctas}>
            <button style={s.btnA}>Request introduction</button>
            <button style={s.btnB}>Read our principles →</button>
          </div>
        </div>
        <div style={s.glass}>
          <div>
            <div style={s.glassLabel}>Assets under stewardship</div>
            <div style={s.glassNum}>$14.2B</div>
          </div>
          <div style={{ width: '100%', height: 1, background: 'rgba(200,170,108,0.3)' }}></div>
          <div>
            <div style={s.row}><span style={s.glassLabel}>Families</span><span style={{ color: '#e8e4dc', fontSize: 14 }}>62</span></div>
            <div style={s.line}></div>
            <div style={s.row}><span style={s.glassLabel}>Avg. tenure</span><span style={{ color: '#e8e4dc', fontSize: 14 }}>22 years</span></div>
            <div style={s.line}></div>
            <div style={s.row}><span style={s.glassLabel}>Generations served</span><span style={{ color: '#e8e4dc', fontSize: 14 }}>1962—</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 8. VIBRANT POP — electric color, playful, big chunky sans
// ─────────────────────────────────────────────────────────────────────────────
function HeroVibrant() {
  const s = {
    root: { width: W, height: H, color: '#0a0a2e',
      background: 'linear-gradient(135deg, #6c4cff 0%, #ff6b9d 50%, #ffc04c 100%)',
      fontFamily: '"Bricolage Grotesque", "Inter Tight", sans-serif',
      display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' },
    shape1: { position: 'absolute', width: 240, height: 240, borderRadius: '50%',
      background: '#4cf0e8', right: 100, top: 120, mixBlendMode: 'screen', opacity: 0.9 },
    shape2: { position: 'absolute', width: 180, height: 180,
      background: '#ff3b9b', left: 540, bottom: 80, borderRadius: '50%',
      mixBlendMode: 'multiply', opacity: 0.7 },
    grid: { position: 'absolute', inset: 0, opacity: 0.08, pointerEvents: 'none',
      backgroundImage: 'linear-gradient(#0a0a2e 1px, transparent 1px), linear-gradient(90deg, #0a0a2e 1px, transparent 1px)',
      backgroundSize: '40px 40px' },
    nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '24px 40px', position: 'relative', zIndex: 3 },
    brand: { display: 'flex', alignItems: 'center', gap: 8,
      fontSize: 22, fontWeight: 800, letterSpacing: '-0.04em' },
    bDot: { display: 'inline-block', width: 14, height: 14, borderRadius: '50%',
      background: '#0a0a2e' },
    navPill: { background: '#0a0a2e', color: '#fff', padding: '6px 6px 6px 22px',
      borderRadius: 999, display: 'flex', alignItems: 'center', gap: 20,
      fontSize: 14, fontWeight: 500 },
    npBtn: { background: '#ffc04c', color: '#0a0a2e', padding: '8px 18px',
      borderRadius: 999, fontWeight: 700, cursor: 'pointer' },
    main: { flex: 1, display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: '0 40px', position: 'relative', zIndex: 2 },
    sticker: { display: 'inline-flex', alignItems: 'center', gap: 8,
      background: '#0a0a2e', color: '#4cf0e8', padding: '8px 16px',
      borderRadius: 999, fontWeight: 700, fontSize: 13, marginBottom: 20, width: 'fit-content' },
    h1: { fontSize: 168, lineHeight: 0.86, fontWeight: 700, margin: 0,
      letterSpacing: '-0.05em', maxWidth: 1100 },
    outline: { color: 'transparent', WebkitTextStroke: '2px #0a0a2e' },
    yellow: { color: '#ffc04c', textShadow: '4px 4px 0 #0a0a2e' },
    p: { fontSize: 21, lineHeight: 1.4, fontWeight: 500, marginTop: 32,
      maxWidth: 560, color: '#0a0a2e' },
    ctas: { display: 'flex', gap: 14, marginTop: 36 },
    btnA: { background: '#0a0a2e', color: '#fff', padding: '20px 32px',
      borderRadius: 999, fontWeight: 700, fontSize: 16, cursor: 'pointer',
      border: 'none', display: 'flex', alignItems: 'center', gap: 10 },
    btnB: { background: '#fff', color: '#0a0a2e', padding: '20px 32px',
      borderRadius: 999, fontWeight: 700, fontSize: 16, cursor: 'pointer', border: 'none' },
    bottomRow: { position: 'absolute', bottom: 32, left: 40, right: 40,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      fontSize: 13, fontWeight: 600, color: '#0a0a2e', zIndex: 3 },
    avatarRow: { display: 'flex' },
    av: i => ({ width: 36, height: 36, borderRadius: '50%',
      border: '2px solid #fff', marginLeft: i === 0 ? 0 : -10,
      background: ['#4cf0e8', '#ff3b9b', '#ffc04c', '#6c4cff'][i] }),
  };
  return (
    <div style={s.root}>
      <div style={s.grid}></div>
      <div style={s.shape1}></div>
      <div style={s.shape2}></div>
      <div style={s.nav}>
        <div style={s.brand}><span style={s.bDot}></span> POPSHOP</div>
        <div style={s.navPill}>
          <span>Browse</span><span>Sell</span><span>About</span>
          <span style={s.npBtn}>Start free</span>
        </div>
      </div>
      <div style={s.main}>
        <div style={s.sticker}>★ 4.9 · 28k creators</div>
        <h1 style={s.h1}>
          Sell <span style={s.yellow}>anything</span><br/>
          you make,<br/>
          <span style={s.outline}>in 3 minutes.</span>
        </h1>
        <p style={s.p}>
          The friendliest storefront for makers, illustrators, and
          weirdos selling cool stuff to the internet.
        </p>
        <div style={s.ctas}>
          <button style={s.btnA}>Open my shop →</button>
          <button style={s.btnB}>See live stores</button>
        </div>
      </div>
      <div style={s.bottomRow}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={s.avatarRow}>
            {[0,1,2,3].map(i => <div key={i} style={s.av(i)}></div>)}
          </div>
          <span>Joined this week: <b>+412</b></span>
        </div>
        <div>No credit card · 0% fees year one</div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Canvas
// ─────────────────────────────────────────────────────────────────────────────
function App() {
  return (
    <DesignCanvas>
      <DCSection id="heroes" title="Hero / Landing — Eight Directions"
        subtitle="Each artboard pairs a typographic system with a visual language. Drag to reorder, click the expand icon to focus.">
        <DCArtboard id="editorial" label="01 · Editorial Serif" width={W} height={H}>
          <HeroEditorial />
        </DCArtboard>
        <DCArtboard id="brutalist" label="02 · Brutalist Mono" width={W} height={H}>
          <HeroBrutalist />
        </DCArtboard>
        <DCArtboard id="swiss" label="03 · Swiss Modernist" width={W} height={H}>
          <HeroSwiss />
        </DCArtboard>
        <DCArtboard id="soft" label="04 · Soft Pastel" width={W} height={H}>
          <HeroSoft />
        </DCArtboard>
        <DCArtboard id="terminal" label="05 · Dark Terminal" width={W} height={H}>
          <HeroTerminal />
        </DCArtboard>
        <DCArtboard id="display" label="06 · Display / Anti-design" width={W} height={H}>
          <HeroDisplay />
        </DCArtboard>
        <DCArtboard id="premium" label="07 · Premium Dark Glass" width={W} height={H}>
          <HeroPremium />
        </DCArtboard>
        <DCArtboard id="vibrant" label="08 · Vibrant Pop" width={W} height={H}>
          <HeroVibrant />
        </DCArtboard>
      </DCSection>
      {window.ExtrasSection ? <window.ExtrasSection /> : null}
      {window.ColorBatchSection ? <window.ColorBatchSection /> : null}
      {window.BrutalSysSection ? <window.BrutalSysSection /> : null}
      {window.MinimalLabSection ? <window.MinimalLabSection /> : null}
      {window.AgencyLandSection ? <window.AgencyLandSection /> : null}
      {window.DashboardSection ? <window.DashboardSection /> : null}
    </DesignCanvas>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
