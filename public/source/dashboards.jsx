// Six dashboard styles — varied palettes, densities, and use cases.

const DW = 1280;
const DH = 800;

// ─────────────────────────────────────────────────────────────────────────────
// D1. MODERN LIGHT ANALYTICS — SaaS, indigo accent, sidebar + chart grid
// ─────────────────────────────────────────────────────────────────────────────
function DashAnalytics() {
  const s = {
    root: { width: DW, height: DH, background: '#f7f7fb', color: '#0d0f1c',
      fontFamily: '"Inter Tight", system-ui, sans-serif', display: 'flex' },
    side: { width: 220, background: '#fff', borderRight: '1px solid #ebe9f2',
      padding: '24px 16px', display: 'flex', flexDirection: 'column', gap: 6 },
    brand: { display: 'flex', alignItems: 'center', gap: 10, padding: '0 8px 24px',
      fontWeight: 700, fontSize: 16, letterSpacing: '-0.02em' },
    bMark: { width: 24, height: 24, background: '#4f46e5', borderRadius: 6 },
    navLabel: { fontSize: 10, fontWeight: 600, letterSpacing: '0.12em',
      textTransform: 'uppercase', color: '#8b88a3', padding: '14px 8px 6px' },
    navItem: (active) => ({ display: 'flex', alignItems: 'center', gap: 10,
      padding: '8px 10px', borderRadius: 6, fontSize: 13, fontWeight: 500,
      color: active ? '#4f46e5' : '#3a3a4c', background: active ? '#eeedfd' : 'transparent',
      cursor: 'pointer' }),
    dot: (c) => ({ width: 14, height: 14, borderRadius: 4, background: c, flex: 'none' }),
    main: { flex: 1, display: 'flex', flexDirection: 'column' },
    top: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '16px 28px', borderBottom: '1px solid #ebe9f2', background: '#fff' },
    search: { display: 'flex', alignItems: 'center', gap: 10,
      background: '#f7f7fb', padding: '8px 14px', borderRadius: 8,
      width: 320, fontSize: 13, color: '#8b88a3' },
    topRight: { display: 'flex', alignItems: 'center', gap: 16, fontSize: 13 },
    av: { width: 32, height: 32, borderRadius: '50%', background: '#4f46e5',
      color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontWeight: 600, fontSize: 12 },
    body: { flex: 1, padding: 24, display: 'flex', flexDirection: 'column', gap: 16,
      overflow: 'hidden' },
    h: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' },
    h1: { fontSize: 22, fontWeight: 600, letterSpacing: '-0.02em', margin: 0 },
    pill: { display: 'flex', gap: 4, background: '#fff', padding: 4, borderRadius: 8,
      border: '1px solid #ebe9f2', fontSize: 12 },
    pillItem: (active) => ({ padding: '6px 12px', borderRadius: 6, cursor: 'pointer',
      background: active ? '#0d0f1c' : 'transparent',
      color: active ? '#fff' : '#3a3a4c', fontWeight: 500 }),
    kpiRow: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 },
    kpi: { background: '#fff', borderRadius: 10, padding: 16,
      border: '1px solid #ebe9f2' },
    kpiLbl: { fontSize: 12, color: '#8b88a3', fontWeight: 500 },
    kpiNum: { fontSize: 28, fontWeight: 600, letterSpacing: '-0.03em', marginTop: 6 },
    kpiDelta: (up) => ({ fontSize: 12, fontWeight: 600, marginTop: 4,
      color: up ? '#16a34a' : '#dc2626' }),
    grid: { display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 12, flex: 1, minHeight: 0 },
    card: { background: '#fff', borderRadius: 10, padding: 18,
      border: '1px solid #ebe9f2', display: 'flex', flexDirection: 'column' },
    cardH: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
      marginBottom: 12 },
    cardTitle: { fontSize: 14, fontWeight: 600 },
    chart: { flex: 1, position: 'relative', minHeight: 180 },
    tableRow: { display: 'flex', justifyContent: 'space-between',
      padding: '8px 0', borderBottom: '1px solid #f3f1fa', fontSize: 13 },
    tag: (c, bg) => ({ background: bg, color: c, padding: '2px 8px',
      borderRadius: 999, fontSize: 11, fontWeight: 600 }),
  };
  const bars = [42, 58, 70, 62, 85, 92, 78, 95, 110, 102, 118, 132];
  return (
    <div style={s.root}>
      <aside style={s.side}>
        <div style={s.brand}><span style={s.bMark}></span> Layerframe</div>
        <div style={s.navLabel}>Workspace</div>
        <div style={s.navItem(true)}><span style={s.dot('#4f46e5')}></span> Overview</div>
        <div style={s.navItem()}><span style={s.dot('#94a3b8')}></span> Customers</div>
        <div style={s.navItem()}><span style={s.dot('#94a3b8')}></span> Revenue</div>
        <div style={s.navItem()}><span style={s.dot('#94a3b8')}></span> Funnel</div>
        <div style={s.navLabel}>Team</div>
        <div style={s.navItem()}><span style={s.dot('#94a3b8')}></span> Members</div>
        <div style={s.navItem()}><span style={s.dot('#94a3b8')}></span> Roles</div>
        <div style={s.navItem()}><span style={s.dot('#94a3b8')}></span> Activity</div>
        <div style={{ marginTop: 'auto', padding: 12, background: '#eeedfd',
          borderRadius: 10, fontSize: 12 }}>
          <div style={{ fontWeight: 600, marginBottom: 4 }}>Trial ends in 6 days</div>
          <div style={{ color: '#4a4660' }}>Upgrade to keep your reports.</div>
        </div>
      </aside>
      <div style={s.main}>
        <div style={s.top}>
          <div style={s.search}>⌕ &nbsp; Search customers, plans, reports…</div>
          <div style={s.topRight}>
            <span style={{ color: '#8b88a3' }}>Mon May 17 · 4:24 pm</span>
            <span style={s.av}>JL</span>
          </div>
        </div>
        <div style={s.body}>
          <div style={s.h}>
            <div>
              <h1 style={s.h1}>Overview</h1>
              <div style={{ fontSize: 13, color: '#8b88a3', marginTop: 2 }}>Last 28 days vs previous period</div>
            </div>
            <div style={s.pill}>
              <span style={s.pillItem()}>7d</span>
              <span style={s.pillItem(true)}>28d</span>
              <span style={s.pillItem()}>90d</span>
              <span style={s.pillItem()}>YTD</span>
            </div>
          </div>
          <div style={s.kpiRow}>
            <div style={s.kpi}>
              <div style={s.kpiLbl}>MRR</div>
              <div style={s.kpiNum}>$148.2k</div>
              <div style={s.kpiDelta(true)}>↑ 12.4% · +$16.3k</div>
            </div>
            <div style={s.kpi}>
              <div style={s.kpiLbl}>Active customers</div>
              <div style={s.kpiNum}>4,208</div>
              <div style={s.kpiDelta(true)}>↑ 4.1% · +166</div>
            </div>
            <div style={s.kpi}>
              <div style={s.kpiLbl}>Churn rate</div>
              <div style={s.kpiNum}>2.1%</div>
              <div style={s.kpiDelta(false)}>↑ 0.3pp · vs 1.8%</div>
            </div>
            <div style={s.kpi}>
              <div style={s.kpiLbl}>NPS</div>
              <div style={s.kpiNum}>62</div>
              <div style={s.kpiDelta(true)}>↑ 4 points</div>
            </div>
          </div>
          <div style={s.grid}>
            <div style={s.card}>
              <div style={s.cardH}>
                <span style={s.cardTitle}>Revenue · daily</span>
                <span style={{ fontSize: 12, color: '#8b88a3' }}>USD · MRR equivalent</span>
              </div>
              <div style={s.chart}>
                <svg width="100%" height="100%" viewBox="0 0 600 200" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="lgrad" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0" stopColor="#4f46e5" stopOpacity="0.25"/>
                      <stop offset="1" stopColor="#4f46e5" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  {bars.map((b, i) => {
                    const x = (i / (bars.length - 1)) * 600;
                    const y = 200 - (b / 140) * 180;
                    return null;
                  })}
                  <path d={`M ${bars.map((b, i) => `${(i / (bars.length - 1)) * 600},${200 - (b / 140) * 180}`).join(' L ')} L 600,200 L 0,200 Z`}
                    fill="url(#lgrad)" />
                  <path d={`M ${bars.map((b, i) => `${(i / (bars.length - 1)) * 600},${200 - (b / 140) * 180}`).join(' L ')}`}
                    fill="none" stroke="#4f46e5" strokeWidth="2.5" />
                  {bars.map((b, i) => (
                    <circle key={i} cx={(i / (bars.length - 1)) * 600} cy={200 - (b / 140) * 180}
                      r="3" fill="#fff" stroke="#4f46e5" strokeWidth="2" />
                  ))}
                </svg>
              </div>
            </div>
            <div style={s.card}>
              <div style={s.cardH}><span style={s.cardTitle}>Top plans</span></div>
              <div style={{ flex: 1 }}>
                <div style={s.tableRow}>
                  <span>Team Pro</span>
                  <span><b>$82.4k</b> <span style={s.tag('#16a34a', '#dcfce7')}>+18%</span></span>
                </div>
                <div style={s.tableRow}>
                  <span>Solo</span>
                  <span><b>$41.2k</b> <span style={s.tag('#16a34a', '#dcfce7')}>+6%</span></span>
                </div>
                <div style={s.tableRow}>
                  <span>Enterprise</span>
                  <span><b>$22.0k</b> <span style={s.tag('#dc2626', '#fee2e2')}>−3%</span></span>
                </div>
                <div style={s.tableRow}>
                  <span>Add-ons</span>
                  <span><b>$2.6k</b> <span style={s.tag('#16a34a', '#dcfce7')}>+22%</span></span>
                </div>
                <div style={{ marginTop: 12, padding: 10, background: '#f7f7fb',
                  borderRadius: 8, fontSize: 12, color: '#4a4660' }}>
                  <b>Insight:</b> Team Pro now contributes 56% of MRR — a record share.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// D2. TRADING TERMINAL — dense, dark, mono, green/red
// ─────────────────────────────────────────────────────────────────────────────
function DashTrading() {
  const s = {
    root: { width: DW, height: DH, background: '#0a0c10', color: '#d4d8e0',
      fontFamily: '"JetBrains Mono", "IBM Plex Mono", monospace',
      display: 'flex', flexDirection: 'column', fontSize: 11 },
    top: { display: 'flex', alignItems: 'center', borderBottom: '1px solid #1c2028',
      background: '#11141a', height: 32 },
    crumb: { padding: '0 14px', borderRight: '1px solid #1c2028', height: '100%',
      display: 'flex', alignItems: 'center', gap: 8, fontWeight: 600, color: '#f0c060' },
    tab: (active) => ({ padding: '0 14px', height: '100%', display: 'flex',
      alignItems: 'center', cursor: 'pointer',
      background: active ? '#0a0c10' : 'transparent',
      color: active ? '#d4d8e0' : '#6a7080',
      borderBottom: active ? '2px solid #f0c060' : '2px solid transparent',
      borderRight: '1px solid #1c2028' }),
    right: { marginLeft: 'auto', display: 'flex', gap: 18, padding: '0 14px',
      color: '#6a7080' },
    body: { flex: 1, display: 'grid', gridTemplateColumns: '180px 1fr 320px',
      gridTemplateRows: '1fr 1fr', gap: 1, background: '#1c2028' },
    panel: { background: '#0a0c10', padding: 12, display: 'flex', flexDirection: 'column' },
    panelH: { fontSize: 10, fontWeight: 700, letterSpacing: '0.1em',
      textTransform: 'uppercase', color: '#6a7080',
      display: 'flex', justifyContent: 'space-between', marginBottom: 8,
      borderBottom: '1px solid #1c2028', paddingBottom: 6 },
    watch: { display: 'flex', justifyContent: 'space-between', padding: '4px 0',
      borderBottom: '1px solid #14171f', fontSize: 11 },
    sym: { fontWeight: 700, color: '#d4d8e0' },
    up: { color: '#46d166' },
    dn: { color: '#f04860' },
    chartArea: { flex: 1, position: 'relative' },
    bookRow: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
      fontSize: 11, padding: '2px 4px' },
    book: { flex: 1, display: 'flex', flexDirection: 'column' },
    statusBar: { background: '#11141a', borderTop: '1px solid #1c2028',
      padding: '4px 14px', display: 'flex', gap: 18, fontSize: 10,
      color: '#6a7080' },
    blink: { width: 8, height: 8, background: '#46d166', borderRadius: 0,
      boxShadow: '0 0 8px #46d166' },
    orderRow: (s_) => ({ display: 'grid',
      gridTemplateColumns: '60px 1fr 60px 60px 70px', gap: 8, padding: '4px 0',
      borderBottom: '1px solid #14171f',
      color: s_ === 'fill' ? '#46d166' : s_ === 'reject' ? '#f04860' : '#d4d8e0' }),
  };
  const watch = [
    ['AAPL', '189.42', '+1.24%', true], ['NVDA', '942.10', '+3.82%', true],
    ['MSFT', '442.81', '+0.61%', true], ['TSLA', '178.32', '−2.14%', false],
    ['GOOG', '171.05', '+0.92%', true], ['META', '492.10', '−0.42%', false],
    ['AMZN', '188.40', '+1.05%', true], ['BTC',  '68,420', '−1.21%', false],
    ['ETH',  '3,820',  '+0.84%', true], ['SPX',  '5,308',  '+0.32%', true],
    ['VIX',  '14.82',  '−2.81%', false],
  ];
  return (
    <div style={s.root}>
      <div style={s.top}>
        <div style={s.crumb}>◆ NETRA TERMINAL</div>
        <div style={s.tab(true)}>EQUITIES</div>
        <div style={s.tab()}>FUTURES</div>
        <div style={s.tab()}>OPTIONS</div>
        <div style={s.tab()}>FX</div>
        <div style={s.tab()}>CRYPTO</div>
        <div style={s.right}>
          <span>P/L · <span style={s.up}>+$24,808</span></span>
          <span>EXP · 12:14 · <span style={s.blink}></span></span>
          <span>USER · v.lev</span>
        </div>
      </div>
      <div style={s.body}>
        {/* Watchlist (spans 2 rows) */}
        <div style={{ ...s.panel, gridRow: '1 / 3' }}>
          <div style={s.panelH}><span>WATCH</span><span>USD</span></div>
          {watch.map(([sym, px, ch, up]) => (
            <div key={sym} style={s.watch}>
              <span style={s.sym}>{sym}</span>
              <span style={up ? s.up : s.dn}>{px}</span>
              <span style={up ? s.up : s.dn}>{ch}</span>
            </div>
          ))}
        </div>
        {/* Chart */}
        <div style={s.panel}>
          <div style={s.panelH}>
            <span>AAPL · 1M · CANDLE</span>
            <span style={s.up}>189.42  ▲ 2.34 (+1.24%)</span>
          </div>
          <div style={s.chartArea}>
            <svg width="100%" height="100%" viewBox="0 0 640 240" preserveAspectRatio="none">
              {[40, 80, 120, 160, 200].map(y => (
                <line key={y} x1="0" y1={y} x2="640" y2={y} stroke="#14171f" strokeWidth="1"/>
              ))}
              {Array.from({ length: 32 }).map((_, i) => {
                const x = 10 + i * 19;
                const o = 80 + Math.sin(i * 0.4) * 40 + i * 1.8;
                const c = o + (Math.random() < 0.55 ? 8 : -8) - 2;
                const h = Math.min(o, c) - 8 - Math.random() * 12;
                const l = Math.max(o, c) + 4 + Math.random() * 12;
                const up = c < o;
                const color = up ? '#46d166' : '#f04860';
                return (
                  <g key={i}>
                    <line x1={x + 5} y1={h} x2={x + 5} y2={l} stroke={color} strokeWidth="1"/>
                    <rect x={x} y={Math.min(o, c)} width="10" height={Math.abs(o - c) || 2}
                      fill={color}/>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
        {/* Order book */}
        <div style={s.panel}>
          <div style={s.panelH}><span>ORDER BOOK</span><span>L2</span></div>
          <div style={s.book}>
            {[['189.50', '420', '12'], ['189.48', '1,204', '8'], ['189.46', '880', '14'],
              ['189.45', '2,118', '22'], ['189.44', '640', '6']].map((r, i) => (
              <div key={i} style={s.bookRow}>
                <span style={s.dn}>{r[0]}</span><span>{r[1]}</span><span style={{ color: '#6a7080' }}>{r[2]}</span>
              </div>
            ))}
            <div style={{ height: 1, background: '#1c2028', margin: '6px 0' }}></div>
            {[['189.42', '880', '10'], ['189.40', '1,420', '18'], ['189.38', '660', '4'],
              ['189.36', '2,402', '28'], ['189.34', '780', '12']].map((r, i) => (
              <div key={i} style={s.bookRow}>
                <span style={s.up}>{r[0]}</span><span>{r[1]}</span><span style={{ color: '#6a7080' }}>{r[2]}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Positions */}
        <div style={s.panel}>
          <div style={s.panelH}>
            <span>POSITIONS · 4</span>
            <span>NET <span style={s.up}>+$24,808</span></span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '60px 60px 80px 1fr 80px',
            gap: 8, fontSize: 10, color: '#6a7080', padding: '4px 0',
            borderBottom: '1px solid #1c2028' }}>
            <span>SYM</span><span>QTY</span><span>AVG</span><span>P/L</span><span>%</span>
          </div>
          {[['AAPL', '+200', '184.20', '+1,044', '+2.83%', true],
            ['NVDA', '+50',  '904.10', '+1,900', '+4.21%', true],
            ['TSLA', '−80',  '182.40', '+328',   '+2.24%', true],
            ['META', '+100', '498.20', '−610',   '−1.22%', false]].map((r, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '60px 60px 80px 1fr 80px',
              gap: 8, fontSize: 11, padding: '4px 0', borderBottom: '1px solid #14171f' }}>
              <span style={s.sym}>{r[0]}</span><span>{r[1]}</span><span>{r[2]}</span>
              <span style={r[5] ? s.up : s.dn}>{r[3]}</span>
              <span style={r[5] ? s.up : s.dn}>{r[4]}</span>
            </div>
          ))}
        </div>
        {/* Orders */}
        <div style={s.panel}>
          <div style={s.panelH}><span>ORDERS · TODAY</span><span>14 FILL · 2 REJ</span></div>
          {[['12:14:08', 'BUY  AAPL  100 @ MKT',  '189.42', 'fill'],
            ['12:13:42', 'SELL TSLA  40 @ 178.50','178.50', 'fill'],
            ['12:11:09', 'BUY  NVDA  20 @ 940.00','--',     'work'],
            ['12:08:52', 'BUY  META  50 @ 495.00','--',     'reject'],
            ['12:04:18', 'SELL AAPL  80 @ 188.20','188.20', 'fill']].map((r, i) => (
            <div key={i} style={s.orderRow(r[3])}>
              <span>{r[0]}</span><span>{r[1]}</span><span></span><span>{r[2]}</span>
              <span>{r[3].toUpperCase()}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={s.statusBar}>
        <span><span style={s.blink}></span>&nbsp; CONNECTED · NYSE</span>
        <span>LATENCY 0.04ms</span>
        <span>SESSION 04:18:12</span>
        <span style={{ marginLeft: 'auto' }}>F1 HELP · F8 ORDER · F12 LOG</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// D3. HEALTH RINGS — dark, big colorful rings, big numbers
// ─────────────────────────────────────────────────────────────────────────────
function DashHealth() {
  const Ring = ({ pct, color, size = 200, stroke = 22 }) => {
    const r = (size - stroke) / 2;
    const c = 2 * Math.PI * r;
    return (
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size / 2} cy={size / 2} r={r}
          fill="none" stroke={color} strokeOpacity="0.18" strokeWidth={stroke} />
        <circle cx={size / 2} cy={size / 2} r={r}
          fill="none" stroke={color} strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - pct / 100)} />
      </svg>
    );
  };
  const s = {
    root: { width: DW, height: DH, background: '#0d1014', color: '#fff',
      fontFamily: 'system-ui, -apple-system, "Inter Tight", sans-serif',
      display: 'flex', flexDirection: 'column', position: 'relative' },
    top: { display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '20px 32px' },
    brand: { fontWeight: 600, fontSize: 17, letterSpacing: '-0.02em',
      display: 'flex', alignItems: 'center', gap: 10 },
    bMark: { width: 10, height: 10, borderRadius: '50%', background: '#22d3a0' },
    tabs: { display: 'flex', gap: 4, background: '#1a1f28', padding: 4,
      borderRadius: 999, fontSize: 13 },
    tab: (active) => ({ padding: '8px 18px', borderRadius: 999, cursor: 'pointer',
      background: active ? '#fff' : 'transparent',
      color: active ? '#0d1014' : '#8a92a0', fontWeight: 500 }),
    body: { flex: 1, display: 'grid', gridTemplateColumns: '1.3fr 1fr',
      gap: 16, padding: '0 32px 32px' },
    main: { display: 'flex', flexDirection: 'column', gap: 16 },
    hero: { background: '#1a1f28', borderRadius: 24, padding: 28,
      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'center',
      flex: 1 },
    rings: { position: 'relative', width: 240, height: 240, justifySelf: 'center' },
    ringWrap: (sz) => ({ position: 'absolute', top: (240 - sz) / 2, left: (240 - sz) / 2 }),
    metrics: { display: 'flex', flexDirection: 'column', gap: 16 },
    metric: { display: 'flex', alignItems: 'baseline', gap: 12 },
    mDot: (c) => ({ width: 10, height: 10, borderRadius: '50%', background: c }),
    mLbl: { fontSize: 13, color: '#8a92a0', minWidth: 80 },
    mNum: { fontSize: 28, fontWeight: 600, letterSpacing: '-0.03em' },
    mUnit: { fontSize: 13, color: '#8a92a0' },
    chartCard: { background: '#1a1f28', borderRadius: 24, padding: 24 },
    chartH: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
      marginBottom: 12, fontSize: 14 },
    aside: { display: 'flex', flexDirection: 'column', gap: 16 },
    card: { background: '#1a1f28', borderRadius: 24, padding: 20 },
    cardH: { fontSize: 13, color: '#8a92a0', marginBottom: 6 },
    cardNum: { fontSize: 36, fontWeight: 600, letterSpacing: '-0.03em' },
    sleep: { display: 'flex', height: 28, marginTop: 16, borderRadius: 6, overflow: 'hidden' },
    sleepSeg: (w, c) => ({ width: `${w}%`, background: c }),
    legend: { display: 'flex', gap: 12, marginTop: 10, fontSize: 11, color: '#8a92a0' },
    streak: { display: 'flex', gap: 4, marginTop: 8 },
    sDay: (filled) => ({ width: 28, height: 28, borderRadius: 8,
      background: filled ? '#22d3a0' : '#252b36', display: 'flex',
      alignItems: 'center', justifyContent: 'center', fontSize: 11,
      color: filled ? '#0d1014' : '#5a6270', fontWeight: 600 }),
  };
  return (
    <div style={s.root}>
      <div style={s.top}>
        <div style={s.brand}><span style={s.bMark}></span> &nbsp;PULSE · Hi Maya</div>
        <div style={s.tabs}>
          <span style={s.tab()}>Day</span>
          <span style={s.tab(true)}>Week</span>
          <span style={s.tab()}>Month</span>
          <span style={s.tab()}>Year</span>
        </div>
        <div style={{ fontSize: 13, color: '#8a92a0' }}>Sat May 17</div>
      </div>
      <div style={s.body}>
        <div style={s.main}>
          <div style={s.hero}>
            <div style={s.rings}>
              <div style={s.ringWrap(240)}><Ring pct={92} color="#ff3b6b" size={240} stroke={20}/></div>
              <div style={s.ringWrap(196)}><Ring pct={68} color="#22d3a0" size={196} stroke={20}/></div>
              <div style={s.ringWrap(152)}><Ring pct={104} color="#4cc8ff" size={152} stroke={20}/></div>
              <div style={{ position: 'absolute', inset: 0, display: 'flex',
                alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <div style={{ fontSize: 36, fontWeight: 700, letterSpacing: '-0.04em' }}>88<span style={{ fontSize: 18, color: '#8a92a0' }}>%</span></div>
                <div style={{ fontSize: 11, color: '#8a92a0', letterSpacing: '0.06em', textTransform: 'uppercase' }}>day score</div>
              </div>
            </div>
            <div style={s.metrics}>
              <div style={s.metric}>
                <span style={s.mDot('#ff3b6b')}></span>
                <span style={s.mLbl}>Move</span>
                <span style={s.mNum}>586</span><span style={s.mUnit}>/ 600 kcal</span>
              </div>
              <div style={s.metric}>
                <span style={s.mDot('#22d3a0')}></span>
                <span style={s.mLbl}>Exercise</span>
                <span style={s.mNum}>20</span><span style={s.mUnit}>/ 30 min</span>
              </div>
              <div style={s.metric}>
                <span style={s.mDot('#4cc8ff')}></span>
                <span style={s.mLbl}>Stand</span>
                <span style={s.mNum}>13</span><span style={s.mUnit}>/ 12 hr</span>
              </div>
              <div style={{ marginTop: 8 }}>
                <div style={{ fontSize: 12, color: '#8a92a0', marginBottom: 6 }}>Weekly streak</div>
                <div style={s.streak}>
                  {['M','T','W','T','F','S','S'].map((d, i) => (
                    <div key={i} style={s.sDay(i < 5)}>{d}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div style={s.chartCard}>
            <div style={s.chartH}>
              <span style={{ fontWeight: 600 }}>Resting heart rate</span>
              <span style={{ color: '#8a92a0' }}>52 — 58 bpm · 7 days</span>
            </div>
            <svg width="100%" height="100" viewBox="0 0 600 100" preserveAspectRatio="none">
              {[20, 40, 60, 80].map(y => (
                <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="#252b36" strokeWidth="0.5"/>
              ))}
              <path d="M 0 60 Q 80 52, 140 56 T 280 50 T 420 58 T 560 54 T 600 56"
                stroke="#ff3b6b" strokeWidth="2.5" fill="none"/>
              {[0, 100, 200, 300, 400, 500, 600].map((x, i) => (
                <circle key={x} cx={x} cy={[60,52,56,50,58,54,56][i]} r="3" fill="#fff" stroke="#ff3b6b" strokeWidth="2"/>
              ))}
            </svg>
          </div>
        </div>
        <div style={s.aside}>
          <div style={s.card}>
            <div style={s.cardH}>Sleep · last night</div>
            <div style={s.cardNum}>7h 42m</div>
            <div style={{ fontSize: 12, color: '#8a92a0', marginTop: 2 }}>
              ↑ 22 min vs your avg · <span style={{ color: '#22d3a0' }}>solid</span>
            </div>
            <div style={s.sleep}>
              <div style={s.sleepSeg(12, '#4cc8ff')}></div>
              <div style={s.sleepSeg(48, '#3a52b8')}></div>
              <div style={s.sleepSeg(22, '#7c4cff')}></div>
              <div style={s.sleepSeg(18, '#4cc8ff')}></div>
            </div>
            <div style={s.legend}>
              <span>● awake</span><span>● core</span><span>● deep</span><span>● REM</span>
            </div>
          </div>
          <div style={s.card}>
            <div style={s.cardH}>Steps · today</div>
            <div style={s.cardNum}>8,420</div>
            <div style={{ fontSize: 12, color: '#8a92a0', marginTop: 2 }}>Goal 10,000 · 84%</div>
            <div style={{ height: 6, background: '#252b36', borderRadius: 3,
              marginTop: 12, overflow: 'hidden' }}>
              <div style={{ width: '84%', height: '100%', background: '#22d3a0', borderRadius: 3 }}></div>
            </div>
          </div>
          <div style={s.card}>
            <div style={s.cardH}>Mindful minutes · this week</div>
            <div style={s.cardNum}>62</div>
            <div style={{ display: 'flex', gap: 4, marginTop: 12, alignItems: 'flex-end',
              height: 40 }}>
              {[20, 35, 8, 0, 25, 50, 12].map((h, i) => (
                <div key={i} style={{ flex: 1, background: h > 0 ? '#7c4cff' : '#252b36',
                  height: `${Math.max(h, 4)}%`, borderRadius: 2 }}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// D4. SMART HOME — dark navy, glassy room cards, sliders
// ─────────────────────────────────────────────────────────────────────────────
function DashHome() {
  const s = {
    root: { width: DW, height: DH, color: '#e8edf5', position: 'relative',
      background: 'linear-gradient(180deg, #0b0f1c 0%, #11173a 60%, #1a1448 100%)',
      fontFamily: 'system-ui, "Inter Tight", sans-serif', overflow: 'hidden' },
    glow: { position: 'absolute', width: 600, height: 600, borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(100,80,255,0.4), transparent 60%)',
      right: -200, top: -200, filter: 'blur(40px)' },
    top: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '24px 32px', position: 'relative', zIndex: 2 },
    hi: { fontSize: 28, fontWeight: 600, letterSpacing: '-0.02em' },
    sub: { fontSize: 13, color: '#8b95b0', marginTop: 4 },
    weather: { display: 'flex', alignItems: 'center', gap: 14,
      background: 'rgba(255,255,255,0.06)', padding: '10px 18px',
      borderRadius: 16, backdropFilter: 'blur(20px)', fontSize: 13,
      border: '1px solid rgba(255,255,255,0.08)' },
    body: { padding: '0 32px 32px', display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 14, position: 'relative', zIndex: 2 },
    room: (active) => ({ background: active ? 'rgba(124,92,255,0.25)' : 'rgba(255,255,255,0.04)',
      backdropFilter: 'blur(20px)',
      border: `1px solid ${active ? 'rgba(124,92,255,0.5)' : 'rgba(255,255,255,0.08)'}`,
      borderRadius: 20, padding: 20, display: 'flex', flexDirection: 'column',
      gap: 12, cursor: 'pointer', minHeight: 160 }),
    roomH: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    roomLbl: { fontSize: 11, color: '#8b95b0', letterSpacing: '0.06em',
      textTransform: 'uppercase' },
    roomName: { fontSize: 18, fontWeight: 600, marginTop: 4 },
    toggle: (on) => ({ width: 40, height: 22, borderRadius: 999,
      background: on ? '#7c5cff' : 'rgba(255,255,255,0.15)',
      position: 'relative', flex: 'none' }),
    knob: (on) => ({ position: 'absolute', top: 2, left: on ? 20 : 2,
      width: 18, height: 18, borderRadius: '50%', background: '#fff',
      transition: 'left .2s' }),
    roomStats: { display: 'flex', gap: 12, fontSize: 12, color: '#a8b0c8' },
    icon: { fontSize: 24, marginBottom: 'auto' },
    big: { gridColumn: 'span 2', gridRow: 'span 2',
      background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255,255,255,0.08)', borderRadius: 24,
      padding: 24, display: 'flex', flexDirection: 'column', gap: 20 },
    bigH: { fontSize: 14, color: '#8b95b0', letterSpacing: '0.06em',
      textTransform: 'uppercase' },
    bigNum: { fontSize: 76, fontWeight: 700, letterSpacing: '-0.05em', lineHeight: 1 },
    bigUnit: { fontSize: 28, color: '#8b95b0' },
    slider: { background: 'rgba(255,255,255,0.08)', borderRadius: 999,
      height: 8, position: 'relative', marginTop: 8 },
    sliderFill: (pct) => ({ position: 'absolute', left: 0, top: 0, height: '100%',
      width: `${pct}%`, background: '#7c5cff', borderRadius: 999 }),
    sliderKnob: (pct) => ({ position: 'absolute', left: `calc(${pct}% - 10px)`,
      top: -6, width: 20, height: 20, borderRadius: '50%', background: '#fff',
      boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }),
    sceneRow: { display: 'flex', gap: 8, marginTop: 8 },
    scene: (active) => ({ padding: '8px 14px', borderRadius: 999, fontSize: 12,
      background: active ? '#fff' : 'rgba(255,255,255,0.08)',
      color: active ? '#0b0f1c' : '#e8edf5', fontWeight: 500, cursor: 'pointer' }),
    musicCard: { background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 20,
      display: 'flex', flexDirection: 'column', gap: 10 },
    albumArt: { width: '100%', aspectRatio: '1', borderRadius: 12,
      background: 'linear-gradient(135deg, #ff3b6b, #7c5cff, #4cc8ff)' },
  };
  return (
    <div style={s.root}>
      <div style={s.glow}></div>
      <div style={s.top}>
        <div>
          <div style={s.hi}>Good evening, Aanya.</div>
          <div style={s.sub}>5 of 24 lights on · 2 doors locked · Lock all →</div>
        </div>
        <div style={s.weather}>
          <span style={{ fontSize: 24 }}>◐</span>
          <div>
            <div style={{ fontWeight: 600 }}>18° · Clear</div>
            <div style={{ fontSize: 11, color: '#8b95b0' }}>Sunset 19:42</div>
          </div>
        </div>
      </div>
      <div style={s.body}>
        <div style={s.big}>
          <div style={s.bigH}>Climate · whole home</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
            <span style={s.bigNum}>21°</span>
            <span style={s.bigUnit}>↓ 18°  ↑ 23°</span>
          </div>
          <div>
            <div style={{ fontSize: 12, color: '#8b95b0', display: 'flex',
              justifyContent: 'space-between' }}>
              <span>Target</span><span>22°</span>
            </div>
            <div style={s.slider}>
              <div style={s.sliderFill(70)}></div>
              <div style={s.sliderKnob(70)}></div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between',
            fontSize: 13, color: '#a8b0c8' }}>
            <div>Humidity<br/><span style={{ color: '#e8edf5', fontSize: 17, fontWeight: 600 }}>42%</span></div>
            <div>Air quality<br/><span style={{ color: '#22d3a0', fontSize: 17, fontWeight: 600 }}>Good</span></div>
            <div>Outside<br/><span style={{ color: '#e8edf5', fontSize: 17, fontWeight: 600 }}>18°</span></div>
          </div>
          <div>
            <div style={s.bigH}>Scene</div>
            <div style={s.sceneRow}>
              <span style={s.scene(true)}>Evening</span>
              <span style={s.scene()}>Focus</span>
              <span style={s.scene()}>Movie</span>
              <span style={s.scene()}>Away</span>
              <span style={s.scene()}>Sleep</span>
            </div>
          </div>
        </div>
        <div style={s.room(true)}>
          <div style={s.roomH}>
            <span style={{ fontSize: 22 }}>✦</span>
            <div style={s.toggle(true)}><div style={s.knob(true)}></div></div>
          </div>
          <div style={s.icon}></div>
          <div>
            <div style={s.roomLbl}>Living Room</div>
            <div style={s.roomName}>4 of 6 on</div>
            <div style={s.roomStats}><span>72% brightness</span></div>
          </div>
        </div>
        <div style={s.room()}>
          <div style={s.roomH}>
            <span style={{ fontSize: 22 }}>◐</span>
            <div style={s.toggle(false)}><div style={s.knob(false)}></div></div>
          </div>
          <div>
            <div style={s.roomLbl}>Kitchen</div>
            <div style={s.roomName}>All off</div>
            <div style={s.roomStats}><span>Dishwasher · 22 min left</span></div>
          </div>
        </div>
        <div style={s.musicCard}>
          <div style={s.albumArt}></div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600 }}>Late Spring Mix</div>
            <div style={{ fontSize: 11, color: '#8b95b0' }}>Living Room · Sonos</div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 18, fontSize: 18 }}>
            <span>⏮</span><span>▶</span><span>⏭</span>
          </div>
        </div>
        <div style={s.room()}>
          <div style={s.roomH}>
            <span style={{ fontSize: 22 }}>◉</span>
            <div style={s.toggle(true)}><div style={s.knob(true)}></div></div>
          </div>
          <div>
            <div style={s.roomLbl}>Bedroom</div>
            <div style={s.roomName}>Warm · 28%</div>
          </div>
        </div>
        <div style={s.room()}>
          <div style={s.roomH}>
            <span style={{ fontSize: 22 }}>⏻</span>
            <div style={s.toggle(false)}><div style={s.knob(false)}></div></div>
          </div>
          <div>
            <div style={s.roomLbl}>Studio</div>
            <div style={s.roomName}>All off</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// D5. KANBAN CRM — warm sage/coral, deal cards, avatars
// ─────────────────────────────────────────────────────────────────────────────
function DashCRM() {
  const s = {
    root: { width: DW, height: DH, background: '#eef0e8', color: '#1f2419',
      fontFamily: '"Inter Tight", system-ui, sans-serif',
      display: 'flex', flexDirection: 'column' },
    top: { display: 'flex', alignItems: 'center', gap: 28,
      padding: '20px 28px', background: '#fff', borderBottom: '1px solid #d8dccd' },
    brand: { display: 'flex', alignItems: 'center', gap: 10,
      fontWeight: 700, fontSize: 17, letterSpacing: '-0.02em' },
    bMark: { width: 22, height: 22, background: '#e85a4f', borderRadius: 6,
      transform: 'rotate(45deg)' },
    nav: { display: 'flex', gap: 6, marginLeft: 12 },
    navItem: (active) => ({ padding: '8px 14px', borderRadius: 8, fontSize: 13,
      fontWeight: 500, cursor: 'pointer',
      background: active ? '#1f2419' : 'transparent',
      color: active ? '#fff' : '#5a6050' }),
    right: { marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 14 },
    search: { background: '#eef0e8', padding: '8px 14px', borderRadius: 8,
      fontSize: 13, color: '#7a806f', width: 240 },
    cta: { background: '#e85a4f', color: '#fff', padding: '8px 16px',
      borderRadius: 8, fontWeight: 600, fontSize: 13, cursor: 'pointer' },
    av: { width: 32, height: 32, borderRadius: '50%', background: '#e85a4f',
      color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontWeight: 600, fontSize: 12 },
    sub: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
      padding: '20px 28px 12px' },
    h1: { fontSize: 22, fontWeight: 600, margin: 0, letterSpacing: '-0.02em' },
    crumb: { fontSize: 13, color: '#7a806f', marginTop: 2 },
    filters: { display: 'flex', gap: 8 },
    chip: { background: '#fff', border: '1px solid #d8dccd', padding: '6px 12px',
      borderRadius: 999, fontSize: 12, fontWeight: 500, color: '#5a6050' },
    board: { flex: 1, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 12, padding: '0 28px 28px', minHeight: 0 },
    col: { background: 'transparent', display: 'flex', flexDirection: 'column',
      gap: 10, minHeight: 0 },
    colH: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '4px 4px 8px', borderBottom: '2px solid #1f2419' },
    colTitle: { fontSize: 12, fontWeight: 700, letterSpacing: '0.1em',
      textTransform: 'uppercase' },
    colCount: { fontSize: 12, fontWeight: 600, color: '#7a806f' },
    deal: (accent) => ({ background: '#fff', borderRadius: 10, padding: 14,
      borderLeft: `3px solid ${accent}`, display: 'flex', flexDirection: 'column',
      gap: 8, cursor: 'grab' }),
    dealCo: { fontSize: 13, fontWeight: 600 },
    dealVal: { fontSize: 18, fontWeight: 600, letterSpacing: '-0.02em' },
    dealRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      fontSize: 11, color: '#7a806f', marginTop: 2 },
    tag: (bg, c) => ({ background: bg, color: c, padding: '2px 6px',
      borderRadius: 4, fontSize: 10, fontWeight: 600,
      letterSpacing: '0.04em', textTransform: 'uppercase' }),
    avSm: (c) => ({ width: 22, height: 22, borderRadius: '50%', background: c,
      color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontWeight: 600, fontSize: 10 }),
  };
  const cols = [
    { title: 'Lead', count: 12, accent: '#9ba88a', deals: [
      { co: 'Northstar Coffee', val: '$8.4k', tag: ['NEW', '#fef2c0', '#7a5800'], owner: 'JL', d: '2d in stage' },
      { co: 'Atelier Forms', val: '$14.2k', tag: ['', '', ''], owner: 'MR', d: '4d in stage' },
      { co: 'Pebble Press', val: '$3.6k', tag: ['', '', ''], owner: 'JL', d: '1d in stage' },
    ]},
    { title: 'Qualified', count: 8, accent: '#4a8aae', deals: [
      { co: 'Maison Calva', val: '$22.0k', tag: ['HOT', '#ffd9d9', '#8a1a1a'], owner: 'TH', d: 'Mtg Thu' },
      { co: 'Linear Labs', val: '$48.5k', tag: ['', '', ''], owner: 'MR', d: 'Proposal sent' },
      { co: 'Werner Inst.', val: '$12.0k', tag: ['', '', ''], owner: 'JL', d: 'Demo done' },
    ]},
    { title: 'Proposal', count: 5, accent: '#e85a4f', deals: [
      { co: 'Halid Finance', val: '$84.0k', tag: ['ENT', '#dbe9f7', '#1a3a8a'], owner: 'MR', d: 'Awaiting redline' },
      { co: 'Nordheim & Sons', val: '$32.4k', tag: ['', '', ''], owner: 'TH', d: 'Counter sent' },
    ]},
    { title: 'Closed', count: 3, accent: '#2a7a3a', deals: [
      { co: 'Pace//Form Club', val: '$28.4k', tag: ['WIN', '#d6f1d6', '#1a5a2a'], owner: 'JL', d: 'Signed Mon' },
      { co: 'Tide Wellness', val: '$16.2k', tag: ['WIN', '#d6f1d6', '#1a5a2a'], owner: 'TH', d: 'Signed Fri' },
    ]},
  ];
  return (
    <div style={s.root}>
      <div style={s.top}>
        <div style={s.brand}><span style={s.bMark}></span> Pavilion</div>
        <div style={s.nav}>
          <span style={s.navItem(true)}>Pipeline</span>
          <span style={s.navItem()}>Contacts</span>
          <span style={s.navItem()}>Companies</span>
          <span style={s.navItem()}>Reports</span>
        </div>
        <div style={s.right}>
          <div style={s.search}>⌕ &nbsp; Search deals…</div>
          <div style={s.cta}>+ New deal</div>
          <div style={s.av}>JL</div>
        </div>
      </div>
      <div style={s.sub}>
        <div>
          <h1 style={s.h1}>Q2 Pipeline · $284k forecast</h1>
          <div style={s.crumb}>28 deals · 8 owners · 92% goal attainment</div>
        </div>
        <div style={s.filters}>
          <span style={s.chip}>All owners ▾</span>
          <span style={s.chip}>This quarter ▾</span>
          <span style={s.chip}>Sort: value ▾</span>
        </div>
      </div>
      <div style={s.board}>
        {cols.map((col, ci) => (
          <div key={ci} style={s.col}>
            <div style={s.colH}>
              <span style={s.colTitle}>{col.title}</span>
              <span style={s.colCount}>{col.count}</span>
            </div>
            {col.deals.map((d, di) => (
              <div key={di} style={s.deal(col.accent)}>
                <div style={s.dealCo}>{d.co}</div>
                <div style={s.dealVal}>{d.val}</div>
                <div style={s.dealRow}>
                  <span>{d.d}</span>
                  {d.tag[0] && <span style={s.tag(d.tag[1], d.tag[2])}>{d.tag[0]}</span>}
                </div>
                <div style={{ marginTop: 4 }}>
                  <span style={s.avSm(['#e85a4f','#4a8aae','#9ba88a'][di % 3])}>{d.owner}</span>
                </div>
              </div>
            ))}
            <div style={{ padding: 10, border: '1px dashed #c8ccbe',
              borderRadius: 10, fontSize: 12, color: '#7a806f', textAlign: 'center',
              cursor: 'pointer' }}>+ Add deal</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// D6. DEVOPS STATUS WALL — slate, traffic-light grid, log stream
// ─────────────────────────────────────────────────────────────────────────────
function DashDevOps() {
  const s = {
    root: { width: DW, height: DH, background: '#0f1418', color: '#dde3ea',
      fontFamily: '"Inter Tight", system-ui, sans-serif',
      display: 'flex', flexDirection: 'column' },
    top: { display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '16px 24px', borderBottom: '1px solid #1c242c', background: '#141a20' },
    brand: { display: 'flex', alignItems: 'center', gap: 12, fontWeight: 700,
      fontSize: 16 },
    statusPill: { display: 'flex', alignItems: 'center', gap: 8,
      background: 'rgba(34,200,120,0.12)', border: '1px solid rgba(34,200,120,0.3)',
      color: '#22c878', padding: '6px 14px', borderRadius: 999,
      fontSize: 12, fontWeight: 600 },
    dot: { width: 8, height: 8, borderRadius: '50%', background: '#22c878',
      boxShadow: '0 0 8px #22c878' },
    right: { display: 'flex', gap: 18, fontSize: 12, color: '#7a8898' },
    body: { flex: 1, display: 'grid', gridTemplateColumns: '1fr 380px',
      gap: 14, padding: 16, minHeight: 0 },
    main: { display: 'flex', flexDirection: 'column', gap: 14, minHeight: 0 },
    kpiRow: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 },
    kpi: { background: '#141a20', borderRadius: 10, padding: 14,
      border: '1px solid #1c242c' },
    kpiLbl: { fontSize: 11, color: '#7a8898', letterSpacing: '0.06em',
      textTransform: 'uppercase' },
    kpiNum: { fontSize: 26, fontWeight: 600, letterSpacing: '-0.03em', marginTop: 4 },
    kpiSpark: { marginTop: 6 },
    grid: { background: '#141a20', borderRadius: 10, padding: 16,
      border: '1px solid #1c242c', flex: 1, display: 'flex', flexDirection: 'column' },
    gridH: { fontSize: 12, fontWeight: 600, marginBottom: 12, display: 'flex',
      justifyContent: 'space-between', alignItems: 'center', color: '#dde3ea',
      letterSpacing: '0.04em' },
    cells: { display: 'grid', gridTemplateColumns: 'repeat(24, 1fr)',
      gap: 3, flex: 1 },
    cell: (status) => ({ borderRadius: 3, aspectRatio: '1',
      background: status === 'ok' ? '#22c878' : status === 'warn' ? '#f5b342' :
        status === 'err' ? '#ef4848' : '#1c242c',
      opacity: status === 'ok' ? 0.7 + Math.random() * 0.3 : 1 }),
    legend: { display: 'flex', gap: 16, fontSize: 11, color: '#7a8898',
      marginTop: 10 },
    legendDot: (c) => ({ width: 10, height: 10, borderRadius: 2, background: c }),
    side: { display: 'flex', flexDirection: 'column', gap: 14, minHeight: 0 },
    incident: { background: '#141a20', borderRadius: 10, padding: 16,
      border: '1px solid #1c242c' },
    incTitle: { display: 'flex', alignItems: 'center', gap: 8, fontSize: 13,
      fontWeight: 600 },
    incRow: { padding: '10px 0', borderBottom: '1px solid #1c242c',
      fontSize: 12, lineHeight: 1.5 },
    incTag: (c) => ({ display: 'inline-block', padding: '2px 6px',
      background: c === 'p1' ? '#ef4848' : c === 'p2' ? '#f5b342' : '#7a8898',
      color: '#0f1418', borderRadius: 3, fontWeight: 700,
      fontSize: 10, letterSpacing: '0.06em', marginRight: 6 }),
    log: { background: '#141a20', borderRadius: 10, padding: 16,
      border: '1px solid #1c242c', flex: 1, fontFamily: '"JetBrains Mono", monospace',
      fontSize: 11, lineHeight: 1.7, overflow: 'hidden', display: 'flex',
      flexDirection: 'column' },
  };
  // Build a grid of services × hours
  const services = ['api-gateway', 'auth', 'payments', 'orders', 'inventory',
    'search', 'media', 'mail', 'webhooks', 'ledger', 'analytics', 'admin'];
  const statusFor = (svc, hr) => {
    if (svc === 'payments' && hr === 17) return 'err';
    if (svc === 'payments' && hr === 18) return 'warn';
    if (svc === 'search' && hr === 11) return 'warn';
    if (svc === 'webhooks' && hr === 14) return 'warn';
    return 'ok';
  };
  const Spark = ({ data, color }) => (
    <svg width="100%" height="24" viewBox="0 0 100 24" preserveAspectRatio="none">
      <path d={`M ${data.map((v, i) => `${(i / (data.length - 1)) * 100},${24 - v * 0.24}`).join(' L ')}`}
        stroke={color} strokeWidth="1.5" fill="none"/>
    </svg>
  );
  return (
    <div style={s.root}>
      <div style={s.top}>
        <div style={s.brand}>
          <div style={s.statusPill}><span style={s.dot}></span> All systems operational</div>
        </div>
        <div style={{ fontSize: 13, fontWeight: 600 }}>PRODUCTION · us-east-1 / eu-west-2 / ap-southeast-1</div>
        <div style={s.right}>
          <span>Uptime 99.984% · 30d</span>
          <span>Mon 17 May · 16:24 UTC</span>
        </div>
      </div>
      <div style={s.body}>
        <div style={s.main}>
          <div style={s.kpiRow}>
            <div style={s.kpi}>
              <div style={s.kpiLbl}>Requests / sec</div>
              <div style={s.kpiNum}>14,208</div>
              <div style={s.kpiSpark}><Spark data={[40,55,48,62,58,72,68,80,75,84]} color="#4cc8ff"/></div>
            </div>
            <div style={s.kpi}>
              <div style={s.kpiLbl}>P95 latency</div>
              <div style={s.kpiNum}>184<span style={{ fontSize: 14, color: '#7a8898' }}>ms</span></div>
              <div style={s.kpiSpark}><Spark data={[30,32,28,42,38,44,40,52,46,40]} color="#22c878"/></div>
            </div>
            <div style={s.kpi}>
              <div style={s.kpiLbl}>Error rate</div>
              <div style={s.kpiNum}>0.04<span style={{ fontSize: 14, color: '#7a8898' }}>%</span></div>
              <div style={s.kpiSpark}><Spark data={[10,8,12,9,14,8,7,9,12,8]} color="#f5b342"/></div>
            </div>
            <div style={s.kpi}>
              <div style={s.kpiLbl}>Open incidents</div>
              <div style={s.kpiNum}>2 <span style={{ fontSize: 12, color: '#f5b342' }}>· 1 P2</span></div>
              <div style={s.kpiSpark}><Spark data={[0,0,1,0,0,1,2,1,2,2]} color="#ef4848"/></div>
            </div>
          </div>
          <div style={s.grid}>
            <div style={s.gridH}>
              <span>Service health · last 24h</span>
              <span style={{ color: '#7a8898', fontWeight: 400 }}>UTC hours →</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr',
              gap: 8, flex: 1 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {services.map(svc => (
                  <div key={svc} style={{ fontSize: 11, color: '#7a8898',
                    aspectRatio: '1', display: 'flex', alignItems: 'center',
                    fontFamily: '"JetBrains Mono", monospace' }}>{svc}</div>
                ))}
              </div>
              <div style={{ display: 'grid', gridTemplateRows: `repeat(${services.length}, 1fr)`, gap: 3 }}>
                {services.map((svc, i) => (
                  <div key={svc} style={{ display: 'grid', gridTemplateColumns: 'repeat(24, 1fr)', gap: 3 }}>
                    {Array.from({ length: 24 }).map((_, h) => (
                      <div key={h} style={s.cell(statusFor(svc, h))}></div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div style={s.legend}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={s.legendDot('#22c878')}></span> healthy</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={s.legendDot('#f5b342')}></span> degraded</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={s.legendDot('#ef4848')}></span> outage</span>
              <span style={{ marginLeft: 'auto' }}>00:00 — 23:00 UTC</span>
            </div>
          </div>
        </div>
        <div style={s.side}>
          <div style={s.incident}>
            <div style={s.incTitle}>
              <span style={{ width: 10, height: 10, borderRadius: '50%',
                background: '#f5b342', boxShadow: '0 0 8px #f5b342' }}></span>
              Open Incidents · 2
            </div>
            <div style={s.incRow}>
              <div><span style={s.incTag('p2')}>P2</span> <b>payments:</b> elevated 5xx in us-east-1</div>
              <div style={{ color: '#7a8898', marginTop: 4 }}>
                ↳ Opened 14m ago · M. Khan acknowledged · runbook attached
              </div>
            </div>
            <div style={{ ...s.incRow, borderBottom: 'none' }}>
              <div><span style={s.incTag('p3')}>P3</span> <b>webhooks:</b> slow retries on stripe.com</div>
              <div style={{ color: '#7a8898', marginTop: 4 }}>
                ↳ Opened 1h 22m ago · monitoring
              </div>
            </div>
          </div>
          <div style={s.log}>
            <div style={s.gridH}>
              <span>Live stream · all services</span>
              <span style={{ color: '#22c878', fontWeight: 400 }}>● tail</span>
            </div>
            <div style={{ flex: 1, overflow: 'hidden' }}>
              <div style={{ color: '#7a8898' }}>16:24:08  INFO  api   GET  /v2/users    <span style={{ color: '#22c878' }}>200</span>  42ms</div>
              <div style={{ color: '#7a8898' }}>16:24:08  INFO  ord   POST /orders      <span style={{ color: '#22c878' }}>201</span>  118ms</div>
              <div style={{ color: '#7a8898' }}>16:24:09  INFO  inv   GET  /stock/482   <span style={{ color: '#22c878' }}>200</span>  8ms</div>
              <div style={{ color: '#f5b342' }}>16:24:09  WARN  pay   POST /charge     <span style={{ color: '#f5b342' }}>502</span>  2.4s · retry</div>
              <div style={{ color: '#7a8898' }}>16:24:09  INFO  auth  POST /token      <span style={{ color: '#22c878' }}>200</span>  62ms</div>
              <div style={{ color: '#7a8898' }}>16:24:10  INFO  api   GET  /v2/me       <span style={{ color: '#22c878' }}>200</span>  18ms</div>
              <div style={{ color: '#ef4848' }}>16:24:10  ERR   pay   POST /charge     <span style={{ color: '#ef4848' }}>500</span>  3.1s · alert sent</div>
              <div style={{ color: '#22c878' }}>16:24:11  INFO  pay   <span style={{ color: '#22c878' }}>↳ recovered · 188ms</span></div>
              <div style={{ color: '#7a8898' }}>16:24:11  INFO  srch  GET  /q?=...      <span style={{ color: '#22c878' }}>200</span>  142ms</div>
              <div style={{ color: '#7a8898' }}>16:24:12  INFO  api   GET  /healthz     <span style={{ color: '#22c878' }}>200</span>  2ms</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function DashboardSection() {
  return (
    <DCSection id="dashboards" title="Dashboards — Six Directions"
      subtitle="Different palettes, densities, and product surfaces. From clinical SaaS analytics to a Bloomberg-feel terminal.">
      <DCArtboard id="dash-analytics" label="A · SaaS Analytics" width={DW} height={DH}>
        <DashAnalytics />
      </DCArtboard>
      <DCArtboard id="dash-trading" label="B · Trading Terminal" width={DW} height={DH}>
        <DashTrading />
      </DCArtboard>
      <DCArtboard id="dash-health" label="C · Health Rings" width={DW} height={DH}>
        <DashHealth />
      </DCArtboard>
      <DCArtboard id="dash-home" label="D · Smart Home" width={DW} height={DH}>
        <DashHome />
      </DCArtboard>
      <DCArtboard id="dash-crm" label="E · Kanban CRM" width={DW} height={DH}>
        <DashCRM />
      </DCArtboard>
      <DCArtboard id="dash-devops" label="F · DevOps Status Wall" width={DW} height={DH}>
        <DashDevOps />
      </DCArtboard>
    </DCSection>
  );
}

window.DashboardSection = DashboardSection;
