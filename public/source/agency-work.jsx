// ─────────────────────────────────────────────────────────────────────────────
// WORK — index + case study detail
// A · Case grid (light)   B · Ledger (dark)
// CaseStudy A · Editorial (light)   CaseStudy B · Spec sheet (dark)
// ─────────────────────────────────────────────────────────────────────────────
const F = window.FIELD;
const { Slot, Mark, Nav, Eyebrow, Footer } = window;
const W = F.W, H = F.H;

// ── WORK INDEX A · CASE GRID ─────────────────────────────────────────────────
function WorkGrid() {
  const cards = [
    ['Halid', 'Treasury platform for modern finance teams', 'Fintech', '#1f2b6b'],
    ['Pavilion', 'A CRM their reps actually open', 'SaaS', '#244038'],
    ['Tide', 'Meditation that meets you mid-panic', 'Consumer', '#5a3a72'],
  ];
  const s = {
    root: { width: W, height: H, background: F.paper, color: F.ink, fontFamily: F.sans,
      display: 'flex', flexDirection: 'column' },
    head: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
      padding: '46px 48px 28px' },
    h1: { fontSize: 58, lineHeight: 0.96, fontWeight: 600, letterSpacing: '-0.035em', margin: '18px 0 0' },
    filter: { display: 'flex', gap: 8, fontFamily: F.mono, fontSize: 11.5 },
    pill: (on) => ({ padding: '7px 13px', borderRadius: 999, letterSpacing: '0.02em',
      border: `1px solid ${on ? F.ink : F.line}`, background: on ? F.ink : 'transparent',
      color: on ? F.paper : F.sub }),
    grid: { flex: 1, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0,
      borderTop: `1px solid ${F.lineInk}` },
    card: { borderRight: `1px solid ${F.line}`, display: 'flex', flexDirection: 'column',
      padding: 0 },
    shot: { flex: 1, position: 'relative', overflow: 'hidden',
      borderBottom: `1px solid ${F.line}`, display: 'flex', alignItems: 'flex-end', padding: 22 },
    badge: { fontFamily: F.mono, fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.85)', background: 'rgba(0,0,0,0.25)', padding: '5px 9px', borderRadius: 2 },
    meta: { padding: '20px 22px' },
    name: { fontSize: 26, fontWeight: 600, letterSpacing: '-0.025em' },
    desc: { fontSize: 13.5, color: F.sub, marginTop: 7, lineHeight: 1.45 },
    foot: { display: 'flex', justifyContent: 'space-between', marginTop: 16,
      fontFamily: F.mono, fontSize: 11, color: F.faint },
  };
  return (
    <div style={s.root}>
      <Nav active="Work" />
      <div style={s.head}>
        <div>
          <Eyebrow>Selected work · 2024–2026</Eyebrow>
          <h1 style={s.h1}>Things we built<br />and still maintain.</h1>
        </div>
        <div style={s.filter}>
          <span style={s.pill(true)}>All</span>
          <span style={s.pill(false)}>Fintech</span>
          <span style={s.pill(false)}>Consumer</span>
          <span style={s.pill(false)}>SaaS</span>
        </div>
      </div>
      <div style={s.grid}>
        {cards.map((c, i) => (
          <div key={c[0]} style={{ ...s.card, borderRight: i === 2 ? 'none' : s.card.borderRight }}>
            <div style={{ ...s.shot, background: c[3],
              backgroundImage: 'repeating-linear-gradient(45deg, transparent 0 18px, rgba(255,255,255,0.04) 18px 19px)' }}>
              <span style={s.badge}>{c[2]}</span>
            </div>
            <div style={s.meta}>
              <div style={s.name}>{c[0]}</div>
              <div style={s.desc}>{c[1]}</div>
              <div style={s.foot}><span>Case 00{i + 1}</span><span>Read →</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── WORK INDEX B · LEDGER (dark) ─────────────────────────────────────────────
function WorkLedger() {
  const rows = [
    ['Halid', 'Treasury platform', 'Strategy · Design · Eng', '14 wks', '$24M Series A'],
    ['Pavilion', 'CRM rebuild', 'Design · Eng', '20 wks', '+38% activation'],
    ['Tide', 'Meditation app', 'Product · Mobile', '11 wks', '4.9★ · 120k MAU'],
    ['Werner Institute', 'Collections archive', 'Design · Web', '9 wks', '1.2M objects'],
    ['Pace//Form', 'Run-club platform', 'Eng · Infra', '16 wks', '60k members'],
  ];
  const s = {
    root: { width: W, height: H, background: F.night, color: F.cream, fontFamily: F.sans,
      display: 'flex', flexDirection: 'column' },
    head: { padding: '46px 48px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' },
    h1: { fontSize: 56, lineHeight: 0.96, fontWeight: 600, letterSpacing: '-0.035em',
      margin: '18px 0 0', color: '#fbfaf6' },
    count: { fontFamily: F.mono, fontSize: 12, color: F.creamSoft },
    th: { display: 'grid', gridTemplateColumns: '1.1fr 1.3fr 1.6fr 0.7fr 1fr',
      padding: '12px 48px', fontFamily: F.mono, fontSize: 10.5, letterSpacing: '0.14em',
      textTransform: 'uppercase', color: F.creamSoft, borderTop: `1px solid ${F.nightLine}`,
      borderBottom: `1px solid ${F.nightLine}` },
    body: { flex: 1, display: 'flex', flexDirection: 'column' },
    tr: { display: 'grid', gridTemplateColumns: '1.1fr 1.3fr 1.6fr 0.7fr 1fr',
      padding: '0 48px', alignItems: 'center', flex: 1, borderBottom: `1px solid ${F.nightLine}` },
    name: { fontSize: 24, fontWeight: 600, letterSpacing: '-0.025em' },
    cell: { fontSize: 14, color: F.creamSoft },
    mono: { fontFamily: F.mono, fontSize: 12.5, color: F.cream },
    outcome: { fontFamily: F.mono, fontSize: 12.5, color: F.signal },
  };
  return (
    <div style={s.root}>
      <Nav dark active="Work" />
      <div style={s.head}>
        <div>
          <Eyebrow dark color={F.signal}>The ledger</Eyebrow>
          <h1 style={s.h1}>Every engagement,<br />and what it returned.</h1>
        </div>
        <div style={s.count}>05 / 41 shown</div>
      </div>
      <div style={s.th}>
        <span>Client</span><span>Engagement</span><span>Scope</span><span>Span</span><span>Outcome</span>
      </div>
      <div style={s.body}>
        {rows.map((r, i) => (
          <div key={r[0]} style={{ ...s.tr, borderBottom: i === rows.length - 1 ? 'none' : s.tr.borderBottom }}>
            <span style={s.name}>{r[0]}</span>
            <span style={s.cell}>{r[1]}</span>
            <span style={s.mono}>{r[2]}</span>
            <span style={s.mono}>{r[3]}</span>
            <span style={s.outcome}>{r[4]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── CASE STUDY A · EDITORIAL (light) ─────────────────────────────────────────
function CaseEditorial() {
  const s = {
    root: { width: W, height: H, background: F.paper, color: F.ink, fontFamily: F.sans,
      display: 'flex', flexDirection: 'column' },
    main: { flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr' },
    left: { padding: '50px 48px', borderRight: `1px solid ${F.line}`,
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
    crumb: { fontFamily: F.mono, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase',
      color: F.faint },
    h1: { fontSize: 72, lineHeight: 0.94, fontWeight: 600, letterSpacing: '-0.04em', margin: '20px 0 0' },
    lede: { fontSize: 18, lineHeight: 1.5, color: F.sub, maxWidth: 460, marginTop: 24,
      fontFamily: F.serif },
    metrics: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0,
      borderTop: `1px solid ${F.line}` },
    metric: { padding: '20px 0', borderRight: `1px solid ${F.line}`, paddingRight: 16 },
    mN: { fontSize: 40, fontWeight: 600, letterSpacing: '-0.03em', color: F.accent },
    mL: { fontFamily: F.mono, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase',
      color: F.faint, marginTop: 6 },
    right: { position: 'relative', background: '#1f2b6b', overflow: 'hidden',
      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 32,
      backgroundImage: 'repeating-linear-gradient(45deg, transparent 0 20px, rgba(255,255,255,0.04) 20px 21px)' },
    shotLabel: { fontFamily: F.mono, fontSize: 10.5, letterSpacing: '0.16em', textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.6)' },
    quote: { fontFamily: F.serif, fontSize: 22, lineHeight: 1.4, color: '#fff', marginTop: 10, maxWidth: 380 },
    by: { fontFamily: F.mono, fontSize: 11, color: 'rgba(255,255,255,0.7)', marginTop: 16 },
  };
  return (
    <div style={s.root}>
      <Nav active="Work" />
      <div style={s.main}>
        <div style={s.left}>
          <div>
            <div style={s.crumb}>Work / Halid · Fintech · 2026</div>
            <h1 style={s.h1}>Treasury,<br />rebuilt from<br />the ledger up.</h1>
            <p style={s.lede}>
              Halid came to us with a spreadsheet and a Series A. Fourteen weeks
              later they had a treasury platform that moved real money.
            </p>
          </div>
          <div style={s.metrics}>
            <div style={s.metric}><div style={s.mN}>14</div><div style={s.mL}>Weeks to launch</div></div>
            <div style={s.metric}><div style={s.mN}>$24M</div><div style={s.mL}>Series A raised</div></div>
            <div style={{ ...s.metric, borderRight: 'none' }}><div style={s.mN}>99.99%</div><div style={s.mL}>Uptime since</div></div>
          </div>
        </div>
        <div style={s.right}>
          <div style={s.shotLabel}>Halid · dashboard</div>
          <div style={s.quote}>"They shipped faster than our last in-house team did in a year."</div>
          <div style={s.by}>— Maya Khanna, CEO · Halid</div>
        </div>
      </div>
    </div>
  );
}

// ── CASE STUDY B · SPEC SHEET (dark) ─────────────────────────────────────────
function CaseSpec() {
  const s = {
    root: { width: W, height: H, background: F.night, color: F.cream, fontFamily: F.sans,
      display: 'flex', flexDirection: 'column' },
    main: { flex: 1, display: 'grid', gridTemplateColumns: '1.3fr 1fr' },
    left: { padding: '50px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
    crumb: { fontFamily: F.mono, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase',
      color: F.creamSoft },
    h1: { fontSize: 66, lineHeight: 0.96, fontWeight: 600, letterSpacing: '-0.04em',
      margin: '20px 0 0', color: '#fbfaf6' },
    body: { fontSize: 15.5, lineHeight: 1.65, color: F.creamSoft, maxWidth: 500, marginTop: 24 },
    chips: { display: 'flex', gap: 8, marginTop: 26, flexWrap: 'wrap' },
    chip: { fontFamily: F.mono, fontSize: 11.5, color: F.cream, border: `1px solid ${F.nightLine}`,
      padding: '6px 11px', borderRadius: 2 },
    right: { borderLeft: `1px solid ${F.nightLine}`, padding: '50px 40px',
      display: 'flex', flexDirection: 'column' },
    specTitle: { fontFamily: F.mono, fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase',
      color: F.creamSoft, marginBottom: 8 },
    row: { display: 'flex', justifyContent: 'space-between', padding: '14px 0',
      borderBottom: `1px solid ${F.nightLine}`, fontFamily: F.mono, fontSize: 13 },
    k: { color: F.creamSoft }, v: { color: F.cream }, ac: { color: F.signal },
  };
  const row = (k, v, acc) => (
    <div style={s.row}><span style={s.k}>{k}</span><span style={acc ? s.ac : s.v}>{v}</span></div>
  );
  return (
    <div style={s.root}>
      <Nav dark active="Work" />
      <div style={s.main}>
        <div style={s.left}>
          <div>
            <div style={s.crumb}>Case 002 / Pavilion · CRM</div>
            <h1 style={s.h1}>A CRM their reps<br />actually open.</h1>
            <p style={s.body}>
              Pavilion's old CRM had a 12% daily-open rate. We rebuilt the data
              model, cut the schema in half, and designed around the three things
              reps do every morning. Activation climbed 38 points in a quarter.
            </p>
            <div style={s.chips}>
              {['React', 'tRPC', 'Postgres', 'Temporal', 'Design system v2'].map((c) => (
                <span key={c} style={s.chip}>{c}</span>
              ))}
            </div>
          </div>
        </div>
        <div style={s.right}>
          <div style={s.specTitle}>Engagement spec</div>
          {row('client', 'Pavilion', false)}
          {row('sector', 'B2B SaaS', false)}
          {row('span', '20 weeks', false)}
          {row('pod', '4 people', false)}
          {row('daily opens', '12% → 71%', true)}
          {row('activation', '+38 pts', true)}
          {row('status', 'maintained', true)}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { WorkGrid, WorkLedger, CaseEditorial, CaseSpec });
