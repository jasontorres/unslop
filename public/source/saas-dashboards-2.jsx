// SaaS platform consoles — attribution, identity, trust, model spend.
// Separate products from the industry desks and from the SaaS product set.

const PW = 1280;
const PH = 800;

function PFlow({ stages }) {
  const max = Math.max(...stages.map((s) => s.n));
  return (
    <div style={{ display: 'flex', alignItems: 'stretch', gap: 0, height: 92 }}>
      {stages.map((st, i) => (
        <div key={st.name} style={{ display: 'flex', alignItems: 'center', flex: st.n }}>
          <div style={{
            flex: 1, height: 28 + (st.n / max) * 48, background: st.color, color: st.ink || '#0b1220',
            display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 10px',
            borderRadius: i === 0 ? '8px 0 0 8px' : i === stages.length - 1 ? '0 8px 8px 0' : 0,
          }}>
            <div style={{ fontSize: 10, opacity: 0.8 }}>{st.name}</div>
            <div style={{ fontSize: 14, fontWeight: 750 }}>{st.label}</div>
          </div>
          {i < stages.length - 1 && <div style={{ width: 0, height: 0, borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: `8px solid ${st.color}`, marginLeft: -1 }} />}
        </div>
      ))}
    </div>
  );
}

// 17 — CATCHMENT. B2B attribution: sourced pipeline flow + campaign table.
function SaasCatchment() {
  const campaigns = [
    ['Q3 Partner webinar', 'Partner', '$18.4k', 42, '$610k', '$438', '4.1 mo'],
    ['Search · “warehouse sync”', 'Paid', '$41.2k', 67, '$890k', '$615', '6.8 mo'],
    ['Lifecycle · expansion', 'Owned', '$6.1k', 19, '$240k', '$321', '2.9 mo'],
    ['Review sites · summer', 'Paid', '$22.0k', 28, '$310k', '$786', '9.4 mo'],
    ['Founder newsletter', 'Owned', '$1.4k', 11, '$164k', '$127', '1.8 mo'],
    ['Cloud marketplace', 'Partner', '$9.8k', 15, '$205k', '$653', '7.2 mo'],
  ];
  const s = {
    root: { width: PW, height: PH, background: '#fafafa', color: '#171717', fontFamily: '"Outfit", system-ui, sans-serif', display: 'flex', flexDirection: 'column' },
    bar: { height: 56, padding: '0 22px', display: 'flex', alignItems: 'center', gap: 18, borderBottom: '1px solid #e5e5e5' },
    body: { flex: 1, padding: 20, display: 'flex', flexDirection: 'column', gap: 16, minHeight: 0 },
    hero: { display: 'grid', gridTemplateColumns: '1.2fr .8fr .8fr', gap: 16 },
    metric: { background: '#fff', border: '1px solid #e5e5e5', borderRadius: 12, padding: 16 },
    table: { flex: 1, background: '#fff', border: '1px solid #e5e5e5', borderRadius: 12, overflow: 'hidden', display: 'flex', flexDirection: 'column' },
    th: { display: 'grid', gridTemplateColumns: '1.6fr 80px 80px 56px 90px 80px 80px', gap: 8, padding: '10px 16px', fontSize: 10, letterSpacing: '0.08em', color: '#737373', borderBottom: '1px solid #e5e5e5' },
    td: { display: 'grid', gridTemplateColumns: '1.6fr 80px 80px 56px 90px 80px 80px', gap: 8, padding: '10px 16px', fontSize: 13, borderBottom: '1px solid #f5f5f5', alignItems: 'center' },
  };
  return (
    <div style={s.root}>
      <header style={s.bar}>
        <div style={{ fontWeight: 750, fontSize: 18, letterSpacing: '-0.05em' }}>Catchment</div>
        <span style={{ fontSize: 13, color: '#737373' }}>Attribution · sourced pipeline</span>
        <span style={{ marginLeft: 'auto', fontSize: 12, color: '#737373' }}>Q3 to date · USD · last model: linear</span>
        <span style={{ fontSize: 12, padding: '6px 10px', border: '1px solid #e5e5e5', borderRadius: 8 }}>1 Jul – 16 Aug ▾</span>
      </header>
      <div style={s.body}>
        <section style={s.hero}>
          <div style={{ ...s.metric, gridColumn: '1 / 2' }}>
            <div style={{ fontSize: 11, color: '#737373', marginBottom: 10 }}>CHANNEL → CLOSED-WON</div>
            <PFlow stages={[
              { name: 'Paid', n: 41, label: '$1.20m', color: '#d4d4d4' },
              { name: 'Partner', n: 28, label: '$815k', color: '#a3a3a3' },
              { name: 'Owned', n: 18, label: '$404k', color: '#525252', ink: '#fafafa' },
              { name: 'Won', n: 12, label: '$2.42m', color: '#a3e635' },
            ]} />
            <div style={{ fontSize: 11, color: '#737373', marginTop: 10 }}>Pipeline remaining $1.31m · win rate 19% on sourced opps</div>
          </div>
          <div style={s.metric}>
            <div style={{ fontSize: 11, color: '#737373' }}>Sourced pipeline</div>
            <div style={{ fontSize: 32, fontWeight: 750, letterSpacing: '-0.05em' }}>$2.42m</div>
            <div style={{ fontSize: 12, color: '#4d7c0f' }}>↑ $310k vs Q2 run-rate</div>
          </div>
          <div style={s.metric}>
            <div style={{ fontSize: 11, color: '#737373' }}>Blended CAC</div>
            <div style={{ fontSize: 32, fontWeight: 750, letterSpacing: '-0.05em' }}>$482</div>
            <div style={{ fontSize: 12, color: '#737373' }}>Payback 5.4 months</div>
          </div>
        </section>
        <section style={s.table}>
          <div style={s.th}>
            <span>CAMPAIGN</span><span>CHANNEL</span><span style={{ textAlign: 'right' }}>SPEND</span><span style={{ textAlign: 'right' }}>SQLS</span><span style={{ textAlign: 'right' }}>PIPELINE</span><span style={{ textAlign: 'right' }}>CAC</span><span style={{ textAlign: 'right' }}>PAYBACK</span>
          </div>
          {campaigns.map((r) => (
            <div key={r[0]} style={s.td}>
              <b>{r[0]}</b>
              <span style={{ color: '#737373' }}>{r[1]}</span>
              <span style={{ textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>{r[2]}</span>
              <span style={{ textAlign: 'right' }}>{r[3]}</span>
              <span style={{ textAlign: 'right', fontWeight: 650 }}>{r[4]}</span>
              <span style={{ textAlign: 'right' }}>{r[5]}</span>
              <span style={{ textAlign: 'right', color: r[6].startsWith('9') ? '#b45309' : '#171717' }}>{r[6]}</span>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

// 18 — KEYSTONE. Identity admin: apps, auth log, reviews.
function SaasKeystone() {
  const apps = [
    ['Nock', 'SAML', 142, true],
    ['Quorum', 'OIDC', 86, true],
    ['GitHub', 'OIDC', 64, true],
    ['Greenhouse', 'SAML', 18, false],
    ['Looker', 'SAML', 31, true],
    ['Expensify', 'SAML', 54, false],
  ];
  const logs = [
    ['maya.chen', 'Nock', 'SSO', 'Lisbon', 'OK', '14:21:08'],
    ['eli.vora', 'GitHub', 'WebAuthn', 'London', 'OK', '14:20:44'],
    ['amira.q', 'Nock', 'SSO', 'Boston', 'Fail', '14:19:02'],
    ['noa.b', 'Looker', 'SSO', 'Austin', 'OK', '14:18:51'],
    ['priya.shah', 'Quorum', 'SSO', 'Toronto', 'OK', '14:18:12'],
    ['amira.q', 'Nock', 'SSO', 'Boston', 'Fail', '14:17:40'],
    ['j.lang', 'GitHub', 'Password', 'Remote', 'OK', '14:16:03'],
    ['v.lev', 'Greenhouse', 'SSO', 'Berlin', 'OK', '14:15:22'],
  ];
  const s = {
    root: { width: PW, height: PH, background: '#f5f5f7', color: '#1d1d1f', fontFamily: '"IBM Plex Sans", system-ui, sans-serif', display: 'flex', flexDirection: 'column' },
    bar: { height: 52, padding: '0 20px', display: 'flex', alignItems: 'center', gap: 16, background: '#fff', borderBottom: '1px solid #e8e8ed' },
    body: { flex: 1, display: 'grid', gridTemplateColumns: '220px 1fr 260px', minHeight: 0 },
    apps: { background: '#fff', borderRight: '1px solid #e8e8ed', padding: 12 },
    main: { padding: 16, display: 'flex', flexDirection: 'column', gap: 12, minHeight: 0 },
    kpis: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 },
    kpi: { background: '#fff', border: '1px solid #e8e8ed', borderRadius: 12, padding: 12 },
    log: { flex: 1, background: '#fff', border: '1px solid #e8e8ed', borderRadius: 12, overflow: 'hidden' },
    row: { display: 'grid', gridTemplateColumns: '100px 88px 80px 72px 52px 72px', gap: 8, padding: '7px 12px', fontSize: 12, borderBottom: '1px solid #f0f0f3', alignItems: 'center', fontFamily: '"IBM Plex Mono", monospace' },
    side: { background: '#fff', borderLeft: '1px solid #e8e8ed', padding: 16 },
  };
  return (
    <div style={s.root}>
      <header style={s.bar}>
        <b style={{ fontSize: 15 }}>Keystone</b>
        <span style={{ fontSize: 12, color: '#6e6e73' }}>Access admin · Palisade Health</span>
        <span style={{ marginLeft: 'auto', fontSize: 12, color: '#6e6e73' }}>Directory synced 6m ago · SCIM</span>
      </header>
      <div style={s.body}>
        <aside style={s.apps}>
          <div style={{ fontSize: 11, color: '#6e6e73', marginBottom: 8 }}>APPLICATIONS</div>
          {apps.map((a) => (
            <div key={a[0]} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 6px', borderRadius: 8, background: a[0] === 'Nock' ? '#f0f4ff' : 'transparent' }}>
              <div>
                <b style={{ fontSize: 13 }}>{a[0]}</b>
                <div style={{ fontSize: 11, color: '#6e6e73' }}>{a[1]} · {a[2]} users</div>
              </div>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: a[3] ? '#34c759' : '#ff9f0a', marginTop: 6 }} />
            </div>
          ))}
        </aside>
        <div style={s.main}>
          <div style={s.kpis}>
            <div style={s.kpi}><div style={{ fontSize: 11, color: '#6e6e73' }}>Auth success · 24h</div><div style={{ fontSize: 26, fontWeight: 700 }}>99.96%</div></div>
            <div style={s.kpi}><div style={{ fontSize: 11, color: '#6e6e73' }}>Failed attempts</div><div style={{ fontSize: 26, fontWeight: 700 }}>14</div><div style={{ fontSize: 11, color: '#c41e3a' }}>12 from one user</div></div>
            <div style={s.kpi}><div style={{ fontSize: 11, color: '#6e6e73' }}>New devices</div><div style={{ fontSize: 26, fontWeight: 700 }}>3</div></div>
          </div>
          <section style={s.log}>
            <div style={{ ...s.row, fontSize: 10, color: '#6e6e73', letterSpacing: '0.06em', fontFamily: '"IBM Plex Sans", sans-serif' }}>
              <span>USER</span><span>APP</span><span>METHOD</span><span>LOCATION</span><span>RESULT</span><span>TIME</span>
            </div>
            {logs.map((r, i) => (
              <div key={i} style={s.row}>
                <span>{r[0]}</span><span>{r[1]}</span><span>{r[2]}</span><span>{r[3]}</span>
                <span style={{ color: r[4] === 'Fail' ? '#c41e3a' : '#248a3d', fontWeight: 700 }}>{r[4]}</span>
                <span style={{ color: '#6e6e73' }}>{r[5]}</span>
              </div>
            ))}
          </section>
        </div>
        <aside style={s.side}>
          <div style={{ fontSize: 11, letterSpacing: '0.08em', color: '#6e6e73' }}>NEEDS REVIEW</div>
          {[
            ['Stale admin role', 'Expensify · 2 users unused 90d'],
            ['Repeated SSO failure', 'amira.q · 12 fails · likely ACS mismatch'],
            ['Unrotated token', 'Looker service account · 180d'],
          ].map((x) => (
            <div key={x[0]} style={{ padding: '12px 0', borderBottom: '1px solid #f0f0f3' }}>
              <b style={{ fontSize: 13 }}>{x[0]}</b>
              <div style={{ fontSize: 12, color: '#6e6e73', marginTop: 4 }}>{x[1]}</div>
            </div>
          ))}
          <div style={{ marginTop: 16, fontSize: 12, color: '#0071e3' }}>Open investigation →</div>
        </aside>
      </div>
    </div>
  );
}

// 19 — THRESH. Trust & safety workbench: report queue + decision panel.
function SaasThresh() {
  const queue = [
    ['R-2041', 'Spam / phishing', 0.92, 'User report', true],
    ['R-2038', 'Harassment', 0.71, 'User report', false],
    ['R-2033', 'Impersonation', 0.84, 'Auto-hold', false],
    ['R-2029', 'Malware link', 0.96, 'Auto-hold', false],
    ['R-2022', 'Off-policy promo', 0.44, 'User report', false],
  ];
  const s = {
    root: { width: PW, height: PH, background: '#f7f6f3', color: '#292524', fontFamily: '"IBM Plex Sans", system-ui, sans-serif', display: 'flex', flexDirection: 'column' },
    bar: { height: 50, padding: '0 18px', display: 'flex', alignItems: 'center', gap: 14, background: '#292524', color: '#f7f6f3' },
    body: { flex: 1, display: 'grid', gridTemplateColumns: '300px 1fr 280px', minHeight: 0 },
    q: { borderRight: '1px solid #e7e5e4', background: '#fff', display: 'flex', flexDirection: 'column' },
    item: (on) => ({ padding: '10px 12px', borderBottom: '1px solid #f0eeeb', background: on ? '#fff7ed' : '#fff' }),
    stage: { padding: 18, display: 'flex', flexDirection: 'column', gap: 12 },
    preview: { flex: 1, background: '#fff', border: '1px solid #e7e5e4', borderRadius: 10, padding: 16, minHeight: 0 },
    act: { background: '#fff', borderLeft: '1px solid #e7e5e4', padding: 16, display: 'flex', flexDirection: 'column', gap: 10 },
    btn: (kind) => ({
      padding: '10px 12px', borderRadius: 8, fontWeight: 700, fontSize: 13, textAlign: 'center',
      background: kind === 'remove' ? '#9f1239' : kind === 'limit' ? '#f5f0eb' : '#ecfdf3',
      color: kind === 'remove' ? '#fff' : '#292524', border: kind === 'remove' ? 'none' : '1px solid #e7e5e4',
    }),
  };
  return (
    <div style={s.root}>
      <header style={s.bar}>
        <b>Thresh</b>
        <span style={{ fontSize: 12, opacity: 0.7 }}>Trust queue · User reports + auto-holds</span>
        <span style={{ marginLeft: 'auto', fontSize: 12 }}>128 open · 41 auto-holds · SLA 15m</span>
      </header>
      <div style={s.body}>
        <aside style={s.q}>
          <div style={{ padding: 10, fontSize: 11, color: '#78716c', borderBottom: '1px solid #f0eeeb' }}>NEWEST FIRST</div>
          {queue.map((r) => (
            <div key={r[0]} style={s.item(r[4])}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#78716c' }}>
                <span>{r[0]} · {r[3]}</span>
                <span>{Math.round(r[2] * 100)} model</span>
              </div>
              <div style={{ fontWeight: 700, marginTop: 4 }}>{r[1]}</div>
            </div>
          ))}
        </aside>
        <section style={s.stage}>
          <div style={{ fontSize: 12, color: '#78716c' }}>R-2041 · reported 6m ago by @lea · 4 similar in 24h</div>
          <article style={s.preview}>
            <div style={{ fontSize: 11, color: '#78716c', marginBottom: 8 }}>MESSAGE · public channel #jobs</div>
            <p style={{ fontSize: 15, lineHeight: 1.5, margin: 0 }}>
              Urgent: payroll for August is delayed. Verify your account at <u>palisade-sso-reset.help</u> before 17:00 or access will be locked.
            </p>
            <div style={{ marginTop: 16, padding: 10, background: '#fff7ed', borderRadius: 8, fontSize: 12 }}>
              Classifier: phishing 0.92 · brand impersonation 0.81 · unknown domain (registered 14h ago)
            </div>
            <div style={{ marginTop: 12, fontSize: 12, color: '#78716c' }}>Link destination: 185.12.xx.xx · no valid TLS org · 38 clicks so far</div>
          </article>
        </section>
        <aside style={s.act}>
          <div style={{ fontSize: 11, letterSpacing: '0.08em', color: '#78716c' }}>DECISION</div>
          <div style={s.btn('keep')}>Keep visible</div>
          <div style={s.btn('limit')}>Limit distribution</div>
          <div style={s.btn('remove')}>Remove + warn</div>
          <div style={{ fontSize: 11, color: '#78716c', marginTop: 8 }}>Policy</div>
          {['Phishing / credential harvest', 'Brand impersonation', 'Malicious link'].map((p) => (
            <label key={p} style={{ fontSize: 12, display: 'flex', gap: 8, alignItems: 'center' }}>
              <span style={{ width: 12, height: 12, border: '1px solid #a8a29e', borderRadius: 3, background: p !== 'Malicious link' ? '#292524' : '#fff' }} />
              {p}
            </label>
          ))}
          <div style={{ marginTop: 'auto', fontSize: 11, color: '#78716c' }}>Escalations go to Trust on-call. This queue is not a legal hold.</div>
        </aside>
      </div>
    </div>
  );
}

// 20 — LUMEN. Model-spend explorer: treemap, 24h tokens, model mix.
function SaasLumen() {
  const cells = [
    { n: 'acme-prod', x: 0, y: 0, w: 58, h: 62, v: '$18.4k' },
    { n: 'palisade', x: 58, y: 0, w: 24, h: 38, v: '$6.1k' },
    { n: 'boreal', x: 82, y: 0, w: 18, h: 38, v: '$4.2k' },
    { n: 'orchard', x: 58, y: 38, w: 22, h: 24, v: '$2.8k' },
    { n: 'redwood', x: 80, y: 38, w: 20, h: 24, v: '$2.1k' },
    { n: 'internal', x: 0, y: 62, w: 34, h: 38, v: '$3.4k' },
    { n: 'staging', x: 34, y: 62, w: 28, h: 38, v: '$1.1k' },
    { n: 'others', x: 62, y: 62, w: 38, h: 38, v: '$2.0k' },
  ];
  const tokens = [12, 14, 13, 18, 22, 28, 41, 55, 62, 58, 44, 31, 22, 19, 18, 24, 38, 64, 72, 70, 48, 29, 18, 14];
  const s = {
    root: { width: PW, height: PH, background: '#101114', color: '#ece8df', fontFamily: '"IBM Plex Sans", system-ui, sans-serif', display: 'flex', flexDirection: 'column' },
    bar: { height: 50, padding: '0 18px', display: 'flex', alignItems: 'center', gap: 14, borderBottom: '1px solid #26262b' },
    body: { flex: 1, display: 'grid', gridTemplateColumns: '1.15fr .95fr', gap: 14, padding: 16, minHeight: 0 },
    card: { background: '#18181c', border: '1px solid #2a2a30', borderRadius: 10, padding: 14, display: 'flex', flexDirection: 'column', minHeight: 0 },
  };
  return (
    <div style={s.root}>
      <header style={s.bar}>
        <b style={{ letterSpacing: '-0.03em' }}>Lumen</b>
        <span style={{ fontSize: 12, color: '#9a958c' }}>Model spend · August</span>
        <span style={{ marginLeft: 'auto', fontSize: 12, color: '#e8b86d' }}>acme-prod is 142% of monthly commit</span>
      </header>
      <div style={s.body}>
        <section style={s.card}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
            <b style={{ fontSize: 13 }}>Spend by workspace</b>
            <span style={{ fontSize: 11, color: '#9a958c' }}>$40.1k month to date</span>
          </div>
          <svg viewBox="0 0 100 100" width="100%" height="100%" preserveAspectRatio="none">
            {cells.map((c, i) => (
              <g key={c.n}>
                <rect x={c.x} y={c.y} width={c.w} height={c.h} fill={c.n === 'acme-prod' ? '#e8b86d' : i % 2 ? '#2a2a32' : '#22222a'} stroke="#101114" strokeWidth="0.6" />
                <text x={c.x + 1.6} y={c.y + 6} fill={c.n === 'acme-prod' ? '#1a1408' : '#ece8df'} fontSize="4.2" fontFamily="IBM Plex Sans">{c.n}</text>
                <text x={c.x + 1.6} y={c.y + 11} fill={c.n === 'acme-prod' ? '#1a1408' : '#9a958c'} fontSize="3.6" fontFamily="IBM Plex Mono">{c.v}</text>
              </g>
            ))}
          </svg>
        </section>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, minHeight: 0 }}>
          <section style={{ ...s.card, flex: 1.1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <b style={{ fontSize: 13 }}>Tokens · last 24h</b>
              <span style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 12, color: '#e8b86d' }}>1.84B</span>
            </div>
            <div style={{ fontSize: 11, color: '#9a958c', marginBottom: 8 }}>Budget band $1.6k / day · currently $2.1k</div>
            <svg width="100%" height="150" viewBox="0 0 240 80" preserveAspectRatio="none">
              <rect x="0" y="28" width="240" height="18" fill="rgba(232,184,109,.12)" />
              <path d={`M ${tokens.map((v, i) => `${(i / 23) * 240},${80 - (v / 80) * 72}`).join(' L ')}`} fill="none" stroke="#e8b86d" strokeWidth="1.6" />
            </svg>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: '#9a958c' }}><span>00:00</span><span>12:00</span><span>now</span></div>
          </section>
          <section style={s.card}>
            <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 10 }}>Model mix</div>
            {[
              ['Composer 2', 46, '#e8b86d'],
              ['Sonnet batch', 31, '#7a9bb8'],
              ['Embeddings', 15, '#6b7280'],
              ['Rerank', 8, '#3f3f46'],
            ].map((r) => (
              <div key={r[0]} style={{ marginBottom: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 4 }}>
                  <span>{r[0]}</span><span>{r[1]}%</span>
                </div>
                <div style={{ height: 6, background: '#2a2a30', borderRadius: 99 }}>
                  <div style={{ width: `${r[1]}%`, height: '100%', background: r[2], borderRadius: 99 }} />
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}

function DashSaasPlatformSection() {
  return (
    <DCSection id="dash-saas-platform" title="Dashboards — SaaS Platform"
      subtitle="Four platform consoles: sourced-pipeline attribution, identity admin, a trust workbench, and model-spend exploration.">
      <DCArtboard id="s-catchment" label="17 · Catchment · Attribution" width={PW} height={PH}><SaasCatchment /></DCArtboard>
      <DCArtboard id="s-keystone" label="18 · Keystone · Access Admin" width={PW} height={PH}><SaasKeystone /></DCArtboard>
      <DCArtboard id="s-thresh" label="19 · Thresh · Trust Queue" width={PW} height={PH}><SaasThresh /></DCArtboard>
      <DCArtboard id="s-lumen" label="20 · Lumen · Model Spend" width={PW} height={PH}><SaasLumen /></DCArtboard>
    </DCSection>
  );
}

window.DashSaasPlatformSection = DashSaasPlatformSection;
