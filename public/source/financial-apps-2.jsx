// Financial apps — planning, payoff, wealth, and specialist mobile tools.

const F2_W = 402;
const F2_H = 874;
const F2_AW = 462;
const F2_AH = 920;

function F2Phone({ children, dark = false }) {
  return <div style={{ width: F2_AW, height: F2_AH, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <IOSDevice width={F2_W} height={F2_H} dark={dark}>{children}</IOSDevice>
  </div>;
}

const F2Progress = ({ value, color, track = '#e8e9ed', height = 7 }) => <div style={{ height, borderRadius: height, background: track, overflow: 'hidden' }}><div style={{ width: `${value}%`, height: '100%', borderRadius: height, background: color }} /></div>;

const F2Nav = ({ active = 0, color = '#fff', muted = '#757d8a', dark = false, labels = ['Today','Plan','Learn','You'] }) => <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', justifyContent: 'space-around', padding: '11px 13px 30px', background: dark ? 'rgba(11,13,18,.95)' : 'rgba(255,255,255,.95)', borderTop: `1px solid ${dark?'rgba(255,255,255,.08)':'#e8e9ed'}`, backdropFilter: 'blur(20px)', zIndex: 5 }}>{labels.map((x,i)=><div key={x} style={{ color: i===active?color:muted, fontSize: 9, fontWeight: 700, textAlign: 'center', minWidth: 54 }}><div style={{ fontSize: 17, lineHeight: 1.25 }}>{['●','◎','▦','◒'][i]}</div>{x}</div>)}</div>;

// 05 — RETIREMENT PLANNER. Editorial, spacious, scenario-led.
function FinNorthstarMobile() {
  const f2n = {
    root: { width: '100%', height: '100%', background: '#e7f0f8', color: '#102840', fontFamily: '"DM Sans", sans-serif', padding: '55px 18px 89px', position: 'relative', overflow: 'hidden' },
    card: { background: '#fff', borderRadius: 20, padding: 16, boxShadow: '0 9px 24px rgba(16,40,64,.06)' },
  };
  return <div style={f2n.root}>
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><div><small style={{ letterSpacing: '.13em', color: '#668097' }}>NORTHSTAR</small><div style={{ fontFamily: '"DM Serif Display"', fontSize: 26 }}>Your future, in view.</div></div><span style={{ width: 37, height: 37, borderRadius: '50%', border: '1px solid #9eb4c6', display: 'grid', placeItems: 'center' }}>MK</span></header>
    <section style={{ ...f2n.card, background: '#102840', color: '#fff', marginTop: 18 }}><small style={{ color: '#8fabc0' }}>PROJECTED AT AGE 62</small><div style={{ fontFamily: '"DM Serif Display"', fontSize: 49, marginTop: 7 }}>$1.84m</div><div style={{ display: 'flex', justifyContent: 'space-between', color: '#a8bece', fontSize: 11 }}><span>$6,420 / month</span><span style={{ color: '#8ee1b3' }}>On track · 84%</span></div><div style={{ height: 105, display: 'flex', alignItems: 'flex-end', gap: 4, marginTop: 18 }}>{[15,18,22,25,29,34,39,45,52,59,67,76,86,98].map((x,i)=><i key={i} style={{ flex: 1, height: `${x}%`, borderRadius: '6px 6px 0 0', background: i>10?'#8ee1b3':'#557086' }}/>)}</div><div style={{ display: 'flex', justifyContent: 'space-between', color: '#7792a8', fontSize: 9, marginTop: 6 }}><span>NOW · 34</span><span>AGE 62</span></div></section>
    <div style={{ margin: '18px 2px 10px', display: 'flex', justifyContent: 'space-between' }}><b>Try a life change</b><small style={{ color: '#54718a' }}>Live scenarios</small></div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 9 }}>{[['Retire at 60','−$310k','Two years earlier'],['Work 4 days','−$126k','Starting next year'],['Move to Lisbon','+$92k','At age 52'],['Save $220 more','+$184k','Every month']].map((x,i)=><div key={x[0]} style={f2n.card}><span style={{ display: 'inline-grid', placeItems: 'center', width: 27, height: 27, borderRadius: 9, background: ['#dbe6ff','#efe0ff','#d7f1e3','#f6e6c8'][i] }}>{['◷','◐','⌂','+'][i]}</span><b style={{ display: 'block', fontSize: 12, marginTop: 9 }}>{x[0]}</b><strong style={{ display: 'block', fontSize: 18, marginTop: 3, color: x[1][0]==='+'?'#18754c':'#102840' }}>{x[1]}</strong><small style={{ color: '#7890a3' }}>{x[2]}</small></div>)}</div>
    <div style={{ ...f2n.card, marginTop: 12, display: 'flex', gap: 12, alignItems: 'center' }}><span style={{ width: 36, height: 36, background: '#f1d98b', borderRadius: '50%', display: 'grid', placeItems: 'center' }}>✦</span><div style={{ flex: 1 }}><b style={{ fontSize: 12 }}>One small move</b><small style={{ display: 'block', color: '#7890a3' }}>Raise your pension by 1% →</small></div><b style={{ fontSize: 11 }}>+$74k</b></div>
    <F2Nav active={1} color="#102840" muted="#9aaaB7" labels={['Today','Future','Scenarios','You']} />
  </div>;
}

// 06 — DEBT PAYOFF. A game board where milestones matter more than shame.
function FinSnowballMobile() {
  const f2s = {
    root: { width: '100%', height: '100%', background: '#1745e8', color: '#fff', fontFamily: '"Space Grotesk", sans-serif', padding: '54px 17px 90px', position: 'relative', overflow: 'hidden' },
    panel: { background: '#f7f5ee', color: '#10131b', border: '2px solid #10131b', borderRadius: 20, boxShadow: '4px 4px 0 #10131b' },
  };
  return <div style={f2s.root}>
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><b style={{ fontSize: 21 }}>SNOWBALL<span style={{ color: '#d8ff38' }}>↘</span></b><span style={{ border: '1px solid rgba(255,255,255,.5)', borderRadius: 999, padding: '6px 9px', fontSize: 9 }}>🔥 9 MONTH STREAK</span></header>
    <div style={{ marginTop: 21 }}><small style={{ color: '#a9baf7', fontWeight: 700 }}>PAYOFF QUEST · LEVEL 04</small><h1 style={{ margin: '5px 0 0', fontSize: 38, lineHeight: 1, letterSpacing: '-.055em' }}>Next stop:<br/>Card freedom.</h1></div>
    <section style={{ ...f2s.panel, marginTop: 17, padding: 15 }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><div><small>VIOLET CARD</small><div style={{ fontSize: 28, fontWeight: 700 }}>$1,820 <small style={{ color: '#727681' }}>left</small></div></div><span style={{ width: 45, height: 45, borderRadius: '50%', background: '#d8ff38', border: '2px solid #10131b', display: 'grid', placeItems: 'center', fontWeight: 700 }}>68%</span></div><F2Progress value={68} color="#1745e8" track="#d9d7d0" height={10}/><div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontSize: 10 }}><span>$3,880 crushed</span><b>4 payments to go</b></div></section>
    <div style={{ height: 195, position: 'relative', margin: '12px 8px 0' }}><div style={{ position: 'absolute', left: 28, top: 16, bottom: 17, width: 4, borderRadius: 4, background: 'rgba(255,255,255,.28)' }}/>{[['✓','Student loan','PAID · FEB 2026',0],['✓','Store card','PAID · APR 2026',52],['4','Violet card','$1,820 LEFT',104],['5','Car loan','LOCKED NEXT',156]].map((x,i)=><div key={x[1]} style={{ position: 'absolute', top: x[3], left: 7, right: 0, display: 'grid', gridTemplateColumns: '45px 1fr auto', alignItems: 'center' }}><span style={{ width: 44, height: 44, borderRadius: '50%', background: i<2?'#d8ff38':i===2?'#fff':'#466cf0', color: i<3?'#10131b':'#a9baf7', border: '3px solid #1745e8', display: 'grid', placeItems: 'center', fontWeight: 700 }}>{x[0]}</span><span><b style={{ fontSize: 12 }}>{x[1]}</b><small style={{ display: 'block', color: '#a9baf7' }}>{x[2]}</small></span>{i===2&&<b style={{ color: '#d8ff38', fontSize: 10 }}>ACTIVE</b>}</div>)}</div>
    <div style={{ ...f2s.panel, marginTop: 11, padding: 13, display: 'flex', alignItems: 'center', gap: 10 }}><span style={{ fontSize: 26 }}>⚡</span><span style={{ flex: 1 }}><b style={{ fontSize: 11 }}>BOOST AVAILABLE</b><small style={{ display: 'block', color: '#70737d' }}>Add $46 to finish 9 days early.</small></span><button style={{ background: '#d8ff38', border: '2px solid #10131b', borderRadius: 10, padding: '8px 9px', fontWeight: 700 }}>DO IT</button></div>
    <F2Nav active={0} color="#d8ff38" muted="#8198ef" dark labels={['Quest','Debts','Wins','Profile']} />
  </div>;
}

// 07 — GOAL PLANNER. A gentle future-self ritual with visual jars.
function FinFutureSelfMobile() {
  const f2f = {
    root: { width: '100%', height: '100%', background: '#f0eaff', color: '#2c2146', fontFamily: '"Manrope", sans-serif', padding: '55px 18px 90px', position: 'relative', overflow: 'hidden' },
    card: { background: 'rgba(255,255,255,.76)', border: '1px solid #d9cfee', borderRadius: 21, padding: 15 },
  };
  return <div style={f2f.root}>
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><div><small style={{ color: '#7e709d' }}>FRIDAY, MAY 15</small><div style={{ fontSize: 23, fontWeight: 800, letterSpacing: '-.04em' }}>Future, meet Maya.</div></div><span style={{ width: 38, height: 38, background: '#6d52a6', color: '#fff', borderRadius: 14, display: 'grid', placeItems: 'center' }}>✦</span></header>
    <section style={{ ...f2f.card, background: '#6d52a6', color: '#fff', marginTop: 18, position: 'relative', overflow: 'hidden' }}><div style={{ position: 'absolute', width: 130, height: 130, borderRadius: '50%', background: '#ffcfec', right: -35, bottom: -55, opacity: .32 }}/><small style={{ color: '#d6c7f2' }}>YOUR GOALS TOGETHER</small><div style={{ fontSize: 43, fontWeight: 800, letterSpacing: '-.055em', marginTop: 7 }}>$18,420</div><div style={{ fontSize: 11, color: '#d6c7f2' }}>of $32,500 · 57% funded</div><div style={{ marginTop: 17 }}><F2Progress value={57} color="#ffcfec" track="rgba(255,255,255,.15)" height={9}/></div></section>
    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '19px 2px 11px' }}><b>Your next chapters</b><small style={{ color: '#75658f' }}>3 active</small></div>
    <div style={{ display: 'grid', gap: 9 }}>{[['Lisbon month','Oct 2026','$3,840 of $5,200',74,'#ffb9de'],['A room of my own','Jun 2027','$8,280 of $18,000',46,'#aa9df0'],['Rainy day calm','Always ready','$6,300 of $9,300',68,'#91d7c4']].map((g,i)=><section key={g[0]} style={{ ...f2f.card, display: 'grid', gridTemplateColumns: '54px 1fr', gap: 13, alignItems: 'center' }}><div style={{ width: 52, height: 64, border: '2px solid #493766', borderRadius: '9px 9px 18px 18px', position: 'relative', overflow: 'hidden' }}><i style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: `${g[3]}%`, background: g[4] }}/><span style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', fontSize: 13 }}>{['✈','⌂','☂'][i]}</span></div><div><div style={{ display: 'flex', justifyContent: 'space-between' }}><b style={{ fontSize: 13 }}>{g[0]}</b><small>{g[1]}</small></div><div style={{ color: '#7f7099', fontSize: 10, margin: '4px 0 7px' }}>{g[2]}</div><F2Progress value={g[3]} color={g[4]} track="#e2daef"/></div></section>)}</div>
    <div style={{ ...f2f.card, marginTop: 13, background: '#ffe6f3', display: 'flex', gap: 10 }}><span>♡</span><div><b style={{ fontSize: 11 }}>A note from future you</b><small style={{ display: 'block', color: '#75658f', lineHeight: 1.4 }}>“The automatic $120 transfer is doing more than you think.”</small></div></div>
    <F2Nav active={1} color="#6d52a6" muted="#aa9dbf" labels={['Today','Goals','Rituals','You']} />
  </div>;
}

// 08 — PURCHASE COACH. A deliberately loud anti-impulse calculator.
function FinTrueCostMobile() {
  const f2t = {
    root: { width: '100%', height: '100%', background: '#ff4268', color: '#111', fontFamily: '"Archivo", sans-serif', padding: '54px 16px 26px', overflow: 'hidden' },
    black: { background: '#111', color: '#fff', borderRadius: 18, padding: 16 },
    receipt: { background: '#fff', border: '2px solid #111', padding: 15, boxShadow: '4px 4px 0 #111' },
  };
  return <div style={f2t.root}>
    <header style={{ display: 'flex', justifyContent: 'space-between' }}><b style={{ fontSize: 20, letterSpacing: '-.05em' }}>TRUE/COST</b><span style={{ border: '2px solid #111', padding: '5px 8px', fontSize: 9, fontWeight: 800 }}>PURCHASE CHECK</span></header>
    <div style={{ marginTop: 22 }}><small style={{ fontFamily: '"IBM Plex Mono", monospace' }}>YOU’RE THINKING ABOUT</small><h1 style={{ fontSize: 42, lineHeight: .92, letterSpacing: '-.06em', margin: '7px 0 0' }}>Those silver<br/>headphones.</h1></div>
    <section style={{ ...f2t.black, marginTop: 17 }}><div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}><div><small style={{ color: '#aaa' }}>STICKER PRICE</small><div style={{ fontSize: 38, fontWeight: 800 }}>$420</div></div><span style={{ fontSize: 34 }}>🎧</span></div><div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 12 }}><div style={{ background: '#272727', padding: 10, borderRadius: 11 }}><small style={{ color: '#999' }}>WORK TIME</small><b style={{ display: 'block', fontSize: 18 }}>14.6 hrs</b></div><div style={{ background: '#272727', padding: 10, borderRadius: 11 }}><small style={{ color: '#999' }}>GOAL DELAY</small><b style={{ display: 'block', fontSize: 18 }}>11 days</b></div></div></section>
    <section style={{ ...f2t.receipt, marginTop: 15 }}><div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: '"IBM Plex Mono", monospace', fontSize: 9 }}><b>THE WHOLE RECEIPT</b><span>#0842</span></div>{[['HEADPHONES','$420.00'],['CARD INTEREST · 3 MO','$18.42'],['OPPORTUNITY COST · 5Y','$142.70']].map(x=><div key={x[0]} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed #111', padding: '10px 0', fontFamily: '"IBM Plex Mono", monospace', fontSize: 10 }}><span>{x[0]}</span><b>{x[1]}</b></div>)}<div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 11 }}><b>TRUE COST</b><b style={{ fontSize: 24 }}>$581.12</b></div></section>
    <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 9 }}><button style={{ border: '2px solid #111', background: '#fff', padding: 13, fontWeight: 800, boxShadow: '3px 3px 0 #111' }}>WAIT 48 HOURS</button><button style={{ border: '2px solid #111', background: '#dfff3f', padding: 13, fontWeight: 800, boxShadow: '3px 3px 0 #111' }}>I STILL WANT IT</button></div>
    <div style={{ marginTop: 17, fontFamily: '"IBM Plex Mono", monospace', fontSize: 9, display: 'flex', justifyContent: 'space-between' }}><b>67% OF CHECKS END IN “WAIT”</b><span>NO SHAME. JUST CLARITY.</span></div>
    <div style={{ marginTop: 17, border: '2px solid #111', padding: 13, background: 'rgba(255,255,255,.16)' }}><b style={{ fontSize: 11 }}>OR KEEP THE $420</b><div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 9 }}><div><small style={{ fontFamily: '"IBM Plex Mono", monospace' }}>BUFFER</small><strong style={{ display: 'block', fontSize: 19 }}>+28 days</strong></div><div><small style={{ fontFamily: '"IBM Plex Mono", monospace' }}>FIVE-YEAR VALUE</small><strong style={{ display: 'block', fontSize: 19 }}>$561</strong></div></div></div>
  </div>;
}

// 09 — TREASURY. Premium dark operational finance for a small company.
function FinHalidMobile() {
  const f2h = {
    root: { width: '100%', height: '100%', background: '#101319', color: '#f3f5f4', fontFamily: '"Manrope", sans-serif', padding: '54px 17px 89px', position: 'relative', overflow: 'hidden' },
    card: { background: '#181d24', border: '1px solid #293039', borderRadius: 17, padding: 14 },
  };
  return <div style={f2h.root}>
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><b style={{ fontSize: 20 }}>halid<span style={{ color: '#6af0b6' }}>.</span></b><span style={{ border: '1px solid #303842', borderRadius: 999, padding: '6px 9px', fontSize: 9 }}>LINEAR LABS ▾</span></header>
    <div style={{ marginTop: 22 }}><small style={{ color: '#77818d' }}>AVAILABLE CASH</small><div style={{ fontSize: 43, fontWeight: 700, letterSpacing: '-.055em' }}>$2,418,690</div><div style={{ color: '#6af0b6', fontSize: 11, marginTop: 4 }}>↑ $84,240 this month</div></div>
    <section style={{ ...f2h.card, marginTop: 17 }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><b style={{ fontSize: 12 }}>13-month runway</b><small style={{ color: '#77818d' }}>Base case</small></div><div style={{ height: 118, display: 'flex', alignItems: 'flex-end', gap: 5, marginTop: 14 }}>{[92,88,84,80,75,70,66,61,56,50,44,38,31].map((x,i)=><i key={i} style={{ flex: 1, height: `${x}%`, background: i<9?'#6af0b6':i<11?'#d4bd65':'#e16d7d', opacity: .82, borderRadius: '4px 4px 1px 1px' }}/>)}</div><div style={{ display: 'flex', justifyContent: 'space-between', color: '#66717d', fontSize: 9, marginTop: 6 }}><span>MAY 26</span><span>BREAKEVEN · JAN 27</span><span>MAY 27</span></div></section>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 9, marginTop: 10 }}>{[['Net burn','$183k','−8% vs plan','#6af0b6'],['Receivables','$412k','7 invoices','#8da6ff']].map(x=><div key={x[0]} style={f2h.card}><small style={{ color: '#77818d' }}>{x[0]}</small><div style={{ fontSize: 23, fontWeight: 700, marginTop: 5 }}>{x[1]}</div><small style={{ color: x[3] }}>{x[2]}</small></div>)}</div>
    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '18px 2px 9px' }}><b style={{ fontSize: 13 }}>Needs attention</b><small style={{ color: '#77818d' }}>3 items</small></div>
    {[['!','Nimbus invoice is 9 days late','$48,200','#e16d7d'],['↗','Move idle cash to 4.6% yield','+$3,940/mo','#6af0b6'],['◷','Payroll due Friday','$164,820','#8da6ff']].map(x=><div key={x[1]} style={{ ...f2h.card, padding: 12, marginBottom: 8, display: 'grid', gridTemplateColumns: '34px 1fr auto', gap: 9, alignItems: 'center' }}><span style={{ width: 32, height: 32, borderRadius: 10, background: x[3], color: '#101319', display: 'grid', placeItems: 'center', fontWeight: 800 }}>{x[0]}</span><span><b style={{ fontSize: 11 }}>{x[1]}</b><small style={{ display: 'block', color: '#77818d' }}>Tap to review</small></span><b style={{ fontSize: 10 }}>{x[2]}</b></div>)}
    <F2Nav color="#6af0b6" muted="#59636e" dark labels={['Overview','Forecast','Move','Settings']} />
  </div>;
}

// 10 — FREELANCER TAX VAULT. Utilitarian, deadline-driven, no ambiguity.
function FinSoloTaxMobile() {
  const f2x = {
    root: { width: '100%', height: '100%', background: '#fff', color: '#101010', fontFamily: '"IBM Plex Mono", monospace', padding: '54px 16px 25px', overflow: 'hidden' },
    rule: { border: '2px solid #111', padding: 13 },
  };
  return <div style={f2x.root}>
    <header style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '3px solid #111', paddingBottom: 12 }}><b>SOLO/TAX</b><span style={{ fontSize: 9 }}>TAX YEAR 2026 ▾</span></header>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', padding: '18px 0 13px' }}><div><small>Q2 ESTIMATED PAYMENT</small><div style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-.06em' }}>$3,842</div></div><span style={{ background: '#ed3730', color: '#fff', padding: '7px', fontSize: 9, fontWeight: 700 }}>DUE JUN 15</span></div>
    <section style={{ ...f2x.rule, background: '#f3f3f0' }}><div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10 }}><b>TAX VAULT</b><span>92% READY</span></div><div style={{ fontSize: 30, fontWeight: 700, marginTop: 8 }}>$3,536.40</div><div style={{ marginTop: 11 }}><F2Progress value={92} color="#ed3730" track="#d5d5d1" height={10}/></div><div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 7, fontSize: 9 }}><span>AUTO-SAVING 28% OF INCOME</span><b>$305.60 TO GO</b></div></section>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', marginTop: 11 }}>{[['GROSS INCOME','$28,420','YTD'],['WRITE-OFFS','$6,840','24% OF INCOME'],['TAX RESERVED','$7,958','ON TRACK'],['NEXT TRANSFER','$364','MAY 22']].map((x,i)=><div key={x[0]} style={{ border: '1px solid #111', borderLeft: i%2?0:'1px solid #111', borderTop: i>1?0:'1px solid #111', padding: 12 }}><small style={{ fontSize: 8 }}>{x[0]}</small><div style={{ fontSize: 19, fontWeight: 700, marginTop: 4 }}>{x[1]}</div><small style={{ color: i===2?'#19804f':'#666', fontSize: 8 }}>{x[2]}</small></div>)}</div>
    <div style={{ marginTop: 18, display: 'flex', justifyContent: 'space-between' }}><b style={{ fontSize: 11 }}>RECENT WRITE-OFFS</b><small>VIEW ALL →</small></div>
    {[['Adobe Creative Cloud','SOFTWARE','$59.99'],['Lisbon client travel','TRAVEL','$842.10'],['Coworking · May','OFFICE','$320.00'],['Nørr Audio monitor','EQUIPMENT','$618.00']].map((x,i)=><div key={x[0]} style={{ display: 'grid', gridTemplateColumns: '1fr 75px 66px', borderBottom: '1px solid #111', padding: '11px 0', fontSize: 9 }}><b>{x[0]}</b><span style={{ color: '#666' }}>{x[1]}</span><b style={{ textAlign: 'right' }}>{x[2]}</b></div>)}
    <button style={{ width: '100%', marginTop: 17, background: '#111', color: '#fff', border: 0, padding: 13, fontFamily: 'inherit', fontWeight: 700 }}>SCAN A RECEIPT ＋</button>
  </div>;
}

// 11 — ETHICAL PORTFOLIO. Impact data is as prominent as returns.
function FinSignalMobile() {
  const f2i = {
    root: { width: '100%', height: '100%', background: '#d9f35a', color: '#13251d', fontFamily: '"Inter Tight", sans-serif', padding: '54px 16px 88px', position: 'relative', overflow: 'hidden' },
    card: { background: '#f5f8e9', border: '1.5px solid #13251d', borderRadius: 17, padding: 14 },
  };
  return <div style={f2i.root}>
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><b style={{ fontSize: 22 }}>SIGNAL<span style={{ fontSize: 11 }}> / IMPACT</span></b><span style={{ width: 35, height: 35, background: '#13251d', color: '#d9f35a', borderRadius: '50%', display: 'grid', placeItems: 'center' }}>AR</span></header>
    <div style={{ marginTop: 21 }}><small>PORTFOLIO VALUE</small><div style={{ fontSize: 45, fontWeight: 800, letterSpacing: '-.06em' }}>$48,204</div><div style={{ fontSize: 11 }}><b>+$4,820 · 11.1%</b> all time</div></div>
    <section style={{ ...f2i.card, background: '#13251d', color: '#fff', marginTop: 17 }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><b style={{ fontSize: 12 }}>Your impact signal</b><span style={{ color: '#d9f35a', fontWeight: 700 }}>A−</span></div><div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 7, marginTop: 14 }}>{[['2.4t','CO₂ avoided'],['18%','women-led'],['0','fossil fuel']].map(x=><div key={x[1]} style={{ background: '#20392f', padding: 9, borderRadius: 10 }}><b style={{ color: '#d9f35a', fontSize: 17 }}>{x[0]}</b><small style={{ display: 'block', color: '#8da79b', fontSize: 8 }}>{x[1]}</small></div>)}</div><div style={{ marginTop: 13, color: '#99aea4', fontSize: 10, lineHeight: 1.4 }}>Your holdings fund 34% less carbon than the global index.</div></section>
    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '18px 2px 10px' }}><b>What you own</b><small>7 holdings</small></div>
    <section style={f2i.card}>{[['SUN','Solar transition','34%','+14.2%'],['WTR','Clean water','26%','+8.7%'],['CIR','Circular materials','18%','+12.4%'],['BND','Green bonds','14%','+3.8%']].map((x,i)=><div key={x[0]} style={{ display: 'grid', gridTemplateColumns: '39px 1fr 44px 52px', gap: 7, alignItems: 'center', padding: '10px 0', borderBottom: i<3?'1px solid #cdd3bd':0 }}><span style={{ width: 37, height: 37, background: ['#ffd06a','#77d7d0','#da9de8','#9dc58c'][i], borderRadius: 11, display: 'grid', placeItems: 'center', fontSize: 9, fontWeight: 800 }}>{x[0]}</span><span><b style={{ fontSize: 11 }}>{x[1]}</b><small style={{ display: 'block', color: '#63756b' }}>Verified impact</small></span><b style={{ fontSize: 10 }}>{x[2]}</b><b style={{ fontSize: 10, color: '#26764f' }}>{x[3]}</b></div>)}</section>
    <div style={{ ...f2i.card, marginTop: 12, background: '#fff', display: 'flex', gap: 9 }}><span>◎</span><div><b style={{ fontSize: 11 }}>Vote open: Clean Water Fund</b><small style={{ display: 'block' }}>Choose its 2027 engagement priority →</small></div></div>
    <F2Nav color="#d9f35a" muted="#6b8076" dark labels={['Portfolio','Impact','Discover','You']} />
  </div>;
}

// 12 — SUBSCRIPTION GARDEN. Recurring costs become plants to water or prune.
function FinSubscapeMobile() {
  const f2g = {
    root: { width: '100%', height: '100%', background: '#0e251d', color: '#eef7e7', fontFamily: '"Manrope", sans-serif', padding: '54px 17px 88px', position: 'relative', overflow: 'hidden' },
    card: { background: '#18352a', border: '1px solid #2c4b3e', borderRadius: 18, padding: 13 },
  };
  const plants = [['Adobe','$59.99','28d',74,'#b794f6'],['Nova Gym','$64','5d',92,'#f4d06f'],['Mubi','$14.99','12d',48,'#e78b8b'],['Notion','$10','21d',65,'#7fd4b2']];
  return <div style={f2g.root}>
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><div><small style={{ color: '#86a396' }}>YOUR RECURRING GARDEN</small><div style={{ fontFamily: '"DM Serif Display"', fontSize: 27 }}>Subscape</div></div><span style={{ width: 36, height: 36, borderRadius: '50%', background: '#d8f48b', color: '#0e251d', display: 'grid', placeItems: 'center' }}>＋</span></header>
    <section style={{ ...f2g.card, marginTop: 17, background: '#d8f48b', color: '#0e251d' }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><div><small>MONTHLY SOIL COST</small><div style={{ fontSize: 39, fontWeight: 800, letterSpacing: '-.055em' }}>$238.42</div><div style={{ fontSize: 10 }}>12 active subscriptions</div></div><div style={{ width: 67, height: 67, borderRadius: '50%', background: 'conic-gradient(#0e251d 0 62%, rgba(14,37,29,.18) 62%)', display: 'grid', placeItems: 'center' }}><span style={{ width: 50, height: 50, background: '#d8f48b', borderRadius: '50%', display: 'grid', placeItems: 'center', fontWeight: 800 }}>62%</span></div></div></section>
    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '18px 2px 10px' }}><b>Your garden</b><small style={{ color: '#86a396' }}>Health · 78</small></div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 9 }}>{plants.map((p,i)=><section key={p[0]} style={f2g.card}><div style={{ height: 70, display: 'grid', placeItems: 'end center', position: 'relative' }}><div style={{ width: 48, height: 48, borderRadius: i%2?'52% 48% 46% 54%':'50% 50% 20% 50%', background: p[4], transform: `rotate(${i*18-18}deg)`, boxShadow: 'inset 0 0 0 5px rgba(255,255,255,.1)' }}/><div style={{ position: 'absolute', bottom: -2, width: 62, height: 16, borderRadius: '50%', background: '#091a14' }}/></div><div style={{ marginTop: 10, display: 'flex', justifyContent: 'space-between' }}><b style={{ fontSize: 11 }}>{p[0]}</b><b style={{ fontSize: 11 }}>{p[1]}</b></div><small style={{ color: '#86a396' }}>Renews in {p[2]}</small><div style={{ marginTop: 9 }}><F2Progress value={p[3]} color={p[4]} track="#294a3c" height={5}/></div></section>)}</div>
    <section style={{ ...f2g.card, marginTop: 12, borderColor: '#e68f78', display: 'grid', gridTemplateColumns: '37px 1fr auto', gap: 9, alignItems: 'center' }}><span style={{ width: 36, height: 36, background: '#e68f78', color: '#0e251d', borderRadius: 12, display: 'grid', placeItems: 'center' }}>✂</span><span><b style={{ fontSize: 11 }}>Ready to prune?</b><small style={{ display: 'block', color: '#a8bdb4' }}>3 services unused for 45+ days</small></span><b style={{ color: '#e68f78', fontSize: 10 }}>SAVE $41 →</b></section>
    <div style={{ marginTop: 12, color: '#86a396', fontSize: 10, textAlign: 'center' }}>You’ve pruned $684/year since planting this garden.</div>
    <F2Nav active={0} color="#d8f48b" muted="#587268" dark labels={['Garden','Calendar','Prune','You']} />
  </div>;
}

function FinancialPlanningSection() {
  return <DCSection id="financial-planning" title="Financial Apps — Planning & Payoff"
    subtitle="Four mobile concepts for decisions that span months or decades: retirement scenarios, debt payoff, savings goals, and purchase friction.">
    <DCArtboard id="fin-northstar" label="05 · Northstar · Retirement" width={F2_AW} height={F2_AH}><F2Phone><FinNorthstarMobile /></F2Phone></DCArtboard>
    <DCArtboard id="fin-snowball" label="06 · Snowball · Debt Quest" width={F2_AW} height={F2_AH}><F2Phone dark><FinSnowballMobile /></F2Phone></DCArtboard>
    <DCArtboard id="fin-future-self" label="07 · Future Self · Goal Planner" width={F2_AW} height={F2_AH}><F2Phone><FinFutureSelfMobile /></F2Phone></DCArtboard>
    <DCArtboard id="fin-true-cost" label="08 · True/Cost · Purchase Coach" width={F2_AW} height={F2_AH}><F2Phone><FinTrueCostMobile /></F2Phone></DCArtboard>
  </DCSection>;
}

function FinancialSpecialistSection() {
  return <DCSection id="financial-specialist" title="Financial Apps — Work & Wealth"
    subtitle="Four specialist mobile products: startup treasury, freelancer taxes, values-led investing, and a subscription-management garden.">
    <DCArtboard id="fin-halid" label="09 · Halid · Treasury" width={F2_AW} height={F2_AH}><F2Phone dark><FinHalidMobile /></F2Phone></DCArtboard>
    <DCArtboard id="fin-solo-tax" label="10 · Solo/Tax · Freelancer Vault" width={F2_AW} height={F2_AH}><F2Phone><FinSoloTaxMobile /></F2Phone></DCArtboard>
    <DCArtboard id="fin-signal" label="11 · Signal · Ethical Portfolio" width={F2_AW} height={F2_AH}><F2Phone><FinSignalMobile /></F2Phone></DCArtboard>
    <DCArtboard id="fin-subscape" label="12 · Subscape · Subscription Garden" width={F2_AW} height={F2_AH}><F2Phone dark><FinSubscapeMobile /></F2Phone></DCArtboard>
  </DCSection>;
}

Object.assign(window, { FinancialPlanningSection, FinancialSpecialistSection });
