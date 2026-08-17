// Industry dashboards — operations desks: hospital, fleet, factory, airside.

const DW = 1280;
const DH = 800;

function IDSpark({ data, color, width = 140, height = 32, fill }) {
  const max = Math.max(...data, 1);
  const pts = data.map((v, i) => `${(i / (data.length - 1)) * width},${height - (v / max) * (height - 3)}`);
  return (
    <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
      {fill && <path d={`M ${pts.join(' L ')} L ${width},${height} L 0,${height} Z`} fill={fill} />}
      <path d={`M ${pts.join(' L ')}`} fill="none" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function IDRing({ pct, color, size = 64, stroke = 7, track }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={track || color} strokeOpacity={track ? 1 : 0.16} strokeWidth={stroke} />
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round"
        strokeDasharray={c} strokeDashoffset={c * (1 - Math.min(pct, 100) / 100)} />
    </svg>
  );
}

function IDBar({ value, color, track = 'rgba(0,0,0,.08)', height = 6 }) {
  return (
    <div style={{ height, borderRadius: height, background: track, overflow: 'hidden' }}>
      <div style={{ width: `${Math.min(value, 100)}%`, height: '100%', background: color, borderRadius: height }} />
    </div>
  );
}

// 01 — HOSPITAL COMMAND. Architectural floor plate, celadon, high-stakes calm.
function DashMeridian() {
  const bedC = { occ: '#16382c', crit: '#c44738', clean: '#d7eadc', dirty: '#e4d6a4', or: '#1f6f8a' };
  const wards = [
    { name: 'ICU · West', beds: ['crit', 'occ', 'occ', 'clean', 'occ', 'crit', 'occ', 'dirty'] },
    { name: 'ICU · East', beds: ['occ', 'occ', 'clean', 'occ', 'occ', 'occ'] },
    { name: 'Med/Surg 3W', beds: ['occ', 'occ', 'dirty', 'occ', 'clean', 'occ', 'occ', 'occ', 'clean', 'occ', 'dirty', 'occ'] },
    { name: 'Med/Surg 3E', beds: ['occ', 'clean', 'occ', 'occ', 'dirty', 'occ', 'occ', 'clean', 'occ', 'occ'] },
    { name: 'ED bays', beds: ['crit', 'occ', 'occ', 'occ', 'dirty', 'occ', 'clean', 'occ', 'occ', 'crit'] },
    { name: 'OR suite', beds: ['or', 'or', 'or', 'clean', 'or', 'or', 'or', 'clean', 'or'] },
  ];
  const s = {
    root: { width: DW, height: DH, background: '#eef3ef', color: '#143028', fontFamily: '"Inter Tight", system-ui, sans-serif', display: 'flex', flexDirection: 'column' },
    top: { display: 'flex', alignItems: 'center', gap: 22, padding: '14px 22px', background: '#fbfcf9', borderBottom: '1px solid #d5e0d8' },
    brand: { display: 'flex', alignItems: 'center', gap: 10, fontFamily: '"Fraunces", serif', fontSize: 20, fontWeight: 600, letterSpacing: '-0.03em' },
    mark: { width: 22, height: 22, borderRadius: 6, background: '#143028', color: '#d7eadc', display: 'grid', placeItems: 'center', fontSize: 11, fontWeight: 700 },
    pill: { padding: '6px 11px', borderRadius: 999, background: '#eef3ef', fontSize: 12, color: '#4a6558' },
    kpis: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, padding: '12px 22px 0' },
    kpi: { background: '#fbfcf9', border: '1px solid #d5e0d8', borderRadius: 14, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 12 },
    body: { flex: 1, display: 'grid', gridTemplateColumns: '1.55fr 1fr', gap: 12, padding: 12, minHeight: 0 },
    plate: { background: '#fbfcf9', border: '1px solid #d5e0d8', borderRadius: 16, padding: 16, display: 'flex', flexDirection: 'column', minHeight: 0 },
    ward: { marginBottom: 10 },
    beds: { display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: 6 },
    bed: (st) => ({ width: 22, height: 16, borderRadius: 3, background: bedC[st], boxShadow: st === 'crit' ? '0 0 0 1px #c44738' : 'none' }),
    side: { display: 'flex', flexDirection: 'column', gap: 12, minHeight: 0 },
    card: { background: '#fbfcf9', border: '1px solid #d5e0d8', borderRadius: 16, padding: 14, flex: 1, minHeight: 0 },
    row: { display: 'grid', gridTemplateColumns: '52px 1fr 70px 56px', gap: 8, padding: '7px 0', borderBottom: '1px solid #e4ece6', fontSize: 12, alignItems: 'center' },
    tag: (bg, c) => ({ background: bg, color: c, padding: '2px 7px', borderRadius: 999, fontSize: 10, fontWeight: 700, textAlign: 'center' }),
    staff: { display: 'flex', gap: 10, padding: '0 22px 14px' },
    staffCard: { flex: 1, background: '#143028', color: '#eef3ef', borderRadius: 12, padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  };
  return (
    <div style={s.root}>
      <div style={s.top}>
        <div style={s.brand}><span style={s.mark}>M</span> Meridian</div>
        <span style={s.pill}>Riverside Campus</span>
        <span style={s.pill}>Day shift · 07:00–19:00</span>
        <span style={{ marginLeft: 'auto', fontSize: 12, color: '#4a6558' }}>Sat 16 Aug · 14:22</span>
        <span style={{ ...s.tag('#f8d8d4', '#8a241c'), padding: '6px 10px' }}>3 alerts</span>
        <span style={{ width: 32, height: 32, borderRadius: '50%', background: '#143028', color: '#d7eadc', display: 'grid', placeItems: 'center', fontSize: 11, fontWeight: 700 }}>AO</span>
      </div>
      <div style={s.kpis}>
        {[
          ['ED occupancy', '92%', 92, '#c44738', [62, 70, 74, 81, 88, 90, 92]],
          ['ICU occupancy', '88%', 88, '#16382c', [80, 82, 84, 86, 85, 87, 88]],
          ['Med/Surg', '76%', 76, '#1f7a58', [71, 73, 74, 72, 75, 76, 76]],
          ['OR in use', '9 / 12', 75, '#1f6f8a', [50, 58, 66, 70, 72, 75, 75]],
        ].map(([lbl, num, pct, col, spark]) => (
          <div key={lbl} style={s.kpi}>
            <div style={{ position: 'relative', width: 58, height: 58 }}>
              <IDRing pct={pct} color={col} size={58} stroke={6} />
              <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', fontSize: 10, fontWeight: 700 }}>{pct}%</div>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 11, color: '#5b7468' }}>{lbl}</div>
              <div style={{ fontFamily: '"Fraunces", serif', fontSize: 26, letterSpacing: '-0.04em', lineHeight: 1 }}>{num}</div>
              <IDSpark data={spark} color={col} height={22} />
            </div>
          </div>
        ))}
      </div>
      <div style={s.body}>
        <div style={s.plate}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <b style={{ fontSize: 13 }}>Level 3 · live bed plate</b>
            <div style={{ display: 'flex', gap: 10, fontSize: 10, color: '#5b7468' }}>
              {[['occ', 'Occupied'], ['crit', 'Critical'], ['clean', 'Ready'], ['dirty', 'Turnover'], ['or', 'In OR']].map(([k, l]) => (
                <span key={k} style={{ display: 'flex', alignItems: 'center', gap: 5 }}><i style={{ width: 10, height: 10, borderRadius: 2, background: bedC[k] }} />{l}</span>
              ))}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 18px', flex: 1 }}>
            {wards.map((w) => (
              <div key={w.name} style={s.ward}>
                <div style={{ fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5b7468' }}>{w.name}</div>
                <div style={s.beds}>{w.beds.map((st, i) => <div key={i} style={s.bed(st)} />)}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={s.side}>
          <div style={s.card}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
              <b style={{ fontSize: 13 }}>OR board</b>
              <span style={{ fontSize: 11, color: '#5b7468' }}>9 running · 3 turnover</span>
            </div>
            {[['OR-2', 'CABG', 'Okoye', '14:40', 'crit'], ['OR-4', 'Total knee', 'Perez', '15:10', 'on'], ['OR-5', 'Appendectomy', 'Rahman', '15:25', 'on'], ['OR-7', 'C-section', 'Nwosu', 'NOW', 'crit'], ['OR-1', 'Turnover', '—', '16 min', 'turn']].map((r) => (
              <div key={r[0]} style={s.row}>
                <b>{r[0]}</b>
                <span>{r[1]} · {r[2]}</span>
                <span style={{ color: '#5b7468' }}>{r[3]}</span>
                <span style={s.tag(r[4] === 'crit' ? '#f8d8d4' : r[4] === 'turn' ? '#efe6c8' : '#d7eadc', r[4] === 'crit' ? '#8a241c' : '#143028')}>{r[4] === 'on' ? 'ON TIME' : r[4] === 'turn' ? 'TURN' : 'STAT'}</span>
              </div>
            ))}
          </div>
          <div style={{ ...s.card, flex: 'none', background: '#143028', color: '#eef3ef', border: 0 }}>
            <div style={{ fontSize: 11, letterSpacing: '0.08em', color: '#9bb5a8', marginBottom: 8 }}>EMS INBOUND</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div>
                <div style={{ fontFamily: '"Fraunces", serif', fontSize: 28, letterSpacing: '-0.04em' }}>2 units</div>
                <div style={{ fontSize: 12, color: '#c5d7cc' }}>STEMI · 6 min · Bay 4 held</div>
              </div>
              <span style={{ ...s.tag('#c44738', '#fff') }}>PRE-ALERT</span>
            </div>
          </div>
        </div>
      </div>
      <div style={s.staff}>
        {[['RN coverage', '98%', '2 float pool'], ['Hospitalists', '14 on', '1 on break'], ['Respiratory', '6 / 6', 'all assigned'], ['EVS turnover', '18 min', 'target 22']].map(([k, v, n]) => (
          <div key={k} style={s.staffCard}>
            <div>
              <div style={{ fontSize: 10, color: '#9bb5a8', letterSpacing: '0.06em' }}>{k.toUpperCase()}</div>
              <div style={{ fontSize: 16, fontWeight: 650 }}>{v}</div>
            </div>
            <div style={{ fontSize: 11, color: '#c5d7cc' }}>{n}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 02 — FLEET CONTROL. Map-first asphalt, lime signals, live jobs.
function DashYardline() {
  const s = {
    root: { width: DW, height: DH, background: '#10140c', color: '#eef2e4', fontFamily: '"Archivo", system-ui, sans-serif', position: 'relative', overflow: 'hidden' },
    map: { position: 'absolute', inset: 0 },
    top: { position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', gap: 16, padding: '16px 20px' },
    brand: { fontWeight: 800, letterSpacing: '0.14em', fontSize: 13 },
    chip: { background: 'rgba(214,255,63,.12)', border: '1px solid rgba(214,255,63,.4)', color: '#d6ff3f', padding: '6px 12px', borderRadius: 999, fontSize: 11, fontWeight: 700 },
    float: { position: 'absolute', zIndex: 2, background: 'rgba(16,20,12,.78)', backdropFilter: 'blur(16px)', border: '1px solid rgba(238,242,228,.1)', borderRadius: 16, padding: 14 },
    dock: { position: 'absolute', right: 16, top: 64, bottom: 16, width: 340, zIndex: 2, background: 'rgba(16,20,12,.86)', backdropFilter: 'blur(18px)', border: '1px solid rgba(238,242,228,.1)', borderRadius: 18, padding: 16, display: 'flex', flexDirection: 'column' },
    job: { display: 'grid', gridTemplateColumns: '64px 1fr auto', gap: 8, padding: '10px 0', borderBottom: '1px solid rgba(238,242,228,.08)', fontSize: 12, alignItems: 'center' },
  };
  const jobs = [
    ['YL-18', 'Port → N7 DC', '14 min', true],
    ['YL-04', 'Bonded → LHR', '22 min', true],
    ['YL-31', 'Cold chain 4°', 'DELAY', false],
    ['YL-09', 'Cross-dock B', '41 min', true],
    ['YL-22', 'Empty return', '1h 02', true],
    ['YL-11', 'Hazmat 3', 'HOLD', false],
    ['YL-27', 'City loop', '9 min', true],
    ['YL-02', 'Night trunk', 'On bay', true],
  ];
  return (
    <div style={s.root}>
      <svg style={s.map} viewBox="0 0 1280 800" preserveAspectRatio="xMidYMid slice">
        <rect width="1280" height="800" fill="#10140c" />
        <g opacity="0.35" stroke="#3a4630" strokeWidth="1" fill="none">
          {Array.from({ length: 16 }).map((_, i) => <line key={'v' + i} x1={80 * i} y1="0" x2={80 * i} y2="800" />)}
          {Array.from({ length: 10 }).map((_, i) => <line key={'h' + i} x1="0" y1={80 * i} x2="1280" y2={80 * i} />)}
        </g>
        <path d="M 40 620 C 180 540, 240 420, 380 390 S 620 410, 740 300 S 980 160, 1240 220" fill="none" stroke="#d6ff3f" strokeWidth="3" opacity="0.85" />
        <path d="M 60 180 C 220 220, 300 340, 460 360 S 700 300, 860 470 S 1100 640, 1220 700" fill="none" stroke="#8fb56a" strokeWidth="2" opacity="0.7" />
        <path d="M 200 740 C 340 680, 420 520, 560 500 S 780 560, 900 480" fill="none" stroke="#f0c14a" strokeWidth="2" opacity="0.55" />
        {[[180, 540], [380, 390], [740, 300], [980, 190], [460, 360], [860, 470], [560, 500], [900, 480], [240, 210], [1100, 660]].map(([x, y], i) => (
          <g key={i} transform={`translate(${x} ${y})`}>
            <circle r="7" fill={i === 2 || i === 6 ? '#ff5a3a' : '#d6ff3f'} />
            <polygon points="0,-13 5,-3 -5,-3" fill={i === 2 || i === 6 ? '#ff5a3a' : '#d6ff3f'} />
          </g>
        ))}
        <rect x="108" y="118" width="86" height="28" rx="4" fill="#1a2114" stroke="#d6ff3f" />
        <text x="151" y="137" textAnchor="middle" fill="#d6ff3f" fontSize="11" fontFamily="IBM Plex Mono">YARD A</text>
        <rect x="980" y="560" width="92" height="28" rx="4" fill="#1a2114" stroke="#8fb56a" />
        <text x="1026" y="579" textAnchor="middle" fill="#8fb56a" fontSize="11" fontFamily="IBM Plex Mono">DC NORTH</text>
      </svg>
      <div style={s.top}>
        <div style={s.brand}>YARDLINE</div>
        <span style={s.chip}>48 live</span>
        <span style={s.chip}>On-time 94%</span>
        <span style={{ ...s.chip, color: '#ff8a70', borderColor: 'rgba(255,90,58,.45)', background: 'rgba(255,90,58,.12)' }}>3 exceptions</span>
        <span style={{ marginLeft: 'auto', fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, color: '#9aa58a' }}>M25 corridor · 14:22 UTC</span>
      </div>
      <div style={{ ...s.float, left: 20, top: 68, width: 220 }}>
        <div style={{ fontSize: 10, color: '#9aa58a', letterSpacing: '0.1em' }}>FLEET UTILISATION</div>
        <div style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-0.05em', color: '#d6ff3f' }}>87%</div>
        <IDSpark data={[62, 70, 68, 74, 80, 83, 87]} color="#d6ff3f" fill="rgba(214,255,63,.12)" height={28} />
      </div>
      <div style={{ ...s.float, left: 20, bottom: 20, width: 280 }}>
        <div style={{ fontSize: 10, color: '#ff8a70', letterSpacing: '0.1em' }}>EXCEPTION · YL-31</div>
        <div style={{ fontSize: 15, fontWeight: 700, margin: '4px 0 6px' }}>Reefer drift · +2.1°C</div>
        <div style={{ fontSize: 12, color: '#c5cdb8' }}>Reroute to nearest cold bay · driver ack pending</div>
      </div>
      <div style={s.dock}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
          <b>Live jobs</b>
          <span style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, color: '#9aa58a' }}>ETA</span>
        </div>
        {jobs.map((j) => (
          <div key={j[0]} style={s.job}>
            <b style={{ color: '#d6ff3f', fontFamily: '"IBM Plex Mono", monospace' }}>{j[0]}</b>
            <span>{j[1]}</span>
            <span style={{ color: j[3] ? '#d6ff3f' : '#ff8a70', fontWeight: 700 }}>{j[2]}</span>
          </div>
        ))}
        <div style={{ marginTop: 'auto', padding: 12, borderRadius: 12, background: '#d6ff3f', color: '#10140c', fontWeight: 800, textAlign: 'center' }}>Dispatch override →</div>
      </div>
    </div>
  );
}

// 03 — FACTORY FLOOR. Kiln heat, OEE mosaic, shift log.
function DashKiln() {
  const machines = [
    ['K-01 Dryer', 94, 'run', [70, 80, 88, 90, 93, 94]],
    ['K-04 Press', 81, 'run', [60, 72, 70, 78, 80, 81]],
    ['K-07 Glaze', 46, 'warn', [80, 74, 68, 55, 50, 46]],
    ['K-09 Kiln', 99, 'run', [90, 92, 95, 97, 98, 99]],
    ['K-11 Pack', 72, 'run', [40, 55, 60, 66, 70, 72]],
    ['K-12 AGV', 0, 'down', [80, 70, 40, 10, 0, 0]],
    ['K-14 Mix', 88, 'run', [82, 84, 85, 86, 87, 88]],
    ['K-16 QC', 91, 'run', [88, 86, 90, 89, 91, 91]],
  ];
  const stC = { run: '#3dcc7a', warn: '#f0c14a', down: '#ff5c24' };
  const s = {
    root: { width: DW, height: DH, background: '#19110c', color: '#f3e6c8', fontFamily: '"Space Grotesk", system-ui, sans-serif', display: 'flex' },
    rail: { width: 72, background: '#120d0a', borderRight: '1px solid #2b2118', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '18px 0', gap: 14 },
    ico: (on) => ({ width: 40, height: 40, borderRadius: 10, background: on ? '#ff5c24' : '#241910', display: 'grid', placeItems: 'center', fontWeight: 700, color: on ? '#19110c' : '#8a7460' }),
    main: { flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 },
    top: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 22px', borderBottom: '1px solid #2b2118' },
    kpis: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, padding: '14px 22px 0' },
    kpi: { background: '#221710', border: '1px solid #34261c', borderRadius: 12, padding: 14 },
    grid: { flex: 1, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, padding: 14 },
    cell: { background: '#221710', border: '1px solid #34261c', borderRadius: 14, padding: 14, display: 'flex', flexDirection: 'column', gap: 8 },
    log: { height: 118, margin: '0 22px 16px', background: '#120d0a', border: '1px solid #34261c', borderRadius: 12, padding: '10px 14px', fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, lineHeight: 1.7, color: '#cbb892' },
  };
  return (
    <div style={s.root}>
      <aside style={s.rail}>
        <div style={s.ico(true)}>K</div>
        {['▣', '▦', '⚠', '☰', '◎'].map((x, i) => <div key={x} style={s.ico(i === 0)}>{x}</div>)}
      </aside>
      <div style={s.main}>
        <div style={s.top}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.16em', color: '#8a7460' }}>KILN · LINE 4 · SHIFT B</div>
            <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.04em' }}>Factory floor</div>
          </div>
          <div style={{ display: 'flex', gap: 18, fontSize: 12, color: '#cbb892' }}>
            <span>OEE target 85%</span>
            <span>Scrap cap 1.8%</span>
            <span style={{ color: '#ff5c24', fontWeight: 700 }}>K-12 down 14m</span>
          </div>
        </div>
        <div style={s.kpis}>
          {[['OEE', '87.4%', '#3dcc7a'], ['Scrap', '1.2%', '#f0c14a'], ['Uptime', '19.4h', '#f3e6c8'], ['WIP', '240 units', '#ff5c24']].map(([l, n, c]) => (
            <div key={l} style={s.kpi}>
              <div style={{ fontSize: 11, color: '#8a7460' }}>{l}</div>
              <div style={{ fontSize: 28, fontWeight: 700, color: c, letterSpacing: '-0.04em' }}>{n}</div>
            </div>
          ))}
        </div>
        <div style={s.grid}>
          {machines.map(([name, oee, st, spark]) => (
            <div key={name} style={s.cell}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <b style={{ fontSize: 13 }}>{name}</b>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: stC[st], boxShadow: `0 0 8px ${stC[st]}` }} />
              </div>
              <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.05em' }}>{oee}<span style={{ fontSize: 12, color: '#8a7460' }}> OEE</span></div>
              <IDBar value={oee} color={stC[st]} track="#34261c" height={5} />
              <IDSpark data={spark} color={stC[st]} height={24} />
              <div style={{ fontSize: 11, color: '#8a7460' }}>{st === 'down' ? 'FAULT · conveyor stall' : st === 'warn' ? 'Temp drift +4°' : 'Cycle 48s · in spec'}</div>
            </div>
          ))}
        </div>
        <div style={s.log}>
          <div>14:22  WARN  K-07 glaze viscosity 312 cP · spec 280–300</div>
          <div style={{ color: '#ff5c24' }}>14:21  DOWN  K-12 AGV path blocked at pack cell · maint paged</div>
          <div>14:18  INFO  K-09 kiln zone 3 recovered · 1,184°C</div>
          <div>14:11  INFO  Shift B scrap 1.2% · under cap</div>
        </div>
      </div>
    </div>
  );
}

// 04 — AIRSIDE OPS. Split FIDS board, aviation yellow, gate Gantt.
function DashGate14() {
  const arr = [
    ['BA 214', 'JFK', '14:22', 'B32', 'ON TIME'],
    ['VS 003', 'ATL', '14:28', 'A12', 'DELAY 18'],
    ['EI 154', 'DUB', '14:31', 'C04', 'ON TIME'],
    ['AF 1680', 'CDG', '14:40', 'B18', 'EARLY'],
    ['LH 910', 'FRA', '14:44', 'A07', 'ON TIME'],
    ['IB 3164', 'MAD', '14:51', 'C11', 'HOLD'],
    ['SK 528', 'ARN', '15:02', 'B09', 'ON TIME'],
  ];
  const dep = [
    ['BA 441', 'LIN', '14:25', 'A03', 'BOARDING'],
    ['VS 011', 'LAX', '14:35', 'B40', 'GATE OPEN'],
    ['EI 172', 'ORK', '14:48', 'C02', 'ON TIME'],
    ['AF 1381', 'NCE', '14:55', 'A16', 'DELAY 12'],
    ['KL 1008', 'AMS', '15:05', 'B22', 'ON TIME'],
    ['LX 325', 'ZRH', '15:12', 'C08', 'ON TIME'],
    ['TP 1355', 'LIS', '15:20', 'A21', 'STANDBY'],
  ];
  const tagC = {
    'ON TIME': ['#12301c', '#7dffb0'],
    EARLY: ['#12301c', '#7dffb0'],
    'DELAY 18': ['#3a2208', '#f5c400'],
    'DELAY 12': ['#3a2208', '#f5c400'],
    HOLD: ['#3a120e', '#ff8a70'],
    BOARDING: ['#f5c400', '#08162e'],
    'GATE OPEN': ['#f5c400', '#08162e'],
    STANDBY: ['#1c2740', '#9eb0d0'],
  };
  const s = {
    root: { width: DW, height: DH, background: '#08162e', color: '#e8eef8', fontFamily: '"IBM Plex Mono", monospace', display: 'flex', flexDirection: 'column' },
    top: { display: 'flex', alignItems: 'center', padding: '14px 20px', borderBottom: '1px solid #163056', gap: 18 },
    brand: { fontFamily: '"Inter Tight", sans-serif', fontWeight: 800, fontSize: 18, letterSpacing: '-0.04em', color: '#f5c400' },
    body: { flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 0 },
    col: { padding: '12px 16px', borderRight: '1px solid #163056', display: 'flex', flexDirection: 'column' },
    head: { display: 'grid', gridTemplateColumns: '90px 70px 80px 60px 1fr', gap: 8, fontSize: 10, color: '#7f93b3', letterSpacing: '0.08em', paddingBottom: 8, borderBottom: '1px solid #163056' },
    row: { display: 'grid', gridTemplateColumns: '90px 70px 80px 60px 1fr', gap: 8, padding: '8px 0', borderBottom: '1px solid #122848', fontSize: 13, alignItems: 'center' },
    gantt: { height: 168, margin: '0 16px 16px', background: '#0c1d3a', border: '1px solid #163056', borderRadius: 10, padding: 12 },
  };
  const gates = [
    ['A03', 10, 22, '#f5c400'],
    ['A12', 28, 18, '#7f93b3'],
    ['A16', 48, 16, '#ff8a70'],
    ['B32', 8, 20, '#7dffb0'],
    ['B40', 32, 26, '#f5c400'],
    ['C04', 18, 14, '#7dffb0'],
  ];
  return (
    <div style={s.root}>
      <div style={s.top}>
        <div style={s.brand}>GATE 14</div>
        <span style={{ fontSize: 12, color: '#7f93b3' }}>LHR · T5 · AIRSIDE</span>
        <span style={{ padding: '4px 10px', background: '#12301c', color: '#7dffb0', fontSize: 11 }}>RWY 27L OPEN</span>
        <span style={{ padding: '4px 10px', background: '#3a2208', color: '#f5c400', fontSize: 11 }}>WIND 14G22</span>
        <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
          <div style={{ fontFamily: '"Inter Tight", sans-serif', fontSize: 28, fontWeight: 700, letterSpacing: '-0.06em', color: '#f5c400', lineHeight: 1 }}>14:22:08</div>
          <div style={{ fontSize: 10, color: '#7f93b3' }}>LOCAL · ZULU +1</div>
        </div>
      </div>
      <div style={s.body}>
        <div style={s.col}>
          <div style={{ fontFamily: '"Inter Tight", sans-serif', fontSize: 13, fontWeight: 700, marginBottom: 8, color: '#f5c400' }}>ARRIVALS</div>
          <div style={s.head}><span>FLT</span><span>FROM</span><span>STA</span><span>GATE</span><span>STATUS</span></div>
          {arr.map((r) => (
            <div key={r[0]} style={s.row}>
              <b>{r[0]}</b><span>{r[1]}</span><span>{r[2]}</span><span>{r[3]}</span>
              <span style={{ background: tagC[r[4]][0], color: tagC[r[4]][1], padding: '3px 8px', fontSize: 10, fontWeight: 700, width: 'max-content' }}>{r[4]}</span>
            </div>
          ))}
        </div>
        <div style={{ ...s.col, borderRight: 0 }}>
          <div style={{ fontFamily: '"Inter Tight", sans-serif', fontSize: 13, fontWeight: 700, marginBottom: 8, color: '#f5c400' }}>DEPARTURES</div>
          <div style={s.head}><span>FLT</span><span>TO</span><span>STD</span><span>GATE</span><span>STATUS</span></div>
          {dep.map((r) => (
            <div key={r[0]} style={s.row}>
              <b>{r[0]}</b><span>{r[1]}</span><span>{r[2]}</span><span>{r[3]}</span>
              <span style={{ background: tagC[r[4]][0], color: tagC[r[4]][1], padding: '3px 8px', fontSize: 10, fontWeight: 700, width: 'max-content' }}>{r[4]}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={s.gantt}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: '#7f93b3', marginBottom: 8 }}>
          <span>GATE OCCUPANCY · 14:00–16:00</span>
          <span>06  07  08  09  10  11  12  13  14  15  16</span>
        </div>
        {gates.map(([g, left, w, c]) => (
          <div key={g} style={{ display: 'grid', gridTemplateColumns: '44px 1fr', gap: 8, alignItems: 'center', marginBottom: 6 }}>
            <span style={{ fontSize: 11 }}>{g}</span>
            <div style={{ height: 12, background: '#122848', position: 'relative', borderRadius: 2 }}>
              <div style={{ position: 'absolute', left: `${left}%`, width: `${w}%`, height: '100%', background: c, borderRadius: 2 }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function IndustryDashboards() {
  return (
    <DesignCanvas>
      <DCSection id="dash-ops" title="Dashboards — Operations & Infrastructure"
        subtitle="Four high-stakes desks: a hospital command floor plate, a live fleet map, a kiln-hot factory mosaic, and an airside FIDS wall.">
        <DCArtboard id="d-meridian" label="01 · Meridian · Hospital Command" width={DW} height={DH}><DashMeridian /></DCArtboard>
        <DCArtboard id="d-yardline" label="02 · Yardline · Fleet Control" width={DW} height={DH}><DashYardline /></DCArtboard>
        <DCArtboard id="d-kiln" label="03 · Kiln · Factory Floor" width={DW} height={DH}><DashKiln /></DCArtboard>
        <DCArtboard id="d-gate14" label="04 · Gate 14 · Airside Ops" width={DW} height={DH}><DashGate14 /></DCArtboard>
      </DCSection>
      {window.DashPlacesSection ? <window.DashPlacesSection /> : null}
      {window.DashKnowledgeSection ? <window.DashKnowledgeSection /> : null}
      {window.DashSaasProductSection ? <window.DashSaasProductSection /> : null}
      {window.DashSaasPlatformSection ? <window.DashSaasPlatformSection /> : null}
    </DesignCanvas>
  );
}

Object.assign(window, { IDSpark, IDRing, IDBar });
const industryRoot = ReactDOM.createRoot(document.getElementById('root'));
industryRoot.render(<IndustryDashboards />);
