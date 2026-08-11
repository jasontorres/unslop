// ─────────────────────────────────────────────────────────────────────────────
// SERVICES & PROCESS
// A · Capability matrix (light)   B · Numbered services (dark)   Process (light)
// ─────────────────────────────────────────────────────────────────────────────
const F = window.FIELD;
const { Slot, Mark, Nav, Eyebrow, Footer } = window;
const W = F.W, H = F.H;

// ── A · CAPABILITY MATRIX ────────────────────────────────────────────────────
function ServicesMatrix() {
  const caps = [
    ['01', 'Product strategy', 'Positioning, scope and a roadmap you can ship against — not a 60-page deck.'],
    ['02', 'Product design', 'Interface, interaction and design systems built in the browser, not Figma jail.'],
    ['03', 'Web engineering', 'Type-safe React + Node, performance budgets, and tests that actually run.'],
    ['04', 'Mobile', 'Native-feeling iOS & Android from one expo/React Native codebase.'],
    ['05', 'AI integration', 'Retrieval, agents and evals wired into real products — measured, not hyped.'],
    ['06', 'Platform & infra', 'Postgres, queues, CI/CD and the boring reliability that keeps you up.'],
  ];
  const s = {
    root: { width: W, height: H, background: F.paper, color: F.ink, fontFamily: F.sans,
      display: 'flex', flexDirection: 'column' },
    head: { padding: '46px 48px 30px', display: 'grid', gridTemplateColumns: '1fr 380px',
      alignItems: 'end', gap: 40 },
    h1: { fontSize: 60, lineHeight: 0.96, fontWeight: 600, letterSpacing: '-0.035em', margin: '20px 0 0' },
    side: { fontSize: 15, lineHeight: 1.55, color: F.sub },
    grid: { flex: 1, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
      gridTemplateRows: '1fr 1fr', borderTop: `1px solid ${F.lineInk}` },
    cell: { padding: '26px 28px', borderRight: `1px solid ${F.line}`, borderBottom: `1px solid ${F.line}`,
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
    num: { fontFamily: F.mono, fontSize: 12, color: F.accent, letterSpacing: '0.06em' },
    cTitle: { fontSize: 25, fontWeight: 600, letterSpacing: '-0.025em', marginTop: 14 },
    cBody: { fontSize: 13.5, lineHeight: 1.5, color: F.sub, marginTop: 10 },
    arrow: { fontFamily: F.mono, fontSize: 12, color: F.faint, marginTop: 18 },
  };
  return (
    <div style={s.root}>
      <Nav active="Services" />
      <div style={s.head}>
        <div>
          <Eyebrow>What we do</Eyebrow>
          <h1 style={s.h1}>Six capabilities,<br />one embedded team.</h1>
        </div>
        <div style={s.side}>
          You don't hire six vendors. You get one senior pod that covers the
          whole surface — from the first sketch to the on-call rotation.
        </div>
      </div>
      <div style={s.grid}>
        {caps.map((c, i) => (
          <div key={c[0]} style={{ ...s.cell,
            borderRight: (i % 3 === 2) ? 'none' : s.cell.borderRight,
            borderBottom: (i >= 3) ? 'none' : s.cell.borderBottom }}>
            <div>
              <div style={s.num}>{c[0]} / 06</div>
              <div style={s.cTitle}>{c[1]}</div>
              <div style={s.cBody}>{c[2]}</div>
            </div>
            <div style={s.arrow}>—</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── B · NUMBERED SERVICES (dark) ─────────────────────────────────────────────
function ServicesList() {
  const rows = [
    ['Strategy', 'Roadmaps, scoping, technical due diligence'],
    ['Design', 'Product design · design systems · prototyping'],
    ['Engineering', 'Web · mobile · backend · AI features'],
    ['Reliability', 'Infra, observability, on-call handoff'],
  ];
  const s = {
    root: { width: W, height: H, background: F.night, color: F.cream, fontFamily: F.sans,
      display: 'flex', flexDirection: 'column' },
    main: { flex: 1, display: 'grid', gridTemplateColumns: '0.9fr 1.1fr' },
    left: { padding: '56px 48px', display: 'flex', flexDirection: 'column',
      justifyContent: 'space-between', borderRight: `1px solid ${F.nightLine}` },
    h1: { fontSize: 58, lineHeight: 0.98, fontWeight: 600, letterSpacing: '-0.035em',
      margin: '22px 0 0', color: '#fbfaf6' },
    lede: { fontSize: 15.5, lineHeight: 1.6, color: F.creamSoft, maxWidth: 380, marginTop: 24 },
    note: { fontFamily: F.mono, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase',
      color: F.creamSoft },
    list: { display: 'flex', flexDirection: 'column' },
    row: { flex: 1, display: 'flex', alignItems: 'center', gap: 28, padding: '0 48px',
      borderBottom: `1px solid ${F.nightLine}` },
    idx: { fontFamily: F.mono, fontSize: 13, color: F.signal, width: 30 },
    rTitle: { fontSize: 34, fontWeight: 600, letterSpacing: '-0.03em', width: 220 },
    rBody: { fontSize: 14.5, color: F.creamSoft, flex: 1 },
    plus: { fontFamily: F.mono, fontSize: 18, color: F.creamSoft },
  };
  return (
    <div style={s.root}>
      <Nav dark active="Services" />
      <div style={s.main}>
        <div style={s.left}>
          <div>
            <Eyebrow dark color={F.signal}>Engagements</Eyebrow>
            <h1 style={s.h1}>One pod.<br />Four lanes.<br />Zero handoffs.</h1>
            <p style={s.lede}>
              Strategy through reliability under one roof, one Slack channel,
              one weekly demo. Nothing falls between the seams.
            </p>
          </div>
          <div style={s.note}>SOC 2 · NDA-ready · senior-only</div>
        </div>
        <div style={s.list}>
          {rows.map((r, i) => (
            <div key={r[0]} style={{ ...s.row, borderBottom: i === rows.length - 1 ? 'none' : s.row.borderBottom }}>
              <span style={s.idx}>0{i + 1}</span>
              <span style={s.rTitle}>{r[0]}</span>
              <span style={s.rBody}>{r[1]}</span>
              <span style={s.plus}>+</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── PROCESS ──────────────────────────────────────────────────────────────────
function Process() {
  const steps = [
    ['Map', 'Weeks 1–2', 'Audit, align on scope, and pin the one metric that matters. We leave with a build plan.'],
    ['Make', 'Weeks 3–10', 'Design and engineering run in parallel. Weekly demos, real code, no waterfall.'],
    ['Ship', 'Weeks 11–14', 'Harden, instrument, launch. Your users touch it before the engagement ends.'],
    ['Tend', 'Ongoing', 'We stay on call through the first growth curve, then hand off a documented codebase.'],
  ];
  const s = {
    root: { width: W, height: H, background: F.paper, color: F.ink, fontFamily: F.sans,
      display: 'flex', flexDirection: 'column' },
    head: { padding: '48px 48px 34px' },
    h1: { fontSize: 58, lineHeight: 0.96, fontWeight: 600, letterSpacing: '-0.035em', margin: '18px 0 0' },
    track: { flex: 1, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
      borderTop: `1px solid ${F.lineInk}` },
    col: { padding: '30px 28px', borderRight: `1px solid ${F.line}`,
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' },
    dot: { width: 11, height: 11, borderRadius: '50%', background: F.accent,
      position: 'absolute', top: -6, left: 28 },
    phase: { fontFamily: F.mono, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
      color: F.faint },
    sTitle: { fontSize: 38, fontWeight: 600, letterSpacing: '-0.03em', marginTop: 20 },
    sBody: { fontSize: 14, lineHeight: 1.55, color: F.sub, marginTop: 14 },
    big: { fontFamily: F.mono, fontSize: 13, color: F.accent },
  };
  return (
    <div style={s.root}>
      <Nav active="Services" />
      <div style={s.head}>
        <Eyebrow>How we work</Eyebrow>
        <h1 style={s.h1}>Map. Make. Ship. Tend.</h1>
      </div>
      <div style={s.track}>
        {steps.map((st, i) => (
          <div key={st[0]} style={{ ...s.col, borderRight: i === 3 ? 'none' : s.col.borderRight }}>
            <div style={s.dot}></div>
            <div>
              <div style={s.phase}>{st[1]}</div>
              <div style={s.sTitle}>{st[0]}</div>
              <div style={s.sBody}>{st[2]}</div>
            </div>
            <div style={s.big}>0{i + 1} →</div>
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { ServicesMatrix, ServicesList, Process });
