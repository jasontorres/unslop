// Civic landings — second batch + details section.
// 5..8 are returned as a fragment of DCArtboards that civic.jsx mounts inside
// section 1; the details section exports four deeper screens as a second
// DCSection.

// ─────────────────────────────────────────────────────────────────────────────
// 5. CITIZEN 311 — friendly civic. Deep navy + warm cream + butter yellow.
//    Soft rounded cards, action-led ("Report it", "Apply", "Find it").
// ─────────────────────────────────────────────────────────────────────────────
function CivicCitizen311() {
  const navy = '#0e2747';
  const cream = '#d8e3cd';   // soft sage replaces former cream paper bg
  const butter = '#f6c84a';
  const ink = '#0a0a0a';
  const s = {
    root: { width: 1280, height: 800, background: cream, color: navy,
      fontFamily: '"DM Sans", system-ui, sans-serif',
      display: 'flex', flexDirection: 'column' },
    nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '20px 56px' },
    brand: { display: 'flex', alignItems: 'center', gap: 12,
      fontSize: 22, fontWeight: 700, letterSpacing: '-0.015em' },
    bMark: { width: 36, height: 36, borderRadius: 12, background: navy, color: butter,
      display: 'grid', placeItems: 'center', fontFamily: '"DM Serif Display", serif',
      fontSize: 22, fontStyle: 'italic' },
    navLinks: { display: 'flex', gap: 28, fontSize: 14, fontWeight: 500 },
    navBtn: { background: navy, color: cream, padding: '10px 18px',
      borderRadius: 999, fontWeight: 600, fontSize: 14 },
    main: { flex: 1, display: 'grid', gridTemplateColumns: '1.05fr 1fr',
      gap: 40, padding: '24px 56px 32px' },
    left: { display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
    eyebrow: { display: 'inline-flex', alignItems: 'center', gap: 10,
      background: butter, color: navy, padding: '6px 14px', borderRadius: 999,
      fontSize: 12, fontWeight: 700, width: 'fit-content' },
    h1: { fontFamily: '"DM Serif Display", "Playfair Display", serif',
      fontSize: 84, lineHeight: 0.95, margin: '18px 0 0', letterSpacing: '-0.025em',
      fontWeight: 400 },
    it: { fontStyle: 'italic', color: '#a3711a' },
    lede: { fontSize: 18, lineHeight: 1.5, color: '#3a4a64', maxWidth: 480, marginTop: 22 },
    statRow: { display: 'flex', gap: 28, marginTop: 8 },
    stat: { display: 'flex', flexDirection: 'column' },
    statN: { fontFamily: '"DM Serif Display", serif', fontSize: 44,
      lineHeight: 1, letterSpacing: '-0.02em' },
    statL: { fontSize: 12, marginTop: 4, color: '#3a4a64',
      letterSpacing: '0.04em', textTransform: 'uppercase' },
    grid: { display: 'grid', gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '1fr 1fr', gap: 16 },
    card: { background: '#fff', border: '1px solid #c4cebb', borderRadius: 20,
      padding: 22, display: 'flex', flexDirection: 'column', gap: 8 },
    cardEm: { background: navy, color: cream, borderColor: navy,
      gridRow: '1 / span 2' },
    icon: { width: 44, height: 44, borderRadius: 12, background: cream,
      color: navy, display: 'grid', placeItems: 'center', fontSize: 22 },
    iconEm: { background: butter, color: navy },
    cTitle: { fontFamily: '"DM Serif Display", serif', fontSize: 24,
      lineHeight: 1.1, letterSpacing: '-0.01em' },
    cTitleBig: { fontFamily: '"DM Serif Display", serif', fontSize: 36,
      lineHeight: 1, letterSpacing: '-0.02em' },
    cDesc: { fontSize: 13.5, lineHeight: 1.5, color: '#4b5667' },
    cDescEm: { color: '#cbd6e6' },
    cMore: { marginTop: 'auto', fontSize: 13, fontWeight: 700, color: navy },
    cMoreEm: { color: butter },
    foot: { padding: '14px 56px', borderTop: '1px solid #b8c2ad',
      display: 'flex', justifyContent: 'space-between',
      fontSize: 12, color: '#3a4a64' },
  };
  return (
    <div style={s.root}>
      <div style={s.nav}>
        <div style={s.brand}>
          <div style={s.bMark}>h</div>
          <span>Halden · Borough Services</span>
        </div>
        <div style={s.navLinks}>
          <span>Services</span><span>My account</span><span>Open data</span>
          <span>Council</span>
        </div>
        <span style={s.navBtn}>Sign in →</span>
      </div>
      <div style={s.main}>
        <div style={s.left}>
          <div>
            <div style={s.eyebrow}>★ Open 24/7 · No login needed</div>
            <h1 style={s.h1}>
              Your borough,<br/>
              <span style={s.it}>in one tap.</span>
            </h1>
            <p style={s.lede}>
              Pay it, report it, find it, apply for it. Halden’s 311 portal
              brings every service we offer onto one calm, plain-language page —
              and tells you how long things actually take.
            </p>
          </div>
          <div style={s.statRow}>
            <div style={s.stat}>
              <div style={s.statN}>3.2 days</div>
              <div style={s.statL}>Median pothole fix</div>
            </div>
            <div style={s.stat}>
              <div style={s.statN}>96%</div>
              <div style={s.statL}>Cases closed online</div>
            </div>
            <div style={s.stat}>
              <div style={s.statN}>42k</div>
              <div style={s.statL}>Requests this year</div>
            </div>
          </div>
        </div>
        <div style={s.grid}>
          <div style={{ ...s.card, ...s.cardEm }}>
            <div style={{ ...s.icon, ...s.iconEm }}>＋</div>
            <div style={s.cTitleBig}>Report something to the borough.</div>
            <div style={{ ...s.cDesc, ...s.cDescEm }}>
              Potholes, broken streetlights, dumped rubbish, drainage. Track it
              from your phone — we’ll text you when it’s fixed.
            </div>
            <div style={{ ...s.cMore, ...s.cMoreEm }}>Start a report →</div>
          </div>
          <div style={s.card}>
            <div style={s.icon}>£</div>
            <div style={s.cTitle}>Pay or check.</div>
            <div style={s.cDesc}>Council tax, parking, business rates.</div>
            <div style={s.cMore}>Pay something →</div>
          </div>
          <div style={s.card}>
            <div style={s.icon}>♛</div>
            <div style={s.cTitle}>Apply.</div>
            <div style={s.cDesc}>Permits, licences, housing, schools.</div>
            <div style={s.cMore}>Browse forms →</div>
          </div>
        </div>
      </div>
      <div style={s.foot}>
        <span>halden.gov · Plain-English commitment</span>
        <span>Switch language: EN · BN · UR · PL · SO</span>
        <span>Accessibility statement</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 6. FISCAL DARK — dark mode budget transparency dashboard landing.
//    Slate background, mint + signal accents, big share-of-spend bar.
// ─────────────────────────────────────────────────────────────────────────────
function CivicFiscalDark() {
  const bg = '#0b1220';
  const surface = '#121a2c';
  const line = '#243150';
  const text = '#e4ecff';
  const muted = '#8898b8';
  const mint = '#5cf2c0';
  const amber = '#ffb547';
  const rose = '#ff6580';
  const s = {
    root: { width: 1280, height: 800, background: bg, color: text,
      fontFamily: '"Inter Tight", system-ui, sans-serif',
      display: 'flex', flexDirection: 'column' },
    nav: { display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '18px 40px', borderBottom: '1px solid ' + line,
      fontFamily: '"JetBrains Mono", monospace', fontSize: 12,
      letterSpacing: '0.08em', textTransform: 'uppercase' },
    brand: { display: 'flex', gap: 10, alignItems: 'center', fontWeight: 700 },
    bMark: { width: 16, height: 16, borderRadius: '50%', background: mint,
      boxShadow: '0 0 16px ' + mint },
    main: { flex: 1, display: 'grid', gridTemplateColumns: '1.1fr 1.2fr',
      gap: 24, padding: '28px 40px' },
    headBlock: { display: 'flex', flexDirection: 'column', gap: 22 },
    eyebrow: { display: 'inline-flex', alignItems: 'center', gap: 10,
      fontFamily: '"JetBrains Mono", monospace', fontSize: 11,
      letterSpacing: '0.16em', textTransform: 'uppercase', color: mint },
    dot: { width: 8, height: 8, borderRadius: '50%', background: mint },
    h1: { fontSize: 60, lineHeight: 1.0, fontWeight: 700,
      letterSpacing: '-0.025em', margin: 0, maxWidth: 540 },
    em: { color: mint },
    lede: { fontSize: 16, lineHeight: 1.55, color: muted, maxWidth: 460, margin: 0 },
    keyRow: { display: 'flex', gap: 28, marginTop: 6 },
    keyN: { fontSize: 38, fontWeight: 700, letterSpacing: '-0.02em',
      fontFeatureSettings: '"tnum"' },
    keyL: { fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase',
      color: muted, marginTop: 2, fontFamily: '"JetBrains Mono", monospace' },
    chips: { display: 'flex', gap: 8, marginTop: 4 },
    chip: { padding: '6px 12px', border: '1px solid ' + line, borderRadius: 999,
      fontSize: 12, color: muted, fontFamily: '"JetBrains Mono", monospace',
      letterSpacing: '0.06em', textTransform: 'uppercase' },
    chipOn: { borderColor: mint, color: mint },
    panel: { background: surface, border: '1px solid ' + line, borderRadius: 16,
      padding: 22, display: 'flex', flexDirection: 'column', gap: 14,
      position: 'relative' },
    pHead: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' },
    pTitle: { fontSize: 13, fontFamily: '"JetBrains Mono", monospace',
      letterSpacing: '0.1em', textTransform: 'uppercase', color: muted },
    pBig: { fontSize: 42, fontWeight: 700, letterSpacing: '-0.02em',
      fontFeatureSettings: '"tnum"' },
    bar: { display: 'flex', width: '100%', height: 18, borderRadius: 4,
      overflow: 'hidden', border: '1px solid ' + line },
    legend: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 18px',
      fontSize: 12, color: muted },
    lRow: { display: 'flex', alignItems: 'center', gap: 8 },
    swatch: { width: 10, height: 10, borderRadius: 2 },
    spendRow: { display: 'flex', justifyContent: 'space-between',
      paddingBlock: 8, borderBottom: '1px solid ' + line, fontSize: 13.5,
      alignItems: 'center' },
    pct: { fontFamily: '"JetBrains Mono", monospace', color: mint,
      fontWeight: 600, fontSize: 13 },
    barTrack: { height: 4, width: 80, background: '#1c2742', borderRadius: 2 },
  };
  const slices = [
    ['Public safety',     26, mint],
    ['Health & human',    17, amber],
    ['Education',         15, '#7aa8ff'],
    ['Transit & roads',   13, rose],
    ['Capital projects',  11, '#c084ff'],
    ['Admin & debt',      18, '#5b6a8c'],
  ];
  return (
    <div style={s.root}>
      <div style={s.nav}>
        <div style={s.brand}><div style={s.bMark}></div> ledger.calder.gov</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <span>Budget</span><span>Contracts</span><span>Payroll</span>
          <span>Vendors</span><span>API</span>
        </div>
        <span style={{ color: mint }}>Updated 14:08 UTC ●</span>
      </div>
      <div style={s.main}>
        <div style={s.headBlock}>
          <div style={s.eyebrow}><span style={s.dot}></span> The Public Ledger · FY 2026</div>
          <h1 style={s.h1}>Every dollar Calder County spends, <span style={s.em}>traceable.</span></h1>
          <p style={s.lede}>
            A live ledger of obligations, payments, and vendor relationships —
            updated within 24 hours of any disbursement. Filter by agency,
            program, or contract. Subscribe to a query and we’ll email you when
            it changes.
          </p>
          <div style={s.keyRow}>
            <div>
              <div style={s.keyN}>$2.41<span style={{ color: mint }}>B</span></div>
              <div style={s.keyL}>FY26 Adopted</div>
            </div>
            <div>
              <div style={s.keyN}>$842M</div>
              <div style={s.keyL}>Obligated YTD</div>
            </div>
            <div>
              <div style={s.keyN}>4,118</div>
              <div style={s.keyL}>Active contracts</div>
            </div>
          </div>
          <div style={s.chips}>
            <span style={{ ...s.chip, ...s.chipOn }}>FY26</span>
            <span style={s.chip}>FY25</span>
            <span style={s.chip}>FY24</span>
            <span style={s.chip}>10-yr trend</span>
            <span style={s.chip}>Per resident</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={s.panel}>
            <div style={s.pHead}>
              <span style={s.pTitle}>Share of spend · FY26</span>
              <span style={s.pTitle}>${'2.41B'} total</span>
            </div>
            <div style={s.bar}>
              {slices.map(([n, p, c]) => (
                <div key={n} style={{ flex: p, background: c }} title={n}></div>
              ))}
            </div>
            <div style={s.legend}>
              {slices.map(([n, p, c]) => (
                <div key={n} style={s.lRow}>
                  <span style={{ ...s.swatch, background: c }}></span>
                  <span style={{ flex: 1, color: text }}>{n}</span>
                  <span style={{ fontFamily: '"JetBrains Mono", monospace',
                    color: muted }}>{p}%</span>
                </div>
              ))}
            </div>
          </div>
          <div style={s.panel}>
            <div style={s.pHead}>
              <span style={s.pTitle}>Biggest movers · last 7 days</span>
              <span style={{ ...s.pTitle, color: mint }}>Δ vs last week</span>
            </div>
            {[
              ['Capital · Bridge 14 reconstruction',  '+$18.4M', mint],
              ['Health · Mobile clinic contract',     '+$4.2M',  mint],
              ['Public safety · Body-cam refresh',    '+$2.8M',  amber],
              ['IT · Legacy migration phase II',      '−$1.1M',  rose],
            ].map(([n, d, c]) => (
              <div key={n} style={s.spendRow}>
                <span>{n}</span>
                <span style={{ ...s.pct, color: c }}>{d}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 7. DISTRICT MAP — cartographic layout, big map placeholder. Election &
//    district-level data; cool grey + signal red.
// ─────────────────────────────────────────────────────────────────────────────
function CivicDistrictMap() {
  const ink = '#0d1112';
  const paper = '#eef0ed';
  const sig = '#cf2424';
  const cool = '#3a5c84';
  const muted = '#6a7077';
  const s = {
    root: { width: 1280, height: 800, background: paper, color: ink,
      fontFamily: '"Archivo", system-ui, sans-serif',
      display: 'flex', flexDirection: 'column' },
    nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '16px 40px', borderBottom: '1px solid ' + ink,
      background: '#fafbf9' },
    brand: { display: 'flex', alignItems: 'center', gap: 12,
      fontWeight: 800, fontSize: 18, letterSpacing: '-0.01em' },
    bMark: { width: 26, height: 26, border: '2px solid ' + ink, borderRadius: '50%',
      position: 'relative' },
    bDot: { position: 'absolute', inset: '50% 0 0 50%', width: 8, height: 8,
      background: sig, borderRadius: '50%', transform: 'translate(-50%,-50%)' },
    navLinks: { display: 'flex', gap: 24, fontSize: 13,
      fontFamily: '"IBM Plex Mono", monospace',
      letterSpacing: '0.08em', textTransform: 'uppercase' },
    main: { flex: 1, display: 'grid', gridTemplateColumns: '340px 1fr 280px' },
    sidebar: { padding: '28px 28px', borderRight: '1px solid ' + ink,
      display: 'flex', flexDirection: 'column', gap: 22 },
    eyebrow: { fontFamily: '"IBM Plex Mono", monospace', fontSize: 11,
      letterSpacing: '0.16em', textTransform: 'uppercase', color: muted },
    h1: { fontSize: 44, lineHeight: 1.0, fontWeight: 800, letterSpacing: '-0.025em',
      margin: 0 },
    lede: { fontSize: 14, lineHeight: 1.5, color: '#2c3236', margin: 0 },
    selector: { border: '1.5px solid ' + ink, padding: 12,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      background: '#fff' },
    selL: { fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase',
      color: muted, fontFamily: '"IBM Plex Mono", monospace' },
    selV: { fontSize: 18, fontWeight: 700, letterSpacing: '-0.01em' },
    keyStats: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4,
      borderTop: '1px solid ' + ink, borderLeft: '1px solid ' + ink },
    ksCell: { padding: '14px 16px', borderRight: '1px solid ' + ink,
      borderBottom: '1px solid ' + ink, background: '#fafbf9' },
    ksN: { fontSize: 26, fontWeight: 800, letterSpacing: '-0.02em' },
    ksL: { fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase',
      color: muted, fontFamily: '"IBM Plex Mono", monospace', marginTop: 2 },
    map: { position: 'relative', background:
      'repeating-linear-gradient(0deg, rgba(0,0,0,0.04) 0 1px, transparent 1px 40px),' +
      'repeating-linear-gradient(90deg, rgba(0,0,0,0.04) 0 1px, transparent 1px 40px)',
      borderRight: '1px solid ' + ink, overflow: 'hidden' },
    legend: { position: 'absolute', left: 16, bottom: 16, background: '#fff',
      border: '1px solid ' + ink, padding: 12, fontSize: 11,
      fontFamily: '"IBM Plex Mono", monospace', letterSpacing: '0.1em',
      textTransform: 'uppercase', display: 'flex', gap: 14 },
    legendDot: { width: 12, height: 12, marginRight: 6, verticalAlign: 'middle',
      display: 'inline-block' },
    rightCol: { padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 18 },
    panelTitle: { fontFamily: '"IBM Plex Mono", monospace', fontSize: 11,
      letterSpacing: '0.16em', textTransform: 'uppercase', color: muted,
      borderBottom: '1px solid ' + ink, paddingBottom: 8 },
    repCard: { display: 'flex', gap: 12, alignItems: 'center' },
    avatar: { width: 44, height: 44, borderRadius: '50%', background: cool,
      flex: '0 0 auto' },
    rRow: { display: 'flex', justifyContent: 'space-between',
      paddingBlock: 8, borderBottom: '1px dashed #c4c8c2', fontSize: 13 },
  };
  // crude svg districts
  return (
    <div style={s.root}>
      <div style={s.nav}>
        <div style={s.brand}>
          <div style={s.bMark}><div style={s.bDot}></div></div>
          District Compass · Calder County
        </div>
        <div style={s.navLinks}>
          <span>Districts</span><span>Elections</span><span>Census</span>
          <span>Boundaries</span><span>Data</span>
        </div>
        <span style={{ fontSize: 12, fontFamily: '"IBM Plex Mono", monospace',
          letterSpacing: '0.1em', textTransform: 'uppercase', color: sig }}>
          ● Election in 142 days
        </span>
      </div>
      <div style={s.main}>
        <div style={s.sidebar}>
          <div style={s.eyebrow}>Look up your district</div>
          <h1 style={s.h1}>What’s happening on your street, in plain sight.</h1>
          <p style={s.lede}>
            Type your address — see your council member, polling place, school
            zone, capital projects within ¼ mile, and every public meeting on
            your block.
          </p>
          <div style={s.selector}>
            <div>
              <div style={s.selL}>Your address</div>
              <div style={s.selV}>411 Bauer St, Ward 6</div>
            </div>
            <div style={{ fontSize: 12, fontFamily: '"IBM Plex Mono", monospace',
              letterSpacing: '0.1em', color: sig }}>CHANGE</div>
          </div>
          <div style={s.keyStats}>
            <div style={s.ksCell}><div style={s.ksN}>Ward 6</div><div style={s.ksL}>Council district</div></div>
            <div style={s.ksCell}><div style={s.ksN}>P-411</div><div style={s.ksL}>Polling place</div></div>
            <div style={s.ksCell}><div style={s.ksN}>72.4%</div><div style={s.ksL}>2024 turnout</div></div>
            <div style={s.ksCell}><div style={s.ksN}>$8.4M</div><div style={s.ksL}>Capital here</div></div>
          </div>
        </div>
        <div style={s.map}>
          <svg width="100%" height="100%" viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice">
            {/* abstract districts */}
            <g stroke={ink} strokeWidth="1.4" fill="none">
              <path d="M40 60 L240 40 L320 130 L260 260 L100 280 L40 200 Z" fill="rgba(58,92,132,0.15)" />
              <path d="M240 40 L460 80 L520 200 L420 250 L320 130 Z" fill="rgba(58,92,132,0.28)" />
              <path d="M460 80 L580 140 L560 320 L520 200 Z" fill="rgba(207,36,36,0.18)" />
              <path d="M100 280 L260 260 L300 410 L160 460 L60 380 Z" fill="rgba(58,92,132,0.10)" />
              <path d="M260 260 L420 250 L460 420 L300 410 Z" fill="rgba(207,36,36,0.10)" />
              <path d="M420 250 L520 200 L560 320 L540 470 L460 420 Z" fill="rgba(58,92,132,0.22)" />
              <path d="M60 380 L160 460 L220 600 L100 640 L40 540 Z" fill="rgba(58,92,132,0.20)" />
              <path d="M160 460 L300 410 L380 580 L220 600 Z" fill="rgba(207,36,36,0.30)" />
              <path d="M300 410 L460 420 L540 470 L500 640 L380 580 Z" fill="rgba(58,92,132,0.14)" />
              <path d="M540 470 L580 600 L520 740 L500 640 Z" fill="rgba(58,92,132,0.30)" />
            </g>
            {/* you-are-here */}
            <g transform="translate(312 416)">
              <circle r="22" fill="none" stroke={sig} strokeWidth="2" opacity="0.4"/>
              <circle r="12" fill="none" stroke={sig} strokeWidth="2" opacity="0.7"/>
              <circle r="5" fill={sig}/>
            </g>
            {/* labels */}
            {[
              [160, 160, 'WARD 1'], [380, 150, 'WARD 2'], [510, 200, 'WARD 3'],
              [180, 360, 'WARD 4'], [370, 340, 'WARD 5'], [330, 480, 'WARD 6'],
              [140, 530, 'WARD 7'], [290, 540, 'WARD 8'], [460, 540, 'WARD 9'],
              [540, 620, 'WD 10']
            ].map(([x, y, l]) => (
              <text key={l} x={x} y={y} fontSize="11" fontFamily='"IBM Plex Mono"'
                fill={ink} textAnchor="middle" letterSpacing="0.1em">{l}</text>
            ))}
          </svg>
          <div style={s.legend}>
            <span><span style={{ ...s.legendDot, background: 'rgba(58,92,132,0.5)' }}></span>Council majority</span>
            <span><span style={{ ...s.legendDot, background: 'rgba(207,36,36,0.6)' }}></span>Contested seats</span>
            <span><span style={{ ...s.legendDot, background: sig, borderRadius: '50%' }}></span>You are here</span>
          </div>
        </div>
        <div style={s.rightCol}>
          <div>
            <div style={s.panelTitle}>Your representative</div>
            <div style={{ ...s.repCard, marginTop: 14 }}>
              <div style={s.avatar}></div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 16 }}>Anya Iqbal</div>
                <div style={{ fontSize: 12, color: muted }}>Council, Ward 6 · since 2023</div>
              </div>
            </div>
          </div>
          <div>
            <div style={s.panelTitle}>Public meetings · Ward 6</div>
            <div style={s.rRow}><span>Budget hearing</span><span style={{ color: sig }}>Jun 03</span></div>
            <div style={s.rRow}><span>Zoning · 14th &amp; Bauer</span><span>Jun 10</span></div>
            <div style={s.rRow}><span>Town hall (in person)</span><span>Jun 17</span></div>
            <div style={s.rRow}><span>School board</span><span>Jun 24</span></div>
          </div>
          <div>
            <div style={s.panelTitle}>On the ballot in Nov</div>
            <div style={s.rRow}><span>Council, Ward 6</span><span style={{ color: cool }}>2 cand.</span></div>
            <div style={s.rRow}><span>School board</span><span style={{ color: cool }}>4 cand.</span></div>
            <div style={s.rRow}><span>Bond measure A</span><span style={{ color: sig }}>$ 240M</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 8. BILINGUAL / ACCESSIBILITY-FIRST — two-column EN / ES public-rights page,
//    calm Fraunces + Inter, accessibility chip row at top.
// ─────────────────────────────────────────────────────────────────────────────
function CivicBilingual() {
  const ink = '#13110d';
  const paper = '#ecd5c4';   // dusty blush — replaces former cream bg
  const rule = '#13110d';
  const accent = '#a02334';
  const muted = '#6b6a64';
  const s = {
    root: { width: 1280, height: 800, background: paper, color: ink,
      fontFamily: '"Inter Tight", system-ui, sans-serif',
      display: 'flex', flexDirection: 'column' },
    a11ybar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '10px 40px', background: ink, color: paper,
      fontFamily: '"IBM Plex Mono", monospace', fontSize: 11,
      letterSpacing: '0.12em', textTransform: 'uppercase' },
    a11yChips: { display: 'flex', gap: 14 },
    a11yChip: { padding: '4px 10px', border: '1px solid rgba(255,255,255,0.25)' },
    a11yOn: { background: paper, color: ink, borderColor: paper },
    nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
      padding: '22px 40px 16px', borderBottom: '2px solid ' + rule },
    brand: { fontFamily: '"Fraunces", "Cormorant Garamond", Georgia, serif',
      fontSize: 26, fontStyle: 'italic', letterSpacing: '-0.01em' },
    navLinks: { display: 'flex', gap: 24, fontSize: 14, fontWeight: 500 },
    cols: { flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr',
      borderBottom: '1px solid ' + rule },
    col: { padding: '40px 40px 32px', display: 'flex', flexDirection: 'column', gap: 22 },
    colL: { borderRight: '1px solid ' + rule },
    lang: { display: 'flex', alignItems: 'center', gap: 10,
      fontFamily: '"IBM Plex Mono", monospace', fontSize: 11,
      letterSpacing: '0.16em', textTransform: 'uppercase' },
    langBadge: { background: ink, color: paper, padding: '3px 8px' },
    h1: { fontFamily: '"Fraunces", Georgia, serif', fontSize: 52,
      lineHeight: 1.0, letterSpacing: '-0.025em', margin: 0, fontWeight: 500 },
    h1It: { fontStyle: 'italic', color: accent, fontWeight: 400 },
    lede: { fontSize: 16.5, lineHeight: 1.5, color: '#2a2820', margin: 0 },
    bullets: { fontSize: 15, lineHeight: 1.5, margin: 0, paddingLeft: 0,
      listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 },
    bullet: { display: 'flex', gap: 12, alignItems: 'baseline' },
    bDash: { width: 14, borderTop: '2px solid ' + accent, marginTop: 10,
      flex: '0 0 auto' },
    cta: { marginTop: 'auto', display: 'flex', gap: 10, alignItems: 'center' },
    ctaBtn: { background: ink, color: paper, padding: '14px 22px',
      fontWeight: 600, fontSize: 15 },
    ctaSub: { fontFamily: '"IBM Plex Mono", monospace', fontSize: 11,
      letterSpacing: '0.12em', color: muted, textTransform: 'uppercase' },
    foot: { padding: '14px 40px', display: 'flex', justifyContent: 'space-between',
      fontFamily: '"IBM Plex Mono", monospace', fontSize: 11,
      letterSpacing: '0.12em', textTransform: 'uppercase', color: muted },
  };
  return (
    <div style={s.root}>
      <div style={s.a11ybar}>
        <span>● Plain-language commitment · WCAG 2.2 AA</span>
        <div style={s.a11yChips}>
          <span style={{ ...s.a11yChip, ...s.a11yOn }}>A</span>
          <span style={s.a11yChip}>A+</span>
          <span style={s.a11yChip}>A++</span>
          <span style={s.a11yChip}>Contrast</span>
          <span style={s.a11yChip}>Read aloud ▸</span>
        </div>
        <span>Helpline · 311 · 24/7 · TTY 711</span>
      </div>
      <div style={s.nav}>
        <div style={s.brand}>Office of Tenant Rights — <em>Calder County</em></div>
        <div style={s.navLinks}>
          <span>Your rights</span><span>File a complaint</span>
          <span>Find help</span><span>Data</span><span>About</span>
        </div>
      </div>
      <div style={s.cols}>
        <div style={{ ...s.col, ...s.colL }}>
          <div style={s.lang}><span style={s.langBadge}>EN</span> English · Original</div>
          <h1 style={s.h1}>You have the right to a <span style={s.h1It}>safe, stable</span> home.</h1>
          <p style={s.lede}>
            If your landlord is failing to make repairs, raising your rent
            without notice, or asking you to leave, you have rights. This page
            explains what they are, in plain English, and how to act on them
            today.
          </p>
          <ul style={s.bullets}>
            <li style={s.bullet}><span style={s.bDash}></span><span><b>Heat &amp; hot water.</b> Required Oct 1 – May 31. We will send an inspector within 24 hours.</span></li>
            <li style={s.bullet}><span style={s.bDash}></span><span><b>Eviction.</b> 90 days written notice. No retaliatory evictions.</span></li>
            <li style={s.bullet}><span style={s.bDash}></span><span><b>Rent increases.</b> Capped at 3% or CPI, whichever is lower, in 2026.</span></li>
            <li style={s.bullet}><span style={s.bDash}></span><span><b>Free legal help.</b> If you earn under $72k, you qualify.</span></li>
          </ul>
          <div style={s.cta}>
            <span style={s.ctaBtn}>File a complaint →</span>
            <span style={s.ctaSub}>Median resolution: 11 days</span>
          </div>
        </div>
        <div style={s.col}>
          <div style={s.lang}><span style={s.langBadge}>ES</span> Español · Traducción oficial</div>
          <h1 style={s.h1}>Tienes derecho a un hogar <span style={s.h1It}>seguro y estable</span>.</h1>
          <p style={s.lede}>
            Si tu arrendador no hace reparaciones, sube la renta sin aviso, o te
            pide que te vayas, tienes derechos. Esta página los explica con
            palabras simples — y te dice qué hacer hoy mismo.
          </p>
          <ul style={s.bullets}>
            <li style={s.bullet}><span style={s.bDash}></span><span><b>Calefacción y agua caliente.</b> Obligatorio del 1 oct al 31 may. Mandamos un inspector en 24 horas.</span></li>
            <li style={s.bullet}><span style={s.bDash}></span><span><b>Desalojo.</b> 90 días de aviso por escrito. Sin represalias.</span></li>
            <li style={s.bullet}><span style={s.bDash}></span><span><b>Aumentos de renta.</b> Máximo 3 % o el CPI, lo menor, en 2026.</span></li>
            <li style={s.bullet}><span style={s.bDash}></span><span><b>Ayuda legal gratis.</b> Si ganas menos de $72k al año, calificas.</span></li>
          </ul>
          <div style={s.cta}>
            <span style={s.ctaBtn}>Presentar una queja →</span>
            <span style={s.ctaSub}>Resolución promedio: 11 días</span>
          </div>
        </div>
      </div>
      <div style={s.foot}>
        <span>Available in EN · ES · ZH · AR · BN · KO · RU · HT</span>
        <span>tenantrights.calder.gov</span>
        <span>Last reviewed 22 May 2026</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Fragment of artboards 5..8, mounted inside section 1 by civic.jsx.
// ─────────────────────────────────────────────────────────────────────────────
function CivicHeroes2({ W, H }) {
  return (
    <>
      <DCArtboard id="citizen-311" label="05 · Citizen 311 (friendly)" width={W} height={H}>
        <CivicCitizen311 />
      </DCArtboard>
      <DCArtboard id="fiscal-dark" label="06 · Fiscal Dark — Public Ledger" width={W} height={H}>
        <CivicFiscalDark />
      </DCArtboard>
      <DCArtboard id="district-map" label="07 · District / Map-forward" width={W} height={H}>
        <CivicDistrictMap />
      </DCArtboard>
      <DCArtboard id="bilingual" label="08 · Bilingual / Accessibility-first" width={W} height={H}>
        <CivicBilingual />
      </DCArtboard>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 2: deeper screens. Dataset detail, service form, budget viz,
// public hearing agenda.  All 1280×900 to give them breathing room.
// ─────────────────────────────────────────────────────────────────────────────
const DW = 1280, DH = 900;

// (a) Dataset detail page — open data record
function CivicDatasetDetail() {
  const ink = '#0a0a0a';
  const paper = '#ffffff';
  const muted = '#6a6a68';
  const accent = '#0b6b2d';
  const s = {
    root: { width: DW, height: DH, background: paper, color: ink,
      fontFamily: '"Inter Tight", system-ui, sans-serif',
      display: 'flex', flexDirection: 'column' },
    crumb: { padding: '14px 56px', borderBottom: '1px solid #e3e1d8',
      fontFamily: '"IBM Plex Mono", monospace', fontSize: 11,
      letterSpacing: '0.12em', textTransform: 'uppercase', color: muted },
    crumbA: { color: accent },
    head: { padding: '36px 56px 24px', borderBottom: '1px solid #e3e1d8',
      display: 'grid', gridTemplateColumns: '1fr 320px', gap: 40 },
    tag: { display: 'inline-flex', gap: 8, fontFamily: '"IBM Plex Mono", monospace',
      fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
      color: muted },
    tagOn: { background: accent, color: paper, padding: '3px 8px' },
    h1: { fontFamily: '"Bricolage Grotesque", "Inter Tight", sans-serif',
      fontSize: 48, lineHeight: 1.05, letterSpacing: '-0.025em',
      margin: '14px 0 14px', fontWeight: 700 },
    desc: { fontSize: 16, lineHeight: 1.55, color: '#2a2a28', maxWidth: 720 },
    actions: { display: 'flex', flexDirection: 'column', gap: 10 },
    aBtn: { padding: '14px 18px', background: accent, color: paper, fontWeight: 700,
      fontSize: 14, display: 'flex', justifyContent: 'space-between' },
    aSec: { padding: '12px 18px', border: '2px solid ' + ink, fontWeight: 600,
      fontSize: 14, display: 'flex', justifyContent: 'space-between' },
    body: { flex: 1, display: 'grid', gridTemplateColumns: '1fr 320px',
      borderBottom: '1px solid #e3e1d8' },
    main: { padding: '24px 56px', borderRight: '1px solid #e3e1d8',
      display: 'flex', flexDirection: 'column', gap: 22 },
    sectionTitle: { fontFamily: '"IBM Plex Mono", monospace', fontSize: 11,
      letterSpacing: '0.16em', textTransform: 'uppercase', color: muted,
      borderBottom: '1px solid #e3e1d8', paddingBottom: 8 },
    schemaRow: { display: 'grid',
      gridTemplateColumns: '180px 110px 1fr 100px',
      padding: '10px 0', borderBottom: '1px dashed #d4d2cb', alignItems: 'baseline',
      fontSize: 13.5 },
    code: { fontFamily: '"JetBrains Mono", monospace', fontWeight: 600 },
    pill: { fontFamily: '"JetBrains Mono", monospace', fontSize: 11,
      background: '#f3f1ea', padding: '2px 8px', letterSpacing: '0.04em' },
    preview: { background: '#0a0a0a', color: '#d4f7d8', borderRadius: 6,
      padding: 16, fontFamily: '"JetBrains Mono", monospace', fontSize: 12,
      lineHeight: 1.6, overflow: 'hidden', whiteSpace: 'pre' },
    sidebar: { padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: 18 },
    metaRow: { display: 'flex', justifyContent: 'space-between',
      paddingBlock: 8, borderBottom: '1px dashed #d4d2cb', fontSize: 13 },
    metaK: { color: muted, fontFamily: '"IBM Plex Mono", monospace',
      fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase' },
  };
  const preview = `id,filed_at,category,ward,status,duration_hrs
14208,2026-05-22T08:14Z,pothole,6,closed,71.2
14207,2026-05-22T07:55Z,streetlight,4,closed,29.8
14206,2026-05-22T07:42Z,illegal_dumping,9,in_review,—
14205,2026-05-22T07:30Z,water_leak,2,closed,11.4
14204,2026-05-22T07:11Z,graffiti,6,in_review,—`;
  return (
    <div style={s.root}>
      <div style={s.crumb}>
        <span style={s.crumbA}>civic atlas</span> / datasets /
        <span style={s.crumbA}> 311 service requests</span>
      </div>
      <div style={s.head}>
        <div>
          <div style={s.tag}>
            <span style={s.tagOn}>OPEN BY DEFAULT</span>
            <span>Updated 2 hours ago · CC0</span>
          </div>
          <h1 style={s.h1}>311 service requests</h1>
          <p style={s.desc}>
            Every non-emergency service request filed with the city of Meridian,
            from potholes to dumped rubbish, with timestamps, ward, category,
            and final disposition. Refreshed every 15 minutes from the case
            management system.
          </p>
        </div>
        <div style={s.actions}>
          <div style={s.aBtn}><span>Download CSV (14,208 rows)</span><span>↓</span></div>
          <div style={s.aSec}><span>Get JSON · 2.1 MB</span><span>↓</span></div>
          <div style={s.aSec}><span>Connect via API</span><span>↗</span></div>
          <div style={s.aSec}><span>Subscribe to changes</span><span>★</span></div>
        </div>
      </div>
      <div style={s.body}>
        <div style={s.main}>
          <div>
            <div style={s.sectionTitle}>Schema · 8 columns</div>
            {[
              ['id',           'integer',  'Unique case id, auto-assigned',           'PK'],
              ['filed_at',     'datetime', 'When the request was submitted (UTC)',    'ISO 8601'],
              ['category',     'string',   'Service taxonomy v3 (38 categories)',     'enum'],
              ['ward',         'integer',  'City council ward, 1–10',                 '1..10'],
              ['status',       'string',   'Open / in_review / closed / re-opened',   'enum'],
              ['duration_hrs', 'float',    'Hours from filed to closed',              'nullable'],
              ['lat,lng',      'point',    'Approximate; rounded to 100m for privacy','sensitive'],
              ['source',       'string',   'web / phone / app / on_site',              'enum'],
            ].map(r => (
              <div key={r[0]} style={s.schemaRow}>
                <span style={s.code}>{r[0]}</span>
                <span style={s.pill}>{r[1]}</span>
                <span>{r[2]}</span>
                <span style={{ ...s.pill, background: '#e6f2e9', color: accent }}>{r[3]}</span>
              </div>
            ))}
          </div>
          <div>
            <div style={s.sectionTitle}>Preview · first 5 rows</div>
            <div style={s.preview}>{preview}</div>
          </div>
        </div>
        <div style={s.sidebar}>
          <div>
            <div style={s.sectionTitle}>Metadata</div>
            <div style={s.metaRow}><span style={s.metaK}>Publisher</span><span>Office of Operations</span></div>
            <div style={s.metaRow}><span style={s.metaK}>Steward</span><span>D. Okafor</span></div>
            <div style={s.metaRow}><span style={s.metaK}>Cadence</span><span>Every 15 min</span></div>
            <div style={s.metaRow}><span style={s.metaK}>Coverage</span><span>2014 — present</span></div>
            <div style={s.metaRow}><span style={s.metaK}>Rows</span><span>14,208</span></div>
            <div style={s.metaRow}><span style={s.metaK}>License</span><span>CC0 · Public domain</span></div>
            <div style={s.metaRow}><span style={s.metaK}>Quality</span><span style={{ color: accent }}>★ ★ ★ ★ ☆</span></div>
          </div>
          <div>
            <div style={s.sectionTitle}>Most-used by</div>
            <div style={{ fontSize: 13.5, lineHeight: 1.7, marginTop: 8 }}>
              The Public Record · WMRD Public Radio · Halden Tribune ·
              Pratt Civic Lab · 142 individual builders.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// (b) Service application form — apply for a permit, with help text sidebar
function CivicServiceForm() {
  const ink = '#0a0a0a';
  const paper = '#dde5ec';   // cool steel blue replaces former paper bg
  const accent = '#0b6b2d';
  const muted = '#5d6772';
  const s = {
    root: { width: DW, height: DH, background: paper, color: ink,
      fontFamily: '"Inter Tight", system-ui, sans-serif',
      display: 'flex', flexDirection: 'column' },
    crumb: { padding: '14px 56px', borderBottom: '1px solid #c2cbd4',
      fontFamily: '"IBM Plex Mono", monospace', fontSize: 11,
      letterSpacing: '0.12em', textTransform: 'uppercase', color: muted },
    stepBar: { display: 'flex', padding: '14px 56px',
      borderBottom: '1px solid #c2cbd4', gap: 32,
      fontFamily: '"IBM Plex Mono", monospace', fontSize: 11,
      letterSpacing: '0.12em', textTransform: 'uppercase', color: muted },
    stepOn: { color: accent, fontWeight: 700 },
    main: { flex: 1, display: 'grid', gridTemplateColumns: '1fr 360px',
      borderBottom: '1px solid #c2cbd4' },
    form: { padding: '40px 56px', borderRight: '1px solid #c2cbd4',
      display: 'flex', flexDirection: 'column', gap: 28 },
    h1: { fontFamily: '"Bricolage Grotesque", sans-serif',
      fontSize: 44, lineHeight: 1.05, letterSpacing: '-0.025em',
      margin: 0, fontWeight: 700, maxWidth: 640 },
    intro: { fontSize: 16, lineHeight: 1.55, color: '#2a2a28', maxWidth: 640, margin: 0 },
    field: { display: 'flex', flexDirection: 'column', gap: 6, maxWidth: 640 },
    label: { fontWeight: 700, fontSize: 15 },
    hint: { fontSize: 13.5, color: '#4a4a48', marginBottom: 4 },
    input: { border: '2px solid ' + ink, padding: '12px 14px', fontSize: 16,
      background: '#fff', height: 48, display: 'flex', alignItems: 'center',
      color: '#2a2a28' },
    radio: { display: 'flex', flexDirection: 'column', gap: 8 },
    rOpt: { display: 'flex', gap: 12, alignItems: 'baseline',
      padding: '12px 14px', border: '1.5px solid #d4d2cb', background: '#fff' },
    rOptOn: { borderColor: ink, boxShadow: 'inset 0 0 0 1px ' + ink, background: '#fbfdf8' },
    rBox: { width: 18, height: 18, borderRadius: '50%', border: '2px solid ' + ink,
      flex: '0 0 auto', position: 'relative' },
    rBoxOn: { background: '#fff' },
    rDot: { position: 'absolute', inset: 3, borderRadius: '50%', background: accent },
    btnRow: { display: 'flex', gap: 14, marginTop: 8 },
    primary: { background: accent, color: '#fff', padding: '14px 24px',
      fontSize: 15, fontWeight: 700, border: 'none' },
    secondary: { background: 'transparent', color: ink, padding: '14px 18px',
      fontSize: 15, fontWeight: 600, textDecoration: 'underline',
      textUnderlineOffset: 3 },
    help: { padding: '40px 36px', display: 'flex', flexDirection: 'column', gap: 22,
      background: '#c5d2dd' },
    helpH: { fontFamily: '"IBM Plex Mono", monospace', fontSize: 11,
      letterSpacing: '0.16em', textTransform: 'uppercase', color: muted },
    helpRow: { display: 'flex', flexDirection: 'column', gap: 4 },
    helpQ: { fontWeight: 700, fontSize: 14.5 },
    helpA: { fontSize: 14, lineHeight: 1.5, color: '#3a3a38' },
    callout: { borderLeft: '3px solid ' + accent, padding: '10px 14px',
      background: '#fff', fontSize: 14, lineHeight: 1.5 },
  };
  return (
    <div style={s.root}>
      <div style={s.crumb}>
        <span style={{ color: accent }}>meridian.gov</span> / services / building permits /
        <span style={{ color: accent }}> apply</span>
      </div>
      <div style={s.stepBar}>
        <span>Step 1 · Identity ✓</span>
        <span style={s.stepOn}>● Step 2 · About the work</span>
        <span>Step 3 · Plans &amp; docs</span>
        <span>Step 4 · Fees &amp; review</span>
      </div>
      <div style={s.main}>
        <div style={s.form}>
          <h1 style={s.h1}>Tell us about the work you’re planning.</h1>
          <p style={s.intro}>
            We use this to route your application to the right inspector. If
            you’re not sure, the help panel on the right has examples — or call
            311 and a real person will walk you through it.
          </p>

          <div style={s.field}>
            <label style={s.label}>Site address</label>
            <span style={s.hint}>Where will the work happen? Include unit number.</span>
            <div style={s.input}>411 Bauer Street, Apt 3R</div>
          </div>

          <div style={s.field}>
            <label style={s.label}>What kind of work?</label>
            <span style={s.hint}>Pick the closest match. You can change it later.</span>
            <div style={s.radio}>
              {[
                ['Interior renovation', 'Kitchen, bath, walls, doors. No structural changes.', false],
                ['Structural / additions', 'New walls, load-bearing changes, extensions.', true],
                ['Mechanical, electric, plumbing', 'HVAC, panels, water lines.', false],
                ['Demolition', 'Partial or full demolition of a structure.', false],
              ].map(([t, d, on]) => (
                <div key={t} style={{ ...s.rOpt, ...(on ? s.rOptOn : {}) }}>
                  <span style={{ ...s.rBox, ...(on ? s.rBoxOn : {}) }}>
                    {on ? <span style={s.rDot}></span> : null}
                  </span>
                  <span>
                    <div style={{ fontWeight: 700, fontSize: 15 }}>{t}</div>
                    <div style={{ fontSize: 13.5, color: '#4a4a48', marginTop: 2 }}>{d}</div>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div style={s.field}>
            <label style={s.label}>Estimated project cost</label>
            <span style={s.hint}>Used to calculate the permit fee. We will not share this publicly.</span>
            <div style={s.input}>$ 48,000</div>
          </div>

          <div style={s.btnRow}>
            <span style={s.primary}>Save &amp; continue →</span>
            <span style={s.secondary}>Save and finish later</span>
          </div>
        </div>
        <div style={s.help}>
          <div>
            <div style={s.helpH}>Help &amp; examples</div>
            <div style={{ marginTop: 12, ...s.callout }}>
              Most kitchen renovations under $20k don’t need a permit — but
              moving plumbing or gas does. <u>See the threshold table</u>.
            </div>
          </div>
          <div style={s.helpRow}>
            <div style={s.helpQ}>How long does this take?</div>
            <div style={s.helpA}>
              Median review for residential structural work is <b>11 business
              days</b>. We’ll text you when an inspector is assigned.
            </div>
          </div>
          <div style={s.helpRow}>
            <div style={s.helpQ}>What if I get it wrong?</div>
            <div style={s.helpA}>
              You can edit any answer until you submit. We’ll catch obvious
              mismatches and ask you to confirm.
            </div>
          </div>
          <div style={s.helpRow}>
            <div style={s.helpQ}>Talk to a human</div>
            <div style={s.helpA}>
              Call <b>311</b> 24/7, or chat live Mon–Fri 8–6.
              Average wait: 2 min.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// (c) Budget breakdown — agency drilldown, dense numerical layout
function CivicBudgetViz() {
  const bg = '#0b1220';
  const surface = '#121a2c';
  const line = '#243150';
  const text = '#e4ecff';
  const muted = '#8898b8';
  const mint = '#5cf2c0';
  const amber = '#ffb547';
  const rose = '#ff6580';
  const s = {
    root: { width: DW, height: DH, background: bg, color: text,
      fontFamily: '"Inter Tight", system-ui, sans-serif',
      display: 'flex', flexDirection: 'column' },
    crumb: { padding: '14px 40px', borderBottom: '1px solid ' + line,
      fontFamily: '"JetBrains Mono", monospace', fontSize: 11,
      letterSpacing: '0.12em', textTransform: 'uppercase', color: muted },
    crumbA: { color: mint },
    head: { padding: '28px 40px 20px', borderBottom: '1px solid ' + line,
      display: 'grid', gridTemplateColumns: '1fr auto', gap: 24,
      alignItems: 'baseline' },
    h1: { fontSize: 44, fontWeight: 700, letterSpacing: '-0.025em', margin: 0 },
    em: { color: mint },
    meta: { display: 'flex', gap: 24, fontFamily: '"JetBrains Mono", monospace',
      fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase',
      color: muted },
    grid: { flex: 1, display: 'grid',
      gridTemplateColumns: '1.4fr 1fr', gap: 0 },
    left: { padding: '24px 40px', borderRight: '1px solid ' + line,
      display: 'flex', flexDirection: 'column', gap: 18 },
    sec: { fontFamily: '"JetBrains Mono", monospace', fontSize: 11,
      letterSpacing: '0.16em', textTransform: 'uppercase', color: muted,
      borderBottom: '1px solid ' + line, paddingBottom: 8 },
    progRow: { display: 'grid',
      gridTemplateColumns: '1fr 80px 80px 80px',
      paddingBlock: 10, borderBottom: '1px solid ' + line, gap: 14,
      alignItems: 'center' },
    progBar: { height: 6, background: '#1c2742', borderRadius: 3, overflow: 'hidden' },
    progFill: pct => ({ height: '100%', width: pct + '%', background: mint }),
    progFillW: pct => ({ height: '100%', width: pct + '%', background: amber }),
    num: { fontFamily: '"JetBrains Mono", monospace', fontWeight: 600,
      fontSize: 13, textAlign: 'right' },
    right: { padding: '24px 36px', display: 'flex', flexDirection: 'column', gap: 22 },
    big: { fontSize: 56, fontWeight: 700, letterSpacing: '-0.025em',
      fontFeatureSettings: '"tnum"' },
    bigSub: { fontFamily: '"JetBrains Mono", monospace', fontSize: 11,
      letterSpacing: '0.1em', textTransform: 'uppercase', color: muted,
      marginTop: 4 },
    contractRow: { display: 'flex', justifyContent: 'space-between',
      paddingBlock: 10, borderBottom: '1px solid ' + line, fontSize: 13.5,
      alignItems: 'center' },
    flagged: { color: rose, fontFamily: '"JetBrains Mono", monospace',
      fontSize: 11, letterSpacing: '0.08em' },
  };
  const programs = [
    ['Patrol operations',         182, 168, 92, '#5cf2c0'],
    ['911 emergency dispatch',     82,  78, 95, '#5cf2c0'],
    ['Detective services',         96,  91, 94, '#5cf2c0'],
    ['Community engagement',       42,  31, 73, '#ffb547'],
    ['Body-cam program',           38,  22, 58, '#ffb547'],
    ['Internal affairs / oversight', 18,  17, 94, '#5cf2c0'],
    ['Training & academy',         44,  39, 88, '#5cf2c0'],
    ['Forensics lab',              28,  19, 67, '#ffb547'],
    ['Fleet & equipment',          93,  82, 88, '#5cf2c0'],
  ];
  return (
    <div style={s.root}>
      <div style={s.crumb}>
        <span style={s.crumbA}>public ledger</span> / agencies /
        <span style={s.crumbA}> dept of public safety</span> / fy26
      </div>
      <div style={s.head}>
        <div>
          <h1 style={s.h1}>Dept. of Public Safety · <span style={s.em}>$623M</span></h1>
          <div style={{ fontSize: 14, color: muted, marginTop: 8 }}>
            26% of total county spend · 4,118 staff · 9 program areas
          </div>
        </div>
        <div style={s.meta}>
          <span>FY26</span><span>Last update: 14:08 UTC</span>
          <span style={{ color: mint }}>Open by default</span>
        </div>
      </div>
      <div style={s.grid}>
        <div style={s.left}>
          <div style={s.sec}>Program · Budgeted / Obligated YTD / Utilization</div>
          <div style={s.progRow}>
            <span style={{ fontWeight: 600, color: muted, fontSize: 11,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              fontFamily: '"JetBrains Mono", monospace' }}>Program</span>
            <span style={s.num}>Budget</span>
            <span style={s.num}>YTD</span>
            <span style={s.num}>Util.</span>
          </div>
          {programs.map(([n, b, y, u, c]) => (
            <div key={n} style={s.progRow}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 500 }}>{n}</div>
                <div style={{ ...s.progBar, marginTop: 8 }}>
                  <div style={u > 85 ? s.progFill(u) : s.progFillW(u)}></div>
                </div>
              </div>
              <span style={s.num}>${b}M</span>
              <span style={s.num}>${y}M</span>
              <span style={{ ...s.num, color: u > 85 ? mint : amber }}>{u}%</span>
            </div>
          ))}
        </div>
        <div style={s.right}>
          <div>
            <div style={s.big}>$543M</div>
            <div style={s.bigSub}>Obligated YTD · 87% of FY26</div>
          </div>
          <div>
            <div style={s.sec}>Top contracts</div>
            {[
              ['Axon Enterprise · body-cam',  '$38.0M', false],
              ['Motorola · radio refresh',    '$22.4M', false],
              ['Hertz Fleet · vehicles',      '$18.1M', false],
              ['Halcor Defense · armor',      '$ 9.6M', true ],
              ['Civic Cloud Inc · CAD/RMS',   '$ 8.2M', false],
            ].map(([n, v, f]) => (
              <div key={n} style={s.contractRow}>
                <span>{n}</span>
                <span style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  {f ? <span style={s.flagged}>● IG FLAG</span> : null}
                  <span style={{ fontFamily: '"JetBrains Mono", monospace', fontWeight: 600 }}>{v}</span>
                </span>
              </div>
            ))}
          </div>
          <div>
            <div style={s.sec}>What residents are asking</div>
            <div style={{ fontSize: 13.5, lineHeight: 1.6, color: muted, marginTop: 10 }}>
              <div style={{ color: text, marginBottom: 6 }}>“How much went to overtime?”</div>
              $48.2M · 14% above budgeted overtime line.
            </div>
            <div style={{ fontSize: 13.5, lineHeight: 1.6, color: muted, marginTop: 12 }}>
              <div style={{ color: text, marginBottom: 6 }}>“Has body-cam reduced complaints?”</div>
              Civilian complaints −18% YoY in piloted precincts.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// (d) Public hearing / agenda — meeting page
function CivicHearing() {
  // Deep olive forest — cream type, terracotta accent, replaces cream paper bg.
  const ink = '#ebe3d0';       // foreground (was dark)
  const paper = '#1d2418';     // bg (was cream)
  const accent = '#e8784a';    // warm terracotta
  const muted = '#a89e85';
  const s = {
    root: { width: DW, height: DH, background: paper, color: ink,
      fontFamily: '"Inter Tight", system-ui, sans-serif',
      display: 'flex', flexDirection: 'column' },
    crumb: { padding: '14px 40px', borderBottom: '1px solid ' + ink,
      fontFamily: '"IBM Plex Mono", monospace', fontSize: 11,
      letterSpacing: '0.12em', textTransform: 'uppercase', color: muted },
    crumbA: { color: accent },
    head: { padding: '32px 40px 24px', borderBottom: '1px solid ' + ink,
      display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 40 },
    eyebrow: { fontFamily: '"IBM Plex Mono", monospace', fontSize: 11,
      letterSpacing: '0.16em', textTransform: 'uppercase', color: accent },
    h1: { fontFamily: '"Playfair Display", Georgia, serif',
      fontSize: 56, lineHeight: 1.0, letterSpacing: '-0.02em',
      margin: '12px 0', fontWeight: 500 },
    h1It: { fontStyle: 'italic' },
    meta: { display: 'grid', gridTemplateColumns: 'auto 1fr',
      gap: '6px 16px', fontSize: 14, alignItems: 'baseline' },
    metaK: { fontFamily: '"IBM Plex Mono", monospace', fontSize: 11,
      letterSpacing: '0.12em', textTransform: 'uppercase', color: muted },
    actions: { display: 'flex', flexDirection: 'column', gap: 10,
      borderLeft: '1px solid ' + ink, paddingLeft: 36 },
    btn: { background: ink, color: paper, padding: '12px 16px', fontWeight: 600,
      fontSize: 14, display: 'flex', justifyContent: 'space-between' },
    btnSec: { background: 'transparent', border: '1.5px solid ' + ink,
      color: ink, padding: '12px 16px', fontWeight: 600,
      fontSize: 14, display: 'flex', justifyContent: 'space-between' },
    body: { flex: 1, display: 'grid', gridTemplateColumns: '1fr 360px',
      borderBottom: '1px solid ' + ink },
    main: { padding: '24px 40px', borderRight: '1px solid ' + ink,
      display: 'flex', flexDirection: 'column', gap: 20 },
    sec: { fontFamily: '"IBM Plex Mono", monospace', fontSize: 11,
      letterSpacing: '0.16em', textTransform: 'uppercase', color: muted,
      borderBottom: '1px solid ' + ink, paddingBottom: 8 },
    item: { display: 'grid', gridTemplateColumns: '70px 1fr 100px',
      gap: 16, paddingBlock: 14, borderBottom: '1px dashed ' + ink,
      alignItems: 'baseline' },
    itemN: { fontFamily: '"Playfair Display", Georgia, serif',
      fontSize: 26, lineHeight: 1, color: accent, fontWeight: 600 },
    itemT: { fontFamily: '"Playfair Display", serif', fontSize: 22,
      lineHeight: 1.2, letterSpacing: '-0.01em', fontWeight: 500 },
    itemD: { fontSize: 13.5, lineHeight: 1.5, color: '#cbc2ad', marginTop: 4 },
    itemDur: { fontFamily: '"IBM Plex Mono", monospace', fontSize: 11,
      letterSpacing: '0.08em', textTransform: 'uppercase', color: muted,
      textAlign: 'right' },
    side: { padding: '24px 28px', display: 'flex', flexDirection: 'column',
      gap: 20, background: 'rgba(255,255,255,0.04)' },
    speakerRow: { display: 'flex', justifyContent: 'space-between',
      paddingBlock: 8, borderBottom: '1px dashed ' + ink, fontSize: 13.5 },
    posFor: { color: '#7dd99c' },
    posAg: { color: accent },
  };
  return (
    <div style={s.root}>
      <div style={s.crumb}>
        <span style={s.crumbA}>calder county</span> / council /
        <span style={s.crumbA}> meetings</span> / 03 jun 2026
      </div>
      <div style={s.head}>
        <div>
          <div style={s.eyebrow}>Council meeting · open to the public</div>
          <h1 style={s.h1}>Budget hearing on <span style={s.h1It}>FY 2026</span>, in full.</h1>
          <div style={s.meta}>
            <span style={s.metaK}>When</span><span>Wed, Jun 03 2026 · 18:30 — 21:00</span>
            <span style={s.metaK}>Where</span><span>Council Chamber, 1 Civic Plaza</span>
            <span style={s.metaK}>Stream</span><span>youtube.com/calder-council · live captions EN/ES</span>
            <span style={s.metaK}>Chair</span><span>Council member Anya Iqbal (Ward 6)</span>
            <span style={s.metaK}>Agenda items</span><span>11 · 2.5 hours scheduled</span>
          </div>
        </div>
        <div style={s.actions}>
          <span style={s.btn}><span>Add to my calendar</span><span>＋</span></span>
          <span style={s.btnSec}><span>Sign up to speak (1 of 14 slots)</span><span>↗</span></span>
          <span style={s.btnSec}><span>Submit written testimony</span><span>↗</span></span>
          <span style={s.btnSec}><span>Watch live · captions on</span><span>▸</span></span>
        </div>
      </div>
      <div style={s.body}>
        <div style={s.main}>
          <div style={s.sec}>Agenda</div>
          {[
            ['I',   'Call to order &amp; land acknowledgement', 'Roll call of Council members.', '5 min'],
            ['II',  'Public testimony', 'Up to 14 speakers · 3 min each. Sign up by 18:00.', '45 min'],
            ['III', 'FY26 General Fund — first reading', 'Director of Finance presents the $2.41B budget; 12 amendments on file.', '40 min'],
            ['IV',  'Capital plan — Bridge 14 reconstruction', 'IG flagged contract; staff to respond on bid variance.', '20 min'],
            ['V',   'Resolution 88-2026 · zoning at 14th &amp; Bauer', 'Vote scheduled. See attached briefing.', '15 min'],
            ['VI',  'Adjourn', '', '5 min'],
          ].map(([n, t, d, dur]) => (
            <div key={n} style={s.item}>
              <span style={s.itemN}>{n}</span>
              <span>
                <div style={s.itemT} dangerouslySetInnerHTML={{ __html: t }}></div>
                <div style={s.itemD} dangerouslySetInnerHTML={{ __html: d }}></div>
              </span>
              <span style={s.itemDur}>{dur}</span>
            </div>
          ))}
        </div>
        <div style={s.side}>
          <div>
            <div style={s.sec}>Speakers signed up · 9 / 14</div>
            <div style={s.speakerRow}><span>Maya Khanna (resident, Ward 6)</span><span style={s.posFor}>FOR III</span></div>
            <div style={s.speakerRow}><span>V. Lev (small business owner)</span><span style={s.posAg}>AGAINST V</span></div>
            <div style={s.speakerRow}><span>Toma (Halden Tenant Union)</span><span style={s.posFor}>FOR III</span></div>
            <div style={s.speakerRow}><span>Aanya R. (Pratt Civic Lab)</span><span>NEUTRAL</span></div>
            <div style={s.speakerRow}><span>D. Okafor (Ops, on behalf)</span><span>STAFF</span></div>
          </div>
          <div>
            <div style={s.sec}>Background materials</div>
            <div style={{ fontSize: 13.5, lineHeight: 1.7, marginTop: 8 }}>
              FY26 budget book · 412 pp · PDF<br/>
              IG flag memo · Bridge 14 · 6 pp<br/>
              Zoning brief · Res 88-2026 · 14 pp<br/>
              Public comment to date · 1,422 entries
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 2 export — Records & Data
// ─────────────────────────────────────────────────────────────────────────────
function CivicDetailsSection() {
  return (
    <DCSection id="records-data" title="Civic — Records & Data, in Depth"
      subtitle="Once a resident lands, what does the rest of the system feel like? Four deeper screens: an open-data record, a service application, a budget drilldown, and a public hearing.">
      <DCArtboard id="dataset" label="01 · Dataset record" width={DW} height={DH}>
        <CivicDatasetDetail />
      </DCArtboard>
      <DCArtboard id="service-form" label="02 · Service application" width={DW} height={DH}>
        <CivicServiceForm />
      </DCArtboard>
      <DCArtboard id="budget-viz" label="03 · Budget drilldown (dark)" width={DW} height={DH}>
        <CivicBudgetViz />
      </DCArtboard>
      <DCArtboard id="hearing" label="04 · Public hearing agenda" width={DW} height={DH}>
        <CivicHearing />
      </DCArtboard>
    </DCSection>
  );
}

Object.assign(window, { CivicHeroes2, CivicDetailsSection });
