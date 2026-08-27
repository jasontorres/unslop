// SaaS product consoles — sidebar shell with stats + charts.
// Activation, account health, usage billing, support.

const SW = 1280;
const SH = 800;

function SideNav({ brand, mark, markBg, ink, muted, line, activeBg, activeInk, groups, active, footer, dark, workspace }) {
  return (
    <aside style={{
      width: 240, flex: 'none', height: '100%', background: ink, color: dark ? '#f4f1ea' : '#1c1917',
      borderRight: `1px solid ${line}`, display: 'flex', flexDirection: 'column', padding: '20px 12px 14px',
      fontSize: 13,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0 8px 10px', fontWeight: 750, letterSpacing: '-0.04em', fontSize: 16 }}>
        <span style={{ width: 26, height: 26, borderRadius: 7, background: markBg, color: '#fff', display: 'grid', placeItems: 'center', fontSize: 12, fontWeight: 800 }}>{mark}</span>
        {brand}
      </div>
      {workspace && (
        <div style={{
          margin: '0 4px 16px', padding: '8px 10px', borderRadius: 8, fontSize: 12,
          background: dark ? 'rgba(255,255,255,.07)' : '#f5f5f4',
          color: dark ? '#c9c3b8' : '#57534e',
        }}>{workspace} ▾</div>
      )}
      {groups.map((g) => (
        <div key={g.label} style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: muted, padding: '6px 8px' }}>{g.label}</div>
          {g.items.map((item) => {
            const on = item === active;
            return (
              <div key={item} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '8px 10px', borderRadius: 8, marginBottom: 2,
                background: on ? activeBg : 'transparent', color: on ? activeInk : (dark ? '#c9c3b8' : '#44403c'),
                fontWeight: on ? 650 : 500,
              }}>
                <span style={{
                  width: 14, height: 14, borderRadius: 4, flex: 'none',
                  background: on ? markBg : (dark ? '#3f3f46' : '#d6d3d1'),
                }} />
                {item}
              </div>
            );
          })}
        </div>
      ))}
      <div style={{ marginTop: 'auto', padding: 10, borderRadius: 10, background: dark ? 'rgba(255,255,255,.06)' : '#f5f0eb', color: dark ? '#d6d0c6' : '#44403c', fontSize: 12 }}>
        {footer}
      </div>
    </aside>
  );
}

function Chip({ children, bg = '#fff', bd = '#e7e5e4', color = '#1c1917' }) {
  return <span style={{ padding: '6px 10px', borderRadius: 8, border: `1px solid ${bd}`, background: bg, color, fontSize: 12 }}>{children}</span>;
}

function Search({ placeholder, w = 280 }) {
  return (
    <div style={{ width: w, padding: '8px 12px', borderRadius: 8, fontSize: 13, background: '#f5f5f4', color: '#a8a29e' }}>{placeholder}</div>
  );
}

function Spark({ values, color }) {
  const w = 92, h = 34;
  const max = Math.max(...values);
  const min = Math.min(...values);
  const span = max - min || 1;
  const d = values.map((v, i) => `${i ? 'L' : 'M'} ${(i / (values.length - 1)) * w},${h - 3 - ((v - min) / span) * (h - 6)}`).join(' ');
  return <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}><path d={d} fill="none" stroke={color} strokeWidth="1.8" /></svg>;
}

function AreaChart({ a, b, color, colorB, gid, grid = '#efece8', h = 168 }) {
  const w = 560;
  const max = Math.max(...a, ...(b || []), 1);
  const x = (i, n) => (i / (n - 1)) * w;
  const y = (v) => h - 8 - (v / max) * (h - 18);
  const path = (vals) => vals.map((v, i) => `${i ? 'L' : 'M'} ${x(i, vals.length)} ${y(v)}`).join(' ');
  return (
    <svg width="100%" height="100%" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none">
      <defs>
        <linearGradient id={gid} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor={color} stopOpacity="0.28" />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map((p) => <line key={p} x1="0" y1={h * p} x2={w} y2={h * p} stroke={grid} />)}
      <path d={`${path(a)} L ${w} ${h} L 0 ${h} Z`} fill={`url(#${gid})`} />
      <path d={path(a)} fill="none" stroke={color} strokeWidth="2.3" />
      {b && <path d={path(b)} fill="none" stroke={colorB || '#a8a29e'} strokeWidth="1.6" strokeDasharray="5 4" />}
    </svg>
  );
}

function Kpi({ label, value, delta, up, spark, color, bg = '#fff', bd = '#e7e5e4' }) {
  return (
    <div style={{ background: bg, border: `1px solid ${bd}`, borderRadius: 12, padding: '12px 14px', minWidth: 0 }}>
      <div style={{ fontSize: 11, color: '#78716c' }}>{label}</div>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 8 }}>
        <div>
          <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.05em', margin: '2px 0' }}>{value}</div>
          {delta && <div style={{ fontSize: 11, fontWeight: 650, color: up ? '#15803d' : '#b45309' }}>{delta}</div>}
        </div>
        {spark && <Spark values={spark} color={color} />}
      </div>
    </div>
  );
}

function Card({ title, right, children, style }) {
  return (
    <section style={{ background: '#fff', border: '1px solid #e7e5e4', borderRadius: 12, padding: 14, display: 'flex', flexDirection: 'column', minHeight: 0, ...style }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
        <b style={{ fontSize: 13 }}>{title}</b>
        {right && <span style={{ fontSize: 11, color: '#78716c' }}>{right}</span>}
      </div>
      {children}
    </section>
  );
}

// 13 — NOCK. Activation dashboard: KPIs, daily chart, funnel.
function SaasNock() {
  const daily = [86, 91, 88, 104, 112, 97, 44, 41, 118, 126, 121, 134, 129, 98];
  const prior = [78, 82, 80, 90, 96, 88, 40, 38, 102, 108, 110, 118, 116, 90];
  const steps = [
    { name: 'Visited', n: 18420, keep: '—' },
    { name: 'Signed up', n: 4106, keep: '22%' },
    { name: 'Connected source', n: 2441, keep: '59%' },
    { name: 'Created project', n: 1580, keep: '65%' },
    { name: 'Invited teammate', n: 612, keep: '39%' },
  ];
  const max = steps[0].n;
  const stalls = [
    ['Connected source', 'OAuth timeout on Google', '312'],
    ['Created project', 'Abandoned template picker', '264'],
    ['Invited teammate', 'No seat remaining', '141'],
  ];
  return (
    <div style={{ width: SW, height: SH, display: 'flex', overflow: 'hidden', background: '#f6f4f1', color: '#1c1917', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>
      <SideNav
        brand="Nock" mark="N" markBg="#c2410c" ink="#fff" muted="#a8a29e" line="#e7e5e4"
        activeBg="#fff7ed" activeInk="#c2410c"
        workspace="nock-prod"
        groups={[
          { label: 'Analyze', items: ['Activation', 'Retention', 'Paths'] },
          { label: 'Build', items: ['Audiences', 'Definitions', 'Guides'] },
        ]}
        active="Activation"
        footer={<div><b>Maya Chen</b><div style={{ color: '#78716c', marginTop: 2 }}>Growth · Production</div></div>}
      />
      <main style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        <div style={{ height: 56, padding: '0 22px', display: 'flex', alignItems: 'center', gap: 12, background: '#fff', borderBottom: '1px solid #e7e5e4' }}>
          <Search placeholder="Jump to a guide or definition…" w={280} />
          <span style={{ marginLeft: 'auto' }}><Chip>3–16 Aug ▾</Chip></span>
          <Chip>Export</Chip>
          <span style={{ width: 32, height: 32, borderRadius: '50%', background: '#c2410c', color: '#fff', display: 'grid', placeItems: 'center', fontSize: 11, fontWeight: 700 }}>MC</span>
        </div>
        <div style={{ flex: 1, padding: 16, display: 'flex', flexDirection: 'column', gap: 12, minHeight: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <h1 style={{ margin: 0, fontSize: 20, fontWeight: 700, letterSpacing: '-0.04em' }}>Activation</h1>
              <div style={{ fontSize: 12, color: '#78716c', marginTop: 2 }}>First value = project.created · last 14 days vs prior 14</div>
            </div>
            <Chip bd="#fed7aa" color="#9a3412">↑ 2.1pp vs prior</Chip>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
            <Kpi label="Reached first value" value="38.4%" delta="↑ 2.1pp · 1,580 of 4,106" up color="#c2410c" spark={[32, 33, 34, 35, 34, 36, 37, 38.4]} />
            <Kpi label="Median time to value" value="11m 40s" delta="↓ 1m 12s vs prior" up color="#1c1917" spark={[16, 15, 14, 14, 13, 13, 12, 11.6]} />
            <Kpi label="Daily activated" value="118" delta="↑ 12 vs prior avg" up color="#c2410c" spark={daily} />
            <Kpi label="Invited a teammate" value="14.9%" delta="612 of signups" up color="#1c1917" spark={[11, 12, 12, 13, 13, 14, 14, 14.9]} />
          </div>
          <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.45fr 1fr', gap: 10, minHeight: 0 }}>
            <Card title="Daily first-value" right="Solid = this period · dashed = prior">
              <div style={{ flex: 1, minHeight: 0 }}>
                <AreaChart a={daily} b={prior} color="#c2410c" gid="nockFill" />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: '#a8a29e', marginTop: 4 }}>
                <span>3 Aug</span><span>9 Aug</span><span>16 Aug</span>
              </div>
            </Card>
            <Card title="Funnel" right="% kept">
              {steps.map((st, i) => (
                <div key={st.name} style={{ display: 'grid', gridTemplateColumns: '1fr 48px', gap: 8, alignItems: 'center', marginBottom: 8 }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, marginBottom: 3 }}>
                      <span>{st.name}</span><span style={{ fontVariantNumeric: 'tabular-nums' }}>{st.n.toLocaleString()}</span>
                    </div>
                    <div style={{ height: 10, background: '#f5f0eb', borderRadius: 99, overflow: 'hidden' }}>
                      <div style={{ width: `${(st.n / max) * 100}%`, height: '100%', background: i === 3 ? '#c2410c' : '#1c1917' }} />
                    </div>
                  </div>
                  <span style={{ fontSize: 11, color: '#c2410c', textAlign: 'right' }}>{st.keep}</span>
                </div>
              ))}
            </Card>
          </div>
          <Card title="Where they stall" right="Open in last 14 days" style={{ flex: 'none' }}>
            {stalls.map((r) => (
              <div key={r[1]} style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.8fr 40px', gap: 8, fontSize: 12, padding: '6px 0', borderBottom: '1px solid #f0eeeb' }}>
                <span style={{ color: '#78716c' }}>{r[0]}</span><b>{r[1]}</b>
                <span style={{ textAlign: 'right' }}>{r[2]}</span>
              </div>
            ))}
          </Card>
        </div>
      </main>
    </div>
  );
}

// 14 — QUORUM. CS health: KPIs, trend, mix ring, table.
function SaasQuorum() {
  const health = [74, 73, 75, 76, 78, 77, 79, 80, 78, 76, 74, 72];
  const riskN = [2, 2, 3, 2, 2, 3, 3, 3, 4, 5, 5, 6];
  const mix = [
    { n: 11, c: '#0f766e', label: 'Healthy' },
    { n: 6, c: '#b45309', label: 'Watch' },
    { n: 4, c: '#be123c', label: 'Risk' },
    { n: 3, c: '#64748b', label: 'Onboarding' },
  ];
  const rows = [
    ['Palisade Health', 'Ent', '$240k', 92, 'Stable'],
    ['Orchard Freight', 'Ent', '$118k', 71, 'Usage ↓'],
    ['Boreal Bank', 'Ent', '$410k', 88, 'Expansion'],
    ['Copperline', 'Mid', '$96k', 54, 'Champion left'],
    ['Kindling Co', 'Ent', '$64k', 36, 'Renewal 18d'],
  ];
  const tone = (n) => n >= 80 ? '#0f766e' : n >= 60 ? '#b45309' : '#be123c';
  const total = mix.reduce((s, p) => s + p.n, 0);
  const circ = 2 * Math.PI * 34;
  let off = 0;
  const rowsTone = rows;
  return (
    <div style={{ width: SW, height: SH, display: 'flex', overflow: 'hidden', background: '#f4f7f7', color: '#0f172a', fontFamily: '"IBM Plex Sans", system-ui, sans-serif' }}>
      <SideNav
        dark brand="Quorum" mark="Q" markBg="#0f766e" ink="#0f172a" muted="#94a3b8" line="#1e293b"
        activeBg="#134e4a" activeInk="#99f6e4"
        workspace="Enterprise book"
        groups={[
          { label: 'Portfolio', items: ['Accounts', 'Health', 'Renewals'] },
          { label: 'Work', items: ['Playbooks', 'QBR calendar', 'Handoffs'] },
        ]}
        active="Health"
        footer={<div><b>Priya Shah</b><div style={{ opacity: 0.65, marginTop: 2 }}>CSM · Enterprise</div></div>}
      />
      <main style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        <div style={{ height: 56, padding: '0 20px', display: 'flex', alignItems: 'center', gap: 12, background: '#fff', borderBottom: '1px solid #dbe4e4' }}>
          <Search placeholder="Search accounts…" w={240} />
          <span style={{ marginLeft: 'auto', fontSize: 12, color: '#64748b' }}>24 accounts · $1.23m ARR</span>
          <span style={{ width: 32, height: 32, borderRadius: '50%', background: '#0f766e', color: '#fff', display: 'grid', placeItems: 'center', fontSize: 11, fontWeight: 700 }}>PS</span>
        </div>
        <div style={{ flex: 1, padding: 16, display: 'flex', flexDirection: 'column', gap: 12, minHeight: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <h1 style={{ margin: 0, fontSize: 20, fontWeight: 700, letterSpacing: '-0.04em' }}>Account health</h1>
              <div style={{ fontSize: 12, color: '#64748b', marginTop: 2 }}>Scores refresh nightly from usage, support, and NPS</div>
            </div>
            <Chip>This quarter ▾</Chip>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
            <Kpi label="Avg health" value="72" delta="↓ 6 vs last quarter" color="#0f766e" spark={health} bd="#dbe4e4" />
            <Kpi label="At-risk ARR" value="$212k" delta="4 accounts · ↑ $48k" color="#be123c" spark={[140, 148, 160, 170, 188, 200, 212]} bd="#dbe4e4" />
            <Kpi label="Portfolio NPS" value="48" delta="↓ 6 points" color="#0f766e" spark={[58, 56, 54, 52, 51, 49, 48]} bd="#dbe4e4" />
            <Kpi label="Renewals · 30d" value="3" delta="$316k on the clock" up color="#0f766e" spark={[1, 1, 2, 2, 2, 3, 3]} bd="#dbe4e4" />
          </div>
          <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.5fr .95fr', gap: 10, minHeight: 0 }}>
            <Card title="Health vs at-risk count" right="Weekly · 12 weeks" style={{ borderColor: '#dbe4e4' }}>
              <div style={{ flex: 1, minHeight: 0 }}>
                <AreaChart a={health} b={riskN.map((n) => 60 + n * 3)} color="#0f766e" colorB="#be123c" gid="quoFill" grid="#e8eeee" />
              </div>
              <div style={{ display: 'flex', gap: 14, fontSize: 11, color: '#64748b', marginTop: 4 }}>
                <span><i style={{ display: 'inline-block', width: 10, height: 3, background: '#0f766e', marginRight: 6 }} />Avg health</span>
                <span><i style={{ display: 'inline-block', width: 10, height: 3, background: '#be123c', marginRight: 6 }} />Risk pressure</span>
              </div>
            </Card>
            <Card title="Mix" right="24 in view" style={{ borderColor: '#dbe4e4' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, flex: 1 }}>
                <svg width="132" height="132" viewBox="0 0 100 100">
                  {mix.map((p) => {
                    const len = (p.n / total) * circ;
                    const el = <circle key={p.label} cx="50" cy="50" r="34" fill="none" stroke={p.c} strokeWidth="14" strokeDasharray={`${len} ${circ - len}`} strokeDashoffset={-off} transform="rotate(-90 50 50)" />;
                    off += len;
                    return el;
                  })}
                  <text x="50" y="48" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">24</text>
                  <text x="50" y="60" textAnchor="middle" fontSize="7" fill="#64748b">accounts</text>
                </svg>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {mix.map((p) => (
                    <div key={p.label} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12 }}>
                      <span style={{ width: 8, height: 8, borderRadius: 2, background: p.c }} />
                      <span style={{ width: 84 }}>{p.label}</span>
                      <b>{p.n}</b>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
          <Card title="Needs a conversation" right="Sorted by health" style={{ flex: 'none', borderColor: '#dbe4e4' }}>
            {rowsTone.map((r) => (
              <div key={r[0]} style={{ display: 'grid', gridTemplateColumns: '1.6fr 44px 64px 52px 1fr', gap: 8, fontSize: 12, padding: '6px 0', borderBottom: '1px solid #eef2f2', alignItems: 'center' }}>
                <b>{r[0]}</b><span style={{ color: '#64748b' }}>{r[1]}</span>
                <span>{r[2]}</span>
                <span style={{ color: tone(r[3]), fontWeight: 700 }}>{r[3]}</span>
                <span>{r[4]}</span>
              </div>
            ))}
          </Card>
        </div>
      </main>
    </div>
  );
}

// 15 — METERED. Billing: KPIs, usage vs commit, heatmap.
function SaasMetered() {
  const used = [1.8, 1.9, 2.2, 2.4, 2.6, 1.4, 1.2, 2.5, 2.7, 2.8, 3.1, 2.9, 1.5, 1.3, 2.6, 2.8];
  const commit = Array(16).fill(2.1);
  const invoices = [
    ['Palisade Health', 'Commit+', '$14,880', '$2,480', 'Draft'],
    ['Copperline', 'Commit+', '$5,960', '$1,760', 'Dispute'],
    ['Kindling Co', 'Commit+', '$8,440', '$3,340', 'Draft'],
    ['Orchard Freight', 'Paygo', '$6,420', '$6,420', 'Draft'],
  ];
  const skus = ['API', 'Seats', 'WH', 'SSO', 'Auto', 'Store'];
  const heat = [
    [2, 2, 3, 3, 4, 1, 1, 3, 4, 4, 5, 2, 1, 3, 4, 5],
    [1, 1, 1, 2, 2, 0, 0, 2, 2, 2, 2, 1, 0, 2, 2, 2],
    [3, 3, 4, 4, 3, 2, 2, 4, 5, 4, 3, 2, 2, 4, 5, 5],
    [0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1],
    [2, 2, 2, 3, 3, 1, 1, 3, 3, 4, 3, 1, 1, 3, 4, 4],
    [1, 1, 2, 2, 2, 1, 1, 2, 2, 2, 3, 1, 1, 2, 3, 3],
  ];
  const hc = ['#efece4', '#c7d7f5', '#7aa2ea', '#3b6fd4', '#1e40af', '#1e3a8a'];
  const stc = { Draft: '#1e3a8a', Issued: '#166534', Dispute: '#9a3412' };
  return (
    <div style={{ width: SW, height: SH, display: 'flex', overflow: 'hidden', background: '#f3efe6', color: '#1a1714', fontFamily: '"IBM Plex Sans", system-ui, sans-serif' }}>
      <SideNav
        brand="Metered" mark="M" markBg="#1e3a8a" ink="#fffaf2" muted="#a8a29e" line="#ddd4c4"
        activeBg="#ebe4d4" activeInk="#1e3a8a"
        workspace="August close"
        groups={[
          { label: 'Billing', items: ['Usage close', 'Invoices', 'Credits'] },
          { label: 'Catalog', items: ['SKUs', 'Commits', 'Alerts'] },
        ]}
        active="Usage close"
        footer={<div><b>Close checklist</b><div style={{ color: '#7c7366', marginTop: 2 }}>3 of 5 tasks done</div></div>}
      />
      <main style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        <div style={{ height: 56, padding: '0 20px', display: 'flex', alignItems: 'center', gap: 12, background: '#fffaf2', borderBottom: '1px solid #ddd4c4' }}>
          <Search placeholder="Find a customer or SKU…" w={240} />
          <span style={{ marginLeft: 'auto', fontSize: 12, color: '#7c7366' }}>Unbilled overage $14,000</span>
          <Chip bg="#fffaf2" bd="#ddd4c4">Aug 2026 ▾</Chip>
        </div>
        <div style={{ flex: 1, padding: 16, display: 'flex', flexDirection: 'column', gap: 12, minHeight: 0 }}>
          <div>
            <h1 style={{ margin: 0, fontSize: 20, fontWeight: 700, letterSpacing: '-0.04em' }}>Usage billing</h1>
            <div style={{ fontSize: 12, color: '#7c7366', marginTop: 2 }}>August close · commit vs metered</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
            <Kpi label="Committed" value="$62.9k" delta="8 customers on commit" up color="#1e3a8a" spark={[50, 52, 55, 58, 60, 61, 62.9]} bg="#fffaf2" bd="#ddd4c4" />
            <Kpi label="Metered" value="$76.2k" delta="↑ 8% vs July" up color="#1e3a8a" spark={[64, 66, 68, 70, 72, 74, 76.2]} bg="#fffaf2" bd="#ddd4c4" />
            <Kpi label="Unbilled overage" value="$14.0k" delta="Mostly Palisade + Kindling" color="#9a3412" spark={[8, 9, 10, 11, 12, 13, 14]} bg="#fffaf2" bd="#ddd4c4" />
            <Kpi label="Disputes" value="1" delta="Copperline · $1,760" color="#9a3412" spark={[0, 0, 0, 1, 1, 1, 1]} bg="#fffaf2" bd="#ddd4c4" />
          </div>
          <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.45fr 1fr', gap: 10, minHeight: 0 }}>
            <Card title="Daily usage vs commit" right="$k · dashed = commit cap" style={{ background: '#fffaf2', borderColor: '#ddd4c4' }}>
              <div style={{ flex: 1, minHeight: 0 }}>
                <AreaChart a={used} b={commit} color="#1e3a8a" colorB="#9a3412" gid="metFill" grid="#ebe4d4" />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: '#a8a29e', marginTop: 4 }}>
                <span>1 Aug</span><span>8 Aug</span><span>16 Aug</span>
              </div>
            </Card>
            <Card title="SKU intensity · 1–16 Aug" style={{ background: '#fffaf2', borderColor: '#ddd4c4' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '44px 1fr', gap: 6, flex: 1 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {skus.map((sku) => <div key={sku} style={{ fontSize: 10, color: '#7c7366', height: 18, display: 'flex', alignItems: 'center' }}>{sku}</div>)}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {heat.map((row, i) => (
                    <div key={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(16, 1fr)', gap: 2, height: 18 }}>
                      {row.map((v, d) => <div key={d} style={{ background: hc[v], borderRadius: 2 }} />)}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
          <Card title="Overage still open" right="Drafts + dispute" style={{ flex: 'none', background: '#fffaf2', borderColor: '#ddd4c4' }}>
            {invoices.map((r) => (
              <div key={r[0]} style={{ display: 'grid', gridTemplateColumns: '1.4fr 70px 72px 72px 64px', gap: 8, fontSize: 12, padding: '6px 0', borderBottom: '1px solid #efe8da', alignItems: 'center' }}>
                <b>{r[0]}</b><span style={{ color: '#7c7366' }}>{r[1]}</span>
                <span style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 11 }}>{r[2]}</span>
                <span style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, color: '#9a3412' }}>{r[3]}</span>
                <span style={{ color: stc[r[4]], fontWeight: 700, fontSize: 11 }}>{r[4]}</span>
              </div>
            ))}
          </Card>
        </div>
      </main>
    </div>
  );
}

function StackCols({ rows, colors, h = 168 }) {
  const w = 520;
  const max = Math.max(...rows.map((r) => r.reduce((a, b) => a + b, 0)), 1);
  const gap = 5;
  const bw = (w - gap * rows.length) / rows.length;
  return (
    <svg width="100%" height="100%" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none">
      {rows.map((r, i) => {
        let y = h;
        return r.map((v, k) => {
          const bh = (v / max) * (h - 4);
          y -= bh;
          return <rect key={`${i}-${k}`} x={i * (bw + gap)} y={y} width={bw} height={Math.max(bh, 0)} fill={colors[k]} />;
        });
      })}
    </svg>
  );
}

// 16 — DESKLINE. Support overview: volume chart, SLA, queue snapshot.
function SaasDeskline() {
  const volume = [
    [2, 8, 11], [1, 7, 10], [3, 9, 12], [2, 6, 9], [4, 10, 14], [1, 3, 5], [0, 2, 4],
    [3, 8, 11], [2, 9, 13], [5, 11, 12], [2, 7, 10], [1, 6, 9], [3, 8, 11], [2, 7, 10],
  ];
  const tickets = [
    ['#4821', 'SSO loop after Okta cutover', 'P1', '12m'],
    ['#4802', 'Warehouse sync stuck at 86%', 'P1', '2h 20m'],
    ['#4818', 'CSV export missing 3 columns', 'P2', '41m'],
    ['#4814', 'Invoice PDF fails on Safari', 'P2', '1h 8m'],
  ];
  const topics = [['SSO / IdP', 38], ['Billing', 22], ['Sync', 18], ['Export', 12], ['Other', 10]];
  return (
    <div style={{ width: SW, height: SH, display: 'flex', overflow: 'hidden', background: '#eef1f4', color: '#111827', fontFamily: '"Public Sans", system-ui, sans-serif' }}>
      <SideNav
        dark brand="Deskline" mark="D" markBg="#1d4ed8" ink="#0f172a" muted="#94a3b8" line="#1e293b"
        activeBg="#1e3a8a" activeInk="#dbeafe"
        workspace="Production"
        groups={[
          { label: 'Inbox', items: ['Overview', 'Assigned to me', 'Urgent'] },
          { label: 'Manage', items: ['Customers', 'Macros', 'Reports'] },
        ]}
        active="Overview"
        footer={<div><b>Noa Beltran</b><div style={{ opacity: 0.65, marginTop: 2 }}>Support · 6 assigned</div></div>}
      />
      <main style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        <div style={{ height: 56, padding: '0 16px', display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderBottom: '1px solid #dbe1e8' }}>
          <Search placeholder="Search tickets…" w={240} />
          <span style={{ marginLeft: 'auto', fontSize: 11, background: '#fef3c7', color: '#92400e', padding: '3px 8px', borderRadius: 99, fontWeight: 700 }}>2 inside SLA risk</span>
        </div>
        <div style={{ flex: 1, padding: 16, display: 'flex', flexDirection: 'column', gap: 12, minHeight: 0 }}>
          <div>
            <h1 style={{ margin: 0, fontSize: 20, fontWeight: 700, letterSpacing: '-0.04em' }}>Queue overview</h1>
            <div style={{ fontSize: 12, color: '#6b7280', marginTop: 2 }}>Last 14 days · production</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
            <Kpi label="Open tickets" value="128" delta="↑ 14 vs prior 14d" color="#1d4ed8" spark={[96, 102, 108, 111, 118, 122, 128]} bd="#dbe1e8" />
            <Kpi label="Median first reply" value="11m" delta="↓ 3m vs prior" up color="#1d4ed8" spark={[18, 16, 15, 14, 13, 12, 11]} bd="#dbe1e8" />
            <Kpi label="SLA breaches" value="6" delta="2 still open" color="#b45309" spark={[3, 4, 3, 5, 4, 5, 6]} bd="#dbe1e8" />
            <Kpi label="CSAT · 7d" value="4.6" delta="↑ 0.2 · n=84" up color="#1d4ed8" spark={[4.2, 4.3, 4.3, 4.4, 4.5, 4.5, 4.6]} bd="#dbe1e8" />
          </div>
          <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.5fr .95fr', gap: 10, minHeight: 0 }}>
            <Card title="Created by priority" right="P1 · P2 · P3" style={{ borderColor: '#dbe1e8' }}>
              <div style={{ flex: 1, minHeight: 0 }}>
                <StackCols rows={volume} colors={['#1d4ed8', '#93c5fd', '#dbeafe']} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: '#9ca3af', marginTop: 4 }}>
                <span>3 Aug</span><span>9 Aug</span><span>16 Aug</span>
              </div>
            </Card>
            <Card title="Topics · 14d" style={{ borderColor: '#dbe1e8' }}>
              {topics.map((t) => (
                <div key={t[0]} style={{ marginBottom: 10 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 4 }}><span>{t[0]}</span><b>{t[1]}%</b></div>
                  <div style={{ height: 8, background: '#eef1f4', borderRadius: 99 }}>
                    <div style={{ width: `${t[1]}%`, height: '100%', background: t[0] === 'SSO / IdP' ? '#1d4ed8' : '#93c5fd', borderRadius: 99 }} />
                  </div>
                </div>
              ))}
            </Card>
          </div>
          <Card title="Needs a first response" right="Assigned to you" style={{ flex: 'none', borderColor: '#dbe1e8' }}>
            {tickets.map((t) => (
              <div key={t[0]} style={{ display: 'grid', gridTemplateColumns: '64px 1fr 36px 64px', gap: 8, fontSize: 12, padding: '6px 0', borderBottom: '1px solid #eef1f4', alignItems: 'center' }}>
                <span style={{ color: '#6b7280' }}>{t[0]}</span>
                <b>{t[1]}</b>
                <span style={{ color: t[2] === 'P1' ? '#b45309' : '#6b7280', fontWeight: 700 }}>{t[2]}</span>
                <span style={{ textAlign: 'right', color: t[2] === 'P1' ? '#b45309' : '#6b7280' }}>{t[3]}</span>
              </div>
            ))}
          </Card>
        </div>
      </main>
    </div>
  );
}

function DashSaasProductSection() {
  return (
    <DCSection id="dash-saas-product" title="Dashboards — SaaS Product"
      subtitle="Four product consoles with a persistent sidebar, KPI stats, and charts: activation, account health, usage billing, and support.">
      <DCArtboard id="s-nock" label="09 · Nock · Activation" width={SW} height={SH}><SaasNock /></DCArtboard>
      <DCArtboard id="s-quorum" label="10 · Quorum · Account Health" width={SW} height={SH}><SaasQuorum /></DCArtboard>
      <DCArtboard id="s-metered" label="11 · Metered · Usage Billing" width={SW} height={SH}><SaasMetered /></DCArtboard>
      <DCArtboard id="s-deskline" label="12 · Deskline · Support Queue" width={SW} height={SH}><SaasDeskline /></DCArtboard>
    </DCSection>
  );
}

window.DashSaasProductSection = DashSaasProductSection;
