// ─────────────────────────────────────────────────────────────────────────────
// MORE VARIATIONS — second batch for the Field page set.
// Two new home treatments + four new page types, same brand + type system.
//   HomeBold (light, display)   HomeSplit (design × eng, split)
//   JournalIndex (editorial)    JournalArticle (reading view)
//   Careers (dark ledger)       ProofWall (testimonials + metrics)
// ─────────────────────────────────────────────────────────────────────────────
const F = window.FIELD;
const { Slot, Mark, Nav, Eyebrow, Footer } = window;
const W = F.W, H = F.H;

// ── HOME · BOLD DISPLAY (light) ──────────────────────────────────────────────
function HomeBold() {
  const s = {
    root: { width: W, height: H, background: F.paper, color: F.ink, fontFamily: F.sans,
      display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' },
    main: { flex: 1, position: 'relative', padding: '0 48px', display: 'flex',
      flexDirection: 'column', justifyContent: 'center' },
    h1: { fontFamily: '"Archivo Black","Archivo",sans-serif', fontSize: 150, lineHeight: 0.84,
      letterSpacing: '-0.05em', margin: 0, textTransform: 'uppercase' },
    outline: { color: 'transparent', WebkitTextStroke: `2px ${F.ink}` },
    accent: { color: F.accent },
    badge: { position: 'absolute', right: 60, top: 40, width: 116, height: 116, borderRadius: '50%',
      background: F.accent, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', fontFamily: F.mono, fontSize: 11, letterSpacing: '0.04em', lineHeight: 1.4,
      transform: 'rotate(-9deg)', textTransform: 'uppercase' },
    row: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 38 },
    sub: { fontSize: 18, lineHeight: 1.45, maxWidth: 440, color: F.sub },
    cta: { display: 'flex', gap: 12, alignItems: 'center' },
    btnA: { background: F.ink, color: F.paper, padding: '16px 26px', borderRadius: 2,
      fontWeight: 700, fontSize: 14.5 },
    btnB: { fontWeight: 600, fontSize: 14.5, borderBottom: `1.5px solid ${F.ink}`, paddingBottom: 3 },
    marquee: { display: 'flex', gap: 0, borderTop: `1px solid ${F.lineInk}` },
    mItem: { flex: 1, padding: '15px 18px', fontFamily: F.mono, fontSize: 12, color: F.sub,
      borderRight: `1px solid ${F.line}`, letterSpacing: '0.02em' },
  };
  const clients = ['Halid', 'Pavilion', 'Tide', 'Werner', 'Pace//Form', 'Maison Calva'];
  return (
    <div style={s.root}>
      <Nav active="" />
      <div style={s.main}>
        <div style={s.badge}>New<br />engagements<br />Q3 open</div>
        <Eyebrow>Product studio · Brooklyn / Lisbon</Eyebrow>
        <h1 style={{ ...s.h1, marginTop: 22 }}>
          From sketch<br /><span style={s.outline}>to</span> <span style={s.accent}>ship.</span>
        </h1>
        <div style={s.row}>
          <p style={s.sub}>
            No discovery theatre. We embed a senior pod, write production code in
            week one, and leave you a product you can grow.
          </p>
          <div style={s.cta}>
            <span style={s.btnA}>See our work →</span>
            <span style={s.btnB}>How we engage</span>
          </div>
        </div>
      </div>
      <div style={s.marquee}>
        {clients.map((c, i) => (
          <div key={c} style={{ ...s.mItem, borderRight: i === clients.length - 1 ? 'none' : s.mItem.borderRight }}>
            ◆ {c}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── HOME · SPLIT (design × engineering) ──────────────────────────────────────
function HomeSplit() {
  const s = {
    root: { width: W, height: H, background: F.paper, color: F.ink, fontFamily: F.sans,
      display: 'flex', flexDirection: 'column' },
    main: { flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', position: 'relative' },
    dark: { background: F.night, color: F.cream, padding: '52px 44px',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
    light: { background: F.paper, padding: '52px 44px',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
    h: { fontSize: 52, lineHeight: 0.98, fontWeight: 600, letterSpacing: '-0.035em', margin: '18px 0 0' },
    hLight: { color: '#fbfaf6' },
    body: (dark) => ({ fontSize: 14.5, lineHeight: 1.6, marginTop: 18, maxWidth: 360,
      color: dark ? F.creamSoft : F.sub }),
    list: (dark) => ({ display: 'flex', flexDirection: 'column', gap: 0, marginTop: 8 }),
    li: (dark) => ({ fontFamily: F.mono, fontSize: 12.5, padding: '11px 0',
      borderTop: `1px solid ${dark ? F.nightLine : F.line}`, display: 'flex', gap: 10,
      color: dark ? F.cream : F.ink }),
    seam: { position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)',
      width: 90, height: 90, borderRadius: '50%', background: F.accent, color: '#fff',
      display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: F.mono,
      fontSize: 12, textAlign: 'center', lineHeight: 1.3, zIndex: 3,
      boxShadow: '0 8px 30px rgba(47,73,214,0.4)' },
    bar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '18px 48px', borderTop: `1px solid ${F.line}`, fontFamily: F.mono, fontSize: 12, color: F.sub },
  };
  return (
    <div style={s.root}>
      <Nav active="" />
      <div style={s.main}>
        <div style={s.dark}>
          <div>
            <Eyebrow dark color={F.signal}>Engineering</Eyebrow>
            <h2 style={{ ...s.h, ...s.hLight }}>We build it<br />to last.</h2>
            <p style={s.body(true)}>
              Type-safe, tested, observable. The code we leave behind is the code
              you'll still be proud of in two years.
            </p>
          </div>
          <div style={s.list(true)}>
            {['TypeScript · Rust · Go', 'Postgres · queues · CI/CD', '94% median test coverage'].map((l) => (
              <span key={l} style={s.li(true)}><span style={{ color: F.signal }}>→</span>{l}</span>
            ))}
          </div>
        </div>
        <div style={s.light}>
          <div>
            <Eyebrow>Design</Eyebrow>
            <h2 style={s.h}>We make it<br />make sense.</h2>
            <p style={s.body(false)}>
              Interface, interaction and systems designed in the browser. Calm,
              durable, and built to be handed off — not admired in Figma.
            </p>
          </div>
          <div style={s.list(false)}>
            {['Product & interaction design', 'Design systems in code', 'Prototypes users can touch'].map((l) => (
              <span key={l} style={s.li(false)}><span style={{ color: F.accent }}>→</span>{l}</span>
            ))}
          </div>
        </div>
        <div style={s.seam}>design<br />×<br />eng</div>
      </div>
      <div style={s.bar}>
        <span>One pod. Both halves. Zero handoffs.</span>
        <span style={{ color: F.ink }}>Start a project →</span>
      </div>
    </div>
  );
}

// ── JOURNAL · INDEX (editorial) ──────────────────────────────────────────────
function JournalIndex() {
  const posts = [
    ['2026.05.18', 'Engineering', 'Why we still write the boring tests first', '6 min'],
    ['2026.04.02', 'Design', 'Designing in the browser, not the artboard', '9 min'],
    ['2026.03.11', 'Field notes', 'What 14 weeks actually buys you', '5 min'],
    ['2026.02.20', 'AI', 'Evals before agents: a builder\u2019s order of operations', '11 min'],
  ];
  const s = {
    root: { width: W, height: H, background: F.paper, color: F.ink, fontFamily: F.sans,
      display: 'flex', flexDirection: 'column' },
    head: { padding: '46px 48px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' },
    h1: { fontSize: 58, lineHeight: 0.95, fontWeight: 600, letterSpacing: '-0.035em', margin: '16px 0 0' },
    sub: { fontFamily: F.mono, fontSize: 12, color: F.sub },
    body: { flex: 1, display: 'grid', gridTemplateColumns: '1.2fr 1fr', borderTop: `1px solid ${F.lineInk}` },
    feature: { padding: '30px 36px 30px 48px', borderRight: `1px solid ${F.line}`,
      display: 'flex', flexDirection: 'column' },
    fShot: { flex: 1, marginBottom: 22, minHeight: 0 },
    fCat: { fontFamily: F.mono, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: F.accent },
    fTitle: { fontFamily: F.serif, fontSize: 34, lineHeight: 1.08, fontWeight: 500, letterSpacing: '-0.01em',
      marginTop: 12 },
    fMeta: { fontFamily: F.mono, fontSize: 11.5, color: F.faint, marginTop: 14 },
    list: { display: 'flex', flexDirection: 'column' },
    item: { flex: 1, padding: '0 48px 0 36px', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', borderBottom: `1px solid ${F.line}` },
    date: { fontFamily: F.mono, fontSize: 11, color: F.faint, letterSpacing: '0.04em' },
    cat: { fontFamily: F.mono, fontSize: 11, color: F.accent, marginLeft: 12 },
    title: { fontFamily: F.serif, fontSize: 21, lineHeight: 1.2, fontWeight: 500, marginTop: 8 },
  };
  return (
    <div style={s.root}>
      <Nav active="Journal" />
      <div style={s.head}>
        <div>
          <Eyebrow>Writing from the studio</Eyebrow>
          <h1 style={s.h1}>The Field Journal</h1>
        </div>
        <div style={s.sub}>32 entries · since 2018</div>
      </div>
      <div style={s.body}>
        <div style={s.feature}>
          <Slot label="Lead illustration" style={{ ...s.fShot, borderRadius: 2 }} />
          <div style={s.fCat}>Featured · Engineering</div>
          <div style={s.fTitle}>The codebase is the deliverable. Everything else is conversation.</div>
          <div style={s.fMeta}>2026.06.01 — Anya Iqbal · 8 min read</div>
        </div>
        <div style={s.list}>
          {posts.map((p, i) => (
            <div key={p[2]} style={{ ...s.item, borderBottom: i === posts.length - 1 ? 'none' : s.item.borderBottom }}>
              <div>
                <span style={s.date}>{p[0]}</span><span style={s.cat}>{p[1]}</span>
              </div>
              <div style={s.title}>{p[2]}</div>
              <div style={{ ...s.date, marginTop: 8 }}>{p[3]} read →</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── JOURNAL · ARTICLE (reading view) ─────────────────────────────────────────
function JournalArticle() {
  const s = {
    root: { width: W, height: H, background: F.paper, color: F.ink, fontFamily: F.sans,
      display: 'flex', flexDirection: 'column' },
    main: { flex: 1, display: 'grid', gridTemplateColumns: '1fr 640px 1fr', overflow: 'hidden' },
    rail: { padding: '44px 36px', borderRight: `1px solid ${F.line}` },
    railR: { padding: '44px 36px', borderLeft: `1px solid ${F.line}` },
    railLbl: { fontFamily: F.mono, fontSize: 10.5, letterSpacing: '0.12em', textTransform: 'uppercase',
      color: F.faint, marginBottom: 10 },
    railRow: { fontFamily: F.mono, fontSize: 12, color: F.sub, padding: '8px 0',
      borderTop: `1px solid ${F.line}` },
    col: { padding: '44px 48px', display: 'flex', flexDirection: 'column', overflow: 'hidden' },
    cat: { fontFamily: F.mono, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: F.accent },
    h1: { fontFamily: F.serif, fontSize: 44, lineHeight: 1.05, fontWeight: 500, letterSpacing: '-0.01em',
      margin: '16px 0 0' },
    byline: { fontFamily: F.mono, fontSize: 12, color: F.faint, marginTop: 18,
      paddingBottom: 22, borderBottom: `1px solid ${F.line}` },
    p: { fontFamily: F.serif, fontSize: 18, lineHeight: 1.62, color: '#2a2820', marginTop: 20 },
    quote: { fontFamily: F.serif, fontSize: 26, lineHeight: 1.32, fontWeight: 500, color: F.accent,
      borderLeft: `2px solid ${F.accent}`, paddingLeft: 22, margin: '26px 0' },
  };
  return (
    <div style={s.root}>
      <Nav active="Journal" />
      <div style={s.main}>
        <div style={s.rail}>
          <div style={s.railLbl}>Contents</div>
          {['The brief', 'Why tests first', 'The handoff', 'What we\u2019d change'].map((c) => (
            <div key={c} style={s.railRow}>{c}</div>
          ))}
        </div>
        <div style={s.col}>
          <div style={s.cat}>Engineering · 2026.05.18</div>
          <h1 style={s.h1}>Why we still write the boring tests first</h1>
          <div style={s.byline}>Anya Iqbal · 6 min read · Field Journal No. 31</div>
          <p style={s.p}>
            Every engagement begins the same quiet way: before a single screen is
            designed, we write the test that proves the thing we're afraid of can't
            silently break. It isn't glamorous, and it never demos well.
          </p>
          <div style={s.quote}>"The test you write on day one is a promise you keep on day ninety."</div>
          <p style={s.p}>
            What it buys you is the freedom to move fast later without holding your
            breath — the kind of confidence that lets a small team ship like a large one.
          </p>
        </div>
        <div style={s.railR}>
          <div style={s.railLbl}>This piece</div>
          <div style={s.railRow}>Filed under · Eng</div>
          <div style={s.railRow}>Read · 6 min</div>
          <div style={s.railRow}>Share · ↗</div>
        </div>
      </div>
    </div>
  );
}

// ── CAREERS (dark ledger) ────────────────────────────────────────────────────
function Careers() {
  const roles = [
    ['Senior Product Engineer', 'Engineering', 'Remote · EU/US', 'Full-time'],
    ['Staff Designer', 'Design', 'Brooklyn / Lisbon', 'Full-time'],
    ['Mobile Engineer', 'Engineering', 'Remote · EU', 'Full-time'],
    ['Product Manager', 'Product', 'Lisbon', 'Full-time'],
  ];
  const s = {
    root: { width: W, height: H, background: F.night, color: F.cream, fontFamily: F.sans,
      display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' },
    glow: { position: 'absolute', width: 600, height: 600, borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(205,242,74,0.10), transparent 62%)',
      right: -200, top: -240, pointerEvents: 'none' },
    head: { padding: '48px 48px 30px', display: 'grid', gridTemplateColumns: '1fr 380px',
      alignItems: 'end', gap: 40, position: 'relative', zIndex: 2 },
    h1: { fontSize: 60, lineHeight: 0.95, fontWeight: 600, letterSpacing: '-0.035em',
      margin: '18px 0 0', color: '#fbfaf6' },
    side: { fontSize: 15, lineHeight: 1.6, color: F.creamSoft },
    th: { display: 'grid', gridTemplateColumns: '2fr 1fr 1.2fr 0.8fr 80px',
      padding: '13px 48px', fontFamily: F.mono, fontSize: 10.5, letterSpacing: '0.14em',
      textTransform: 'uppercase', color: F.creamSoft, borderTop: `1px solid ${F.nightLine}`,
      borderBottom: `1px solid ${F.nightLine}`, position: 'relative', zIndex: 2 },
    list: { flex: 1, display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 2 },
    tr: { display: 'grid', gridTemplateColumns: '2fr 1fr 1.2fr 0.8fr 80px',
      padding: '0 48px', alignItems: 'center', flex: 1, borderBottom: `1px solid ${F.nightLine}` },
    role: { fontSize: 25, fontWeight: 600, letterSpacing: '-0.025em' },
    cell: { fontFamily: F.mono, fontSize: 12.5, color: F.creamSoft },
    apply: { fontFamily: F.mono, fontSize: 12, color: F.signal, textAlign: 'right' },
  };
  return (
    <div style={s.root}>
      <div style={s.glow}></div>
      <Nav dark active="Studio" />
      <div style={s.head}>
        <div>
          <Eyebrow dark color={F.signal}>Careers · 4 open</Eyebrow>
          <h1 style={s.h1}>Build with people<br />who finish things.</h1>
        </div>
        <div style={s.side}>
          No junior bench, no billable-hours pressure. Senior people, real
          ownership, and a four-day cadence we actually keep.
        </div>
      </div>
      <div style={s.th}>
        <span>Role</span><span>Team</span><span>Location</span><span>Type</span><span></span>
      </div>
      <div style={s.list}>
        {roles.map((r, i) => (
          <div key={r[0]} style={{ ...s.tr, borderBottom: i === roles.length - 1 ? 'none' : s.tr.borderBottom }}>
            <span style={s.role}>{r[0]}</span>
            <span style={s.cell}>{r[1]}</span>
            <span style={s.cell}>{r[2]}</span>
            <span style={s.cell}>{r[3]}</span>
            <span style={s.apply}>Apply →</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── PROOF WALL (testimonials + metrics) ──────────────────────────────────────
function ProofWall() {
  const s = {
    root: { width: W, height: H, background: F.paper, color: F.ink, fontFamily: F.sans,
      display: 'flex', flexDirection: 'column' },
    head: { padding: '44px 48px 26px' },
    h1: { fontSize: 54, lineHeight: 0.96, fontWeight: 600, letterSpacing: '-0.035em', margin: '16px 0 0' },
    grid: { flex: 1, display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr',
      gridTemplateRows: '1fr 1fr', borderTop: `1px solid ${F.lineInk}` },
    cell: { borderRight: `1px solid ${F.line}`, borderBottom: `1px solid ${F.line}`,
      padding: '26px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
    big: { gridRow: '1 / 3', background: F.ink, color: F.paper },
    quoteBig: { fontFamily: F.serif, fontSize: 30, lineHeight: 1.28, fontWeight: 500, letterSpacing: '-0.01em' },
    quote: { fontFamily: F.serif, fontSize: 18, lineHeight: 1.4, fontWeight: 500 },
    by: { fontFamily: F.mono, fontSize: 11.5, color: F.faint, marginTop: 16 },
    byDark: { fontFamily: F.mono, fontSize: 11.5, color: 'rgba(240,237,228,0.6)', marginTop: 16 },
    statN: { fontSize: 44, fontWeight: 600, letterSpacing: '-0.03em', color: F.accent },
    statL: { fontFamily: F.mono, fontSize: 10.5, letterSpacing: '0.1em', textTransform: 'uppercase',
      color: F.faint, marginTop: 8 },
  };
  return (
    <div style={s.root}>
      <Nav active="Work" />
      <div style={s.head}>
        <Eyebrow>Proof</Eyebrow>
        <h1 style={s.h1}>What founders say<br />after we leave.</h1>
      </div>
      <div style={s.grid}>
        <div style={{ ...s.cell, ...s.big }}>
          <div style={s.quoteBig}>"They shipped faster than our last in-house team did in a year — and the code was cleaner."</div>
          <div style={s.byDark}>— Maya Khanna, CEO · Halid</div>
        </div>
        <div style={s.cell}>
          <div style={s.statN}>+38<span style={{ fontSize: 26 }}>pts</span></div>
          <div style={s.statL}>Activation · Pavilion</div>
        </div>
        <div style={{ ...s.cell, borderRight: 'none' }}>
          <div style={s.statN}>4.9★</div>
          <div style={s.statL}>App Store · Tide</div>
        </div>
        <div style={s.cell}>
          <div style={s.quote}>"The only studio that handed us a runbook, not a goodbye."</div>
          <div style={s.by}>— Toma, VP Eng · Pace//Form</div>
        </div>
        <div style={{ ...s.cell, borderRight: 'none' }}>
          <div style={s.quote}>"Senior from day one. No managing up."</div>
          <div style={s.by}>— Aanya R., Founder · Werner</div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { HomeBold, HomeSplit, JournalIndex, JournalArticle, Careers, ProofWall });
