// Eight more Landing-category directions — four brutalist systems and four
// minimalist studies. Deliberately at opposite ends of the density spectrum.

const WB = 1280;
const HB = 800;

// ─────────────────────────────────────────────────────────────────────────────
// 25. RAW WEB CASUAL — the honest web: Times, default link colors, visible
//     structure, a sidebar of tips, zero styling budget.
// ─────────────────────────────────────────────────────────────────────────────
function HeroRawWeb() {
  const s = {
    root: { width: WB, height: HB, background: '#ffffff', color: '#000000',
      fontFamily: '"Times New Roman", Times, serif',
      display: 'flex', flexDirection: 'column', overflow: 'hidden' },
    topbar: { padding: '14px 40px 10px', borderBottom: '2px solid #000' },
    hBrand: { fontSize: 34, fontWeight: 700, margin: 0, letterSpacing: '-0.01em' },
    tagline: { fontSize: 15, marginTop: 4, fontStyle: 'italic', color: '#333' },
    navbar: { padding: '8px 40px', borderBottom: '1px solid #000',
      fontFamily: '"Times New Roman", serif', fontSize: 16,
      display: 'flex', gap: 22, alignItems: 'center' },
    link: { color: '#0000EE', textDecoration: 'underline' },
    visited: { color: '#551A8B', textDecoration: 'underline' },
    main: { flex: 1, display: 'flex', padding: '24px 40px', gap: 36,
      minHeight: 0 },
    colMain: { flex: 1, minWidth: 0 },
    h1: { fontSize: 66, lineHeight: 1.02, margin: '0 0 6px', fontWeight: 700,
      letterSpacing: '-0.02em' },
    h1Note: { fontSize: 18, color: '#444', marginBottom: 20 },
    p: { fontSize: 17, lineHeight: 1.5, maxWidth: 560, margin: '0 0 14px' },
    listHead: { fontSize: 19, fontWeight: 700, margin: '18px 0 6px' },
    ul: { fontSize: 16, lineHeight: 1.55, paddingLeft: 26, margin: 0,
      maxWidth: 560, listStyle: 'disc' },
    rule: { border: 0, borderTop: '1px solid #000', margin: '16px 0 12px',
      height: 0 },
    tableWrap: { border: '2px solid #000', display: 'inline-block',
      marginTop: 6 },
    table: { borderCollapse: 'collapse', fontSize: 15 },
    th: { border: '1px solid #000', padding: '6px 14px', textAlign: 'left',
      background: '#e8e8e8', fontWeight: 700 },
    td: { border: '1px solid #000', padding: '6px 14px' },
    sidebar: { width: 330, flexShrink: 0 },
    box: { border: '2px inset #999', background: '#f5f5f5', padding: '10px 14px',
      marginBottom: 18 },
    boxH: { fontSize: 16, fontWeight: 700, margin: '0 0 8px',
      textTransform: 'uppercase', letterSpacing: '0.04em' },
    boxList: { fontSize: 13.5, lineHeight: 1.5, margin: 0, paddingLeft: 18,
      fontFamily: '"Times New Roman", serif' },
    imgStub: { width: 300, height: 130, border: '2px inset #999',
      background: '#efefef', display: 'flex', alignItems: 'center',
      justifyContent: 'center', flexDirection: 'column', gap: 6,
      color: '#555', fontSize: 13 },
    brokenIcon: { width: 34, height: 28, border: '2px solid #7a7a7a',
      borderRadius: 3, position: 'relative', overflow: 'hidden' },
    mountain: { position: 'absolute', bottom: -6, left: -2, width: 0, height: 0,
      borderLeft: '11px solid transparent', borderRight: '11px solid transparent',
      borderBottom: '16px solid #7a7a7a' },
    sunDot: { position: 'absolute', top: 3, left: 4, width: 6, height: 6,
      borderRadius: '50%', background: '#7a7a7a' },
    footer: { borderTop: '1px solid #000', padding: '10px 40px',
      fontSize: 14, display: 'flex', justifyContent: 'space-between',
      fontFamily: '"Courier New", monospace' },
    countCell: { background: '#000', color: '#7CFC00', fontFamily:
      '"Courier New", monospace', padding: '2px 8px', letterSpacing: '0.25em',
      fontSize: 13 },
  };
  return (
    <div style={s.root}>
      <div style={s.topbar}>
        <h1 style={s.hBrand}>plainpages.org</h1>
        <div style={s.tagline}>The last honest website. Last updated: yesterday. Still fine.</div>
      </div>
      <div style={s.navbar}>
        <span style={s.link}>home</span>
        <span style={s.visited}>about</span>
        <span style={s.link}>projects</span>
        <span style={s.link}>weblog</span>
        <span style={s.visited}>guestbook</span>
        <span style={{ marginLeft: 'auto', fontStyle: 'italic', color: '#333' }}>you are here →</span>
      </div>
      <div style={s.main}>
        <div style={s.colMain}>
          <div style={s.h1}>THIS IS A WEBSITE.</div>
          <div style={s.h1Note}>(No framework. No build step. No mercy.)</div>
          <p style={s.p}>
            Everything you need to know about my small software company fits on
            one page that loads before you finish blinking. The page weighs
            fourteen kilobytes and I am proud of every single byte.
          </p>
          <p style={s.p}>
            We make one product. It costs money once. If it breaks, email me —
            my address is at the bottom like it is 1999.
          </p>
          <hr style={s.rule}></hr>
          <div style={s.listHead}>Site facts, measured honestly:</div>
          <ul style={s.ul}>
            <li>JavaScript shipped to production: <b>zero libraries</b></li>
            <li>Dark mode: no. Print stylesheet: <b>yes</b></li>
            <li>Cookies baked: only the edible kind</li>
            <li>The Lighthouse score is 100 because there is nothing to score</li>
          </ul>
          <div style={s.tableWrap}>
            <table style={s.table}>
              <tr><th style={s.th}>Item</th><th style={s.th}>Value</th></tr>
              <tr><td style={s.td}>Bundle size</td><td style={s.td}>14 KB total</td></tr>
              <tr><td style={s.td}>Dependencies</td><td style={s.td}>none. read that again.</td></tr>
              <tr><td style={s.td}>Uptime</td><td style={s.td}>same as the server</td></tr>
            </table>
          </div>
        </div>
        <div style={s.sidebar}>
          <div style={s.imgStub}>
            <div style={s.brokenIcon}><span style={s.mountain}></span><span style={s.sunDot}></span></div>
            <span>[photo-of-my-desk.jpg · 61 KB]</span>
          </div>
          <div style={s.box}>
            <div style={s.boxH}>Website Tips</div>
            <ul style={s.boxList}>
              <li>Ctrl+D bookmarks this page forever.</li>
              <li>Best viewed in anything.</li>
              <li>If a pop-up appears here, close the real site.</li>
              <li>Email beats contact forms. Always did.</li>
            </ul>
          </div>
          <div style={s.box}>
            <div style={s.boxH}>Now Serving</div>
            <div style={{ fontSize: 14, lineHeight: 1.55 }}>
              One product:<br/>
              <span style={s.link}>Papergrain Invoices</span><br/>
              Buy it once. Own it forever.<br/>
              Price: $49 flat. Upgrades free.
            </div>
          </div>
        </div>
      </div>
      <div style={s.footer}>
        <span>© 2026 plainpages.org · email: hi [at] plainpages.org</span>
        <span>visitors: <span style={s.countCell}>0000421</span></span>
        <span>handmade HTML · view-source encouraged</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 26. STICKER SLAP — neo-brutalism: fat borders, hard offset shadows,
//     saturated blocks, rotated stickers, Archivo Black shout.
// ─────────────────────────────────────────────────────────────────────────────
function HeroSticker() {
  const black = '#141414';
  const s = {
    root: { width: WB, height: HB, background: '#FFDE59', color: black,
      fontFamily: '"Space Grotesk", "Archivo", sans-serif',
      display: 'flex', flexDirection: 'column', position: 'relative',
      overflow: 'hidden' },
    nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '26px 44px', zIndex: 3 },
    brand: { fontFamily: '"Archivo Black", sans-serif', fontSize: 24,
      background: '#fff', border: `3px solid ${black}`, padding: '8px 14px',
      boxShadow: `5px 5px 0 ${black}`, transform: 'rotate(-2deg)',
      display: 'inline-block', letterSpacing: '0.02em' },
    links: { display: 'flex', gap: 24, fontWeight: 700, fontSize: 13,
      letterSpacing: '0.08em', textTransform: 'uppercase' },
    navCta: { background: black, color: '#FFDE59', fontWeight: 800,
      padding: '12px 20px', fontSize: 13, letterSpacing: '0.08em',
      textTransform: 'uppercase', border: `3px solid ${black}`,
      boxShadow: `5px 5px 0 rgba(20,20,20,0.35)`, cursor: 'pointer' },
    main: { flex: 1, display: 'grid', gridTemplateColumns: '1.35fr 1fr',
      padding: '18px 44px 30px', gap: 40, minHeight: 0, zIndex: 2 },
    eyebrow: { display: 'inline-block', background: '#FF90E8',
      border: `3px solid ${black}`, padding: '8px 16px', fontWeight: 800,
      fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase',
      transform: 'rotate(-1.5deg)', boxShadow: `4px 4px 0 ${black}`,
      marginBottom: 22 },
    h1: { fontFamily: '"Archivo Black", sans-serif', fontSize: 104,
      lineHeight: 0.92, margin: 0, letterSpacing: '-0.02em',
      textTransform: 'uppercase' },
    h1Shadow: { textShadow: `4px 4px 0 #fff` },
    sub: { fontSize: 17, lineHeight: 1.5, marginTop: 20, maxWidth: 470,
      fontWeight: 600 },
    ctas: { display: 'flex', gap: 18, marginTop: 28, alignItems: 'center' },
    btnA: { background: '#FF90E8', color: black, border: `3px solid ${black}`,
      padding: '17px 26px', fontWeight: 800, fontSize: 14,
      letterSpacing: '0.06em', textTransform: 'uppercase', cursor: 'pointer',
      boxShadow: `7px 7px 0 ${black}` },
    btnB: { background: '#fff', color: black, border: `3px solid ${black}`,
      padding: '17px 24px', fontWeight: 800, fontSize: 14,
      letterSpacing: '0.06em', textTransform: 'uppercase', cursor: 'pointer',
      boxShadow: `7px 7px 0 ${black}` },
    stickerCol: { position: 'relative', display: 'flex', flexDirection: 'column',
      gap: 22, paddingTop: 10 },
    taskCard: { background: '#fff', border: `3px solid ${black}`,
      boxShadow: `8px 8px 0 ${black}`, padding: '20px 22px',
      transform: 'rotate(1.6deg)' },
    taskRow: { display: 'flex', gap: 14, alignItems: 'flex-start', marginBottom: 14 },
    cbx: { width: 22, height: 22, border: `3px solid ${black}`, flexShrink: 0,
      marginTop: 2, background: '#90E8FF' },
    taskTxt: { fontSize: 15.5, fontWeight: 700, lineHeight: 1.3 },
    taskMeta: { fontSize: 11.5, fontWeight: 600, color: '#6b6357',
      letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: 2 },
    burst: { width: 132, height: 132, clipPath: 'polygon(50% 0%, 59% 12%, 72% 6%, 77% 20%, 91% 18%, 89% 32%, 100% 37%, 93% 50%, 100% 63%, 89% 68%, 91% 82%, 77% 80%, 72% 94%, 59% 88%, 50% 100%, 41% 88%, 28% 94%, 23% 80%, 9% 82%, 11% 68%, 0% 63%, 7% 50%, 0% 37%, 11% 32%, 9% 18%, 23% 20%, 28% 6%, 41% 12%)',
      background: '#141414', color: '#FFDE59', display: 'grid',
      placeItems: 'center', textAlign: 'center', fontWeight: 900,
      fontSize: 14, lineHeight: 1.05, fontFamily: '"Archivo Black", sans-serif',
      position: 'absolute', right: 18, top: -26, transform: 'rotate(10deg)',
      zIndex: 4, padding: 18 },
    priceChip: { alignSelf: 'flex-start', background: '#7C5CFF', color: '#fff',
      border: `3px solid ${black}`, borderRadius: 999, padding: '14px 22px',
      fontWeight: 800, fontSize: 15, transform: 'rotate(-2deg)',
      boxShadow: `5px 5px 0 ${black}` },
    ticker: { background: black, color: '#FFDE59', fontSize: 12,
      fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase',
      padding: '12px 0', whiteSpace: 'nowrap', overflow: 'hidden', zIndex: 5 },
    squiggle: { position: 'absolute', left: -60, bottom: 60, opacity: 0.9,
      zIndex: 1 },
  };
  return (
    <div style={s.root}>
      <div style={s.nav}>
        <div style={s.brand}>THWACK!</div>
        <div style={s.links}>
          <span>Board</span><span>Sprints</span><span>Retro</span><span>Pricing</span>
        </div>
        <button style={s.navCta}>Grab a seat</button>
      </div>
      <div style={s.main}>
        <div>
          <div style={s.eyebrow}>★ Task management that hits back ★</div>
          <h1 style={s.h1}>
            <span style={s.h1Shadow}>SHIPPING</span><br/>
            BEATS<br/>
            PLANNING<span style={{ WebkitTextStroke: `3px ${black}`, color: 'transparent' }}>.</span>
          </h1>
          <p style={s.sub}>
            Thwack is a task board with three columns and zero ceremony.
            Backlogs over nine items get archived automatically. Gantt charts
            are not invited.
          </p>
          <div style={s.ctas}>
            <button style={s.btnA}>Start free board →</button>
            <button style={s.btnB}>See a live demo</button>
          </div>
        </div>
        <div style={s.stickerCol}>
          <div style={s.burst}>NO AI<br/>NO SPAM<br/>★ EVER ★</div>
          <div style={s.taskCard}>
            <div style={s.taskRow}>
              <div style={{ ...s.cbx, background: '#FFDE59' }}>✕</div>
              <div><div style={s.taskTxt}>Kill the “synergy” banner</div>
                <div style={s.taskMeta}>done · tue · @mara</div></div>
            </div>
            <div style={s.taskRow}>
              <div style={s.cbx}></div>
              <div><div style={s.taskTxt}>Ship checkout v3 to prod</div>
                <div style={s.taskMeta}>doing · due fri · @theo</div></div>
            </div>
            <div style={{ ...s.taskRow, marginBottom: 0 }}>
              <div style={s.cbx}></div>
              <div><div style={s.taskTxt}>Say no to 4th status meeting</div>
                <div style={s.taskMeta}>blocked · forever</div></div>
            </div>
          </div>
          <div style={s.priceChip}>$8 / seat — flat. The end.</div>
        </div>
      </div>
      <svg width="150" height="46" viewBox="0 0 150 46" style={s.squiggle}
        fill="none" stroke="#141414" strokeWidth="5" strokeLinecap="round">
        <path d="M4 34 C 22 6, 38 6, 52 28 S 84 46, 96 22 S 128 4, 146 26"/>
      </svg>
      <div style={s.ticker}>
        &nbsp;3 COLUMNS MAX ✱ ARCHIVE ON FRIDAY ✱ NO ESTIMATION POKER ✱ STICKERS EARNED, NOT GIVEN ✱
        3 COLUMNS MAX ✱ ARCHIVE ON FRIDAY ✱ NO ESTIMATION POKER ✱ STICKERS EARNED, NOT GIVEN ✱
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 27. DATA MANIFESTO — datasheet brutalism: mono type, ruled cells, index
//     numbers, barcode, one red accent. A spec sheet pretending to be a hero.
// ─────────────────────────────────────────────────────────────────────────────
function HeroManifesto() {
  const ink = '#111111';
  const red = '#E30613';
  const s = {
    root: { width: WB, height: HB, background: '#FBFBF8', color: ink,
      fontFamily: '"IBM Plex Mono", "Space Mono", monospace',
      display: 'flex', flexDirection: 'column', overflow: 'hidden' },
    topCells: { display: 'grid', gridTemplateColumns: '1fr auto 1fr',
      borderBottom: `2px solid ${ink}` },
    cell: { padding: '12px 20px', fontSize: 12, letterSpacing: '0.08em',
      textTransform: 'uppercase', borderRight: `2px solid ${ink}` },
    cellR: { textAlign: 'right', borderRight: 'none', color: red,
      fontWeight: 700 },
    titleBar: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
      padding: '18px 20px 6px' },
    docNo: { fontSize: 11, letterSpacing: '0.14em', color: '#777' },
    main: { flex: 1, display: 'grid', gridTemplateColumns: '1.15fr 1fr',
      minHeight: 0 },
    leftCol: { padding: '10px 20px 0 20px', borderRight: `2px solid ${ink}`,
      display: 'flex', flexDirection: 'column' },
    idx: { color: red, fontWeight: 700 },
    h1: { fontSize: 58, lineHeight: 1.04, margin: '14px 0 18px', fontWeight: 600,
      letterSpacing: '-0.03em', textTransform: 'uppercase' },
    lede: { fontSize: 14.5, lineHeight: 1.65, maxWidth: 520, whiteSpace: 'pre-wrap',
      margin: 0 },
    btnRow: { display: 'flex', gap: 14, marginTop: 'auto', paddingBottom: 20 },
    btnSolid: { background: ink, color: '#FBFBF8', border: `2px solid ${ink}`,
      padding: '15px 22px', fontFamily: 'inherit', fontSize: 12.5,
      letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer' },
    btnGhost: { background: 'transparent', color: ink, border: `2px solid ${ink}`,
      padding: '15px 22px', fontFamily: 'inherit', fontSize: 12.5,
      letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer' },
    rightCol: { display: 'flex', flexDirection: 'column' },
    specTable: { flex: 1, display: 'flex', flexDirection: 'column',
      borderBottom: `2px solid ${ink}` },
    specRow: { display: 'grid', gridTemplateColumns: '64px 1fr auto 120px',
      borderBottom: `1px solid ${ink}`, fontSize: 12.5, flexGrow: 1,
      alignItems: 'center' },
    cIdx: { padding: '0 14px', color: red, fontWeight: 700 },
    cName: { fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' },
    cLead: { borderBottom: `2px dotted #999`, marginRight: 12 },
    cVal: { padding: '0 14px 0 0', textAlign: 'right', fontWeight: 700 },
    measureBox: { padding: '16px 20px 14px', borderBottom: `2px solid ${ink}` },
    measureLabel: { fontSize: 10.5, letterSpacing: '0.16em',
      textTransform: 'uppercase', color: '#777', marginBottom: 10 },
    blockDiagram: { display: 'flex', alignItems: 'stretch', gap: 0,
      borderLeft: `2px solid ${ink}` },
    bd: { border: `2px solid ${ink}`, borderLeft: 'none', padding: '12px 0',
      textAlign: 'center', fontSize: 11, letterSpacing: '0.08em' },
    footBand: { display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', padding: '12px 20px' },
    fineprint: { fontSize: 10, letterSpacing: '0.12em', color: '#777',
      textTransform: 'uppercase' },
    barcode: { width: 190, height: 34,
      background: 'repeating-linear-gradient(90deg, #111 0 2px, transparent 2px 4px, #111 4px 7px, transparent 7px 8px, #111 8px 9px, transparent 9px 13px)',
      border: `2px solid ${ink}` },
    diagStripe: { height: 10,
      background: `repeating-linear-gradient(-45deg, ${red} 0 10px, transparent 10px 20px)`,
      margin: '0 20px' },
  };
  return (
    <div style={s.root}>
      <div style={s.topCells}>
        <div style={s.cell}>SPECDATA SYSTEMS — MODEL OBD/4000</div>
        <div style={s.cell}>"THE OBSERVABILITY UNIT"</div>
        <div style={{...s.cell, ...s.cellR}}>DOC № SM-2026-C</div>
      </div>
      <div style={s.titleBar}>
        <div style={s.docNo}>TECHNICAL DATASHEET · REV 12 · CLASSIFICATION: HONEST</div>
        <div style={{ ...s.docNo, color: red }}>◉ LIVE TELEMETRY ATTACHED</div>
      </div>
      <div style={s.diagStripe}></div>
      <div style={s.main}>
        <div style={s.leftCol}>
          <div style={{ marginTop: 16 }}>
            <span style={s.idx}>01 / THESIS —</span>
          </div>
          <h1 style={s.h1}>Measure everything.<br/>Trust nothing.</h1>
          <p style={s.lede}>{`OBD/4000 instruments your stack at the kernel edge
and streams every span, metric, and log line into ONE append-only ledger.
No sampling agents. No 90-day retention walls. Data is data.`}</p>
          <div style={{ ...s.measureBox, border: `2px solid ${ink}`,
            margin: '18px 0 0', padding: 0 }}>
            <div style={{ ...s.measureLabel, padding: '8px 10px 0' }}>FIG. 3A — REQUEST PATH, MEASURED AT EACH JOINT</div>
            <div style={{ padding: 10 }}>
              <div style={s.blockDiagram}>
                <div style={{ ...s.bd, width: '22%' }}>EDGE<br/><span style={{ color: red }}>p95 3ms</span></div>
                <div style={{ ...s.bd, width: '34%' }}>SERVICE MESH<br/><span style={{ color: red }}>p95 11ms</span></div>
                <div style={{ ...s.bd, width: '28%' }}>QUEUE<br/><span style={{ color: red }}>p95 6ms</span></div>
                <div style={{ ...s.bd, flex: 1 }}>STORE<br/><span style={{ color: red }}>p95 9ms</span></div>
              </div>
              <div style={{ ...s.fineprint, marginTop: 8, color: ink, letterSpacing: '0.08em' }}>
                |◀——————————————— 29 ms END-TO-END, GUARANTEED SLA WINDOW ———————————————▶|
              </div>
            </div>
          </div>
          <div style={s.btnRow}>
            <button style={s.btnSolid}>Order evaluation unit →</button>
            <button style={s.btnGhost}>Read full datasheet</button>
          </div>
        </div>
        <div style={s.rightCol}>
          <div style={{ padding: '16px 20px 10px', display: 'flex',
            justifyContent: 'space-between' }}>
            <span style={s.docNo}>SPECIFICATION TABLE (ABRIDGED)</span>
            <span style={{ ...s.docNo, color: red }}>SHEET 1 OF 1</span>
          </div>
          <div style={s.specTable}>
            {[
              ['02', 'INGEST THROUGHPUT', '2.1M', 'events/s'],
              ['03', 'RETENTION POLICY', '∞', 'append-only'],
              ['04', 'SAMPLING RATIO', '100%', 'no tails dropped'],
              ['05', 'QUERY LATENCY', '<180ms', 'p95, hot path'],
              ['06', 'EXPORT FORMATS', 'OTLP·CSV', 'locked schema'],
              ['07', 'INSTALL TIME', '4 MIN', 'one binary'],
            ].map(([n, k, v, u]) => (
              <div style={s.specRow} key={n}>
                <span style={s.cIdx}>{n}</span>
                <span style={s.cName}>{k}</span>
                <span style={s.cLead}></span>
                <span style={s.cVal}>{v}<span style={{ color: '#888', fontWeight: 400 }}> {u}</span></span>
              </div>
            ))}
          </div>
          <div style={{ padding: '14px 20px', display: 'flex', gap: 18,
            alignItems: 'center', justifyContent: 'space-between',
            borderBottom: `2px solid ${ink}` }}>
            <span style={s.fineprint}>SERIAL: OD-4000-002-A1 · MADE IN THE OPEN</span>
            <div style={s.barcode}></div>
          </div>
          <div style={{ padding: '12px 20px', fontSize: 11, lineHeight: 1.7,
            color: '#555' }}>
            WARNING: UNIT TELLS THE TRUTH ABOUT YOUR LATENCY. SIDE EFFECTS MAY
            INCLUDE INCIDENT REVIEW REFORM.
          </div>
        </div>
      </div>
      <div style={{ ...s.topCells, borderTop: `2px solid ${ink}`, borderBottom: 'none' }}>
        <div style={s.cell}>☎ SALES DIRECT: +1 (555) 014-4000</div>
        <div style={s.cell}>FAX ACCEPTED. NO PORTALS.</div>
        <div style={{...s.cell, ...s.cellR}}>speldata.systems</div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 28. CONCRETE POSTER — architecture-studio poster: Anton stack, concrete
//     gray, registration crosses, slab composition, project index strip.
// ─────────────────────────────────────────────────────────────────────────────
function HeroConcrete() {
  const s = {
    root: { width: WB, height: HB, background: '#D7D5CF', color: '#161616',
      fontFamily: '"Archivo", sans-serif', display: 'flex',
      flexDirection: 'column', position: 'relative', overflow: 'hidden' },
    cross: (x, y) => ({ position: 'absolute', left: x, top: y, width: 26,
      height: 26, pointerEvents: 'none', zIndex: 6 }),
    crossV: { position: 'absolute', left: '50%', top: 0, width: 2, height: '100%',
      background: '#161616', transform: 'translateX(-50%)' },
    crossH: { position: 'absolute', top: '50%', left: 0, height: 2,
      width: '100%', background: '#161616', transform: 'translateY(-50%)' },
    nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '26px 56px 0', zIndex: 4 },
    brand: { fontFamily: '"Anton", sans-serif', fontSize: 21,
      letterSpacing: '0.28em', textTransform: 'uppercase' },
    links: { fontFamily: '"IBM Plex Mono", monospace', fontSize: 11.5,
      letterSpacing: '0.2em', textTransform: 'uppercase', gap: 26,
      display: 'flex' },
    main: { flex: 1, display: 'flex', padding: '0 56px', gap: 48,
      alignItems: 'center', minHeight: 0, zIndex: 3 },
    kicker: { fontFamily: '"IBM Plex Mono", monospace', fontSize: 11.5,
      letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 18 },
    h1: { fontFamily: '"Anton", sans-serif', fontSize: 148, lineHeight: 0.85,
      margin: 0, textTransform: 'uppercase', letterSpacing: '-0.01em',
      fontWeight: 400 },
    hollow: { color: 'transparent', WebkitTextStroke: '3px #161616' },
    accent: { color: '#E8590C' },
    statement: { fontSize: 15, lineHeight: 1.6, maxWidth: 420, marginTop: 22,
      fontWeight: 500 },
    slabs: { position: 'relative', width: 430, height: 480, flexShrink: 0 },
    slab: (w, h, x, y, bg, z, rot) => ({ position: 'absolute', width: w,
      height: h, left: x, top: y, background: bg, zIndex: z,
      transform: rot || 'none',
      boxShadow: '0 24px 50px rgba(22,22,22,0.25)' }),
    planLines: { position: 'absolute', inset: 0, backgroundImage:
      'linear-gradient(#16161626 1px, transparent 1px), linear-gradient(90deg, #16161626 1px, transparent 1px)',
      backgroundSize: '44px 44px', zIndex: 5 },
    orangeBlock: { width: 74, height: 74, background: '#E8590C',
      position: 'absolute', left: 320, top: 300, zIndex: 7 },
    footerStrip: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
      borderTop: '3px solid #161616', zIndex: 4,
      padding: '0 56px 0 44px', background: '#D7D5CF' },
    proj: { padding: '16px 24px 18px', borderLeft: '1px solid #16161655' },
    projIdx: { fontFamily: '"IBM Plex Mono", monospace', fontSize: 10.5,
      letterSpacing: '0.2em', color: '#E8590C' },
    projName: { fontFamily: '"Anton", sans-serif', fontSize: 17,
      textTransform: 'uppercase', letterSpacing: '0.03em', marginTop: 4 },
    projYear: { fontFamily: '"IBM Plex Mono", monospace', fontSize: 10.5,
      color: '#555', marginTop: 3 },
  };
  const projects = [
    ['K-01', 'Silobank Hall', 'ROTTERDAM · 2025'],
    ['K-02', 'Raw House 9', 'OSLO · 2024'],
    ['K-03', 'The Weight Library', 'LISBON · 2023'],
    ['K-04', 'Cold Church Annex', 'TALLINN · 2022'],
  ];
  return (
    <div style={s.root}>
      {[['24px','24px'],['calc(100% - 50px)','24px'],['24px','calc(100% - 50px)'],['calc(100% - 50px)','calc(100% - 50px)']].map((pos,i)=>(
        <div key={i} style={{ ...s.cross(pos[0], pos[1]) }}>
          <div style={{ position:'absolute', top:'50%', width:'100%', height:2, background:'#161616', transform:'translateY(-50%)' }}></div>
          <div style={{ position:'absolute', left:'50%', height:'100%', width:2, background:'#161616', transform:'translateX(-50%)' }}></div>
        </div>
      ))}
      <div style={s.planLines}></div>
      <div style={s.nav}>
        <div style={s.brand}>Atelier Brut</div>
        <div style={s.links}>
          <span>Works</span><span>Method</span><span>Studio</span><span>Contact ↗</span>
        </div>
      </div>
      <div style={s.main}>
        <div>
          <div style={s.kicker}>ARCHITECTURE OFFICE — ROTTERDAM / OSLO / LISBON</div>
          <h1 style={s.h1}>
            STRUCTURE<br/>
            IS THE<br/>
            <span style={s.hollow}>ORNA—</span><br/>
            MENT<span style={s.accent}>.</span>
          </h1>
          <p style={s.statement}>
            We design heavy buildings for light budgets. Concrete poured in
            daylight, details drawn in pencil first, nothing decorated later.
            Forty-one built works across eleven countries.
          </p>
        </div>
        <div style={s.slabs}>
          <div style={s.slab(260, 380, 40, 40, '#B9B7AF', 1)}></div>
          <div style={s.slab(210, 300, 120, 110, '#A5A39B', 2)}></div>
          <div style={s.slab(170, 230, 210, 180, '#8f8d86', 3)}></div>
          <div style={s.slab(120, 160, 280, 250, '#3a3936', 4)}></div>
          <div style={s.orangeBlock}></div>
        </div>
      </div>
      <div style={s.footerStrip}>
        {projects.map(([idx, name, meta]) => (
          <div key={idx} style={s.proj}>
            <div style={s.projIdx}>{idx}</div>
            <div style={s.projName}>{name}</div>
            <div style={s.projYear}>{meta}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 29. OBJECT WHITE — hardware minimalism: pure white, hairlines, an object
//     rendered in CSS rings, featherweight type. Nothing else.
// ─────────────────────────────────────────────────────────────────────────────
function HeroObject() {
  const gray = '#86868b';
  const s = {
    root: { width: WB, height: HB, background: '#ffffff', color: '#1d1d1f',
      fontFamily: '"Inter Tight", "Helvetica Neue", sans-serif',
      display: 'flex', flexDirection: 'column', overflow: 'hidden' },
    nav: { display: 'grid', gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center', padding: '22px 48px' },
    brand: { fontSize: 17, fontWeight: 600, letterSpacing: '-0.01em' },
    navLinks: { display: 'flex', gap: 30, fontSize: 12.5, color: gray,
      fontWeight: 500 },
    buyLink: { justifySelf: 'end', fontSize: 12.5, color: '#fff',
      background: '#0071e3', borderRadius: 999, padding: '6px 14px',
      fontWeight: 600 },
    hero: { flex: 1, display: 'flex', flexDirection: 'column',
      alignItems: 'center', textAlign: 'center', paddingTop: 34,
      minHeight: 0 },
    eyebrow: { fontSize: 13, fontWeight: 600, letterSpacing: '0.14em',
      color: gray, textTransform: 'uppercase' },
    h1: { fontSize: 84, fontWeight: 250, letterSpacing: '-0.045em',
      lineHeight: 1.02, margin: '18px 0 14px', color: '#1d1d1f' },
    h1Bold: { fontWeight: 500 },
    sub: { fontSize: 16.5, lineHeight: 1.55, maxWidth: 470, color: gray,
      margin: 0 },
    ctas: { display: 'flex', gap: 28, alignItems: 'center', marginTop: 22,
      fontSize: 16 },
    ctaPrimary: { background: '#0071e3', color: '#fff', borderRadius: 999,
      padding: '12px 24px', fontSize: 14.5, fontWeight: 600 },
    ctaLearn: { color: '#0071e3' },
    arrow: { fontSize: 13 },
    speaker: { marginTop: 34, position: 'relative', width: 240, height: 240 },
    ring: (size, bg, shadow) => ({ position: 'absolute',
      left: (240 - size) / 2, top: (240 - size) / 2, width: size, height: size,
      borderRadius: '50%', background: bg, boxShadow: shadow || 'none' }),
    specs: { display: 'flex', gap: 14, alignItems: 'center', padding: '0 48px 26px',
      fontSize: 12.5, color: gray, letterSpacing: '0.02em' },
    pipe: { color: '#d2d2d7' },
  };
  return (
    <div style={s.root}>
      <div style={s.nav}>
        <div style={s.brand}>ondo®</div>
        <div style={s.navLinks}>
          <span>Overview</span><span>Tech Specs</span><span>Compare</span>
        </div>
        <div style={s.buyLink}>Buy</div>
      </div>
      <div style={s.hero}>
        <div style={s.eyebrow}>Ondo One — Wireless Speaker</div>
        <h1 style={s.h1}>Sound,<br/><span style={s.h1Bold}>centered.</span></h1>
        <p style={s.sub}>
          One driver aimed at one listener, then everybody else notices anyway.
          Room-filling from something the size of a cereal bowl.
        </p>
        <div style={s.ctas}>
          <span style={s.ctaPrimary}>Buy — $229</span>
          <span style={s.ctaLearn}>Learn more <span style={s.arrow}>›</span></span>
        </div>
        <div style={s.speaker}>
          <div style={s.ring(240, 'linear-gradient(180deg,#fafafa,#eeeef0)',
            'inset 0 1px 2px rgba(0,0,0,0.06), 0 26px 60px rgba(0,0,0,0.10)')}></div>
          <div style={s.ring(196, 'radial-gradient(circle at 32% 28%, #f6f6f7, #e6e6e9)')}></div>
          <div style={s.ring(140, 'radial-gradient(circle at 35% 30%, #2c2c2e, #101012 70%)',
            'inset 0 4px 14px rgba(255,255,255,0.10), 0 10px 26px rgba(0,0,0,0.35)')}></div>
          <div style={s.ring(58, '#1b1b1d')}></div>
          <div style={{ ...s.ring(30, 'radial-gradient(circle at 40% 35%, #3a3a3c, #17171a)'),
            left: 105, top: 105 }}></div>
          <div style={{ ...s.ring(10, 'rgba(255,255,255,0.85)'), left: 118, top: 112 }}></div>
        </div>
      </div>
      <div style={s.specs}>
        <span>Battery 30 hrs</span><span style={s.pipe}>|</span>
        <span>Wi-Fi 6 + BT 5.3</span><span style={s.pipe}>|</span>
        <span>Room-aware EQ</span><span style={s.pipe}>|</span>
        <span>Aluminium · 1.1 kg</span><span style={s.pipe}>|</span>
        <span>Recycled since 2019</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 30. MUSEUM QUIET — off-white archive: Newsreader serif, asymmetric plate +
//     caption, dotted-leader print index. Gallery restraint.
// ─────────────────────────────────────────────────────────────────────────────
function HeroGallery() {
  const s = {
    root: { width: WB, height: HB, background: '#FAF8F3', color: '#221F1A',
      fontFamily: '"Newsreader", Georgia, serif', display: 'flex',
      flexDirection: 'column', overflow: 'hidden' },
    nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '30px 64px 0', fontSize: 12, letterSpacing: '0.24em',
      textTransform: 'uppercase' },
    brand: { fontWeight: 600 },
    navLinks: { display: 'flex', gap: 30, opacity: 0.75 },
    main: { flex: 1, display: 'grid', gridTemplateColumns: '360px 1fr',
      gap: 76, padding: '44px 64px 0', minHeight: 0 },
    plate: { display: 'flex', flexDirection: 'column', gap: 14,
      paddingTop: 6 },
    artwork: { width: 340, height: 460,
      background: 'linear-gradient(200deg, #D8CDB8 0%, #B4A78D 42%, #6E6553 100%)',
      boxShadow: '0 18px 44px rgba(60,50,30,0.22)', position: 'relative',
      overflow: 'hidden' },
    horizon: { position: 'absolute', left: 0, right: 0, bottom: '34%',
      height: 3, background: '#FAF8F3', opacity: 0.65 },
    sun: { position: 'absolute', right: 44, top: 54, width: 54, height: 54,
      borderRadius: '50%', background: '#FAF8F3', opacity: 0.8 },
    figure: { position: 'absolute', left: '26%', bottom: '30%',
      width: 10, height: 74, background: '#211D16' },
    caption: { fontSize: 13.5, fontStyle: 'italic', opacity: 0.75,
      lineHeight: 1.5 },
    right: { display: 'flex', flexDirection: 'column', minWidth: 0,
      paddingBottom: 8 },
    kicker: { fontSize: 11.5, letterSpacing: '0.3em', textTransform: 'uppercase',
      opacity: 0.6, marginBottom: 22 },
    h1: { fontSize: 66, lineHeight: 1.06, margin: '0 0 22px', fontWeight: 400,
      letterSpacing: '-0.01em' },
    ital: { fontStyle: 'italic', fontWeight: 300 },
    body: { fontSize: 16.5, lineHeight: 1.62, maxWidth: 520, opacity: 0.86,
      margin: 0 },
    indexTitle: { fontSize: 11.5, letterSpacing: '0.26em', textTransform: 'uppercase',
      marginTop: 'auto', marginBottom: 10, opacity: 0.6,
      display: 'flex', justifyContent: 'space-between' },
    row: { display: 'flex', alignItems: 'baseline', gap: 12,
      paddingTop: 11, paddingBottom: 11, borderTop: '1px solid #DED8CB',
      fontSize: 15.5 },
    lead: { flex: 1, borderBottom: '1px dotted #B9B29F', transform: 'translateY(-4px)' },
    num: { fontVariantNumeric: 'tabular-nums', opacity: 0.75 },
    foot: { display: 'flex', justifyContent: 'space-between', padding: '20px 64px',
      fontSize: 11.5, letterSpacing: '0.18em', textTransform: 'uppercase',
      opacity: 0.55 },
  };
  return (
    <div style={s.root}>
      <div style={s.nav}>
        <div style={s.brand}>Kammer Archive</div>
        <div style={s.navLinks}>
          <span>Collection</span><span>Exhibitions</span><span>Visit</span>
        </div>
        <div>Est. 1961</div>
      </div>
      <div style={s.main}>
        <div style={s.plate}>
          <div style={s.artwork}>
            <div style={s.sun}></div>
            <div style={s.horizon}></div>
            <div style={s.figure}></div>
          </div>
          <div style={s.caption}>
            Plate VII — <em>Window, Vesterbro, Evening</em>. Silver gelatin
            print, Edel Hansen, 1958. Gift of the artist’s daughter.
          </div>
        </div>
        <div style={s.right}>
          <div style={s.kicker}>Spring Acquisition — Now Open</div>
          <h1 style={s.h1}>
            An archive of <span style={s.ital}>ordinary</span> light<span style={{ color: '#8a6d3b' }}>.</span>
          </h1>
          <p style={s.body}>
            Four thousand vernacular photographs of windows, porches, and half-
            empty trains. No wars, no weddings. Come sit with the quiet ones —
            reading room open Thursdays through Sundays, always free.
          </p>
          <div style={s.indexTitle}><span>Current Exhibition Index</span><span>31 plates</span></div>
          <div style={s.row}><span>I.</span><span>Window, Vesterbro</span><span style={s.lead}></span><span style={s.num}>1958 · Plate VII</span></div>
          <div style={s.row}><span>II.</span><span>Porch Chairs, August</span><span style={s.lead}></span><span style={s.num}>1961 · Plate XII</span></div>
          <div style={s.row}><span>III.</span><span>Night Train to Randers</span><span style={s.lead}></span><span style={s.num}>1963 · Plate XIX</span></div>
          <div style={s.row}><span>IV.</span><span>Linen Line, Morning Fog</span><span style={s.lead}></span><span style={s.num}>1966 · Plate XXIV</span></div>
        </div>
      </div>
      <div style={s.foot}>
        <span>Vester Brouer 14 · København K</span>
        <span>Thu–Sun · 11–17 · Frie indgang</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 31. DARK QUIET — near-black studio minimalism: whisper-weight wordmark,
//     generous void, tiny caps annotations, ghost pills.
// ─────────────────────────────────────────────────────────────────────────────
function HeroDarkQuiet() {
  const s = {
    root: { width: WB, height: HB, background: '#101012', color: '#ECECEA',
      fontFamily: '"Inter Tight", sans-serif', display: 'flex',
      flexDirection: 'column', position: 'relative', overflow: 'hidden' },
    glow: { position: 'absolute', left: '50%', top: '46%', width: 900,
      height: 520, transform: 'translate(-50%,-50%)',
      background: 'radial-gradient(closest-side, rgba(255,255,255,0.075), transparent)',
      pointerEvents: 'none' },
    side: (side) => ({ position: 'absolute', top: 46,
      [side]: 46, writingMode: 'vertical-rl', fontSize: 10,
      letterSpacing: '0.32em', textTransform: 'uppercase',
      color: 'rgba(236,236,234,0.38)' }),
    nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '34px 64px', fontSize: 12.5, letterSpacing: '0.18em',
      textTransform: 'uppercase', zIndex: 2 },
    navLinks: { display: 'flex', gap: 34, color: 'rgba(236,236,234,0.65)' },
    hero: { flex: 1, display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', textAlign: 'center',
      minHeight: 0, zIndex: 2 },
    eyebrow: { fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase',
      color: 'rgba(236,236,234,0.5)', marginBottom: 30 },
    mark: { fontSize: 172, fontWeight: 200, letterSpacing: '-0.05em',
      lineHeight: 1, margin: 0 },
    markDot: { color: 'rgba(236,236,234,0.35)' },
    line: { width: 220, height: 1, background: 'rgba(236,236,234,0.22)',
      margin: '34px 0' },
    statement: { fontSize: 15, lineHeight: 1.75, maxWidth: 420,
      color: 'rgba(236,236,234,0.62)', fontWeight: 300 },
    ctas: { display: 'flex', gap: 20, marginTop: 38 },
    pillGhost: { background: 'transparent', border: '1px solid rgba(236,236,234,0.28)',
      borderRadius: 999, padding: '13px 30px', fontSize: 12,
      letterSpacing: '0.22em', textTransform: 'uppercase', color: '#ECECEA',
      cursor: 'pointer' },
    pillFill: { background: '#ECECEA', color: '#101012', borderRadius: 999,
      padding: '13px 30px', fontSize: 12, letterSpacing: '0.22em',
      textTransform: 'uppercase', cursor: 'pointer', border: '1px solid #ECECEA' },
    foot: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
      borderTop: '1px solid rgba(236,236,234,0.14)', zIndex: 2 },
    footCell: { padding: '22px 64px', fontSize: 11.5, letterSpacing: '0.26em',
      textTransform: 'uppercase', color: 'rgba(236,236,234,0.6)',
      display: 'flex', justifyContent: 'space-between' },
    tick: { color: '#8affc1', letterSpacing: 0 },
  };
  return (
    <div style={s.root}>
      <div style={s.glow}></div>
      <div style={s.side('left')}>Quiet® — Motion Studio</div>
      <div style={s.side('right')}>Copenhagen · 55.6761° N</div>
      <div style={s.nav}>
        <div>Menu</div>
        <div style={s.navLinks}>
          <span>Films</span><span>Identity</span><span>Type</span>
        </div>
        <div>Contact ↗</div>
      </div>
      <div style={s.hero}>
        <div style={s.eyebrow}>Motion Studio — Est. 2019</div>
        <h1 style={s.mark}>quiet<span style={s.markDot}>.</span></h1>
        <div style={s.line}></div>
        <p style={s.statement}>
          We animate fewer things than we are offered, slower than clients
          expect, until the frame finally breathes.
        </p>
        <div style={s.ctas}>
          <span style={s.pillFill}>Showreel ’26</span>
          <span style={s.pillGhost}>Selected work</span>
        </div>
      </div>
      <div style={s.foot}>
        <div style={s.footCell}><span>Showreel</span><span className="tick">↗</span></div>
        <div style={{ ...s.footCell, justifyContent: 'center' }}>
          <span>Booking Q3 — one slot</span>
        </div>
        <div style={s.footCell}><span className="tick">✳</span><span>hej@quiet.dk</span></div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 32. TYPE SPECIMEN — a foundry specimen sheet as landing: giant glyph pair,
//     measuring annotations, alphabet waterfall, license tariff strip.
// ─────────────────────────────────────────────────────────────────────────────
function HeroSpecimen() {
  const red = '#E63312';
  const s = {
    root: { width: WB, height: HB, background: '#FFFFFF', color: '#141414',
      fontFamily: '"Bricolage Grotesque", "Archivo", sans-serif',
      display: 'flex', flexDirection: 'column', overflow: 'hidden' },
    head: { display: 'flex', justifyContent: 'space-between',
      alignItems: 'baseline', padding: '20px 44px 14px',
      borderBottom: '3px solid #141414' },
    foundry: { fontSize: 14, fontWeight: 700, letterSpacing: '0.06em' },
    family: { fontSize: 14, fontWeight: 700, letterSpacing: '0.2em',
      textTransform: 'uppercase' },
    meta: { fontSize: 10.5, fontFamily: '"JetBrains Mono", monospace',
      letterSpacing: '0.08em', color: '#666' },
    glyphArea: { display: 'flex', padding: '18px 44px 10px', gap: 30,
      alignItems: 'flex-end', paddingBottom: 52 },
    glyphs: { fontFamily: '"Bricolage Grotesque", sans-serif', fontSize: 320,
      fontWeight: 800, lineHeight: 0.78, letterSpacing: '-0.06em' },
    glyphOutline: { color: 'transparent', WebkitTextStroke: '3px #141414' },
    annotCol: { display: 'flex', flexDirection: 'column', gap: 10,
      paddingBottom: 40, fontFamily: '"JetBrains Mono", monospace',
      fontSize: 10.5, letterSpacing: '0.06em' },
    annRow: { display: 'flex', gap: 10, alignItems: 'center' },
    annRule: { width: 46, height: 0, borderTop: `2px solid ${red}`,
      position: 'relative' },
    annTick: { position: 'absolute', right: 0, top: -4, width: 2, height: 8,
      background: red },
    waterfall: { padding: '6px 44px', borderTop: '1px solid #141414',
      lineHeight: 1.02 },
    wfRow: { whiteSpace: 'nowrap', overflow: 'hidden', fontWeight: 700,
      letterSpacing: '0.02em' },
    tariff: { marginTop: 'auto', display: 'grid', gridTemplateColumns: 'auto repeat(3, 1fr)',
      borderTop: '3px solid #141414', fontFamily: '"JetBrains Mono", monospace' },
    cellLbl: { padding: '14px 20px', fontSize: 10, letterSpacing: '0.2em',
      textTransform: 'uppercase', fontWeight: 700 },
    cellPrice: { padding: '14px 20px', fontSize: 11.5, borderLeft: '1px solid #141414',
      lineHeight: 1.5 },
    priceBig: { fontSize: 17, fontWeight: 700, fontFamily: '"Bricolage Grotesque", sans-serif' },
    tariffFoot: { gridColumn: '1 / -1', borderTop: '1px solid #141414',
      padding: '10px 20px', display: 'flex', justifyContent: 'space-between',
      fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase' },
    trialBtn: { background: '#141414', color: '#fff', padding: '8px 16px',
      fontSize: 10, letterSpacing: '0.16em', cursor: 'pointer' },
  };
  return (
    <div style={s.root}>
      <div style={s.head}>
        <span className="foundry" style={s.foundry}>Grot Foundry</span>
        <span style={s.family}>Grot Grotesk № 05</span>
        <span style={s.meta}>24 styles · variable wght 100–900 · opsz 8–96</span>
      </div>
      <div style={s.glyphArea}>
        <div style={s.glyphs}>
          R<span style={s.glyphOutline}>g</span>
        </div>
        <div style={s.annotCol}>
          <div style={s.annRow}><span style={s.annRule}><span style={s.annTick}></span></span><span>cap-height 700</span></div>
          <div style={s.annRow}><span style={{ ...s.annRule, width: 34 }}></span><span>x-height 520</span></div>
          <div style={s.annRow}><span style={{ ...s.annRule, borderColor: '#141414', width: 26 }}></span><span style={{ color: '#666' }}>overshoot −8</span></div>
          <div style={{ marginTop: 8, color: red }}>№ 05 — “the loud cousin”</div>
          <div style={{ color: '#666' }}>designed for headlines that argue back</div>
        </div>
      </div>
      <div style={s.waterfall}>
        <div style={{ ...s.wfRow, fontSize: 58 }}>HANDGLOVE EXTRAVAGANZA 0123</div>
        <div style={{ ...s.wfRow, fontSize: 42, fontWeight: 600 }}>Quick rustic barbarian jumped]&amp;fhøjt</div>
        <div style={{ ...s.wfRow, fontSize: 30, fontWeight: 500 }}>Systems breed silence until someone ships at midnight;</div>
        <div style={{ ...s.wfRow, fontSize: 21, fontWeight: 400 }}>every generous grotesk deserves a second act with numerals aligned and punctuation that frowns.</div>
        <div style={{ ...s.wfRow, fontSize: 14, fontWeight: 300, color: '#555' }}>Trial version renders lowercase as whispers — upgrade to talk properly across six scripts and forty-four languages today.</div>
      </div>
      <div style={s.tariff}>
        <div style={s.cellLbl}>License Tariff</div>
        <div style={s.cellPrice}><span style={s.priceBig}>€60</span><br/>desktop · 1 seat</div>
        <div style={s.cellPrice}><span style={s.priceBig}>€90</span><br/>web · 250k views/mo</div>
        <div style={s.cellPrice}><span style={s.priceBig}>€140</span><br/>app · unlimited installs</div>
        <div style={s.tariffFoot}>
          <span>GROTTOUNES FIXED — NO SUBSCRIPTION, NO PHONE-HOME</span>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <span style={{ letterSpacing: '0.14em' }}>TRY 45 DAYS FREE</span>
            <span style={s.trialBtn}>DOWNLOAD TRIAL ↓</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

function BrutalSysSection() {
  return (
    <DCSection id="brutal-sys" title="Brutalist Systems"
      subtitle="Four ways to be blunt on purpose: raw-web honesty, neo-brutalist sticker slap, datasheet brutalism, and poster-grade concrete.">
      <DCArtboard id="b-rawweb" label="25 · Raw Web Casual" width={WB} height={HB}>
        <HeroRawWeb />
      </DCArtboard>
      <DCArtboard id="b-sticker" label="26 · Sticker Slap" width={WB} height={HB}>
        <HeroSticker />
      </DCArtboard>
      <DCArtboard id="b-manifesto" label="27 · Data Manifesto" width={WB} height={HB}>
        <HeroManifesto />
      </DCArtboard>
      <DCArtboard id="b-concrete" label="28 · Concrete Poster" width={WB} height={HB}>
        <HeroConcrete />
      </DCArtboard>
    </DCSection>
  );
}

function MinimalLabSection() {
  return (
    <DCSection id="minimal-lab" title="Minimalist Studies"
      subtitle="Restraint regimes: object-on-white hardware, museum quiet, dark studio void, and a type-specimen sheet that shows off by showing less.">
      <DCArtboard id="n-object" label="29 · Object White" width={WB} height={HB}>
        <HeroObject />
      </DCArtboard>
      <DCArtboard id="n-gallery" label="30 · Museum Quiet" width={WB} height={HB}>
        <HeroGallery />
      </DCArtboard>
      <DCArtboard id="n-darkquiet" label="31 · Dark Quiet" width={WB} height={HB}>
        <HeroDarkQuiet />
      </DCArtboard>
      <DCArtboard id="n-specimen" label="32 · Type Specimen" width={WB} height={HB}>
        <HeroSpecimen />
      </DCArtboard>
    </DCSection>
  );
}

window.BrutalSysSection = BrutalSysSection;
window.MinimalLabSection = MinimalLabSection;
