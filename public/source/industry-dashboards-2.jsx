// Industry dashboards — places & resources: hotel, restaurant, farm, energy grid.

const P_DW = 1280;
const P_DH = 800;

function PSpark(props) { return window.IDSpark(props); }
function PBar(props) { return window.IDBar(props); }

// 05 — HOTEL NIGHT DESK. Walnut ledger, key-rack room grid, arrivals.
function DashLedger() {
  const floors = [
    { n: '6', rooms: ['occ', 'occ', 'vip', 'occ', 'clean', 'occ', 'occ', 'ooo'] },
    { n: '5', rooms: ['occ', 'clean', 'occ', 'occ', 'dirty', 'occ', 'vip', 'occ'] },
    { n: '4', rooms: ['occ', 'occ', 'dirty', 'clean', 'occ', 'occ', 'occ', 'clean'] },
    { n: '3', rooms: ['clean', 'occ', 'occ', 'occ', 'vip', 'dirty', 'occ', 'occ'] },
    { n: '2', rooms: ['occ', 'occ', 'clean', 'occ', 'occ', 'occ', 'dirty', 'occ'] },
    { n: '1', rooms: ['occ', 'dirty', 'occ', 'clean', 'occ', 'occ', 'occ', 'clean'] },
  ];
  const rc = { occ: '#3c2a1e', vip: '#9a3b2f', clean: '#efe6d6', dirty: '#cbb892', ooo: '#8a8376' };
  const s = {
    root: { width: P_DW, height: P_DH, background: '#efe6d6', color: '#3c2a1e', fontFamily: '"Cormorant Garamond", Georgia, serif', display: 'flex' },
    nav: { width: 200, background: '#3c2a1e', color: '#efe6d6', padding: '22px 18px', display: 'flex', flexDirection: 'column', gap: 8 },
    navItem: (on) => ({ padding: '8px 10px', borderRadius: 6, background: on ? '#9a3b2f' : 'transparent', fontFamily: '"DM Sans", sans-serif', fontSize: 13 }),
    main: { flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 },
    top: { display: 'flex', justifyContent: 'space-between', alignItems: 'end', padding: '18px 24px 12px', borderBottom: '1px solid #d9ccb6' },
    body: { flex: 1, display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 16, padding: 18, minHeight: 0 },
    rack: { background: '#f7f1e6', border: '1px solid #d9ccb6', borderRadius: 4, padding: 16 },
    row: { display: 'grid', gridTemplateColumns: '28px repeat(8, 1fr)', gap: 6, marginBottom: 8 },
    key: (st) => ({ height: 46, borderRadius: 3, background: rc[st], border: st === 'clean' ? '1px solid #cbb892' : 'none', boxShadow: 'inset 0 -10px 0 rgba(0,0,0,.08)' }),
    side: { display: 'flex', flexDirection: 'column', gap: 12 },
    card: { background: '#f7f1e6', border: '1px solid #d9ccb6', padding: 14, flex: 1 },
    guest: { display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #e6dccb', fontFamily: '"DM Sans", sans-serif', fontSize: 12 },
  };
  return (
    <div style={s.root}>
      <aside style={s.nav}>
        <div style={{ fontSize: 28, lineHeight: 0.9, marginBottom: 18 }}>House<br/>Ledger</div>
        {[['Night desk', true], ['Arrivals', false], ['Housekeeping', false], ['Banquets', false], ['In-house', false]].map(([l, on]) => (
          <div key={l} style={s.navItem(on)}>{l}</div>
        ))}
        <div style={{ marginTop: 'auto', fontFamily: '"DM Sans", sans-serif', fontSize: 11, color: '#cbb892' }}>
          Night audit open<br/>16 Aug · 22:14
        </div>
      </aside>
      <div style={s.main}>
        <div style={s.top}>
          <div>
            <div style={{ fontFamily: '"DM Sans", sans-serif', fontSize: 11, letterSpacing: '0.14em', color: '#8a6a4a' }}>THE HALID · MAYFAIR</div>
            <div style={{ fontSize: 34, fontWeight: 600, letterSpacing: '-0.03em' }}>Tonight’s house</div>
          </div>
          <div style={{ display: 'flex', gap: 28, fontFamily: '"DM Sans", sans-serif' }}>
            {[['Occ.', '92%'], ['Arrivals', '38'], ['VIP', '6'], ['OOO', '2']].map(([l, n]) => (
              <div key={l}><div style={{ fontSize: 11, color: '#8a6a4a' }}>{l}</div><div style={{ fontSize: 22, fontWeight: 600 }}>{n}</div></div>
            ))}
          </div>
        </div>
        <div style={s.body}>
          <div style={s.rack}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12, fontFamily: '"DM Sans", sans-serif', fontSize: 11, color: '#8a6a4a' }}>
              <span>KEY RACK · FLOORS 1–6</span>
              <span>Occupied · VIP · Ready · Dirty · OOO</span>
            </div>
            {floors.map((f) => (
              <div key={f.n} style={s.row}>
                <b style={{ display: 'grid', placeItems: 'center', fontFamily: '"DM Sans", sans-serif' }}>{f.n}</b>
                {f.rooms.map((st, i) => <div key={i} style={s.key(st)} title={`${f.n}0${i + 1}`} />)}
              </div>
            ))}
            <div style={{ marginTop: 14, fontFamily: '"DM Sans", sans-serif', fontSize: 12, color: '#8a6a4a' }}>
              Housekeeping: 11 dirty · 9 ready · next VIP turn 18 min
            </div>
          </div>
          <div style={s.side}>
            <div style={s.card}>
              <div style={{ fontSize: 20, marginBottom: 6 }}>Arrivals after 22:00</div>
              {[['Henley, C.', '612', 'Late · 23:40'], ['Wayne, A.', '508 VIP', 'Chauffeur'], ['Okoye, T.', '411', 'Connecting'], ['Perez, M.', '205', 'Allergy note']].map((g) => (
                <div key={g[0]} style={s.guest}><b>{g[0]}</b><span>{g[1]}</span><span style={{ color: '#8a6a4a' }}>{g[2]}</span></div>
              ))}
            </div>
            <div style={{ ...s.card, background: '#9a3b2f', color: '#efe6d6', border: 0, flex: 'none' }}>
              <div style={{ fontFamily: '"DM Sans", sans-serif', fontSize: 11, letterSpacing: '0.1em' }}>NIGHT NOTE</div>
              <div style={{ fontSize: 22, lineHeight: 1.15, marginTop: 6 }}>Hold 508 for Wayne — red wine, extra pillows, no turndown knock.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 06 — SERVICE FLOOR. Kitchen display + table map, ticket-red on black.
function DashPass() {
  const tables = [
    [1, 2, 'eat', '18'], [2, 4, 'eat', '42'], [3, 2, 'open', ''], [4, 6, 'fire', '11'],
    [5, 4, 'eat', '27'], [6, 2, 'pay', '61'], [7, 8, 'vip', '9'], [8, 2, 'open', ''],
    [9, 4, 'eat', '33'], [10, 2, 'fire', '6'], [11, 4, 'open', ''], [12, 6, 'eat', '21'],
  ];
  const tc = { eat: '#1c1c1c', fire: '#ff3d2e', pay: '#3a3a3a', open: '#111', vip: '#ff3d2e' };
  const tickets = {
    New: [['12', '2× cr syn', '1× tartare'], ['04', '1× turbot', '2× celeriac']],
    Firing: [['07', 'Tasting · course 3'], ['10', '1× pigeon', '1× sole']],
    Pass: [['02', 'Cheese', '2× madeleines'], ['06', 'Bill printed']],
  };
  const s = {
    root: { width: P_DW, height: P_DH, background: '#0c0c0c', color: '#f4f1ea', fontFamily: '"Archivo", system-ui, sans-serif', display: 'grid', gridTemplateColumns: '1.15fr 1fr' },
    floor: { padding: 18, borderRight: '1px solid #2a2a2a', display: 'flex', flexDirection: 'column' },
    kds: { padding: 16, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, background: '#111' },
    tbl: (st) => ({
      background: tc[st], color: st === 'open' ? '#666' : '#fff', border: st === 'open' ? '1px dashed #444' : '1px solid #2a2a2a',
      borderRadius: 14, padding: 10, minHeight: 72, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      boxShadow: st === 'fire' || st === 'vip' ? '0 0 0 1px #ff3d2e' : 'none',
    }),
    ticket: { background: '#f4f1ea', color: '#111', borderRadius: 4, padding: 10, fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, boxShadow: '3px 3px 0 #ff3d2e', marginBottom: 8 },
  };
  return (
    <div style={s.root}>
      <div style={s.floor}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.16em', color: '#ff3d2e' }}>PASS</div>
            <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-0.05em' }}>Service floor</div>
          </div>
          <div style={{ textAlign: 'right', fontSize: 12, color: '#888' }}>
            <div style={{ fontSize: 22, color: '#ff3d2e', fontWeight: 800 }}>Cover 86</div>
            Sat dinner · 22:14
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, flex: 1 }}>
          {tables.map(([n, pax, st, min]) => (
            <div key={n} style={s.tbl(st)}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: st === 'open' ? '#666' : '#bbb' }}>
                <span>T{String(n).padStart(2, '0')}</span><span>{pax}p</span>
              </div>
              <div style={{ fontSize: 18, fontWeight: 800 }}>{st === 'open' ? '—' : st.toUpperCase()}</div>
              <div style={{ fontSize: 11 }}>{min ? `${min}m` : 'empty'}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 12, display: 'flex', gap: 16, fontSize: 11, color: '#888' }}>
          <span>86: turbot, madeleines</span>
          <span style={{ color: '#ff3d2e' }}>Allergens on T07</span>
          <span>Avg turn 1h 12</span>
        </div>
      </div>
      <div style={s.kds}>
        {Object.entries(tickets).map(([col, items]) => (
          <div key={col}>
            <div style={{ fontSize: 11, letterSpacing: '0.12em', color: col === 'Firing' ? '#ff3d2e' : '#888', marginBottom: 8 }}>{col.toUpperCase()}</div>
            {items.map((t, i) => (
              <div key={i} style={s.ticket}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 800, marginBottom: 6 }}>
                  <span>T{t[0]}</span><span>{col === 'Firing' ? 'FIRE' : col === 'Pass' ? 'PASS' : 'NEW'}</span>
                </div>
                {t.slice(1).map((line) => <div key={line}>{line}</div>)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// 07 — GROWING SEASON. Cadastral fields, weather, irrigation.
function DashAcre() {
  const fields = [
    { id: 'A1', crop: 'Winter wheat', ha: 18, st: 'ok', c: '#c4a35a' },
    { id: 'A2', crop: 'Winter wheat', ha: 12, st: 'ok', c: '#d4b56c' },
    { id: 'B1', crop: 'Barley', ha: 9, st: 'dry', c: '#8a9a4a' },
    { id: 'B2', crop: 'Oilseed', ha: 14, st: 'ok', c: '#3d5c2e' },
    { id: 'C1', crop: 'Cover', ha: 7, st: 'ok', c: '#6a8f4e' },
    { id: 'C2', crop: 'Pasture', ha: 21, st: 'wet', c: '#2c4a22' },
    { id: 'D1', crop: 'Maize', ha: 11, st: 'ok', c: '#e0c36a' },
    { id: 'D2', crop: 'Fallow', ha: 6, st: 'idle', c: '#cfc3a4' },
  ];
  const s = {
    root: { width: P_DW, height: P_DH, background: '#e7efe2', color: '#2c4a22', fontFamily: '"Fraunces", Georgia, serif', display: 'flex', flexDirection: 'column' },
    top: { display: 'flex', justifyContent: 'space-between', alignItems: 'end', padding: '18px 24px 12px' },
    body: { flex: 1, display: 'grid', gridTemplateColumns: '1.4fr .9fr', gap: 14, padding: '0 24px 18px', minHeight: 0 },
    map: { display: 'grid', gridTemplateColumns: '1.2fr .8fr .9fr', gridTemplateRows: '1fr 1.1fr 0.8fr', gap: 8, minHeight: 0 },
    parcel: (c) => ({ background: c, borderRadius: 8, padding: 12, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#163016', minHeight: 0 }),
    side: { display: 'flex', flexDirection: 'column', gap: 12 },
    card: { background: '#f6faF3', border: '1px solid #c9d6c0', borderRadius: 14, padding: 14 },
  };
  return (
    <div style={s.root}>
      <div style={s.top}>
        <div>
          <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, letterSpacing: '0.14em', color: '#6a8a5c' }}>ACRE · HOLDING 14</div>
          <div style={{ fontSize: 36, fontWeight: 600, letterSpacing: '-0.04em' }}>Growing season</div>
        </div>
        <div style={{ display: 'flex', gap: 10, fontFamily: '"IBM Plex Mono", monospace', fontSize: 12 }}>
          {[['18°', 'Clear'], ['2.1mm', 'Rain 7d'], ['SW 8', 'Wind'], ['62%', 'Soil']].map(([n, l]) => (
            <div key={l} style={{ background: '#f6faf3', border: '1px solid #c9d6c0', borderRadius: 12, padding: '8px 12px', textAlign: 'center' }}>
              <div style={{ fontFamily: '"Fraunces", serif', fontSize: 18 }}>{n}</div>
              <div style={{ color: '#6a8a5c' }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={s.body}>
        <div style={s.map}>
          {fields.map((f, i) => (
            <div key={f.id} style={{ ...s.parcel(f.c), gridColumn: i === 5 ? 'span 2' : undefined, color: f.st === 'idle' || f.c === '#e0c36a' || f.c === '#c4a35a' || f.c === '#d4b56c' || f.c === '#cfc3a4' ? '#2c4a22' : '#e7efe2' }}>
              <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 11 }}>{f.id} · {f.ha} ha</div>
              <div>
                <div style={{ fontSize: 18, fontWeight: 600 }}>{f.crop}</div>
                <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 10, opacity: 0.8 }}>{f.st === 'dry' ? 'IRRIGATE' : f.st === 'wet' ? 'HOLD WATER' : f.st.toUpperCase()}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={s.side}>
          <div style={s.card}>
            <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, color: '#6a8a5c' }}>YIELD FORECAST</div>
            <div style={{ fontSize: 32, margin: '4px 0 8px' }}>4.8 t/ha</div>
            <PSpark data={[3.2, 3.4, 3.8, 4.1, 4.4, 4.6, 4.8]} color="#2c4a22" fill="rgba(44,74,34,.12)" height={40} />
            <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, color: '#6a8a5c' }}>+6% vs 5-year · wheat</div>
          </div>
          <div style={s.card}>
            <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, color: '#6a8a5c', marginBottom: 8 }}>IRRIGATION · TONIGHT</div>
            {[['B1 Barley', '22:00', '48 min'], ['D1 Maize', '23:10', '35 min'], ['A2 Wheat', 'skip', 'soil ok']].map((r) => (
              <div key={r[0]} style={{ display: 'flex', justifyContent: 'space-between', fontFamily: '"IBM Plex Mono", monospace', fontSize: 12, padding: '7px 0', borderBottom: '1px solid #dce6d6' }}>
                <b>{r[0]}</b><span>{r[1]}</span><span>{r[2]}</span>
              </div>
            ))}
          </div>
          <div style={{ ...s.card, background: '#2c4a22', color: '#e7efe2', border: 0 }}>
            <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, opacity: 0.7 }}>SCOUT NOTE</div>
            <div style={{ fontSize: 20, lineHeight: 1.2, marginTop: 6 }}>B1 showing moisture stress on the west headland. Pulse 12 mm before noon.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 08 — GRID DESK. Phosphor control room, load curve, substations.
function DashCircuit() {
  const load = [48, 52, 50, 55, 61, 70, 82, 91, 96, 94, 88, 80, 74, 70, 68, 72, 84, 98, 104, 101, 92, 78, 64, 54];
  const subs = [
    ['N-12', 'ok'], ['N-14', 'ok'], ['N-18', 'warn'], ['E-03', 'ok'],
    ['E-07', 'ok'], ['S-21', 'ok'], ['S-22', 'trip'], ['W-04', 'ok'],
    ['W-09', 'ok'], ['C-01', 'ok'], ['C-05', 'ok'], ['C-08', 'warn'],
  ];
  const sc = { ok: '#3dffc8', warn: '#f0c14a', trip: '#ff5a6a' };
  const s = {
    root: { width: P_DW, height: P_DH, background: '#06151a', color: '#c8fff0', fontFamily: '"JetBrains Mono", monospace', display: 'flex', flexDirection: 'column' },
    top: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 18px', borderBottom: '1px solid #12343c', background: '#082026' },
    body: { flex: 1, display: 'grid', gridTemplateColumns: '1.6fr .9fr', gap: 12, padding: 14, minHeight: 0 },
    hero: { background: '#082026', border: '1px solid #12343c', borderRadius: 6, padding: 16, display: 'flex', flexDirection: 'column' },
    matrix: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 },
    cell: (st) => ({ background: '#082026', border: `1px solid ${sc[st]}`, borderRadius: 4, padding: 10, boxShadow: st !== 'ok' ? `0 0 12px ${sc[st]}33` : 'none' }),
    side: { display: 'flex', flexDirection: 'column', gap: 10 },
    card: { background: '#082026', border: '1px solid #12343c', borderRadius: 6, padding: 14 },
  };
  return (
    <div style={s.root}>
      <div style={s.top}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ width: 8, height: 8, background: '#3dffc8', boxShadow: '0 0 10px #3dffc8' }} />
          <b>CIRCUIT · GRID DESK</b>
          <span style={{ color: '#5f8f88' }}>REGION SOUTH · 400kV</span>
        </div>
        <div style={{ display: 'flex', gap: 22, fontSize: 12 }}>
          <span>FREQ <b style={{ color: '#3dffc8' }}>49.98 Hz</b></span>
          <span>ACE <b>−12 MW</b></span>
          <span>RESERVE <b>1.8 GW</b></span>
        </div>
      </div>
      <div style={s.body}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minHeight: 0 }}>
          <div style={s.hero}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div>
                <div style={{ fontSize: 11, color: '#5f8f88' }}>SYSTEM LOAD · MW</div>
                <div style={{ fontSize: 42, color: '#3dffc8', letterSpacing: '-0.06em' }}>18,420</div>
              </div>
              <div style={{ textAlign: 'right', fontSize: 12, color: '#5f8f88' }}>Peak 19:12 · 21.1 GW<br/>Ramp +840 MW/h</div>
            </div>
            <div style={{ flex: 1, minHeight: 180, marginTop: 8 }}>
              <svg width="100%" height="100%" viewBox="0 0 600 180" preserveAspectRatio="none">
                {[45, 90, 135].map((y) => <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="#12343c" />)}
                <path d={`M ${load.map((v, i) => `${(i / 23) * 600},${180 - (v / 120) * 170}`).join(' L ')}`} fill="none" stroke="#3dffc8" strokeWidth="2" />
                <path d={`M ${load.map((v, i) => `${(i / 23) * 600},${180 - (v / 120) * 170}`).join(' L ')} L 600,180 L 0,180 Z`} fill="rgba(61,255,200,.08)" />
              </svg>
            </div>
          </div>
          <div style={s.matrix}>
            {subs.map(([id, st]) => (
              <div key={id} style={s.cell(st)}>
                <div style={{ fontSize: 10, color: '#5f8f88' }}>SUB</div>
                <div style={{ fontSize: 16 }}>{id}</div>
                <div style={{ fontSize: 10, color: sc[st] }}>{st.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={s.side}>
          <div style={{ ...s.card, borderColor: '#ff5a6a' }}>
            <div style={{ color: '#ff5a6a', fontSize: 11 }}>TRIP · S-22</div>
            <div style={{ fontSize: 16, margin: '6px 0' }}>Feeder 4 lockout</div>
            <div style={{ fontSize: 11, color: '#5f8f88' }}>14:08 · auto-reclose failed · crew 12 min</div>
          </div>
          <div style={s.card}>
            <div style={{ fontSize: 11, color: '#5f8f88', marginBottom: 8 }}>DEMAND RESPONSE</div>
            {[['Industrial park', '−42 MW', 'armed'], ['Cold stores', '−18 MW', 'live'], ['EV hubs', '−9 MW', 'standby']].map((r) => (
              <div key={r[0]} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, padding: '6px 0', borderBottom: '1px solid #12343c' }}>
                <span>{r[0]}</span><span style={{ color: '#3dffc8' }}>{r[1]}</span><span>{r[2]}</span>
              </div>
            ))}
          </div>
          <div style={s.card}>
            <div style={{ fontSize: 11, color: '#5f8f88' }}>INERTIA</div>
            <div style={{ fontSize: 28, color: '#3dffc8' }}>6.4 s</div>
            <PBar value={72} color="#3dffc8" track="#12343c" height={5} />
            <div style={{ fontSize: 11, color: '#5f8f88', marginTop: 6 }}>Above floor · 5.0 s</div>
          </div>
          <div style={s.card}>
            <div style={{ fontSize: 11, color: '#5f8f88' }}>WIND · SOLAR NOW</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
              <span style={{ fontSize: 20 }}>4.1 GW</span>
              <span style={{ fontSize: 20 }}>1.6 GW</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashPlacesSection() {
  return (
    <DCSection id="dash-places" title="Dashboards — Places & Resources"
      subtitle="Four place-based desks: a hotel key rack, a restaurant pass, a cadastral farm map, and a phosphor grid control room.">
      <DCArtboard id="d-ledger" label="05 · House Ledger · Night Desk" width={P_DW} height={P_DH}><DashLedger /></DCArtboard>
      <DCArtboard id="d-pass" label="06 · Pass · Service Floor" width={P_DW} height={P_DH}><DashPass /></DCArtboard>
      <DCArtboard id="d-acre" label="07 · Acre · Growing Season" width={P_DW} height={P_DH}><DashAcre /></DCArtboard>
      <DCArtboard id="d-circuit" label="08 · Circuit · Grid Desk" width={P_DW} height={P_DH}><DashCircuit /></DCArtboard>
    </DCSection>
  );
}

window.DashPlacesSection = DashPlacesSection;
