// Eight more Landing-category directions — four agency landings and four
// SaaS landing archetypes, each with its own voice from editorial serif to
// signup-form-first.

const WA = 1280;
const HA = 800;

// ─────────────────────────────────────────────────────────────────────────────
// 33. GRAND SERIF STUDIO — editorial brand agency: cream paper, enormous
//     Fraunces italics, drop-cap paragraph, work reel of tinted plates.
// ─────────────────────────────────────────────────────────────────────────────
function HeroGrandSerif() {
  const s = {
    root: { width: WA, height: HA, background: '#F5EFE3', color: '#241F17',
      fontFamily: '"Fraunces", "Playfair Display", serif',
      display: 'flex', flexDirection: 'column', overflow: 'hidden',
      position: 'relative' },
    railText: { position: 'absolute', right: 22, top: '50%',
      transform: 'translateY(-50%) rotate(180deg)', writingMode: 'vertical-rl',
      fontSize: 10.5, letterSpacing: '0.34em', textTransform: 'uppercase',
      color: '#8d7f63' },
    nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
      padding: '30px 72px 20px', borderBottom: '1px solid #c9bda2' },
    brand: { fontSize: 21, fontWeight: 600, letterSpacing: '0.04em' },
    brandStar: { color: '#A6512B', fontStyle: 'normal' },
    links: { display: 'flex', gap: 30, fontSize: 12.5, letterSpacing: '0.16em',
      textTransform: 'uppercase', fontFamily: '"DM Sans", sans-serif' },
    phone: { fontStyle: 'italic', fontSize: 15, color: '#6b5d44' },
    main: { flex: 1, display: 'grid', gridTemplateColumns: '1.25fr 1fr',
      padding: '40px 72px 0', gap: 60, minHeight: 0 },
    kicker: { fontFamily: '"DM Sans", sans-serif', fontSize: 11,
      letterSpacing: '0.32em', textTransform: 'uppercase', color: '#A6512B',
      marginBottom: 18 },
    h1: { fontSize: 92, lineHeight: 0.98, margin: 0, fontWeight: 400,
      letterSpacing: '-0.015em' },
    ital: { fontStyle: 'italic', fontWeight: 300 },
    dropcapP: { fontSize: 17, lineHeight: 1.66, marginTop: 26, maxWidth: 430 },
    dropcap: { float: 'left', fontSize: 64, lineHeight: 0.85,
      paddingRight: 10, paddingTop: 4, fontWeight: 600, color: '#A6512B' },
    ctaRow: { display: 'flex', alignItems: 'center', gap: 26, marginTop: 26,
      fontFamily: '"DM Sans", sans-serif' },
    btnDark: { background: '#241F17', color: '#F5EFE3', padding: '15px 28px',
      fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase',
      cursor: 'pointer' },
    linkUnder: { textDecoration: 'underline', textUnderlineOffset: 4,
      fontSize: 13.5, letterSpacing: '0.08em' },
    reel: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18,
      alignItems: 'end', paddingBottom: 8 },
    plateWrap: { textAlign: 'center' },
    plate: (h, bg) => ({ height: h, background: bg,
      boxShadow: '0 14px 30px rgba(80,60,30,0.18)',
      border: '6px solid #FFFDF7' }),
    plateCap: { fontStyle: 'italic', fontSize: 13.5, color: '#6b5d44',
      marginTop: 10 },
    footRule: { borderTop: '1px solid #c9bda2', margin: '0 72px',
      padding: '14px 0 18px', display: 'flex', justifyContent: 'space-between',
      fontFamily: '"DM Sans", sans-serif', fontSize: 11,
      letterSpacing: '0.22em', textTransform: 'uppercase', color: '#8d7f63' },
  };
  return (
    <div style={s.root}>
      <div style={s.railText}>Atelier Ouro — Est. MMXIV — Paris · New York</div>
      <div style={s.nav}>
        <div style={s.brand}>Atelier Ouro<span style={s.brandStar}> ✳</span></div>
        <div style={s.links}>
          <span>Work</span><span>Studio</span><span>Journal</span><span>Careers</span>
        </div>
        <div style={s.phone}>+33 1 42 60 00 00</div>
      </div>
      <div style={s.main}>
        <div>
          <div style={s.kicker}>Brand & digital studio</div>
          <h1 style={s.h1}>
            Brands worth<br/>
            <span style={s.ital}>staring at.</span>
          </h1>
          <p style={s.dropcapP}>
            <span style={s.dropcap}>W</span>e are eleven designers who believe
            identity is behavior, not a logo export. Strategy written in
            sentences, systems drawn in grids, launches that feel inevitable.
            Recent: a century-old millinery, two banks, one spaceport.
          </p>
          <div style={s.ctaRow}>
            <button style={s.btnDark}>Start a project</button>
            <span style={s.linkUnder}>See selected work ↗</span>
          </div>
        </div>
        <div style={s.reel}>
          {[
            ['86px', 'linear-gradient(160deg,#C46F43,#7a3b1e)', 'Silk & Stone'],
            ['128px', 'linear-gradient(200deg,#27476E,#0f2036)', 'Banque Rare'],
            ['104px', 'linear-gradient(150deg,#9AA074,#4c5233)', 'Mareé Botanica'],
            ['140px', 'linear-gradient(210deg,#D9C29A,#8a6d3b)', 'Milliner No.9'],
          ].map(([h, bg, name]) => (
            <div key={name} style={s.plateWrap}>
              <div style={{ ...s.plate(h, bg), background: bg }}></div>
              <div style={s.plateCap}>{name}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ flex: 0 }}></div>
      <div style={s.footRule}>
        <span>New business — hello@ouro.studio</span>
        <span>Rue de Turenne 74, Paris III</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 34. MARQUEE MOTION — near-black motion agency with kinetic ticker bands
//     slicing between headline lines. Syne + chartreuse.
// ─────────────────────────────────────────────────────────────────────────────
function HeroMarqueeMotion() {
  const lime = '#D8FF3D';
  const s = {
    root: { width: WA, height: HA, background: '#0D0D0B', color: '#F2F2EC',
      fontFamily: '"Syne", "Archivo", sans-serif', display: 'flex',
      flexDirection: 'column', overflow: 'hidden', position: 'relative' },
    gridBg: { position: 'absolute', inset: 0,
      backgroundImage: 'linear-gradient(rgba(216,255,61,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(216,255,61,0.05) 1px, transparent 1px)',
      backgroundSize: '64px 64px', pointerEvents: 'none' },
    keyframes: `@keyframes mm-scrollL{from{transform:translateX(0)}to{transform:translateX(-50%)}}
@keyframes mm-scrollR{from{transform:translateX(-50%)}to{transform:translateX(0)}}`,
    nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '24px 48px', zIndex: 3, fontSize: 12, letterSpacing: '0.2em',
      textTransform: 'uppercase' },
    brand: { fontFamily: '"JetBrains Mono", monospace', fontSize: 13,
      letterSpacing: '0.1em', color: lime },
    links: { display: 'flex', gap: 28, color: '#B9B9AE' },
    liveChip: { border: `1px solid ${lime}`, color: lime, padding: '7px 14px',
      borderRadius: 999, display: 'flex', gap: 8, alignItems: 'center' },
    dot: (color, size) => ({ width: size || 7, height: size || 7,
      borderRadius: '50%', background: color, display: 'inline-block' }),
    heroZone: { flex: 1, display: 'flex', flexDirection: 'column',
      justifyContent: 'center', gap: 26, minHeight: 0, zIndex: 2 },
    bigLine: { fontFamily: '"Syne", sans-serif', fontWeight: 800, fontSize: 52,
      lineHeight: 1.0, letterSpacing: '-0.01em', padding: '0 48px',
      textTransform: 'uppercase', whiteSpace: 'nowrap' },
    outlineTxt: { color: 'transparent', WebkitTextStroke: `2px ${lime}` },
    small: { color: '#B9B9AE', fontWeight: 500 },
    band: { overflow: 'hidden', whiteSpace: 'nowrap', borderTop: `1px solid rgba(216,255,61,0.35)`,
      borderBottom: `1px solid rgba(216,255,61,0.35)`, padding: '12px 0',
      zIndex: 2 },
    track: (dur, dir, delay) => ({ display: 'inline-flex', gap: 44,
      paddingLeft: 44, transform: 'translateX(0)',
      animation: `${dir} ${dur} linear infinite`, animationDelay: delay || '0s' }),
    bandItem: { fontSize: 15, letterSpacing: '0.22em', textTransform: 'uppercase',
      color: '#EDEDE4', display: 'inline-flex', alignItems: 'center', gap: 44 },
    star: { color: lime },
    bottomRow: { display: 'flex', justifyContent: 'space-between',
      alignItems: 'flex-end', padding: '8px 48px 36px', zIndex: 2 },
    pitch: { fontSize: 16, maxWidth: 420, lineHeight: 1.55, color: '#B9B9AE',
      fontFamily: '"Archivo", sans-serif', fontWeight: 500 },
    ctas: { display: 'flex', gap: 16 },
    btnFill: { background: lime, color: '#0D0D0B', fontWeight: 800,
      padding: '16px 26px', fontSize: 13, letterSpacing: '0.12em',
      textTransform: 'uppercase', cursor: 'pointer', borderRadius: 999 },
    btnGhost: { background: 'transparent', border: `1px solid rgba(216,255,61,0.5)`,
      color: lime, fontWeight: 700, padding: '16px 24px', fontSize: 13,
      letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer',
      borderRadius: 999 },
    sideNote: { position: 'absolute', right: 44, top: 120, writingMode: 'vertical-rl',
      fontSize: 10.5, letterSpacing: '0.3em', textTransform: 'uppercase',
      color: 'rgba(216,255,61,0.55)' },
  };
  const services = ['Identity', 'Motion Systems', 'Film', 'Sound', 'WebGL', 'Type Design'];
  const bandRun = services.concat(services);
  return (
    <div style={s.root}>
      <style>{s.keyframes}</style>
      <div style={s.gridBg}></div>
      <div style={s.nav}>
        <div style={s.brand}>{'// twitch&&pan'}</div>
        <div style={s.links}><span>Reel</span><span>Studio</span><span>Labs</span></div>
        <div style={s.liveChip}><span style={s.dot(lime)}></span> Reel playing</div>
      </div>
      <div style={s.sideNote}>Showreel ’26 — 96 seconds, no narration</div>
      <div style={s.heroZone}>
        <div style={s.bigLine}>
          Motion is <span className="mmlime" style={{ color: lime }}>the</span>&nbsp;message<span style={{ WebkitTextStroke: `2px #F2F2EC`, color: 'transparent' }}>*</span>
        </div>
        <div style={s.band}>
          <div style={s.track('26s', 'mm-scrollL')}>
            {bandRun.map((svc, i) => (
              <span key={i} style={s.bandItem}>{svc} <span style={s.star}>✺</span></span>
            ))}
          </div>
        </div>
        <div style={{ ...s.bigLine }}>
          <span className="mmghost" style={s.outlineTxt}>for brands</span>
          <br/>
          that never sit still
        </div>
        <div style={s.band}>
          <div style={s.track('31s', 'mm-scrollR', '-3s')}>
            {['Squarespace × Music', 'Nike ACG Trails', 'Sub Pop Films', 'FS Type Foundry'].concat(['Squarespace × Music', 'Nike ACG Trails', 'Sub Pop Films', 'FS Type Foundry']).map((c, i) => (
              <span key={i} style={{ ...s.bandItem, fontSize: 13, color: '#9d9d92' }}>{c} <span style={{ ...s.star, opacity: 0.7 }}>↗</span></span>
            ))}
          </div>
        </div>
      </div>
      <div style={s.bottomRow}>
        <p style={s.pitch}>
          Two founders, nine animators, zero decks longer than five slides.
          We storyboard on paper first — it shows faster than a render farm.
        </p>
        <div style={s.ctas}>
          <button style={s.btnGhost}>Watch showreel ▶</button>
          <button style={s.btnFill}>Brief us →</button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 35. LEDGER CONSULTANCY — engraved corporate-modern: parchment + navy +
//     brass, crest monogram, dotted-leader engagement register, rate card.
// ─────────────────────────────────────────────────────────────────────────────
function HeroLedger() {
  const navy = '#15263C';
  const brass = '#A8853C';
  const s = {
    root: { width: WA, height: HA, background: '#F7F3EA', color: navy,
      fontFamily: '"DM Sans", "Public Sans", sans-serif', display: 'flex',
      flexDirection: 'column', overflow: 'hidden' },
    doubleRule: { borderBottom: `2px solid ${navy}`,
      boxShadow: '0 5px 0 -4px #15263C' },
    topbar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '22px 64px 18px', fontSize: 11.5, letterSpacing: '0.24em',
      textTransform: 'uppercase' },
    topLink: { display: 'flex', gap: 26, color: '#4a5871' },
    center: { flex: 1, display: 'flex', flexDirection: 'column',
      alignItems: 'center', minHeight: 0 },
    crest: { marginTop: 26, width: 54, height: 54,
      border: `2px solid ${brass}`, display: 'grid', placeItems: 'center',
      fontFamily: '"Playfair Display", serif', fontSize: 19, fontWeight: 700,
      color: brass, boxShadow: `inset 0 0 0 3px #F7F3EA, inset 0 0 0 4px ${brass}` },
    orgName: { marginTop: 12, fontFamily: '"Playfair Display", serif',
      fontSize: 23, letterSpacing: '0.12em', textTransform: 'uppercase' },
    h1: { fontFamily: '"Playfair Display", serif', fontSize: 74,
      fontWeight: 500, textAlign: 'center', lineHeight: 1.05, margin: '26px 0 0',
      letterSpacing: '-0.01em' },
    h1Ital: { fontStyle: 'italic', color: brass },
    sub: { fontSize: 15.5, color: '#44506a', textAlign: 'center',
      maxWidth: 560, lineHeight: 1.6, marginTop: 14 },
    register: { width: 860, marginTop: 30, fontFamily: '"DM Sans", sans-serif' },
    regHead: { display: 'grid', gridTemplateColumns: '150px 1fr 110px 110px',
      fontSize: 10.5, letterSpacing: '0.2em', textTransform: 'uppercase',
      color: '#75809a', paddingBottom: 8,
      borderBottom: `1px solid ${navy}` },
    regRow: { display: 'grid', gridTemplateColumns: '150px 1fr 110px 110px',
      alignItems: 'baseline', padding: '10px 0',
      borderBottom: '1px dotted #b9ac89', fontSize: 14 },
    regRef: { color: brass, fontWeight: 600, fontVariantNumeric: 'tabular-nums',
      fontSize: 12 },
    regBody: { paddingRight: 18 },
    regNum: { textAlign: 'right', fontVariantNumeric: 'tabular-nums',
      fontWeight: 600 },
    statsBar: { width: '100%', display: 'flex', marginTop: 26,
      borderTop: `2px solid ${navy}`, borderBottom: `2px solid ${navy}` },
    statCell: { flex: 1, padding: '16px 64px', textAlign: 'left',
      borderRight: '1px solid #15263C33' },
    statNum: { fontFamily: '"Playfair Display", serif', fontSize: 30,
      fontWeight: 600 },
    statLbl: { fontSize: 10.5, letterSpacing: '0.2em', textTransform: 'uppercase',
      color: '#75809a', marginTop: 2 },
    foot: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '16px 64px', fontSize: 11.5, letterSpacing: '0.22em',
      textTransform: 'uppercase', color: '#4a5871' },
    footBtn: { background: navy, color: '#F7F3EA', padding: '12px 22px',
      fontSize: 11.5, letterSpacing: '0.2em', cursor: 'pointer' },
  };
  return (
    <div style={s.root}>
      <div style={s.doubleRule}>
        <div style={s.topbar}>
          <div>Harbrook Advisory — Est. 1994</div>
          <div style={s.topLink}><span>Practice</span><span>People</span><span>Perspectives</span><span>Contact</span></div>
        </div>
      </div>
      <div style={s.center}>
        <div style={s.crest}>HB</div>
        <div style={s.orgName}>Harbrook Advisory</div>
        <h1 style={s.h1}>
          Counsel, kept<br/>in <span style={s.h1Ital}>good order.</span>
        </h1>
        <p style={s.sub}>
          Restructuring, capital events, and succession for family firms.
          Partners answer the phone; papers arrive tabbed, bound, and early.
        </p>
        <div style={s.register}>
          <div style={s.regHead}>
            <span>Matter №</span><span>Engagement</span><span style={{textAlign:'right'}}>Since</span><span style={{textAlign:'right'}}>State</span>
          </div>
          {[
            ['HB-1104', 'Succession plan — 41-store grocer, third generation', '2024', 'Ongoing'],
            ['HB-1088', 'Bridge round & covenant renegotiation', '2023', 'Closed'],
            ['HB-1051', 'Wind-down governance, 900 redundancies avoided', '2022', 'Closed'],
            ['HB-0987', 'Sale of shipyard to workers’ trust', '2021', 'Closed'],
          ].map(([ref, body, yr, st]) => (
            <div key={ref} style={s.regRow}>
              <span style={s.regRef}>{ref}</span>
              <span style={s.regBody}>{body}</span>
              <span style={s.regNum}>{yr}</span>
              <span style={{ ...s.regNum, color: st === 'Ongoing' ? brass : '#75809a' }}>{st}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={s.statsBar}>
        <div style={s.statCell}><div style={s.statNum}>£4.8bn</div><div style={s.statLbl}>transaction value advised</div></div>
        <div style={{...s.statCell}}><div style={s.statNum}>31</div><div style={s.statLbl}>jurisdictions practiced</div></div>
        <div style={{...s.statCell, borderRight: 'none'}}><div style={s.statNum}>94%</div><div style={s.statLbl}>repeat or referred clients</div></div>
      </div>
      <div style={s.foot}>
        <span>1 Crown Court, London EC2</span>
        <button style={s.footBtn}>Request a mandate review →</button>
        <span>Private · Discreet · Documented</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 36. POP POLYGON — playful product studio: cobalt field, floating geometry,
//     chunky rounded service cards. Space Grotesk.
// ─────────────────────────────────────────────────────────────────────────────
function HeroPopPolygon() {
  const cobalt = '#2742F5';
  const s = {
    root: { width: WA, height: HA, background: cobalt, color: '#FFFFFF',
      fontFamily: '"Space Grotesk", "Inter Tight", sans-serif',
      display: 'flex', flexDirection: 'column', position: 'relative',
      overflow: 'hidden' },
    blob: (w, x, y, c, o) => ({ position: 'absolute', width: w, height: w,
      left: x, top: y, borderRadius: '50%', background: c, opacity: o,
      filter: 'blur(2px)' }),
    ringShape: { position: 'absolute', right: 200, top: 108, width: 130,
      height: 130, borderRadius: '50%', border: '26px solid #FFD43B',
      transform: 'rotate(-14deg)' },
    halfMoon: { position: 'absolute', right: 120, bottom: 190, width: 110,
      height: 55, borderRadius: '110px 110px 0 0', background: '#FF6B4A',
      transform: 'rotate(24deg)' },
    triShape: { position: 'absolute', left: 56, bottom: 120, width: 0,
      height: 0, borderLeft: '34px solid transparent',
      borderRight: '34px solid transparent', borderBottom: '58px solid #FFFFFF',
      opacity: 0.9 },
    crossShape: { position: 'absolute', left: 590, top: 84, color: '#FFD43B',
      fontSize: 34, fontWeight: 700, transform: 'rotate(12deg)' },
    sprinkle: (x, y, c) => ({ position: 'absolute', width: 10, height: 10,
      borderRadius: '50%', background: c, left: x, top: y, opacity: 0.85 }),
    nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '26px 52px', zIndex: 5, fontWeight: 600 },
    brand: { fontSize: 22, fontWeight: 700, display: 'flex', gap: 10,
      alignItems: 'center' },
    brandDot: { width: 18, height: 18, background: '#FFD43B', borderRadius: 6,
      transform: 'rotate(45deg)', display: 'inline-block' },
    links: { display: 'flex', gap: 26, fontSize: 14.5, color: 'rgba(255,255,255,0.9)' },
    navCta: { background: '#fff', color: cobalt, borderRadius: 999,
      padding: '11px 20px', fontWeight: 700, fontSize: 14, cursor: 'pointer' },
    main: { flex: 1, display: 'flex', flexDirection: 'column', padding: '20px 52px 40px',
      zIndex: 4, minHeight: 0 },
    chipRow: { display: 'flex', gap: 10, marginBottom: 20 },
    chip: { border: '1.5px solid rgba(255,255,255,0.55)', borderRadius: 999,
      padding: '7px 14px', fontSize: 12, fontWeight: 600,
      letterSpacing: '0.06em' },
    h1: { fontSize: 106, lineHeight: 0.98, fontWeight: 700, margin: 0,
      letterSpacing: '-0.03em' },
    h1ChipWord: { display: 'inline-block', background: '#FF6B4A', color: '#fff',
      borderRadius: 999, padding: '0 30px 10px', transform: 'rotate(-3deg)',
      boxShadow: '0 10px 30px rgba(0,0,30,0.25)' },
    sub: { fontSize: 17, lineHeight: 1.55, maxWidth: 480, marginTop: 22,
      color: 'rgba(255,255,255,0.92)', fontWeight: 500 },
    cards: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20,
      marginTop: 34 },
    svc: { background: '#ffffff', color: '#15173a', borderRadius: 24,
      padding: '22px 24px 20px', boxShadow: '0 18px 44px rgba(10,12,60,0.35)' },
    svcIconRow: { display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', marginBottom: 14 },
    svcShapeCircle: { width: 26, height: 26, borderRadius: '50%',
      background: '#2742F5' },
    svcShapeSquare: { width: 24, height: 24, background: '#FF6B4A',
      borderRadius: 7, transform: 'rotate(14deg)' },
    svcShapeTri: { width: 0, height: 0, borderLeft: '14px solid transparent',
      borderRight: '14px solid transparent', borderBottom: '24px solid #FFB53B' },
    svcArrow: { fontSize: 20, color: '#15173a' },
    svcTitle: { fontSize: 20, fontWeight: 700, letterSpacing: '-0.01em' },
    svcDesc: { fontSize: 13.5, color: '#4a4f77', marginTop: 6, lineHeight: 1.45 },
    svcPrice: { fontSize: 13, fontWeight: 700, marginTop: 12,
      color: '#2742F5', textTransform: 'uppercase', letterSpacing: '0.08em' },
  };
  return (
    <div style={s.root}>
      <div style={s.blob(520, -160, -180, '#4259ff', 0.55)}></div>
      <div style={s.blob(360, 900, 380, '#1f36cf', 0.7)}></div>
      <div style={s.sprinkle('210px','260px','#FFD43B')}></div>
      <div style={s.sprinkle('1150px','240px','#FF9BE0')}></div>
      <div style={s.sprinkle('900px','160px','#7CE3B1')}></div>
      <div style={s.ringShape}></div>
      <div style={s.halfMoon}></div>
      <div style={s.triShape}></div>
      <div style={s.crossShape}>✚</div>
      <div style={s.nav}>
        <div style={s.brand}><span style={s.brandDot}></span> poppolygon®</div>
        <div style={s.links}><span>Work</span><span>About</span><span>Gossip</span></div>
        <button style={s.navCta}>Say hi 👋</button>
      </div>
      <div style={s.main}>
        <div style={s.chipRow}>
          <span style={s.chip}>✦ Product studio</span>
          <span style={s.chip}>Amsterdam + remote</span>
          <span style={s.chip}>Booking Oct onward</span>
        </div>
        <h1 style={s.h1}>
          Bright ideas,<br/>
          built <span style={s.h1ChipWord}>bold.</span>
        </h1>
        <p style={s.sub}>
          We design and ship apps, brands, and tiny delightful machines with
          founders who like momentum. Six-week sprints, prototypes by day ten.
        </p>
        <div style={s.cards}>
          <div style={s.svc}>
            <div style={s.svcIconRow}><span style={s.svcShapeCircle}></span><span style={s.svcArrow}>→</span></div>
            <div style={s.svcTitle}>App Sprint</div>
            <div style={s.svcDesc}>Design + native build of v1 in six focused weeks.</div>
            <div style={s.svcPrice}>from €28k</div>
          </div>
          <div style={s.svc}>
            <div style={s.svcIconRow}><span style={s.svcShapeSquare}></span><span style={s.svcArrow}>→</span></div>
            <div style={s.svcTitle}>Brand Pop</div>
            <div style={s.svcDesc}>Identity, voice, and a launch kit people screenshot.</div>
            <div style={s.svcPrice}>from €12k</div>
          </div>
          <div style={s.svc}>
            <div style={s.svcIconRow}><span style={s.svcShapeTri}></span><span style={s.svcArrow}>→</span></div>
            <div style={s.svcTitle}>Tiny Machines</div>
            <div style={s.svcDesc}>Internal tools people actually open every morning.</div>
            <div style={s.svcPrice}>from €9k</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 37. BENTO WALL — dark data-platform SaaS: glowing gradient tile, bento grid
//     of feature tiles, sparklines, integration chips. Manrope.
// ─────────────────────────────────────────────────────────────────────────────
function HeroBento() {
  const s = {
    root: { width: WA, height: HA, background: '#0A0C12', color: '#F2F4FA',
      fontFamily: '"Manrope", "Inter Tight", sans-serif', display: 'flex',
      flexDirection: 'column', overflow: 'hidden', position: 'relative' },
    dotGrid: { position: 'absolute', inset: 0,
      backgroundImage: 'radial-gradient(rgba(255,255,255,0.055) 1px, transparent 1px)',
      backgroundSize: '26px 26px', pointerEvents: 'none' },
    glowTop: { position: 'absolute', top: -320, left: '50%',
      width: 1000, height: 560, transform: 'translateX(-50%)',
      background: 'radial-gradient(closest-side, rgba(124,93,250,0.28), transparent)',
      pointerEvents: 'none' },
    nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '22px 48px', zIndex: 3 },
    brand: { display: 'flex', gap: 10, alignItems: 'center', fontWeight: 700,
      fontSize: 17 },
    logoMark: { width: 26, height: 26, borderRadius: 8,
      background: 'linear-gradient(135deg,#7C5DFA,#38BDF8)',
      boxShadow: '0 0 18px rgba(124,93,250,0.6)' },
    links: { display: 'flex', gap: 28, fontSize: 13.5, color: '#9BA3B5' },
    navRight: { display: 'flex', gap: 16, alignItems: 'center', fontSize: 13.5 },
    signIn: { color: '#CBD2E1' },
    navCta: { background: '#F2F4FA', color: '#0A0C12', borderRadius: 10,
      padding: '10px 18px', fontWeight: 700, cursor: 'pointer' },
    hero: { textAlign: 'center', zIndex: 2, padding: '26px 48px 0' },
    badge: { display: 'inline-flex', gap: 8, alignItems: 'center',
      border: '1px solid rgba(255,255,255,0.16)', borderRadius: 999,
      padding: '7px 14px', fontSize: 11.5, color: '#C3CAD9',
      letterSpacing: '0.06em' },
    badgeGrad: { background: 'linear-gradient(90deg,#7C5DFA,#38BDF8)',
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
      fontWeight: 800 },
    h1: { fontSize: 82, fontWeight: 800, letterSpacing: '-0.045em',
      lineHeight: 1.02, margin: '18px auto 0', maxWidth: 900 },
    gradInk: { background: 'linear-gradient(92deg,#FFFFFF 30%,#B3A6FF 70%,#67E8F9)',
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
    sub: { fontSize: 17, color: '#9BA3B5', maxWidth: 560, margin: '16px auto 0',
      lineHeight: 1.6, fontWeight: 500 },
    ctaRow: { display: 'flex', gap: 14, justifyContent: 'center', marginTop: 24 },
    ctaPrimary: { background: '#F2F4FA', color: '#0A0C12', fontWeight: 800,
      borderRadius: 12, padding: '14px 24px', fontSize: 14.5, cursor: 'pointer' },
    ctaGhost: { background: 'transparent', border: '1px solid rgba(255,255,255,0.18)',
      color: '#E7EBF5', borderRadius: 12, padding: '14px 22px', fontSize: 14.5,
      fontWeight: 600, cursor: 'pointer' },
    bento: { position: 'relative', zIndex: 2, flex: 1, minHeight: 0,
      margin: '28px 48px 40px', display: 'grid', gap: 14,
      gridTemplateColumns: '2.2fr 1fr 1fr', gridTemplateRows: '1.5fr 1fr' },
    tile: { border: '1px solid rgba(255,255,255,0.09)', borderRadius: 18,
      background: 'rgba(255,255,255,0.03)', padding: '18px 20px',
      position: 'relative', overflow: 'hidden' },
    tileGlow: { background:
      'radial-gradient(120% 160% at 15% 0%, rgba(124,93,250,0.22), rgba(56,189,248,0.07) 45%, rgba(255,255,255,0.02) 75%)',
      display: 'flex', flexDirection: 'column' },
    appMock: { flex: 1, marginTop: 14, borderRadius: 12,
      border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(8,10,18,0.75)',
      display: 'grid', gridTemplateColumns: '120px 1fr', overflow: 'hidden' },
    mockSide: { borderRight: '1px solid rgba(255,255,255,0.08)',
      padding: '12px 12px', display: 'flex', flexDirection: 'column', gap: 9 },
    sideItem: (active) => ({ height: 9, borderRadius: 5,
      background: active ? 'rgba(124,93,250,0.75)' : 'rgba(255,255,255,0.13)',
      width: active ? '80%' : '62%' }),
    mockMain: { padding: '14px 16px', display: 'flex', flexDirection: 'column' },
    mockBars: { flex: 1, display: 'flex', alignItems: 'flex-end', gap: 9,
      borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: 0 },
    bar: (h, c) => ({ width: 22, height: `${h}%`, borderRadius: '6px 6px 0 0',
      background: c || 'linear-gradient(180deg,#7C5DFA,#3b2c86)' }),
    metricTile: { display: 'flex', flexDirection: 'column',
      justifyContent: 'space-between' },
    kpiLbl: { fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase',
      color: '#9BA3B5', fontWeight: 700 },
    kpiBig: { fontSize: 44, fontWeight: 800, letterSpacing: '-0.03em' },
    kpiDelta: { fontSize: 12.5, color: '#5EE39A', fontWeight: 700 },
    sparkTile: { display: 'flex', flexDirection: 'column' },
    sparkHead: { display: 'flex', justifyContent: 'space-between',
      alignItems: 'baseline' },
    intTile: { gridColumn: '2 / 4', display: 'flex', alignItems: 'center',
      gap: 12 },
    intChip: { display: 'flex', alignItems: 'center', gap: 8,
      border: '1px solid rgba(255,255,255,0.14)', borderRadius: 999,
      padding: '8px 14px', fontSize: 12, color: '#CBD2E1', fontWeight: 600 },
    intSq: (c) => ({ width: 14, height: 14, borderRadius: 4, background: c }),
  };
  return (
    <div style={s.root}>
      <div style={s.dotGrid}></div>
      <div style={s.glowTop}></div>
      <div style={s.nav}>
        <div style={s.brand}><span style={s.logoMark}></span> gridform</div>
        <div style={s.links}><span>Product</span><span>Solutions</span><span>Docs</span><span>Pricing</span></div>
        <div style={s.navRight}>
          <span style={s.signIn}>Sign in</span>
          <button style={s.navCta}>Start free</button>
        </div>
      </div>
      <div style={s.hero}>
        <div style={s.badge}><span style={s.badgeGrad}>NEW</span> SOC 2 Type II · EU & US regions <span style={{opacity:.5}}>·</span> Series B</div>
        <h1 style={s.h1}><span style={s.gradInk}>Your product data,</span><br/>one calm grid.</h1>
        <p style={s.sub}>
          Gridform pipes events, billing, and support into a single queryable
          board — so growth teams stop reconciling tabs at 6 pm.
        </p>
        <div style={s.ctaRow}>
          <button style={s.ctaPrimary}>Connect your stack →</button>
          <button style={s.ctaGhost}>Book a demo</button>
        </div>
      </div>
      <div style={s.bento}>
        <div style={{ ...s.tile, ...s.tileGlow }}>
          <div style={s.kpiLbl}>Live event flow · last 24h</div>
          <div style={s.appMock}>
            <div style={s.mockSide}>
              {[1,0,0,0,1,0].map((a, i) => <div key={i} style={s.sideItem(a)}></div>)}
            </div>
            <div style={s.mockMain}>
              <div style={{ ...s.kpiLbl, marginBottom: 8, color: '#C3CAD9' }}>signup_cohorts · weekly retention</div>
              <div style={s.mockBars}>
                {[42, 68, 51, 84, 62, 95, 73].map((h, i) => (
                  <div key={i} style={s.bar(h, i === 5 ? 'linear-gradient(180deg,#38BDF8,#155e9e)' : undefined)}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div style={{ ...s.tile, ...s.metricTile }}>
          <div style={s.kpiLbl}>Query p95</div>
          <div style={s.kpiBig}>212ms</div>
          <div style={s.kpiDelta}>▼ 38% after caching tier</div>
        </div>
        <div style={{ ...s.tile, ...s.sparkTile }}>
          <div style={s.sparkHead}>
            <div style={s.kpiLbl}>Net revenue</div>
            <div style={s.kpiDelta}>▲ 24% WoW</div>
          </div>
          <svg viewBox="0 0 220 70" preserveAspectRatio="none"
            style={{ width: '100%', height: 82, marginTop: 10 }}>
            <defs>
              <linearGradient id="gfb" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7C5DFA" stopOpacity="0.5"/>
                <stop offset="100%" stopColor="#7C5DFA" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path d="M0 58 C 30 54, 45 40, 70 44 S 110 30, 135 22 S 185 26, 220 8 L 220 70 L 0 70 Z" fill="url(#gfb)"/>
            <path d="M0 58 C 30 54, 45 40, 70 44 S 110 30, 135 22 S 185 26, 220 8"
              fill="none" stroke="#A78BFF" strokeWidth="2.5"/>
            <circle cx="220" cy="8" r="3.5" fill="#E9E2FF"/>
          </svg>
        </div>
        <div style={{ ...s.tile, ...s.intTile, gridColumn: '1 / 4' , paddingTop: 14, paddingBottom: 14}}>
          <span style={s.kpiLbl}>Plays nice with</span>
          <span style={s.intChip}><span style={s.intSq('#7C5DFA')}></span>Segment</span>
          <span style={s.intChip}><span style={s.intSq('#38BDF8')}></span>Snowflake</span>
          <span style={s.intChip}><span style={s.intSq('#5EE39A')}></span>Stripe</span>
          <span style={s.intChip}><span style={s.intSq('#FFD166')}></span>Zenbox</span>
          <span style={{ marginLeft: 'auto', fontSize: 12, color: '#9BA3B5' }}>+ 60 more →</span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 38. SOFT CLOUD GRADIENT — pastel-mesh HR/payroll SaaS: pill nav, centered
//     headline with gradient word, dashboard-in-browser mock clipped low.
// ─────────────────────────────────────────────────────────────────────────────
function HeroCloudsoft() {
  const ink = '#191924';
  const s = {
    root: { width: WA, height: HA, color: ink,
      fontFamily: '"Manrope", "Public Sans", sans-serif', display: 'flex',
      flexDirection: 'column', overflow: 'hidden', position: 'relative',
      background: 'radial-gradient(720px 480px at 12% -6%, #E4E9FF 0%, transparent 60%), radial-gradient(640px 440px at 92% 4%, #FFE3EE 0%, transparent 62%), radial-gradient(760px 520px at 78% 88%, #DDF6EA 0%, transparent 58%), radial-gradient(560px 420px at 22% 86%, #FFF3DC 0%, transparent 55%), #FBFBFE' },
    nav: { alignSelf: 'center', marginTop: 20, display: 'flex', gap: 26,
      alignItems: 'center', background: 'rgba(255,255,255,0.85)',
      border: '1px solid rgba(25,25,36,0.07)', borderRadius: 999,
      padding: '10px 12px 10px 22px', boxShadow: '0 12px 34px rgba(35,30,90,0.10)',
      backdropFilter: 'blur(10px)', zIndex: 4 },
    brand: { fontWeight: 800, fontSize: 17, letterSpacing: '-0.02em' },
    brandFlake: { color: '#7C5DFA' },
    links: { display: 'flex', gap: 22, fontSize: 13.5, color: '#5a5a70',
      fontWeight: 600 },
    navCta: { background: ink, color: '#fff', borderRadius: 999,
      padding: '10px 20px', fontWeight: 700, fontSize: 13.5, cursor: 'pointer' },
    hero: { textAlign: 'center', marginTop: 24, zIndex: 3 },
    pillBadge: { display: 'inline-flex', alignItems: 'center', gap: 8,
      background: '#fff', border: '1px solid rgba(25,25,36,0.08)',
      borderRadius: 999, padding: '8px 16px', fontSize: 12.5, fontWeight: 700,
      color: '#4d4d63', boxShadow: '0 6px 20px rgba(35,30,90,0.07)' },
    newTag: { background: '#EFEAFF', color: '#6C4CF1', borderRadius: 999,
      padding: '3px 10px', fontSize: 10.5, letterSpacing: '0.08em' },
    h1: { fontSize: 72, fontWeight: 800, letterSpacing: '-0.045em',
      lineHeight: 1.0, margin: '16px auto 0', maxWidth: 940 },
    gradWord: { background: 'linear-gradient(92deg,#6C4CF1,#E0509A 70%)',
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
    sub: { fontSize: 16.5, color: '#5a5a70', maxWidth: 560, margin: '14px auto 0',
      lineHeight: 1.55, fontWeight: 500 },
    ctas: { display: 'flex', gap: 14, justifyContent: 'center', marginTop: 20 },
    ctaDark: { background: ink, color: '#fff', borderRadius: 999,
      padding: '14px 26px', fontWeight: 800, fontSize: 14, cursor: 'pointer' },
    ctaLight: { background: '#fff', color: ink, borderRadius: 999,
      padding: '14px 22px', fontWeight: 700, fontSize: 14,
      border: '1px solid rgba(25,25,36,0.1)', cursor: 'pointer' },
    logos: { display: 'flex', gap: 34, justifyContent: 'center', marginTop: 18,
      fontSize: 11.5, letterSpacing: '0.18em', color: '#9a9ab0',
      textTransform: 'uppercase', fontWeight: 700, zIndex: 3 },
    mockWrap: { flex: 1, minHeight: 0, display: 'flex', justifyContent: 'center',
      alignItems: 'flex-end', zIndex: 2, padding: '16px 0 0' },
    mock: { width: 880, height: 280, background: '#fff',
      borderRadius: '18px 18px 0 0', border: '1px solid rgba(25,25,36,0.09)',
      borderBottom: 'none', boxShadow: '0 -18px 60px rgba(35,30,90,0.14)',
      overflow: 'hidden', display: 'flex', flexDirection: 'column' },
    mockBar: { height: 44, borderBottom: '1px solid #eeeaf6',
      display: 'flex', alignItems: 'center', gap: 8, padding: '0 18px' },
    dotG: (c) => ({ width: 11, height: 11, borderRadius: '50%', background: c }),
    urlPill: { marginLeft: 12, flex: 1, maxWidth: 320, height: 26,
      borderRadius: 999, background: '#F4F2FA', fontSize: 11,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#8a8aa2', fontWeight: 600, letterSpacing: '0.04em' },
    mockBody: { flex: 1, display: 'grid', gridTemplateColumns: '1.4fr 1fr' },
    tblCol: { padding: '16px 22px', borderRight: '1px solid #eeeaf6' },
    tblHead: { display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr',
      fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase',
      color: '#9a9ab0', paddingBottom: 8, fontWeight: 700 },
    trow: { display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr',
      padding: '8px 0', borderTop: '1px solid #F1EEF8', fontSize: 13,
      fontWeight: 600, color: '#33334a', alignItems: 'center' },
    status: (ok) => ({ fontSize: 11, fontWeight: 800, color: ok ? '#12946a' : '#b0700f',
      background: ok ? '#E2F6ED' : '#FBF0DB', borderRadius: 999,
      padding: '4px 10px', justifySelf: 'start' }),
    chartCol: { padding: '16px 22px', display: 'flex', flexDirection: 'column' },
    chartHead: { display: 'flex', justifyContent: 'space-between',
      fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase',
      color: '#9a9ab0', fontWeight: 700 },
    barsArea: { flex: 1, display: 'flex', alignItems: 'flex-end', gap: 12,
      marginTop: 12, paddingBottom: 4 },
    mbar: (h, c) => ({ flex: 1, height: `${h}%`, borderRadius: 8, background: c }),
  };
  const rows = [
    ['Ana Petrescu', 'Ops lead', '£4,120', true],
    ['Théo Marchand', 'Designer', '£3,760', true],
    ['Priya Nair', 'Engineering', '£6,300', false],
    ['Sam Okafor', 'Support', '£2,985', true],
  ];
  return (
    <div style={s.root}>
      <div style={s.nav}>
        <div style={s.brand}>marlow<span style={s.brandFlake}>✳</span></div>
        <div style={s.links}><span>Payroll</span><span>Benefits</span><span>Time</span><span>Pricing</span></div>
        <button style={s.navCta}>Start free</button>
      </div>
      <div style={s.hero}>
        <div style={s.pillBadge}><span style={s.newTag}>NEW</span> Payroll now runs in all 50 states <span style={{opacity:.4}}>→</span></div>
        <h1 style={s.h1}>
          Payroll that<br/>runs <span style={s.gradWord}>itself.</span>
        </h1>
        <p style={s.sub}>
          Salaries, taxes, pensions, payslips — filed before your coffee cools.
          Marlow keeps the boring machinery humming while you grow the team.
        </p>
        <div style={s.ctas}>
          <button style={s.ctaDark}>Run your first payroll</button>
          <button style={s.ctaLight}>▶ Watch 2-min tour</button>
        </div>
        <div style={s.logos}>
          <span>Tundra Labs</span><span>Fablegrove</span><span>Osk&Co</span><span>Bright Ovens</span><span>Pelican Post</span>
        </div>
      </div>
      <div style={s.mockWrap}>
        <div style={s.mock}>
          <div style={s.mockBar}>
            <span style={s.dotG('#FF5F57')}></span><span style={s.dotG('#FEBC2E')}></span><span style={s.dotG('#28C840')}></span>
            <span style={s.urlPill}>app.marlow.run/payroll/april</span>
          </div>
          <div style={s.mockBody}>
            <div style={s.tblCol}>
              <div style={s.tblHead}><span>Team member</span><span>Gross</span><span>Status</span></div>
              {rows.map(([name, role, amt, ok]) => (
                <div key={name} style={s.trow}>
                  <span>{name}<span style={{ display: 'block', fontSize: 11, color: '#9a9ab0', fontWeight: 600 }}>{role}</span></span>
                  <span>{amt}</span>
                  <span style={s.status(ok)}>{ok ? 'Paid ✓' : 'Pending'}</span>
                </div>
              ))}
            </div>
            <div style={s.chartCol}>
              <div style={s.chartHead}><span>Total run · April</span><span>£184,240</span></div>
              <div style={s.barsArea}>
                {[[34,'#E4E9FF'],[52,'#D6CCFA'],[44,'#EFD6EA'],[68,'#C0B0F5'],[58,'#E4E9FF'],[84,'#6C4CF1']].map(([h,c],i)=>(
                  <div key={i} style={s.mbar(h,c)}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 39. TERMINAL DEV TOOL — deploy platform: split hero with a live terminal
//     card (build log, diff lines), kbd chips, CI-badge stat strip.
// ─────────────────────────────────────────────────────────────────────────────
function HeroClITool() {
  const green = '#37FF8B';
  const dim = '#8DBFA6';
  const s = {
    root: { width: WA, height: HA, background: '#071009', color: '#E7F5EC',
      fontFamily: '"JetBrains Mono", "IBM Plex Mono", monospace',
      display: 'flex', flexDirection: 'column', overflow: 'hidden',
      position: 'relative' },
    scan: { position: 'absolute', inset: 0,
      backgroundImage: 'repeating-linear-gradient(0deg, rgba(55,255,139,0.025) 0 1px, transparent 1px 3px)',
      pointerEvents: 'none' },
    nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '20px 44px', zIndex: 3, fontSize: 12.5 },
    brand: { color: green, fontWeight: 700 },
    cursorBlock: { display: 'inline-block', width: 9, height: 16,
      background: green, verticalAlign: '-2px', marginLeft: 4 },
    links: { display: 'flex', gap: 26, textTransform: 'uppercase',
      letterSpacing: '0.1em', fontSize: 11.5, color: dim },
    ghChip: { border: '1px solid rgba(55,255,139,0.4)', borderRadius: 6,
      padding: '7px 12px', color: green, display: 'flex', gap: 8 },
    main: { flex: 1, display: 'grid', gridTemplateColumns: '1fr 1.08fr',
      gap: 40, padding: '22px 44px 0', minHeight: 0, zIndex: 2,
      alignItems: 'center' },
    eyebrow: { color: dim, fontSize: 12, letterSpacing: '0.14em',
      textTransform: 'uppercase', marginBottom: 18 },
    hlGreen: { color: green },
    strikeRed: { color: '#FF6B6B', textDecoration: 'line-through' },
    h1: { fontFamily: '"Space Grotesk", "Manrope", sans-serif',
      fontSize: 74, fontWeight: 800, lineHeight: 1.02, letterSpacing: '-0.035em',
      margin: 0 },
    copy: { fontSize: 14.5, lineHeight: 1.7, color: dim, marginTop: 20,
      maxWidth: 470 },
    kbdRow: { display: 'flex', gap: 12, marginTop: 24 },
    kbd: { border: '1px solid rgba(55,255,139,0.35)', borderBottomWidth: 3,
      borderRadius: 7, padding: '7px 11px', fontSize: 12, color: '#D7EEE0' },
    ctas: { display: 'flex', gap: 14, marginTop: 28, alignItems: 'center' },
    btnFill: { background: green, color: '#062512', fontWeight: 800,
      padding: '15px 24px', borderRadius: 8, fontSize: 13.5, cursor: 'pointer',
      fontFamily: '"Space Grotesk", sans-serif' },
    btnGhost: { background: 'transparent', border: '1px solid rgba(55,255,139,0.45)',
      color: green, padding: '15px 20px', borderRadius: 8, fontSize: 13.5,
      cursor: 'pointer', fontWeight: 600, fontFamily: '"Space Grotesk", sans-serif' },
    term: { border: '1px solid rgba(55,255,139,0.35)', borderRadius: 12,
      background: '#050B07', boxShadow: '0 30px 80px rgba(0,40,18,0.55), 0 0 60px rgba(55,255,139,0.08)',
      overflow: 'hidden' },
    termBar: { display: 'flex', alignItems: 'center', gap: 8,
      padding: '12px 16px', borderBottom: '1px solid rgba(55,255,139,0.2)',
      fontSize: 11.5, color: dim },
    termDot: (c) => ({ width: 11, height: 11, borderRadius: '50%', background: c }),
    termTitle: { marginLeft: 8 },
    termBody: { padding: '18px 20px 20px', fontSize: 13.5, lineHeight: 2.0 },
    lineOK: { color: '#E7F5EC' },
    prompt: { color: green, fontWeight: 700 },
    check: { color: green },
    addLine: { color: '#37FF8B', background: 'rgba(55,255,139,0.08)',
      display: 'block', borderRadius: 4, padding: '0 8px' },
    delLine: { color: '#FF8A8A', background: 'rgba(255,107,107,0.07)',
      display: 'block', borderRadius: 4, padding: '0 8px' },
    urlOut: { color: '#E7F5EC', textDecoration: 'underline',
      textDecorationColor: green },
    strip: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
      borderTop: '1px solid rgba(55,255,139,0.25)', zIndex: 3, background: 'rgba(5,11,7,0.6)' },
    cellStat: { padding: '16px 44px', borderRight: '1px solid rgba(55,255,139,0.15)' },
    statVal: { color: green, fontWeight: 700, fontSize: 16 },
    statLbl: { color: dim, fontSize: 10.5, letterSpacing: '0.16em',
      textTransform: 'uppercase', marginTop: 3 },
  };
  return (
    <div style={s.root}>
      <style>{'@keyframes sp-blink{0%,49%{opacity:1}50%,100%{opacity:0}}'}</style>
      <div style={s.scan}></div>
      <div style={s.nav}>
        <div style={s.brand}>$ shiplane<span style={{ ...s.cursorBlock, animation: 'sp-blink 1.1s step-end infinite' }}></span></div>
        <div style={s.links}><span>Docs</span><span>CLI</span><span>Edge net</span><span>Pricing</span></div>
        <div style={s.ghChip}>★ 21,408 stars</div>
      </div>
      <div style={s.main}>
        <div>
          <div style={s.eyebrow}>v3.2 — zero-config deploys for humans</div>
          <h1 style={s.h1}>
            Deploy without the <span style={s.strikeRed}>YAML ceremony</span><span style={s.hlGreen}>.</span>
          </h1>
          <p style={s.copy}>
            One binary reads your repo, builds the graph, wires TLS, and rolls
            out atomically across <span style={s.hlGreen}>42 edge regions</span>.
            Rollback is one keystroke, not one sprint.
          </p>
          <div style={s.kbdRow}>
            <span style={s.kbd}>⌘K command menu</span>
            <span style={s.kbd}>TAB env autocomplete</span>
            <span style={s.kbd}>^R instant rollback</span>
          </div>
          <div style={s.ctas}>
            <button style={s.btnFill}>curl -sSL shiplane.dev | sh</button>
            <button style={s.btnGhost}>Read the docs →</button>
          </div>
        </div>
        <div style={s.term}>
          <div style={s.termBar}>
            <span style={s.termDot('#FF5F57')}></span>
            <span style={s.termDot('#FEBC2E')}></span>
            <span style={s.termDot('#28C840')}></span>
            <span style={s.termTitle}>~/acme/checkout — zsh</span>
          </div>
          <div style={s.termBody}>
            <div style={s.lineOK}><span style={s.prompt}>❯</span> shiplane up --prod</div>
            <div style={s.lineOK}><span style={s.check}>✓</span> repo graphed — 3 services, 2 crons</div>
            <div style={s.lineOK}><span style={s.check}>✓</span> built in 41s (cache hit 91%)</div>
            <span style={s.delLine}>- deploy.yaml …… 214 lines removed</span>
            <span style={s.addLine}>+ shiplane.toml ………… 6 lines added</span>
            <div style={s.lineOK}><span style={s.check}>✓</span> migrations: 1 applied (38ms)</div>
            <div style={s.lineOK}><span style={s.check}>●</span> rollout — region iad1 ◆ fra1 ◆ sin1 … all healthy</div>
            <div style={s.lineOK}><span style={s.check}>✓</span> live → <span style={s.urlOut}>https://checkout.acme.shiplane.app</span></div>
          </div>
        </div>
      </div>
      <div style={s.strip}>
        <div style={s.cellStat}><div style={s.statVal}>38ms</div><div style={s.statLbl}>global p95 cold</div></div>
        <div style={s.cellStat}><div style={s.statVal}>42</div><div style={s.statLbl}>edge regions</div></div>
        <div style={s.cellStat}><div style={s.statVal}>0</div><div style={s.statLbl}>config files required</div></div>
        <div style={{ ...s.cellStat, borderRight: 'none' }}><div style={s.statVal}>99.99%</div><div style={s.statLbl}>uptime, 90 days</div></div>
      </div>
    </div>
  );
}
// ─────────────────────────────────────────────────────────────────────────────
// 40. SIGNUP FIRST — warm-paper tool landing where the form IS the hero.
//     Cormorant italic accents, checklist bullets, testimonial quote.
// ─────────────────────────────────────────────────────────────────────────────
function HeroSignupFirst() {
  const ink = '#211D16';
  const paper = '#FAF7EF';
  const line = '#E3DAC8';
  const s = {
    root: { width: WA, height: HA, background: paper, color: ink,
      fontFamily: '"DM Sans", "Public Sans", sans-serif', display: 'flex',
      flexDirection: 'column', overflow: 'hidden' },
    nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '26px 64px 22px', borderBottom: `1px solid ${line}` },
    brand: { display: 'flex', gap: 10, alignItems: 'center', fontWeight: 700,
      fontSize: 18 },
    brandRing: { width: 16, height: 16, borderRadius: '50%',
      border: `3px solid ${ink}`, display: 'inline-block' },
    links: { display: 'flex', gap: 28, fontSize: 14, color: '#5d564a',
      fontWeight: 500 },
    main: { flex: 1, display: 'grid', gridTemplateColumns: '1.15fr 1fr',
      gap: 64, padding: '44px 64px 0', minHeight: 0 },
    kicker: { fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase',
      color: '#8a7f6b', marginBottom: 16 },
    h1: { fontFamily: '"Cormorant Garamond", "Newsreader", serif',
      fontSize: 88, fontWeight: 600, lineHeight: 0.98, margin: 0,
      letterSpacing: '-0.015em' },
    h1Ital: { fontStyle: 'italic', fontWeight: 500 },
    checks: { marginTop: 24, display: 'flex', flexDirection: 'column', gap: 12,
      fontSize: 15, fontWeight: 500 },
    checkRow: { display: 'flex', gap: 12, alignItems: 'center' },
    cbx: { width: 20, height: 20, borderRadius: 6, background: '#211D16',
      color: paper, display: 'grid', placeItems: 'center', fontSize: 12,
      fontWeight: 700 },
    quoteBlock: { marginTop: 30, maxWidth: 460 },
    quote: { fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
      fontSize: 23, lineHeight: 1.35, color: '#3d372c' },
    attribution: { fontSize: 12.5, color: '#8a7f6b', marginTop: 10,
      letterSpacing: '0.04em' },
    formSide: { display: 'flex', flexDirection: 'column',
      justifyContent: 'center', position: 'relative' },
    backPlate: { position: 'absolute', inset: '14px -14px -14px 14px',
      background: '#EFE7D6', borderRadius: 16 },
    card: { position: 'relative', background: '#fff', borderRadius: 16,
      border: `1px solid ${line}`, boxShadow: '0 24px 60px rgba(60,48,20,0.12)',
      padding: '30px 34px 28px' },
    cardH: { fontFamily: '"Cormorant Garamond", serif', fontSize: 30,
      fontWeight: 600, margin: 0 },
    cardSub: { fontSize: 13, color: '#8a7f6b', marginTop: 6 },
    label: { fontSize: 11.5, fontWeight: 700, letterSpacing: '0.14em',
      textTransform: 'uppercase', color: '#6d6455', margin: '18px 0 7px',
      display: 'block' },
    input: { width: '100%', border: `1.5px solid ${line}`, borderRadius: 10,
      padding: '13px 14px', fontSize: 15, fontFamily: 'inherit',
      background: paper, boxSizing: 'border-box' },
    submit: { width: '100%', marginTop: 20, background: ink, color: paper,
      border: 'none', borderRadius: 10, padding: '15px', fontSize: 15,
      fontWeight: 700, cursor: 'pointer',
      fontFamily: 'inherit' },
    submitHint: { textAlign: 'center', fontSize: 12, color: '#8a7f6b',
      marginTop: 10 },
    divider: { display: 'flex', alignItems: 'center', gap: 12, margin: '18px 0 0',
      color: '#b3a88f', fontSize: 11, letterSpacing: '0.14em',
      textTransform: 'uppercase' },
    divLine: { flex: 1, borderTop: `1px solid ${line}` },
    ssoRow: { display: 'flex', gap: 10, marginTop: 14 },
    ssoBtn: { flex: 1, textAlign: 'center', border: `1.5px solid ${line}`,
      borderRadius: 10, padding: '11px', fontSize: 13, fontWeight: 600 },
    foot: { borderTop: `1px solid ${line}`, padding: '16px 64px',
      display: 'flex', justifyContent: 'space-between', fontSize: 12.5,
      color: '#6d6455' },
  };
  return (
    <div style={s.root}>
      <div style={s.nav}>
        <div style={s.brand}><span style={s.brandRing}></span> Notemap</div>
        <div style={s.links}><span>Tour</span><span>Pricing</span><span>Field guide</span><span>Blog</span></div>
        <div style={{ fontSize: 14, fontWeight: 600 }}>Sign in →</div>
      </div>
      <div style={s.main}>
        <div>
          <div style={s.kicker}>Plain software for busy teams</div>
          <h1 style={s.h1}>
            Notes that <span style={s.h1Ital}>find you</span> later.
          </h1>
          <div style={s.checks}>
            <div style={s.checkRow}><span style={s.cbx}>✓</span> Search that remembers, even for “that doc about boats”</div>
            <div style={s.checkRow}><span style={s.cbx}>✓</span> Weekly digest of what changed in your maps</div>
            <div style={s.checkRow}><span style={s.cbx}>✓</span> Exports any time — your words stay yours</div>
          </div>
          <div style={s.quoteBlock}>
            <div style={s.quote}>
              “We replaced three tools and a standing meeting. The meeting was
              the best part of leaving.”
            </div>
            <div style={s.attribution}>— Rosa M., operations director, Bright Ovens</div>
          </div>
        </div>
        <div style={s.formSide}>
          <div style={s.backPlate}></div>
          <div style={s.card}>
            <h2 style={s.cardH}>Create your workspace</h2>
            <div style={s.cardSub}>Free for 30 days. No card, no demo call.</div>
            <label style={s.label}>Workspace name</label>
            <input style={s.input} placeholder="brightovens" readOnly />
            <label style={s.label}>Work email</label>
            <input style={s.input} placeholder="you@brightovens.co" readOnly />
            <button style={s.submit}>Start free →</button>
            <div style={s.submitHint}>Takes ~40 seconds. Cancel with one click.</div>
            <div style={s.divider}><span style={s.divLine}></span>or bring your crew<span style={s.divLine}></span></div>
            <div style={s.ssoRow}>
              <div style={s.ssoBtn}>Apple</div>
              <div style={s.ssoBtn}>Google</div>
              <div style={s.ssoBtn}>Magic link</div>
            </div>
          </div>
        </div>
      </div>
      <div style={s.foot}>
        <span>No meetings. No migrations. No confetti animations.</span>
        <span>SOC 2 · GDPR · 2 file formats you have heard of</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

function AgencyLandSection() {
  return (
    <DCSection id="agency-land" title="Agency Landings"
      subtitle="Four studio homepages with distinct temperatures: grand-serif editorial, kinetic marquee bands, engraved consultancy ledger, and pop-geometric playful.">
      <DCArtboard id="a-granserif" label="33 · Grand Serif Studio" width={WA} height={HA}>
        <HeroGrandSerif />
      </DCArtboard>
      <DCArtboard id="a-marquee" label="34 · Marquee Motion" width={WA} height={HA}>
        <HeroMarqueeMotion />
      </DCArtboard>
      <DCArtboard id="a-ledger" label="35 · Ledger Consultancy" width={WA} height={HA}>
        <HeroLedger />
      </DCArtboard>
      <DCArtboard id="a-popstudio" label="36 · Pop Polygon" width={WA} height={HA}>
        <HeroPopPolygon />
      </DCArtboard>
    </DCSection>
  );
}

function SaasLandSection() {
  return (
    <DCSection id="saas-land" title="SaaS Landings"
      subtitle="Four product-marketing archetypes: bento feature wall, pastel mesh suite, terminal dev-tool, and signup-form-first.">
      <DCArtboard id="s-bento" label="37 · Bento Wall" width={WA} height={HA}>
        <HeroBento />
      </DCArtboard>
      <DCArtboard id="s-cloudsoft" label="38 · Soft Cloud Gradient" width={WA} height={HA}>
        <HeroCloudsoft />
      </DCArtboard>
      <DCArtboard id="s-clitool" label="39 · Terminal Dev Tool" width={WA} height={HA}>
        <HeroClITool />
      </DCArtboard>
      <DCArtboard id="s-signupfirst" label="40 · Signup First" width={WA} height={HA}>
        <HeroSignupFirst />
      </DCArtboard>
    </DCSection>
  );
}

window.AgencyLandSection = AgencyLandSection;
window.SaasLandSection = SaasLandSection;
