// Four further SaaS consoles — incident command, data pipeline monitor,
// lifecycle messaging, and localization coverage. Registered as
// SaasDashVol3Section for the SaaS canvas; numbering continues at 21–24.

const SW3 = 1280;
const SH3 = 800;

// ─────────────────────────────────────────────────────────────────────────────
// 21. KLAXON · INCIDENT COMMAND — dark crisis room: SEV1 banner, incident
//     timeline, service status grid, on-call roster, budget strip.
// ─────────────────────────────────────────────────────────────────────────────
function SaasKlaxon() {
  const red = '#FF5A5A';
  const amber = '#FFB020';
  const s = {
    root: { width: SW3, height: SH3, background: '#120E0E', color: '#F4ECEA',
      fontFamily: '"IBM Plex Sans", sans-serif', display: 'flex',
      overflow: 'hidden' },
    side: { width: 226, flexShrink: 0, background: '#170F10',
      borderRight: '1px solid #2A1B1D', display: 'flex', flexDirection: 'column',
      padding: '20px 14px' },
    brand: { fontWeight: 800, fontSize: 17, display: 'flex', gap: 9,
      alignItems: 'center', padding: '0 10px 18px' },
    bMark: { width: 12, height: 12, borderRadius: '50%', background: red,
      boxShadow: `0 0 14px ${red}` },
    navLbl: { fontSize: 9.5, fontWeight: 800, letterSpacing: '0.16em',
      color: '#8A6E70', padding: '0 10px', margin: '12px 0 6px' },
    navItem: (active) => ({ padding: '8px 10px', borderRadius: 8,
      fontSize: 13, fontWeight: active ? 800 : 600,
      background: active ? '#241618' : 'transparent',
      color: active ? '#F4ECEA' : '#B08E90', marginBottom: 2 }),
    shift: { marginTop: 'auto', background: '#1D1315', borderRadius: 10,
      padding: '12px 13px', fontSize: 11.5 },
    main: { flex: 1, padding: '18px 22px', display: 'flex',
      flexDirection: 'column', minWidth: 0 },
    head: { display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 },
    title: { fontSize: 20, fontWeight: 800, letterSpacing: '-0.02em' },
    sevPill: { fontSize: 11, fontWeight: 800, letterSpacing: '0.08em',
      color: '#120E0E', background: red, borderRadius: 7, padding: '6px 12px' },
    sevTimer: { fontFamily: '"JetBrains Mono", monospace', fontSize: 12,
      color: amber },
    headBtns: { marginLeft: 'auto', display: 'flex', gap: 8 },
    btnGhost: { background: 'transparent', border: '1px solid #3A2628',
      color: '#F4ECEA', borderRadius: 9, padding: '9px 14px', fontSize: 12.5,
      fontWeight: 700, cursor: 'pointer' },
    btnRed: { background: red, border: `1px solid ${red}`, color: '#120E0E',
      borderRadius: 9, padding: '9px 14px', fontSize: 12.5, fontWeight: 800,
      cursor: 'pointer' },
    grid: { flex: 1, display: 'grid',
      gridTemplateColumns: '1.45fr 1fr', gap: 14, minHeight: 0 },
    panel: { background: '#180F11', border: '1px solid #2A1B1D',
      borderRadius: 12, padding: '15px 17px', display: 'flex',
      flexDirection: 'column', minWidth: 0 },
    panelHead: { display: 'flex', justifyContent: 'space-between', fontSize: 10.5,
      fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase',
      color: '#8A6E70', marginBottom: 10 },
    incTitle: { fontSize: 16, fontWeight: 800, marginBottom: 2 },
    incMeta: { fontSize: 12, color: '#B08E90', marginBottom: 10 },
    tlRow: { display: 'grid', gridTemplateColumns: '58px 12px 1fr', gap: 8,
      paddingBottom: 12, position: 'relative' },
    tlTime: { fontFamily: '"JetBrains Mono", monospace', fontSize: 11,
      color: '#8A6E70', paddingTop: 1 },
    tlDotCol: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
    tlDot: (c) => ({ width: 9, height: 9, borderRadius: '50%',
      background: c, flexShrink: 0 }),
    tlLine: { width: 2, flex: 1, background: '#2A1B1D', marginTop: 2 },
    tlWho: { color: amber, fontWeight: 700 },
    svcGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 8 },
    svcTile: { background: '#150C0E', border: '1px solid #2A1B1D',
      borderRadius: 9, padding: '9px 11px' },
    svcName: { fontSize: 11.5, fontWeight: 700, display: 'flex', gap: 6,
      alignItems: 'center' },
    svcDot: (c) => ({ width: 7, height: 7, borderRadius: '50%',
      background: c, boxShadow: c === red ? `0 0 8px ${red}` : 'none' }),
    svcVal: { fontFamily: '"JetBrains Mono", monospace', fontSize: 11,
      color: '#B08E90', marginTop: 4 },
    oncall: { display: 'flex', flexDirection: 'column', gap: 8 },
    ocRow: { display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', fontSize: 12.5 },
    ocAvatar: { width: 26, height: 26, borderRadius: '50%', color: '#120E0E',
      fontWeight: 800, fontSize: 10, display: 'grid', placeItems: 'center' },
    recent: { marginTop: 4 },
    recRow: { display: 'flex', justifyContent: 'space-between', fontSize: 12,
      padding: '8px 0', borderBottom: '1px solid #241517', gap: 8 },
    durBadge: { fontFamily: '"JetBrains Mono", monospace', fontSize: 10.5,
      color: '#B08E90', whiteSpace: 'nowrap' },
    budget: { display: 'flex', alignItems: 'center', gap: 14, marginTop: 12 },
    budgetTrack: { flex: 1, height: 8, borderRadius: 4, background: '#241517' },
    budgetFill: { height: '100%', borderRadius: 4, width: '61%',
      background: 'linear-gradient(90deg,#FF5A5A,#FFB020)' },
    stat: { fontFamily: '"JetBrains Mono", monospace', fontSize: 13,
      fontWeight: 700 },
    statLbl: { fontSize: 9.5, letterSpacing: '0.14em', color: '#8A6E70',
      textTransform: 'uppercase', fontWeight: 800 },
  };
  return (
    <div style={s.root}>
      <div style={s.side}>
        <div style={s.brand}><span style={s.bMark}></span> Klaxon</div>
        <div style={s.navLbl}>RESPOND</div>
        <div style={s.navItem(true)}>Incidents</div>
        <div style={s.navItem()}>Alerts</div>
        <div style={s.navItem()}>On-call</div>
        <div style={s.navLbl}>LEARN</div>
        <div style={s.navItem()}>Postmortems</div>
        <div style={s.navItem()}>Status page</div>
        <div style={s.navItem()}>Error budget</div>
        <div style={s.shift}>
          <div style={{ ...s.statLbl, marginBottom: 4 }}>Current shift</div>
          <div>Secondary · Theo W.</div>
          <div style={{ color: '#8A6E70', marginTop: 2 }}>hands over 18:00</div>
        </div>
      </div>
      <div style={s.main}>
        <div style={s.head}>
          <span style={s.title}>Incident command</span>
          <span style={s.sevPill}>SEV1 · CHECKOUT LATENCY</span>
          <span style={s.sevTimer}>▲ 47m — next update 14:35</span>
          <div style={s.headBtns}>
            <button style={s.btnGhost}>Post update</button>
            <button style={s.btnRed}>Escalate</button>
          </div>
        </div>
        <div style={s.grid}>
          <div style={{ display: 'flex', flexDirection: 'column',
            gap: 14, minHeight: 0 }}>
            <div style={s.panel}>
              <div style={s.panelHead}><span>#INC-4721 · TIMELINE</span>
                <span style={{ color: amber }}>MITIGATING</span></div>
              <div style={s.incTitle}>Checkout p99 spiked to 4.1s after deploy #48211</div>
              <div style={s.incMeta}>Started 14:02 · checkout-us · impact: 31% of carts slow</div>
              {[['14:02', red, 'Pager fired — checkout latency SLO burn 24×'],
                ['14:05', amber, <>Acknowledged by <span style={s.tlWho}>Ana Ruiz</span>, incident bridged</>],
                ['14:12', amber, <>Suspect deploy #48211 — <span style={s.tlWho}>Theo W.</span> rolling back</>],
                ['14:21', '#5EE39A', 'Rollback complete — p99 recovering, watching 10 min']].map(([t, c, txt], i) => (
                <div key={t} style={s.tlRow}>
                  <span style={s.tlTime}>{t}</span>
                  <span style={s.tlDotCol}>
                    <span style={s.tlDot(c)}></span>
                    {i < 3 ? <span style={s.tlLine}></span> : null}
                  </span>
                  <span style={{ fontSize: 12.5, lineHeight: 1.45 }}>{txt}</span>
                </div>
              ))}
            </div>
            <div style={{ ...s.panel, flex: 1 }}>
              <div style={s.panelHead}><span>Service status</span><span>p99 · last 5 min</span></div>
              <div style={s.svcGrid}>
                {[['api', amber, '812ms'], ['web', '#5EE39A', '220ms'],
                  ['checkout', red, '4.1s'], ['search', '#5EE39A', '181ms'],
                  ['worker', '#5EE39A', 'ok'], ['cdn', '#5EE39A', 'ok'],
                  ['auth', '#5EE39A', '96ms'], ['ledger', amber, 'backlog 1.2k']].map(([n, c, v]) => (
                  <div key={n} style={s.svcTile}>
                    <div style={s.svcName}><span style={s.svcDot(c)}></span>{n}</div>
                    <div style={s.svcVal}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column',
            gap: 14, minHeight: 0 }}>
            <div style={s.panel}>
              <div style={s.panelHead}><span>On-call now</span></div>
              <div style={s.oncall}>
                {[['Primary', 'AR', 'Ana Ruiz', '#FFB020', 'bridged'],
                  ['Secondary', 'TW', 'Theo Waltz', '#55C7FF', 'rollback owner'],
                  ['Escalate', 'PN', 'Priya Nair', '#EC4899', 'unpaged']].map(([role, init, name, c, note]) => (
                  <div key={role} style={s.ocRow}>
                    <span style={{ display: 'flex', gap: 9, alignItems: 'center' }}>
                      <span style={{ ...s.ocAvatar, background: c }}>{init}</span>
                      <span><b>{name}</b>
                        <div style={{ fontSize: 10.5, color: '#8A6E70' }}>{role} · {note}</div></span>
                    </span>
                    <span style={{ color: '#8A6E70' }}>☎</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ ...s.panel, flex: 1 }}>
              <div style={s.panelHead}><span>Recent incidents</span></div>
              {[['#4718 · OAuth timeouts', '38m', 'SEV2 · Aug 19'],
                ['#4703 · Search degradation', '1h 12m', 'SEV2 · Aug 11'],
                ['#4689 · Ledger backpressure', '2h 05m', 'SEV3 · Aug 04']].map(([n, d, m]) => (
                <div key={n} style={s.recRow}>
                  <span><div>{n}</div>
                    <div style={{ fontSize: 10.5, color: '#8A6E70', marginTop: 2 }}>{m}</div></span>
                  <span className="dur" style={s.durBadge}>{d}</span>
                </div>
              ))}
            </div>
            <div style={s.panel}>
              <div style={s.panelHead}><span>Error budget · checkout Q3</span>
                <span>61% left</span></div>
              <div style={s.budget}>
                <div style={s.budgetTrack}><div style={s.budgetFill}></div></div>
                <span style={s.stat}>18/46 min</span>
              </div>
              <div style={{ display: 'flex', gap: 18, marginTop: 10 }}>
                <span><div style={s.stat}>4m</div><div style={s.statLbl}>MTTA</div></span>
                <span><div style={s.stat}>38m</div><div style={s.statLbl}>MTTR</div></span>
                <span><div style={s.stat}>2</div><div style={s.statLbl}>SEV1 QTD</div></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 22. SLIPWAY · PIPELINE MONITOR — engineering-light ELT desk: freshness
//     cards, stage flow, run ledger with failures.
// ─────────────────────────────────────────────────────────────────────────────
function SaasSlipway() {
  const ink = '#14201A';
  const s = {
    root: { width: SW3, height: SH3, background: '#F5F8F5', color: ink,
      fontFamily: '"Outfit", "DM Sans", sans-serif', display: 'flex',
      overflow: 'hidden' },
    side: { width: 226, flexShrink: 0, background: '#FFFFFF',
      borderRight: '1px solid #DFE9E1', display: 'flex', flexDirection: 'column',
      padding: '20px 14px' },
    brand: { fontWeight: 800, fontSize: 17, display: 'flex', gap: 8,
      alignItems: 'center', padding: '0 10px 18px',
      fontFamily: '"JetBrains Mono", monospace' },
    bMark: { fontWeight: 800, fontSize: 13, background: '#159957', color: '#fff',
      borderRadius: 6, padding: '2px 7px' },
    navLbl: { fontSize: 9.5, fontWeight: 800, letterSpacing: '0.16em',
      color: '#8AA394', padding: '0 10px', margin: '12px 0 6px' },
    navItem: (active) => ({ padding: '8px 10px', borderRadius: 8,
      fontSize: 13, fontWeight: active ? 800 : 600,
      background: active ? '#E4F3EA' : 'transparent',
      color: active ? ink : '#5E7568', marginBottom: 2 }),
    main: { flex: 1, padding: '20px 24px', display: 'flex',
      flexDirection: 'column', minWidth: 0 },
    head: { display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', marginBottom: 14 },
    title: { fontSize: 20, fontWeight: 800, letterSpacing: '-0.02em' },
    titleSub: { fontSize: 12, color: '#7C9284', marginTop: 2,
      fontFamily: '"JetBrains Mono", monospace' },
    headBtns: { display: 'flex', gap: 8 },
    chipBtn: { background: '#fff', border: '1px solid #CFDECF',
      borderRadius: 9, padding: '8px 14px', fontSize: 12.5, fontWeight: 700,
      cursor: 'pointer', color: '#40584A' },
    chipBtnDark: { background: ink, color: '#fff', border: `1px solid ${ink}`,
      borderRadius: 9, padding: '8px 14px', fontSize: 12.5, fontWeight: 700,
      cursor: 'pointer' },
    freshRow: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 10, marginBottom: 12 },
    fresh: { background: '#fff', border: '1px solid #DFE9E1', borderRadius: 12,
      padding: '12px 14px' },
    freshWarn: { borderColor: '#EBC891', background: '#FFF9EF' },
    freshBad: { borderColor: '#EFA9A0', background: '#FEF3F1' },
    freshTbl: { fontSize: 10, fontWeight: 800, letterSpacing: '0.1em',
      color: '#7C9284', textTransform: 'uppercase' },
    freshAge: { fontSize: 17, fontWeight: 800, marginTop: 3 },
    freshState: (c) => ({ fontSize: 11, fontWeight: 800, marginTop: 2,
      color: c }),
    flow: { display: 'grid', gridTemplateColumns: '1fr 26px 1fr 26px 1fr 26px 1fr',
      alignItems: 'stretch', gap: 0, background: '#fff',
      border: '1px solid #DFE9E1', borderRadius: 12, padding: '14px 16px',
      marginBottom: 12 },
    stage: { display: 'flex', flexDirection: 'column', gap: 7, minWidth: 0 },
    stageHead: { fontSize: 10, fontWeight: 800, letterSpacing: '0.12em',
      color: '#7C9284', textTransform: 'uppercase' },
    node: (c, bg) => ({ borderRadius: 8, padding: '7px 10px', fontSize: 11.5,
      fontWeight: 700, fontFamily: '"JetBrains Mono", monospace',
      background: bg || '#EDF4EE', color: c || ink,
      border: '1px solid #DFE9E1', display: 'flex',
      justifyContent: 'space-between', gap: 6 }),
    arrow: { alignSelf: 'center', textAlign: 'center', color: '#9DB4A4',
      fontSize: 16, fontWeight: 800 },
    grid2: { flex: 1, display: 'grid', gridTemplateColumns: '1.6fr 1fr',
      gap: 10, minHeight: 0 },
    panel: { background: '#fff', border: '1px solid #DFE9E1',
      borderRadius: 12, padding: '14px 16px', display: 'flex',
      flexDirection: 'column', minWidth: 0 },
    pHead: { display: 'flex', justifyContent: 'space-between', fontSize: 10.5,
      fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase',
      color: '#7C9284', marginBottom: 8 },
    runRow: { display: 'grid',
      gridTemplateColumns: '86px 1fr 64px 64px 78px', gap: 8,
      alignItems: 'center', padding: '8px 0',
      borderBottom: '1px solid #EEF4EE', fontSize: 12,
      fontFamily: '"JetBrains Mono", monospace' },
    runHead: { fontSize: 9.5, fontWeight: 800, color: '#9DB4A4',
      letterSpacing: '0.1em' },
    status: (st) => { const map = { ok: ['#159957', '#E4F3EA'],
      warn: ['#B07A1E', '#FBF1DA'], fail: ['#C0392B', '#FBE7E3'],
      failed: ['#C0392B', '#FBE7E3'], retry: ['#B07A1E', '#FBF1DA'] };
      const [c, bg] = map[st] || map.warn; return { fontSize: 10.5,
        fontWeight: 800, color: c, background: bg, borderRadius: 6,
        padding: '3px 8px', textAlign: 'center',
        fontFamily: '"Outfit", sans-serif' }; },
    errBox: { background: '#FEF3F1', border: '1px solid #EFA9A0',
      borderRadius: 9, padding: '9px 12px', fontSize: 11.5, marginTop: 8,
      fontFamily: '"JetBrains Mono", monospace', color: '#8E3B30' },
    worker: { marginBottom: 10 },
    wTrack: { height: 8, borderRadius: 4, background: '#E8F0E9', marginTop: 5 },
    wFill: (w, c) => ({ height: '100%', borderRadius: 4, width: `${w}%`,
      background: c }),
  };
  return (
    <div style={s.root}>
      <div style={s.side}>
        <div style={s.brand}><span style={s.bMark}>{'>>'}</span> slipway</div>
        <div style={s.navLbl}>ORCHESTRATE</div>
        <div style={s.navItem(true)}>Runs</div>
        <div style={s.navItem()}>DAGs</div>
        <div style={s.navItem()}>Backfills</div>
        <div style={s.navLbl}>GOVERN</div>
        <div style={s.navItem()}>Quality tests</div>
        <div style={s.navItem()}>Assets & lineage</div>
        <div style={s.navItem()}>Contracts</div>
      </div>
      <div style={s.main}>
        <div style={s.head}>
          <div><div style={s.title}>Pipeline monitor</div>
            <div style={s.titleSub}>warehouse-core · schedule */15min · PROD</div></div>
          <div style={s.headBtns}>
            <button style={s.chipBtn}>Pause schedule</button>
            <button style={s.chipBtnDark}>▶ Trigger run</button>
          </div>
        </div>
        <div style={s.freshRow}>
          {[['raw_events', '4m ago', 'within 15m', '#159957', {}],
            ['stg_orders', '11m ago', 'within 15m', '#159957', {}],
            ['fct_revenue', '43m ago', 'SLA 30m exceeded', '#B07A1E', s.freshWarn],
            ['mart_marketing', '1h 12m ago', '2 runs failed', '#C0392B', s.freshBad]].map(([tbl, age, st, c, extra]) => (
            <div key={tbl} style={{ ...s.fresh, ...extra }}>
              <div style={s.freshTbl}>{tbl}</div>
              <div style={s.freshAge}>{age}</div>
              <div style={s.freshState(c)}>● {st}</div>
            </div>
          ))}
        </div>
        <div style={s.flow}>
          <div style={s.stage}>
            <div style={s.stageHead}>Sources</div>
            <div style={s.node('#159957')}>stripe ✦</div>
            <div style={s.node('#159957')}>segment ✦</div>
            <div style={s.node('#B07A1E', '#FBF1DA')}>salesforce ⟳</div>
          </div>
          <div style={s.arrow}>→</div>
          <div style={s.stage}>
            <div style={s.stageHead}>Staging</div>
            <div style={s.node('#159957')}>stg_orders ✓</div>
            <div style={s.node('#159957')}>stg_customers ✓</div>
            <div style={s.node('#C0392B', '#FBE7E3')}>stg_mopps ✕ 2 tests</div>
          </div>
          <div style={s.arrow}>→</div>
          <div style={s.stage}>
            <div style={s.stageHead}>Marts</div>
            <div style={s.node('#159957')}>fct_revenue ✓</div>
            <div style={{ ...s.node('#C0392B', '#FBE7E3') }}>mart_marketing ✕ upstream</div>
          </div>
          <div style={s.arrow}>→</div>
          <div style={s.stage}>
            <div style={s.stageHead}>Expose</div>
            <div style={s.node(ink, '#EDF4EE')}> tableau</div>
            <div style={s.node(ink, '#EDF4EE')}> metrics api</div>
            <div style={{ ...s.node('#B07A1E', '#FBF1DA') }}> cf dashboard ⟳ stale</div>
          </div>
        </div>
        <div style={s.grid2}>
          <div style={s.panel}>
            <div style={s.pHead}><span>Run ledger · today</span><span>41 ok · 1 retry · 1 failed</span></div>
            {[['r_9f21', 'warehouse_core', '13:45', '6m 12s', 'OK'],
              ['r_9f18', 'marketing_full', '13:30', '—', 'FAILED'],
              ['r_9f14', 'warehouse_core', '13:30', '5m 58s', 'OK'],
              ['r_9f07', 'stripe_sync', '13:15', '2m 41s', 'OK'],
              ['r_9f02', 'crm_pull', '13:00', '11m 09s', 'RETRY']].map(([id, dag, t, dur, st]) => (
              <div key={id + dag} style={s.runRow}>
                <span>{id}</span><span>{dag}</span>
                <span>{t}</span><span>{dur}</span>
                <span style={s.status(st.toLowerCase())}>{st === 'OK' ? '✓ OK' : st === 'RETRY' ? '⟳ RETRY 2/3' : '✕ FAILED'}</span>
              </div>
            ))}
            <div style={s.errBox}>
              r_9f18 · stg_mopps ← dbt test not_null_order_id returned 214 rows →
              downstream halted · owner @data-platform
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10,
            minHeight: 0 }}>
            <div style={s.panel}>
              <div style={s.pHead}><span>Workers</span></div>
              {[['wh-prod-1', 82, '#159957'], ['wh-prod-2', 64, '#159957'],
                ['wh-burst-spot', 97, '#B07A1E']].map(([n, w, c]) => (
                <div key={n} style={s.worker}>
                  <div style={{ display: 'flex', justifyContent: 'space-between',
                    fontSize: 11.5, fontWeight: 700 }}>{n}<span>{w}%</span></div>
                  <div style={s.wTrack}><div style={s.wFill(w, c)}></div></div>
                </div>
              ))}
            </div>
            <div style={{ ...s.panel, flex: 1 }}>
              <div style={s.pHead}><span>Slowest tests · 7d</span></div>
              {[['unique_fct_revenue_key', '96s'], ['relationships_stg_orders', '54s'],
                ['not_null_session_id', '41s']].map(([t, d]) => (
                <div key={t} style={{ display: 'flex', justifyContent: 'space-between',
                  fontSize: 12, padding: '7px 0',
                  borderBottom: '1px solid #EEF4EE',
                  fontFamily: '"JetBrains Mono", monospace' }}>
                  <span>{t}</span><span style={{ color: '#7C9284' }}>{d}</span>
                </div>
              ))}
              <div style={{ marginTop: 'auto', paddingTop: 10, fontSize: 11.5,
                color: '#5E7568' }}>
                Next scheduled run <b>14:00</b> · est. 6m 20s · queue clear
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 23. MURMUR · LIFECYCLE JOURNEYS — pastel messaging desk: journey rows with
//     step chips, delivery funnel, channel mix, holdout result card.
// ─────────────────────────────────────────────────────────────────────────────
function SaasMurmur() {
  const violet = '#8B5CF6';
  const s = {
    root: { width: SW3, height: SH3, background: '#FBF9FF', color: '#241C38',
      fontFamily: '"Plus Jakarta Sans", sans-serif', display: 'flex',
      overflow: 'hidden' },
    side: { width: 226, flexShrink: 0, background: '#F1EBFC', padding: '20px 14px',
      display: 'flex', flexDirection: 'column' },
    brand: { fontWeight: 800, fontSize: 18, display: 'flex', gap: 9,
      alignItems: 'center', padding: '0 10px 18px' },
    bMark: { width: 24, height: 16, borderTop: `3.5px solid ${violet}`,
      borderBottom: `3.5px solid ${violet}`, borderRadius: '50%' },
    navLbl: { fontSize: 9.5, fontWeight: 800, letterSpacing: '0.16em',
      color: '#9C8EC2', padding: '0 10px', margin: '12px 0 6px' },
    navItem: (active) => ({ padding: '8px 10px', borderRadius: 10,
      fontSize: 13, fontWeight: active ? 800 : 600,
      background: active ? '#fff' : 'transparent',
      boxShadow: active ? '0 4px 14px rgba(139,92,246,0.14)' : 'none',
      color: active ? '#241C38' : '#6E6390', marginBottom: 3 }),
    main: { flex: 1, padding: '20px 24px', display: 'flex',
      flexDirection: 'column', minWidth: 0 },
    head: { display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', marginBottom: 12 },
    title: { fontSize: 20, fontWeight: 800, letterSpacing: '-0.02em' },
    audPill: { fontSize: 11.5, fontWeight: 700, color: violet,
      background: '#F1EBFC', borderRadius: 999, padding: '7px 14px' },
    grid: { flex: 1, display: 'grid', gridTemplateColumns: '1.55fr 1fr',
      gap: 12, minHeight: 0 },
    jcol: { display: 'flex', flexDirection: 'column', gap: 9, minWidth: 0 },
    journey: { background: '#fff', borderRadius: 14, padding: '13px 16px',
      boxShadow: '0 6px 20px rgba(80,60,160,0.06)' },
    jTop: { display: 'flex', justifyContent: 'space-between',
      alignItems: 'center' },
    jName: { fontSize: 14, fontWeight: 800 },
    steps: { display: 'flex', gap: 6, marginTop: 9, flexWrap: 'wrap' },
    step: { fontSize: 10.5, fontWeight: 700, borderRadius: 999,
      padding: '5px 10px', background: '#F4F0FC', color: '#5D4E85',
      display: 'inline-flex', gap: 5, alignItems: 'center' },
    arrowStep: { alignSelf: 'center', color: '#B9ACDD', fontSize: 11 },
    jStats: { display: 'flex', gap: 16, marginTop: 9, fontSize: 11,
      color: '#6E6390' },
    statNum: { fontWeight: 800, color: '#241C38',
      fontFamily: '"JetBrains Mono", monospace' },
    pill: (txt, c, bg) => ({ fontSize: 10, fontWeight: 800, color: c,
      background: bg, borderRadius: 999, padding: '4px 10px',
      letterSpacing: '0.06em' }),
    panel: { background: '#fff', borderRadius: 14, padding: '15px 17px',
      boxShadow: '0 6px 20px rgba(80,60,160,0.06)', display: 'flex',
      flexDirection: 'column' },
    pHead: { display: 'flex', justifyContent: 'space-between', fontSize: 10.5,
      fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase',
      color: '#9C8EC2', marginBottom: 10 },
    fStage: { marginBottom: 9 },
    fLbl: { display: 'flex', justifyContent: 'space-between', fontSize: 11.5,
      fontWeight: 700, marginBottom: 4 },
    fTrack: { height: 12, borderRadius: 6, background: '#F1EBFC' },
    fFill: (w, c) => ({ height: '100%', borderRadius: 6, width: `${w}%`,
      background: c }),
    mixBar: { display: 'flex', height: 16, borderRadius: 8, overflow: 'hidden',
      marginTop: 4 },
    holdout: { background: 'linear-gradient(135deg,#F4F0FC,#EFF8F4)',
      borderRadius: 12, padding: '13px 15px', marginTop: 10 },
    holdBadge: { display: 'inline-block', fontSize: 10, fontWeight: 800,
      color: '#12946A', background: '#DCF5EA', borderRadius: 999,
      padding: '3px 10px', marginBottom: 6 },
    sched: { background: '#fff', borderRadius: 14, padding: '13px 17px',
      boxShadow: '0 6px 20px rgba(80,60,160,0.06)' },
    schedRow: { display: 'flex', gap: 12, fontSize: 12, padding: '7px 0',
      alignItems: 'baseline' },
    schedTime: { fontFamily: '"JetBrains Mono", monospace', fontWeight: 700,
      color: violet },
  };
  return (
    <div style={s.root}>
      <div style={s.side}>
        <div style={s.brand}><span style={s.bMark}></span> murmur</div>
        <div style={s.navLbl}>SEND</div>
        <div style={s.navItem(true)}>Journeys</div>
        <div style={s.navItem()}>Campaigns</div>
        <div style={s.navItem()}>Broadcasts</div>
        <div style={s.navLbl}>AUDIENCES</div>
        <div style={s.navItem()}>Segments</div>
        <div style={s.navItem()}>Predictions</div>
        <div style={s.navItem()}>Templates</div>
        <div style={{ marginTop: 'auto', fontSize: 11, color: '#9C8EC2',
          padding: '0 10px' }}>
          Rate limit<br/><b style={{ color: '#241C38' }}>48k / 60k hr</b>
        </div>
      </div>
      <div style={s.main}>
        <div style={s.head}>
          <div><div style={s.title}>Lifecycle · Onboarding</div>
            <div style={{ fontSize: 12, color: '#6E6390', marginTop: 2 }}>
              4 journeys · updated 6 min ago</div></div>
          <span style={s.audPill}>Audience: all signups · 12,408 people</span>
        </div>
        <div style={s.grid}>
          <div style={s.jcol}>
            {[['Welcome series', 'RUNNING', '#12946A', '#DCF5EA',
               [['Email', '#8B5CF6'], ['Wait 2d', null], ['Email', '#8B5CF6'], ['Push', '#EC4899'], ['Goal: profile 80%', '#12946A']],
               [['delivered', '99%'], ['opened', '71%'], ['goal', '58%']]],
              ['Aha-moment nudge', 'RUNNING', '#12946A', '#DCF5EA',
               [['In-app', '#38BDF8'], ['No goal by D3', null], ['Coach push', '#EC4899']],
               [['delivered', '97%'], ['opened', '62%'], ['goal', '34%']]],
              ['Upgrade path · Pro', 'DRAFT', '#6E6390', '#EDEAF6',
               [['Usage check', '#38BDF8'], ['Email', '#8B5CF6'], ['Wait 4d', null], ['Offer email', '#8B5CF6']],
               [['delivered', '—'], ['opened', '—'], ['goal', '—']]],
              ['Win-back · dormant 30d', 'PAUSED', '#B07A1E', '#FBF1DA',
               [['Segment sync', '#38BDF8'], ['Email', '#8B5CF6'], ['In-app', '#38BDF8']],
               [['delivered', '94%'], ['opened', '29%'], ['goal', '9%']]],].map(([name, st, sc, sbg, steps, stats]) => (
              <div key={name} style={s.journey}>
                <div style={s.jTop}>
                  <span style={s.jName}>{name}</span>
                  <span style={s.pill(st, sc, sbg)}>{st}</span>
                </div>
                <div style={s.steps}>
                  {steps.map(([label, c], i) => (
                    <span key={i} style={{ display: 'inline-flex', gap: 6,
                      alignItems: 'center' }}>
                      {i > 0 ? <span style={s.arrowStep}>→</span> : null}
                      <span style={{ ...s.step, ...(c ? { background: '#fff',
                        border: `1.5px solid ${c}`, color: c } : {}) }}>{label}</span>
                    </span>
                  ))}
                </div>
                <div style={s.jStats}>
                  {stats.map(([k, v]) => (
                    <span key={k}>{k} <span style={s.statNum}>{v}</span></span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10,
            minHeight: 0 }}>
            <div style={s.panel}>
              <div style={s.pHead}><span>Welcome funnel · 30d</span></div>
              {[['Delivered', 98, '#8B5CF6'], ['Opened', 71, '#A78BFA'],
                ['Clicked', 34, '#EC4899'], ['Profile 80% goal', 58, '#12946A']].map(([lbl, w, c]) => (
                <div key={lbl} style={s.fStage}>
                  <div style={s.fLbl}><span>{lbl}</span><span>{lbl.includes('%') ? '' : w + '%'}</span></div>
                  <div style={s.fTrack}><div style={s.fFill(w, c)}></div></div>
                </div>
              ))}
            </div>
            <div style={s.panel}>
              <div style={s.pHead}><span>Channel mix · sends this week</span></div>
              <div style={s.mixBar}>
                <div style={{ width: '62%', background: '#8B5CF6' }}></div>
                <div style={{ width: '21%', background: '#EC4899' }}></div>
                <div style={{ width: '17%', background: '#38BDF8' }}></div>
              </div>
              <div style={{ display: 'flex', gap: 14, marginTop: 8, fontSize: 11,
                color: '#6E6390' }}>
                <span>● Email 62%</span><span>● Push 21%</span><span>● In-app 17%</span>
              </div>
            </div>
            <div style={s.holdout}>
              <span style={s.holdBadge}>HOLDOUT RESULT ✓ SIGNIFICANT</span>
              <div style={{ fontSize: 13, lineHeight: 1.55 }}>
                10% holdout excluded from Welcome series shows
                <b> +6.2% D30 retention uplift</b>. Keep sending; revisit at
                40k cohorts.
              </div>
            </div>
            <div style={{ ...s.sched, flex: 1 }}>
              <div style={s.pHead}><span>Next sends today</span></div>
              {[['14:00', 'Welcome 2 — EU batch (4,120)'],
                ['15:30', 'Aha nudge — coach push (890)'],
                ['17:00', 'Win-back resume window reopens']].map(([t, m]) => (
                <div key={t} style={s.schedRow}>
                  <span style={s.schedTime}>{t}</span><span>{m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 24. VERBATIM · LOCALE COVERAGE — warm release-desk for i18n: coverage bars
//     with highlighter marks, pre-release checklist, glossary conflict.
// ─────────────────────────────────────────────────────────────────────────────
function SaasVerbatim() {
  const ink = '#26221A';
  const hi = '#FFD84D';
  const blue = '#3D5AFE';
  const s = {
    root: { width: SW3, height: SH3, background: '#FFFDF5', color: ink,
      fontFamily: '"DM Sans", "Public Sans", sans-serif', display: 'flex',
      overflow: 'hidden' },
    side: { width: 226, flexShrink: 0, background: '#FBF7EA',
      borderRight: '1px solid #EEE6CE', display: 'flex', flexDirection: 'column',
      padding: '20px 14px' },
    brand: { fontWeight: 800, fontSize: 18, display: 'flex', gap: 9,
      alignItems: 'center', padding: '0 10px 18px' },
    bMark: { width: 24, height: 24, borderRadius: 7, background: ink,
      color: hi, fontSize: 12, fontWeight: 800, display: 'grid',
      placeItems: 'center', fontFamily: '"JetBrains Mono", monospace' },
    navLbl: { fontSize: 9.5, fontWeight: 800, letterSpacing: '0.16em',
      color: '#B3A67F', padding: '0 10px', margin: '12px 0 6px' },
    navItem: (active) => ({ padding: '8px 10px', borderRadius: 8,
      fontSize: 13, fontWeight: active ? 800 : 600,
      background: active ? hi : 'transparent', color: active ? ink : '#7A704F',
      marginBottom: 2 }),
    main: { flex: 1, padding: '20px 26px', display: 'flex',
      flexDirection: 'column', minWidth: 0 },
    head: { display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', marginBottom: 14 },
    title: { fontSize: 20, fontWeight: 800, letterSpacing: '-0.02em' },
    freezeChip: { fontSize: 11, fontWeight: 800, color: '#8E3B30',
      background: '#FBE7E3', borderRadius: 999, padding: '6px 13px' },
    headBtns: { display: 'flex', gap: 8 },
    btnBlue: { background: blue, color: '#fff', borderRadius: 9,
      padding: '9px 15px', fontSize: 12.5, fontWeight: 800, cursor: 'pointer',
      border: 'none' },
    btnPlain: { background: '#fff', border: '1px solid #E4DCC2', color: ink,
      borderRadius: 9, padding: '9px 14px', fontSize: 12.5, fontWeight: 700,
      cursor: 'pointer' },
    localeRows: { display: 'flex', flexDirection: 'column', gap: 8,
      minWidth: 0 },
    locRow: { background: '#fff', border: '1px solid #EEE6CE',
      borderRadius: 12, padding: '11px 14px', display: 'grid',
      gridTemplateColumns: '110px 1fr 150px 92px', gap: 14,
      alignItems: 'center' },
    locCode: { fontFamily: '"JetBrains Mono", monospace', fontWeight: 700,
      fontSize: 13 },
    locName: { display: 'block', fontSize: 11, color: '#8A8060' },
    covHead: { display: 'flex', justifyContent: 'space-between', fontSize: 10.5,
      fontWeight: 700, marginBottom: 4 },
    covTrack: { height: 10, borderRadius: 5, background: '#F3EDDC' },
    covFill: (w, low) => ({ height: '100%', borderRadius: 5, width: `${w}%`,
      background: low ? hi : ink }),
    missing: { fontSize: 11.5, color: '#7A704F' },
    owner: { display: 'flex', alignItems: 'center', gap: 7, fontSize: 12 },
    oDot: { width: 22, height: 22, borderRadius: '50%', color: '#fff',
      fontSize: 9, fontWeight: 800, display: 'grid', placeItems: 'center' },
    rtlTag: { fontSize: 9, fontWeight: 800, border: '1px solid #E4DCC2',
      borderRadius: 5, padding: '1px 5px', color: '#7A704F' },
    right: { display: 'flex', flexDirection: 'column', gap: 10, minHeight: 0 },
    panel: { background: '#fff', border: '1px solid #EEE6CE',
      borderRadius: 12, padding: '13px 15px', display: 'flex',
      flexDirection: 'column', minWidth: 0 },
    pHead: { fontSize: 10.5, fontWeight: 800, letterSpacing: '0.12em',
      textTransform: 'uppercase', color: '#B3A67F', marginBottom: 9 },
    chk: { display: 'flex', gap: 9, fontSize: 12.5, padding: '5px 0',
      alignItems: 'flex-start' },
    cbx: { width: 17, height: 17, borderRadius: 5, flexShrink: 0,
      display: 'grid', placeItems: 'center', fontSize: 10, fontWeight: 800 },
    qStat: { display: 'flex', justifyContent: 'space-between', fontSize: 12.5,
      padding: '6px 0', borderBottom: '1px solid #F3EDDC' },
    conflict: { background: '#FFFBEC', border: '1px dashed #D9C77E',
      borderRadius: 9, padding: '10px 12px', fontSize: 12, lineHeight: 1.55 },
    hl: { background: hi, borderRadius: 3, padding: '0 3px' },
    leader: { display: 'flex', alignItems: 'center', gap: 9, fontSize: 12.5,
      padding: '6px 0' },
    readiness: { display: 'flex', alignItems: 'center', gap: 14,
      marginTop: 'auto', paddingTop: 10 },
  };
  const locales = [
    ['de-DE', 'German', 100, 0, false, 'KW', '#8B5CF6'],
    ['fr-FR', 'French', 99, 12, false, 'CM', '#3D5AFE'],
    ['ja-JP', 'Japanese', 96, 148, false, 'AO', '#12946A'],
    ['pt-BR', 'Portuguese (BR)', 91, 340, false, 'LS', '#EC4899'],
    ['ko-KR', 'Korean', 88, 452, true, 'DY', '#C4552D'],
    ['ar-EG', 'Arabic', 74, 978, true, 'NF', '#F5A623'],
  ];
  return (
    <div style={s.root}>
      <div style={s.side}>
        <div style={s.brand}><span style={s.bMark}>「A」</span> verbatim</div>
        <div style={s.navLbl}>TRANSLATE</div>
        <div style={s.navItem(true)}>Coverage</div>
        <div style={s.navItem()}>Strings queue</div>
        <div style={s.navItem()}>Screenshots</div>
        <div style={s.navLbl}>LANGUAGE OPS</div>
        <div style={s.navItem()}>Glossary</div>
        <div style={s.navItem()}>Releases</div>
        <div style={s.navItem()}>Contributors</div>
        <div style={{ marginTop: 'auto', fontSize: 11, color: '#B3A67F',
          padding: '0 10px' }}>
          Machine pass<br/><b style={{ color: ink }}>off</b> for legal copy
        </div>
      </div>
      <div style={s.main}>
        <div style={s.head}>
          <div><div style={s.title}>Locale coverage</div>
            <div style={{ fontSize: 12, color: '#8A8060', marginTop: 2 }}>
              Release v4.12 “Marigold” · 2,340 strings</div></div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <span style={s.freezeChip}>❄ STRING FREEZE IN 3 DAYS</span>
            <button style={s.btnPlain}>Export .xliff</button>
            <button style={s.btnBlue}>Ship locales</button>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.55fr 1fr',
          gap: 12, flex: 1, minHeight: 0 }}>
          <div style={s.localeRows}>
            {locales.map(([code, name, pct, miss, low, init, c]) => (
              <div key={code} style={s.locRow}>
                <span><span style={s.locCode}>{code}</span>
                  {code === 'ar-EG' ? <span style={{ ...s.rtlTag, marginLeft: 6 }}>RTL</span> : null}
                  <span style={s.locName}>{name}</span></span>
                <span>
                  <span style={s.covHead}><span>{miss === 0 ? 'Complete' : `${miss.toLocaleString()} missing`}</span>
                    <span>{pct}%</span></span>
                  <span style={low ? { display: 'block', background: '#FFF7D6',
                    borderRadius: 6, padding: 2 } : { display: 'block' }}>
                    <span style={{ ...s.covTrack, display: 'block' }}>
                      <span style={s.covFill(pct, low)}></span></span>
                  </span>
                </span>
                <span style={s.missing}>{low ? 'needs vendor pass' :
                  miss === 0 ? 'ready to ship ✓' : 'in review'}</span>
                <span style={s.owner}><span style={{ ...s.oDot, background: c }}>{init}</span>
                  {init === 'KW' ? 'kit-wolf' : init === 'CM' ? 'clarisse' : init === 'AO' ? 'aoki' : init === 'LS' ? 'lucas-s' : init === 'DY' ? 'dayoung' : 'noor-f'}</span>
              </div>
            ))}
            <div style={{ ...s.readiness }}>
              <svg width="44" height="44" viewBox="0 0 44 44">
                <circle cx="22" cy="22" r="18" fill="none" stroke="#F3EDDC" strokeWidth="6"/>
                <circle cx="22" cy="22" r="18" fill="none" stroke="#FFD84D" strokeWidth="6"
                  strokeDasharray="113" strokeDashoffset={113 * 0.06}
                  strokeLinecap="round" transform="rotate(-90 22 22)"/>
                <text x="22" y="26" textAnchor="middle" fontSize="11"
                  fontWeight="800" fill="#26221A">94%</text>
              </svg>
              <div>
                <div style={{ fontSize: 12.5, fontWeight: 800 }}>
                  Overall readiness 94% — ko-KR &amp; ar-EG gate the train
                </div>
                <div style={{ fontSize: 11.5, color: '#8A8060', marginTop: 2 }}>
                  Vendor slots confirmed Fri · projected complete Sep 1
                </div>
              </div>
            </div>
          </div>
          <div style={s.right}>
            <div style={s.panel}>
              <div style={s.pHead}>Before release</div>
              {[['Pseudo-loc QA pass on staging', '#12946A', '✓', true],
                ['Screenshot review — ja-JP honorifics', '#12946A', '✓', true],
                ['RTL mirror audit — ar-EG checkout', '#F5A623', '◐', false],
                ['Legal sign-off — de-DE terms v9', '#F5A623', '◐', false]].map(([t, c, mark]) => (
                <div key={t} style={s.chk}>
                  <span style={{ ...s.cbx, border: `1.5px solid ${c}`,
                    color: c }}>{mark}</span>{t}
                </div>
              ))}
            </div>
            <div style={s.panel}>
              <div style={s.pHead}>Queue · today</div>
              <div style={s.qStat}><span>Waiting for translator</span><b>1,204</b></div>
              <div style={s.qStat}><span>In review</span><b>86</b></div>
              <div style={{ ...s.qStat, borderBottom: 'none' }}>
                <span>Blocked questions</span><b style={{ color: '#C0392B' }}>7</b></div>
            </div>
            <div style={{ ...s.panel, flex: 1 }}>
              <div style={s.pHead}>Glossary conflict · flagged</div>
              <div style={s.conflict}>
                ko-KR “chip”:
                <span style={s.hl}>칩</span> (loanword, payments context) vs
                <span style={s.hl}>조각</span> (piece). Product usage is
                payments — reviewer proposes 칩. Needs second pair of eyes.
              </div>
              <div style={{ marginTop: 10 }}>
                <div style={s.pHead}>Top contributors · week</div>
                {[['aoki', '+412 strings'], ['noor-f', '+388'],
                  ['clarisse', '+240']].map(([n, v], i) => (
                  <div key={n} style={s.leader}>
                    <span style={{ ...s.oDot, background: ['#12946A', '#F5A623', '#3D5AFE'][i] }}>{n[0].toUpperCase()}</span>
                    {n}<span style={{ marginLeft: 'auto', color: '#8A8060' }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

function SaasDashVol3Section() {
  return (
    <DCSection id="saas-dash-vol3" title="SaaS — Further Dashboards"
      subtitle="Four more desks: incident command, data pipeline monitor, lifecycle messaging journeys, and localization coverage for a release train.">
      <DCArtboard id="s-klaxon" label="21 · Klaxon · Incident Command" width={SW3} height={SH3}>
        <SaasKlaxon />
      </DCArtboard>
      <DCArtboard id="s-slipway" label="22 · Slipway · Pipeline Monitor" width={SW3} height={SH3}>
        <SaasSlipway />
      </DCArtboard>
      <DCArtboard id="s-murmur" label="23 · Murmur · Lifecycle Journeys" width={SW3} height={SH3}>
        <SaasMurmur />
      </DCArtboard>
      <DCArtboard id="s-verbatim" label="24 · Verbatim · Locale Coverage" width={SW3} height={SH3}>
        <SaasVerbatim />
      </DCArtboard>
    </DCSection>
  );
}

window.SaasDashVol3Section = SaasDashVol3Section;
