// Industry dashboards — knowledge & culture: legal, insurance, people, studio.

const K_DW = 1280;
const K_DH = 800;

function KSpark(props) { return window.IDSpark(props); }

// 09 — MATTER BOARD. Legal stationery, blue rules, court week, billable.
function DashDocket() {
  const matters = [
    ['HAL-441', 'Halid v. Northstar', 'Disc.', '£184k', 'hot'],
    ['MAI-118', 'Maison Calva SPA', 'Draft', '£42k', ''],
    ['LIN-902', 'Linear Labs Series C', 'Sign', '£96k', 'hot'],
    ['WER-055', 'Werner Institute', 'Adv.', '£28k', ''],
    ['PEB-310', 'Pebble Press NDA', 'Close', '£6k', ''],
    ['NOR-774', 'Nordheim employment', 'Hear.', '£51k', 'due'],
  ];
  const s = {
    root: { width: K_DW, height: K_DH, background: '#f4f1ea', color: '#111', fontFamily: '"Newsreader", Georgia, serif', display: 'flex', flexDirection: 'column' },
    top: { display: 'flex', justifyContent: 'space-between', alignItems: 'end', padding: '18px 28px 14px', borderBottom: '3px solid #1e4fd6' },
    body: { flex: 1, display: 'grid', gridTemplateColumns: '1.15fr 1.1fr .85fr', minHeight: 0 },
    col: { padding: 18, borderRight: '1px solid #d8d3c8' },
    row: { display: 'grid', gridTemplateColumns: '70px 1fr 54px 58px', gap: 8, padding: '9px 0', borderBottom: '1px solid #e4dfd4', fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, alignItems: 'center' },
    cal: { display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8, marginTop: 12 },
    day: { borderTop: '2px solid #111', paddingTop: 8, minHeight: 210 },
  };
  const week = [
    ['Mon 17', [['09:30', 'Nordheim hearing'], ['14:00', 'Halid depo']]],
    ['Tue 18', [['11:00', 'Linear close call']]],
    ['Wed 19', [['08:30', 'Partners'], ['16:00', 'Calva redline']]],
    ['Thu 20', [['10:00', 'Werner advice']]],
    ['Fri 21', [['Filing', 'Pebble NDA']]],
  ];
  return (
    <div style={s.root}>
      <div style={s.top}>
        <div>
          <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, letterSpacing: '0.16em', color: '#1e4fd6' }}>DOCKET · CHAMBERS</div>
          <div style={{ fontSize: 38, fontWeight: 600, letterSpacing: '-0.04em' }}>Matter board</div>
        </div>
        <div style={{ display: 'flex', gap: 28, fontFamily: '"IBM Plex Mono", monospace', fontSize: 12 }}>
          {[['Billable', '6.4h'], ['WIP', '£407k'], ['Due 7d', '4'], ['Util.', '82%']].map(([l, n]) => (
            <div key={l}><div style={{ color: '#6a665c' }}>{l}</div><div style={{ fontSize: 20 }}>{n}</div></div>
          ))}
        </div>
      </div>
      <div style={s.body}>
        <div style={s.col}>
          <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, letterSpacing: '0.1em', color: '#6a665c', marginBottom: 8 }}>OPEN MATTERS</div>
          {matters.map((m) => (
            <div key={m[0]} style={s.row}>
              <b style={{ color: '#1e4fd6' }}>{m[0]}</b>
              <span style={{ fontFamily: '"Newsreader", serif', fontSize: 14 }}>{m[1]}</span>
              <span>{m[2]}</span>
              <span style={{ color: m[4] === 'hot' ? '#1e4fd6' : m[4] === 'due' ? '#9a3b2f' : '#111', fontWeight: 700 }}>{m[3]}</span>
            </div>
          ))}
          <div style={{ marginTop: 16, padding: 12, border: '1px dashed #1e4fd6', fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, color: '#1e4fd6' }}>
            Conflict check clear · 2 new intakes today
          </div>
        </div>
        <div style={s.col}>
          <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, letterSpacing: '0.1em', color: '#6a665c' }}>COURT WEEK</div>
          <div style={s.cal}>
            {week.map(([d, ev]) => (
              <div key={d} style={s.day}>
                <b style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 11 }}>{d}</b>
                {ev.map((e) => (
                  <div key={e[1]} style={{ marginTop: 10, fontSize: 13, lineHeight: 1.3 }}>
                    <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 10, color: '#1e4fd6' }}>{e[0]}</div>
                    {e[1]}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div style={{ ...s.col, borderRight: 0, background: '#111', color: '#f4f1ea' }}>
          <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, color: '#8a9ad6', marginBottom: 10 }}>DEADLINES · 72H</div>
          {[['Tomorrow 16:00', 'Halid privilege log'], ['Wed 09:00', 'Nordheim bundle'], ['Thu noon', 'Linear disclosure']].map((d) => (
            <div key={d[1]} style={{ padding: '12px 0', borderBottom: '1px solid #2a2a2a' }}>
              <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 10, color: '#8a9ad6' }}>{d[0]}</div>
              <div style={{ fontSize: 18 }}>{d[1]}</div>
            </div>
          ))}
          <div style={{ marginTop: 'auto', fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, color: '#8a9ad6' }}>
            Counsel: V. Lev · A. Okoye<br/>Paralegal: M. Khan
          </div>
        </div>
      </div>
    </div>
  );
}

// 10 — ADJUSTER DESK. Claim queue, catastrophe map, SLA clocks.
function DashClaimwell() {
  const claims = [
    ['CW-10482', 'Storm · roof', 'P2', '£18.4k', '4h', 'hot'],
    ['CW-10477', 'Motor · multi', 'P1', '£42.0k', '1h', 'hot'],
    ['CW-10461', 'Flood · kitchen', 'P2', '£9.2k', '9h', ''],
    ['CW-10440', 'Theft · bike', 'P3', '£1.8k', '2d', ''],
    ['CW-10412', 'Fire · garage', 'P1', '£61.5k', '3h', 'hot'],
    ['CW-10398', 'Glass · shop', 'P3', '£2.4k', '1d', ''],
    ['CW-10380', 'Liability · slip', 'P2', '£12.0k', '11h', ''],
  ];
  const s = {
    root: { width: K_DW, height: K_DH, background: '#f7f5f0', color: '#2a3340', fontFamily: '"DM Sans", system-ui, sans-serif', display: 'flex' },
    nav: { width: 188, background: '#2a3340', color: '#f7f5f0', padding: '20px 14px', display: 'flex', flexDirection: 'column', gap: 6 },
    main: { flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 },
    top: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 20px', borderBottom: '1px solid #e4e0d8' },
    body: { flex: 1, display: 'grid', gridTemplateColumns: '1.25fr .85fr', minHeight: 0 },
    row: { display: 'grid', gridTemplateColumns: '88px 1.2fr 40px 70px 48px', gap: 8, padding: '9px 20px', borderBottom: '1px solid #ece8e0', fontSize: 12, alignItems: 'center' },
    map: { margin: 16, background: '#2a3340', borderRadius: 16, padding: 16, color: '#f7f5f0', position: 'relative', overflow: 'hidden' },
  };
  return (
    <div style={s.root}>
      <aside style={s.nav}>
        <div style={{ fontWeight: 800, fontSize: 18, letterSpacing: '-0.04em', marginBottom: 16 }}>Claimwell</div>
        {[['Queue', true], ['Map', false], ['Cat events', false], ['Vendors', false], ['SIU', false]].map(([l, on]) => (
          <div key={l} style={{ padding: '8px 10px', borderRadius: 8, background: on ? '#e35b2f' : 'transparent', fontSize: 13 }}>{l}</div>
        ))}
        <div style={{ marginTop: 'auto', fontSize: 11, color: '#9aa3b0' }}>Adjuster · J. Lang<br/>Region South</div>
      </aside>
      <div style={s.main}>
        <div style={s.top}>
          <div>
            <div style={{ fontSize: 11, color: '#7a828e', letterSpacing: '0.08em' }}>OPEN WORK</div>
            <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.04em' }}>42 claims · 3 P1</div>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            {[['SLA 4h', '91%'], ['Cycle', '6.2d'], ['Reserve', '£2.1m']].map(([l, n]) => (
              <div key={l} style={{ background: '#fff', border: '1px solid #e4e0d8', borderRadius: 10, padding: '8px 12px' }}>
                <div style={{ fontSize: 10, color: '#7a828e' }}>{l}</div>
                <div style={{ fontWeight: 700 }}>{n}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={s.body}>
          <div>
            <div style={{ ...s.row, color: '#7a828e', fontSize: 10, letterSpacing: '0.06em' }}>
              <span>ID</span><span>LOSS</span><span>PRI</span><span>RESERVE</span><span>AGE</span>
            </div>
            {claims.map((c) => (
              <div key={c[0]} style={{ ...s.row, background: c[5] ? '#fff4ef' : 'transparent' }}>
                <b style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 11 }}>{c[0]}</b>
                <span>{c[1]}</span>
                <span style={{ color: c[2] === 'P1' ? '#e35b2f' : '#2a3340', fontWeight: 700 }}>{c[2]}</span>
                <span>{c[3]}</span>
                <span style={{ color: c[5] ? '#e35b2f' : '#7a828e' }}>{c[4]}</span>
              </div>
            ))}
          </div>
          <div>
            <div style={s.map}>
              <div style={{ fontSize: 11, color: '#9aa3b0', letterSpacing: '0.08em' }}>CAT 24-08 · WIND CLUSTER</div>
              <div style={{ fontSize: 28, fontWeight: 700, margin: '6px 0 10px' }}>186 FNOL</div>
              <svg viewBox="0 0 280 160" width="100%" height="150">
                <rect width="280" height="160" fill="#1c2430" rx="8" />
                {[[40, 90], [70, 70], [90, 100], [120, 60], [140, 85], [170, 50], [190, 95], [220, 70], [80, 40], [150, 120]].map(([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r={i < 3 ? 9 : 5} fill={i < 3 ? '#e35b2f' : '#f0c14a'} opacity="0.85" />
                ))}
              </svg>
              <div style={{ fontSize: 12, color: '#c9c4ba', marginTop: 8 }}>Coastal strip · 14 vendors deployed · glass cap waived</div>
            </div>
            <div style={{ margin: '0 16px', padding: 14, background: '#fff', border: '1px solid #e4e0d8', borderRadius: 14 }}>
              <div style={{ fontSize: 11, color: '#7a828e' }}>TODAY’S SETTLEMENTS</div>
              <div style={{ fontSize: 26, fontWeight: 700 }}>£428k</div>
              <KSpark data={[12, 18, 14, 22, 28, 31, 42]} color="#e35b2f" fill="rgba(227,91,47,.12)" height={32} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 11 — PEOPLE OPS. Soft lavender, hiring pipeline, PTO heatmap.
function DashRoster() {
  const heat = [
    ['Maya K.', [1, 1, 1, 0, 1, 1, 1, 2]],
    ['J. Lang', [1, 1, 1, 1, 1, 0, 0, 1]],
    ['T. Okoye', [1, 2, 2, 1, 1, 1, 1, 1]],
    ['A. Perez', [0, 0, 1, 1, 1, 1, 1, 1]],
    ['M. Rahman', [1, 1, 1, 1, 2, 2, 1, 1]],
    ['V. Lev', [1, 1, 0, 1, 1, 1, 1, 1]],
  ];
  const hc = ['#efe8f8', '#c9b6ff', '#6d52ff'];
  const pipe = [
    { t: 'Sourced', n: 18, c: [['Product designer', '2'], ['Staff eng', '6'], ['CSM', '10']] },
    { t: 'Onsite', n: 7, c: [['Staff eng', '3'], ['CSM', '2'], ['Finance', '2']] },
    { t: 'Offer', n: 3, c: [['Staff eng', '1'], ['Product designer', '2']] },
  ];
  const s = {
    root: { width: K_DW, height: K_DH, background: '#f3eef8', color: '#2b2140', fontFamily: '"Manrope", system-ui, sans-serif', display: 'flex', flexDirection: 'column' },
    top: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px' },
    kpis: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, padding: '0 24px 12px' },
    kpi: { background: '#fff', borderRadius: 18, padding: 16, boxShadow: '0 10px 30px rgba(43,33,64,.05)' },
    body: { flex: 1, display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 12, padding: '0 24px 18px', minHeight: 0 },
    card: { background: '#fff', borderRadius: 20, padding: 16, boxShadow: '0 10px 30px rgba(43,33,64,.05)', display: 'flex', flexDirection: 'column' },
  };
  return (
    <div style={s.root}>
      <div style={s.top}>
        <div>
          <div style={{ fontSize: 12, color: '#7a7090', letterSpacing: '0.1em' }}>ROSTER</div>
          <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.05em' }}>People ops</div>
        </div>
        <div style={{ display: 'flex', gap: 6, background: '#fff', padding: 4, borderRadius: 999 }}>
          {['Week', 'Month', 'Q3'].map((t, i) => (
            <span key={t} style={{ padding: '7px 14px', borderRadius: 999, background: i === 0 ? '#2b2140' : 'transparent', color: i === 0 ? '#fff' : '#7a7090', fontSize: 12, fontWeight: 700 }}>{t}</span>
          ))}
        </div>
      </div>
      <div style={s.kpis}>
        {[['Headcount', '142', '+3 this month'], ['eNPS', '64', '↑ 6 pts'], ['Open roles', '11', '2 critical'], ['Time to hire', '28d', '−4d vs Q2']].map(([l, n, sbt]) => (
          <div key={l} style={s.kpi}>
            <div style={{ fontSize: 12, color: '#7a7090' }}>{l}</div>
            <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-0.05em' }}>{n}</div>
            <div style={{ fontSize: 12, color: '#6d52ff' }}>{sbt}</div>
          </div>
        ))}
      </div>
      <div style={s.body}>
        <div style={s.card}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
            <b>PTO heatmap</b>
            <span style={{ fontSize: 11, color: '#7a7090' }}>in · pto · offsite</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '90px repeat(8, 1fr)', gap: 5, fontSize: 10, color: '#7a7090', marginBottom: 6 }}>
            <span />{['M', 'T', 'W', 'T', 'F', 'M', 'T', 'W'].map((d, i) => <span key={i} style={{ textAlign: 'center' }}>{d}</span>)}
          </div>
          {heat.map(([name, days]) => (
            <div key={name} style={{ display: 'grid', gridTemplateColumns: '90px repeat(8, 1fr)', gap: 5, alignItems: 'center', marginBottom: 6 }}>
              <span style={{ fontSize: 12, fontWeight: 700 }}>{name}</span>
              {days.map((v, i) => <div key={i} style={{ height: 22, borderRadius: 6, background: hc[v] }} />)}
            </div>
          ))}
          <div style={{ marginTop: 'auto', padding: 12, background: '#efe8f8', borderRadius: 12, fontSize: 12 }}>
            Thursday is thin — 2 offsite, 1 PTO. Move the all-hands.
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
          {pipe.map((col) => (
            <div key={col.t} style={s.card}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                <b>{col.t}</b><span style={{ color: '#6d52ff' }}>{col.n}</span>
              </div>
              {col.c.map((r) => (
                <div key={r[0]} style={{ background: '#f3eef8', borderRadius: 12, padding: 10, marginBottom: 8 }}>
                  <div style={{ fontSize: 12, fontWeight: 700 }}>{r[0]}</div>
                  <div style={{ fontSize: 11, color: '#7a7090' }}>{r[1]} in stage</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 12 — STUDIO PIPELINE. Cinema dark, editorial timeline, review bins.
function DashCutRoom() {
  const eps = [
    { id: 'E01', t: 'Cold open', pct: 100, st: 'locked' },
    { id: 'E02', t: 'The letter', pct: 92, st: 'picture' },
    { id: 'E03', t: 'Night bus', pct: 61, st: 'review' },
    { id: 'E04', t: 'Harbour', pct: 28, st: 'assembly' },
    { id: 'E05', t: 'Return', pct: 8, st: 'dailies' },
  ];
  const bins = [
    ['A-roll', 48, '#f2e6c9'],
    ['B-roll', 112, '#7c9cff'],
    ['VO', 22, '#ff4d6d'],
    ['Score', 14, '#3dffc8'],
    ['GFX', 9, '#f0c14a'],
    ['VFX', 6, '#c9b6ff'],
  ];
  const s = {
    root: { width: K_DW, height: K_DH, background: '#0e0e10', color: '#f2e6c9', fontFamily: '"Inter Tight", system-ui, sans-serif', display: 'flex', flexDirection: 'column' },
    top: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px', borderBottom: '1px solid #232328' },
    body: { flex: 1, display: 'flex', flexDirection: 'column', gap: 12, padding: 16, minHeight: 0 },
    ep: { background: '#16161a', border: '1px solid #232328', borderRadius: 12, padding: 12, marginBottom: 8 },
    bins: { display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 8 },
    bin: { background: '#16161a', border: '1px solid #232328', borderRadius: 12, padding: 12, minHeight: 110 },
  };
  return (
    <div style={s.root}>
      <div style={s.top}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ width: 10, height: 10, background: '#ff4d6d' }} />
          <b style={{ letterSpacing: '0.12em', fontSize: 13 }}>CUT ROOM</b>
          <span style={{ color: '#8a8376' }}>Series 02 · Picture lock week</span>
        </div>
        <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 12, color: '#8a8376' }}>
          TC 01:14:22:08 · 23.976 · Rec.709
        </div>
      </div>
      <div style={s.body}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr .7fr', gap: 12, flex: 1, minHeight: 0 }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.12em', color: '#8a8376', marginBottom: 8 }}>EDITORIAL TIMELINE</div>
            {eps.map((e) => (
              <div key={e.id} style={s.ep}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span><b style={{ color: '#ff4d6d' }}>{e.id}</b> · {e.t}</span>
                  <span style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, color: e.st === 'review' ? '#ff4d6d' : '#8a8376' }}>{e.st.toUpperCase()}</span>
                </div>
                <div style={{ height: 8, background: '#232328', borderRadius: 99, overflow: 'hidden' }}>
                  <div style={{ width: `${e.pct}%`, height: '100%', background: e.st === 'locked' ? '#3dffc8' : e.st === 'review' ? '#ff4d6d' : '#f2e6c9' }} />
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ background: '#16161a', border: '1px solid #ff4d6d', borderRadius: 12, padding: 14 }}>
              <div style={{ fontSize: 11, color: '#ff4d6d', letterSpacing: '0.1em' }}>NOTES · E03</div>
              <div style={{ fontSize: 16, marginTop: 8, lineHeight: 1.35 }}>Lift the harbour VO 2dB. Drop shot 44 — continuity on the coat. Need alt take 7.</div>
              <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, color: '#8a8376', marginTop: 10 }}>Showrunner · 14:08</div>
            </div>
            <div style={{ background: '#16161a', border: '1px solid #232328', borderRadius: 12, padding: 14, flex: 1 }}>
              <div style={{ fontSize: 11, color: '#8a8376', marginBottom: 8 }}>COLOR PIPELINE</div>
              {[['Dailies', 'done'], ['First pass', 'live'], ['VFX pulls', '3 shots'], ['Online', 'Fri']].map((r) => (
                <div key={r[0]} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, padding: '7px 0', borderBottom: '1px solid #232328' }}>
                  <span>{r[0]}</span><span style={{ color: r[1] === 'live' ? '#ff4d6d' : '#8a8376' }}>{r[1]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={s.bins}>
          {bins.map(([n, c, col]) => (
            <div key={n} style={s.bin}>
              <div style={{ width: 18, height: 10, background: col, marginBottom: 10 }} />
              <div style={{ fontSize: 12, color: '#8a8376' }}>{n}</div>
              <div style={{ fontSize: 24, fontWeight: 700 }}>{c}</div>
              <div style={{ fontSize: 11, color: '#8a8376' }}>clips</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DashKnowledgeSection() {
  return (
    <DCSection id="dash-knowledge" title="Dashboards — Knowledge & Culture"
      subtitle="Four specialist desks: a legal matter board, an insurance adjuster queue, a people-ops heatmap, and a cinema editorial pipeline.">
      <DCArtboard id="d-docket" label="09 · Docket · Matter Board" width={K_DW} height={K_DH}><DashDocket /></DCArtboard>
      <DCArtboard id="d-claimwell" label="10 · Claimwell · Adjuster Desk" width={K_DW} height={K_DH}><DashClaimwell /></DCArtboard>
      <DCArtboard id="d-roster" label="11 · Roster · People Ops" width={K_DW} height={K_DH}><DashRoster /></DCArtboard>
      <DCArtboard id="d-cutroom" label="12 · Cut Room · Studio Pipeline" width={K_DW} height={K_DH}><DashCutRoom /></DCArtboard>
    </DCSection>
  );
}

window.DashKnowledgeSection = DashKnowledgeSection;
