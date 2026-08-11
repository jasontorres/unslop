// ─────────────────────────────────────────────────────────────────────────────
// HOME / LANDING — three directions for the Field studio homepage.
// A · Statement (light)   B · Spec / Night (dark)   C · Index (Swiss light)
// ─────────────────────────────────────────────────────────────────────────────
const F = window.FIELD;
const { Slot, Mark, Nav, Eyebrow, Footer } = window;
const W = F.W, H = F.H;

const CLIENTS = ['Halid', 'Pavilion', 'Tide', 'Werner Institute', 'Pace//Form', 'Maison Calva'];

// ── A · STATEMENT ────────────────────────────────────────────────────────────
function HomeStatement() {
  const s = {
    root: { width: W, height: H, background: F.paper, color: F.ink, fontFamily: F.sans,
      display: 'flex', flexDirection: 'column' },
    main: { flex: 1, display: 'grid', gridTemplateColumns: '1.55fr 1fr' },
    left: { padding: '56px 48px 40px', display: 'flex', flexDirection: 'column',
      justifyContent: 'space-between', borderRight: `1px solid ${F.line}` },
    h1: { fontSize: 78, lineHeight: 0.96, fontWeight: 600, letterSpacing: '-0.035em',
      margin: '26px 0 0' },
    accent: { color: F.accent },
    lede: { fontSize: 18, lineHeight: 1.5, color: F.sub, maxWidth: 480, marginTop: 28 },
    ctas: { display: 'flex', gap: 12, marginTop: 36, alignItems: 'center' },
    btnA: { background: F.ink, color: F.paper, padding: '14px 24px', borderRadius: 2,
      fontSize: 14, fontWeight: 600, letterSpacing: '-0.01em' },
    btnB: { fontSize: 14, fontWeight: 600, color: F.ink, borderBottom: `1.5px solid ${F.ink}`,
      paddingBottom: 3 },
    right: { display: 'flex', flexDirection: 'column' },
    meta: { padding: '34px 36px', borderBottom: `1px solid ${F.line}` },
    metaN: { fontSize: 46, fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1 },
    metaL: { fontFamily: F.mono, fontSize: 10.5, letterSpacing: '0.14em',
      textTransform: 'uppercase', color: F.faint, marginTop: 8 },
    strip: { display: 'flex', alignItems: 'center', gap: 0, borderTop: `1px solid ${F.line}` },
    chip: { flex: 1, padding: '17px 18px', fontFamily: F.mono, fontSize: 11.5,
      letterSpacing: '0.02em', color: F.sub, borderRight: `1px solid ${F.line}`,
      whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
  };
  return (
    <div style={s.root}>
      <Nav active="" />
      <div style={s.main}>
        <div style={s.left}>
          <div>
            <Eyebrow>Product studio · est. 2017</Eyebrow>
            <h1 style={s.h1}>
              We design and<br />build software<br />
              <span style={s.accent}>worth shipping.</span>
            </h1>
            <p style={s.lede}>
              A senior team of designers and engineers who embed with founders
              and product leaders — and leave behind a product, not a deck.
            </p>
            <div style={s.ctas}>
              <span style={s.btnA}>See our work →</span>
              <span style={s.btnB}>How we engage</span>
            </div>
          </div>
          <div style={{ fontFamily: F.mono, fontSize: 10.5, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: F.faint }}>
            Trusted by teams at fintech, health & climate companies
          </div>
        </div>
        <div style={s.right}>
          <div style={{ ...s.meta, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={s.metaN}>40+</div>
            <div style={s.metaL}>Products shipped since 2017</div>
          </div>
          <div style={{ ...s.meta, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={s.metaN}>14<span style={{ fontSize: 24, color: F.faint }}> wks</span></div>
            <div style={s.metaL}>Median time to first launch</div>
          </div>
          <div style={{ ...s.meta, flex: 1, borderBottom: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ ...s.metaN, color: F.accent }}>$310M</div>
            <div style={s.metaL}>Raised by clients post-build</div>
          </div>
        </div>
      </div>
      <div style={s.strip}>
        {CLIENTS.map((c, i) => (
          <div key={c} style={{ ...s.chip, borderRight: i === CLIENTS.length - 1 ? 'none' : s.chip.borderRight }}>{c}</div>
        ))}
      </div>
    </div>
  );
}

// ── B · SPEC / NIGHT ─────────────────────────────────────────────────────────
function HomeSpec() {
  const s = {
    root: { width: W, height: H, background: F.night, color: F.cream, fontFamily: F.sans,
      display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' },
    glow: { position: 'absolute', width: 720, height: 720, borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(47,73,214,0.22), transparent 62%)',
      right: -220, top: -240, pointerEvents: 'none' },
    main: { flex: 1, display: 'grid', gridTemplateColumns: '1.1fr 1fr', position: 'relative', zIndex: 2 },
    left: { padding: '60px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' },
    h1: { fontSize: 70, lineHeight: 0.98, fontWeight: 600, letterSpacing: '-0.035em',
      margin: '24px 0 0', color: '#fbfaf6' },
    signal: { color: F.signal },
    lede: { fontSize: 16, lineHeight: 1.6, color: F.creamSoft, maxWidth: 440, marginTop: 26 },
    ctas: { display: 'flex', gap: 12, marginTop: 34 },
    btnA: { background: F.signal, color: F.night, padding: '14px 24px', borderRadius: 2,
      fontFamily: F.mono, fontSize: 12.5, fontWeight: 600, letterSpacing: '0.02em' },
    btnB: { border: `1px solid ${F.nightLine}`, color: F.cream, padding: '14px 24px',
      borderRadius: 2, fontFamily: F.mono, fontSize: 12.5, fontWeight: 500 },
    right: { padding: 40, display: 'flex', alignItems: 'center' },
    panel: { width: '100%', background: F.panel, border: `1px solid ${F.nightLine}`,
      borderRadius: 6, fontFamily: F.mono, fontSize: 12.5, lineHeight: 1.85, overflow: 'hidden' },
    bar: { display: 'flex', alignItems: 'center', gap: 8, padding: '11px 16px',
      borderBottom: `1px solid ${F.nightLine}`, color: F.creamSoft, fontSize: 11 },
    live: { width: 7, height: 7, borderRadius: '50%', background: F.signal,
      boxShadow: `0 0 10px ${F.signal}` },
    body: { padding: '16px 18px', color: '#b9b4a8' },
    k: { color: F.creamSoft }, v: { color: F.cream }, ac: { color: F.signal },
  };
  const row = (k, v, acc) => (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <span style={s.k}>{k}</span><span style={acc ? s.ac : s.v}>{v}</span>
    </div>
  );
  return (
    <div style={s.root}>
      <div style={s.glow}></div>
      <Nav dark active="" />
      <div style={s.main}>
        <div style={s.left}>
          <Eyebrow dark color={F.signal}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
              <span style={s.live}></span>Currently building · 3 engagements
            </span>
          </Eyebrow>
          <h1 style={s.h1}>
            Engineering-led<br />product teams,<br />
            <span style={s.signal}>on demand.</span>
          </h1>
          <p style={s.lede}>
            Field plugs a complete design + engineering pod into your roadmap.
            We write production code from week one and hand you the keys at the end.
          </p>
          <div style={s.ctas}>
            <span style={s.btnA}>$ start_project →</span>
            <span style={s.btnB}>View capabilities</span>
          </div>
        </div>
        <div style={s.right}>
          <div style={s.panel}>
            <div style={s.bar}>
              <span style={s.live}></span>
              <span style={{ color: F.cream, fontWeight: 500 }}>field.status</span>
              <span style={{ marginLeft: 'auto' }}>uptime 99.98%</span>
            </div>
            <div style={s.body}>
              {row('engagement', 'Halid · treasury', false)}
              {row('stack', 'TS · Rust · Postgres', false)}
              {row('pod', '2 eng · 1 design · 1 pm', false)}
              {row('week', '06 / 14', false)}
              {row('status', 'shipping ▲', true)}
              <div style={{ height: 1, background: F.nightLine, margin: '12px 0' }}></div>
              {row('next deploy', 'today 16:40', false)}
              {row('coverage', '94.2%', true)}
              {row('open prs', '7', false)}
            </div>
          </div>
        </div>
      </div>
      <Footer dark />
    </div>
  );
}

// ── C · INDEX (Swiss) ────────────────────────────────────────────────────────
function HomeIndex() {
  const rows = [
    ['001', 'Halid', 'Treasury platform', 'Fintech', '2026'],
    ['002', 'Pavilion', 'CRM redesign + rebuild', 'SaaS', '2025'],
    ['003', 'Tide', 'Meditation app', 'Consumer', '2025'],
    ['004', 'Werner Institute', 'Collections archive', 'Culture', '2024'],
  ];
  const s = {
    root: { width: W, height: H, background: F.paper, color: F.ink, fontFamily: F.sans,
      display: 'flex', flexDirection: 'column' },
    head: { padding: '54px 48px 40px', display: 'grid', gridTemplateColumns: '1fr 360px',
      alignItems: 'end', gap: 40, borderBottom: `1px solid ${F.lineInk}` },
    h1: { fontSize: 92, lineHeight: 0.9, fontWeight: 600, letterSpacing: '-0.045em', margin: 0 },
    side: { fontSize: 15.5, lineHeight: 1.55, color: F.sub },
    table: { flex: 1, display: 'flex', flexDirection: 'column' },
    th: { display: 'grid', gridTemplateColumns: '70px 1fr 1.4fr 160px 90px',
      padding: '13px 48px', fontFamily: F.mono, fontSize: 10.5, letterSpacing: '0.14em',
      textTransform: 'uppercase', color: F.faint, borderBottom: `1px solid ${F.line}` },
    tr: { display: 'grid', gridTemplateColumns: '70px 1fr 1.4fr 160px 90px',
      padding: '0 48px', alignItems: 'center', flex: 1, borderBottom: `1px solid ${F.line}` },
    num: { fontFamily: F.mono, fontSize: 13, color: F.faint },
    name: { fontSize: 30, fontWeight: 600, letterSpacing: '-0.025em' },
    desc: { fontSize: 15, color: F.sub },
    tag: { fontFamily: F.mono, fontSize: 11.5, color: F.ink, letterSpacing: '0.02em' },
    yr: { fontFamily: F.mono, fontSize: 12, color: F.faint, textAlign: 'right' },
  };
  return (
    <div style={s.root}>
      <Nav active="Work" />
      <div style={s.head}>
        <h1 style={s.h1}>A studio,<br />indexed.</h1>
        <div style={s.side}>
          Field is a product studio. Below is everything we've shipped this cycle —
          no carousel, no hero video, just the work and the year it went live.
        </div>
      </div>
      <div style={s.table}>
        <div style={s.th}>
          <span>Idx</span><span>Client</span><span>Engagement</span><span>Sector</span>
          <span style={{ textAlign: 'right' }}>Year</span>
        </div>
        {rows.map((r) => (
          <div key={r[0]} style={s.tr}>
            <span style={s.num}>{r[0]}</span>
            <span style={s.name}>{r[1]}</span>
            <span style={s.desc}>{r[2]}</span>
            <span style={s.tag}>{r[3]}</span>
            <span style={s.yr}>{r[4]} →</span>
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { HomeStatement, HomeSpec, HomeIndex });
