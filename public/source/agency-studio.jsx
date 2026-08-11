// ─────────────────────────────────────────────────────────────────────────────
// STUDIO — about, engagement models, contact + App bootstrap
// About A · Team (light)   About B · Manifesto (dark)
// Pricing A · Model cards (light)   Pricing B · Engagement ledger (dark)
// Contact (light) · then the DesignCanvas that hosts the whole set.
// ─────────────────────────────────────────────────────────────────────────────
const F = window.FIELD;
const { Slot, Mark, Nav, Eyebrow, Footer } = window;
const W = F.W, H = F.H;

// ── ABOUT A · TEAM (light) ───────────────────────────────────────────────────
function AboutTeam() {
  const team = [
    ['Anya Iqbal', 'Founder · Eng', '#1f2b6b'],
    ['Toma Brandt', 'Design lead', '#244038'],
    ['V. Lev', 'Staff engineer', '#5a3a72'],
    ['Aanya R.', 'Product', '#6b4a1f'],
    ['Mara Cole', 'Mobile', '#1f4d5a'],
  ];
  const s = {
    root: { width: W, height: H, background: F.paper, color: F.ink, fontFamily: F.sans,
      display: 'flex', flexDirection: 'column' },
    head: { padding: '46px 48px 30px', display: 'grid', gridTemplateColumns: '1fr 400px',
      alignItems: 'end', gap: 40 },
    h1: { fontSize: 58, lineHeight: 0.96, fontWeight: 600, letterSpacing: '-0.035em', margin: '18px 0 0' },
    side: { fontSize: 15, lineHeight: 1.55, color: F.sub },
    row: { flex: 1, display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)',
      borderTop: `1px solid ${F.lineInk}` },
    person: { borderRight: `1px solid ${F.line}`, display: 'flex', flexDirection: 'column' },
    photo: { flex: 1, position: 'relative', overflow: 'hidden',
      backgroundImage: 'repeating-linear-gradient(45deg, transparent 0 16px, rgba(255,255,255,0.05) 16px 17px)' },
    pMeta: { padding: '16px 18px', borderTop: `1px solid ${F.line}` },
    pName: { fontSize: 17, fontWeight: 600, letterSpacing: '-0.02em' },
    pRole: { fontFamily: F.mono, fontSize: 11, color: F.faint, marginTop: 5, letterSpacing: '0.02em' },
  };
  return (
    <div style={s.root}>
      <Nav active="Studio" />
      <div style={s.head}>
        <div>
          <Eyebrow>The studio</Eyebrow>
          <h1 style={s.h1}>Small on purpose.<br />Senior by default.</h1>
        </div>
        <div style={s.side}>
          Fourteen people, no junior bench, no account managers. The people who
          pitch you are the people who build it — that's the whole model.
        </div>
      </div>
      <div style={s.row}>
        {team.map((p, i) => (
          <div key={p[0]} style={{ ...s.person, borderRight: i === 4 ? 'none' : s.person.borderRight }}>
            <div style={{ ...s.photo, background: p[2] }}></div>
            <div style={s.pMeta}>
              <div style={s.pName}>{p[0]}</div>
              <div style={s.pRole}>{p[1]}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── ABOUT B · MANIFESTO (dark) ───────────────────────────────────────────────
function AboutManifesto() {
  const s = {
    root: { width: W, height: H, background: F.night, color: F.cream, fontFamily: F.sans,
      display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' },
    glow: { position: 'absolute', width: 640, height: 640, borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(47,73,214,0.18), transparent 62%)',
      left: -200, bottom: -260, pointerEvents: 'none' },
    main: { flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: '0 48px', position: 'relative', zIndex: 2 },
    big: { fontSize: 50, lineHeight: 1.12, fontWeight: 500, letterSpacing: '-0.03em',
      maxWidth: 1000, margin: 0, color: '#fbfaf6' },
    dim: { color: F.creamSoft },
    sig: { color: F.signal },
    row: { display: 'flex', gap: 48, marginTop: 48 },
    stat: { },
    sN: { fontSize: 34, fontWeight: 600, letterSpacing: '-0.03em' },
    sL: { fontFamily: F.mono, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase',
      color: F.creamSoft, marginTop: 6 },
  };
  return (
    <div style={s.root}>
      <div style={s.glow}></div>
      <Nav dark active="Studio" />
      <div style={s.main}>
        <Eyebrow dark color={F.signal}>What we believe</Eyebrow>
        <p style={{ ...s.big, marginTop: 26 }}>
          <span className="manifesto">Software is a craft, not a deliverable.</span>{' '}
          <span style={s.dim}>We'd rather ship one thing that works than ten that demo.
          We write the boring tests, sweat the empty states, and stay until the
          first real users are happy. </span>
          <span style={s.sig}>Then we hand you the keys.</span>
        </p>
        <div style={s.row}>
          <div style={s.stat}><div style={s.sN}>2017</div><div style={s.sL}>Founded</div></div>
          <div style={s.stat}><div style={s.sN}>14</div><div style={s.sL}>People</div></div>
          <div style={s.stat}><div style={s.sN}>41</div><div style={s.sL}>Products shipped</div></div>
          <div style={s.stat}><div style={s.sN}>0</div><div style={s.sL}>Account managers</div></div>
        </div>
      </div>
      <Footer dark />
    </div>
  );
}

// ── PRICING A · MODEL CARDS (light) ──────────────────────────────────────────
function PricingCards() {
  const models = [
    ['Design sprint', 'Fixed · 2 wks', 'A focused burst to de-risk an idea. Prototype, user test, and a build plan you own.',
      ['Senior designer + eng', 'Clickable prototype', 'Scoped roadmap'], false],
    ['Embedded pod', 'Monthly · retainer', 'A full design + engineering team plugged into your roadmap. Our most common engagement.',
      ['2–4 senior people', 'Weekly demos', 'Production from week 1', 'On-call handoff'], true],
    ['Project build', 'Fixed scope', 'A defined product, start to launch, on a fixed timeline and a fixed number.',
      ['Scoped statement of work', 'Milestone billing', 'Documented handoff'], false],
  ];
  const s = {
    root: { width: W, height: H, background: F.paper, color: F.ink, fontFamily: F.sans,
      display: 'flex', flexDirection: 'column' },
    head: { padding: '44px 48px 26px' },
    h1: { fontSize: 54, lineHeight: 0.96, fontWeight: 600, letterSpacing: '-0.035em', margin: '16px 0 0' },
    grid: { flex: 1, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
      borderTop: `1px solid ${F.lineInk}` },
    card: (hl) => ({ borderRight: `1px solid ${F.line}`, padding: '28px 28px',
      display: 'flex', flexDirection: 'column', background: hl ? F.ink : 'transparent',
      color: hl ? F.paper : F.ink }),
    tag: (hl) => ({ fontFamily: F.mono, fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase',
      color: hl ? F.signal : F.accent }),
    name: { fontSize: 28, fontWeight: 600, letterSpacing: '-0.025em', marginTop: 14 },
    desc: (hl) => ({ fontSize: 13.5, lineHeight: 1.5, color: hl ? 'rgba(240,237,228,0.7)' : F.sub, marginTop: 12 }),
    ul: { listStyle: 'none', padding: 0, margin: '22px 0 0', flex: 1 },
    li: (hl) => ({ fontSize: 13.5, padding: '9px 0', borderTop: `1px solid ${hl ? F.nightLine : F.line}`,
      display: 'flex', gap: 9, color: hl ? F.cream : F.ink }),
    btn: (hl) => ({ marginTop: 16, textAlign: 'center', padding: '12px', borderRadius: 2,
      fontSize: 13, fontWeight: 600, background: hl ? F.signal : F.ink, color: hl ? F.night : F.paper }),
  };
  return (
    <div style={s.root}>
      <Nav active="Studio" />
      <div style={s.head}>
        <Eyebrow>Engagement models</Eyebrow>
        <h1 style={s.h1}>Three ways to<br />work with us.</h1>
      </div>
      <div style={s.grid}>
        {models.map((m, i) => (
          <div key={m[0]} style={{ ...s.card(m[4]), borderRight: i === 2 ? 'none' : `1px solid ${F.line}` }}>
            <div style={s.tag(m[4])}>{m[1]}</div>
            <div style={s.name}>{m[0]}</div>
            <div style={s.desc(m[4])}>{m[2]}</div>
            <ul style={s.ul}>
              {m[3].map((f) => (
                <li key={f} style={s.li(m[4])}>
                  <span style={{ color: m[4] ? F.signal : F.accent }}>→</span>{f}
                </li>
              ))}
            </ul>
            <div style={s.btn(m[4])}>{m[4] ? 'Most teams start here' : 'Enquire'}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── PRICING B · ENGAGEMENT LEDGER (dark) ─────────────────────────────────────
function PricingLedger() {
  const rows = [
    ['Design sprint', '2 weeks', '1 designer · 1 eng', 'Prototype + plan', 'from $28k'],
    ['Embedded pod', 'Monthly', '2–4 senior', 'Continuous delivery', 'from $48k/mo'],
    ['Project build', 'Fixed', 'Scoped team', 'Launch + handoff', 'quoted'],
    ['Advisory', 'Fractional', 'Founder / staff', 'Architecture · hiring', 'from $9k/mo'],
  ];
  const s = {
    root: { width: W, height: H, background: F.night, color: F.cream, fontFamily: F.sans,
      display: 'flex', flexDirection: 'column' },
    main: { flex: 1, display: 'grid', gridTemplateColumns: '0.85fr 1.15fr' },
    left: { padding: '54px 48px', borderRight: `1px solid ${F.nightLine}`,
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
    h1: { fontSize: 54, lineHeight: 0.96, fontWeight: 600, letterSpacing: '-0.035em',
      margin: '20px 0 0', color: '#fbfaf6' },
    lede: { fontSize: 15, lineHeight: 1.6, color: F.creamSoft, maxWidth: 360, marginTop: 22 },
    note: { fontFamily: F.mono, fontSize: 11, color: F.creamSoft, letterSpacing: '0.04em' },
    list: { display: 'flex', flexDirection: 'column' },
    th: { display: 'grid', gridTemplateColumns: '1.2fr 0.8fr 1.2fr 1fr',
      padding: '14px 40px', fontFamily: F.mono, fontSize: 10.5, letterSpacing: '0.12em',
      textTransform: 'uppercase', color: F.creamSoft, borderBottom: `1px solid ${F.nightLine}` },
    tr: { display: 'grid', gridTemplateColumns: '1.2fr 0.8fr 1.2fr 1fr',
      padding: '0 40px', alignItems: 'center', flex: 1, borderBottom: `1px solid ${F.nightLine}` },
    name: { fontSize: 21, fontWeight: 600, letterSpacing: '-0.02em' },
    cell: { fontFamily: F.mono, fontSize: 12.5, color: F.creamSoft },
    price: { fontFamily: F.mono, fontSize: 13.5, color: F.signal },
  };
  return (
    <div style={s.root}>
      <Nav dark active="Studio" />
      <div style={s.main}>
        <div style={s.left}>
          <div>
            <Eyebrow dark color={F.signal}>Rates</Eyebrow>
            <h1 style={s.h1}>Priced like<br />a partner, not<br />a marketplace.</h1>
            <p style={s.lede}>
              Flat monthly or fixed scope. No per-seat games, no surprise change
              orders. You always know the number before we start.
            </p>
          </div>
          <div style={s.note}>All figures USD · 2026 · ex-tax</div>
        </div>
        <div style={s.list}>
          <div style={s.th}><span>Model</span><span>Cadence</span><span>Team</span><span style={{ textAlign: 'right' }}>From</span></div>
          {rows.map((r, i) => (
            <div key={r[0]} style={{ ...s.tr, borderBottom: i === rows.length - 1 ? 'none' : s.tr.borderBottom }}>
              <span style={s.name}>{r[0]}</span>
              <span style={s.cell}>{r[1]}</span>
              <span style={s.cell}>{r[2]}</span>
              <span style={{ ...s.price, textAlign: 'right' }}>{r[4]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── CONTACT (light) ──────────────────────────────────────────────────────────
function Contact() {
  const s = {
    root: { width: W, height: H, background: F.paper, color: F.ink, fontFamily: F.sans,
      display: 'flex', flexDirection: 'column' },
    main: { flex: 1, display: 'grid', gridTemplateColumns: '1.1fr 1fr' },
    left: { padding: '54px 48px', borderRight: `1px solid ${F.line}`,
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
    h1: { fontSize: 66, lineHeight: 0.94, fontWeight: 600, letterSpacing: '-0.04em', margin: '20px 0 0' },
    lede: { fontSize: 17, lineHeight: 1.5, color: F.sub, maxWidth: 420, marginTop: 22 },
    details: { display: 'flex', flexDirection: 'column', gap: 14, marginTop: 8 },
    dRow: { display: 'flex', justifyContent: 'space-between', padding: '12px 0',
      borderTop: `1px solid ${F.line}`, fontFamily: F.mono, fontSize: 12.5 },
    dK: { color: F.faint }, dV: { color: F.ink },
    right: { padding: '54px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' },
    label: { fontFamily: F.mono, fontSize: 10.5, letterSpacing: '0.12em', textTransform: 'uppercase',
      color: F.faint, marginBottom: 8 },
    field: { padding: '13px 14px', border: `1px solid ${F.line}`, background: '#fff', borderRadius: 2,
      fontFamily: F.sans, fontSize: 14, color: F.sub, marginBottom: 18 },
    twoCol: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 },
    pills: { display: 'flex', gap: 8, marginBottom: 22, flexWrap: 'wrap' },
    pill: (on) => ({ padding: '8px 13px', borderRadius: 999, fontSize: 12.5, fontFamily: F.mono,
      border: `1px solid ${on ? F.ink : F.line}`, background: on ? F.ink : 'transparent',
      color: on ? F.paper : F.sub }),
    submit: { background: F.accent, color: '#fff', padding: '15px', borderRadius: 2,
      fontSize: 14, fontWeight: 600, textAlign: 'center', letterSpacing: '-0.01em' },
  };
  return (
    <div style={s.root}>
      <Nav active="" />
      <div style={s.main}>
        <div style={s.left}>
          <div>
            <Eyebrow>Start a project</Eyebrow>
            <h1 style={s.h1}>Tell us what<br />you're building.</h1>
            <p style={s.lede}>
              We take on a handful of new engagements each quarter. The more
              specific you are, the faster we can tell you if we're a fit.
            </p>
          </div>
          <div style={s.details}>
            <div style={s.dRow}><span style={s.dK}>email</span><span style={s.dV}>hello@field.studio</span></div>
            <div style={s.dRow}><span style={s.dK}>studios</span><span style={s.dV}>Brooklyn · Lisbon</span></div>
            <div style={s.dRow}><span style={s.dK}>response</span><span style={s.dV}>within 2 business days</span></div>
          </div>
        </div>
        <div style={s.right}>
          <div style={s.pills}>
            <span style={s.pill(true)}>Embedded pod</span>
            <span style={s.pill(false)}>Design sprint</span>
            <span style={s.pill(false)}>Project build</span>
            <span style={s.pill(false)}>Advisory</span>
          </div>
          <div style={s.twoCol}>
            <div><div style={s.label}>Name</div><div style={s.field}>Jordan Reyes</div></div>
            <div><div style={s.label}>Company</div><div style={s.field}>Acme, Inc.</div></div>
          </div>
          <div style={s.label}>What are you building?</div>
          <div style={{ ...s.field, height: 86, paddingTop: 13 }}>A treasury product for mid-market finance teams…</div>
          <div style={s.submit}>Send brief →</div>
        </div>
      </div>
    </div>
  );
}

// ── CANVAS ───────────────────────────────────────────────────────────────────
function App() {
  return (
    <DesignCanvas>
      <DCSection id="home" title="Home / Landing — Three Directions"
        subtitle="One brand, Field — a product studio. Each board pairs the type system with a different homepage strategy. Drag to reorder, click expand to focus.">
        <DCArtboard id="home-statement" label="01 · Statement (light)" width={W} height={H}><HomeStatement /></DCArtboard>
        <DCArtboard id="home-spec" label="02 · Spec / Night (dark)" width={W} height={H}><HomeSpec /></DCArtboard>
        <DCArtboard id="home-index" label="03 · Index (Swiss)" width={W} height={H}><HomeIndex /></DCArtboard>
      </DCSection>

      <DCSection id="services" title="Services & Process"
        subtitle="Capabilities and the engagement loop, light + dark takes.">
        <DCArtboard id="svc-matrix" label="04 · Capability matrix (light)" width={W} height={H}><ServicesMatrix /></DCArtboard>
        <DCArtboard id="svc-list" label="05 · Numbered services (dark)" width={W} height={H}><ServicesList /></DCArtboard>
        <DCArtboard id="process" label="06 · Process — Map·Make·Ship·Tend" width={W} height={H}><Process /></DCArtboard>
      </DCSection>

      <DCSection id="work" title="Work — Index & Case Study"
        subtitle="Two ways to list the portfolio, two ways to tell one case.">
        <DCArtboard id="work-grid" label="07 · Case grid (light)" width={W} height={H}><WorkGrid /></DCArtboard>
        <DCArtboard id="work-ledger" label="08 · Ledger (dark)" width={W} height={H}><WorkLedger /></DCArtboard>
        <DCArtboard id="case-editorial" label="09 · Case — Editorial (light)" width={W} height={H}><CaseEditorial /></DCArtboard>
        <DCArtboard id="case-spec" label="10 · Case — Spec sheet (dark)" width={W} height={H}><CaseSpec /></DCArtboard>
      </DCSection>

      <DCSection id="studio" title="Studio — About, Pricing & Contact"
        subtitle="Team, engagement models, and the front door.">
        <DCArtboard id="about-team" label="11 · About — Team (light)" width={W} height={H}><AboutTeam /></DCArtboard>
        <DCArtboard id="about-manifesto" label="12 · About — Manifesto (dark)" width={W} height={H}><AboutManifesto /></DCArtboard>
        <DCArtboard id="pricing-cards" label="13 · Engagement — Cards (light)" width={W} height={H}><PricingCards /></DCArtboard>
        <DCArtboard id="pricing-ledger" label="14 · Engagement — Ledger (dark)" width={W} height={H}><PricingLedger /></DCArtboard>
        <DCArtboard id="contact" label="15 · Contact — Start a project" width={W} height={H}><Contact /></DCArtboard>
      </DCSection>

      <DCSection id="home-more" title="Home — More Directions"
        subtitle="Two further homepage strategies: a bold display take and a design × engineering split.">
        <DCArtboard id="home-bold" label="16 · Bold display (light)" width={W} height={H}><window.HomeBold /></DCArtboard>
        <DCArtboard id="home-split" label="17 · Split — design × eng" width={W} height={H}><window.HomeSplit /></DCArtboard>
      </DCSection>

      <DCSection id="journal" title="Journal & Culture"
        subtitle="New page types — editorial journal, a reading view, open roles, and a proof wall.">
        <DCArtboard id="journal-index" label="18 · Journal — Index" width={W} height={H}><window.JournalIndex /></DCArtboard>
        <DCArtboard id="journal-article" label="19 · Journal — Article" width={W} height={H}><window.JournalArticle /></DCArtboard>
        <DCArtboard id="careers" label="20 · Careers (dark)" width={W} height={H}><window.Careers /></DCArtboard>
        <DCArtboard id="proof-wall" label="21 · Proof wall" width={W} height={H}><window.ProofWall /></DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
