// Eight mobile app screens — varied palettes, app categories, layouts.

const MW = 402;
const MH = 874;
const AW = 462;  // artboard width (device + breathing room)
const AH = 920;  // artboard height

// Small helper for the home indicator-safe area
const SafeBottom = ({ children }) => (
  <div style={{ paddingBottom: 38 }}>{children}</div>
);

// ─────────────────────────────────────────────────────────────────────────────
// M1. MUSIC PLAYER — dark, immersive, full-bleed art
// ─────────────────────────────────────────────────────────────────────────────
function AppMusic() {
  const s = {
    root: { width: '100%', height: '100%', color: '#fff',
      background: 'linear-gradient(180deg, #2a1438 0%, #5a2050 30%, #8a3050 60%, #0a0a14 100%)',
      fontFamily: '-apple-system, "SF Pro", system-ui, sans-serif',
      position: 'relative', overflow: 'hidden' },
    glow: { position: 'absolute', width: 480, height: 480, borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(255,100,150,0.5), transparent 60%)',
      left: -120, top: 60, filter: 'blur(60px)' },
    content: { position: 'relative', zIndex: 2, padding: '60px 24px 0',
      display: 'flex', flexDirection: 'column', height: '100%' },
    topBar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.6)' },
    backBtn: { width: 36, height: 36, borderRadius: '50%',
      background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center',
      justifyContent: 'center', backdropFilter: 'blur(20px)' },
    cover: { width: 320, height: 320, borderRadius: 16, marginTop: 32,
      marginInline: 'auto',
      background: 'linear-gradient(135deg, #ff3b6b 0%, #c44fb5 50%, #4c6cff 100%)',
      boxShadow: '0 30px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.2)',
      position: 'relative', overflow: 'hidden' },
    coverShape: { position: 'absolute', width: 260, height: 260, borderRadius: '50%',
      border: '2px solid rgba(255,255,255,0.2)', left: 30, top: 30 },
    coverShape2: { position: 'absolute', width: 160, height: 160, borderRadius: '50%',
      background: 'rgba(255,255,255,0.15)', left: 80, top: 80 },
    meta: { marginTop: 36, display: 'flex', justifyContent: 'space-between',
      alignItems: 'flex-start' },
    title: { fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em',
      lineHeight: 1.1 },
    artist: { fontSize: 16, color: 'rgba(255,255,255,0.7)', marginTop: 4 },
    heart: { width: 44, height: 44, borderRadius: '50%',
      background: 'rgba(255,255,255,0.1)', display: 'flex',
      alignItems: 'center', justifyContent: 'center', fontSize: 18, color: '#ff5577' },
    progress: { marginTop: 28 },
    track: { height: 4, background: 'rgba(255,255,255,0.2)', borderRadius: 2,
      position: 'relative' },
    fill: { width: '42%', height: '100%', background: '#fff', borderRadius: 2 },
    times: { display: 'flex', justifyContent: 'space-between', marginTop: 8,
      fontSize: 11, color: 'rgba(255,255,255,0.6)', fontFeatureSettings: '"tnum"' },
    controls: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      marginTop: 32, padding: '0 12px' },
    cBtn: (sz, fill) => ({ width: sz, height: sz, borderRadius: '50%',
      background: fill ? '#fff' : 'transparent', color: fill ? '#1a0a28' : '#fff',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: sz * 0.4, fontWeight: 700 }),
    bottomBar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      marginTop: 32, padding: '12px 16px',
      background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(20px)',
      borderRadius: 14, fontSize: 13, marginInline: -4 },
  };
  return (
    <div style={s.root}>
      <div style={s.glow}></div>
      <div style={s.content}>
        <div style={s.topBar}>
          <div style={s.backBtn}>
            <svg width="14" height="14" viewBox="0 0 14 14"><path d="M10 1L4 7l6 6" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
          </div>
          <span>Playing from · liked songs</span>
          <div style={s.backBtn}>
            <svg width="16" height="4" viewBox="0 0 16 4"><circle cx="2" cy="2" r="2" fill="#fff"/><circle cx="8" cy="2" r="2" fill="#fff"/><circle cx="14" cy="2" r="2" fill="#fff"/></svg>
          </div>
        </div>
        <div style={s.cover}>
          <div style={s.coverShape}></div>
          <div style={s.coverShape2}></div>
          <div style={{ position: 'absolute', bottom: 16, left: 16, color: 'rgba(255,255,255,0.7)',
            fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase' }}>SOFT GLOW · 2024</div>
        </div>
        <div style={s.meta}>
          <div>
            <div style={s.title}>Slow Wave</div>
            <div style={s.artist}>Nora &amp; the Quiet</div>
          </div>
          <div style={s.heart}>♥</div>
        </div>
        <div style={s.progress}>
          <div style={s.track}><div style={s.fill}></div></div>
          <div style={s.times}><span>2:18</span><span>−3:02</span></div>
        </div>
        <div style={s.controls}>
          <div style={s.cBtn(44)}>⤴</div>
          <div style={s.cBtn(48)}>⏮</div>
          <div style={s.cBtn(72, true)}>▶</div>
          <div style={s.cBtn(48)}>⏭</div>
          <div style={s.cBtn(44)}>♺</div>
        </div>
        <div style={s.bottomBar}>
          <span>📱 iPhone</span>
          <span style={{ color: 'rgba(255,255,255,0.5)' }}>▭▭▭ &nbsp;Lyrics &nbsp;&nbsp;❑ Queue</span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// M2. BANKING — light, big balance, card stack
// ─────────────────────────────────────────────────────────────────────────────
function AppBanking() {
  const s = {
    root: { width: '100%', height: '100%', background: '#f4f4f6', color: '#0a0a0f',
      fontFamily: '-apple-system, "SF Pro", system-ui, sans-serif',
      padding: '54px 0 0', overflow: 'hidden' },
    top: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '20px 24px 8px' },
    av: { width: 40, height: 40, borderRadius: '50%', background: '#1a1f3a',
      color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontWeight: 600, fontSize: 14 },
    hello: { fontSize: 13, color: '#6a6a78' },
    name: { fontSize: 17, fontWeight: 600, letterSpacing: '-0.01em' },
    bell: { width: 40, height: 40, borderRadius: '50%', background: '#fff',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: '0 2px 6px rgba(0,0,0,0.04)' },
    balLbl: { fontSize: 13, color: '#6a6a78', padding: '24px 24px 0' },
    bal: { padding: '0 24px', fontSize: 48, fontWeight: 700, letterSpacing: '-0.03em' },
    cents: { fontSize: 24, color: '#6a6a78' },
    delta: { padding: '0 24px', fontSize: 13, color: '#22a06b', fontWeight: 600 },
    card: { margin: '24px 24px 0', background: '#1a1f3a', color: '#fff',
      borderRadius: 18, padding: 20, position: 'relative', overflow: 'hidden' },
    cardGlow: { position: 'absolute', width: 220, height: 220, borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(122,108,255,0.5), transparent 60%)',
      right: -60, top: -60 },
    cardLbl: { fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.6)' },
    cardNum: { fontSize: 18, fontFamily: 'ui-monospace, monospace', letterSpacing: '0.06em',
      marginTop: 12, fontWeight: 500 },
    cardFoot: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
      marginTop: 16, fontSize: 13 },
    cardName: { textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 500 },
    cardLogo: { fontSize: 22, fontWeight: 800, fontStyle: 'italic',
      color: 'rgba(255,255,255,0.9)' },
    actions: { display: 'flex', justifyContent: 'space-between',
      padding: '20px 32px 0' },
    action: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
      fontSize: 12, color: '#0a0a0f', fontWeight: 500 },
    actionIcon: { width: 52, height: 52, borderRadius: 14, background: '#fff',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 20, boxShadow: '0 2px 6px rgba(0,0,0,0.04)' },
    sectionH: { padding: '24px 24px 8px', display: 'flex',
      justifyContent: 'space-between', alignItems: 'baseline' },
    sectionT: { fontSize: 16, fontWeight: 600 },
    seeAll: { fontSize: 13, color: '#7a6cff', fontWeight: 500 },
    list: { background: '#fff', margin: '0 16px', borderRadius: 16,
      padding: '4px 0', boxShadow: '0 2px 6px rgba(0,0,0,0.03)' },
    row: { display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px',
      borderBottom: '0.5px solid #eaeaef' },
    rowIcon: (c) => ({ width: 38, height: 38, borderRadius: 10, background: c,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#fff', fontWeight: 600, fontSize: 13 }),
    rowMain: { flex: 1, minWidth: 0 },
    rowTitle: { fontSize: 14, fontWeight: 500 },
    rowSub: { fontSize: 12, color: '#6a6a78', marginTop: 2 },
    rowAmt: (neg) => ({ fontSize: 14, fontWeight: 600,
      color: neg ? '#0a0a0f' : '#22a06b' }),
    tabBar: { position: 'absolute', bottom: 0, left: 0, right: 0,
      background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(20px)',
      borderTop: '0.5px solid #eaeaef', padding: '10px 0 38px',
      display: 'flex', justifyContent: 'space-around' },
    tab: (active) => ({ display: 'flex', flexDirection: 'column', alignItems: 'center',
      gap: 2, fontSize: 10, color: active ? '#7a6cff' : '#9a9aa6', fontWeight: 500 }),
    tabIcon: { fontSize: 20 },
  };
  return (
    <div style={s.root}>
      <div style={s.top}>
        <div style={s.av}>AR</div>
        <div style={{ textAlign: 'center' }}>
          <div style={s.hello}>Welcome back</div>
          <div style={s.name}>Aanya R.</div>
        </div>
        <div style={s.bell}>🔔</div>
      </div>
      <div style={s.balLbl}>Total balance · all accounts</div>
      <div style={s.bal}>$24,808<span style={s.cents}>.40</span></div>
      <div style={s.delta}>↑ $1,240 this month</div>
      <div style={s.card}>
        <div style={s.cardGlow}></div>
        <div style={{ position: 'relative' }}>
          <div style={s.cardLbl}>Lumen · Spending</div>
          <div style={s.cardNum}>4242 ··· ··· 0814</div>
          <div style={s.cardFoot}>
            <div style={s.cardName}>A. RAJ</div>
            <div style={s.cardLogo}>L</div>
          </div>
        </div>
      </div>
      <div style={s.actions}>
        <div style={s.action}><div style={s.actionIcon}>↑</div>Send</div>
        <div style={s.action}><div style={s.actionIcon}>↓</div>Request</div>
        <div style={s.action}><div style={s.actionIcon}>$</div>Pay bill</div>
        <div style={s.action}><div style={s.actionIcon}>≡</div>More</div>
      </div>
      <div style={s.sectionH}>
        <div style={s.sectionT}>Recent activity</div>
        <div style={s.seeAll}>See all</div>
      </div>
      <div style={s.list}>
        {[
          ['Maison Calva', 'Restaurant · 7:42 pm', '−$58.40', false, '#e85a4f', '☕'],
          ['Salary · Linear Labs', 'Today · 9:14 am', '+$4,200.00', false, '#22a06b', '↗', true],
          ['Tide subscription', 'Wellness · Monthly', '−$12.99', false, '#7a6cff', 'T'],
          ['Pace//Form Club', 'Fitness · Annual', '−$220.00', false, '#0d5e6e', 'P'],
        ].map((r, i) => (
          <div key={i} style={{ ...s.row, borderBottom: i === 3 ? 'none' : s.row.borderBottom }}>
            <div style={s.rowIcon(r[4])}>{r[5]}</div>
            <div style={s.rowMain}>
              <div style={s.rowTitle}>{r[0]}</div>
              <div style={s.rowSub}>{r[1]}</div>
            </div>
            <div style={s.rowAmt(!r[6])}>{r[2]}</div>
          </div>
        ))}
      </div>
      <div style={s.tabBar}>
        <div style={s.tab(true)}><span style={s.tabIcon}>⌂</span>Home</div>
        <div style={s.tab()}><span style={s.tabIcon}>◉</span>Cards</div>
        <div style={s.tab()}><span style={s.tabIcon}>▣</span>Move</div>
        <div style={s.tab()}><span style={s.tabIcon}>◔</span>Goals</div>
        <div style={s.tab()}><span style={s.tabIcon}>☰</span>More</div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// M3. MEDITATION — soft sunset gradient, peaceful
// ─────────────────────────────────────────────────────────────────────────────
function AppMeditation() {
  const s = {
    root: { width: '100%', height: '100%', color: '#3a1f4a',
      background: 'linear-gradient(180deg, #f9d5b8 0%, #fbb1c4 35%, #c89dd6 70%, #8a7cc4 100%)',
      fontFamily: '-apple-system, "SF Pro", system-ui, sans-serif',
      padding: '54px 0 0', position: 'relative', overflow: 'hidden' },
    sun: { position: 'absolute', width: 280, height: 280, borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(255,240,200,0.9), rgba(255,180,140,0.3) 50%, transparent 70%)',
      top: 40, left: '50%', transform: 'translateX(-50%)' },
    top: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '20px 24px', position: 'relative', zIndex: 2 },
    greet: { fontSize: 13, color: 'rgba(58,31,74,0.7)' },
    name: { fontSize: 18, fontWeight: 600 },
    av: { width: 36, height: 36, borderRadius: '50%',
      background: 'rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center',
      justifyContent: 'center', fontSize: 13, fontWeight: 600,
      backdropFilter: 'blur(10px)' },
    hero: { padding: '80px 24px 0', position: 'relative', zIndex: 2, textAlign: 'center' },
    breathe: { width: 200, height: 200, borderRadius: '50%',
      background: 'rgba(255,255,255,0.25)', backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255,255,255,0.4)',
      margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative' },
    breatheInner: { position: 'absolute', inset: 16, borderRadius: '50%',
      background: 'rgba(255,255,255,0.3)' },
    breatheCenter: { position: 'relative', textAlign: 'center', color: '#3a1f4a' },
    breatheLbl: { fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase',
      opacity: 0.7, fontWeight: 600 },
    breatheTime: { fontSize: 28, fontWeight: 600, letterSpacing: '-0.03em', marginTop: 4 },
    h: { fontSize: 26, fontWeight: 500, marginTop: 32, letterSpacing: '-0.01em' },
    sub: { fontSize: 14, color: 'rgba(58,31,74,0.7)', marginTop: 6, lineHeight: 1.5,
      padding: '0 24px' },
    sheet: { position: 'absolute', bottom: 0, left: 0, right: 0,
      background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(30px)',
      borderRadius: '24px 24px 0 0',
      borderTop: '1px solid rgba(255,255,255,0.6)',
      padding: '20px 20px 38px' },
    sheetH: { width: 36, height: 4, borderRadius: 2,
      background: 'rgba(58,31,74,0.3)', margin: '0 auto 14px' },
    sheetTitle: { fontSize: 13, color: 'rgba(58,31,74,0.7)',
      letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600,
      marginBottom: 12 },
    tile: { display: 'flex', alignItems: 'center', gap: 12, padding: 12,
      background: 'rgba(255,255,255,0.6)', borderRadius: 14, marginBottom: 8 },
    tileArt: (c) => ({ width: 52, height: 52, borderRadius: 12,
      background: `linear-gradient(135deg, ${c[0]}, ${c[1]})`, flex: 'none' }),
    tileMain: { flex: 1, minWidth: 0 },
    tileT: { fontSize: 15, fontWeight: 600, letterSpacing: '-0.01em' },
    tileS: { fontSize: 12, color: 'rgba(58,31,74,0.6)', marginTop: 2 },
    play: { width: 36, height: 36, borderRadius: '50%', background: '#3a1f4a',
      color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 13 },
  };
  return (
    <div style={s.root}>
      <div style={s.sun}></div>
      <div style={s.top}>
        <div>
          <div style={s.greet}>Saturday morning</div>
          <div style={s.name}>Hi Maya</div>
        </div>
        <div style={s.av}>M</div>
      </div>
      <div style={s.hero}>
        <div style={s.breathe}>
          <div style={s.breatheInner}></div>
          <div style={s.breatheCenter}>
            <div style={s.breatheLbl}>Breathe</div>
            <div style={s.breatheTime}>4:32</div>
          </div>
        </div>
        <div style={s.h}>A quiet start.</div>
        <div style={s.sub}>You meditated 4 of the last 7 days — good rhythm.</div>
      </div>
      <div style={s.sheet}>
        <div style={s.sheetH}></div>
        <div style={s.sheetTitle}>This morning</div>
        <div style={s.tile}>
          <div style={s.tileArt(['#ffb8c8', '#c89dd6'])}></div>
          <div style={s.tileMain}>
            <div style={s.tileT}>Settle in before a hard day</div>
            <div style={s.tileS}>Aiyana · 6 min · breath</div>
          </div>
          <div style={s.play}>▶</div>
        </div>
        <div style={s.tile}>
          <div style={s.tileArt(['#8a7cc4', '#5a6cb8'])}></div>
          <div style={s.tileMain}>
            <div style={s.tileT}>Walking, slowly</div>
            <div style={s.tileS}>Toma · 14 min · movement</div>
          </div>
          <div style={s.play}>▶</div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// M4. FOOD DELIVERY — warm coral, photo cards
// ─────────────────────────────────────────────────────────────────────────────
function AppFood() {
  const s = {
    root: { width: '100%', height: '100%', background: '#fff8f3', color: '#2a1f1c',
      fontFamily: '-apple-system, "SF Pro", system-ui, sans-serif',
      padding: '54px 0 0', overflow: 'hidden', position: 'relative' },
    top: { display: 'flex', alignItems: 'center', gap: 12,
      padding: '20px 20px 14px' },
    loc: { flex: 1 },
    locLbl: { fontSize: 11, color: '#8a7a72', display: 'flex', alignItems: 'center', gap: 4,
      fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em' },
    locAddr: { fontSize: 16, fontWeight: 700, letterSpacing: '-0.01em', marginTop: 2 },
    bag: { width: 40, height: 40, borderRadius: '50%', background: '#e85a4f',
      color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 14, fontWeight: 700, position: 'relative' },
    bagDot: { position: 'absolute', top: -2, right: -2, width: 18, height: 18,
      borderRadius: '50%', background: '#1a1a1a', color: '#fff',
      fontSize: 10, fontWeight: 700, display: 'flex',
      alignItems: 'center', justifyContent: 'center',
      border: '2px solid #fff8f3' },
    search: { margin: '0 20px', background: '#fff', borderRadius: 14,
      padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10,
      fontSize: 14, color: '#8a7a72', boxShadow: '0 2px 6px rgba(0,0,0,0.04)' },
    chipRow: { display: 'flex', gap: 8, padding: '14px 20px 0', overflowX: 'auto' },
    chip: (active) => ({ background: active ? '#1a1a1a' : '#fff',
      color: active ? '#fff' : '#2a1f1c', padding: '8px 14px',
      borderRadius: 999, fontSize: 12, fontWeight: 600, whiteSpace: 'nowrap',
      boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }),
    bannerWrap: { padding: '16px 20px 0' },
    banner: { background: '#e85a4f', borderRadius: 18, padding: 20,
      color: '#fff', position: 'relative', overflow: 'hidden' },
    bannerH: { fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em',
      lineHeight: 1.1, maxWidth: 200 },
    bannerS: { fontSize: 13, opacity: 0.9, marginTop: 6, maxWidth: 200 },
    bannerCta: { display: 'inline-block', marginTop: 14,
      background: '#fff', color: '#e85a4f', padding: '8px 16px',
      borderRadius: 999, fontSize: 12, fontWeight: 700 },
    bannerArt: { position: 'absolute', right: -20, top: 0, bottom: 0, width: 160,
      background: 'radial-gradient(circle at 40% 50%, #ffd6a8, transparent 70%)' },
    sectionH: { padding: '20px 20px 10px', display: 'flex',
      justifyContent: 'space-between', alignItems: 'baseline' },
    sectionT: { fontSize: 17, fontWeight: 700, letterSpacing: '-0.01em' },
    seeAll: { fontSize: 13, color: '#e85a4f', fontWeight: 600 },
    grid: { padding: '0 20px', display: 'grid', gridTemplateColumns: '1fr 1fr',
      gap: 12 },
    rest: { background: '#fff', borderRadius: 14, overflow: 'hidden',
      boxShadow: '0 2px 6px rgba(0,0,0,0.05)' },
    restImg: (g) => ({ width: '100%', aspectRatio: '4/3', background: g,
      position: 'relative' }),
    restTag: { position: 'absolute', top: 8, left: 8,
      background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)',
      padding: '3px 8px', borderRadius: 999, fontSize: 10, fontWeight: 700 },
    restBody: { padding: 10 },
    restT: { fontSize: 13, fontWeight: 700, letterSpacing: '-0.01em' },
    restS: { fontSize: 11, color: '#8a7a72', marginTop: 3, display: 'flex',
      gap: 6, alignItems: 'center' },
    tabBar: { position: 'absolute', bottom: 0, left: 0, right: 0,
      background: 'rgba(255,248,243,0.9)', backdropFilter: 'blur(20px)',
      borderTop: '0.5px solid #ead5c4', padding: '10px 0 38px',
      display: 'flex', justifyContent: 'space-around' },
    tab: (active) => ({ display: 'flex', flexDirection: 'column', alignItems: 'center',
      gap: 2, fontSize: 10, color: active ? '#e85a4f' : '#a09084', fontWeight: 600 }),
  };
  return (
    <div style={s.root}>
      <div style={s.top}>
        <div style={s.loc}>
          <div style={s.locLbl}>📍 deliver to</div>
          <div style={s.locAddr}>14 Rue de Verneuil ▾</div>
        </div>
        <div style={s.bag}>🛍<span style={s.bagDot}>3</span></div>
      </div>
      <div style={s.search}>⌕ &nbsp; Search for "ramen", "ice cream"…</div>
      <div style={s.chipRow}>
        <span style={s.chip(true)}>All</span>
        <span style={s.chip()}>Breakfast</span>
        <span style={s.chip()}>Lunch · 30 min</span>
        <span style={s.chip()}>Vegan</span>
        <span style={s.chip()}>Cafés</span>
      </div>
      <div style={s.bannerWrap}>
        <div style={s.banner}>
          <div style={s.bannerArt}></div>
          <div style={{ position: 'relative' }}>
            <div style={s.bannerH}>Free delivery on first 3 orders</div>
            <div style={s.bannerS}>Welcome to the neighbourhood ◡</div>
            <div style={s.bannerCta}>Claim it →</div>
          </div>
        </div>
      </div>
      <div style={s.sectionH}>
        <div style={s.sectionT}>Loved nearby</div>
        <div style={s.seeAll}>See all</div>
      </div>
      <div style={s.grid}>
        <div style={s.rest}>
          <div style={s.restImg('linear-gradient(135deg, #ffd6a8, #e85a4f)')}>
            <div style={s.restTag}>18 min · free</div>
          </div>
          <div style={s.restBody}>
            <div style={s.restT}>Maison Calva</div>
            <div style={s.restS}>★ 4.9 · French · €€€</div>
          </div>
        </div>
        <div style={s.rest}>
          <div style={s.restImg('linear-gradient(135deg, #d4f0a8, #6aae42)')}>
            <div style={s.restTag}>22 min · €1</div>
          </div>
          <div style={s.restBody}>
            <div style={s.restT}>Pebble Bowl</div>
            <div style={s.restS}>★ 4.7 · Plant · €€</div>
          </div>
        </div>
        <div style={s.rest}>
          <div style={s.restImg('linear-gradient(135deg, #ffb8c8, #8a4a6a)')}>
            <div style={s.restTag}>26 min · €2</div>
          </div>
          <div style={s.restBody}>
            <div style={s.restT}>Tonkotsu &amp; Co</div>
            <div style={s.restS}>★ 4.8 · Ramen · €€</div>
          </div>
        </div>
        <div style={s.rest}>
          <div style={s.restImg('linear-gradient(135deg, #f4e6c4, #c9a060)')}>
            <div style={s.restTag}>14 min · free</div>
          </div>
          <div style={s.restBody}>
            <div style={s.restT}>Northstar Coffee</div>
            <div style={s.restS}>★ 4.9 · Café · €</div>
          </div>
        </div>
      </div>
      <div style={s.tabBar}>
        <div style={s.tab(true)}>⌂ &nbsp;Home</div>
        <div style={s.tab()}>⌕ &nbsp;Search</div>
        <div style={s.tab()}>🛍 &nbsp;Orders</div>
        <div style={s.tab()}>♡ &nbsp;Saved</div>
        <div style={s.tab()}>👤 &nbsp;Account</div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// M5. FITNESS — dark with neon lime, active workout
// ─────────────────────────────────────────────────────────────────────────────
function AppFitness() {
  const s = {
    root: { width: '100%', height: '100%', background: '#0a0f0a', color: '#e8f4d8',
      fontFamily: '-apple-system, "SF Pro", system-ui, sans-serif',
      padding: '54px 0 0', position: 'relative', overflow: 'hidden' },
    glow: { position: 'absolute', width: 500, height: 500, borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(212,240,0,0.15), transparent 60%)',
      right: -150, top: -100 },
    top: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '20px 24px', position: 'relative', zIndex: 2 },
    closeBtn: { width: 36, height: 36, borderRadius: '50%',
      background: 'rgba(255,255,255,0.08)', display: 'flex',
      alignItems: 'center', justifyContent: 'center', fontSize: 16,
      color: '#e8f4d8' },
    chip: { background: 'rgba(212,240,0,0.15)', color: '#d4f000',
      padding: '6px 14px', borderRadius: 999, fontSize: 11,
      fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
      display: 'flex', alignItems: 'center', gap: 6 },
    dot: { width: 6, height: 6, borderRadius: '50%', background: '#d4f000',
      boxShadow: '0 0 8px #d4f000' },
    hero: { padding: '20px 24px 0', position: 'relative', zIndex: 2 },
    workoutLbl: { fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase',
      color: 'rgba(232,244,216,0.5)' },
    workoutN: { fontSize: 32, fontWeight: 800, letterSpacing: '-0.03em',
      marginTop: 6, lineHeight: 1.1 },
    timer: { textAlign: 'center', padding: '20px 0 12px', position: 'relative', zIndex: 2 },
    timerBig: { fontSize: 80, fontWeight: 800, letterSpacing: '-0.05em',
      fontFamily: '"JetBrains Mono", ui-monospace, monospace',
      lineHeight: 1, color: '#d4f000', textShadow: '0 0 30px rgba(212,240,0,0.4)' },
    timerLbl: { fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase',
      color: 'rgba(232,244,216,0.5)', marginTop: 4 },
    metrics: { display: 'flex', justifyContent: 'space-around',
      padding: '20px 16px', margin: '0 16px',
      background: 'rgba(255,255,255,0.04)', borderRadius: 16,
      position: 'relative', zIndex: 2 },
    metric: { textAlign: 'center', flex: 1, position: 'relative' },
    metricN: { fontSize: 24, fontWeight: 800, letterSpacing: '-0.02em',
      fontFamily: '"JetBrains Mono", monospace' },
    metricL: { fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase',
      color: 'rgba(232,244,216,0.5)', marginTop: 2 },
    sep: { position: 'absolute', right: 0, top: '20%', bottom: '20%',
      width: 1, background: 'rgba(255,255,255,0.1)' },
    exH: { padding: '24px 24px 8px', display: 'flex',
      justifyContent: 'space-between', alignItems: 'baseline',
      position: 'relative', zIndex: 2 },
    exT: { fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase',
      color: 'rgba(232,244,216,0.5)' },
    exNow: { color: '#d4f000', fontWeight: 700 },
    exRow: (active, done) => ({ display: 'flex', alignItems: 'center', gap: 12,
      padding: '14px 24px', position: 'relative', zIndex: 2,
      background: active ? 'rgba(212,240,0,0.08)' : 'transparent',
      borderLeft: active ? '3px solid #d4f000' : '3px solid transparent',
      opacity: done ? 0.4 : 1 }),
    exIcon: (active, done) => ({ width: 38, height: 38, borderRadius: 10,
      background: done ? '#d4f000' : 'rgba(255,255,255,0.06)',
      color: done ? '#0a0f0a' : (active ? '#d4f000' : '#e8f4d8'),
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontWeight: 700, fontSize: 16 }),
    exMain: { flex: 1 },
    exName: { fontSize: 15, fontWeight: 600 },
    exSets: { fontSize: 12, color: 'rgba(232,244,216,0.5)', marginTop: 2 },
    exReps: { fontSize: 13, color: 'rgba(232,244,216,0.7)',
      fontFamily: '"JetBrains Mono", monospace' },
    btnBar: { position: 'absolute', bottom: 38, left: 16, right: 16,
      display: 'flex', gap: 10, zIndex: 3 },
    pauseBtn: { flex: 1, background: 'rgba(255,255,255,0.08)', color: '#e8f4d8',
      padding: '16px', borderRadius: 14, fontSize: 14, fontWeight: 700,
      letterSpacing: '0.06em', textTransform: 'uppercase', textAlign: 'center',
      backdropFilter: 'blur(10px)' },
    nextBtn: { flex: 2, background: '#d4f000', color: '#0a0f0a',
      padding: '16px', borderRadius: 14, fontSize: 14, fontWeight: 800,
      letterSpacing: '0.06em', textTransform: 'uppercase', textAlign: 'center',
      boxShadow: '0 0 24px rgba(212,240,0,0.3)' },
  };
  return (
    <div style={s.root}>
      <div style={s.glow}></div>
      <div style={s.top}>
        <div style={s.closeBtn}>×</div>
        <div style={s.chip}><span style={s.dot}></span> LIVE · WEEK 4 DAY 2</div>
        <div style={s.closeBtn}>♫</div>
      </div>
      <div style={s.hero}>
        <div style={s.workoutLbl}>Workout in progress</div>
        <div style={s.workoutN}>Push day — heavy.</div>
      </div>
      <div style={s.timer}>
        <div style={s.timerBig}>00:42</div>
        <div style={s.timerLbl}>REST · NEXT SET IN 18s</div>
      </div>
      <div style={s.metrics}>
        <div style={s.metric}>
          <div style={s.metricN}>184</div>
          <div style={s.metricL}>BPM</div>
          <div style={s.sep}></div>
        </div>
        <div style={s.metric}>
          <div style={s.metricN}>624</div>
          <div style={s.metricL}>CAL</div>
          <div style={s.sep}></div>
        </div>
        <div style={s.metric}>
          <div style={s.metricN}>22:14</div>
          <div style={s.metricL}>ELAPSED</div>
        </div>
      </div>
      <div style={s.exH}>
        <div style={s.exT}>Exercises · 4 of 7</div>
        <div style={s.exT}><span style={s.exNow}>● NOW</span></div>
      </div>
      <div>
        <div style={s.exRow(false, true)}>
          <div style={s.exIcon(false, true)}>✓</div>
          <div style={s.exMain}>
            <div style={s.exName}>Warm-up</div>
            <div style={s.exSets}>5 min · done</div>
          </div>
        </div>
        <div style={s.exRow(false, true)}>
          <div style={s.exIcon(false, true)}>✓</div>
          <div style={s.exMain}>
            <div style={s.exName}>Bench press</div>
            <div style={s.exSets}>4 × 8 · 84 kg</div>
          </div>
          <div style={s.exReps}>4/4</div>
        </div>
        <div style={s.exRow(false, true)}>
          <div style={s.exIcon(false, true)}>✓</div>
          <div style={s.exMain}>
            <div style={s.exName}>Incline DB press</div>
            <div style={s.exSets}>3 × 10 · 28 kg</div>
          </div>
          <div style={s.exReps}>3/3</div>
        </div>
        <div style={s.exRow(true, false)}>
          <div style={s.exIcon(true, false)}>4</div>
          <div style={s.exMain}>
            <div style={{ ...s.exName, color: '#d4f000' }}>Overhead press</div>
            <div style={s.exSets}>4 × 6 · 52 kg</div>
          </div>
          <div style={{ ...s.exReps, color: '#d4f000' }}>2/4</div>
        </div>
        <div style={s.exRow(false, false)}>
          <div style={s.exIcon(false, false)}>5</div>
          <div style={s.exMain}>
            <div style={s.exName}>Lateral raise</div>
            <div style={s.exSets}>3 × 12</div>
          </div>
          <div style={s.exReps}>—</div>
        </div>
      </div>
      <div style={s.btnBar}>
        <div style={s.pauseBtn}>⏸ Pause</div>
        <div style={s.nextBtn}>Next set →</div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// M6. BOARDING PASS — deep navy, airline aesthetic
// ─────────────────────────────────────────────────────────────────────────────
function AppBoarding() {
  const s = {
    root: { width: '100%', height: '100%', background: '#0d1430', color: '#fff',
      fontFamily: '-apple-system, "SF Pro", system-ui, sans-serif',
      padding: '54px 0 0', position: 'relative', overflow: 'hidden' },
    stars: { position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none',
      backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1.5px)',
      backgroundSize: '40px 40px' },
    top: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '20px 24px' },
    back: { fontSize: 14, color: 'rgba(255,255,255,0.7)' },
    title: { fontSize: 13, fontWeight: 600 },
    pass: { margin: '24px 20px', background: '#fff', color: '#0d1430',
      borderRadius: 24, overflow: 'hidden', position: 'relative',
      boxShadow: '0 20px 60px rgba(0,0,0,0.4)' },
    passHead: { background: '#0d1430', color: '#fff', padding: '20px 24px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    airline: { display: 'flex', alignItems: 'center', gap: 10, fontWeight: 700, fontSize: 15 },
    airlineMark: { width: 28, height: 28, background: '#e8412c', borderRadius: 6,
      transform: 'rotate(45deg)' },
    flight: { fontSize: 12, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.08em' },
    route: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '28px 24px 20px' },
    cityCode: { fontSize: 40, fontWeight: 800, letterSpacing: '-0.03em',
      lineHeight: 1, fontFamily: '"Archivo", sans-serif' },
    cityName: { fontSize: 11, color: '#7a7e8a', textTransform: 'uppercase',
      letterSpacing: '0.1em', marginTop: 4, fontWeight: 600 },
    cityTime: { fontSize: 13, color: '#0d1430', marginTop: 2,
      fontFamily: '"JetBrains Mono", monospace' },
    plane: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 },
    planeDur: { fontSize: 10, color: '#7a7e8a', letterSpacing: '0.06em',
      textTransform: 'uppercase', fontWeight: 600 },
    rowSep: { borderTop: '1.5px dashed #d6d6dd', position: 'relative' },
    notch: (l) => ({ position: 'absolute', [l]: -12, top: -12, width: 24, height: 24,
      borderRadius: '50%', background: '#0d1430' }),
    info: { padding: '20px 24px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
      rowGap: 16 },
    infoLbl: { fontSize: 10, color: '#7a7e8a', letterSpacing: '0.1em',
      textTransform: 'uppercase', fontWeight: 600 },
    infoVal: { fontSize: 17, fontWeight: 700, letterSpacing: '-0.01em', marginTop: 4 },
    barcode: { padding: '20px 24px 24px', display: 'flex', flexDirection: 'column',
      alignItems: 'center', gap: 10 },
    bars: { display: 'flex', gap: 1, height: 50 },
    bar: (w) => ({ width: w, height: '100%', background: '#0d1430' }),
    bcNum: { fontSize: 11, fontFamily: '"JetBrains Mono", monospace',
      letterSpacing: '0.2em', color: '#7a7e8a' },
    helpBar: { position: 'absolute', bottom: 38, left: 20, right: 20,
      background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 14, padding: '14px 16px',
      display: 'flex', alignItems: 'center', gap: 12, fontSize: 13 },
    helpIcon: { width: 36, height: 36, borderRadius: '50%', background: '#e8412c',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flex: 'none' },
  };
  const barWidths = [3,1,2,1,4,2,1,3,1,2,3,1,1,4,2,3,1,2,1,3,2,1,3,2,4,1,2,1,3,2,1,4,2,3,1,2,1,3];
  return (
    <div style={s.root}>
      <div style={s.stars}></div>
      <div style={s.top}>
        <div style={s.back}>‹ Trips</div>
        <div style={s.title}>Boarding pass</div>
        <div style={s.back}>···</div>
      </div>
      <div style={s.pass}>
        <div style={s.passHead}>
          <div style={s.airline}>
            <span style={s.airlineMark}></span>
            ARC AIRWAYS
          </div>
          <div style={s.flight}>AC 142 · A350-900</div>
        </div>
        <div style={s.route}>
          <div>
            <div style={s.cityCode}>LHR</div>
            <div style={s.cityName}>London</div>
            <div style={s.cityTime}>14:50 · T3</div>
          </div>
          <div style={s.plane}>
            <div style={s.planeDur}>11h 42m</div>
            <svg width="80" height="14" viewBox="0 0 80 14">
              <line x1="2" y1="7" x2="78" y2="7" stroke="#d6d6dd" strokeDasharray="2 2" strokeWidth="1.5"/>
              <path d="M 28 7 L 52 2 L 60 7 L 52 12 Z M 52 4 L 70 7 L 52 10" fill="#e8412c"/>
            </svg>
            <div style={s.planeDur}>Nonstop</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={s.cityCode}>NRT</div>
            <div style={s.cityName}>Tokyo</div>
            <div style={s.cityTime}>10:32 +1 · T2</div>
          </div>
        </div>
        <div style={s.rowSep}>
          <div style={s.notch('left')}></div>
          <div style={s.notch('right')}></div>
        </div>
        <div style={s.info}>
          <div>
            <div style={s.infoLbl}>Passenger</div>
            <div style={s.infoVal}>M. Khan</div>
          </div>
          <div>
            <div style={s.infoLbl}>Class</div>
            <div style={s.infoVal}>Business</div>
          </div>
          <div>
            <div style={s.infoLbl}>Seat</div>
            <div style={s.infoVal}>4A</div>
          </div>
          <div>
            <div style={s.infoLbl}>Gate</div>
            <div style={s.infoVal}>B 22</div>
          </div>
          <div>
            <div style={s.infoLbl}>Boards</div>
            <div style={s.infoVal}>14:10</div>
          </div>
          <div>
            <div style={s.infoLbl}>Group</div>
            <div style={s.infoVal}>2</div>
          </div>
        </div>
        <div style={s.barcode}>
          <div style={s.bars}>
            {barWidths.map((w, i) => <div key={i} style={s.bar(w)}></div>)}
          </div>
          <div style={s.bcNum}>AC0142  LHRNRT  KHAN/M  EBKCQ4</div>
        </div>
      </div>
      <div style={s.helpBar}>
        <div style={s.helpIcon}>
          <svg width="16" height="16" viewBox="0 0 16 16"><path d="M8 1l4 7h-3v6H7v-6H4z" fill="#fff"/></svg>
        </div>
        <div>
          <div style={{ fontWeight: 600 }}>Boards in 1h 22m</div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>
            Gate B 22 · 14 min walk from security
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// M7. PHOTO JOURNAL — bright clean masonry feed
// ─────────────────────────────────────────────────────────────────────────────
function AppJournal() {
  const s = {
    root: { width: '100%', height: '100%', background: '#fafafa', color: '#0a0a0f',
      fontFamily: '-apple-system, "SF Pro", system-ui, sans-serif',
      padding: '54px 0 0', position: 'relative', overflow: 'hidden' },
    top: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '16px 20px 12px', borderBottom: '0.5px solid #ececec' },
    brand: { fontSize: 22, fontWeight: 800, letterSpacing: '-0.03em',
      display: 'flex', alignItems: 'center', gap: 6 },
    bDot: { display: 'inline-block', width: 10, height: 10, borderRadius: '50%',
      background: '#ff5e6c' },
    topR: { display: 'flex', gap: 14, fontSize: 18, color: '#0a0a0f' },
    hero: { padding: '20px 20px 0' },
    heroH: { fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em',
      lineHeight: 1.1 },
    heroS: { fontSize: 14, color: '#6a6a78', marginTop: 4 },
    chipRow: { display: 'flex', gap: 8, padding: '16px 20px 0',
      overflowX: 'auto' },
    chip: (active) => ({ background: active ? '#0a0a0f' : '#fff',
      color: active ? '#fff' : '#0a0a0f', padding: '7px 14px',
      borderRadius: 999, fontSize: 12, fontWeight: 600,
      border: active ? 'none' : '1px solid #ececec', whiteSpace: 'nowrap' }),
    masonry: { padding: '16px 20px 0', columnCount: 2, columnGap: 10 },
    pin: (g, h) => ({ width: '100%', height: h, borderRadius: 14,
      background: g, marginBottom: 10, position: 'relative',
      breakInside: 'avoid', display: 'inline-block',
      overflow: 'hidden' }),
    pinLabel: { position: 'absolute', bottom: 8, left: 8, right: 8,
      color: '#fff', fontSize: 12, fontWeight: 600, lineHeight: 1.3 },
    pinHeart: { position: 'absolute', top: 8, right: 8,
      width: 28, height: 28, borderRadius: '50%',
      background: 'rgba(255,255,255,0.3)', backdropFilter: 'blur(10px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 14, color: '#fff' },
    av: { display: 'flex', alignItems: 'center', gap: 6,
      position: 'absolute', bottom: 8, left: 8, color: '#fff',
      fontSize: 11, fontWeight: 600 },
    avDot: (c) => ({ width: 20, height: 20, borderRadius: '50%', background: c,
      border: '1.5px solid rgba(255,255,255,0.5)' }),
    fab: { position: 'absolute', right: 16, bottom: 84,
      width: 56, height: 56, borderRadius: '50%', background: '#ff5e6c',
      color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 26, boxShadow: '0 8px 24px rgba(255,94,108,0.4)' },
    tabBar: { position: 'absolute', bottom: 0, left: 0, right: 0,
      background: 'rgba(250,250,250,0.9)', backdropFilter: 'blur(20px)',
      borderTop: '0.5px solid #ececec', padding: '10px 0 38px',
      display: 'flex', justifyContent: 'space-around', alignItems: 'center' },
    tab: (active) => ({ fontSize: 22, color: active ? '#ff5e6c' : '#a0a0aa' }),
  };
  const pins = [
    ['linear-gradient(135deg, #ffd6a8, #ff7e7e)', 180, 'A slower kitchen', 'Maya'],
    ['linear-gradient(135deg, #c8e8ff, #6890d4)', 240, 'Cyanotype prints', 'Toma'],
    ['linear-gradient(135deg, #d8ccff, #7c5cff)', 200, null, 'Aiyana'],
    ['linear-gradient(135deg, #d6f0a8, #6aae42)', 160, 'Sunday market run', 'Maya'],
    ['linear-gradient(135deg, #2a3024, #4a5440)', 220, 'Tromsø, day 4', 'Erik'],
    ['linear-gradient(135deg, #ffb8c8, #c44fb5)', 180, null, 'Nora'],
    ['linear-gradient(135deg, #f4e6c4, #c9a060)', 200, 'Letterpress, May', 'Toma'],
    ['linear-gradient(135deg, #4cc8ff, #7c5cff)', 170, null, 'Aiyana'],
  ];
  return (
    <div style={s.root}>
      <div style={s.top}>
        <div style={s.brand}><span style={s.bDot}></span>scrapbook</div>
        <div style={s.topR}><span>⌕</span><span>✦</span></div>
      </div>
      <div style={s.hero}>
        <div style={s.heroH}>Saved by Maya.</div>
        <div style={s.heroS}>248 pieces · 12 boards</div>
      </div>
      <div style={s.chipRow}>
        <span style={s.chip(true)}>All</span>
        <span style={s.chip()}>Kitchen</span>
        <span style={s.chip()}>Studio</span>
        <span style={s.chip()}>Travel</span>
        <span style={s.chip()}>Print</span>
        <span style={s.chip()}>Wishlist</span>
      </div>
      <div style={s.masonry}>
        {pins.map((p, i) => (
          <div key={i} style={s.pin(p[0], p[1])}>
            <div style={s.pinHeart}>♡</div>
            {p[2] && <div style={s.pinLabel}>{p[2]}</div>}
            <div style={s.av}>
              <span style={s.avDot(['#e85a4f','#7c5cff','#22a06b','#c44fb5','#4cc8ff'][i % 5])}></span>
              <span>{p[3]}</span>
            </div>
          </div>
        ))}
      </div>
      <div style={s.fab}>+</div>
      <div style={s.tabBar}>
        <div style={s.tab(true)}>⌂</div>
        <div style={s.tab()}>⌕</div>
        <div style={s.tab()}>✦</div>
        <div style={s.tab()}>♡</div>
        <div style={s.tab()}>👤</div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// M8. CRYPTO / TRADING — dark teal, chart, portfolio
// ─────────────────────────────────────────────────────────────────────────────
function AppCrypto() {
  const s = {
    root: { width: '100%', height: '100%', background: '#06141a', color: '#e8f4f0',
      fontFamily: '-apple-system, "SF Pro", system-ui, sans-serif',
      padding: '54px 0 0', overflow: 'hidden', position: 'relative' },
    top: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '20px 24px' },
    av: { width: 36, height: 36, borderRadius: '50%', background: '#7be3a8',
      color: '#06141a', display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontWeight: 700, fontSize: 13 },
    topMid: { textAlign: 'center', fontSize: 13, fontWeight: 600 },
    topSub: { fontSize: 11, color: 'rgba(232,244,240,0.5)', marginTop: 2 },
    bell: { width: 36, height: 36, borderRadius: '50%',
      background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center',
      justifyContent: 'center', fontSize: 14 },
    balWrap: { padding: '24px 24px 0', textAlign: 'center' },
    balLbl: { fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase',
      color: 'rgba(232,244,240,0.5)' },
    bal: { fontSize: 44, fontWeight: 700, letterSpacing: '-0.03em', marginTop: 4,
      color: '#fff' },
    delta: { color: '#7be3a8', fontSize: 14, fontWeight: 600, marginTop: 4 },
    chart: { height: 160, margin: '20px 0 12px', position: 'relative' },
    timePill: { display: 'flex', gap: 4, justifyContent: 'center',
      padding: '0 24px' },
    tPill: (active) => ({ padding: '6px 14px', borderRadius: 999, fontSize: 12,
      fontWeight: 600,
      background: active ? 'rgba(123,227,168,0.15)' : 'transparent',
      color: active ? '#7be3a8' : 'rgba(232,244,240,0.5)' }),
    actions: { display: 'flex', gap: 10, padding: '20px 20px 0' },
    actBtn: (primary) => ({ flex: 1, padding: '14px 0', borderRadius: 14,
      background: primary ? '#7be3a8' : 'rgba(255,255,255,0.06)',
      color: primary ? '#06141a' : '#e8f4f0',
      fontWeight: 700, fontSize: 13, textAlign: 'center',
      letterSpacing: '0.04em' }),
    listH: { padding: '24px 20px 8px', display: 'flex',
      justifyContent: 'space-between', alignItems: 'baseline' },
    listT: { fontSize: 15, fontWeight: 600 },
    listAll: { fontSize: 12, color: '#7be3a8', fontWeight: 500 },
    row: { display: 'flex', alignItems: 'center', gap: 12,
      padding: '12px 20px', borderBottom: '0.5px solid rgba(255,255,255,0.06)' },
    coin: (c) => ({ width: 38, height: 38, borderRadius: '50%', background: c,
      color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontWeight: 700, fontSize: 13 }),
    coinMain: { flex: 1 },
    coinT: { fontSize: 14, fontWeight: 600 },
    coinS: { fontSize: 11, color: 'rgba(232,244,240,0.5)', marginTop: 2 },
    coinR: { textAlign: 'right' },
    coinPx: { fontSize: 14, fontWeight: 600, fontFamily: 'ui-monospace, monospace' },
    coinCh: (up) => ({ fontSize: 11, color: up ? '#7be3a8' : '#ff6464',
      fontWeight: 600, marginTop: 2 }),
    spark: { width: 50, height: 22 },
    tabBar: { position: 'absolute', bottom: 0, left: 0, right: 0,
      background: 'rgba(6,20,26,0.9)', backdropFilter: 'blur(20px)',
      borderTop: '0.5px solid rgba(255,255,255,0.08)', padding: '10px 0 38px',
      display: 'flex', justifyContent: 'space-around' },
    tab: (active) => ({ display: 'flex', flexDirection: 'column', alignItems: 'center',
      gap: 2, fontSize: 10, color: active ? '#7be3a8' : 'rgba(232,244,240,0.4)',
      fontWeight: 600 }),
  };
  const pts = [20, 35, 28, 50, 42, 58, 70, 62, 80, 75, 90, 84, 102, 96, 110];
  const path = pts.map((p, i) => `${(i / (pts.length - 1)) * 100}%,${100 - p * 0.7}%`).join(' L ');
  return (
    <div style={s.root}>
      <div style={s.top}>
        <div style={s.av}>AR</div>
        <div style={s.topMid}>
          <div>Wallet · Main</div>
          <div style={s.topSub}>0x94f...c8e2 ▾</div>
        </div>
        <div style={s.bell}>🔔</div>
      </div>
      <div style={s.balWrap}>
        <div style={s.balLbl}>Portfolio value</div>
        <div style={s.bal}>$48,202.14</div>
        <div style={s.delta}>↑ $1,840 (+3.94%) · 24h</div>
      </div>
      <div style={s.chart}>
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="cgrad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#7be3a8" stopOpacity="0.4"/>
              <stop offset="1" stopColor="#7be3a8" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <path d={`M ${path} L 100,100 L 0,100 Z`} fill="url(#cgrad)"/>
          <path d={`M ${path}`} stroke="#7be3a8" strokeWidth="0.6" fill="none"/>
        </svg>
        <div style={{ position: 'absolute', right: 16, top: 16,
          background: '#7be3a8', color: '#06141a', padding: '4px 8px',
          borderRadius: 6, fontSize: 11, fontWeight: 700 }}>
          $48,202
        </div>
      </div>
      <div style={s.timePill}>
        <span style={s.tPill()}>1H</span>
        <span style={s.tPill()}>1D</span>
        <span style={s.tPill(true)}>1W</span>
        <span style={s.tPill()}>1M</span>
        <span style={s.tPill()}>1Y</span>
        <span style={s.tPill()}>All</span>
      </div>
      <div style={s.actions}>
        <div style={s.actBtn()}>↑ Send</div>
        <div style={s.actBtn(true)}>↓ Receive</div>
        <div style={s.actBtn()}>⇋ Swap</div>
      </div>
      <div style={s.listH}>
        <div style={s.listT}>Holdings · 4</div>
        <div style={s.listAll}>See all</div>
      </div>
      <div>
        {[
          ['BTC', 'Bitcoin', '$ 68,420', '+2.84%', true, '#f7931a', 'B'],
          ['ETH', 'Ethereum', '$  3,820', '+1.42%', true, '#627eea', 'Ξ'],
          ['SOL', 'Solana',   '$    188', '+5.18%', true, '#14f195', 'S'],
          ['USDC','USD Coin', '$   1.00', '−0.02%', false,'#2775ca', '$'],
        ].map((r, i) => (
          <div key={i} style={s.row}>
            <div style={s.coin(r[5])}>{r[6]}</div>
            <div style={s.coinMain}>
              <div style={s.coinT}>{r[0]}</div>
              <div style={s.coinS}>{r[1]}</div>
            </div>
            <svg style={s.spark} viewBox="0 0 50 22">
              <path d="M 0 16 Q 8 12, 16 14 T 32 10 T 50 6"
                stroke={r[4] ? '#7be3a8' : '#ff6464'} strokeWidth="1.5" fill="none"/>
            </svg>
            <div style={s.coinR}>
              <div style={s.coinPx}>{r[2]}</div>
              <div style={s.coinCh(r[4])}>{r[3]}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={s.tabBar}>
        <div style={s.tab(true)}>⌂ &nbsp;Wallet</div>
        <div style={s.tab()}>📊 &nbsp;Markets</div>
        <div style={s.tab()}>⇋ &nbsp;Swap</div>
        <div style={s.tab()}>◔ &nbsp;Earn</div>
        <div style={s.tab()}>☰ &nbsp;More</div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// App canvas
// ─────────────────────────────────────────────────────────────────────────────
function Phone({ children, dark }) {
  return (
    <div style={{ width: AW, height: AH, display: 'flex',
      alignItems: 'center', justifyContent: 'center',
      background: 'transparent' }}>
      <IOSDevice width={MW} height={MH} dark={dark}>
        {children}
      </IOSDevice>
    </div>
  );
}

function MobileApp() {
  return (
    <DesignCanvas>
      <DCSection id="mobile-row1" title="Mobile Apps — Eight Directions"
        subtitle="Different palettes, app categories, and interaction patterns. Each is a full iOS screen — drag to reorder, click expand to focus.">
        <DCArtboard id="m-music" label="A · Music Player" width={AW} height={AH}>
          <Phone dark><AppMusic /></Phone>
        </DCArtboard>
        <DCArtboard id="m-bank" label="B · Banking" width={AW} height={AH}>
          <Phone><AppBanking /></Phone>
        </DCArtboard>
        <DCArtboard id="m-meditate" label="C · Meditation" width={AW} height={AH}>
          <Phone><AppMeditation /></Phone>
        </DCArtboard>
        <DCArtboard id="m-food" label="D · Food Delivery" width={AW} height={AH}>
          <Phone><AppFood /></Phone>
        </DCArtboard>
        <DCArtboard id="m-fit" label="E · Fitness · Live" width={AW} height={AH}>
          <Phone dark><AppFitness /></Phone>
        </DCArtboard>
        <DCArtboard id="m-board" label="F · Boarding Pass" width={AW} height={AH}>
          <Phone dark><AppBoarding /></Phone>
        </DCArtboard>
        <DCArtboard id="m-journal" label="G · Photo Journal" width={AW} height={AH}>
          <Phone><AppJournal /></Phone>
        </DCArtboard>
        <DCArtboard id="m-crypto" label="H · Crypto Wallet" width={AW} height={AH}>
          <Phone dark><AppCrypto /></Phone>
        </DCArtboard>
      </DCSection>
      {window.MobileExtrasSection ? <window.MobileExtrasSection /> : null}
    </DesignCanvas>
  );
}

const mRoot = ReactDOM.createRoot(document.getElementById('root'));
mRoot.render(<MobileApp />);
