// Eight more — saturated, varied backgrounds. No cream, no orange, no italic
// display serifs.

const W3 = 1280;
const H3 = 800;

// ─────────────────────────────────────────────────────────────────────────────
// 17. LIME / CHARTREUSE — sport/performance, acid lime, kinetic
// ─────────────────────────────────────────────────────────────────────────────
function HeroLime() {
  const s = {
    root: { width: W3, height: H3, background: '#d4f000', color: '#0a0f00',
      fontFamily: '"Inter Tight", "Archivo", sans-serif',
      display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' },
    bigType: { position: 'absolute', right: -40, top: 40,
      fontFamily: '"Archivo Black", "Archivo", sans-serif',
      fontSize: 420, lineHeight: 0.82, fontWeight: 900, letterSpacing: '-0.06em',
      color: '#0a0f00', opacity: 0.07, userSelect: 'none', whiteSpace: 'nowrap' },
    nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '24px 40px', position: 'relative', zIndex: 3,
      fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' },
    brand: { fontFamily: '"Archivo Black", sans-serif', fontSize: 22,
      letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: 8,
      textTransform: 'none' },
    bMark: { width: 24, height: 24, background: '#0a0f00',
      transform: 'skew(-15deg)' },
    links: { display: 'flex', gap: 28 },
    cta: { background: '#0a0f00', color: '#d4f000', padding: '10px 18px',
      cursor: 'pointer', clipPath: 'polygon(8% 0, 100% 0, 92% 100%, 0 100%)' },
    main: { flex: 1, display: 'grid', gridTemplateColumns: '1.5fr 1fr',
      padding: '0 40px 32px', gap: 32, position: 'relative', zIndex: 2,
      alignItems: 'end' },
    h1: { fontFamily: '"Archivo Black", sans-serif',
      fontSize: 152, lineHeight: 0.86, fontWeight: 900, margin: 0,
      letterSpacing: '-0.05em', textTransform: 'uppercase' },
    outline: { color: 'transparent', WebkitTextStroke: '3px #0a0f00' },
    arrow: { display: 'inline-block', transform: 'skew(-15deg)',
      background: '#0a0f00', color: '#d4f000', padding: '0 16px', marginRight: 8 },
    sub: { fontSize: 16, lineHeight: 1.45, marginTop: 24, maxWidth: 460,
      fontWeight: 500 },
    ctas: { display: 'flex', gap: 12, marginTop: 28, alignItems: 'center' },
    btnA: { background: '#0a0f00', color: '#d4f000', padding: '18px 28px',
      fontWeight: 800, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase',
      border: 'none', cursor: 'pointer',
      clipPath: 'polygon(6% 0, 100% 0, 94% 100%, 0 100%)' },
    btnB: { background: 'transparent', color: '#0a0f00', padding: '18px 24px',
      fontWeight: 800, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase',
      border: '2px solid #0a0f00', cursor: 'pointer' },
    statCol: { display: 'flex', flexDirection: 'column', gap: 16, paddingBottom: 40 },
    statCard: { background: '#0a0f00', color: '#d4f000', padding: '20px 22px',
      borderRadius: 2, clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))' },
    statLbl: { fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
      textTransform: 'uppercase', opacity: 0.7 },
    statNum: { fontFamily: '"Archivo Black", sans-serif',
      fontSize: 56, fontWeight: 900, lineHeight: 1, letterSpacing: '-0.04em',
      marginTop: 6 },
    statDelta: { fontSize: 12, fontWeight: 700, marginTop: 4 },
    tickerWrap: { position: 'absolute', bottom: 0, left: 0, right: 0,
      background: '#0a0f00', color: '#d4f000', padding: '10px 0',
      fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase',
      whiteSpace: 'nowrap', overflow: 'hidden', zIndex: 4 },
    ticker: { display: 'inline-flex', gap: 28, paddingLeft: 28 },
  };
  return (
    <div style={s.root}>
      <div style={s.bigType}>FAST</div>
      <div style={s.nav}>
        <div style={s.brand}><span style={s.bMark}></span> PACE//FORM</div>
        <div style={s.links}>
          <span>Train</span><span>Compete</span><span>Gear</span><span>Crew</span>
        </div>
        <div style={s.cta}>JOIN →</div>
      </div>
      <div style={s.main}>
        <div>
          <h1 style={s.h1}>
            <span style={s.arrow}>→</span>RUN<br/>
            HARDER.<br/>
            <span style={s.outline}>RUN</span> SMARTER.
          </h1>
          <p style={s.sub}>
            A training club for runners who track everything and look at none
            of it. We do the data. You do the miles.
          </p>
          <div style={s.ctas}>
            <button style={s.btnA}>Start 30-day plan →</button>
            <button style={s.btnB}>How it works</button>
          </div>
        </div>
        <div style={s.statCol}>
          <div style={s.statCard}>
            <div style={s.statLbl}>Avg pace · this week</div>
            <div style={s.statNum}>5:42</div>
            <div style={s.statDelta}>▲ 0:14 vs last wk</div>
          </div>
          <div style={s.statCard}>
            <div style={s.statLbl}>Active members</div>
            <div style={s.statNum}>48,210</div>
            <div style={s.statDelta}>in 124 cities</div>
          </div>
        </div>
      </div>
      <div style={s.tickerWrap}>
        <div style={s.ticker}>
          ◆ TOKYO 24°C — 12 RUNNERS OUT&nbsp;&nbsp;◆ BERLIN MARATHON · 142 DAYS&nbsp;&nbsp;
          ◆ NEW PR · M. OKAFOR · 18:22 5K&nbsp;&nbsp;◆ WEEKLY CLUB · TUE 6:30PM&nbsp;&nbsp;
          ◆ TOKYO 24°C — 12 RUNNERS OUT&nbsp;&nbsp;◆ BERLIN MARATHON · 142 DAYS&nbsp;&nbsp;
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 18. DEEP FOREST — heritage outdoor, ivory + brass
// ─────────────────────────────────────────────────────────────────────────────
function HeroForest() {
  const s = {
    root: { width: W3, height: H3, background: '#0f2818', color: '#ede5d2',
      fontFamily: '"Inter Tight", "DM Sans", sans-serif',
      display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' },
    pattern: { position: 'absolute', inset: 0, opacity: 0.08, pointerEvents: 'none',
      backgroundImage: 'repeating-linear-gradient(135deg, #ede5d2 0 1px, transparent 1px 24px)' },
    nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '28px 56px', position: 'relative', zIndex: 3,
      borderBottom: '1px solid rgba(237,229,210,0.2)',
      fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase' },
    brand: { display: 'flex', alignItems: 'center', gap: 12,
      fontWeight: 700, fontSize: 16, letterSpacing: '0.18em' },
    crest: { width: 28, height: 28, borderRadius: '50%',
      border: '1.5px solid #c39a4d', display: 'flex', alignItems: 'center',
      justifyContent: 'center', color: '#c39a4d', fontSize: 13, fontWeight: 700,
      letterSpacing: 0 },
    links: { display: 'flex', gap: 36 },
    main: { flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr',
      padding: '40px 56px', gap: 56, position: 'relative', zIndex: 2,
      alignItems: 'center' },
    eyebrow: { fontSize: 11, color: '#c39a4d', letterSpacing: '0.3em',
      textTransform: 'uppercase', marginBottom: 28, display: 'flex',
      alignItems: 'center', gap: 14 },
    rule: { width: 40, height: 1, background: '#c39a4d' },
    h1: { fontFamily: '"Playfair Display", Georgia, serif',
      fontSize: 88, lineHeight: 1, fontWeight: 500, margin: 0,
      letterSpacing: '-0.015em', color: '#ede5d2' },
    brass: { color: '#c39a4d' },
    p: { fontSize: 17, lineHeight: 1.65, marginTop: 32, maxWidth: 460,
      color: '#b8b09a' },
    ctas: { display: 'flex', gap: 22, marginTop: 40, alignItems: 'center' },
    btnA: { background: '#c39a4d', color: '#0f2818', padding: '16px 30px',
      fontWeight: 600, fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase',
      border: 'none', cursor: 'pointer' },
    btnB: { background: 'transparent', color: '#ede5d2', padding: '16px 24px',
      fontWeight: 500, fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase',
      border: '1px solid rgba(237,229,210,0.4)', cursor: 'pointer' },
    right: { position: 'relative', height: 500 },
    panel: { position: 'absolute', inset: 0,
      border: '1px solid rgba(195,154,77,0.4)', padding: 32,
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
    panelH: { fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase',
      color: '#c39a4d', display: 'flex', justifyContent: 'space-between' },
    map: { flex: 1, margin: '20px 0', position: 'relative',
      borderTop: '1px solid rgba(195,154,77,0.2)',
      borderBottom: '1px solid rgba(195,154,77,0.2)',
      display: 'flex', alignItems: 'center', justifyContent: 'center' },
    legendRow: { display: 'flex', justifyContent: 'space-between',
      padding: '10px 0', borderBottom: '1px solid rgba(237,229,210,0.1)',
      fontSize: 13 },
    legendLbl: { color: '#b8b09a', fontSize: 12, letterSpacing: '0.06em' },
    foot: { display: 'flex', justifyContent: 'space-between',
      padding: '14px 56px', fontSize: 11, letterSpacing: '0.16em',
      textTransform: 'uppercase', color: '#80896f',
      borderTop: '1px solid rgba(237,229,210,0.15)', position: 'relative', zIndex: 3 },
  };
  return (
    <div style={s.root}>
      <div style={s.pattern}></div>
      <div style={s.nav}>
        <div style={s.brand}>
          <span style={s.crest}>N</span> NORDHEIM &amp; SONS
        </div>
        <div style={s.links}>
          <span>The Range</span><span>Guides</span><span>Outfitters</span><span>Lodge</span>
        </div>
        <div style={{ color: '#c39a4d' }}>Est. 1924 · Norway</div>
      </div>
      <div style={s.main}>
        <div>
          <div style={s.eyebrow}><span style={s.rule}></span> Spring expedition · No. 17</div>
          <h1 style={s.h1}>
            Made for the<br/>
            <span style={s.brass}>long way</span><br/>
            around.
          </h1>
          <p style={s.p}>
            Outerwear and packs for the slower traveller. Built in Tromsø,
            tested in seven countries, repaired for life.
          </p>
          <div style={s.ctas}>
            <button style={s.btnA}>Shop spring range</button>
            <button style={s.btnB}>Book a fitting →</button>
          </div>
        </div>
        <div style={s.right}>
          <div style={s.panel}>
            <div style={s.panelH}><span>Field Report</span><span>69° N · Tromsø</span></div>
            <div style={s.map}>
              <svg width="100%" height="100%" viewBox="0 0 320 280" style={{ position: 'absolute' }}>
                <path d="M 20 240 L 60 180 L 100 200 L 140 120 L 180 160 L 220 80 L 260 110 L 300 60"
                  stroke="#c39a4d" strokeWidth="1.5" fill="none" />
                <path d="M 20 240 L 60 180 L 100 200 L 140 120 L 180 160 L 220 80 L 260 110 L 300 60 L 300 260 L 20 260 Z"
                  fill="rgba(195,154,77,0.08)" />
                <circle cx="140" cy="120" r="4" fill="#c39a4d" />
                <circle cx="260" cy="110" r="4" fill="#c39a4d" />
                <circle cx="220" cy="80" r="6" fill="#ede5d2" stroke="#c39a4d" strokeWidth="2"/>
                <text x="232" y="76" fill="#ede5d2" fontSize="10" fontFamily="Inter Tight" letterSpacing="0.1em">CAMP 4 · 1,420M</text>
                {[0,1,2,3,4,5,6,7,8].map(i => (
                  <line key={i} x1={i * 35 + 10} y1={0} x2={i * 35 + 10} y2={280}
                    stroke="rgba(195,154,77,0.1)" strokeWidth="0.5"/>
                ))}
              </svg>
            </div>
            <div>
              <div style={s.legendRow}><span style={s.legendLbl}>Day's distance</span><span>14.2 km</span></div>
              <div style={s.legendRow}><span style={s.legendLbl}>Gain</span><span>+842 m</span></div>
              <div style={{ ...s.legendRow, borderBottom: 'none' }}><span style={s.legendLbl}>Weather</span><span>−4°C · clear</span></div>
            </div>
          </div>
        </div>
      </div>
      <div style={s.foot}>
        <span>Guaranteed for life · Repaired for free</span>
        <span>Free shipping over €240</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 19. COBALT BLUE — cultural institution, saturated blue + white serif
// ─────────────────────────────────────────────────────────────────────────────
function HeroCobalt() {
  const s = {
    root: { width: W3, height: H3, background: '#1a3cd9', color: '#fff',
      fontFamily: '"Inter Tight", sans-serif',
      display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' },
    grid: { position: 'absolute', inset: 0, opacity: 0.1, pointerEvents: 'none',
      backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
      backgroundSize: '64px 64px' },
    nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '24px 48px', position: 'relative', zIndex: 3,
      borderBottom: '1px solid rgba(255,255,255,0.2)',
      fontSize: 13, fontWeight: 500 },
    brand: { fontFamily: '"Playfair Display", Georgia, serif',
      fontSize: 22, letterSpacing: '-0.01em', fontWeight: 500 },
    links: { display: 'flex', gap: 28 },
    cta: { background: '#fff', color: '#1a3cd9', padding: '8px 16px',
      borderRadius: 0, fontWeight: 600, cursor: 'pointer' },
    main: { flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr',
      padding: '0 48px', position: 'relative', zIndex: 2, alignItems: 'center', gap: 48 },
    eyebrow: { fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase',
      marginBottom: 28, color: 'rgba(255,255,255,0.7)' },
    h1: { fontFamily: '"Playfair Display", Georgia, serif',
      fontSize: 110, lineHeight: 0.98, fontWeight: 400, margin: 0,
      letterSpacing: '-0.025em' },
    p: { fontSize: 17, lineHeight: 1.6, marginTop: 32, maxWidth: 460,
      color: 'rgba(255,255,255,0.85)' },
    ctas: { display: 'flex', gap: 14, marginTop: 40, alignItems: 'center' },
    btnA: { background: '#fff', color: '#1a3cd9', padding: '16px 28px',
      fontWeight: 600, fontSize: 14, border: 'none', cursor: 'pointer' },
    btnB: { background: 'transparent', color: '#fff', padding: '16px 24px',
      fontWeight: 500, fontSize: 14, border: '1px solid #fff', cursor: 'pointer' },
    right: { position: 'relative', display: 'flex', flexDirection: 'column', gap: 12 },
    card: { background: '#fff', color: '#1a3cd9', padding: '20px 24px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' },
    cardL: { fontFamily: '"Playfair Display", serif', fontSize: 26, fontWeight: 500 },
    cardR: { fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase' },
    altCard: { background: 'transparent', color: '#fff',
      border: '1px solid rgba(255,255,255,0.4)', padding: '20px 24px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' },
    foot: { display: 'flex', justifyContent: 'space-between',
      padding: '16px 48px', fontSize: 11, letterSpacing: '0.18em',
      textTransform: 'uppercase', borderTop: '1px solid rgba(255,255,255,0.2)',
      position: 'relative', zIndex: 3 },
  };
  return (
    <div style={s.root}>
      <div style={s.grid}></div>
      <div style={s.nav}>
        <div style={s.brand}>The Werner Institute</div>
        <div style={s.links}>
          <span>Programme</span><span>Library</span><span>Fellowship</span><span>Visit</span>
        </div>
        <div style={s.cta}>Become a Member</div>
      </div>
      <div style={s.main}>
        <div>
          <div style={s.eyebrow}>Season 2026 · A public programme</div>
          <h1 style={s.h1}>
            On Reading,<br/>
            Looking, and<br/>
            Other Slow Acts.
          </h1>
          <p style={s.p}>
            Twelve lectures, four exhibitions, and a working library open to
            the public, four days a week. Free admission, always.
          </p>
          <div style={s.ctas}>
            <button style={s.btnA}>Programme of events →</button>
            <button style={s.btnB}>Plan your visit</button>
          </div>
        </div>
        <div style={s.right}>
          <div style={s.card}>
            <div style={s.cardL}>The Reader Reconsidered</div>
            <div style={s.cardR}>Lecture · May 24</div>
          </div>
          <div style={s.altCard}>
            <div style={s.cardL}>Cyanotypes, 1880—1920</div>
            <div style={s.cardR}>Exhibition · ongoing</div>
          </div>
          <div style={s.altCard}>
            <div style={s.cardL}>Type as Public Speech</div>
            <div style={s.cardR}>Symposium · Jun 6</div>
          </div>
          <div style={s.altCard}>
            <div style={s.cardL}>Fellowship — open call</div>
            <div style={s.cardR}>Apply by Jul 1</div>
          </div>
        </div>
      </div>
      <div style={s.foot}>
        <span>14 Rue de Sèvres · Paris VIIe</span>
        <span>Tue—Fri · 11h—19h</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 20. HOT MAGENTA — fashion editorial, asymmetric, ultrabold sans
// ─────────────────────────────────────────────────────────────────────────────
function HeroMagenta() {
  const s = {
    root: { width: W3, height: H3, background: '#e6004a', color: '#fff',
      fontFamily: '"Archivo", "Inter Tight", sans-serif',
      display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' },
    block: { position: 'absolute', right: 0, top: 0, bottom: 0, width: '38%',
      background: '#0a0a0a', zIndex: 1 },
    nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '24px 40px', position: 'relative', zIndex: 4,
      fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' },
    brand: { fontFamily: '"Archivo Black", sans-serif', fontSize: 22,
      letterSpacing: '-0.04em', textTransform: 'none' },
    links: { display: 'flex', gap: 28 },
    cta: { color: '#e6004a', background: '#fff', padding: '8px 16px',
      cursor: 'pointer' },
    main: { flex: 1, position: 'relative', zIndex: 2 },
    h1: { position: 'absolute', left: 40, top: 24,
      fontFamily: '"Archivo Black", sans-serif',
      fontSize: 220, lineHeight: 0.84, fontWeight: 900, margin: 0,
      letterSpacing: '-0.06em', color: '#fff', textTransform: 'uppercase',
      zIndex: 3 },
    h1Last: { color: 'transparent', WebkitTextStroke: '3px #fff' },
    figure: { position: 'absolute', right: 0, top: 0, bottom: 0, width: '38%',
      zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' },
    figBox: { width: '70%', aspectRatio: '3/4',
      background: 'linear-gradient(135deg, #fbd5e3, #d9a5b8 60%, #5a2030)',
      position: 'relative', overflow: 'hidden' },
    figLabel: { position: 'absolute', bottom: 14, left: 14, color: '#fff',
      fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
      writingMode: 'vertical-rl', transform: 'rotate(180deg)' },
    bottom: { position: 'absolute', left: 40, bottom: 40, zIndex: 4,
      maxWidth: 520 },
    sub: { fontSize: 16, lineHeight: 1.45, marginBottom: 24, fontWeight: 500,
      maxWidth: 440 },
    ctas: { display: 'flex', gap: 14, alignItems: 'center' },
    btnA: { background: '#fff', color: '#e6004a', padding: '16px 28px',
      fontWeight: 800, fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase',
      border: 'none', cursor: 'pointer' },
    btnB: { background: 'transparent', color: '#fff', padding: '16px 24px',
      fontWeight: 800, fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase',
      border: '2px solid #fff', cursor: 'pointer' },
    meta: { position: 'absolute', right: 40, bottom: 40, zIndex: 5,
      fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
      color: '#fff', textAlign: 'right', lineHeight: 1.8 },
  };
  return (
    <div style={s.root}>
      <div style={s.block}></div>
      <div style={s.nav}>
        <div style={s.brand}>HAUS / HAUS</div>
        <div style={s.links}>
          <span>Shop</span><span>Lookbook</span><span>Stores</span><span>Index</span>
        </div>
        <div style={s.cta}>Bag (2)</div>
      </div>
      <div style={s.main}>
        <h1 style={s.h1}>
          NOT YOUR<br/>
          MOTHER'S<br/>
          <span style={s.h1Last}>OUTFIT.</span>
        </h1>
        <div style={s.figure}>
          <div style={s.figBox}>
            <div style={s.figLabel}>SS26 / LOOK 04 · ZARA M.</div>
          </div>
        </div>
        <div style={s.bottom}>
          <p style={s.sub}>
            Spring/Summer 26 is here. Twelve looks, a magazine, and one very
            loud party. Cardholders see it first on Friday.
          </p>
          <div style={s.ctas}>
            <button style={s.btnA}>Shop SS26 →</button>
            <button style={s.btnB}>Read the issue</button>
          </div>
        </div>
        <div style={s.meta}>
          Issue 09 / SS 2026<br/>
          —<br/>
          24 / 04 / 26
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 21. LAVENDER — wellness/beauty, soft purple, generous space
// ─────────────────────────────────────────────────────────────────────────────
function HeroLavender() {
  const s = {
    root: { width: W3, height: H3, background: '#d8ccff', color: '#2a1f5a',
      fontFamily: '"DM Sans", "Inter Tight", sans-serif',
      display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' },
    glow: { position: 'absolute', width: 600, height: 600, borderRadius: '50%',
      background: 'radial-gradient(circle, #c8a8ff, transparent 65%)',
      left: -200, top: -200, opacity: 0.6, filter: 'blur(40px)' },
    glow2: { position: 'absolute', width: 500, height: 500, borderRadius: '50%',
      background: 'radial-gradient(circle, #fcc8e3, transparent 65%)',
      right: -150, bottom: -150, opacity: 0.5, filter: 'blur(40px)' },
    nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '28px 56px', position: 'relative', zIndex: 3, fontSize: 14,
      fontWeight: 500 },
    brand: { fontWeight: 700, fontSize: 22, letterSpacing: '-0.03em',
      display: 'flex', alignItems: 'center', gap: 8 },
    bDot: { width: 16, height: 16, borderRadius: '50%', background: '#2a1f5a' },
    links: { display: 'flex', gap: 28 },
    cta: { background: '#2a1f5a', color: '#d8ccff', padding: '10px 20px',
      borderRadius: 999, fontWeight: 500, cursor: 'pointer', fontSize: 13 },
    main: { flex: 1, display: 'grid', gridTemplateColumns: '1.2fr 1fr',
      alignItems: 'center', padding: '0 56px', gap: 56, position: 'relative', zIndex: 2 },
    chip: { display: 'inline-flex', alignItems: 'center', gap: 8,
      background: 'rgba(255,255,255,0.5)', padding: '6px 14px', borderRadius: 999,
      fontSize: 13, fontWeight: 500, marginBottom: 28, backdropFilter: 'blur(8px)' },
    chipDot: { width: 6, height: 6, borderRadius: '50%', background: '#7c5cff' },
    h1: { fontSize: 92, lineHeight: 0.98, fontWeight: 600, margin: 0,
      letterSpacing: '-0.04em' },
    p: { fontSize: 17, lineHeight: 1.6, marginTop: 28, maxWidth: 440,
      color: '#4a3a8a' },
    ctas: { display: 'flex', gap: 12, marginTop: 36, alignItems: 'center' },
    btnA: { background: '#2a1f5a', color: '#d8ccff', padding: '16px 30px',
      borderRadius: 999, fontWeight: 500, fontSize: 14, cursor: 'pointer',
      border: 'none' },
    btnB: { background: 'transparent', color: '#2a1f5a', padding: '16px 24px',
      fontWeight: 500, fontSize: 14, cursor: 'pointer', border: 'none',
      textDecoration: 'underline', textUnderlineOffset: 4 },
    trustRow: { display: 'flex', gap: 28, marginTop: 36, alignItems: 'center',
      fontSize: 12, color: '#4a3a8a', fontWeight: 500 },
    right: { display: 'flex', flexDirection: 'column', gap: 14 },
    panel: { background: 'rgba(255,255,255,0.5)',
      backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.7)',
      borderRadius: 24, padding: 24 },
    panelTime: { fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase',
      color: '#7c5cff', fontWeight: 600, marginBottom: 8 },
    panelH: { fontSize: 22, fontWeight: 600, margin: 0, letterSpacing: '-0.02em' },
    panelP: { fontSize: 14, marginTop: 6, color: '#4a3a8a' },
    panelRow: { display: 'flex', alignItems: 'center', gap: 10,
      marginTop: 14, fontSize: 13 },
    av: { width: 28, height: 28, borderRadius: '50%' },
  };
  return (
    <div style={s.root}>
      <div style={s.glow}></div>
      <div style={s.glow2}></div>
      <div style={s.nav}>
        <div style={s.brand}><span style={s.bDot}></span> tide</div>
        <div style={s.links}>
          <span>Practices</span><span>Library</span><span>Teachers</span><span>About</span>
        </div>
        <div style={s.cta}>Start free trial</div>
      </div>
      <div style={s.main}>
        <div>
          <div style={s.chip}><span style={s.chipDot}></span> 12-minute practices for busy minds</div>
          <h1 style={s.h1}>
            A slower<br/>
            kind of<br/>
            quiet.
          </h1>
          <p style={s.p}>
            Guided meditations from teachers you'd actually want to listen to.
            No streaks, no badges, no notifications shaped like leaves.
          </p>
          <div style={s.ctas}>
            <button style={s.btnA}>Begin · 14 days free</button>
            <button style={s.btnB}>Try one now (no signup)</button>
          </div>
          <div style={s.trustRow}>
            <span>★ 4.9 · 28k reviews</span>
            <span style={{ width: 1, height: 16, background: 'rgba(42,31,90,0.2)' }}></span>
            <span>Apple Design Award · 2025</span>
          </div>
        </div>
        <div style={s.right}>
          <div style={s.panel}>
            <div style={s.panelTime}>This morning · 6 min</div>
            <h3 style={s.panelH}>Settling in before a hard day</h3>
            <p style={s.panelP}>A short breath practice to do with your coffee.</p>
            <div style={s.panelRow}>
              <div style={{ ...s.av, background: '#7c5cff' }}></div>
              with <b>&nbsp;Aiyana Reed</b>
            </div>
          </div>
          <div style={s.panel}>
            <div style={s.panelTime}>Tonight · 14 min</div>
            <h3 style={s.panelH}>For when nothing went right</h3>
            <div style={s.panelRow}>
              <div style={{ ...s.av, background: '#fcc8e3' }}></div>
              with <b>&nbsp;Toma Heskovitch</b>
            </div>
          </div>
          <div style={{ ...s.panel, background: 'rgba(42,31,90,0.85)',
            color: '#d8ccff', border: '1px solid rgba(42,31,90,0.9)' }}>
            <div style={{ ...s.panelTime, color: '#c8a8ff' }}>New series</div>
            <h3 style={s.panelH}>Twelve nights to a quieter mind</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 22. MUSTARD — 70s retro productivity, dark brown, condensed type
// ─────────────────────────────────────────────────────────────────────────────
function HeroMustard() {
  const s = {
    root: { width: W3, height: H3, background: '#d9a514', color: '#2b1d0a',
      fontFamily: '"Archivo", "Inter Tight", sans-serif',
      display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' },
    nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '24px 40px', position: 'relative', zIndex: 3,
      borderBottom: '2px solid #2b1d0a',
      fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' },
    brand: { fontFamily: '"Archivo Black", sans-serif', fontSize: 22,
      letterSpacing: '-0.04em', display: 'flex', alignItems: 'center', gap: 8,
      textTransform: 'none' },
    bMark: { width: 26, height: 26, borderRadius: '50%', background: '#2b1d0a',
      position: 'relative' },
    bMarkInner: { position: 'absolute', inset: 6, borderRadius: '50%',
      background: '#d9a514' },
    bMarkDot: { position: 'absolute', inset: 11, borderRadius: '50%',
      background: '#2b1d0a' },
    links: { display: 'flex', gap: 24 },
    main: { flex: 1, display: 'grid', gridTemplateColumns: '1.3fr 1fr',
      borderBottom: '2px solid #2b1d0a', position: 'relative', zIndex: 2 },
    left: { padding: '48px 40px', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', borderRight: '2px solid #2b1d0a' },
    eyebrow: { fontSize: 12, fontWeight: 700, letterSpacing: '0.16em',
      textTransform: 'uppercase', marginBottom: 16,
      display: 'flex', alignItems: 'center', gap: 12 },
    rule: { width: 32, height: 3, background: '#2b1d0a' },
    h1: { fontFamily: '"Archivo Black", sans-serif',
      fontSize: 116, lineHeight: 0.9, fontWeight: 900, margin: 0,
      letterSpacing: '-0.04em', textTransform: 'uppercase' },
    cream: { color: '#f4e6c4' },
    p: { fontSize: 17, lineHeight: 1.5, marginTop: 28, maxWidth: 460,
      fontWeight: 500 },
    ctas: { display: 'flex', gap: 0, marginTop: 36 },
    btnA: { background: '#2b1d0a', color: '#d9a514', padding: '18px 28px',
      fontWeight: 800, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase',
      border: 'none', cursor: 'pointer' },
    btnB: { background: '#f4e6c4', color: '#2b1d0a', padding: '18px 28px',
      fontWeight: 800, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase',
      border: 'none', cursor: 'pointer', borderLeft: '2px solid #2b1d0a' },
    right: { display: 'flex', flexDirection: 'column' },
    cardA: { flex: 1, padding: '32px 32px', background: '#f4e6c4',
      color: '#2b1d0a', borderBottom: '2px solid #2b1d0a',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
    cardB: { flex: 1, padding: '32px 32px', background: '#2b1d0a',
      color: '#d9a514',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
    statLbl: { fontSize: 11, fontWeight: 700, letterSpacing: '0.16em',
      textTransform: 'uppercase' },
    statH: { fontFamily: '"Archivo Black", sans-serif',
      fontSize: 36, fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1,
      textTransform: 'uppercase', marginTop: 10 },
    foot: { display: 'flex', justifyContent: 'space-between',
      padding: '14px 40px', fontSize: 11, fontWeight: 700,
      letterSpacing: '0.16em', textTransform: 'uppercase',
      position: 'relative', zIndex: 3 },
  };
  return (
    <div style={s.root}>
      <div style={s.nav}>
        <div style={s.brand}>
          <span style={s.bMark}>
            <span style={s.bMarkInner}></span>
            <span style={s.bMarkDot}></span>
          </span>
          Goodwork
        </div>
        <div style={s.links}>
          <span>Office</span><span>Workshop</span><span>Stockroom</span><span>Manual</span>
        </div>
        <div>Issue 04</div>
      </div>
      <div style={s.main}>
        <div style={s.left}>
          <div style={s.eyebrow}><span style={s.rule}></span> A union of working people</div>
          <h1 style={s.h1}>
            Take<br/>
            the <span style={s.cream}>damn</span><br/>
            lunch break.
          </h1>
          <p style={s.p}>
            A productivity guild for people who would rather get good at one
            thing slowly than at five things badly. Books, retreats, and a
            members' chat that doesn't ping.
          </p>
          <div style={s.ctas}>
            <button style={s.btnA}>Join the guild →</button>
            <button style={s.btnB}>Read the manual</button>
          </div>
        </div>
        <div style={s.right}>
          <div style={s.cardA}>
            <div style={s.statLbl}>Featured this month</div>
            <div>
              <div style={s.statH}>The Four-<br/>Hour Workshop</div>
              <div style={{ fontSize: 13, marginTop: 12, fontWeight: 500 }}>
                A small live class on shipping the boring 20% you've been
                putting off. Members only · 24 seats.
              </div>
            </div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
              textTransform: 'uppercase' }}>Sat · May 31 · 10am EST →</div>
          </div>
          <div style={s.cardB}>
            <div style={s.statLbl}>Members</div>
            <div style={s.statH}>4,208 · 24 countries</div>
            <div style={{ fontSize: 12, fontWeight: 700 }}>↗ +84 this week</div>
          </div>
        </div>
      </div>
      <div style={s.foot}>
        <span>Goodwork Co. · Detroit / Glasgow</span>
        <span>Office hours · M—Th</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 23. DEEP TEAL — modern fintech, structured, geometric
// ─────────────────────────────────────────────────────────────────────────────
function HeroTeal() {
  const s = {
    root: { width: W3, height: H3, background: '#0d5e6e', color: '#e8f4f0',
      fontFamily: '"Inter Tight", system-ui, sans-serif',
      display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' },
    accent: { position: 'absolute', right: 0, top: 0, width: 380, height: 380,
      background: '#7be3a8', clipPath: 'polygon(100% 0, 100% 100%, 0 0)', opacity: 0.9 },
    accent2: { position: 'absolute', right: 0, top: 0, width: 220, height: 220,
      background: '#053643', clipPath: 'polygon(100% 0, 100% 100%, 0 0)' },
    nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '24px 48px', position: 'relative', zIndex: 4, fontSize: 13,
      fontWeight: 500 },
    brand: { fontWeight: 700, fontSize: 20, letterSpacing: '-0.03em',
      display: 'flex', alignItems: 'center', gap: 10 },
    bMark: { width: 22, height: 22, background: '#7be3a8', borderRadius: 4,
      transform: 'rotate(45deg)' },
    links: { display: 'flex', gap: 28, color: '#b8d4cc' },
    cta: { background: '#7be3a8', color: '#0d5e6e', padding: '10px 18px',
      borderRadius: 6, fontWeight: 600, cursor: 'pointer', fontSize: 13 },
    main: { flex: 1, display: 'grid', gridTemplateColumns: '1.2fr 1fr',
      padding: '0 48px', alignItems: 'center', gap: 48, position: 'relative', zIndex: 3 },
    chip: { display: 'inline-flex', alignItems: 'center', gap: 10,
      background: 'rgba(123,227,168,0.15)', color: '#7be3a8',
      padding: '6px 14px', borderRadius: 6, fontSize: 12, fontWeight: 600,
      letterSpacing: '0.04em', marginBottom: 24,
      border: '1px solid rgba(123,227,168,0.3)' },
    h1: { fontSize: 84, lineHeight: 1.04, fontWeight: 600, margin: 0,
      letterSpacing: '-0.035em', color: '#fff' },
    green: { color: '#7be3a8' },
    p: { fontSize: 17, lineHeight: 1.6, marginTop: 28, maxWidth: 480,
      color: '#b8d4cc' },
    ctas: { display: 'flex', gap: 12, marginTop: 36 },
    btnA: { background: '#7be3a8', color: '#0d5e6e', padding: '16px 28px',
      borderRadius: 8, fontWeight: 600, fontSize: 15, cursor: 'pointer',
      border: 'none' },
    btnB: { background: 'transparent', color: '#e8f4f0', padding: '16px 24px',
      borderRadius: 8, fontWeight: 500, fontSize: 15, cursor: 'pointer',
      border: '1px solid rgba(232,244,240,0.3)' },
    trustRow: { display: 'flex', gap: 32, marginTop: 40, alignItems: 'center',
      fontSize: 12, color: '#b8d4cc', fontWeight: 500 },
    dash: { background: '#053643', borderRadius: 12, padding: 24, border: '1px solid rgba(123,227,168,0.2)' },
    dashH: { display: 'flex', justifyContent: 'space-between', marginBottom: 20,
      fontSize: 12, color: '#b8d4cc' },
    dashNum: { fontSize: 48, fontWeight: 600, letterSpacing: '-0.04em',
      color: '#fff', marginBottom: 6 },
    dashDelta: { color: '#7be3a8', fontSize: 13, fontWeight: 600 },
    chart: { height: 100, marginTop: 24, position: 'relative' },
    bars: { display: 'flex', alignItems: 'flex-end', gap: 6, height: '100%' },
    bar: h => ({ flex: 1, background: h > 75 ? '#7be3a8' : '#1a7a8e',
      height: `${h}%`, borderRadius: 2 }),
    row: { display: 'flex', justifyContent: 'space-between',
      padding: '12px 0', borderBottom: '1px solid rgba(123,227,168,0.15)',
      fontSize: 13 },
    rowLbl: { color: '#b8d4cc' },
    rowVal: { fontWeight: 600, color: '#fff' },
  };
  return (
    <div style={s.root}>
      <div style={s.accent}></div>
      <div style={s.accent2}></div>
      <div style={s.nav}>
        <div style={s.brand}><span style={s.bMark}></span> Halid</div>
        <div style={s.links}>
          <span>Product</span><span>Pricing</span><span>Customers</span><span>Docs</span>
        </div>
        <div style={s.cta}>Talk to sales</div>
      </div>
      <div style={s.main}>
        <div>
          <div style={s.chip}>● SOC 2 Type II · ISO 27001 · ready</div>
          <h1 style={s.h1}>
            The finance<br/>
            stack <span style={s.green}>built</span> for<br/>
            the next decade.
          </h1>
          <p style={s.p}>
            Treasury, AP, AR and reporting on one ledger. Designed with the
            people who close the books, not the people who avoid them.
          </p>
          <div style={s.ctas}>
            <button style={s.btnA}>Book a demo →</button>
            <button style={s.btnB}>Read the docs</button>
          </div>
          <div style={s.trustRow}>
            <span style={{ fontWeight: 600, color: '#7be3a8' }}>Trusted by:</span>
            <span>Linear</span><span>Notion</span><span>Stripe</span><span>+ 600 more</span>
          </div>
        </div>
        <div style={s.dash}>
          <div style={s.dashH}><span>Cash position · live</span><span>USD</span></div>
          <div style={s.dashNum}>$24.8M</div>
          <div style={s.dashDelta}>↑ +$1.2M this week</div>
          <div style={s.chart}>
            <div style={s.bars}>
              {[40, 52, 48, 60, 55, 68, 72, 65, 78, 82, 88, 95].map((h, i) =>
                <div key={i} style={s.bar(h)}></div>)}
            </div>
          </div>
          <div style={{ marginTop: 24 }}>
            <div style={s.row}><span style={s.rowLbl}>Operating</span><span style={s.rowVal}>$18.4M</span></div>
            <div style={s.row}><span style={s.rowLbl}>Reserve</span><span style={s.rowVal}>$5.1M</span></div>
            <div style={{ ...s.row, borderBottom: 'none' }}><span style={s.rowLbl}>30-day runway</span><span style={s.rowVal}>22 mo</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 24. OXBLOOD / BURGUNDY — restaurant/wine, cream + soft serif
// ─────────────────────────────────────────────────────────────────────────────
function HeroOxblood() {
  const s = {
    root: { width: W3, height: H3, background: '#4a1219', color: '#f4e4cf',
      fontFamily: '"Inter Tight", sans-serif',
      display: 'flex', flexDirection: 'column', position: 'relative' },
    nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '28px 56px', position: 'relative', zIndex: 3,
      fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase' },
    brand: { fontFamily: '"Playfair Display", serif', fontSize: 26, fontWeight: 400,
      letterSpacing: '-0.01em', textTransform: 'none' },
    links: { display: 'flex', gap: 32, color: '#d4b59a' },
    cta: { color: '#f4e4cf', borderBottom: '1px solid #f4e4cf',
      paddingBottom: 3, cursor: 'pointer' },
    main: { flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr',
      padding: '0 56px', alignItems: 'center', gap: 64, position: 'relative', zIndex: 2 },
    eyebrow: { fontSize: 11, color: '#d4b59a', letterSpacing: '0.3em',
      textTransform: 'uppercase', marginBottom: 28, display: 'flex',
      alignItems: 'center', gap: 14 },
    rule: { width: 32, height: 1, background: '#d4b59a' },
    h1: { fontFamily: '"Playfair Display", Georgia, serif',
      fontSize: 96, lineHeight: 1.02, fontWeight: 400, margin: 0,
      letterSpacing: '-0.025em' },
    p: { fontSize: 17, lineHeight: 1.7, marginTop: 32, maxWidth: 440,
      color: '#d4b59a' },
    ctas: { display: 'flex', gap: 20, marginTop: 44, alignItems: 'center' },
    btnA: { background: '#f4e4cf', color: '#4a1219', padding: '16px 30px',
      fontWeight: 600, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase',
      border: 'none', cursor: 'pointer' },
    btnB: { background: 'transparent', color: '#f4e4cf', padding: '16px 0',
      fontWeight: 500, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase',
      cursor: 'pointer', border: 'none',
      borderBottom: '1px solid #f4e4cf' },
    menu: { borderTop: '1px solid rgba(244,228,207,0.25)',
      borderBottom: '1px solid rgba(244,228,207,0.25)',
      padding: '8px 0' },
    menuH: { fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase',
      color: '#d4b59a', padding: '16px 0 8px',
      display: 'flex', justifyContent: 'space-between',
      borderBottom: '1px solid rgba(244,228,207,0.15)' },
    course: { padding: '18px 0', borderBottom: '1px solid rgba(244,228,207,0.1)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
      gap: 24 },
    courseL: { flex: 1 },
    courseH: { fontFamily: '"Playfair Display", serif', fontSize: 22,
      fontWeight: 400, letterSpacing: '-0.01em' },
    courseD: { fontSize: 13, color: '#b89a82', marginTop: 4, lineHeight: 1.5,
      fontStyle: 'italic' },
    coursePrice: { fontFamily: '"Playfair Display", serif', fontSize: 18,
      color: '#f4e4cf' },
    foot: { display: 'flex', justifyContent: 'space-between',
      padding: '20px 56px', fontSize: 11, letterSpacing: '0.18em',
      textTransform: 'uppercase', color: '#b89a82' },
  };
  return (
    <div style={s.root}>
      <div style={s.nav}>
        <div style={s.brand}>Maison Calva</div>
        <div style={s.links}>
          <span>The Room</span><span>Cellar</span><span>Private Events</span><span>Press</span>
        </div>
        <div style={s.cta}>Reserve a table</div>
      </div>
      <div style={s.main}>
        <div>
          <div style={s.eyebrow}><span style={s.rule}></span> A natural wine bar · Saint-Germain</div>
          <h1 style={s.h1}>
            Eighteen<br/>
            seats. One<br/>
            menu a week.
          </h1>
          <p style={s.p}>
            A small dining room with a long cellar. We cook what arrived
            that morning, pour what we drank that week, and write it all
            down by hand at 5 pm.
          </p>
          <div style={s.ctas}>
            <button style={s.btnA}>Book a seating</button>
            <button style={s.btnB}>This week's card →</button>
          </div>
        </div>
        <div>
          <div style={s.menuH}><span>This week — № 142</span><span>Tue—Sat · 19h30 / 21h30</span></div>
          <div>
            <div style={s.course}>
              <div style={s.courseL}>
                <div style={s.courseH}>Asparagus, soft yolk, brown butter</div>
                <div style={s.courseD}>spring greens, lemon, sourdough crumb</div>
              </div>
              <div style={s.coursePrice}>14</div>
            </div>
            <div style={s.course}>
              <div style={s.courseL}>
                <div style={s.courseH}>Whole roasted bream, fennel</div>
                <div style={s.courseD}>caught Monday, off the boat in Sète</div>
              </div>
              <div style={s.coursePrice}>32</div>
            </div>
            <div style={s.course}>
              <div style={s.courseL}>
                <div style={s.courseH}>Lamb shoulder, beans, herbs</div>
                <div style={s.courseD}>slow-cooked, for two, share the bone</div>
              </div>
              <div style={s.coursePrice}>48</div>
            </div>
            <div style={{ ...s.course, borderBottom: 'none' }}>
              <div style={s.courseL}>
                <div style={s.courseH}>Madeleine, whisky, salt</div>
                <div style={s.courseD}>out of the oven at 21h00 sharp</div>
              </div>
              <div style={s.coursePrice}>8</div>
            </div>
          </div>
        </div>
      </div>
      <div style={s.foot}>
        <span>14 Rue de Verneuil, Paris VI</span>
        <span>Cash &amp; cards · No notes louder than 11</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function ColorBatchSection() {
  return (
    <DCSection id="color-batch" title="Color Batch — Saturated Backgrounds"
      subtitle="No cream, no orange, no italic display serifs. Eight saturated grounds with fresh aesthetic vocabularies.">
      <DCArtboard id="lime" label="17 · Lime / Sport" width={W3} height={H3}>
        <HeroLime />
      </DCArtboard>
      <DCArtboard id="forest" label="18 · Deep Forest" width={W3} height={H3}>
        <HeroForest />
      </DCArtboard>
      <DCArtboard id="cobalt" label="19 · Cobalt / Cultural" width={W3} height={H3}>
        <HeroCobalt />
      </DCArtboard>
      <DCArtboard id="magenta" label="20 · Hot Magenta" width={W3} height={H3}>
        <HeroMagenta />
      </DCArtboard>
      <DCArtboard id="lavender" label="21 · Lavender / Wellness" width={W3} height={H3}>
        <HeroLavender />
      </DCArtboard>
      <DCArtboard id="mustard" label="22 · Mustard / Guild" width={W3} height={H3}>
        <HeroMustard />
      </DCArtboard>
      <DCArtboard id="teal" label="23 · Deep Teal / Fintech" width={W3} height={H3}>
        <HeroTeal />
      </DCArtboard>
      <DCArtboard id="oxblood" label="24 · Oxblood / Wine bar" width={W3} height={H3}>
        <HeroOxblood />
      </DCArtboard>
    </DCSection>
  );
}

window.ColorBatchSection = ColorBatchSection;
