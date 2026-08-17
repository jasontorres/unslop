// SaaS platform consoles — sidebar shell with stats + charts.
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

function PlatTrend({ pts, color }) {
  const series = Array.isArray(pts) ? pts : [];
  if (series.length < 2) return null;
  const w = 92, h = 34;
  const max = Math.max(...series);
  const min = Math.min(...series);
  const span = max - min || 1;
  const d = series.map((v, i) => `${i ? 'L' : 'M'} ${(i / (series.length - 1)) * w},${h - 3 - ((v - min) / span) * (h - 6)}`).join(' ');
  return <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}><path d={d} fill="none" stroke={color} strokeWidth="1.8" /></svg>;
}

function PArea({ series, compare, color, colorB, gid, grid = '#ececec', h = 168 }) {
  const a = Array.isArray(series) ? series : [];
  const b = Array.isArray(compare) ? compare : null;
  if (a.length < 2) return null;
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
      {b && <path d={path(b)} fill="none" stroke={colorB || '#a3a3a3'} strokeWidth="1.6" strokeDasharray="5 4" />}
    </svg>
  );
}

function PKpi({ label, value, delta, up, spark, color, bg = '#fff', bd = '#e5e5e5', muted = '#737373' }) {
  return (
    <div style={{ background: bg, border: `1px solid ${bd}`, borderRadius: 12, padding: '12px 14px', minWidth: 0 }}>
      <div style={{ fontSize: 11, color: muted }}>{label}</div>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 8 }}>
        <div>
          <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.05em', margin: '2px 0' }}>{value}</div>
          {delta && <div style={{ fontSize: 11, fontWeight: 650, color: up ? '#4d7c0f' : '#b45309' }}>{delta}</div>}
        </div>
        {spark && <PlatTrend pts={spark} color={color} />}
      </div>
    </div>
  );
}

function PCard({ title, right, children, style }) {
  return (
    <section style={{ background: '#fff', border: '1px solid #e5e5e5', borderRadius: 12, padding: 14, display: 'flex', flexDirection: 'column', minHeight: 0, ...style }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
        <b style={{ fontSize: 13 }}>{title}</b>
        {right && <span style={{ fontSize: 11, color: '#737373' }}>{right}</span>}
      </div>
      {children}
    </section>
  );
}

// 17 — CATCHMENT. Attribution: pipeline trend, channel bars, campaigns.
function SaasCatchment() {
  const pipe = [1.12, 1.18, 1.24, 1.31, 1.48, 1.62, 1.71, 1.88, 1.96, 2.08, 2.21, 2.42];
  const sqls = [18, 21, 19, 24, 28, 22, 17, 31, 26, 29, 33, 36];
  const campaigns = [
    ['Search · warehouse sync', 'Paid', '$41.2k', '$890k', '6.8 mo'],
    ['Q3 Partner webinar', 'Partner', '$18.4k', '$610k', '4.1 mo'],
    ['Review sites · summer', 'Paid', '$22.0k', '$310k', '9.4 mo'],
    ['Lifecycle · expansion', 'Owned', '$6.1k', '$240k', '2.9 mo'],
  ];
  const channels = [
    { name: 'Paid', v: 1.2, c: '#d4d4d4' },
    { name: 'Partner', v: 0.82, c: '#a3a3a3' },
    { name: 'Owned', v: 0.4, c: '#525252' },
  ];
  return (
    <div style={{ width: PW, height: PH, display: 'flex', overflow: 'hidden', background: '#fafafa', color: '#171717', fontFamily: '"Outfit", system-ui, sans-serif' }}>
      <PNav
        dark brand="Catchment" mark="C" markBg="#65a30d" ink="#171717" muted="#a3a3a3" line="#262626"
        activeBg="#365314" activeInk="#ecfccb"
        workspace="Q3 sourced"
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
        <div style={{ flex: 1, padding: 16, display: 'flex', flexDirection: 'column', gap: 12, minHeight: 0 }}>
          <div>
            <h1 style={{ margin: 0, fontSize: 20, fontWeight: 700, letterSpacing: '-0.04em' }}>Attribution</h1>
            <div style={{ fontSize: 12, color: '#737373', marginTop: 2 }}>Sourced pipeline · linear model · USD</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
            <PKpi label="Sourced pipeline" value="$2.42m" delta="↑ $310k vs Q2 run-rate" up color="#65a30d" spark={pipe} />
            <PKpi label="Blended CAC" value="$482" delta="↓ $41 vs Q2" up color="#65a30d" spark={[560, 540, 530, 510, 498, 490, 482]} />
            <PKpi label="SQLs · Q3" value="304" delta="↑ 18% vs run-rate" up color="#171717" spark={sqls} />
            <PKpi label="Payback" value="5.4 mo" delta="Owned channel 1.8 mo" up color="#65a30d" spark={[6.8, 6.4, 6.1, 5.9, 5.7, 5.5, 5.4]} />
          </div>
          <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.5fr .95fr', gap: 10, minHeight: 0 }}>
            <PCard title="Sourced pipeline" right="Weekly · $m">
              <div style={{ flex: 1, minHeight: 0 }}>
                <PArea series={pipe} color="#65a30d" gid="catchFill" />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: '#a3a3a3', marginTop: 4 }}>
                <span>1 Jul</span><span>1 Aug</span><span>16 Aug</span>
              </div>
            </PCard>
            <PCard title="Channel → closed-won" right="$m">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flex: 1, justifyContent: 'center' }}>
                {channels.map((ch) => (
                  <div key={ch.name}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 4 }}>
                      <span>{ch.name}</span><b>${ch.v.toFixed(2)}m</b>
                    </div>
                    <div style={{ height: 14, background: '#f5f5f5', borderRadius: 4, overflow: 'hidden' }}>
                      <div style={{ width: `${(ch.v / 1.2) * 100}%`, height: '100%', background: ch.name === 'Owned' ? '#a3e635' : ch.c }} />
                    </div>
                  </div>
                ))}
                <div style={{ padding: '8px 10px', background: '#ecfccb', borderRadius: 8, fontSize: 12, fontWeight: 650 }}>Won $2.42m · remaining $1.31m</div>
              </div>
            </PCard>
          </div>
          <PCard title="Campaigns" right="Payback in orange if &gt; 8 mo" style={{ flex: 'none' }}>
            {campaigns.map((r) => (
              <div key={r[0]} style={{ display: 'grid', gridTemplateColumns: '1.8fr 70px 64px 72px 72px', gap: 8, fontSize: 12, padding: '6px 0', borderBottom: '1px solid #f5f5f5', alignItems: 'center' }}>
                <b>{r[0]}</b><span style={{ color: '#737373' }}>{r[1]}</span>
                <span>{r[2]}</span><span style={{ fontWeight: 650 }}>{r[3]}</span>
                <span style={{ textAlign: 'right', color: r[4].startsWith('9') ? '#b45309' : '#171717' }}>{r[4]}</span>
              </div>
            ))}
          </PCard>
        </div>
      </main>
    </div>
  );
}

// 18 — KEYSTONE. Access overview: auth volume, method mix, log.
function SaasKeystone() {
  const auths = [42, 28, 18, 12, 9, 8, 14, 38, 86, 124, 118, 96, 88, 92, 101, 84, 76, 68, 54, 48, 44, 51, 62, 71];
  const fails = [0, 0, 0, 1, 0, 0, 0, 1, 2, 4, 3, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
  const methods = [
    { n: 72, c: '#0071e3', label: 'SSO' },
    { n: 19, c: '#34c759', label: 'WebAuthn' },
    { n: 9, c: '#86868b', label: 'Password' },
  ];
  const logs = [
    ['maya.chen', 'Nock', 'SSO', 'OK'],
    ['amira.q', 'Nock', 'SSO', 'Fail'],
    ['eli.vora', 'GitHub', 'WebAuthn', 'OK'],
    ['amira.q', 'Nock', 'SSO', 'Fail'],
    ['priya.shah', 'Quorum', 'SSO', 'OK'],
  ];
  const total = methods.reduce((s, p) => s + p.n, 0);
  const circ = 2 * Math.PI * 34;
  let off = 0;
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
          <div>
            <h1 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>Access overview</h1>
            <div style={{ fontSize: 12, color: '#6e6e73', marginTop: 2 }}>Last 24 hours · Palisade Health</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
            <PKpi label="Auth success" value="99.96%" delta="14 fails of 31.2k" up color="#0071e3" spark={[99.9, 99.91, 99.94, 99.95, 99.93, 99.96]} bd="#e8e8ed" muted="#6e6e73" />
            <PKpi label="Failed attempts" value="14" delta="12 from amira.q" color="#c41e3a" spark={fails.map((n) => n + 1)} bd="#e8e8ed" muted="#6e6e73" />
            <PKpi label="New devices" value="3" delta="2 pending review" color="#0071e3" spark={[0, 0, 1, 1, 2, 2, 3]} bd="#e8e8ed" muted="#6e6e73" />
            <PKpi label="Active sessions" value="214" delta="↑ 18 vs yesterday" up color="#0071e3" spark={[180, 188, 192, 198, 204, 210, 214]} bd="#e8e8ed" muted="#6e6e73" />
          </div>
          <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.5fr .95fr', gap: 10, minHeight: 0 }}>
            <PCard title="Authentications · 24h" right="Dashed = failures ×20" style={{ borderColor: '#e8e8ed' }}>
              <div style={{ flex: 1, minHeight: 0 }}>
                <PArea series={auths} compare={fails.map((n) => n * 20)} color="#0071e3" colorB="#c41e3a" gid="keyFill" grid="#ececf1" />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: '#86868b', marginTop: 4 }}>
                <span>00:00</span><span>08:00</span><span>16:00</span><span>now</span>
              </div>
            </PCard>
            <PCard title="Method mix" style={{ borderColor: '#e8e8ed' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, flex: 1 }}>
                <svg width="132" height="132" viewBox="0 0 100 100">
                  {methods.map((p) => {
                    const len = (p.n / total) * circ;
                    const el = <circle key={p.label} cx="50" cy="50" r="34" fill="none" stroke={p.c} strokeWidth="14" strokeDasharray={`${len} ${circ - len}`} strokeDashoffset={-off} transform="rotate(-90 50 50)" />;
                    off += len;
                    return el;
                  })}
                  <text x="50" y="48" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1d1d1f">31.2k</text>
                  <text x="50" y="60" textAnchor="middle" fontSize="7" fill="#6e6e73">auths</text>
                </svg>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {methods.map((p) => (
                    <div key={p.label} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12 }}>
                      <span style={{ width: 8, height: 8, borderRadius: 2, background: p.c }} />
                      <span style={{ width: 72 }}>{p.label}</span>
                      <b>{p.n}%</b>
                    </div>
                  ))}
                </div>
              </div>
            </PCard>
          </div>
          <PCard title="Recent events" right="Live" style={{ flex: 'none', borderColor: '#e8e8ed' }}>
            {logs.map((r, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '120px 80px 80px 48px', gap: 8, fontSize: 12, fontFamily: '"IBM Plex Mono", monospace', padding: '6px 0', borderBottom: '1px solid #f0f0f3' }}>
                <span>{r[0]}</span><span>{r[1]}</span><span>{r[2]}</span>
                <span style={{ color: r[3] === 'Fail' ? '#c41e3a' : '#248a3d', fontWeight: 700 }}>{r[3]}</span>
              </div>
            ))}
          </PCard>
        </div>
      </main>
    </div>
  );
}

function PStack({ rows, colors, h = 168 }) {
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

// 19 — THRESH. Trust overview: volume, categories, queue snapshot.
function SaasThresh() {
  const volume = [
    [18, 6], [22, 8], [19, 7], [31, 12], [28, 9], [14, 4], [11, 3],
    [24, 10], [27, 11], [41, 18], [33, 14], [26, 9], [29, 11], [34, 13],
  ];
  const cats = [['Phishing', 34], ['Harassment', 22], ['Impersonation', 18], ['Malware', 14], ['Other', 12]];
  const queue = [
    ['R-2041', 'Spam / phishing', 0.92],
    ['R-2029', 'Malware link', 0.96],
    ['R-2033', 'Impersonation', 0.84],
    ['R-2038', 'Harassment', 0.71],
  ];
  return (
    <div style={{ width: PW, height: PH, display: 'flex', overflow: 'hidden', background: '#f7f6f3', color: '#292524', fontFamily: '"IBM Plex Sans", system-ui, sans-serif' }}>
      <PNav
        dark brand="Thresh" mark="T" markBg="#9f1239" ink="#1c1917" muted="#a8a29e" line="#292524"
        activeBg="#4c0519" activeInk="#fecdd3"
        workspace="Policy v4.2"
        groups={[
          { label: 'Queues', items: ['Overview', 'User reports', 'Auto-holds'] },
          { label: 'Policy', items: ['Rules', 'Audit log'] },
        ]}
        active="Overview"
        footer={<div><b>128 open</b><div style={{ opacity: 0.7, marginTop: 2 }}>SLA 15 minutes</div></div>}
      />
      <main style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        <div style={{ height: 56, padding: '0 16px', display: 'flex', alignItems: 'center', gap: 12, background: '#292524', color: '#f7f6f3', fontSize: 13 }}>
          Trust overview
          <span style={{ marginLeft: 'auto', opacity: 0.7 }}>41 auto-holds · SLA 15m</span>
        </div>
        <div style={{ flex: 1, padding: 16, display: 'flex', flexDirection: 'column', gap: 12, minHeight: 0 }}>
          <div>
            <h1 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>Trust overview</h1>
            <div style={{ fontSize: 12, color: '#78716c', marginTop: 2 }}>User reports and auto-holds · last 14 days</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
            <PKpi label="Open reports" value="128" delta="↑ 22 vs prior 14d" color="#9f1239" spark={[88, 92, 98, 104, 110, 118, 128]} bd="#e7e5e4" muted="#78716c" />
            <PKpi label="Auto-holds" value="41" delta="32% of inbound" color="#9f1239" spark={[22, 24, 28, 30, 34, 38, 41]} bd="#e7e5e4" muted="#78716c" />
            <PKpi label="Median handle" value="11m" delta="↓ 2m vs SLA 15m" up color="#9f1239" spark={[16, 15, 14, 13, 12, 12, 11]} bd="#e7e5e4" muted="#78716c" />
            <PKpi label="Removed" value="18%" delta="↑ 3pp after v4.2" up color="#9f1239" spark={[12, 13, 14, 15, 16, 17, 18]} bd="#e7e5e4" muted="#78716c" />
          </div>
          <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.5fr .95fr', gap: 10, minHeight: 0 }}>
            <PCard title="Inbound volume" right="Reports · auto-holds" style={{ borderColor: '#e7e5e4' }}>
              <div style={{ flex: 1, minHeight: 0 }}>
                <PStack rows={volume} colors={['#9f1239', '#fda4af']} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: '#a8a29e', marginTop: 4 }}>
                <span>3 Aug</span><span>9 Aug</span><span>16 Aug</span>
              </div>
            </PCard>
            <PCard title="Categories" style={{ borderColor: '#e7e5e4' }}>
              {cats.map((t) => (
                <div key={t[0]} style={{ marginBottom: 10 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 4 }}><span>{t[0]}</span><b>{t[1]}%</b></div>
                  <div style={{ height: 8, background: '#f0eeeb', borderRadius: 99 }}>
                    <div style={{ width: `${t[1]}%`, height: '100%', background: t[0] === 'Phishing' ? '#9f1239' : '#fda4af', borderRadius: 99 }} />
                  </div>
                </div>
              ))}
            </PCard>
          </div>
          <PCard title="Highest confidence in queue" right="Score from classifier" style={{ flex: 'none', borderColor: '#e7e5e4' }}>
            {queue.map((r) => (
              <div key={r[0]} style={{ display: 'grid', gridTemplateColumns: '72px 1fr 40px', gap: 8, fontSize: 12, padding: '6px 0', borderBottom: '1px solid #f0eeeb', alignItems: 'center' }}>
                <span style={{ color: '#78716c' }}>{r[0]}</span>
                <b>{r[1]}</b>
                <span style={{ textAlign: 'right', fontWeight: 700, color: r[2] > 0.9 ? '#9f1239' : '#292524' }}>{Math.round(r[2] * 100)}</span>
              </div>
            ))}
          </PCard>
        </div>
      </main>
    </div>
  );
}

// 20 — LUMEN. Model spend: KPIs, treemap, tokens, mix.
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
  const spend = [1.1, 1.2, 1.15, 1.4, 1.6, 1.3, 0.9, 1.8, 2.0, 2.1, 2.4, 2.2, 1.1, 0.9, 1.9, 2.1];
  const budget = Array(16).fill(1.6);
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
        <div style={{ flex: 1, padding: 14, display: 'flex', flexDirection: 'column', gap: 12, minHeight: 0 }}>
          <div>
            <h1 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>Model spend</h1>
            <div style={{ fontSize: 12, color: '#9a958c', marginTop: 2 }}>August month to date</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
            <PKpi label="Spend MTD" value="$40.1k" delta="↑ 18% vs July run-rate" color="#e8b86d" spark={spend} bg="#18181c" bd="#2a2a30" muted="#9a958c" />
            <PKpi label="Vs commit" value="142%" delta="acme-prod over by $5.4k" color="#e8b86d" spark={[98, 104, 112, 118, 126, 134, 142]} bg="#18181c" bd="#2a2a30" muted="#9a958c" />
            <PKpi label="Tokens · 24h" value="1.84B" delta="Peak 72M at 18:00" color="#e8b86d" spark={tokens} bg="#18181c" bd="#2a2a30" muted="#9a958c" />
            <PKpi label="Burn / day" value="$2.1k" delta="Band is $1.6k" color="#e8b86d" spark={[1.4, 1.5, 1.6, 1.8, 1.9, 2.0, 2.1]} bg="#18181c" bd="#2a2a30" muted="#9a958c" />
          </div>
          <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.15fr .95fr', gap: 10, minHeight: 0 }}>
            <section style={{ background: '#18181c', border: '1px solid #2a2a30', borderRadius: 10, padding: 14, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, minHeight: 0 }}>
              <section style={{ flex: 1, background: '#18181c', border: '1px solid #2a2a30', borderRadius: 10, padding: 14, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <b style={{ fontSize: 13 }}>Daily burn vs band</b>
                  <span style={{ fontSize: 11, color: '#9a958c' }}>dashed = $1.6k</span>
                </div>
                <div style={{ flex: 1, minHeight: 0, marginTop: 8 }}>
                  <PArea series={spend} compare={budget} color="#e8b86d" colorB="#7a9bb8" gid="lumenFill" grid="#2a2a30" />
                </div>
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
        </div>
      </main>
    </div>
  );
}

function DashSaasPlatformSection() {
  return (
    <DCSection id="dash-saas-platform" title="Dashboards — SaaS Platform"
      subtitle="Four platform consoles with a persistent sidebar, KPI stats, and charts: attribution, identity, trust, and model spend.">
      <DCArtboard id="s-catchment" label="17 · Catchment · Attribution" width={PW} height={PH}><SaasCatchment /></DCArtboard>
      <DCArtboard id="s-keystone" label="18 · Keystone · Access Admin" width={PW} height={PH}><SaasKeystone /></DCArtboard>
      <DCArtboard id="s-thresh" label="19 · Thresh · Trust Queue" width={PW} height={PH}><SaasThresh /></DCArtboard>
      <DCArtboard id="s-lumen" label="20 · Lumen · Model Spend" width={PW} height={PH}><SaasLumen /></DCArtboard>
    </DCSection>
  );
}

window.DashSaasPlatformSection = DashSaasPlatformSection;
