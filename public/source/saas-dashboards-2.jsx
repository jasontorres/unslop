// SaaS platform consoles — persistent left nav + main workspace.
// Attribution, identity, trust, model spend.

const PW = 1280;
const PH = 800;

function PNav({ brand, mark, markBg, ink, muted, line, activeBg, activeInk, groups, active, footer, dark, workspace }) {
  return (
    <aside style={{
      width: 240, flex: 'none', height: '100%', background: ink, color: dark ? '#ece8df' : '#171717',
      borderRight: `1px solid ${line}`, display: 'flex', flexDirection: 'column', padding: '20px 12px 14px', fontSize: 13,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0 8px 10px', fontWeight: 750, letterSpacing: '-0.04em', fontSize: 16 }}>
        <span style={{ width: 26, height: 26, borderRadius: 7, background: markBg, color: '#fff', display: 'grid', placeItems: 'center', fontSize: 12, fontWeight: 800 }}>{mark}</span>
        {brand}
      </div>
      {workspace && (
        <div style={{
          margin: '0 4px 16px', padding: '8px 10px', borderRadius: 8, fontSize: 12,
          background: dark ? 'rgba(255,255,255,.07)' : '#f5f5f5',
          color: dark ? '#c9c3b8' : '#525252',
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
                background: on ? activeBg : 'transparent',
                color: on ? activeInk : (dark ? '#b5b0a6' : '#525252'),
                fontWeight: on ? 650 : 500,
              }}>
                <span style={{
                  width: 14, height: 14, borderRadius: 4, flex: 'none',
                  background: on ? markBg : (dark ? '#3f3f46' : '#d4d4d4'),
                }} />
                {item}
              </div>
            );
          })}
        </div>
      ))}
      <div style={{ marginTop: 'auto', padding: 10, borderRadius: 10, background: dark ? 'rgba(255,255,255,.06)' : '#f5f5f5', fontSize: 12, color: dark ? '#c9c3b8' : '#525252' }}>
        {footer}
      </div>
    </aside>
  );
}

function PSearch({ placeholder, w = 260, dark }) {
  return (
    <div style={{
      width: w, padding: '8px 12px', borderRadius: 8, fontSize: 13,
      background: dark ? '#22222a' : '#f5f5f5', color: dark ? '#8a857c' : '#a3a3a3',
    }}>{placeholder}</div>
  );
}

// 17 — CATCHMENT. Attribution with dark sidebar + pipeline workspace.
function SaasCatchment() {
  const campaigns = [
    ['Q3 Partner webinar', 'Partner', '$18.4k', 42, '$610k', '$438', '4.1 mo'],
    ['Search · warehouse sync', 'Paid', '$41.2k', 67, '$890k', '$615', '6.8 mo'],
    ['Lifecycle · expansion', 'Owned', '$6.1k', 19, '$240k', '$321', '2.9 mo'],
    ['Review sites · summer', 'Paid', '$22.0k', 28, '$310k', '$786', '9.4 mo'],
    ['Founder newsletter', 'Owned', '$1.4k', 11, '$164k', '$127', '1.8 mo'],
    ['Cloud marketplace', 'Partner', '$9.8k', 15, '$205k', '$653', '7.2 mo'],
  ];
  const stages = [
    { name: 'Paid', label: '$1.20m', w: 34, bg: '#e5e5e5' },
    { name: 'Partner', label: '$815k', w: 24, bg: '#d4d4d4' },
    { name: 'Owned', label: '$404k', w: 16, bg: '#525252', ink: '#fafafa' },
    { name: 'Won', label: '$2.42m', w: 26, bg: '#a3e635' },
  ];
  return (
    <div style={{ width: PW, height: PH, display: 'flex', overflow: 'hidden', background: '#fafafa', color: '#171717', fontFamily: '"Outfit", system-ui, sans-serif' }}>
      <PNav
        dark brand="Catchment" mark="C" markBg="#65a30d" ink="#171717" muted="#a3a3a3" line="#262626"
        activeBg="#365314" activeInk="#ecfccb"
        workspace="Linear · USD"
        groups={[
          { label: 'Acquire', items: ['Attribution', 'Campaigns', 'Channels'] },
          { label: 'Prove', items: ['Payback', 'Models', 'Exports'] },
        ]}
        active="Attribution"
        footer={<div><b>Q3 to date</b><div style={{ opacity: 0.7, marginTop: 2 }}>Sourced pipeline</div></div>}
      />
      <main style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        <div style={{ height: 56, padding: '0 20px', display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderBottom: '1px solid #e5e5e5' }}>
          <PSearch placeholder="Search campaigns…" />
          <span style={{ marginLeft: 'auto', fontSize: 12, padding: '6px 10px', border: '1px solid #e5e5e5', borderRadius: 8 }}>1 Jul – 16 Aug ▾</span>
        </div>
        <div style={{ flex: 1, padding: 18, display: 'flex', flexDirection: 'column', gap: 14, minHeight: 0 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr .7fr .7fr', gap: 10 }}>
            <section style={{ background: '#fff', border: '1px solid #e5e5e5', borderRadius: 12, padding: 14 }}>
              <div style={{ fontSize: 11, color: '#737373', marginBottom: 10 }}>CHANNEL MIX → CLOSED-WON</div>
              <div style={{ display: 'flex', height: 56, overflow: 'hidden', borderRadius: 8 }}>
                {stages.map((st) => (
                  <div key={st.name} style={{ width: `${st.w}%`, background: st.bg, color: st.ink || '#171717', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 8px' }}>
                    <div style={{ fontSize: 10, opacity: 0.75 }}>{st.name}</div>
                    <div style={{ fontSize: 13, fontWeight: 750 }}>{st.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: 11, color: '#737373', marginTop: 8 }}>Remaining pipeline $1.31m · win rate 19%</div>
            </section>
            <section style={{ background: '#fff', border: '1px solid #e5e5e5', borderRadius: 12, padding: 14 }}>
              <div style={{ fontSize: 11, color: '#737373' }}>Sourced pipeline</div>
              <div style={{ fontSize: 28, fontWeight: 750, letterSpacing: '-0.05em' }}>$2.42m</div>
              <div style={{ fontSize: 12, color: '#4d7c0f' }}>↑ $310k vs Q2 run-rate</div>
            </section>
            <section style={{ background: '#fff', border: '1px solid #e5e5e5', borderRadius: 12, padding: 14 }}>
              <div style={{ fontSize: 11, color: '#737373' }}>Blended CAC</div>
              <div style={{ fontSize: 28, fontWeight: 750, letterSpacing: '-0.05em' }}>$482</div>
              <div style={{ fontSize: 12, color: '#737373' }}>Payback 5.4 months</div>
            </section>
          </div>
          <section style={{ flex: 1, background: '#fff', border: '1px solid #e5e5e5', borderRadius: 12, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 80px 72px 52px 80px 72px 72px', gap: 8, padding: '10px 16px', fontSize: 10, letterSpacing: '0.08em', color: '#737373', borderBottom: '1px solid #e5e5e5' }}>
              <span>CAMPAIGN</span><span>CHANNEL</span><span style={{ textAlign: 'right' }}>SPEND</span><span style={{ textAlign: 'right' }}>SQLS</span><span style={{ textAlign: 'right' }}>PIPELINE</span><span style={{ textAlign: 'right' }}>CAC</span><span style={{ textAlign: 'right' }}>PAYBACK</span>
            </div>
            {campaigns.map((r) => (
              <div key={r[0]} style={{ display: 'grid', gridTemplateColumns: '1.6fr 80px 72px 52px 80px 72px 72px', gap: 8, padding: '9px 16px', fontSize: 13, borderBottom: '1px solid #f5f5f5', alignItems: 'center' }}>
                <b>{r[0]}</b><span style={{ color: '#737373' }}>{r[1]}</span>
                <span style={{ textAlign: 'right' }}>{r[2]}</span>
                <span style={{ textAlign: 'right' }}>{r[3]}</span>
                <span style={{ textAlign: 'right', fontWeight: 650 }}>{r[4]}</span>
                <span style={{ textAlign: 'right' }}>{r[5]}</span>
                <span style={{ textAlign: 'right', color: r[6].startsWith('9') ? '#b45309' : '#171717' }}>{r[6]}</span>
              </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}

// 18 — KEYSTONE. Identity admin with dark sidebar + auth log.
function SaasKeystone() {
  const apps = [
    ['Nock', 'SAML', 142, true],
    ['Quorum', 'OIDC', 86, true],
    ['GitHub', 'OIDC', 64, true],
    ['Greenhouse', 'SAML', 18, false],
    ['Looker', 'SAML', 31, true],
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
  return (
    <div style={{ width: PW, height: PH, display: 'flex', overflow: 'hidden', background: '#f5f5f7', color: '#1d1d1f', fontFamily: '"IBM Plex Sans", system-ui, sans-serif' }}>
      <PNav
        dark brand="Keystone" mark="K" markBg="#0071e3" ink="#1d1d1f" muted="#86868b" line="#2c2c2e"
        activeBg="#2c2c2e" activeInk="#fff"
        workspace="Palisade Health"
        groups={[
          { label: 'Directory', items: ['Overview', 'People', 'Groups'] },
          { label: 'Access', items: ['Applications', 'Policies', 'Tokens'] },
        ]}
        active="Overview"
        footer={<div><b>Directory</b><div style={{ opacity: 0.65, marginTop: 2 }}>SCIM synced 6m ago</div></div>}
      />
      <main style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        <div style={{ height: 56, padding: '0 18px', display: 'flex', alignItems: 'center', gap: 12, background: '#fff', borderBottom: '1px solid #e8e8ed', fontSize: 13, color: '#6e6e73' }}>
          <PSearch placeholder="Search people or apps…" />
          <span style={{ marginLeft: 'auto' }}>14 failed attempts · 12 from one user</span>
        </div>
        <div style={{ flex: 1, padding: 16, display: 'flex', flexDirection: 'column', gap: 12, minHeight: 0 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
            {[['Auth success · 24h', '99.96%'], ['Failed attempts', '14'], ['New devices', '3']].map((k) => (
              <div key={k[0]} style={{ background: '#fff', border: '1px solid #e8e8ed', borderRadius: 12, padding: 12 }}>
                <div style={{ fontSize: 11, color: '#6e6e73' }}>{k[0]}</div>
                <div style={{ fontSize: 26, fontWeight: 700 }}>{k[1]}</div>
              </div>
            ))}
          </div>
          <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '200px 1fr', gap: 12, minHeight: 0 }}>
            <section style={{ background: '#fff', border: '1px solid #e8e8ed', borderRadius: 12, padding: 12 }}>
              <div style={{ fontSize: 11, color: '#6e6e73', marginBottom: 8 }}>APPLICATIONS</div>
              {apps.map((a) => (
                <div key={a[0]} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 4px' }}>
                  <div><b style={{ fontSize: 13 }}>{a[0]}</b><div style={{ fontSize: 11, color: '#6e6e73' }}>{a[1]} · {a[2]}</div></div>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: a[3] ? '#34c759' : '#ff9f0a', marginTop: 6 }} />
                </div>
              ))}
            </section>
            <section style={{ background: '#fff', border: '1px solid #e8e8ed', borderRadius: 12, overflow: 'hidden' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '100px 80px 78px 70px 48px 70px', gap: 8, padding: '8px 12px', fontSize: 10, color: '#6e6e73', borderBottom: '1px solid #e8e8ed' }}>
                <span>USER</span><span>APP</span><span>METHOD</span><span>LOCATION</span><span>RESULT</span><span>TIME</span>
              </div>
              {logs.map((r, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '100px 80px 78px 70px 48px 70px', gap: 8, padding: '7px 12px', fontSize: 12, fontFamily: '"IBM Plex Mono", monospace', borderBottom: '1px solid #f0f0f3' }}>
                  <span>{r[0]}</span><span>{r[1]}</span><span>{r[2]}</span><span>{r[3]}</span>
                  <span style={{ color: r[4] === 'Fail' ? '#c41e3a' : '#248a3d', fontWeight: 700 }}>{r[4]}</span>
                  <span style={{ color: '#6e6e73' }}>{r[5]}</span>
                </div>
              ))}
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

// 19 — THRESH. Trust queue: dark sidebar + report workspace.
function SaasThresh() {
  const queue = [
    ['R-2041', 'Spam / phishing', 0.92, 'User report', true],
    ['R-2038', 'Harassment', 0.71, 'User report', false],
    ['R-2033', 'Impersonation', 0.84, 'Auto-hold', false],
    ['R-2029', 'Malware link', 0.96, 'Auto-hold', false],
    ['R-2022', 'Off-policy promo', 0.44, 'User report', false],
  ];
  return (
    <div style={{ width: PW, height: PH, display: 'flex', overflow: 'hidden', background: '#f7f6f3', color: '#292524', fontFamily: '"IBM Plex Sans", system-ui, sans-serif' }}>
      <PNav
        dark brand="Thresh" mark="T" markBg="#9f1239" ink="#1c1917" muted="#a8a29e" line="#292524"
        activeBg="#4c0519" activeInk="#fecdd3"
        workspace="Policy v4.2"
        groups={[
          { label: 'Queues', items: ['User reports', 'Auto-holds', 'Appeals'] },
          { label: 'Policy', items: ['Rules', 'Audit log'] },
        ]}
        active="User reports"
        footer={<div><b>128 open</b><div style={{ opacity: 0.7, marginTop: 2 }}>SLA 15 minutes</div></div>}
      />
      <main style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        <div style={{ height: 56, padding: '0 16px', display: 'flex', alignItems: 'center', gap: 12, background: '#292524', color: '#f7f6f3', fontSize: 13 }}>
          User reports
          <span style={{ marginLeft: 'auto', opacity: 0.7 }}>41 auto-holds · 4 similar in 24h on selected</span>
        </div>
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '280px 1fr 240px', minHeight: 0 }}>
          <div style={{ background: '#fff', borderRight: '1px solid #e7e5e4' }}>
            {queue.map((r) => (
              <div key={r[0]} style={{ padding: '10px 12px', borderBottom: '1px solid #f0eeeb', background: r[4] ? '#fff7ed' : '#fff' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#78716c' }}>
                  <span>{r[0]} · {r[3]}</span><span>{Math.round(r[2] * 100)}</span>
                </div>
                <div style={{ fontWeight: 700, marginTop: 4 }}>{r[1]}</div>
              </div>
            ))}
          </div>
          <section style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ fontSize: 12, color: '#78716c' }}>R-2041 · reported 6m ago by @lea</div>
            <article style={{ flex: 1, background: '#fff', border: '1px solid #e7e5e4', borderRadius: 10, padding: 16 }}>
              <div style={{ fontSize: 11, color: '#78716c', marginBottom: 8 }}>MESSAGE · #jobs</div>
              <p style={{ fontSize: 15, lineHeight: 1.5, margin: 0 }}>
                Urgent: payroll for August is delayed. Verify your account at palisade-sso-reset.help before 17:00 or access will be locked.
              </p>
              <div style={{ marginTop: 14, padding: 10, background: '#fff7ed', borderRadius: 8, fontSize: 12 }}>
                Classifier: phishing 0.92 · brand impersonation 0.81 · domain registered 14h ago
              </div>
            </article>
          </section>
          <aside style={{ background: '#fff', borderLeft: '1px solid #e7e5e4', padding: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ fontSize: 11, letterSpacing: '0.08em', color: '#78716c' }}>DECISION</div>
            <div style={{ padding: 10, borderRadius: 8, background: '#ecfdf3', border: '1px solid #e7e5e4', fontWeight: 700, fontSize: 13 }}>Keep visible</div>
            <div style={{ padding: 10, borderRadius: 8, background: '#f5f0eb', border: '1px solid #e7e5e4', fontWeight: 700, fontSize: 13 }}>Limit distribution</div>
            <div style={{ padding: 10, borderRadius: 8, background: '#9f1239', color: '#fff', fontWeight: 700, fontSize: 13 }}>Remove + warn</div>
          </aside>
        </div>
      </main>
    </div>
  );
}

// 20 — LUMEN. Model spend with dark sidebar + treemap workspace.
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
  return (
    <div style={{ width: PW, height: PH, display: 'flex', overflow: 'hidden', background: '#101114', color: '#ece8df', fontFamily: '"IBM Plex Sans", system-ui, sans-serif' }}>
      <PNav
        dark brand="Lumen" mark="L" markBg="#e8b86d" ink="#18181c" muted="#8a857c" line="#2a2a30"
        activeBg="#2a2a30" activeInk="#e8b86d"
        workspace="August MTD"
        groups={[
          { label: 'Spend', items: ['Workspaces', 'Models', 'Budgets'] },
          { label: 'Ops', items: ['Alerts', 'Exports'] },
        ]}
        active="Workspaces"
        footer={<div><b>August</b><div style={{ opacity: 0.7, marginTop: 2 }}>$40.1k month to date</div></div>}
      />
      <main style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        <div style={{ height: 56, padding: '0 16px', display: 'flex', alignItems: 'center', gap: 12, borderBottom: '1px solid #26262b', fontSize: 13, color: '#9a958c' }}>
          <PSearch placeholder="Filter workspaces…" dark />
          <span style={{ marginLeft: 'auto', color: '#e8b86d' }}>acme-prod is 142% of monthly commit</span>
        </div>
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.15fr .95fr', gap: 12, padding: 14, minHeight: 0 }}>
          <section style={{ background: '#18181c', border: '1px solid #2a2a30', borderRadius: 10, padding: 14, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
              <b style={{ fontSize: 13 }}>Spend by workspace</b>
              <span style={{ fontSize: 11, color: '#9a958c' }}>$40.1k MTD</span>
            </div>
            <svg viewBox="0 0 100 100" width="100%" height="100%" preserveAspectRatio="none">
              {cells.map((c, i) => (
                <g key={c.n}>
                  <rect x={c.x} y={c.y} width={c.w} height={c.h} fill={c.n === 'acme-prod' ? '#e8b86d' : i % 2 ? '#2a2a32' : '#22222a'} stroke="#101114" strokeWidth="0.6" />
                  <text x={c.x + 1.6} y={c.y + 6} fill={c.n === 'acme-prod' ? '#1a1408' : '#ece8df'} fontSize="4.2">{c.n}</text>
                  <text x={c.x + 1.6} y={c.y + 11} fill={c.n === 'acme-prod' ? '#1a1408' : '#9a958c'} fontSize="3.6">{c.v}</text>
                </g>
              ))}
            </svg>
          </section>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minHeight: 0 }}>
            <section style={{ flex: 1, background: '#18181c', border: '1px solid #2a2a30', borderRadius: 10, padding: 14 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <b style={{ fontSize: 13 }}>Tokens · last 24h</b>
                <span style={{ fontFamily: '"IBM Plex Mono", monospace', color: '#e8b86d' }}>1.84B</span>
              </div>
              <div style={{ fontSize: 11, color: '#9a958c', margin: '6px 0 8px' }}>Budget band $1.6k / day · currently $2.1k</div>
              <svg width="100%" height="120" viewBox="0 0 240 80" preserveAspectRatio="none">
                <rect x="0" y="28" width="240" height="18" fill="rgba(232,184,109,.12)" />
                <path d={`M ${tokens.map((v, i) => `${(i / 23) * 240},${80 - (v / 80) * 72}`).join(' L ')}`} fill="none" stroke="#e8b86d" strokeWidth="1.6" />
              </svg>
            </section>
            <section style={{ background: '#18181c', border: '1px solid #2a2a30', borderRadius: 10, padding: 14 }}>
              <b style={{ fontSize: 13, display: 'block', marginBottom: 8 }}>Model mix</b>
              {[['Composer 2', 46, '#e8b86d'], ['Sonnet batch', 31, '#7a9bb8'], ['Embeddings', 15, '#6b7280'], ['Rerank', 8, '#3f3f46']].map((r) => (
                <div key={r[0]} style={{ marginBottom: 7 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 3 }}><span>{r[0]}</span><span>{r[1]}%</span></div>
                  <div style={{ height: 6, background: '#2a2a30', borderRadius: 99 }}><div style={{ width: `${r[1]}%`, height: '100%', background: r[2], borderRadius: 99 }} /></div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

function DashSaasPlatformSection() {
  return (
    <DCSection id="dash-saas-platform" title="Dashboards — SaaS Platform"
      subtitle="Four platform consoles with a persistent sidebar and a main workspace: attribution, identity, trust, and model spend.">
      <DCArtboard id="s-catchment" label="17 · Catchment · Attribution" width={PW} height={PH}><SaasCatchment /></DCArtboard>
      <DCArtboard id="s-keystone" label="18 · Keystone · Access Admin" width={PW} height={PH}><SaasKeystone /></DCArtboard>
      <DCArtboard id="s-thresh" label="19 · Thresh · Trust Queue" width={PW} height={PH}><SaasThresh /></DCArtboard>
      <DCArtboard id="s-lumen" label="20 · Lumen · Model Spend" width={PW} height={PH}><SaasLumen /></DCArtboard>
    </DCSection>
  );
}

window.DashSaasPlatformSection = DashSaasPlatformSection;
