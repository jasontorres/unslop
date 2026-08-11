// Eight more mobile app screens — new categories, fresh palettes.

// Reuses globals from mobile-apps.jsx: MW, MH, AW, AH, Phone

// ─────────────────────────────────────────────────────────────────────────────
// M9. AI CHAT — deep blue-violet, iridescent voice orb
// ─────────────────────────────────────────────────────────────────────────────
function AppAIChat() {
  const s = {
    root: { width: '100%', height: '100%', color: '#e8eaff',
      background: 'radial-gradient(ellipse at 50% 0%, #2a1a5c 0%, #0d0a28 60%, #06081a 100%)',
      fontFamily: '-apple-system, "SF Pro", system-ui, sans-serif',
      padding: '54px 0 0', position: 'relative', overflow: 'hidden',
      display: 'flex', flexDirection: 'column' },
    top: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '16px 20px' },
    backBtn: { width: 36, height: 36, borderRadius: '50%',
      background: 'rgba(255,255,255,0.06)', display: 'flex',
      alignItems: 'center', justifyContent: 'center', fontSize: 15 },
    title: { textAlign: 'center', fontSize: 14, fontWeight: 600,
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 },
    statusDot: { width: 7, height: 7, borderRadius: '50%',
      background: '#7be3a8', boxShadow: '0 0 8px #7be3a8' },
    body: { flex: 1, padding: '12px 16px', display: 'flex',
      flexDirection: 'column', gap: 16, overflowY: 'auto' },
    timestamp: { fontSize: 11, color: 'rgba(232,234,255,0.4)',
      textAlign: 'center', letterSpacing: '0.04em' },
    msgUser: { alignSelf: 'flex-end', maxWidth: '78%',
      background: 'linear-gradient(135deg, #5a3cff, #7a5cff)',
      color: '#fff', padding: '12px 16px', borderRadius: '20px 20px 6px 20px',
      fontSize: 15, lineHeight: 1.4 },
    msgAI: { alignSelf: 'flex-start', maxWidth: '88%',
      background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.08)',
      padding: '14px 16px', borderRadius: '20px 20px 20px 6px',
      fontSize: 15, lineHeight: 1.55, color: '#e8eaff' },
    msgAIHeader: { display: 'flex', alignItems: 'center', gap: 8,
      marginBottom: 8, fontSize: 11, color: 'rgba(232,234,255,0.5)',
      letterSpacing: '0.06em' },
    aiBadge: { width: 18, height: 18, borderRadius: 5,
      background: 'linear-gradient(135deg, #7c5cff, #4cc8ff, #ff5cc4)',
      boxShadow: '0 0 12px rgba(124,92,255,0.4)' },
    code: { fontFamily: '"JetBrains Mono", ui-monospace, monospace',
      background: 'rgba(0,0,0,0.3)', padding: '2px 6px', borderRadius: 4,
      fontSize: 13, color: '#9ecdff' },
    chip: { display: 'inline-block', padding: '4px 10px', borderRadius: 999,
      background: 'rgba(124,92,255,0.18)',
      border: '1px solid rgba(124,92,255,0.3)',
      fontSize: 11, fontWeight: 500, marginRight: 6, marginTop: 8 },
    voiceWrap: { padding: '8px 16px 0', display: 'flex',
      flexDirection: 'column', alignItems: 'center', gap: 14 },
    orb: { width: 100, height: 100, borderRadius: '50%',
      background: 'conic-gradient(from 0deg, #7c5cff, #4cc8ff, #ff5cc4, #ffcc4a, #7c5cff)',
      filter: 'blur(0.5px)', position: 'relative',
      boxShadow: '0 0 60px rgba(124,92,255,0.6), 0 0 100px rgba(76,200,255,0.3)' },
    orbInner: { position: 'absolute', inset: 8, borderRadius: '50%',
      background: 'rgba(13,10,40,0.6)', backdropFilter: 'blur(20px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center' },
    waveform: { display: 'flex', alignItems: 'center', gap: 3 },
    bar: (h) => ({ width: 3, height: h, background: '#fff', borderRadius: 2,
      boxShadow: '0 0 8px #fff' }),
    voiceLbl: { fontSize: 12, color: 'rgba(232,234,255,0.6)',
      letterSpacing: '0.06em', textAlign: 'center' },
    inputBar: { padding: '14px 16px 38px',
      background: 'rgba(13,10,40,0.4)', backdropFilter: 'blur(20px)',
      borderTop: '1px solid rgba(255,255,255,0.08)' },
    input: { display: 'flex', alignItems: 'center', gap: 10,
      background: 'rgba(255,255,255,0.08)', borderRadius: 22,
      padding: '10px 14px', fontSize: 14, color: 'rgba(232,234,255,0.5)' },
    sendBtn: { width: 32, height: 32, borderRadius: '50%',
      background: 'linear-gradient(135deg, #7c5cff, #5a3cff)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#fff', fontSize: 15, flex: 'none' },
  };
  return (
    <div style={s.root}>
      <div style={s.top}>
        <div style={s.backBtn}>‹</div>
        <div style={s.title}><span style={s.statusDot}></span> Aria · Online</div>
        <div style={s.backBtn}>···</div>
      </div>
      <div style={s.body}>
        <div style={s.timestamp}>Today 4:24 pm</div>
        <div style={s.msgUser}>Plan a 3-day trip to Lisbon for late June. We like coffee, wine, walking.</div>
        <div style={s.msgAI}>
          <div style={s.msgAIHeader}><span style={s.aiBadge}></span> Aria · drafted in 1.4s</div>
          <div>Here's a slow, walkable shape. Stay in Príncipe Real — central to the rest.</div>
          <div style={{ marginTop: 10, padding: 10, borderRadius: 10,
            background: 'rgba(0,0,0,0.2)', fontSize: 13, lineHeight: 1.6 }}>
            <b>Day 1 ·</b> Alfama, sunset at Portas do Sol<br/>
            <b>Day 2 ·</b> Lx Factory + tram 28<br/>
            <b>Day 3 ·</b> Sintra day-trip (book ahead)
          </div>
          <div>
            <span style={s.chip}>+ Add to itinerary</span>
            <span style={s.chip}>Refine</span>
          </div>
        </div>
        <div style={s.msgUser}>Wine bars only — no restaurants.</div>
      </div>
      <div style={s.voiceWrap}>
        <div style={s.orb}>
          <div style={s.orbInner}>
            <div style={s.waveform}>
              {[16, 28, 22, 36, 24, 32, 18].map((h, i) => <div key={i} style={s.bar(h)}></div>)}
            </div>
          </div>
        </div>
        <div style={s.voiceLbl}>Listening · tap orb to stop</div>
      </div>
      <div style={s.inputBar}>
        <div style={s.input}>
          <span style={{ flex: 1 }}>Message Aria…</span>
          <span style={{ fontSize: 17 }}>🎙</span>
          <div style={s.sendBtn}>↑</div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// M10. CAMERA — pure black, viewfinder, yellow accent
// ─────────────────────────────────────────────────────────────────────────────
function AppCamera() {
  const s = {
    root: { width: '100%', height: '100%', background: '#000', color: '#fff',
      fontFamily: '-apple-system, "SF Pro", system-ui, sans-serif',
      position: 'relative', overflow: 'hidden' },
    viewfinder: { position: 'absolute', top: 90, left: 0, right: 0, bottom: 220,
      background: 'linear-gradient(180deg, #6890d4 0%, #d6c4a4 60%, #8a5a3a 100%)',
      overflow: 'hidden' },
    silhouette: { position: 'absolute', bottom: 0, left: 0, right: 0, height: '60%',
      background: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.5))' },
    silObj: (l, h, w, c) => ({ position: 'absolute', bottom: 0, left: `${l}%`,
      height: `${h}%`, width: `${w}%`, background: c }),
    topBar: { position: 'absolute', top: 54, left: 0, right: 0,
      padding: '12px 20px', display: 'flex',
      justifyContent: 'space-between', alignItems: 'center', zIndex: 5 },
    topBtn: { width: 38, height: 38, borderRadius: '50%',
      background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(10px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 14 },
    topCenter: { display: 'flex', gap: 6 },
    topPill: { background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(10px)',
      padding: '6px 14px', borderRadius: 999, fontSize: 12, fontWeight: 600,
      letterSpacing: '0.04em', display: 'flex', alignItems: 'center', gap: 6 },
    flashOn: { color: '#ffd14a' },
    grid: { position: 'absolute', inset: 0, pointerEvents: 'none' },
    gridLine: { position: 'absolute', background: 'rgba(255,255,255,0.3)' },
    focusFrame: { position: 'absolute', left: '50%', top: '50%',
      transform: 'translate(-50%, -50%)', width: 80, height: 80,
      border: '1.5px solid #ffd14a',
      boxShadow: '0 0 20px rgba(255,209,74,0.4)' },
    focusCorner: { position: 'absolute', width: 10, height: 10,
      border: '2px solid #ffd14a' },
    expLabel: { position: 'absolute', left: 'calc(50% + 50px)', top: '50%',
      transform: 'translateY(-50%)', color: '#ffd14a',
      fontSize: 11, fontWeight: 700, letterSpacing: '0.06em',
      writingMode: 'vertical-rl', display: 'flex', alignItems: 'center', gap: 4 },
    expBar: { width: 2, height: 60, background: 'rgba(255,255,255,0.2)',
      position: 'relative' },
    expSun: { position: 'absolute', left: -4, top: '30%', width: 10, height: 10,
      background: '#ffd14a' },
    modesRow: { position: 'absolute', bottom: 160, left: 0, right: 0,
      display: 'flex', justifyContent: 'center', gap: 20, fontSize: 12,
      fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.5)' },
    modeActive: { color: '#ffd14a' },
    controls: { position: 'absolute', bottom: 0, left: 0, right: 0,
      padding: '20px 32px 38px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    thumb: { width: 52, height: 52, borderRadius: 10,
      background: 'linear-gradient(135deg, #ffd6a8, #ff7e7e)',
      border: '2px solid #fff' },
    shutter: { width: 76, height: 76, borderRadius: '50%',
      background: '#fff', position: 'relative', display: 'flex',
      alignItems: 'center', justifyContent: 'center' },
    shutterInner: { width: 64, height: 64, borderRadius: '50%',
      border: '3px solid #000', background: '#fff' },
    swap: { width: 44, height: 44, borderRadius: '50%',
      background: 'rgba(255,255,255,0.15)', display: 'flex',
      alignItems: 'center', justifyContent: 'center', fontSize: 18 },
    histo: { position: 'absolute', top: 110, right: 20,
      width: 80, height: 36, background: 'rgba(0,0,0,0.4)',
      backdropFilter: 'blur(10px)', borderRadius: 6, padding: 6 },
  };
  return (
    <div style={s.root}>
      <div style={s.viewfinder}>
        <div style={s.silhouette}></div>
        <div style={s.silObj(0, 35, 18, '#3a1a14')}></div>
        <div style={s.silObj(20, 55, 14, '#2a0f08')}></div>
        <div style={s.silObj(38, 42, 22, '#3a1a14')}></div>
        <div style={s.silObj(64, 48, 18, '#2a0f08')}></div>
        <div style={s.silObj(84, 38, 16, '#3a1a14')}></div>
        <div style={s.grid}>
          <div style={{ ...s.gridLine, top: '33%', left: 0, right: 0, height: 0.5 }}></div>
          <div style={{ ...s.gridLine, top: '66%', left: 0, right: 0, height: 0.5 }}></div>
          <div style={{ ...s.gridLine, left: '33%', top: 0, bottom: 0, width: 0.5 }}></div>
          <div style={{ ...s.gridLine, left: '66%', top: 0, bottom: 0, width: 0.5 }}></div>
        </div>
        <div style={s.focusFrame}>
          <div style={{ ...s.focusCorner, top: -2, left: -2, borderRight: 'none', borderBottom: 'none' }}></div>
          <div style={{ ...s.focusCorner, top: -2, right: -2, borderLeft: 'none', borderBottom: 'none' }}></div>
          <div style={{ ...s.focusCorner, bottom: -2, left: -2, borderRight: 'none', borderTop: 'none' }}></div>
          <div style={{ ...s.focusCorner, bottom: -2, right: -2, borderLeft: 'none', borderTop: 'none' }}></div>
        </div>
        <div style={s.expLabel}>
          <div style={s.expBar}>
            <div style={s.expSun}></div>
          </div>
        </div>
      </div>
      <div style={s.histo}>
        <svg width="68" height="24" viewBox="0 0 68 24">
          {[14,8,4,6,12,18,22,18,14,16,20,14,8,4].map((h, i) => (
            <rect key={i} x={i * 5} y={24 - h} width="4" height={h} fill="#fff" opacity="0.7"/>
          ))}
        </svg>
      </div>
      <div style={s.topBar}>
        <div style={s.topBtn}>×</div>
        <div style={s.topCenter}>
          <div style={s.topPill}><span style={s.flashOn}>⚡</span> AUTO</div>
          <div style={s.topPill}>RAW</div>
          <div style={s.topPill}>4:5</div>
        </div>
        <div style={s.topBtn}>⚙</div>
      </div>
      <div style={s.modesRow}>
        <span>Slo-mo</span>
        <span>Video</span>
        <span style={s.modeActive}>● Photo</span>
        <span>Portrait</span>
        <span>Pano</span>
      </div>
      <div style={s.controls}>
        <div style={s.thumb}></div>
        <div style={s.shutter}><div style={s.shutterInner}></div></div>
        <div style={s.swap}>↻</div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// M11. CALENDAR — clean, mint accent, week view
// ─────────────────────────────────────────────────────────────────────────────
function AppCalendar() {
  const s = {
    root: { width: '100%', height: '100%', background: '#f7f7f4', color: '#1a1a1a',
      fontFamily: '-apple-system, "SF Pro", system-ui, sans-serif',
      padding: '54px 0 0', overflow: 'hidden', position: 'relative' },
    top: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '16px 20px 8px' },
    month: { fontSize: 26, fontWeight: 700, letterSpacing: '-0.02em',
      display: 'flex', alignItems: 'center', gap: 6 },
    monthBtn: { fontSize: 14, color: '#1a1a1a' },
    topR: { display: 'flex', gap: 14, fontSize: 18 },
    av: { width: 32, height: 32, borderRadius: '50%', background: '#22a06b',
      color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontWeight: 700, fontSize: 12 },
    weekHead: { display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)',
      gap: 4, padding: '12px 16px 0', fontSize: 11, color: '#8a8a82',
      textAlign: 'center', letterSpacing: '0.06em', textTransform: 'uppercase',
      fontWeight: 600 },
    weekRow: { display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)',
      gap: 4, padding: '6px 16px' },
    day: (today, selected, hasEvent) => ({ aspectRatio: '1',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', borderRadius: 10,
      background: selected ? '#22a06b' : today ? 'rgba(34,160,107,0.12)' : 'transparent',
      color: selected ? '#fff' : today ? '#22a06b' : '#1a1a1a',
      fontSize: 16, fontWeight: today || selected ? 700 : 500,
      position: 'relative' }),
    dot: (selected) => ({ width: 4, height: 4, borderRadius: '50%',
      background: selected ? '#fff' : '#22a06b', marginTop: 2 }),
    tabs: { display: 'flex', gap: 6, padding: '12px 16px',
      background: '#ececea', margin: '0 16px', borderRadius: 10 },
    tab: (active) => ({ flex: 1, padding: '8px 0', borderRadius: 7,
      background: active ? '#fff' : 'transparent', textAlign: 'center',
      fontSize: 13, fontWeight: 600,
      color: active ? '#1a1a1a' : '#6a6a62',
      boxShadow: active ? '0 1px 3px rgba(0,0,0,0.08)' : 'none' }),
    today: { fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase',
      color: '#8a8a82', padding: '20px 20px 8px', fontWeight: 600 },
    eventRow: { display: 'flex', gap: 12, padding: '8px 20px',
      alignItems: 'stretch' },
    timeCol: { width: 50, fontSize: 12, color: '#8a8a82', fontWeight: 500,
      paddingTop: 8, textAlign: 'right',
      fontFamily: '"JetBrains Mono", ui-monospace, monospace' },
    eventCard: (c) => ({ flex: 1, background: c[0], color: c[1],
      borderRadius: 12, padding: '12px 14px', borderLeft: `3px solid ${c[2]}` }),
    eventT: { fontSize: 14, fontWeight: 700, letterSpacing: '-0.01em' },
    eventS: { fontSize: 12, marginTop: 3, opacity: 0.75 },
    eventPpl: { display: 'flex', marginTop: 8 },
    avSm: (c, i) => ({ width: 22, height: 22, borderRadius: '50%', background: c,
      color: '#fff', border: '2px solid #fff', marginLeft: i === 0 ? 0 : -8,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 10, fontWeight: 700 }),
    fab: { position: 'absolute', right: 20, bottom: 90,
      width: 52, height: 52, borderRadius: '50%', background: '#22a06b',
      color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 22, boxShadow: '0 8px 24px rgba(34,160,107,0.4)' },
    tabBar: { position: 'absolute', bottom: 0, left: 0, right: 0,
      background: 'rgba(247,247,244,0.9)', backdropFilter: 'blur(20px)',
      borderTop: '0.5px solid #e0e0d8', padding: '10px 0 38px',
      display: 'flex', justifyContent: 'space-around' },
    tabIcon: (active) => ({ fontSize: 22, color: active ? '#22a06b' : '#a09a92' }),
  };
  const days = [12, 13, 14, 15, 16, 17, 18];
  return (
    <div style={s.root}>
      <div style={s.top}>
        <div style={s.month}>May <span style={s.monthBtn}>▾</span></div>
        <div style={s.topR}><span>⌕</span><div style={s.av}>MK</div></div>
      </div>
      <div style={s.weekHead}>
        <div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div><div>S</div>
      </div>
      <div style={s.weekRow}>
        {days.map((d, i) => {
          const today = d === 17;
          const selected = d === 14;
          const hasEvent = [13, 14, 17, 18].includes(d);
          return (
            <div key={d} style={s.day(today, selected, hasEvent)}>
              <span>{d}</span>
              {hasEvent && <span style={s.dot(selected)}></span>}
            </div>
          );
        })}
      </div>
      <div style={s.tabs}>
        <div style={s.tab(true)}>Day</div>
        <div style={s.tab()}>Week</div>
        <div style={s.tab()}>Month</div>
        <div style={s.tab()}>Agenda</div>
      </div>
      <div style={s.today}>Saturday · May 17 · 4 events</div>
      <div style={{ overflow: 'auto' }}>
        <div style={s.eventRow}>
          <div style={s.timeCol}>09:00<br/><span style={{ fontSize: 10 }}>1h</span></div>
          <div style={s.eventCard(['#dcefe4', '#1a4a2a', '#22a06b'])}>
            <div style={s.eventT}>Morning run · 5k</div>
            <div style={s.eventS}>Prospect Park loop · with Toma</div>
            <div style={s.eventPpl}>
              <div style={s.avSm('#22a06b', 0)}>M</div>
              <div style={s.avSm('#7c5cff', 1)}>T</div>
            </div>
          </div>
        </div>
        <div style={s.eventRow}>
          <div style={s.timeCol}>11:30<br/><span style={{ fontSize: 10 }}>1h</span></div>
          <div style={s.eventCard(['#fff4d8', '#5a3a0a', '#f5b342'])}>
            <div style={s.eventT}>Design review · SS26</div>
            <div style={s.eventS}>Conf B · with Studio team</div>
            <div style={s.eventPpl}>
              <div style={s.avSm('#e85a4f', 0)}>L</div>
              <div style={s.avSm('#22a06b', 1)}>M</div>
              <div style={s.avSm('#4cc8ff', 2)}>K</div>
              <div style={s.avSm('#7c5cff', 3)}>+2</div>
            </div>
          </div>
        </div>
        <div style={s.eventRow}>
          <div style={s.timeCol}>14:00<br/><span style={{ fontSize: 10 }}>2h</span></div>
          <div style={s.eventCard(['#e8e0fc', '#3a1f5a', '#7c5cff'])}>
            <div style={s.eventT}>Deep work — Q3 plan</div>
            <div style={s.eventS}>Library room · focus mode</div>
          </div>
        </div>
        <div style={s.eventRow}>
          <div style={s.timeCol}>19:30<br/><span style={{ fontSize: 10 }}>2h</span></div>
          <div style={s.eventCard(['#ffe0e8', '#5a1a3a', '#ff5e6c'])}>
            <div style={s.eventT}>Maison Calva · dinner with N</div>
            <div style={s.eventS}>14 Rue de Verneuil · 8 walk</div>
          </div>
        </div>
      </div>
      <div style={s.fab}>+</div>
      <div style={s.tabBar}>
        <div style={s.tabIcon(true)}>📅</div>
        <div style={s.tabIcon()}>⏱</div>
        <div style={s.tabIcon()}>✓</div>
        <div style={s.tabIcon()}>📍</div>
        <div style={s.tabIcon()}>≡</div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// M12. MAPS NAVIGATION — dark map, orange route, turn-by-turn
// ─────────────────────────────────────────────────────────────────────────────
function AppMaps() {
  const s = {
    root: { width: '100%', height: '100%', background: '#1a2028', color: '#fff',
      fontFamily: '-apple-system, "SF Pro", system-ui, sans-serif',
      position: 'relative', overflow: 'hidden' },
    map: { position: 'absolute', inset: 0,
      background: 'radial-gradient(ellipse at 30% 40%, #2a3640 0%, #141a22 70%)',
      overflow: 'hidden' },
    statusBar: { position: 'absolute', top: 110, left: 16, right: 16,
      background: 'rgba(15,20,28,0.85)', backdropFilter: 'blur(20px)',
      borderRadius: 14, padding: '12px 16px',
      display: 'flex', alignItems: 'center', gap: 12, zIndex: 5 },
    arrowBox: { width: 44, height: 44, borderRadius: 10, background: '#ff7e3a',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 22, flex: 'none' },
    statusMain: { flex: 1, minWidth: 0 },
    statusDist: { fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em' },
    statusInst: { fontSize: 12, color: 'rgba(255,255,255,0.65)', marginTop: 2,
      whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
    speed: { background: 'rgba(255,255,255,0.06)', padding: '8px 10px',
      borderRadius: 10, textAlign: 'center', flex: 'none',
      border: '1px solid rgba(255,255,255,0.08)' },
    speedN: { fontSize: 18, fontWeight: 700,
      fontFamily: '"JetBrains Mono", ui-monospace, monospace' },
    speedL: { fontSize: 9, color: 'rgba(255,255,255,0.5)',
      letterSpacing: '0.06em', textTransform: 'uppercase' },
    floatBtn: { position: 'absolute', right: 16, width: 44, height: 44,
      borderRadius: 12, background: 'rgba(15,20,28,0.85)',
      backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.08)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 18, zIndex: 5 },
    pin: { position: 'absolute', display: 'flex', flexDirection: 'column',
      alignItems: 'center', zIndex: 4 },
    pinTop: (c) => ({ width: 32, height: 32, borderRadius: '50%',
      background: c, border: '3px solid #fff', display: 'flex',
      alignItems: 'center', justifyContent: 'center', color: '#fff',
      boxShadow: '0 4px 12px rgba(0,0,0,0.4)' }),
    pinTail: (c) => ({ width: 2, height: 14, background: '#fff' }),
    car: { position: 'absolute', left: '46%', top: '60%',
      width: 24, height: 24, borderRadius: '50%',
      background: '#4cc8ff', border: '4px solid #fff',
      boxShadow: '0 0 0 8px rgba(76,200,255,0.2), 0 0 20px rgba(76,200,255,0.5)',
      zIndex: 4 },
    sheet: { position: 'absolute', bottom: 0, left: 0, right: 0,
      background: '#1a2028', borderRadius: '20px 20px 0 0',
      padding: '8px 20px 38px',
      borderTop: '1px solid rgba(255,255,255,0.08)', zIndex: 5 },
    sheetHandle: { width: 36, height: 4, borderRadius: 2,
      background: 'rgba(255,255,255,0.2)', margin: '6px auto 12px' },
    summary: { display: 'flex', gap: 14, alignItems: 'baseline',
      marginBottom: 12, paddingBottom: 12,
      borderBottom: '1px solid rgba(255,255,255,0.08)' },
    eta: { fontSize: 24, fontWeight: 700, letterSpacing: '-0.02em' },
    etaTime: { color: '#7be3a8' },
    summRest: { fontSize: 13, color: 'rgba(255,255,255,0.6)', flex: 1 },
    nextStep: { display: 'flex', alignItems: 'center', gap: 12, paddingBottom: 12 },
    stepIcon: { width: 36, height: 36, borderRadius: 10,
      background: 'rgba(255,126,58,0.15)',
      border: '1px solid rgba(255,126,58,0.3)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#ff7e3a', fontSize: 16 },
    stepMain: { flex: 1 },
    stepDist: { fontSize: 14, fontWeight: 600 },
    stepInst: { fontSize: 12, color: 'rgba(255,255,255,0.55)', marginTop: 2 },
    bottomRow: { display: 'flex', gap: 10 },
    endBtn: { flex: 1, padding: '14px', background: '#dc3545', color: '#fff',
      borderRadius: 12, fontSize: 14, fontWeight: 700, textAlign: 'center',
      letterSpacing: '0.04em' },
    actBtn: { width: 50, height: 50, borderRadius: 12,
      background: 'rgba(255,255,255,0.08)', display: 'flex',
      alignItems: 'center', justifyContent: 'center', fontSize: 18 },
  };
  return (
    <div style={s.root}>
      <div style={s.map}>
        <svg width="100%" height="100%" viewBox="0 0 402 874" style={{ position: 'absolute' }}>
          {/* roads */}
          <path d="M -20 200 L 100 220 L 200 180 L 320 200 L 440 180"
            stroke="#3a4654" strokeWidth="14" strokeLinecap="round" fill="none"/>
          <path d="M -20 400 L 80 410 L 200 380 L 320 420 L 440 400"
            stroke="#3a4654" strokeWidth="14" strokeLinecap="round" fill="none"/>
          <path d="M -20 660 L 100 680 L 200 640 L 320 660 L 440 640"
            stroke="#3a4654" strokeWidth="14" strokeLinecap="round" fill="none"/>
          <path d="M 60 -20 L 80 200 L 60 400 L 80 660 L 60 900"
            stroke="#3a4654" strokeWidth="14" strokeLinecap="round" fill="none"/>
          <path d="M 200 -20 L 200 180 L 200 380 L 200 640 L 200 900"
            stroke="#3a4654" strokeWidth="14" strokeLinecap="round" fill="none"/>
          <path d="M 340 -20 L 320 200 L 340 420 L 320 660 L 340 900"
            stroke="#3a4654" strokeWidth="14" strokeLinecap="round" fill="none"/>
          {/* route */}
          <path d="M 280 200 L 280 280 L 200 280 L 200 380 L 200 540"
            stroke="#ff7e3a" strokeWidth="6" strokeLinecap="round" fill="none"/>
          {/* future route */}
          <path d="M 200 540 L 200 640 L 340 640 L 340 820"
            stroke="#ff7e3a" strokeWidth="6" strokeLinecap="round" fill="none"
            strokeDasharray="8 6" opacity="0.5"/>
        </svg>
      </div>
      <div style={s.statusBar}>
        <div style={s.arrowBox}>↰</div>
        <div style={s.statusMain}>
          <div style={s.statusDist}>240 m</div>
          <div style={s.statusInst}>Then turn left onto Rue de Sèvres</div>
        </div>
        <div style={s.speed}>
          <div style={s.speedN}>32</div>
          <div style={s.speedL}>km/h</div>
        </div>
      </div>
      <div style={{ ...s.floatBtn, top: 200 }}>⊕</div>
      <div style={{ ...s.floatBtn, top: 252 }}>⊖</div>
      <div style={{ ...s.floatBtn, top: 304 }}>◎</div>
      <div style={{ ...s.pin, left: '50%', top: '34%', transform: 'translateX(-50%)' }}>
        <div style={s.pinTop('#ff7e3a')}>▼</div>
      </div>
      <div style={{ ...s.pin, left: '78%', top: '88%', transform: 'translateX(-50%)' }}>
        <div style={s.pinTop('#7be3a8')}>★</div>
      </div>
      <div style={s.car}></div>
      <div style={s.sheet}>
        <div style={s.sheetHandle}></div>
        <div style={s.summary}>
          <div style={s.eta}>
            18 min <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, fontWeight: 500 }}>·</span>
            <span style={s.etaTime}> 16:42</span>
          </div>
          <div style={s.summRest}>4.8 km · light traffic</div>
        </div>
        <div style={s.nextStep}>
          <div style={s.stepIcon}>↰</div>
          <div style={s.stepMain}>
            <div style={s.stepDist}>Maison Calva</div>
            <div style={s.stepInst}>14 Rue de Verneuil · arriving 4:42 pm</div>
          </div>
        </div>
        <div style={s.bottomRow}>
          <div style={s.endBtn}>End route</div>
          <div style={s.actBtn}>♫</div>
          <div style={s.actBtn}>↗</div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// M13. WEATHER — full immersive stormy blue
// ─────────────────────────────────────────────────────────────────────────────
function AppWeather() {
  const s = {
    root: { width: '100%', height: '100%', color: '#fff', position: 'relative',
      background: 'linear-gradient(180deg, #1a3c6e 0%, #3a5e9e 35%, #6890d4 65%, #2a4a7a 100%)',
      fontFamily: '-apple-system, "SF Pro", system-ui, sans-serif',
      padding: '54px 0 38px', overflow: 'hidden' },
    clouds: { position: 'absolute', top: 200, left: -40, right: -40, height: 200,
      background: 'radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.25), transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(255,255,255,0.18), transparent 60%)',
      filter: 'blur(20px)' },
    top: { textAlign: 'center', padding: '20px 24px 0', position: 'relative', zIndex: 2 },
    city: { fontSize: 32, fontWeight: 400, letterSpacing: '-0.01em',
      fontFamily: '"Inter Tight", system-ui', },
    cond: { fontSize: 16, opacity: 0.85, marginTop: 4 },
    tempWrap: { textAlign: 'center', padding: '16px 0 0', position: 'relative', zIndex: 2 },
    temp: { fontSize: 96, fontWeight: 200, letterSpacing: '-0.04em',
      fontFamily: '"Inter Tight", system-ui',
      lineHeight: 1, position: 'relative', display: 'inline-block' },
    deg: { position: 'absolute', top: 8, right: -22, fontSize: 24, fontWeight: 300 },
    range: { fontSize: 16, opacity: 0.85 },
    body: { padding: '20px 16px 0', position: 'relative', zIndex: 2,
      display: 'flex', flexDirection: 'column', gap: 12, overflowY: 'auto' },
    card: { background: 'rgba(255,255,255,0.15)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255,255,255,0.2)',
      borderRadius: 16, padding: 14 },
    cardH: { fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.75)', marginBottom: 10,
      display: 'flex', alignItems: 'center', gap: 6, fontWeight: 600 },
    cardP: { fontSize: 13, lineHeight: 1.45, marginBottom: 10 },
    hourly: { display: 'flex', justifyContent: 'space-between',
      paddingTop: 4 },
    hour: { textAlign: 'center', display: 'flex', flexDirection: 'column',
      alignItems: 'center', gap: 6 },
    hourT: { fontSize: 12, opacity: 0.8 },
    hourI: { fontSize: 20 },
    hourN: { fontSize: 15, fontWeight: 500 },
    grid2: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 },
    pillH: { fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.75)', fontWeight: 600 },
    pillN: { fontSize: 28, fontWeight: 300, marginTop: 4 },
    pillS: { fontSize: 12, opacity: 0.8, marginTop: 6 },
    riseRow: { display: 'flex', justifyContent: 'space-between',
      marginTop: 10, fontSize: 13 },
    sunBar: { height: 50, marginTop: 4, position: 'relative' },
  };
  return (
    <div style={s.root}>
      <div style={s.clouds}></div>
      <div style={s.top}>
        <div style={s.city}>London</div>
        <div style={s.cond}>Light rain · 16°</div>
      </div>
      <div style={s.tempWrap}>
        <div style={s.temp}>14°</div>
        <div style={s.range}>H: 17°&nbsp;&nbsp;L: 9°</div>
      </div>
      <div style={s.body}>
        <div style={s.card}>
          <div style={s.cardH}>⛆ &nbsp;Hourly forecast</div>
          <div style={s.cardP}>Light rain expected to start in 24 minutes.</div>
          <div style={s.hourly}>
            {[['Now', '⛆', '14'], ['5pm', '⛆', '15'], ['6pm', '⛅', '14'], ['7pm', '☁', '13'], ['8pm', '☁', '12'], ['9pm', '☾', '11']].map((h, i) => (
              <div key={i} style={s.hour}>
                <div style={s.hourT}>{h[0]}</div>
                <div style={s.hourI}>{h[1]}</div>
                <div style={s.hourN}>{h[2]}°</div>
              </div>
            ))}
          </div>
        </div>
        <div style={s.card}>
          <div style={s.cardH}>⌧ &nbsp;5-day forecast</div>
          {[['Today', '⛆', 17, 9, 70],
            ['Sun',   '☁', 18, 10, 50],
            ['Mon',   '☼', 22, 12, 86],
            ['Tue',   '⛅', 20, 11, 72],
            ['Wed',   '⛆', 16, 8, 48]].map((d, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10,
              padding: '6px 0', fontSize: 14, borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
              <span style={{ flex: 1, fontWeight: i === 0 ? 600 : 400 }}>{d[0]}</span>
              <span style={{ fontSize: 18, width: 30, textAlign: 'center' }}>{d[1]}</span>
              <span style={{ opacity: 0.6, width: 28, textAlign: 'right', fontSize: 13 }}>{d[3]}°</span>
              <div style={{ width: 80, height: 4, background: 'rgba(255,255,255,0.18)',
                borderRadius: 2, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', left: `${(d[3] - 6) * 4}%`,
                  width: `${(d[2] - d[3]) * 4}%`, height: '100%',
                  background: 'linear-gradient(90deg, #6890d4, #ffcc4a)', borderRadius: 2 }}></div>
              </div>
              <span style={{ width: 28, textAlign: 'right', fontSize: 13 }}>{d[2]}°</span>
            </div>
          ))}
        </div>
        <div style={s.grid2}>
          <div style={s.card}>
            <div style={s.pillH}>UV index</div>
            <div style={s.pillN}>4</div>
            <div style={s.pillS}>Moderate</div>
            <div style={{ height: 4, background: 'rgba(255,255,255,0.2)',
              borderRadius: 2, marginTop: 10, position: 'relative' }}>
              <div style={{ position: 'absolute', left: '40%', top: -4,
                width: 12, height: 12, background: '#fff', borderRadius: '50%' }}></div>
            </div>
          </div>
          <div style={s.card}>
            <div style={s.pillH}>Wind</div>
            <div style={s.pillN}>14 <span style={{ fontSize: 14 }}>km/h</span></div>
            <div style={s.pillS}>SW · gusts to 22</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// M14. PODCAST — burgundy/warm dark, episode + transcript
// ─────────────────────────────────────────────────────────────────────────────
function AppPodcast() {
  const s = {
    root: { width: '100%', height: '100%', color: '#f3e8d8',
      background: 'linear-gradient(180deg, #2a0e14 0%, #4a1820 40%, #1a0a0e 100%)',
      fontFamily: '-apple-system, "SF Pro", system-ui, sans-serif',
      padding: '54px 0 0', position: 'relative', overflow: 'hidden' },
    top: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '16px 20px' },
    topBtn: { width: 36, height: 36, borderRadius: '50%',
      background: 'rgba(255,255,255,0.06)', display: 'flex',
      alignItems: 'center', justifyContent: 'center' },
    title: { fontSize: 12, color: 'rgba(243,232,216,0.6)',
      letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 600 },
    hero: { padding: '12px 20px 0', display: 'flex', gap: 16,
      alignItems: 'flex-start' },
    cover: { width: 120, height: 120, borderRadius: 14,
      background: 'linear-gradient(135deg, #f5b342, #e85a4f 50%, #6a2030)',
      flex: 'none', position: 'relative', overflow: 'hidden',
      boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
      display: 'flex', alignItems: 'center', justifyContent: 'center' },
    coverArt: { width: '70%', height: '70%', borderRadius: '50%',
      border: '3px solid rgba(243,232,216,0.4)', position: 'relative' },
    coverDot: { position: 'absolute', top: '50%', left: '50%',
      transform: 'translate(-50%, -50%)', width: 16, height: 16,
      borderRadius: '50%', background: 'rgba(243,232,216,0.8)' },
    info: { flex: 1, minWidth: 0 },
    show: { fontSize: 11, color: '#f5b342', letterSpacing: '0.1em',
      textTransform: 'uppercase', fontWeight: 700 },
    epTitle: { fontFamily: '"Playfair Display", Georgia, serif',
      fontSize: 22, fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.15,
      marginTop: 6 },
    epMeta: { fontSize: 12, color: 'rgba(243,232,216,0.55)', marginTop: 8 },
    progress: { padding: '20px 20px 0' },
    track: { height: 4, background: 'rgba(243,232,216,0.15)',
      borderRadius: 2, position: 'relative' },
    fill: { width: '38%', height: '100%', background: '#f5b342', borderRadius: 2 },
    knob: { position: 'absolute', left: '38%', top: -4, width: 12, height: 12,
      borderRadius: '50%', background: '#f5b342',
      transform: 'translateX(-50%)' },
    times: { display: 'flex', justifyContent: 'space-between', marginTop: 6,
      fontSize: 11, color: 'rgba(243,232,216,0.55)',
      fontFeatureSettings: '"tnum"' },
    controls: { display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', padding: '20px 24px 8px' },
    cBtn: (sz, fill) => ({ width: sz, height: sz, borderRadius: '50%',
      background: fill ? '#f3e8d8' : 'transparent',
      color: fill ? '#2a0e14' : '#f3e8d8',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontWeight: 700, fontSize: sz * 0.38 }),
    speed: { fontSize: 12, fontWeight: 700, opacity: 0.7 },
    transcriptH: { padding: '20px 20px 8px', display: 'flex',
      justifyContent: 'space-between', alignItems: 'baseline' },
    transTitle: { fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase',
      color: 'rgba(243,232,216,0.6)', fontWeight: 700 },
    transAuto: { fontSize: 12, color: '#f5b342', fontWeight: 500 },
    quote: { padding: '14px 20px', borderLeft: '3px solid #f5b342',
      margin: '0 20px 12px', background: 'rgba(245,179,66,0.06)',
      borderRadius: '0 12px 12px 0', fontSize: 14, lineHeight: 1.55,
      fontStyle: 'italic' },
    speaker: { fontSize: 11, color: '#f5b342', fontStyle: 'normal',
      fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
      marginBottom: 6, display: 'block' },
    line: { padding: '0 20px 14px', fontSize: 14, lineHeight: 1.55,
      color: 'rgba(243,232,216,0.85)' },
    lineSp: { fontSize: 11, color: '#f5b342', letterSpacing: '0.08em',
      textTransform: 'uppercase', fontWeight: 700, marginRight: 8 },
    mini: { position: 'absolute', bottom: 38, left: 16, right: 16,
      background: 'rgba(20,8,12,0.6)', backdropFilter: 'blur(20px)',
      border: '1px solid rgba(243,232,216,0.12)',
      borderRadius: 12, padding: 8,
      display: 'flex', alignItems: 'center', gap: 10 },
    miniCover: { width: 36, height: 36, borderRadius: 8,
      background: 'linear-gradient(135deg, #f5b342, #e85a4f)' },
    miniMain: { flex: 1, fontSize: 12 },
  };
  return (
    <div style={s.root}>
      <div style={s.top}>
        <div style={s.topBtn}>‹</div>
        <div style={s.title}>Now Playing</div>
        <div style={s.topBtn}>♡</div>
      </div>
      <div style={s.hero}>
        <div style={s.cover}>
          <div style={s.coverArt}>
            <div style={s.coverDot}></div>
          </div>
        </div>
        <div style={s.info}>
          <div style={s.show}>The Quiet Times</div>
          <div style={s.epTitle}>On Reading, Looking, and Other Slow Acts</div>
          <div style={s.epMeta}>Ep 142 · 58 min · with Anya Iqbal</div>
        </div>
      </div>
      <div style={s.progress}>
        <div style={s.track}>
          <div style={s.fill}></div>
          <div style={s.knob}></div>
        </div>
        <div style={s.times}><span>22:14</span><span>−35:46</span></div>
      </div>
      <div style={s.controls}>
        <div style={s.speed}>1.0×</div>
        <div style={s.cBtn(44)}>«15</div>
        <div style={s.cBtn(56, true)}>▍▍</div>
        <div style={s.cBtn(44)}>30»</div>
        <div style={s.cBtn(36)}>⌃</div>
      </div>
      <div style={s.transcriptH}>
        <div style={s.transTitle}>Transcript · synced</div>
        <div style={s.transAuto}>Auto-scroll on</div>
      </div>
      <div style={s.quote}>
        <span style={s.speaker}>Anya · 21:48</span>
        "The thing about reading slowly is that you start
        believing you have all the time in the world."
      </div>
      <div style={s.line}>
        <span style={s.lineSp}>Maris</span>
        And when you don't, you make some — that's the funny thing.
        You make it from somewhere else.
      </div>
      <div style={s.mini}>
        <div style={s.miniCover}></div>
        <div style={s.miniMain}>
          <div style={{ fontWeight: 600 }}>Up next</div>
          <div style={{ color: 'rgba(243,232,216,0.5)', fontSize: 11 }}>
            Ep 141 · The Last Bookshop in Astoria
          </div>
        </div>
        <span style={{ fontSize: 16, opacity: 0.7 }}>▶</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// M15. DATING — peach card stack, swipeable
// ─────────────────────────────────────────────────────────────────────────────
function AppDating() {
  const s = {
    root: { width: '100%', height: '100%', background: '#ffeae0', color: '#3a1a1a',
      fontFamily: '-apple-system, "SF Pro", system-ui, sans-serif',
      padding: '54px 0 0', overflow: 'hidden', position: 'relative' },
    top: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '16px 20px' },
    brand: { fontFamily: '"Playfair Display", Georgia, serif',
      fontSize: 24, fontWeight: 500, letterSpacing: '-0.02em',
      display: 'flex', alignItems: 'center', gap: 6 },
    bHeart: { color: '#ff5e72', fontSize: 18 },
    topR: { display: 'flex', gap: 10 },
    topBtn: { width: 36, height: 36, borderRadius: '50%', background: '#fff',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 14, boxShadow: '0 2px 6px rgba(58,26,26,0.06)' },
    deck: { position: 'relative', height: 480, margin: '12px 24px 0' },
    card: (n) => ({ position: 'absolute', inset: 0,
      background: 'linear-gradient(180deg, transparent 40%, rgba(58,26,26,0.85) 100%), linear-gradient(135deg, #ffb8a8 0%, #d68a78 50%, #8a3a4a 100%)',
      borderRadius: 20, boxShadow: '0 20px 40px rgba(58,26,26,0.2)',
      transform: `translateY(${n * 6}px) scale(${1 - n * 0.04}) rotate(${n * -2}deg)`,
      opacity: 1 - n * 0.2, zIndex: 5 - n,
      padding: 24, color: '#fff', display: 'flex',
      flexDirection: 'column', justifyContent: 'flex-end',
      overflow: 'hidden' }),
    cardArt: { position: 'absolute', inset: 0, opacity: 0.6,
      backgroundImage: 'radial-gradient(circle at 40% 30%, rgba(255,255,255,0.2), transparent 50%)' },
    matchBadge: { position: 'absolute', top: 16, right: 16,
      background: 'rgba(255,255,255,0.25)', backdropFilter: 'blur(10px)',
      padding: '6px 12px', borderRadius: 999,
      fontSize: 11, fontWeight: 700, letterSpacing: '0.06em' },
    distBadge: { position: 'absolute', top: 16, left: 16,
      background: 'rgba(255,255,255,0.25)', backdropFilter: 'blur(10px)',
      padding: '6px 12px', borderRadius: 999, fontSize: 11, fontWeight: 600 },
    name: { fontSize: 30, fontWeight: 700, letterSpacing: '-0.02em',
      position: 'relative' },
    bio: { fontSize: 14, lineHeight: 1.45, marginTop: 6, opacity: 0.95,
      position: 'relative' },
    chips: { display: 'flex', gap: 6, marginTop: 12, flexWrap: 'wrap',
      position: 'relative' },
    cardChip: { background: 'rgba(255,255,255,0.18)',
      backdropFilter: 'blur(10px)', padding: '4px 10px', borderRadius: 999,
      fontSize: 12, fontWeight: 500 },
    promptCard: { position: 'absolute', bottom: -20, left: 16, right: 16,
      background: '#fff', color: '#3a1a1a', padding: '14px 16px',
      borderRadius: 14, fontSize: 13, lineHeight: 1.45,
      boxShadow: '0 8px 24px rgba(58,26,26,0.2)', zIndex: 6 },
    promptLbl: { fontSize: 10, color: '#a07570', fontWeight: 700,
      letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 },
    actions: { display: 'flex', justifyContent: 'center', gap: 16,
      padding: '40px 0 0' },
    actBtn: (color, sz) => ({ width: sz, height: sz, borderRadius: '50%',
      background: '#fff', display: 'flex', alignItems: 'center',
      justifyContent: 'center', fontSize: sz * 0.4, color,
      boxShadow: '0 6px 18px rgba(58,26,26,0.12)' }),
    tabBar: { position: 'absolute', bottom: 0, left: 0, right: 0,
      background: 'rgba(255,234,224,0.9)', backdropFilter: 'blur(20px)',
      borderTop: '0.5px solid #f2cebe', padding: '10px 0 38px',
      display: 'flex', justifyContent: 'space-around' },
    tab: (active) => ({ fontSize: 22, color: active ? '#ff5e72' : '#b88078' }),
  };
  return (
    <div style={s.root}>
      <div style={s.top}>
        <div style={s.brand}>petal <span style={s.bHeart}>♥</span></div>
        <div style={s.topR}>
          <div style={s.topBtn}>⚙</div>
          <div style={s.topBtn}>✦</div>
        </div>
      </div>
      <div style={s.deck}>
        <div style={s.card(2)}></div>
        <div style={s.card(1)}></div>
        <div style={s.card(0)}>
          <div style={s.cardArt}></div>
          <div style={s.matchBadge}>★ 96% match</div>
          <div style={s.distBadge}>2 km away</div>
          <div style={s.name}>Lila, 28</div>
          <div style={s.bio}>Architect by day, very bad at chess by night. Currently learning Portuguese badly.</div>
          <div style={s.chips}>
            <span style={s.cardChip}>♫ Big Thief</span>
            <span style={s.cardChip}>☕ Coffee, slow</span>
            <span style={s.cardChip}>📚 Reading</span>
            <span style={s.cardChip}>🇵🇹 Lisbon ⇋</span>
          </div>
          <div style={s.promptCard}>
            <div style={s.promptLbl}>my unpopular opinion</div>
            Sundays should start with a 10am pastry walk, not coffee at home. The streets are quietest before 11.
          </div>
        </div>
      </div>
      <div style={s.actions}>
        <div style={s.actBtn('#3a1a1a', 50)}>↺</div>
        <div style={s.actBtn('#ff5e72', 64)}>✕</div>
        <div style={s.actBtn('#7c5cff', 56)}>★</div>
        <div style={s.actBtn('#22a06b', 64)}>♥</div>
        <div style={s.actBtn('#3a1a1a', 50)}>⚡</div>
      </div>
      <div style={s.tabBar}>
        <div style={s.tab(true)}>🃏</div>
        <div style={s.tab()}>⌕</div>
        <div style={s.tab()}>★</div>
        <div style={s.tab()}>💬</div>
        <div style={s.tab()}>👤</div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// M16. SLEEP TRACKER — deep indigo, starfield, sleep stages
// ─────────────────────────────────────────────────────────────────────────────
function AppSleep() {
  const s = {
    root: { width: '100%', height: '100%', color: '#dcd4ff',
      background: 'linear-gradient(180deg, #0a0a2a 0%, #1a1450 40%, #2a1a6a 70%, #0a0a2a 100%)',
      fontFamily: '-apple-system, "SF Pro", system-ui, sans-serif',
      padding: '54px 0 0', position: 'relative', overflow: 'hidden' },
    stars: { position: 'absolute', inset: 0, pointerEvents: 'none',
      backgroundImage: 'radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1.5px)',
      backgroundSize: '50px 50px', opacity: 0.4 },
    star: (x, y, sz, glow) => ({ position: 'absolute', left: x, top: y,
      width: sz, height: sz, color: '#fff', fontSize: sz,
      textShadow: glow ? `0 0 ${sz}px #fff` : 'none', opacity: 0.9 }),
    top: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '16px 20px', position: 'relative', zIndex: 2 },
    topBtn: { fontSize: 14, color: '#dcd4ff' },
    title: { fontSize: 14, fontWeight: 600 },
    moon: { position: 'absolute', top: 130, left: '50%',
      transform: 'translateX(-50%)', width: 100, height: 100, borderRadius: '50%',
      background: 'radial-gradient(circle at 30% 30%, #fff 0%, #e8e0ff 35%, #b8a8e8 100%)',
      boxShadow: '0 0 60px rgba(220,212,255,0.4), inset -10px -10px 20px rgba(0,0,0,0.3)',
      zIndex: 2 },
    moonCraters: { position: 'absolute', width: 14, height: 14, borderRadius: '50%',
      background: 'rgba(0,0,0,0.1)', boxShadow: 'inset 2px 2px 3px rgba(0,0,0,0.15)' },
    hero: { textAlign: 'center', padding: '160px 24px 0',
      position: 'relative', zIndex: 2 },
    score: { fontSize: 72, fontWeight: 300, letterSpacing: '-0.04em',
      lineHeight: 1, fontFamily: '"Inter Tight", system-ui',
      background: 'linear-gradient(180deg, #fff, #b8a8e8)',
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
    scoreLbl: { fontSize: 13, color: 'rgba(220,212,255,0.7)',
      letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 4,
      fontWeight: 600 },
    quality: { fontSize: 16, color: '#7be3a8', marginTop: 8, fontWeight: 600 },
    sheet: { position: 'absolute', bottom: 0, left: 0, right: 0,
      background: 'rgba(10,10,42,0.6)', backdropFilter: 'blur(30px)',
      borderRadius: '24px 24px 0 0', borderTop: '1px solid rgba(220,212,255,0.15)',
      padding: '14px 20px 38px' },
    sheetH: { width: 36, height: 4, borderRadius: 2,
      background: 'rgba(220,212,255,0.3)', margin: '0 auto 14px' },
    summary: { display: 'flex', justifyContent: 'space-between',
      marginBottom: 14 },
    summLbl: { fontSize: 11, color: 'rgba(220,212,255,0.55)',
      letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 },
    summV: { fontSize: 18, fontWeight: 600, marginTop: 4,
      fontFamily: '"Inter Tight", system-ui' },
    timeline: { height: 60, position: 'relative', borderRadius: 8,
      background: 'rgba(220,212,255,0.05)', overflow: 'hidden', display: 'flex' },
    stage: (color, w) => ({ width: `${w}%`, background: color }),
    legend: { display: 'flex', gap: 12, marginTop: 10, fontSize: 11,
      color: 'rgba(220,212,255,0.65)', flexWrap: 'wrap' },
    legendDot: (c) => ({ display: 'inline-block', width: 8, height: 8,
      borderRadius: 2, background: c, marginRight: 5,
      verticalAlign: 'middle' }),
    statsRow: { display: 'flex', justifyContent: 'space-between',
      gap: 10, marginTop: 14 },
    statBox: { flex: 1, background: 'rgba(220,212,255,0.06)',
      borderRadius: 12, padding: 10, textAlign: 'center' },
    statN: { fontSize: 17, fontWeight: 700, marginTop: 2 },
    statL: { fontSize: 10, color: 'rgba(220,212,255,0.55)',
      letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 },
  };
  return (
    <div style={s.root}>
      <div style={s.stars}></div>
      <div style={s.star(50, 100, 12, true)}>✦</div>
      <div style={s.star(300, 80, 8, false)}>✦</div>
      <div style={s.star(340, 220, 14, true)}>✧</div>
      <div style={s.star(60, 280, 6, false)}>✦</div>
      <div style={s.star(360, 300, 10, true)}>✦</div>
      <div style={s.top}>
        <div style={s.topBtn}>‹ Today</div>
        <div style={s.title}>Last night</div>
        <div style={s.topBtn}>···</div>
      </div>
      <div style={s.moon}>
        <div style={{ ...s.moonCraters, top: 20, left: 25 }}></div>
        <div style={{ ...s.moonCraters, top: 50, left: 60, width: 8, height: 8 }}></div>
        <div style={{ ...s.moonCraters, top: 65, left: 28, width: 10, height: 10 }}></div>
      </div>
      <div style={s.hero}>
        <div style={s.score}>88</div>
        <div style={s.scoreLbl}>Sleep score</div>
        <div style={s.quality}>● Solid · best in 12 days</div>
      </div>
      <div style={s.sheet}>
        <div style={s.sheetH}></div>
        <div style={s.summary}>
          <div>
            <div style={s.summLbl}>Total sleep</div>
            <div style={s.summV}>7h 42m</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={s.summLbl}>To bed</div>
            <div style={s.summV}>23:14</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={s.summLbl}>Awake</div>
            <div style={s.summV}>06:56</div>
          </div>
        </div>
        <div style={s.timeline}>
          <div style={s.stage('#4cc8ff', 6)}></div>
          <div style={s.stage('#3a52b8', 28)}></div>
          <div style={s.stage('#7c5cff', 14)}></div>
          <div style={s.stage('#3a52b8', 16)}></div>
          <div style={s.stage('#7c5cff', 10)}></div>
          <div style={s.stage('#3a52b8', 12)}></div>
          <div style={s.stage('#4cc8ff', 4)}></div>
          <div style={s.stage('#7c5cff', 8)}></div>
          <div style={s.stage('#3a52b8', 2)}></div>
        </div>
        <div style={s.legend}>
          <span><span style={s.legendDot('#4cc8ff')}></span>Awake 12m</span>
          <span><span style={s.legendDot('#3a52b8')}></span>Core 3h 50m</span>
          <span><span style={s.legendDot('#7c5cff')}></span>Deep 1h 18m</span>
          <span><span style={s.legendDot('#3a52b8')}></span>REM 2h 22m</span>
        </div>
        <div style={s.statsRow}>
          <div style={s.statBox}>
            <div style={s.statL}>Resting HR</div>
            <div style={s.statN}>52</div>
          </div>
          <div style={s.statBox}>
            <div style={s.statL}>Respiratory</div>
            <div style={s.statN}>14.2</div>
          </div>
          <div style={s.statBox}>
            <div style={s.statL}>HRV</div>
            <div style={s.statN}>62</div>
          </div>
          <div style={s.statBox}>
            <div style={s.statL}>Wake-ups</div>
            <div style={s.statN}>2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section + extras
// ─────────────────────────────────────────────────────────────────────────────
function MobileExtrasSection() {
  return (
    <DCSection id="mobile-row2" title="Eight More Mobile Apps"
      subtitle="Different categories: AI chat, camera, calendar, navigation, weather, podcast, dating, sleep tracking.">
      <DCArtboard id="m-ai" label="I · AI Chat" width={AW} height={AH}>
        <Phone dark><AppAIChat /></Phone>
      </DCArtboard>
      <DCArtboard id="m-camera" label="J · Camera" width={AW} height={AH}>
        <Phone dark><AppCamera /></Phone>
      </DCArtboard>
      <DCArtboard id="m-cal" label="K · Calendar" width={AW} height={AH}>
        <Phone><AppCalendar /></Phone>
      </DCArtboard>
      <DCArtboard id="m-maps" label="L · Maps · Navigation" width={AW} height={AH}>
        <Phone dark><AppMaps /></Phone>
      </DCArtboard>
      <DCArtboard id="m-weather" label="M · Weather" width={AW} height={AH}>
        <Phone dark><AppWeather /></Phone>
      </DCArtboard>
      <DCArtboard id="m-pod" label="N · Podcast" width={AW} height={AH}>
        <Phone dark><AppPodcast /></Phone>
      </DCArtboard>
      <DCArtboard id="m-date" label="O · Dating" width={AW} height={AH}>
        <Phone><AppDating /></Phone>
      </DCArtboard>
      <DCArtboard id="m-sleep" label="P · Sleep Tracker" width={AW} height={AH}>
        <Phone dark><AppSleep /></Phone>
      </DCArtboard>
    </DCSection>
  );
}

window.MobileExtrasSection = MobileExtrasSection;
