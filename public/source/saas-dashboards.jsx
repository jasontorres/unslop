// SaaS product consoles — persistent left nav + main workspace.
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

function MainHead({ title, sub, right }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 16 }}>
      <div>
        <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700, letterSpacing: '-0.04em' }}>{title}</h1>
        <div style={{ fontSize: 12, color: '#78716c', marginTop: 4 }}>{sub}</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>{right}</div>
    </div>
  );
}

function Chip({ children, solid, bg = '#fff', bd = '#e7e5e4', color = '#1c1917' }) {
  return <span style={{ padding: '6px 10px', borderRadius: 8, border: `1px solid ${bd}`, background: solid || bg, color, fontSize: 12 }}>{children}</span>;
}

function Search({ placeholder, w = 280 }) {
  return (
    <div style={{
      width: w, padding: '8px 12px', borderRadius: 8, fontSize: 13,
      background: '#f5f5f4', color: '#a8a29e',
    }}>{placeholder}</div>
  );
}

// 13 — NOCK. Activation: light sidebar app + funnel workspace.
function SaasNock() {
  const steps = [
    { name: 'Visited', n: 18420, keep: null },
    { name: 'Signed up', n: 4106, keep: '22.3%' },
    { name: 'Connected source', n: 2441, keep: '59.4%' },
    { name: 'Created project', n: 1580, keep: '64.7%' },
    { name: 'Invited teammate', n: 612, keep: '38.7%' },
  ];
  const max = steps[0].n;
  const stalls = [
    ['Connected source', 'OAuth timeout on Google', '312', '18h'],
    ['Created project', 'Abandoned template picker', '264', '9h'],
    ['Invited teammate', 'No seat remaining', '141', '2d'],
    ['Connected source', 'Warehouse credentials invalid', '97', '14h'],
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
          <Search placeholder="Jump to a guide or definition…" w={300} />
          <span style={{ marginLeft: 'auto' }}><Chip>3–16 Aug ▾</Chip></span>
          <Chip>Export</Chip>
          <span style={{ width: 32, height: 32, borderRadius: '50%', background: '#c2410c', color: '#fff', display: 'grid', placeItems: 'center', fontSize: 11, fontWeight: 700 }}>MC</span>
        </div>
        <div style={{ flex: 1, padding: 20, display: 'flex', flexDirection: 'column', gap: 14, minHeight: 0 }}>
          <MainHead
            title="Activation"
            sub="First value = project.created · last 14 days vs prior 14"
            right={<Chip bd="#fed7aa" color="#9a3412">↑ 2.1pp vs prior</Chip>}
          />
          <section style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', gap: 10 }}>
            {[
              ['Reached first value', '38.4%', '1,580 of 4,106 signups'],
              ['Median time to value', '11m 40s', '↓ 1m 12s vs prior'],
              ['Invited a teammate', '14.9%', '612 of signups'],
            ].map((k) => (
              <div key={k[0]} style={{ background: '#fff', border: '1px solid #e7e5e4', borderRadius: 12, padding: '12px 14px' }}>
                <div style={{ fontSize: 11, color: '#78716c' }}>{k[0]}</div>
                <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-0.05em', margin: '4px 0 2px' }}>{k[1]}</div>
                <div style={{ fontSize: 12, color: '#57534e' }}>{k[2]}</div>
              </div>
            ))}
          </section>
          <section style={{ background: '#fff', border: '1px solid #e7e5e4', borderRadius: 12, padding: 14 }}>
            <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 12 }}>Funnel</div>
            {steps.map((st, i) => (
              <div key={st.name} style={{ display: 'grid', gridTemplateColumns: '150px 1fr 70px 58px', gap: 10, alignItems: 'center', marginBottom: 8 }}>
                <span style={{ fontSize: 12 }}>{st.name}</span>
                <div style={{ height: 22, background: '#f5f0eb', borderRadius: 4, overflow: 'hidden' }}>
                  <div style={{ width: `${(st.n / max) * 100}%`, height: '100%', background: i === 3 ? '#c2410c' : '#1c1917' }} />
                </div>
                <span style={{ fontVariantNumeric: 'tabular-nums', fontSize: 12, textAlign: 'right' }}>{st.n.toLocaleString()}</span>
                <span style={{ fontSize: 11, color: '#c2410c', textAlign: 'right' }}>{st.keep || '—'}</span>
              </div>
            ))}
          </section>
          <section style={{ flex: 1, minHeight: 0, background: '#fff', border: '1px solid #e7e5e4', borderRadius: 12, padding: 14, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <b style={{ fontSize: 13 }}>Where they stall</b>
              <span style={{ fontSize: 11, color: '#78716c' }}>Open in last 14 days</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.6fr 50px 48px', gap: 8, fontSize: 10, color: '#78716c', paddingBottom: 6, borderBottom: '1px solid #e7e5e4' }}>
              <span>STEP</span><span>REASON</span><span style={{ textAlign: 'right' }}>N</span><span style={{ textAlign: 'right' }}>AGE</span>
            </div>
            {stalls.map((r) => (
              <div key={r[1]} style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.6fr 50px 48px', gap: 8, fontSize: 12, padding: '8px 0', borderBottom: '1px solid #f0eeeb' }}>
                <span style={{ color: '#57534e' }}>{r[0]}</span><b>{r[1]}</b>
                <span style={{ textAlign: 'right' }}>{r[2]}</span>
                <span style={{ textAlign: 'right', color: '#78716c' }}>{r[3]}</span>
              </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}

// 14 — QUORUM. CS portfolio with dark sidebar + account table.
function SaasQuorum() {
  const mix = [['Healthy', 11, '#0f766e'], ['Watch', 6, '#b45309'], ['Risk', 4, '#be123c'], ['Onboarding', 3, '#64748b']];
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
  const tone = (n) => n >= 80 ? '#0f766e' : n >= 60 ? '#b45309' : '#be123c';
  const total = 24;
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
        active="Accounts"
        footer={<div><b>Priya Shah</b><div style={{ opacity: 0.65, marginTop: 2 }}>CSM · Enterprise</div></div>}
      />
      <main style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        <div style={{ height: 56, padding: '0 20px', display: 'flex', alignItems: 'center', gap: 12, background: '#fff', borderBottom: '1px solid #dbe4e4' }}>
          <Search placeholder="Search accounts…" w={260} />
          <span style={{ marginLeft: 'auto', fontSize: 12, color: '#64748b' }}>24 accounts · $1.23m ARR</span>
          <span style={{ width: 32, height: 32, borderRadius: '50%', background: '#0f766e', color: '#fff', display: 'grid', placeItems: 'center', fontSize: 11, fontWeight: 700 }}>PS</span>
        </div>
        <div style={{ flex: 1, padding: 18, display: 'flex', flexDirection: 'column', gap: 12, minHeight: 0 }}>
          <MainHead title="Account health" sub="Scores refresh nightly from product usage, support, and NPS." right={<Chip>This quarter ▾</Chip>} />
          <div style={{ display: 'flex', height: 34, borderRadius: 8, overflow: 'hidden' }}>
            {mix.map(([label, n, c]) => (
              <div key={label} style={{ width: `${(n / total) * 100}%`, background: c, color: '#fff', display: 'grid', placeItems: 'center', fontSize: 11, fontWeight: 650 }}>{n} {label}</div>
            ))}
          </div>
          <section style={{ flex: 1, background: '#fff', border: '1px solid #dbe4e4', borderRadius: 10, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 48px 64px 64px 1.1fr 44px 72px 52px', gap: 8, padding: '8px 14px', fontSize: 10, color: '#64748b', letterSpacing: '0.06em', background: '#f8fafa', borderBottom: '1px solid #dbe4e4' }}>
              <span>ACCOUNT</span><span>TIER</span><span style={{ textAlign: 'right' }}>ARR</span><span style={{ textAlign: 'right' }}>HEALTH</span><span>SIGNAL</span><span>NPS</span><span>NEXT QBR</span><span>OWNER</span>
            </div>
            {rows.map((r) => (
              <div key={r[0]} style={{ display: 'grid', gridTemplateColumns: '1.4fr 48px 64px 64px 1.1fr 44px 72px 52px', gap: 8, padding: '8px 14px', fontSize: 12, borderBottom: '1px solid #eef2f2', alignItems: 'center' }}>
                <b>{r[0]}</b><span style={{ color: '#64748b' }}>{r[1]}</span>
                <span style={{ textAlign: 'right' }}>{r[2]}</span>
                <span style={{ textAlign: 'right', color: tone(r[3]), fontWeight: 700 }}>{r[3]}</span>
                <span>{r[4]}</span><span style={{ color: '#64748b' }}>{r[5]}</span><span>{r[6]}</span><span>{r[7]}</span>
              </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}

// 15 — METERED. Billing close: paper sidebar + register and heatmap.
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
  const skus = ['API calls', 'Seats', 'Warehouse', 'SSO', 'Automations', 'Storage'];
  const heat = [
    [2, 2, 3, 3, 4, 1, 1, 3, 4, 4, 5, 2, 1, 3, 4, 5, 5, 4, 2, 1, 3, 4, 4, 5, 3, 1, 1, 4, 5, 5, 4],
    [1, 1, 1, 2, 2, 0, 0, 2, 2, 2, 2, 1, 0, 2, 2, 2, 2, 2, 1, 0, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2],
    [3, 3, 4, 4, 3, 2, 2, 4, 5, 4, 3, 2, 2, 4, 5, 5, 4, 3, 2, 2, 4, 5, 4, 3, 3, 2, 2, 5, 5, 4, 4],
    [0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
    [2, 2, 2, 3, 3, 1, 1, 3, 3, 4, 3, 1, 1, 3, 4, 4, 3, 2, 1, 1, 3, 4, 3, 3, 2, 1, 1, 4, 4, 3, 3],
    [1, 1, 2, 2, 2, 1, 1, 2, 2, 2, 3, 1, 1, 2, 3, 3, 2, 2, 1, 1, 2, 3, 3, 2, 2, 1, 1, 3, 3, 2, 2],
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
        <div style={{ height: 56, padding: '0 20px', display: 'flex', alignItems: 'center', gap: 12, background: '#fffaf2', borderBottom: '1px solid #ddd4c4', fontSize: 12, color: '#7c7366' }}>
          <Search placeholder="Find a customer or SKU…" w={260} />
          <span style={{ marginLeft: 'auto' }}>Unbilled overage $14,000 · 1 dispute</span>
          <Chip bg="#fffaf2" bd="#ddd4c4">Aug 2026 ▾</Chip>
        </div>
        <div style={{ flex: 1, padding: 16, display: 'grid', gridTemplateColumns: '1.15fr .9fr', gap: 12, minHeight: 0 }}>
          <section style={{ background: '#fffaf2', border: '1px solid #ddd4c4', borderRadius: 4, padding: 14, display: 'flex', flexDirection: 'column' }}>
            <b style={{ fontSize: 13, marginBottom: 8 }}>Invoice register</b>
            <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 70px 68px 68px 64px 58px', gap: 6, fontSize: 10, color: '#7c7366', paddingBottom: 6, borderBottom: '1px solid #ddd4c4' }}>
              <span>CUSTOMER</span><span>PLAN</span><span style={{ textAlign: 'right' }}>COMMIT</span><span style={{ textAlign: 'right' }}>USED</span><span style={{ textAlign: 'right' }}>OVER</span><span>STATUS</span>
            </div>
            {invoices.map((r) => (
              <div key={r[0]} style={{ display: 'grid', gridTemplateColumns: '1.3fr 70px 68px 68px 64px 58px', gap: 6, fontSize: 12, padding: '7px 0', borderBottom: '1px solid #efe8da', alignItems: 'center' }}>
                <b>{r[0]}</b><span style={{ color: '#7c7366' }}>{r[1]}</span>
                <span style={{ textAlign: 'right', fontFamily: '"IBM Plex Mono", monospace', fontSize: 11 }}>{r[2]}</span>
                <span style={{ textAlign: 'right', fontFamily: '"IBM Plex Mono", monospace', fontSize: 11 }}>{r[3]}</span>
                <span style={{ textAlign: 'right', fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, color: r[4] === '$0' ? '#7c7366' : '#9a3412' }}>{r[4]}</span>
                <span style={{ color: stc[r[5]], fontWeight: 700, fontSize: 11 }}>{r[5]}</span>
              </div>
            ))}
          </section>
          <section style={{ background: '#fffaf2', border: '1px solid #ddd4c4', borderRadius: 4, padding: 14, display: 'flex', flexDirection: 'column' }}>
            <b style={{ fontSize: 13, marginBottom: 10 }}>SKU usage · 1–31 Aug</b>
            <div style={{ display: 'grid', gridTemplateColumns: '88px 1fr', gap: 6, flex: 1 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                {skus.map((sku) => <div key={sku} style={{ fontSize: 10, color: '#7c7366', height: 16, display: 'flex', alignItems: 'center' }}>{sku}</div>)}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                {heat.map((row, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(31, 1fr)', gap: 1, height: 16 }}>
                    {row.map((v, d) => <div key={d} style={{ background: hc[v], borderRadius: 1 }} />)}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

// 16 — DESKLINE. Dark app sidebar + inbox workspace (list + thread).
function SaasDeskline() {
  const tickets = [
    ['#4821', 'SSO loop after Okta cutover', 'P1', '12m', true],
    ['#4818', 'CSV export missing 3 columns', 'P2', '41m', false],
    ['#4814', 'Invoice PDF fails on Safari', 'P2', '1h 8m', false],
    ['#4809', 'Seat invite bounced', 'P3', '2h', false],
    ['#4802', 'Warehouse sync stuck at 86%', 'P1', '2h 20m', false],
    ['#4794', 'How to map custom roles', 'P3', '4h', false],
  ];
  return (
    <div style={{ width: SW, height: SH, display: 'flex', overflow: 'hidden', background: '#eef1f4', color: '#111827', fontFamily: '"Public Sans", system-ui, sans-serif' }}>
      <SideNav
        dark brand="Deskline" mark="D" markBg="#1d4ed8" ink="#0f172a" muted="#94a3b8" line="#1e293b"
        activeBg="#1e3a8a" activeInk="#dbeafe"
        workspace="Production"
        groups={[
          { label: 'Inbox', items: ['Assigned to me', 'Urgent', 'Waiting'] },
          { label: 'Manage', items: ['Customers', 'Macros', 'Reports'] },
        ]}
        active="Assigned to me"
        footer={<div><b>Noa Beltran</b><div style={{ opacity: 0.65, marginTop: 2 }}>Support · 6 assigned</div></div>}
      />
      <main style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        <div style={{ height: 56, padding: '0 16px', display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderBottom: '1px solid #dbe1e8' }}>
          <b style={{ fontSize: 14 }}>Assigned to me</b>
          <span style={{ fontSize: 11, background: '#fef3c7', color: '#92400e', padding: '3px 8px', borderRadius: 99, fontWeight: 700 }}>2 inside SLA risk</span>
          <span style={{ marginLeft: 'auto' }}><Search placeholder="Search tickets…" w={220} /></span>
        </div>
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '300px 1fr', minHeight: 0 }}>
          <div style={{ background: '#fff', borderRight: '1px solid #dbe1e8', overflow: 'hidden' }}>
            {tickets.map((t) => (
              <div key={t[0]} style={{ padding: '10px 12px', borderBottom: '1px solid #eef1f4', background: t[4] ? '#eef4ff' : '#fff' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#6b7280' }}>
                  <span>{t[0]} · {t[2]}</span>
                  <span style={{ color: t[2] === 'P1' ? '#b45309' : '#6b7280', fontWeight: 700 }}>{t[3]}</span>
                </div>
                <div style={{ fontSize: 13, fontWeight: 650, marginTop: 4 }}>{t[1]}</div>
              </div>
            ))}
          </div>
          <section style={{ display: 'flex', flexDirection: 'column', minHeight: 0, background: '#f7f8fa' }}>
            <div style={{ padding: '12px 16px', background: '#fff', borderBottom: '1px solid #dbe1e8' }}>
              <div style={{ fontSize: 11, color: '#6b7280' }}>#4821 · Palisade Health · first response due in 12m</div>
              <div style={{ fontSize: 16, fontWeight: 700 }}>SSO loop after Okta cutover</div>
            </div>
            <div style={{ flex: 1, padding: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ alignSelf: 'flex-start', maxWidth: '78%', background: '#fff', border: '1px solid #dbe1e8', borderRadius: 12, padding: '8px 10px', fontSize: 12, lineHeight: 1.45 }}>
                After we switched to Okta last night, Chrome users hit a redirect loop on /login. Safari is fine. About 40 people blocked.
                <div style={{ color: '#6b7280', fontSize: 10, marginTop: 6 }}>Amira Q. · 14:08</div>
              </div>
              <div style={{ alignSelf: 'flex-end', maxWidth: '78%', background: '#1d4ed8', color: '#fff', borderRadius: 12, padding: '8px 10px', fontSize: 12, lineHeight: 1.45 }}>
                Reproduced on the Palisade tenant. ACS URL still points at the old IdP — checking the weekend fallback app.
                <div style={{ opacity: 0.8, fontSize: 10, marginTop: 6 }}>You · 14:11</div>
              </div>
            </div>
            <div style={{ padding: 12, background: '#fff', borderTop: '1px solid #dbe1e8' }}>
              <div style={{ border: '1px solid #dbe1e8', borderRadius: 10, padding: '10px 12px', color: '#9ca3af', fontSize: 12 }}>Reply to Palisade Health…</div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

function DashSaasProductSection() {
  return (
    <DCSection id="dash-saas-product" title="Dashboards — SaaS Product"
      subtitle="Four product consoles with a persistent sidebar and a main workspace: activation, account health, usage billing, and support.">
      <DCArtboard id="s-nock" label="13 · Nock · Activation" width={SW} height={SH}><SaasNock /></DCArtboard>
      <DCArtboard id="s-quorum" label="14 · Quorum · Account Health" width={SW} height={SH}><SaasQuorum /></DCArtboard>
      <DCArtboard id="s-metered" label="15 · Metered · Usage Billing" width={SW} height={SH}><SaasMetered /></DCArtboard>
      <DCArtboard id="s-deskline" label="16 · Deskline · Support Queue" width={SW} height={SH}><SaasDeskline /></DCArtboard>
    </DCSection>
  );
}

window.DashSaasProductSection = DashSaasProductSection;
