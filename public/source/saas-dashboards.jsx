// SaaS product consoles — activation, account health, usage billing, support.
// Original surfaces: not reused from the industry desks or landing analytics.

const SW = 1280;
const SH = 800;

function SArea({ values, w = 520, h = 120, color = '#c2410c', fill = 'rgba(194,65,12,.12)', grid = '#eee' }) {
  const max = Math.max(...values, 1);
  const step = w / (values.length - 1);
  const y = (v) => h - 8 - (v / max) * (h - 16);
  const d = values.map((v, i) => `${i ? 'L' : 'M'} ${i * step} ${y(v)}`).join(' ');
  return (
    <svg width="100%" height={h} viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none">
      {[0.25, 0.5, 0.75].map((p) => <line key={p} x1="0" y1={h * p} x2={w} y2={h * p} stroke={grid} />)}
      <path d={`${d} L ${w} ${h} L 0 ${h} Z`} fill={fill} />
      <path d={d} fill="none" stroke={color} strokeWidth="2" />
    </svg>
  );
}

// 13 — NOCK. Activation workbench: definition, funnel, stall reasons, weekly cohorts.
function SaasNock() {
  const steps = [
    { name: 'Visited', n: '18,420', keep: null },
    { name: 'Signed up', n: '4,106', keep: '22.3%' },
    { name: 'Connected source', n: '2,441', keep: '59.4%' },
    { name: 'Created project', n: '1,580', keep: '64.7%' },
    { name: 'Invited teammate', n: '612', keep: '38.7%' },
  ];
  const stalls = [
    ['Connected source', 'OAuth timeout on Google', '312', '18h'],
    ['Created project', 'Abandoned template picker', '264', '9h'],
    ['Invited teammate', 'No seat remaining', '141', '2d'],
    ['Connected source', 'Warehouse credentials invalid', '97', '14h'],
  ];
  const weeks = [
    ['Aug 4', [22, 48, 61, 38]],
    ['Jul 28', [19, 44, 58, 33]],
    ['Jul 21', [24, 51, 63, 41]],
    ['Jul 14', [18, 40, 55, 29]],
  ];
  const s = {
    root: { width: SW, height: SH, background: '#f6f4f1', color: '#1c1917', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', display: 'flex', flexDirection: 'column' },
    bar: { height: 52, padding: '0 20px', display: 'flex', alignItems: 'center', gap: 18, background: '#fff', borderBottom: '1px solid #e7e5e4' },
    nav: { display: 'flex', gap: 4, fontSize: 13, color: '#57534e' },
    navOn: { color: '#1c1917', background: '#f5f0eb', padding: '6px 10px', borderRadius: 8, fontWeight: 650 },
    navOff: { padding: '6px 10px' },
    body: { flex: 1, padding: 18, display: 'flex', flexDirection: 'column', gap: 14, minHeight: 0 },
    hero: { background: '#fff', border: '1px solid #e7e5e4', borderRadius: 12, padding: '16px 18px', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1.1fr', gap: 16, alignItems: 'center' },
    funnel: { background: '#fff', border: '1px solid #e7e5e4', borderRadius: 12, padding: 16, display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10, minHeight: 210 },
    split: { flex: 1, display: 'grid', gridTemplateColumns: '1.15fr .95fr', gap: 14, minHeight: 0 },
    card: { background: '#fff', border: '1px solid #e7e5e4', borderRadius: 12, padding: 14, minHeight: 0, display: 'flex', flexDirection: 'column' },
  };
  return (
    <div style={s.root}>
      <header style={s.bar}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 800, letterSpacing: '-0.04em' }}>
          <span style={{ width: 22, height: 22, borderRadius: 7, background: '#c2410c' }} /> Nock
        </div>
        <nav style={s.nav}>
          <span style={s.navOn}>Activation</span>
          <span style={s.navOff}>Retention</span>
          <span style={s.navOff}>Audiences</span>
          <span style={s.navOff}>Definitions</span>
        </nav>
        <span style={{ marginLeft: 'auto', fontSize: 12, color: '#78716c' }}>Production · Last 14 days vs prior 14</span>
        <span style={{ fontSize: 12, padding: '6px 10px', border: '1px solid #e7e5e4', borderRadius: 8 }}>3–16 Aug ▾</span>
        <span style={{ width: 28, height: 28, borderRadius: '50%', background: '#1c1917', color: '#f6f4f1', display: 'grid', placeItems: 'center', fontSize: 10, fontWeight: 700 }}>MC</span>
      </header>
      <div style={s.body}>
        <section style={s.hero}>
          <div>
            <div style={{ fontSize: 11, color: '#78716c', letterSpacing: '0.08em' }}>REACHED FIRST VALUE</div>
            <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-0.06em', lineHeight: 1 }}>38.4%</div>
            <div style={{ fontSize: 12, color: '#b45309', marginTop: 4 }}>↑ 2.1pp · 1,580 of 4,106 signups</div>
          </div>
          <div>
            <div style={{ fontSize: 11, color: '#78716c' }}>Median time to value</div>
            <div style={{ fontSize: 24, fontWeight: 750, letterSpacing: '-0.04em' }}>11 min 40s</div>
            <div style={{ fontSize: 12, color: '#57534e' }}>↓ 1m 12s vs prior</div>
          </div>
          <div>
            <div style={{ fontSize: 11, color: '#78716c' }}>Activation event</div>
            <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 13, background: '#f6f4f1', padding: '8px 10px', borderRadius: 8, marginTop: 4 }}>project.created</div>
          </div>
          <div>
            <div style={{ fontSize: 11, color: '#78716c', marginBottom: 6 }}>Daily activated users</div>
            <SArea values={[42, 48, 39, 55, 61, 58, 70, 66, 74, 69, 81, 77, 84, 88]} h={56} w={240} />
          </div>
        </section>
        <section style={s.funnel} aria-label="Activation funnel">
          {steps.map((step, i) => (
            <div key={step.name} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 8 }}>
              {step.keep && <div style={{ fontSize: 11, color: '#c2410c', fontWeight: 700 }}>{step.keep} kept</div>}
              <div style={{ height: 28 + (4 - i) * 28, background: i === 3 ? '#c2410c' : '#1c1917', borderRadius: '8px 8px 0 0', opacity: 1 - i * 0.08 }} />
              <div style={{ fontSize: 11, color: '#78716c' }}>{step.name}</div>
              <div style={{ fontSize: 20, fontWeight: 750, letterSpacing: '-0.04em' }}>{step.n}</div>
            </div>
          ))}
        </section>
        <div style={s.split}>
          <section style={s.card}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <b style={{ fontSize: 13 }}>Where they stall</b>
              <span style={{ fontSize: 11, color: '#78716c' }}>Open 14d · count · age</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.4fr 54px 48px', gap: 8, fontSize: 10, color: '#78716c', paddingBottom: 6, borderBottom: '1px solid #e7e5e4' }}>
              <span>STEP</span><span>REASON</span><span style={{ textAlign: 'right' }}>N</span><span style={{ textAlign: 'right' }}>AGE</span>
            </div>
            {stalls.map((r) => (
              <div key={r[1]} style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.4fr 54px 48px', gap: 8, fontSize: 12, padding: '8px 0', borderBottom: '1px solid #f0eeeb', alignItems: 'center' }}>
                <span style={{ color: '#57534e' }}>{r[0]}</span>
                <b>{r[1]}</b>
                <span style={{ textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>{r[2]}</span>
                <span style={{ textAlign: 'right', color: '#78716c' }}>{r[3]}</span>
              </div>
            ))}
          </section>
          <section style={s.card}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
              <b style={{ fontSize: 13 }}>Signup week → first value</b>
              <span style={{ fontSize: 11, color: '#78716c' }}>% of cohort</span>
            </div>
            {weeks.map(([label, bars]) => (
              <div key={label} style={{ display: 'grid', gridTemplateColumns: '58px 1fr', gap: 8, alignItems: 'center', marginBottom: 10 }}>
                <span style={{ fontSize: 11, color: '#78716c' }}>{label}</span>
                <div style={{ display: 'flex', gap: 4, height: 22, alignItems: 'flex-end' }}>
                  {bars.map((v, i) => (
                    <div key={i} style={{ flex: 1, height: `${v}%`, background: i === 3 ? '#c2410c' : '#d6d3d1', borderRadius: 3 }} title={`${v}%`} />
                  ))}
                </div>
              </div>
            ))}
            <div style={{ marginTop: 'auto', fontSize: 11, color: '#78716c' }}>Bars: visited → source → project → invited</div>
          </section>
        </div>
      </div>
    </div>
  );
}

// 14 — QUORUM. Customer-success portfolio: health mix, account table, outreach queue.
function SaasQuorum() {
  const mix = [
    ['Healthy', 11, '#0f766e'],
    ['Watch', 6, '#b45309'],
    ['Risk', 4, '#be123c'],
    ['Onboarding', 3, '#57534e'],
  ];
  const rows = [
    ['Palisade Health', 'Ent', '$240k', 92, 'Stable', '64', '22 Aug', 'Priya'],
    ['Orchard Freight', 'Ent', '$118k', 71, 'Usage ↓', '32', '19 Aug', 'Eli'],
    ['Boreal Bank', 'Ent', '$410k', 88, 'Expansion', '71', '28 Aug', 'Priya'],
    ['Copperline', 'Mid', '$96k', 54, 'Champion left', '—', '—', 'Noa'],
    ['Glasshouse Labs', 'Mid', '$52k', 41, 'Seats unused', '12', '12 Aug', 'Eli'],
    ['Redwood Civic', 'Ent', '$180k', 79, 'Stable', '58', '4 Sep', 'Priya'],
    ['Marlowe Media', 'Mid', '$71k', 63, 'Support heavy', '21', '21 Aug', 'Noa'],
    ['Kindling Co', 'Ent', '$64k', 36, 'Renewal 18d', '8', '—', 'Eli'],
  ];
  const tone = (score) => score >= 80 ? '#0f766e' : score >= 60 ? '#b45309' : '#be123c';
  const s = {
    root: { width: SW, height: SH, background: '#f4f7f7', color: '#0f172a', fontFamily: '"IBM Plex Sans", system-ui, sans-serif', display: 'flex', flexDirection: 'column' },
    bar: { height: 54, padding: '0 20px', display: 'flex', alignItems: 'center', gap: 16, background: '#0f172a', color: '#e2e8f0' },
    body: { flex: 1, display: 'grid', gridTemplateColumns: '1fr 300px', minHeight: 0 },
    main: { padding: 16, display: 'flex', flexDirection: 'column', gap: 12, minHeight: 0 },
    mix: { display: 'flex', height: 36, borderRadius: 8, overflow: 'hidden' },
    table: { flex: 1, background: '#fff', border: '1px solid #dbe4e4', borderRadius: 10, overflow: 'hidden', display: 'flex', flexDirection: 'column' },
    th: { display: 'grid', gridTemplateColumns: '1.4fr 52px 70px 70px 1.1fr 48px 72px 56px', gap: 8, padding: '8px 14px', fontSize: 10, letterSpacing: '0.06em', color: '#64748b', borderBottom: '1px solid #dbe4e4', background: '#f8fafa' },
    td: { display: 'grid', gridTemplateColumns: '1.4fr 52px 70px 70px 1.1fr 48px 72px 56px', gap: 8, padding: '9px 14px', fontSize: 12, borderBottom: '1px solid #eef2f2', alignItems: 'center' },
    side: { background: '#fff', borderLeft: '1px solid #dbe4e4', padding: 16, display: 'flex', flexDirection: 'column', gap: 12 },
  };
  const total = mix.reduce((a, x) => a + x[1], 0);
  return (
    <div style={s.root}>
      <header style={s.bar}>
        <b style={{ letterSpacing: '-0.03em', fontSize: 16 }}>Quorum</b>
        <span style={{ fontSize: 12, opacity: 0.7 }}>Portfolio · Enterprise + Mid-market</span>
        <span style={{ marginLeft: 'auto', fontSize: 12, opacity: 0.7 }}>24 accounts · $1.23m ARR · Priya Shah</span>
      </header>
      <div style={s.body}>
        <div style={s.main}>
          <section>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: 12, color: '#475569' }}>
              <span>Health mix</span>
              <span>{total} accounts in view</span>
            </div>
            <div style={s.mix}>
              {mix.map(([label, n, c]) => (
                <div key={label} style={{ width: `${(n / total) * 100}%`, background: c, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 11, fontWeight: 650 }}>
                  {n} {label}
                </div>
              ))}
            </div>
          </section>
          <section style={s.table}>
            <div style={s.th}>
              <span>ACCOUNT</span><span>TIER</span><span style={{ textAlign: 'right' }}>ARR</span><span style={{ textAlign: 'right' }}>HEALTH</span><span>SIGNAL</span><span>NPS</span><span>NEXT QBR</span><span>OWNER</span>
            </div>
            {rows.map((r) => (
              <div key={r[0]} style={s.td}>
                <b>{r[0]}</b>
                <span style={{ color: '#64748b' }}>{r[1]}</span>
                <span style={{ textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>{r[2]}</span>
                <span style={{ textAlign: 'right', color: tone(r[3]), fontWeight: 700 }}>{r[3]}</span>
                <span>{r[4]}</span>
                <span style={{ color: '#64748b' }}>{r[5]}</span>
                <span>{r[6]}</span>
                <span>{r[7]}</span>
              </div>
            ))}
          </section>
        </div>
        <aside style={s.side}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.08em', color: '#64748b' }}>NEEDS A CONVERSATION</div>
            <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.04em' }}>4 accounts</div>
          </div>
          {[
            ['Kindling Co', 'Renewal in 18 days · health 36', 'Book save-plan'],
            ['Copperline', 'Champion departed 9 Aug', 'Map new buyer'],
            ['Glasshouse Labs', 'Seat utilization 22%', 'Usage review'],
            ['Orchard Freight', 'Weekly active −18%', 'Product office hours'],
          ].map((x) => (
            <div key={x[0]} style={{ padding: '10px 0', borderTop: '1px solid #eef2f2' }}>
              <b style={{ fontSize: 13 }}>{x[0]}</b>
              <div style={{ fontSize: 12, color: '#475569', margin: '4px 0 6px' }}>{x[1]}</div>
              <div style={{ fontSize: 11, color: '#0f766e', fontWeight: 650 }}>{x[2]} →</div>
            </div>
          ))}
          <div style={{ marginTop: 'auto', fontSize: 11, color: '#64748b' }}>Sorted by renewal date, then health.</div>
        </aside>
      </div>
    </div>
  );
}

// 15 — METERED. Usage-billing close: invoice register + SKU × day heatmap.
function SaasMetered() {
  const invoices = [
    ['Palisade Health', 'Commit+', '$12,400', '$14,880', '$2,480', 'Draft'],
    ['Boreal Bank', 'Commit+', '$28,000', '$27,140', '$0', 'Issued'],
    ['Orchard Freight', 'Paygo', '—', '$6,420', '$6,420', 'Draft'],
    ['Redwood Civic', 'Commit', '$9,800', '$9,210', '$0', 'Issued'],
    ['Copperline', 'Commit+', '$4,200', '$5,960', '$1,760', 'Dispute'],
    ['Marlowe Media', 'Paygo', '—', '$1,180', '$1,180', 'Draft'],
    ['Glasshouse Labs', 'Commit', '$3,400', '$2,990', '$0', 'Issued'],
    ['Kindling Co', 'Commit+', '$5,100', '$8,440', '$3,340', 'Draft'],
  ];
  const skus = ['API calls', 'Seats', 'Warehouse', 'SSO', 'Automations', 'Storage', 'Support+'];
  const heat = [
    [2, 2, 3, 3, 4, 1, 1, 3, 4, 4, 5, 2, 1, 3, 4, 5, 5, 4, 2, 1, 3, 4, 4, 5, 3, 1, 1, 4, 5, 5, 4],
    [1, 1, 1, 2, 2, 0, 0, 2, 2, 2, 2, 1, 0, 2, 2, 2, 2, 2, 1, 0, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2],
    [3, 3, 4, 4, 3, 2, 2, 4, 5, 4, 3, 2, 2, 4, 5, 5, 4, 3, 2, 2, 4, 5, 4, 3, 3, 2, 2, 5, 5, 4, 4],
    [0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
    [2, 2, 2, 3, 3, 1, 1, 3, 3, 4, 3, 1, 1, 3, 4, 4, 3, 2, 1, 1, 3, 4, 3, 3, 2, 1, 1, 4, 4, 3, 3],
    [1, 1, 2, 2, 2, 1, 1, 2, 2, 2, 3, 1, 1, 2, 3, 3, 2, 2, 1, 1, 2, 3, 3, 2, 2, 1, 1, 3, 3, 2, 2],
    [0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1],
  ];
  const hc = ['#efece4', '#c7d7f5', '#7aa2ea', '#3b6fd4', '#1e40af', '#1e3a8a'];
  const stc = { Draft: '#1e3a8a', Issued: '#166534', Dispute: '#9a3412' };
  const s = {
    root: { width: SW, height: SH, background: '#f3efe6', color: '#1a1714', fontFamily: '"IBM Plex Sans", system-ui, sans-serif', display: 'flex', flexDirection: 'column' },
    bar: { padding: '14px 20px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'end', borderBottom: '1px solid #ddd4c4' },
    body: { flex: 1, display: 'grid', gridTemplateColumns: '1.15fr .95fr', gap: 14, padding: 16, minHeight: 0 },
    card: { background: '#fffaf2', border: '1px solid #ddd4c4', borderRadius: 4, padding: 14, display: 'flex', flexDirection: 'column', minHeight: 0 },
    row: { display: 'grid', gridTemplateColumns: '1.3fr 70px 72px 72px 72px 64px', gap: 6, fontSize: 12, padding: '7px 0', borderBottom: '1px solid #efe8da', alignItems: 'center' },
  };
  return (
    <div style={s.root}>
      <header style={s.bar}>
        <div>
          <div style={{ fontSize: 11, letterSpacing: '0.14em', color: '#7c7366' }}>METERED · AUGUST CLOSE</div>
          <div style={{ fontSize: 28, fontWeight: 650, letterSpacing: '-0.04em' }}>Usage billing</div>
        </div>
        <div style={{ display: 'flex', gap: 22, fontSize: 13 }}>
          {[['Close tasks', '3 / 5'], ['Unbilled overage', '$14,000'], ['Disputes', '1']].map(([l, n]) => (
            <div key={l}><div style={{ fontSize: 11, color: '#7c7366' }}>{l}</div><div style={{ fontWeight: 700 }}>{n}</div></div>
          ))}
        </div>
      </header>
      <div style={s.body}>
        <section style={s.card}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <b style={{ fontSize: 13 }}>Invoice register</b>
            <span style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, color: '#7c7366' }}>Commit vs metered</span>
          </div>
          <div style={{ ...s.row, fontSize: 10, color: '#7c7366', letterSpacing: '0.04em', borderBottom: '1px solid #ddd4c4' }}>
            <span>CUSTOMER</span><span>PLAN</span><span style={{ textAlign: 'right' }}>COMMIT</span><span style={{ textAlign: 'right' }}>USED</span><span style={{ textAlign: 'right' }}>OVER</span><span>STATUS</span>
          </div>
          {invoices.map((r) => (
            <div key={r[0]} style={s.row}>
              <b>{r[0]}</b>
              <span style={{ color: '#7c7366' }}>{r[1]}</span>
              <span style={{ textAlign: 'right', fontFamily: '"IBM Plex Mono", monospace', fontSize: 11 }}>{r[2]}</span>
              <span style={{ textAlign: 'right', fontFamily: '"IBM Plex Mono", monospace', fontSize: 11 }}>{r[3]}</span>
              <span style={{ textAlign: 'right', fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, color: r[4] === '$0' ? '#7c7366' : '#9a3412' }}>{r[4]}</span>
              <span style={{ color: stc[r[5]], fontWeight: 700, fontSize: 11 }}>{r[5]}</span>
            </div>
          ))}
          <div style={{ marginTop: 'auto', padding: 10, background: '#1a1714', color: '#fffaf2', fontSize: 12 }}>
            Six drafts still open. Unbilled overage is $14,000 — most of it Palisade, Copperline, and Kindling.
          </div>
        </section>
        <section style={s.card}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
            <b style={{ fontSize: 13 }}>SKU usage · 1–31 Aug</b>
            <span style={{ fontSize: 11, color: '#7c7366' }}>Low → commit cap</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '92px 1fr', gap: 6, flex: 1 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {skus.map((sku) => <div key={sku} style={{ fontSize: 10, color: '#7c7366', height: 14, display: 'flex', alignItems: 'center' }}>{sku}</div>)}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {heat.map((row, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(31, 1fr)', gap: 1, height: 14 }}>
                  {row.map((v, d) => <div key={d} style={{ background: hc[v], borderRadius: 1 }} />)}
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 10, fontSize: 10, color: '#7c7366' }}>
            {hc.map((c, i) => <span key={c} style={{ display: 'flex', alignItems: 'center', gap: 4 }}><i style={{ width: 8, height: 8, background: c }} />{i}</span>)}
          </div>
        </section>
      </div>
    </div>
  );
}

// 16 — DESKLINE. Three-pane support: queue, thread, customer context.
function SaasDeskline() {
  const tickets = [
    ['#4821', 'SSO loop after Okta cutover', 'P1', '12m', true],
    ['#4818', 'CSV export missing 3 columns', 'P2', '41m', false],
    ['#4814', 'Invoice PDF fails on Safari', 'P2', '1h 8m', false],
    ['#4809', 'Seat invite bounced', 'P3', '2h', false],
    ['#4802', 'Warehouse sync stuck at 86%', 'P1', '2h 20m', false],
    ['#4794', 'How to map custom roles', 'P3', '4h', false],
  ];
  const s = {
    root: { width: SW, height: SH, background: '#eef1f4', color: '#111827', fontFamily: '"Public Sans", system-ui, sans-serif', display: 'flex', flexDirection: 'column' },
    bar: { height: 48, padding: '0 16px', display: 'flex', alignItems: 'center', gap: 14, background: '#fff', borderBottom: '1px solid #dbe1e8' },
    panes: { flex: 1, display: 'grid', gridTemplateColumns: '280px 1fr 268px', minHeight: 0 },
    list: { background: '#fff', borderRight: '1px solid #dbe1e8', display: 'flex', flexDirection: 'column' },
    item: (on) => ({ padding: '10px 12px', borderBottom: '1px solid #eef1f4', background: on ? '#eef4ff' : '#fff', cursor: 'pointer' }),
    thread: { display: 'flex', flexDirection: 'column', background: '#f7f8fa', minHeight: 0 },
    bubble: (me) => ({ alignSelf: me ? 'flex-end' : 'flex-start', maxWidth: '78%', background: me ? '#1d4ed8' : '#fff', color: me ? '#fff' : '#111827', border: me ? 'none' : '1px solid #dbe1e8', borderRadius: 12, padding: '8px 10px', fontSize: 12, lineHeight: 1.45 }),
    ctx: { background: '#fff', borderLeft: '1px solid #dbe1e8', padding: 14, fontSize: 12 },
  };
  return (
    <div style={s.root}>
      <header style={s.bar}>
        <b style={{ fontSize: 15, letterSpacing: '-0.03em' }}>Deskline</b>
        <span style={{ fontSize: 12, color: '#6b7280' }}>Queue · Production</span>
        <span style={{ marginLeft: 8, fontSize: 11, background: '#fef3c7', color: '#92400e', padding: '3px 8px', borderRadius: 99, fontWeight: 700 }}>2 inside SLA risk</span>
        <span style={{ marginLeft: 'auto', fontSize: 12, color: '#6b7280' }}>Noa Beltran · 6 assigned</span>
      </header>
      <div style={s.panes}>
        <aside style={s.list}>
          <div style={{ display: 'flex', gap: 6, padding: 10, borderBottom: '1px solid #eef1f4', fontSize: 11 }}>
            {['Mine', 'Urgent', 'Waiting'].map((t, i) => (
              <span key={t} style={{ padding: '4px 8px', borderRadius: 99, background: i === 0 ? '#111827' : '#f3f4f6', color: i === 0 ? '#fff' : '#4b5563' }}>{t}</span>
            ))}
          </div>
          {tickets.map((t) => (
            <div key={t[0]} style={s.item(t[4])}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#6b7280' }}>
                <span>{t[0]} · {t[2]}</span>
                <span style={{ color: t[2] === 'P1' ? '#b45309' : '#6b7280', fontWeight: 700 }}>{t[3]}</span>
              </div>
              <div style={{ fontSize: 13, fontWeight: 650, marginTop: 4 }}>{t[1]}</div>
            </div>
          ))}
        </aside>
        <section style={s.thread}>
          <div style={{ padding: '12px 16px', background: '#fff', borderBottom: '1px solid #dbe1e8' }}>
            <div style={{ fontSize: 11, color: '#6b7280' }}>#4821 · Palisade Health · P1 · first response due in 12m</div>
            <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: '-0.03em' }}>SSO loop after Okta cutover</div>
          </div>
          <div style={{ flex: 1, padding: 16, display: 'flex', flexDirection: 'column', gap: 10, overflow: 'hidden' }}>
            <div style={s.bubble(false)}>
              After we switched to Okta last night, users on Chrome hit a redirect loop on /login. Safari is fine. Started ~22:40 UTC. About 40 people blocked.
              <div style={{ opacity: 0.65, fontSize: 10, marginTop: 6 }}>Amira Q. · 14:08</div>
            </div>
            <div style={s.bubble(true)}>
              Thanks Amira — we can reproduce on the Palisade tenant. ACS URL still points at the old IdP. Checking whether the fallback IdP is still enabled.
              <div style={{ opacity: 0.8, fontSize: 10, marginTop: 6 }}>You · 14:11</div>
            </div>
            <div style={s.bubble(false)}>
              Confirmed. We left the legacy SAML app “on” for a weekend buffer. I can disable it if that’s the fix.
              <div style={{ opacity: 0.65, fontSize: 10, marginTop: 6 }}>Amira Q. · 14:14</div>
            </div>
          </div>
          <div style={{ padding: 12, background: '#fff', borderTop: '1px solid #dbe1e8' }}>
            <div style={{ border: '1px solid #dbe1e8', borderRadius: 10, padding: '10px 12px', color: '#9ca3af', fontSize: 12 }}>Reply to Palisade Health…</div>
          </div>
        </section>
        <aside style={s.ctx}>
          <div style={{ fontSize: 11, color: '#6b7280', letterSpacing: '0.08em' }}>CUSTOMER</div>
          <div style={{ fontWeight: 700, fontSize: 15, margin: '4px 0 10px' }}>Palisade Health</div>
          {[['Plan', 'Commit+ · annual'], ['ARR', '$240,000'], ['CS owner', 'Priya Shah'], ['Health', '92 · stable'], ['Region', 'us-east-1']].map((r) => (
            <div key={r[0]} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid #eef1f4' }}>
              <span style={{ color: '#6b7280' }}>{r[0]}</span><span>{r[1]}</span>
            </div>
          ))}
          <div style={{ marginTop: 16, fontSize: 11, color: '#6b7280', letterSpacing: '0.08em' }}>LAST 7 DAYS</div>
          {[['SSO', '3 tickets'], ['Billing', '1'], ['API', '0']].map((r) => (
            <div key={r[0]} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0' }}><span>{r[0]}</span><b>{r[1]}</b></div>
          ))}
          <div style={{ marginTop: 16, fontSize: 11, color: '#6b7280' }}>Suggested macros</div>
          <div style={{ marginTop: 6, padding: 8, background: '#eef4ff', borderRadius: 8 }}>IdP cutover checklist</div>
          <div style={{ marginTop: 6, padding: 8, background: '#f3f4f6', borderRadius: 8 }}>Collect HAR + timestamps</div>
        </aside>
      </div>
    </div>
  );
}

function DashSaasProductSection() {
  return (
    <DCSection id="dash-saas-product" title="Dashboards — SaaS Product"
      subtitle="Four product consoles: activation, account health, usage billing, and a three-pane support queue.">
      <DCArtboard id="s-nock" label="13 · Nock · Activation" width={SW} height={SH}><SaasNock /></DCArtboard>
      <DCArtboard id="s-quorum" label="14 · Quorum · Account Health" width={SW} height={SH}><SaasQuorum /></DCArtboard>
      <DCArtboard id="s-metered" label="15 · Metered · Usage Billing" width={SW} height={SH}><SaasMetered /></DCArtboard>
      <DCArtboard id="s-deskline" label="16 · Deskline · Support Queue" width={SW} height={SH}><SaasDeskline /></DCArtboard>
    </DCSection>
  );
}

window.DashSaasProductSection = DashSaasProductSection;
