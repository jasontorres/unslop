// Financial apps — four everyday-money directions, designed as full iOS screens.

const FM_W = 402;
const FM_H = 874;
const FM_AW = 462;
const FM_AH = 920;

function FinPhone({ children, dark = false }) {
  return (
    <div style={{ width: FM_AW, height: FM_AH, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <IOSDevice width={FM_W} height={FM_H} dark={dark}>{children}</IOSDevice>
    </div>
  );
}

const FinBar = ({ value, color, track = '#e9e8ee', height = 7 }) => (
  <div style={{ height, borderRadius: height, overflow: 'hidden', background: track }}>
    <div style={{ width: `${value}%`, height: '100%', borderRadius: height, background: color }} />
  </div>
);

const FinNav = ({ active = 0, color = '#6d52ff', dark = false, labels = ['Home', 'Plan', 'Activity', 'You'] }) => (
  <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '11px 17px 30px',
    borderTop: `1px solid ${dark ? 'rgba(255,255,255,.1)' : '#e8e7ed'}`,
    background: dark ? 'rgba(16,18,25,.94)' : 'rgba(255,255,255,.94)', backdropFilter: 'blur(18px)',
    display: 'flex', justifyContent: 'space-around', zIndex: 5 }}>
    {labels.map((label, i) => <div key={label} style={{ minWidth: 58, textAlign: 'center', color: i === active ? color : (dark ? '#666c76' : '#a4a0aa'), fontSize: 9, fontWeight: 700 }}>
      <div style={{ fontSize: 17, lineHeight: 1.25 }}>{['⌂','▦','↕','●'][i]}</div>{label}
    </div>)}
  </div>
);

// 01 — ENVELOPE BUDGET. Friendly and tactile with a daily spending answer.
function FinCentsibleMobile() {
  const envs = [['Home', '$1,420', 79, '#7057ff'], ['Food', '$486', 68, '#ff4f91'], ['Living', '$218', 50, '#22a87a'], ['Fun', '$132', 51, '#eebd34']];
  const fmc = {
    root: { width: '100%', height: '100%', background: '#f7f7fb', color: '#17151f', fontFamily: '"Manrope", sans-serif', padding: '56px 19px 92px', overflow: 'hidden', position: 'relative' },
    top: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    avatar: { width: 38, height: 38, borderRadius: 13, background: '#17151f', color: '#ffe85d', display: 'grid', placeItems: 'center', fontSize: 12, fontWeight: 800 },
    hero: { marginTop: 19, background: '#6d52ff', color: '#fff', borderRadius: 23, padding: 20, overflow: 'hidden', position: 'relative' },
    safe: { marginTop: 15, background: '#ffe85d', color: '#17151f', padding: '13px 15px', borderRadius: 15, display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    env: { background: '#fff', border: '1px solid #e7e5ee', borderRadius: 16, padding: 14 },
  };
  return <div style={fmc.root}>
    <div style={fmc.top}><div><small style={{ color: '#7e7988' }}>Good morning, Maya</small><div style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-.04em' }}>May money plan</div></div><div style={fmc.avatar}>MK</div></div>
    <section style={fmc.hero}><div style={{ position: 'absolute', width: 170, height: 170, borderRadius: '50%', border: '38px solid rgba(255,255,255,.08)', right: -55, top: -62 }} /><small style={{ opacity: .68, letterSpacing: '.12em', fontWeight: 700 }}>LEFT THIS MONTH</small><div style={{ fontSize: 44, fontWeight: 800, letterSpacing: '-.06em', marginTop: 5 }}>$1,932</div><div style={{ fontSize: 12, opacity: .72 }}>$3,908 of $5,840 assigned</div><div style={fmc.safe}><span><small style={{ fontWeight: 800, letterSpacing: '.08em' }}>SAFE TODAY</small><b style={{ display: 'block', fontSize: 23 }}>$84.20</b></span><span style={{ fontSize: 22 }}>→</span></div></section>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', margin: '21px 2px 11px' }}><b>Envelopes</b><small style={{ color: '#6d52ff', fontWeight: 700 }}>See all</small></div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>{envs.map(x => <div key={x[0]} style={fmc.env}><div style={{ display: 'flex', justifyContent: 'space-between' }}><b style={{ fontSize: 12 }}>{x[0]}</b><i style={{ width: 8, height: 8, borderRadius: '50%', background: x[3] }}/></div><div style={{ fontSize: 21, fontWeight: 800, margin: '8px 0 10px' }}>{x[1]}</div><FinBar value={x[2]} color={x[3]}/><small style={{ display: 'block', color: '#928d99', marginTop: 6 }}>{x[2]}% used</small></div>)}</div>
    <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 15, padding: 12, border: '1px solid #e7e5ee' }}><span style={{ width: 37, height: 37, borderRadius: 12, background: '#ddf5eb', color: '#18805b', display: 'grid', placeItems: 'center' }}>↙</span><span style={{ flex: 1 }}><b style={{ fontSize: 12 }}>Linear Labs</b><small style={{ display: 'block', color: '#928d99' }}>Payday · just now</small></span><b style={{ color: '#18805b', fontSize: 13 }}>+$2,920</b></div>
    <FinNav />
  </div>;
}

// 02 — CASH CALENDAR. A monochrome, time-first budget with one signal color.
function FinMonthlineMobile() {
  const days = [['12','Rent','−1,850'],['13','Studio','−48'],['14','',''],['15','PAYDAY','+2,920'],['16','Market','−94'],['17','',''],['18','Phone','−72'],['20','Insurance','−164']];
  const fmm = {
    root: { width: '100%', height: '100%', background: '#f1f2ed', color: '#090909', fontFamily: '"Inter Tight", sans-serif', padding: '55px 17px 24px', overflow: 'hidden' },
    top: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #111', paddingBottom: 13 },
    stat: { borderTop: '1px solid #111', paddingTop: 7 },
    day: { display: 'grid', gridTemplateColumns: '38px 1fr auto', gap: 8, minHeight: 49, alignItems: 'center', borderBottom: '1px solid #111', fontFamily: '"IBM Plex Mono", monospace' },
  };
  return <div style={fmm.root}>
    <div style={fmm.top}><b style={{ fontSize: 19, letterSpacing: '-.06em' }}>MONTH/LINE</b><span style={{ border: '1px solid #111', padding: '7px 9px', fontFamily: '"IBM Plex Mono", monospace', fontSize: 9 }}>MAY 2026 ▾</span></div>
    <div style={{ padding: '19px 0 17px' }}><small style={{ fontFamily: '"IBM Plex Mono", monospace' }}>CASH CALENDAR</small><h1 style={{ fontSize: 43, lineHeight: .95, letterSpacing: '-.065em', margin: '8px 0 0' }}>See the month<br/>before it happens.</h1></div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 13, marginBottom: 16 }}>{[['NOW','$4,280'],['LOW','$2,314'],['END','$7,916']].map((x,i)=><div key={x[0]} style={{ ...fmm.stat, color: i===1?'#e5332a':'#111' }}><small style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 8 }}>{x[0]}</small><div style={{ fontSize: 19, fontWeight: 800 }}>{x[1]}</div></div>)}</div>
    <div style={{ borderTop: '2px solid #111' }}>{days.map((d,i)=><div key={i} style={{ ...fmm.day, background: i===3?'#e8ff48':'transparent', padding: i===3?'0 7px':'0 7px' }}><b style={{ fontSize: 11 }}>{d[0]}</b><span style={{ fontSize: 10 }}>{d[1] || '—'}</span><b style={{ fontSize: 10, color: d[2][0]==='+'?'#08633d':'#111' }}>{d[2]}</b></div>)}</div>
    <div style={{ marginTop: 18, background: '#111', color: '#fff', padding: 15 }}><div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, fontFamily: '"IBM Plex Mono", monospace' }}><span>FORECAST NOTE</span><span>● LIVE</span></div><p style={{ fontSize: 13, lineHeight: 1.45, margin: '10px 0 0' }}>Your balance bottoms out on May 20. You stay $814 above your buffer.</p></div>
    <div style={{ position: 'absolute', bottom: 31, left: 17, right: 17, display: 'flex', justifyContent: 'space-between', fontFamily: '"IBM Plex Mono", monospace', fontSize: 9 }}><b>CALENDAR</b><span>FORECAST</span><span>ACCOUNTS</span><span>＋ ADD</span></div>
  </div>;
}

// 03 — HOUSEHOLD MONEY. Calm, shared, and conversation-first.
function FinCommonMobile() {
  const pots = [['Home base', '$2,910', 82, '#17352b'],['Food & pantry','$618',64,'#e7ad68'],['Little adventures','$284',48,'#bf7782']];
  const fmg = {
    root: { width: '100%', height: '100%', background: '#dce8df', color: '#17352b', fontFamily: '"DM Sans", sans-serif', padding: '55px 18px 90px', overflow: 'hidden', position: 'relative' },
    hero: { background: '#17352b', color: '#fff', borderRadius: 25, padding: 20, marginTop: 18 },
    card: { background: '#f8faf7', borderRadius: 18, padding: 14 },
  };
  return <div style={fmg.root}>
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><div><small style={{ color: '#637c71' }}>KHANNA HOUSEHOLD</small><div style={{ fontFamily: '"DM Serif Display"', fontSize: 27 }}>Common Ground</div></div><div style={{ display: 'flex' }}>{[['M','#f5d67d'],['A','#9fc9c0'],['T','#cf9cac']].map((x,i)=><span key={x[0]} style={{ width: 34, height: 34, borderRadius: '50%', display: 'grid', placeItems: 'center', background: x[1], border: '3px solid #dce8df', marginLeft: -8, fontSize: 10, fontWeight: 700 }}>{x[0]}</span>)}</div></header>
    <section style={fmg.hero}><small style={{ color: '#9fb8ad', letterSpacing: '.1em' }}>LEFT AFTER COMMITMENTS</small><div style={{ fontFamily: '"DM Serif Display"', fontSize: 52, marginTop: 7 }}>$1,284</div><div style={{ color: '#b8cec4', fontSize: 12 }}>20 days left · $64/day together</div><div style={{ height: 74, display: 'flex', gap: 7, alignItems: 'flex-end', marginTop: 20 }}>{[48,65,54,81,72,91,62,77,58,84,70,88].map((x,i)=><i key={i} style={{ flex: 1, height: `${x}%`, background: i>8?'#f5d67d':'#638276', borderRadius: 6 }}/>)}</div><div style={{ marginTop: 17, background: '#f5d67d', color: '#17352b', padding: '11px 13px', borderRadius: 13, fontSize: 12, fontWeight: 700, display: 'flex', justifyContent: 'space-between' }}><span>Plan the rest together</span><span>→</span></div></section>
    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '19px 2px 10px' }}><b>Shared pots</b><small>Everyone can see</small></div>
    <div style={{ display: 'grid', gap: 9 }}>{pots.map(p=><div key={p[0]} style={{ ...fmg.card, display: 'grid', gridTemplateColumns: '1fr 75px', gap: 13, alignItems: 'center' }}><div><small style={{ color: '#698177' }}>{p[0]}</small><div style={{ fontSize: 20, fontWeight: 700 }}>{p[1]}</div></div><div><FinBar value={p[2]} color={p[3]} track="#dce8df"/><small style={{ color: '#698177', display: 'block', marginTop: 5 }}>{p[2]}% used</small></div></div>)}</div>
    <div style={{ marginTop: 14, padding: 13, border: '1px dashed #6e887b', borderRadius: 15, fontSize: 12 }}><b>Sunday money check-in</b><span style={{ float: 'right' }}>2 of 3 joined →</span></div>
    <FinNav color="#17352b" labels={['Together','Pots','Activity','Family']} />
  </div>;
}

// 04 — GROUP EXPENSES. Bright social splitting with a minimal settlement answer.
function FinTabMobile() {
  const fmt = {
    root: { width: '100%', height: '100%', background: '#f0edff', color: '#181322', fontFamily: '"Space Grotesk", sans-serif', padding: '54px 16px 86px', overflow: 'hidden', position: 'relative' },
    box: { border: '2px solid #181322', borderRadius: 18, background: '#fff', boxShadow: '3px 3px 0 #181322' },
    pill: (c) => ({ background: c, border: '1.5px solid #181322', padding: '5px 8px', borderRadius: 999, fontSize: 9, fontWeight: 700 }),
  };
  return <div style={fmt.root}>
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><b style={{ fontSize: 24 }}>tab<span style={{ color: '#8cae15' }}>!</span></b><span style={fmt.pill('#bddb45')}>＋ EXPENSE</span></header>
    <div style={{ marginTop: 18 }}><small>LISBON WEEKEND · 4 PEOPLE</small><h1 style={{ margin: '4px 0 0', fontSize: 34, letterSpacing: '-.055em' }}>Who owes what?</h1></div>
    <section style={{ ...fmt.box, background: '#9d8cff', padding: 15, marginTop: 16 }}><small style={{ fontWeight: 700 }}>CLEANEST WAY TO SETTLE</small><div style={{ fontSize: 25, fontWeight: 700, lineHeight: 1.05, marginTop: 8 }}>Two transfers<br/>and you’re even.</div><div style={{ ...fmt.box, boxShadow: 'none', padding: 12, marginTop: 14 }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ fontSize: 11 }}>Toma pays Anya</span><b>$46.20</b></div><div style={{ height: 1, background: '#181322', margin: '10px 0' }}/><div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ fontSize: 11 }}>V. Lev pays Maya</span><b>$31.00</b></div></div><div style={{ marginTop: 11, background: '#181322', color: '#fff', padding: '10px 12px', borderRadius: 11, fontSize: 11, fontWeight: 700, display: 'flex', justifyContent: 'space-between' }}><span>Settle this trip</span><span>→</span></div></section>
    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '19px 2px 10px' }}><b>Balance board</b><small>$612 total</small></div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>{[['Anya','+$82.40','#ff83b0'],['Maya','+$31.00','#74e6ce'],['Toma','−$46.20','#bddb45'],['V. Lev','−$67.20','#9d8cff']].map(p=><div key={p[0]} style={{ ...fmt.box, boxShadow: 'none', background: p[2], padding: 11 }}><b style={{ fontSize: 11 }}>{p[0]}</b><div style={{ fontSize: 19, fontWeight: 700 }}>{p[1]}</div></div>)}</div>
    <div style={{ ...fmt.box, boxShadow: 'none', marginTop: 14, padding: '5px 12px' }}>{[['Casa Maré · dinner','Anya','$148'],['Apartment · Alfama','V. Lev','$324'],['Carris transit cards','Maya','$28']].map((r,i)=><div key={r[0]} style={{ display: 'grid', gridTemplateColumns: '1fr 55px 46px', padding: '10px 0', borderBottom: i<2?'1px solid #ded9e8':0, fontSize: 10 }}><b>{r[0]}</b><span>{r[1]}</span><b>{r[2]}</b></div>)}</div>
    <FinNav active={1} color="#181322" labels={['Groups','Trip','Activity','You']} />
  </div>;
}

function FinancialApps() {
  return <DesignCanvas>
    <DCSection id="financial-everyday" title="Financial Apps — Everyday Money"
      subtitle="Four mobile-first ways to make everyday money visible: envelopes, a cash calendar, household planning, and social expense splitting.">
      <DCArtboard id="fin-centsible" label="01 · Centsible · Envelope Budget" width={FM_AW} height={FM_AH}><FinPhone><FinCentsibleMobile /></FinPhone></DCArtboard>
      <DCArtboard id="fin-monthline" label="02 · Monthline · Cash Calendar" width={FM_AW} height={FM_AH}><FinPhone><FinMonthlineMobile /></FinPhone></DCArtboard>
      <DCArtboard id="fin-common" label="03 · Common Ground · Household" width={FM_AW} height={FM_AH}><FinPhone><FinCommonMobile /></FinPhone></DCArtboard>
      <DCArtboard id="fin-tab" label="04 · Tab! · Split Expenses" width={FM_AW} height={FM_AH}><FinPhone><FinTabMobile /></FinPhone></DCArtboard>
    </DCSection>
    {window.FinancialPlanningSection ? <window.FinancialPlanningSection /> : null}
    {window.FinancialSpecialistSection ? <window.FinancialSpecialistSection /> : null}
  </DesignCanvas>;
}

const financialRoot = ReactDOM.createRoot(document.getElementById('root'));
financialRoot.render(<FinancialApps />);
