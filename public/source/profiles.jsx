// 12 profile + product detail pages — variety across people-profiles and PDPs.

const GW = 1280;
const GH = 800;

// ─────────────────────────────────────────────────────────────────────────────
// 1. SOCIAL PROFILE — Threads/X-like, slow-media writer
// ─────────────────────────────────────────────────────────────────────────────
function SocialProfile() {
  const s = {
    root: { width: GW, height: GH, background: '#f6f7f4', color: '#0a0a0a',
      fontFamily: '"Inter Tight", system-ui, sans-serif',
      display: 'grid', gridTemplateColumns: '220px 1fr 320px' },
    side: { padding: '24px 18px', borderRight: '1px solid #ececea',
      display: 'flex', flexDirection: 'column', gap: 18 },
    brand: { fontFamily: '"Fraunces", serif', fontSize: 22,
      fontStyle: 'italic', fontWeight: 500, letterSpacing: '-0.02em' },
    navItem: (active) => ({ display: 'flex', alignItems: 'center', gap: 12,
      padding: '7px 8px', borderRadius: 8, fontSize: 14,
      fontWeight: active ? 600 : 400, color: active ? '#0a0a0a' : '#5a5a52',
      background: active ? '#f0eee9' : 'transparent' }),
    navIcon: { width: 16, fontSize: 14 },
    postBtn: { background: '#0a0a0a', color: '#fff', padding: '12px 0',
      borderRadius: 999, textAlign: 'center', fontWeight: 600, fontSize: 14,
      marginTop: 'auto' },
    meDot: { display: 'flex', alignItems: 'center', gap: 10,
      paddingTop: 14, borderTop: '1px solid #ececea' },
    meAv: { width: 32, height: 32, borderRadius: '50%',
      background: 'linear-gradient(135deg, #c0d0e8, #2a5a8a)' },
    main: { display: 'flex', flexDirection: 'column', overflow: 'hidden' },
    banner: { height: 168,
      background: 'linear-gradient(120deg, #1f2418 0%, #4a4f3a 40%, #88a8a0 100%)',
      position: 'relative' },
    avatar: { position: 'absolute', left: 28, bottom: -36, width: 92, height: 92,
      borderRadius: '50%', border: '4px solid #f6f7f4',
      background: 'linear-gradient(135deg, #c8d8d0, #2a4a44)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#f6f7f4', fontFamily: '"Fraunces", serif',
      fontSize: 34, fontWeight: 500 },
    head: { padding: '12px 28px 0', display: 'flex',
      justifyContent: 'flex-end', gap: 8 },
    btn: { padding: '7px 14px', border: '1px solid #d8d4cc',
      borderRadius: 999, fontSize: 13, fontWeight: 600, background: '#fff' },
    btnPrime: { padding: '7px 16px', border: 'none', background: '#0a0a0a',
      color: '#fff', borderRadius: 999, fontSize: 13, fontWeight: 600 },
    bio: { padding: '24px 28px 14px' },
    name: { fontFamily: '"Fraunces", serif', fontSize: 30,
      fontWeight: 500, letterSpacing: '-0.02em', margin: 0 },
    handle: { fontSize: 14, color: '#7a7a72', marginTop: 2 },
    bioText: { fontSize: 14, lineHeight: 1.55, marginTop: 12, maxWidth: 540 },
    meta: { display: 'flex', gap: 18, fontSize: 13, color: '#5a5a52',
      marginTop: 10 },
    stats: { display: 'flex', gap: 22, marginTop: 10, fontSize: 13 },
    statN: { fontWeight: 700, color: '#0a0a0a' },
    tabs: { display: 'flex', gap: 0, padding: '0 28px',
      borderBottom: '1px solid #ececea', fontSize: 13, fontWeight: 600 },
    tab: (a) => ({ padding: '12px 18px',
      borderBottom: a ? '2px solid #0a0a0a' : '2px solid transparent',
      color: a ? '#0a0a0a' : '#7a7a72' }),
    feed: { padding: '4px 28px', overflowY: 'auto', flex: 1 },
    post: { padding: '18px 0', borderBottom: '1px solid #ececea',
      display: 'grid', gridTemplateColumns: '40px 1fr', gap: 12 },
    pAv: { width: 40, height: 40, borderRadius: '50%',
      background: 'linear-gradient(135deg, #c8d8d0, #2a4a44)' },
    pH: { display: 'flex', alignItems: 'center', gap: 6, fontSize: 13 },
    pHN: { fontWeight: 700 },
    pHH: { color: '#7a7a72' },
    pBody: { fontFamily: '"Fraunces", serif', fontSize: 17,
      lineHeight: 1.45, marginTop: 6, color: '#0a0a0a',
      letterSpacing: '-0.005em' },
    pImg: (g) => ({ marginTop: 12, width: '100%', height: 200,
      borderRadius: 14, background: g, border: '1px solid #ececea' }),
    pAct: { display: 'flex', gap: 22, marginTop: 12, fontSize: 12,
      color: '#7a7a72', alignItems: 'center' },
    rail: { padding: '24px 22px', borderLeft: '1px solid #ececea',
      display: 'flex', flexDirection: 'column', gap: 18, fontSize: 13 },
    railH: { fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
      textTransform: 'uppercase', color: '#7a7a72' },
    issue: { padding: 14, background: '#fff',
      border: '1px solid #ececea', borderRadius: 10 },
    iLbl: { fontSize: 10, color: '#2a5a8a', letterSpacing: '0.14em',
      textTransform: 'uppercase', fontWeight: 700 },
    iT: { fontFamily: '"Fraunces", serif', fontSize: 17,
      fontStyle: 'italic', margin: '4px 0 8px', lineHeight: 1.2 },
    iM: { fontSize: 12, color: '#7a7a72' },
    sug: { display: 'flex', gap: 10, alignItems: 'center' },
    sAv: (g) => ({ width: 34, height: 34, borderRadius: '50%', background: g, flex: 'none' }),
    sN: { fontWeight: 700, fontSize: 13 },
    sH: { fontSize: 11, color: '#7a7a72' },
    follow: { marginLeft: 'auto', padding: '4px 12px',
      background: '#0a0a0a', color: '#fff', borderRadius: 999,
      fontSize: 11, fontWeight: 600 },
  };
  return (
    <div style={s.root}>
      <div style={s.side}>
        <div style={s.brand}>quires</div>
        <div style={s.navItem(false)}><span style={s.navIcon}>⌂</span>Home</div>
        <div style={s.navItem(false)}><span style={s.navIcon}>⌕</span>Discover</div>
        <div style={s.navItem(false)}><span style={s.navIcon}>♡</span>Saved</div>
        <div style={s.navItem(true)}><span style={s.navIcon}>◐</span>Profile</div>
        <div style={s.navItem(false)}><span style={s.navIcon}>✉</span>Letters · 2</div>
        <div style={s.navItem(false)}><span style={s.navIcon}>⚙</span>Settings</div>
        <div style={s.postBtn}>+ New post</div>
        <div style={s.meDot}>
          <div style={s.meAv}></div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 13 }}>You</div>
            <div style={{ fontSize: 11, color: '#7a7a72' }}>@jl</div>
          </div>
        </div>
      </div>
      <div style={s.main}>
        <div style={s.banner}>
          <div style={s.avatar}>A</div>
        </div>
        <div style={s.head}>
          <span style={s.btn}>Message</span>
          <span style={s.btn}>•••</span>
          <span style={s.btnPrime}>✓ Following</span>
        </div>
        <div style={s.bio}>
          <h2 style={s.name}>Anya Iqbal</h2>
          <div style={s.handle}>@anyaiqbal · she/her</div>
          <div style={s.bioText}>
            Editor at <b>The Quiet Times</b>. Writing about cities, slowness,
            and the things we miss when we're optimising. Issue 042 out now.
          </div>
          <div style={s.meta}>
            <span>📍 Lisbon &amp; London</span>
            <span>🔗 thequiet.co/anya</span>
            <span>◷ Joined March 2021</span>
          </div>
          <div style={s.stats}>
            <span><span style={s.statN}>284</span> following</span>
            <span><span style={s.statN}>18.4k</span> followers</span>
            <span><span style={s.statN}>1,203</span> posts</span>
          </div>
        </div>
        <div style={s.tabs}>
          <div style={s.tab(true)}>Posts</div>
          <div style={s.tab()}>Letters</div>
          <div style={s.tab()}>Replies</div>
          <div style={s.tab()}>Media</div>
          <div style={s.tab()}>Likes · 482</div>
        </div>
        <div style={s.feed}>
          <div style={s.post}>
            <div style={s.pAv}></div>
            <div>
              <div style={s.pH}>
                <span style={s.pHN}>Anya Iqbal</span>
                <span style={s.pHH}>@anyaiqbal · 4h</span>
              </div>
              <div style={s.pBody}>
                Spent the morning at the market in Alfama. The fishmonger
                remembered my order from August. Cities still know us, when we
                let them.
              </div>
              <div style={s.pAct}>♡ 412 · 💬 38 · ↗ 14 · ⌥ Save</div>
            </div>
          </div>
          <div style={s.post}>
            <div style={s.pAv}></div>
            <div>
              <div style={s.pH}>
                <span style={s.pHN}>Anya Iqbal</span>
                <span style={s.pHH}>@anyaiqbal · 1d</span>
              </div>
              <div style={s.pBody}>
                Issue 042 — "Long Afternoons" — is on press. Cover photograph
                by Maria Eklöf. Subscribers, yours ships Friday.
              </div>
              <div style={s.pImg('linear-gradient(180deg, #c0d0e8, #5a4a7a 50%, #0e1820)')}></div>
              <div style={s.pAct}>♡ 1.2k · 💬 84 · ↗ 92 · ⌥ Save</div>
            </div>
          </div>
        </div>
      </div>
      <div style={s.rail}>
        <div>
          <div style={s.railH}>Pinned · current issue</div>
          <div style={{ ...s.issue, marginTop: 8 }}>
            <div style={s.iLbl}>Issue 042 · Apr</div>
            <div style={s.iT}>Long Afternoons</div>
            <div style={s.iM}>14 essays on the slowness of spring. Free for subscribers.</div>
          </div>
        </div>
        <div>
          <div style={s.railH}>You might follow</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 10 }}>
            <div style={s.sug}>
              <div style={s.sAv('linear-gradient(135deg, #c8a8d8, #5a3a6a)')}></div>
              <div>
                <div style={s.sN}>Maya Khanna</div>
                <div style={s.sH}>Designer · Brooklyn</div>
              </div>
              <div style={s.follow}>+ Follow</div>
            </div>
            <div style={s.sug}>
              <div style={s.sAv('linear-gradient(135deg, #d4f0a8, #6aae42)')}></div>
              <div>
                <div style={s.sN}>Pace//Form</div>
                <div style={s.sH}>Run club</div>
              </div>
              <div style={s.follow}>+ Follow</div>
            </div>
            <div style={s.sug}>
              <div style={s.sAv('linear-gradient(135deg, #4cc8ff, #1a3cd9)')}></div>
              <div>
                <div style={s.sN}>V. Lev</div>
                <div style={s.sH}>Composer · Berlin</div>
              </div>
              <div style={s.follow}>+ Follow</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. DESIGNER PORTFOLIO PROFILE — editorial, big serif, work grid
// ─────────────────────────────────────────────────────────────────────────────
function PortfolioProfile() {
  const s = {
    root: { width: GW, height: GH, background: '#eef0eb', color: '#1a1a22',
      fontFamily: '"Inter Tight", system-ui, sans-serif',
      display: 'flex', flexDirection: 'column' },
    top: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '24px 56px', borderBottom: '1px solid rgba(0,0,0,0.08)' },
    brand: { fontFamily: '"Cormorant Garamond", serif', fontSize: 22,
      letterSpacing: '0.16em' },
    nav: { display: 'flex', gap: 32, fontSize: 12, fontWeight: 500,
      letterSpacing: '0.08em', textTransform: 'uppercase' },
    body: { flex: 1, display: 'grid', gridTemplateColumns: '1fr 1.5fr',
      gap: 56, padding: '48px 56px', minHeight: 0 },
    left: { display: 'flex', flexDirection: 'column', gap: 28 },
    avatar: { width: '100%', aspectRatio: '0.85',
      background: 'linear-gradient(160deg, #b8c4d0 0%, #2a4a44 60%, #1a2230 100%)',
      borderRadius: 2 },
    eyebrow: { fontSize: 10, letterSpacing: '0.3em',
      textTransform: 'uppercase', color: '#7a7a72' },
    name: { fontFamily: '"Cormorant Garamond", serif',
      fontSize: 56, fontWeight: 400, lineHeight: 0.98,
      letterSpacing: '-0.02em', margin: '12px 0 0' },
    role: { fontFamily: '"Cormorant Garamond", serif',
      fontStyle: 'italic', fontSize: 22, color: '#5a5a52',
      marginTop: 8, fontWeight: 400 },
    contactBtn: { display: 'inline-block', padding: '12px 22px',
      background: '#1a1a22', color: '#eef0eb',
      fontSize: 11, letterSpacing: '0.16em',
      textTransform: 'uppercase', fontWeight: 600, marginTop: 4 },
    right: { display: 'flex', flexDirection: 'column', gap: 28,
      overflowY: 'auto', minHeight: 0 },
    intro: { fontFamily: '"Cormorant Garamond", serif',
      fontSize: 26, lineHeight: 1.32, color: '#1a1a22',
      letterSpacing: '-0.01em', fontWeight: 400, maxWidth: 580 },
    meta: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24, paddingTop: 20, borderTop: '1px solid rgba(0,0,0,0.1)' },
    metaH: { fontSize: 10, letterSpacing: '0.2em',
      textTransform: 'uppercase', color: '#7a7a72', marginBottom: 8 },
    metaR: { fontSize: 13, lineHeight: 1.5, color: '#1a1a22' },
    workH: { display: 'flex', justifyContent: 'space-between',
      alignItems: 'baseline', paddingTop: 8 },
    workT: { fontFamily: '"Cormorant Garamond", serif',
      fontSize: 22, fontStyle: 'italic', fontWeight: 400 },
    workN: { fontSize: 11, letterSpacing: '0.2em',
      textTransform: 'uppercase', color: '#7a7a72' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 },
    work: { display: 'flex', flexDirection: 'column' },
    workImg: (g) => ({ width: '100%', aspectRatio: '0.82', background: g,
      borderRadius: 2 }),
    workCap: { display: 'flex', justifyContent: 'space-between',
      paddingTop: 8, fontSize: 11, color: '#5a5a52',
      borderBottom: '1px solid rgba(0,0,0,0.08)', paddingBottom: 8 },
    workTtl: { fontFamily: '"Cormorant Garamond", serif',
      fontSize: 16, fontStyle: 'italic', color: '#1a1a22' },
  };
  const works = [
    ['linear-gradient(135deg, #c8d8d0, #5a8a5a)', 'Maison Calva', 'Identity · 2024'],
    ['linear-gradient(135deg, #1f2418, #4a4f3a)', 'Werner Inst.', 'Wayfinding · 2024'],
    ['linear-gradient(135deg, #c8a8d8, #5a3a6a)', 'Tide', 'Brand system · 2023'],
    ['linear-gradient(135deg, #c0d0e8, #5a4a7a)', 'Press &amp; Pulp', 'Web · 2023'],
    ['linear-gradient(135deg, #2a4a44, #1a2230)', 'Atelier Form', 'SS26 lookbook · 2023'],
    ['linear-gradient(135deg, #4a5a6a, #1a2a3a)', 'The Quiet Times', 'Editorial · 2022'],
  ];
  return (
    <div style={s.root}>
      <div style={s.top}>
        <div style={s.brand}>M&middot;K STUDIO</div>
        <div style={s.nav}>
          <span>Work</span><span>About</span><span>Words</span><span>Index</span><span>Contact</span>
        </div>
        <div style={{ fontSize: 11, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: '#7a7a72' }}>2026 · Brooklyn</div>
      </div>
      <div style={s.body}>
        <div style={s.left}>
          <div style={s.avatar}></div>
          <div>
            <div style={s.eyebrow}>Selected · 2018 — present</div>
            <h1 style={s.name}>Maya<br/>Khanna</h1>
            <div style={s.role}>Independent designer &amp; art director</div>
          </div>
          <div style={s.contactBtn}>Book a call →</div>
        </div>
        <div style={s.right}>
          <p style={s.intro}>
            I work with editorial, fashion, and quiet cultural institutions
            on identity, type systems, and the long-form things in between.
            Currently taking commissions for late 2026.
          </p>
          <div style={s.meta}>
            <div>
              <div style={s.metaH}>Clients</div>
              <div style={s.metaR}>The Quiet Times · Werner Institute · Atelier Form · Maison Calva · Tide · Press &amp; Pulp</div>
            </div>
            <div>
              <div style={s.metaH}>Awards</div>
              <div style={s.metaR}>D&amp;AD Wood Pencil · 2024<br/>TDC Award · 2023<br/>Brand New '23 of '23</div>
            </div>
            <div>
              <div style={s.metaH}>Press</div>
              <div style={s.metaR}>It's Nice That · 2024<br/>Eye Magazine · 2023<br/>Untitled · 2022</div>
            </div>
          </div>
          <div style={s.workH}>
            <div style={s.workT}>Selected work</div>
            <div style={s.workN}>24 projects · index</div>
          </div>
          <div style={s.grid}>
            {works.map((w, i) => (
              <div key={i} style={s.work}>
                <div style={s.workImg(w[0])}></div>
                <div style={s.workCap}>
                  <span style={s.workTtl} dangerouslySetInnerHTML={{ __html: w[1] }}></span>
                </div>
                <div style={{ fontSize: 11, color: '#7a7a72', paddingTop: 6 }}>{w[2]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. CUSTOMER ACCOUNT — Atelier Form, orders + saved
// ─────────────────────────────────────────────────────────────────────────────
function CustomerAccount() {
  const s = {
    root: { width: GW, height: GH, background: '#eef0ed', color: '#1a1a22',
      fontFamily: '"Inter Tight", system-ui, sans-serif',
      display: 'flex', flexDirection: 'column' },
    top: { display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '20px 40px', borderBottom: '1px solid #1a1a22' },
    brand: { fontFamily: '"Archivo Black", sans-serif', fontSize: 20,
      letterSpacing: '-0.02em' },
    nav: { display: 'flex', gap: 28, fontSize: 12, fontWeight: 600,
      letterSpacing: '0.08em', textTransform: 'uppercase' },
    iconRow: { display: 'flex', gap: 14, fontSize: 13, fontWeight: 600 },
    body: { flex: 1, display: 'grid', gridTemplateColumns: '220px 1fr',
      minHeight: 0 },
    side: { padding: '32px 32px 32px 40px',
      borderRight: '1px solid rgba(0,0,0,0.08)' },
    sideH: { fontFamily: '"Playfair Display", serif',
      fontSize: 24, fontWeight: 500, letterSpacing: '-0.01em',
      margin: '0 0 24px' },
    sLink: (a) => ({ display: 'flex', justifyContent: 'space-between',
      padding: '9px 0', fontSize: 13, color: a ? '#1a1a22' : '#5a5a52',
      fontWeight: a ? 700 : 500,
      borderBottom: '1px solid rgba(0,0,0,0.06)' }),
    main: { padding: '32px 40px', overflowY: 'auto',
      display: 'flex', flexDirection: 'column', gap: 24 },
    hello: { fontFamily: '"Playfair Display", serif',
      fontSize: 34, fontWeight: 500, letterSpacing: '-0.02em', margin: 0 },
    helloS: { fontSize: 13, color: '#7a7a72', marginTop: 2 },
    cardRow: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 },
    statCard: { background: '#fff', borderRadius: 4, padding: 18,
      border: '1px solid #eaeae0' },
    statLbl: { fontSize: 11, color: '#7a7a72',
      letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 },
    statN: { fontFamily: '"Playfair Display", serif',
      fontSize: 32, fontWeight: 500, letterSpacing: '-0.02em', marginTop: 6 },
    statS: { fontSize: 12, color: '#5a5a52', marginTop: 2 },
    sectH: { display: 'flex', justifyContent: 'space-between',
      alignItems: 'baseline', marginTop: 8 },
    sT: { fontFamily: '"Playfair Display", serif',
      fontSize: 22, fontWeight: 500, margin: 0, letterSpacing: '-0.01em' },
    sLink2: { fontSize: 12, color: '#5a5a52',
      textDecoration: 'underline', textUnderlineOffset: 3 },
    order: { background: '#fff', border: '1px solid #eaeae0',
      borderRadius: 4, padding: '16px 18px',
      display: 'grid', gridTemplateColumns: '110px 1fr 1fr 1fr',
      gap: 18, alignItems: 'center' },
    orderImgs: { display: 'flex', gap: -8 },
    orderImg: (g, i) => ({ width: 40, height: 50, borderRadius: 2,
      background: g, marginLeft: i ? -10 : 0,
      border: '2px solid #fff', position: 'relative', zIndex: 4 - i }),
    orderH: { fontSize: 11, color: '#7a7a72',
      letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 },
    orderN: { fontSize: 14, fontWeight: 600, marginTop: 2 },
    badge: (c, bg) => ({ display: 'inline-flex', alignItems: 'center',
      gap: 5, fontSize: 11, color: c, background: bg,
      padding: '3px 8px', borderRadius: 2, fontWeight: 600,
      marginTop: 8 }),
    saved: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 },
    savCard: { display: 'flex', flexDirection: 'column' },
    savImg: (g) => ({ width: '100%', aspectRatio: '0.78', background: g,
      borderRadius: 2, position: 'relative' }),
    savHeart: { position: 'absolute', top: 8, right: 8,
      background: '#fff', width: 26, height: 26, borderRadius: '50%',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 13, color: '#2a5a8a' },
    savMeta: { padding: '8px 0' },
    savName: { fontSize: 13, fontWeight: 500 },
    savPrice: { fontSize: 13, fontWeight: 600, marginTop: 2 },
  };
  return (
    <div style={s.root}>
      <div style={s.top}>
        <div style={s.brand}>ATELIER FORM</div>
        <div style={s.nav}>
          <span>Women</span><span>Men</span><span>Home</span><span>Journal</span><span>Stockists</span>
        </div>
        <div style={s.iconRow}><span>⌕</span><span>♡</span><span>Bag (2)</span></div>
      </div>
      <div style={s.body}>
        <div style={s.side}>
          <h2 style={s.sideH}>Account</h2>
          <div style={s.sLink(true)}><span>Overview</span><span>›</span></div>
          <div style={s.sLink()}><span>Orders</span><span>14</span></div>
          <div style={s.sLink()}><span>Saved &amp; wishlist</span><span>28</span></div>
          <div style={s.sLink()}><span>Addresses</span><span>2</span></div>
          <div style={s.sLink()}><span>Payment</span><span>3</span></div>
          <div style={s.sLink()}><span>Returns</span><span>1</span></div>
          <div style={s.sLink()}><span>Subscriptions</span><span>—</span></div>
          <div style={s.sLink()}><span>Preferences</span><span>›</span></div>
          <div style={s.sLink()}><span>Sign out</span><span>›</span></div>
        </div>
        <div style={s.main}>
          <div>
            <h1 style={s.hello}>Good morning, Jane.</h1>
            <div style={s.helloS}>Member since 2019 · Loden tier · Paris · EUR</div>
          </div>
          <div style={s.cardRow}>
            <div style={s.statCard}>
              <div style={s.statLbl}>Open orders</div>
              <div style={s.statN}>1</div>
              <div style={s.statS}>Cropped Wool Coat · ships Tue</div>
            </div>
            <div style={s.statCard}>
              <div style={s.statLbl}>Store credit</div>
              <div style={s.statN}>€ 84.00</div>
              <div style={s.statS}>From SS25 return · expires Aug 2026</div>
            </div>
            <div style={s.statCard}>
              <div style={s.statLbl}>Loden tier · year-to-date</div>
              <div style={s.statN}>€ 2,480</div>
              <div style={s.statS}>€ 520 to <b>Madder</b> · free tailoring</div>
            </div>
          </div>
          <div style={s.sectH}>
            <h2 style={s.sT}>Recent orders</h2>
            <span style={s.sLink2}>All orders →</span>
          </div>
          <div style={s.order}>
            <div style={s.orderImgs}>
              <div style={s.orderImg('linear-gradient(160deg, #1f2418, #4a4f3a)', 0)}></div>
              <div style={s.orderImg('linear-gradient(160deg, #c8d8d0, #5a8a5a)', 1)}></div>
              <div style={s.orderImg('linear-gradient(160deg, #2a4a44, #1a2230)', 2)}></div>
            </div>
            <div>
              <div style={s.orderH}>Order · AF-04218</div>
              <div style={s.orderN}>3 pieces · € 1,147.50</div>
              <div style={{ fontSize: 12, color: '#5a5a52', marginTop: 4 }}>Placed Apr 22</div>
            </div>
            <div>
              <div style={s.orderH}>Status</div>
              <div style={s.badge('#1a4a2a', '#dcefe4')}>● Shipped · DHL</div>
              <div style={{ fontSize: 12, color: '#5a5a52', marginTop: 6 }}>Arriving Tue, Apr 30</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: 11, padding: '7px 14px',
                border: '1px solid #1a1a22', borderRadius: 999,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                fontWeight: 600 }}>Track</span>
            </div>
          </div>
          <div style={s.order}>
            <div style={s.orderImgs}>
              <div style={s.orderImg('linear-gradient(160deg, #c8a8d8, #5a3a6a)', 0)}></div>
              <div style={s.orderImg('linear-gradient(160deg, #4a5a6a, #1a2a3a)', 1)}></div>
            </div>
            <div>
              <div style={s.orderH}>Order · AF-03962</div>
              <div style={s.orderN}>2 pieces · € 565</div>
              <div style={{ fontSize: 12, color: '#5a5a52', marginTop: 4 }}>Placed Mar 14 · delivered</div>
            </div>
            <div>
              <div style={s.orderH}>Status</div>
              <div style={s.badge('#7a4a14', '#fdeac8')}>◯ Return in progress</div>
              <div style={{ fontSize: 12, color: '#5a5a52', marginTop: 6 }}>Silk Slip · refund pending</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: 11, padding: '7px 14px',
                border: '1px solid #1a1a22', borderRadius: 999,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                fontWeight: 600 }}>View</span>
            </div>
          </div>
          <div style={s.sectH}>
            <h2 style={s.sT}>Saved for later</h2>
            <span style={s.sLink2}>All 28 saved →</span>
          </div>
          <div style={s.saved}>
            {[
              ['linear-gradient(160deg, #b8c8b0, #2a4a3a)', 'Knit Polo · Sage', '€ 165'],
              ['linear-gradient(160deg, #c8a8d8, #5a3a6a)', 'Silk Slip Dress', '€ 320'],
              ['linear-gradient(160deg, #1a1a1a, #3a3a3a)', 'Cashmere Crew · Ink', '€ 290'],
              ['linear-gradient(160deg, #b8a8d8, #6a4a8a)', 'Wool Skirt · Heather', '€ 195'],
            ].map((it, i) => (
              <div key={i} style={s.savCard}>
                <div style={s.savImg(it[0])}>
                  <div style={s.savHeart}>♥</div>
                </div>
                <div style={s.savMeta}>
                  <div style={s.savName}>{it[1]}</div>
                  <div style={s.savPrice}>{it[2]}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. ATHLETE PROFILE — Pace//Form runner, dark, dense stats
// ─────────────────────────────────────────────────────────────────────────────
function AthleteProfile() {
  const s = {
    root: { width: GW, height: GH, background: '#0c0e10', color: '#ecece4',
      fontFamily: '"Space Grotesk", "Inter Tight", sans-serif',
      display: 'flex', flexDirection: 'column' },
    top: { padding: '16px 32px', display: 'flex',
      justifyContent: 'space-between', alignItems: 'center',
      borderBottom: '1px solid rgba(255,255,255,0.06)' },
    brand: { fontFamily: '"Archivo Black", sans-serif', fontSize: 18,
      letterSpacing: '-0.02em' },
    nav: { display: 'flex', gap: 24, fontSize: 12, color: '#a0a098',
      fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' },
    cta: { background: '#caff3a', color: '#0c0e10',
      padding: '7px 14px', fontSize: 11, fontWeight: 700,
      letterSpacing: '0.1em', textTransform: 'uppercase' },
    head: { padding: '28px 32px', display: 'grid',
      gridTemplateColumns: '120px 1fr auto', gap: 28, alignItems: 'center',
      borderBottom: '1px solid rgba(255,255,255,0.06)' },
    av: { width: 120, height: 120, borderRadius: '50%',
      background: 'linear-gradient(135deg, #caff3a, #2a5a14)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: '"Archivo Black", sans-serif',
      fontSize: 44, color: '#0c0e10', position: 'relative' },
    badge: { position: 'absolute', bottom: -4, right: -4,
      background: '#caff3a', color: '#0c0e10',
      padding: '3px 6px', borderRadius: 4, fontSize: 9,
      fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' },
    name: { fontFamily: '"Archivo Black", sans-serif',
      fontSize: 40, lineHeight: 1, margin: 0, letterSpacing: '-0.03em' },
    nMeta: { fontSize: 13, color: '#a0a098', marginTop: 8,
      display: 'flex', gap: 18 },
    chips: { display: 'flex', gap: 6, marginTop: 12 },
    chip: { background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.08)',
      padding: '4px 10px', borderRadius: 4, fontSize: 11,
      color: '#ecece4' },
    chipPrime: { background: '#caff3a', color: '#0c0e10',
      border: 'none', fontWeight: 700 },
    btnRow: { display: 'flex', gap: 8 },
    btn: { padding: '10px 16px', border: '1px solid rgba(255,255,255,0.12)',
      borderRadius: 6, fontSize: 12, fontWeight: 600 },
    body: { flex: 1, display: 'grid', gridTemplateColumns: '1.4fr 1fr',
      gap: 16, padding: '20px 32px', minHeight: 0 },
    panel: { background: 'rgba(255,255,255,0.025)',
      border: '1px solid rgba(255,255,255,0.06)',
      borderRadius: 10, padding: 18, display: 'flex',
      flexDirection: 'column', gap: 10 },
    pH: { display: 'flex', justifyContent: 'space-between',
      alignItems: 'baseline' },
    pT: { fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
      textTransform: 'uppercase', color: '#7a7a72' },
    statGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 12, marginTop: 4 },
    statB: { background: 'rgba(255,255,255,0.03)',
      borderLeft: '2px solid #caff3a',
      padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 2 },
    statL: { fontSize: 9, letterSpacing: '0.16em',
      textTransform: 'uppercase', color: '#7a7a82' },
    statV: { fontFamily: '"Archivo Black", sans-serif',
      fontSize: 24, letterSpacing: '-0.02em' },
    statU: { fontFamily: 'ui-monospace, monospace', fontSize: 10,
      color: '#a0a098' },
    chart: { flex: 1, minHeight: 120, display: 'flex',
      alignItems: 'flex-end', gap: 4, padding: '12px 4px 6px',
      borderBottom: '1px solid rgba(255,255,255,0.08)' },
    bar: (h, hot) => ({ flex: 1, height: h, background: hot ? '#caff3a' : '#3a3a30',
      borderRadius: 2 }),
    xAx: { display: 'flex', justifyContent: 'space-between',
      fontSize: 9, color: '#7a7a72', fontFamily: 'ui-monospace, monospace',
      paddingTop: 4 },
    run: { display: 'grid', gridTemplateColumns: '40px 1.4fr 1fr 1fr',
      gap: 12, padding: '10px 0',
      borderBottom: '1px solid rgba(255,255,255,0.04)',
      fontSize: 12, alignItems: 'center' },
    rDate: { fontFamily: 'ui-monospace, monospace', fontSize: 11,
      color: '#a0a098' },
    rT: { fontFamily: '"Archivo Black", sans-serif', fontSize: 13,
      letterSpacing: '-0.01em' },
    rS: { fontSize: 11, color: '#a0a098', marginTop: 2 },
    rRight: { textAlign: 'right' },
    rN: { fontFamily: '"Archivo Black", sans-serif', fontSize: 16,
      color: '#caff3a' },
    rL: { fontSize: 10, color: '#7a7a72',
      letterSpacing: '0.1em', textTransform: 'uppercase' },
    medal: { background: 'rgba(202,255,58,0.08)',
      border: '1px solid rgba(202,255,58,0.2)',
      borderRadius: 8, padding: 14, display: 'flex', gap: 14,
      alignItems: 'center' },
    medalIco: { fontFamily: '"Archivo Black", sans-serif',
      fontSize: 36, color: '#caff3a', lineHeight: 1 },
    medalT: { fontFamily: '"Archivo Black", sans-serif', fontSize: 14,
      letterSpacing: '-0.01em' },
    medalS: { fontSize: 11, color: '#a0a098', marginTop: 2 },
  };
  const bars = [38, 62, 24, 84, 48, 96, 72, 110, 64, 88, 130, 76, 102, 58];
  const max = Math.max(...bars);
  const runs = [
    ['MO 22','Easy shakeout','3 × 1.6km hills · zone 2','7.2','km','38:14'],
    ['SU 21','Long run · Greenway','16km · negative split','16.0','km','1:14:08'],
    ['FR 19','Track · 5×800','Avg 2:48 · rest 90s','6.4','km','28:42'],
    ['WE 17','Recovery','HR avg 132','5.0','km','30:18'],
  ];
  return (
    <div style={s.root}>
      <div style={s.top}>
        <div style={s.brand}>PACE//FORM</div>
        <div style={s.nav}>
          <span>Train</span><span>Race</span><span>Clubs</span><span>Feed</span><span>Shop</span>
        </div>
        <div style={s.cta}>Start session →</div>
      </div>
      <div style={s.head}>
        <div style={s.av}>T<div style={s.badge}>● Live</div></div>
        <div>
          <h1 style={s.name}>TOMA OYELARAN</h1>
          <div style={s.nMeta}>
            <span>@toma.runs</span>
            <span>📍 East London</span>
            <span>Run club: Pace//Form NE</span>
          </div>
          <div style={s.chips}>
            <span style={{ ...s.chip, ...s.chipPrime }}>● 28-day streak</span>
            <span style={s.chip}>Marathon · Berlin '26</span>
            <span style={s.chip}>PB 5K · 17:42</span>
            <span style={s.chip}>Coach · Aanya R.</span>
          </div>
        </div>
        <div style={s.btnRow}>
          <span style={s.btn}>Message</span>
          <span style={{ ...s.btn, background: '#caff3a',
            color: '#0c0e10', border: 'none' }}>+ Follow</span>
        </div>
      </div>
      <div style={s.body}>
        <div style={s.panel}>
          <div style={s.pH}>
            <div style={s.pT}>This week · Mon — Sun</div>
            <div style={{ fontSize: 11, color: '#a0a098',
              fontFamily: 'ui-monospace, monospace' }}>w17/52</div>
          </div>
          <div style={s.statGrid}>
            <div style={s.statB}><div style={s.statL}>Distance</div><div style={s.statV}>62.4</div><div style={s.statU}>km · +18%</div></div>
            <div style={s.statB}><div style={s.statL}>Moving time</div><div style={s.statV}>5:42</div><div style={s.statU}>h:m</div></div>
            <div style={s.statB}><div style={s.statL}>Avg pace</div><div style={s.statV}>4:54</div><div style={s.statU}>min/km</div></div>
            <div style={s.statB}><div style={s.statL}>Elevation</div><div style={s.statV}>342</div><div style={s.statU}>m</div></div>
          </div>
          <div style={{ marginTop: 8 }}>
            <div style={s.pT}>Last 14 days · km/day</div>
            <div style={s.chart}>
              {bars.map((b, i) => (
                <div key={i} style={s.bar(`${(b/max)*100}%`, i === 10)}></div>
              ))}
            </div>
            <div style={s.xAx}>
              <span>05/06</span><span>09</span><span>12</span><span>15</span><span>18</span><span>05/19</span>
            </div>
          </div>
          <div style={s.pT}>Recent activities</div>
          <div style={{ overflowY: 'auto', minHeight: 0 }}>
            {runs.map((r, i) => (
              <div key={i} style={s.run}>
                <div style={s.rDate}>{r[0]}</div>
                <div>
                  <div style={s.rT}>{r[1]}</div>
                  <div style={s.rS}>{r[2]}</div>
                </div>
                <div style={s.rRight}>
                  <div style={s.rN}>{r[3]}<span style={{ fontSize: 11, color: '#a0a098' }}> {r[4]}</span></div>
                  <div style={s.rL}>Distance</div>
                </div>
                <div style={s.rRight}>
                  <div style={s.rN}>{r[5]}</div>
                  <div style={s.rL}>Moving</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12,
          minHeight: 0 }}>
          <div style={s.panel}>
            <div style={s.pT}>Berlin Marathon · countdown</div>
            <div style={{ fontFamily: '"Archivo Black", sans-serif',
              fontSize: 46, letterSpacing: '-0.04em', color: '#caff3a',
              lineHeight: 1 }}>112<span style={{ fontSize: 18, color: '#a0a098', marginLeft: 8 }}>days</span></div>
            <div style={{ fontSize: 12, color: '#a0a098' }}>Sep 27 · Sub-3 target · 18-week block</div>
            <div style={{ height: 5, background: 'rgba(255,255,255,0.06)',
              borderRadius: 3, marginTop: 8 }}>
              <div style={{ width: '34%', height: '100%',
                background: '#caff3a', borderRadius: 3 }}></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between',
              fontSize: 10, color: '#7a7a72', marginTop: 6,
              fontFamily: 'ui-monospace, monospace' }}>
              <span>Wk 06/18 · base</span><span>34% complete</span>
            </div>
          </div>
          <div style={s.panel}>
            <div style={s.pT}>Personal bests</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 8, marginTop: 4 }}>
              <div style={s.statB}><div style={s.statL}>1500m</div><div style={s.statV}>4:48</div><div style={s.statU}>track · 2024</div></div>
              <div style={s.statB}><div style={s.statL}>5K</div><div style={s.statV}>17:42</div><div style={s.statU}>parkrun · 2025</div></div>
              <div style={s.statB}><div style={s.statL}>10K</div><div style={s.statV}>37:08</div><div style={s.statU}>Hackney · 2024</div></div>
              <div style={s.statB}><div style={s.statL}>Half</div><div style={s.statV}>1:24</div><div style={s.statU}>Big Half · 2025</div></div>
            </div>
          </div>
          <div style={s.medal}>
            <div style={s.medalIco}>◎</div>
            <div>
              <div style={s.medalT}>Hill repeats unlocked</div>
              <div style={s.medalS}>+450m this week · longest streak this year</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 5. CREATOR / MUSIC PROFILE — bold, dark, maximalist
// ─────────────────────────────────────────────────────────────────────────────
function CreatorProfile() {
  const s = {
    root: { width: GW, height: GH, background: '#0a0612', color: '#fff',
      fontFamily: '"Inter Tight", system-ui, sans-serif',
      display: 'flex', flexDirection: 'column', overflow: 'hidden',
      position: 'relative' },
    bg: { position: 'absolute', inset: 0,
      background: 'radial-gradient(circle at 80% 10%, #ff3a8a 0%, transparent 40%), radial-gradient(circle at 10% 90%, #4cc8ff 0%, transparent 50%), #0a0612' },
    inner: { position: 'relative', zIndex: 2, display: 'flex',
      flexDirection: 'column', height: '100%' },
    top: { display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', padding: '20px 36px' },
    brand: { fontFamily: '"Bricolage Grotesque", sans-serif',
      fontWeight: 800, fontSize: 22, letterSpacing: '-0.04em' },
    nav: { display: 'flex', gap: 24, fontSize: 13, fontWeight: 500 },
    body: { flex: 1, display: 'grid', gridTemplateColumns: '1.2fr 1fr',
      gap: 0, padding: '0 36px 36px', minHeight: 0 },
    left: { display: 'flex', flexDirection: 'column',
      justifyContent: 'flex-end', paddingBottom: 16 },
    eyebrow: { fontSize: 11, letterSpacing: '0.2em',
      textTransform: 'uppercase', color: '#ff3a8a', fontWeight: 700 },
    name: { fontFamily: '"Bricolage Grotesque", sans-serif',
      fontSize: 132, fontWeight: 800, lineHeight: 0.86,
      letterSpacing: '-0.06em', margin: '14px 0 0',
      background: 'linear-gradient(180deg, #fff 0%, #c8b8e8 100%)',
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
    sub: { fontSize: 16, color: '#c8b8e8', maxWidth: 460,
      marginTop: 18, lineHeight: 1.45 },
    pill: { display: 'inline-flex', alignItems: 'center', gap: 8,
      background: 'rgba(255,255,255,0.06)',
      border: '1px solid rgba(255,255,255,0.1)',
      backdropFilter: 'blur(10px)', borderRadius: 999,
      padding: '6px 14px', fontSize: 12, marginTop: 14 },
    stats: { display: 'flex', gap: 28, marginTop: 24 },
    sN: { fontFamily: '"Bricolage Grotesque", sans-serif',
      fontSize: 28, fontWeight: 800, lineHeight: 1,
      letterSpacing: '-0.03em' },
    sL: { fontSize: 10, color: '#a098b8', letterSpacing: '0.16em',
      textTransform: 'uppercase', marginTop: 4 },
    btnRow: { display: 'flex', gap: 8, marginTop: 24 },
    play: { background: '#fff', color: '#0a0612',
      padding: '14px 22px', borderRadius: 999, fontSize: 14,
      fontWeight: 700, display: 'flex', alignItems: 'center', gap: 10 },
    save: { background: 'rgba(255,255,255,0.08)', color: '#fff',
      padding: '14px 22px', borderRadius: 999, fontSize: 14,
      fontWeight: 600, border: '1px solid rgba(255,255,255,0.14)' },
    right: { display: 'flex', flexDirection: 'column',
      gap: 12, justifyContent: 'flex-end', paddingBottom: 16 },
    cover: { width: '100%', aspectRatio: 1,
      background: 'linear-gradient(135deg, #ff3a8a 0%, #4cc8ff 60%, #0a0612 100%)',
      borderRadius: 12, position: 'relative', overflow: 'hidden',
      maxHeight: 360, marginLeft: 'auto', maxWidth: 360 },
    coverNum: { position: 'absolute', top: 16, left: 16,
      fontFamily: 'ui-monospace, monospace', fontSize: 11,
      color: 'rgba(255,255,255,0.7)' },
    coverT: { position: 'absolute', bottom: 16, left: 16, right: 16,
      fontFamily: '"Bricolage Grotesque", sans-serif',
      fontSize: 26, fontWeight: 800, letterSpacing: '-0.03em',
      lineHeight: 1.0 },
    list: { background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 12, padding: '6px 4px', maxWidth: 360,
      marginLeft: 'auto', width: '100%' },
    track: { display: 'grid',
      gridTemplateColumns: '22px 1fr auto auto', gap: 10,
      alignItems: 'center', padding: '8px 14px',
      fontSize: 13 },
    trackN: { color: '#a098b8',
      fontFamily: 'ui-monospace, monospace', fontSize: 11 },
    trackT: { fontWeight: 500 },
    trackTSub: { fontSize: 10, color: '#a098b8' },
    trackP: { color: '#a098b8',
      fontFamily: 'ui-monospace, monospace', fontSize: 11 },
    trackPlay: { color: '#fff', opacity: 0.7 },
  };
  const tracks = [
    ['Atlas', '4:42', '2.4M'],
    ['Pages', '3:18', '1.8M'],
    ['White Noise (Berlin)', '5:08', '892k'],
    ['Long Afternoon', '6:14', '4.1M'],
    ['Vessel No. 4', '4:48', '624k'],
  ];
  return (
    <div style={s.root}>
      <div style={s.bg}></div>
      <div style={s.inner}>
        <div style={s.top}>
          <div style={s.brand}>resonate.</div>
          <div style={s.nav}>
            <span>Browse</span><span>Library</span><span>Radio</span><span>Live</span>
            <span style={{ color: '#a098b8' }}>⌕</span>
            <span style={{ color: '#a098b8' }}>👤</span>
          </div>
        </div>
        <div style={s.body}>
          <div style={s.left}>
            <div style={s.eyebrow}>◉ Listening now · 12.4k</div>
            <h1 style={s.name}>V. LEV</h1>
            <div style={s.pill}>✓ Verified artist · Berlin · Quiet Press Records</div>
            <p style={s.sub}>
              Composer for film &amp; ambient. New EP "Atlas" out April 24.
              On tour with Tide through May.
            </p>
            <div style={s.stats}>
              <div><div style={s.sN}>1.4M</div><div style={s.sL}>Monthly listeners</div></div>
              <div><div style={s.sN}>284k</div><div style={s.sL}>Followers</div></div>
              <div><div style={s.sN}>42</div><div style={s.sL}>Releases</div></div>
            </div>
            <div style={s.btnRow}>
              <span style={s.play}>▶ Play Atlas</span>
              <span style={s.save}>+ Follow</span>
              <span style={s.save}>• • •</span>
            </div>
          </div>
          <div style={s.right}>
            <div style={s.cover}>
              <div style={s.coverNum}>EP · 042 · 2026</div>
              <div style={s.coverT}>ATLAS</div>
            </div>
            <div style={s.list}>
              {tracks.map((t, i) => (
                <div key={i} style={s.track}>
                  <div style={s.trackN}>{String(i + 1).padStart(2, '0')}</div>
                  <div>
                    <div style={s.trackT}>{t[0]}</div>
                    <div style={s.trackTSub}>{t[2]} plays</div>
                  </div>
                  <div style={s.trackP}>{t[1]}</div>
                  <div style={s.trackPlay}>▶</div>
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
// 6. FASHION PDP — Atelier Form, Wool Coat detail
// ─────────────────────────────────────────────────────────────────────────────
function FashionPDP() {
  const s = {
    root: { width: GW, height: GH, background: '#eef0ed', color: '#1a1a22',
      fontFamily: '"Inter Tight", system-ui, sans-serif',
      display: 'flex', flexDirection: 'column' },
    top: { display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '18px 40px', borderBottom: '1px solid #1a1a22' },
    brand: { fontFamily: '"Archivo Black", sans-serif', fontSize: 20 },
    nav: { display: 'flex', gap: 28, fontSize: 12, fontWeight: 600,
      letterSpacing: '0.08em', textTransform: 'uppercase' },
    iconRow: { display: 'flex', gap: 14, fontSize: 13, fontWeight: 600 },
    crumb: { padding: '14px 40px', fontSize: 11, color: '#7a7a72',
      letterSpacing: '0.1em', textTransform: 'uppercase' },
    body: { flex: 1, display: 'grid', gridTemplateColumns: '50px 1fr 1fr',
      gap: 0, padding: '0 40px 32px', minHeight: 0 },
    thumbs: { display: 'flex', flexDirection: 'column', gap: 8, paddingTop: 4 },
    th: (g, a) => ({ width: 44, height: 56, borderRadius: 2, background: g,
      border: a ? '1.5px solid #1a1a22' : '1px solid transparent',
      cursor: 'pointer' }),
    main: { padding: '0 32px 0 16px', display: 'flex', flexDirection: 'column' },
    img: { flex: 1, minHeight: 0,
      background: 'linear-gradient(160deg, #1f2418 0%, #4a4f3a 50%, #06070a 100%)',
      borderRadius: 2, position: 'relative', overflow: 'hidden' },
    imgTag: { position: 'absolute', top: 14, left: 14,
      background: '#1a1a22', color: '#fff', padding: '4px 10px',
      fontSize: 10, fontWeight: 700, letterSpacing: '0.1em',
      textTransform: 'uppercase' },
    imgPager: { position: 'absolute', bottom: 14, right: 14,
      background: 'rgba(255,255,255,0.95)', color: '#1a1a22',
      padding: '4px 10px', fontSize: 10, fontWeight: 600,
      letterSpacing: '0.06em', fontFamily: 'ui-monospace, monospace' },
    right: { display: 'flex', flexDirection: 'column', gap: 14,
      overflowY: 'auto', minHeight: 0 },
    eb: { fontSize: 10, color: '#7a7a72', letterSpacing: '0.2em',
      textTransform: 'uppercase' },
    name: { fontFamily: '"Playfair Display", serif',
      fontSize: 36, fontWeight: 500, letterSpacing: '-0.02em',
      margin: '4px 0 0' },
    priceRow: { display: 'flex', gap: 14, alignItems: 'baseline',
      paddingBottom: 14, borderBottom: '1px solid rgba(0,0,0,0.08)' },
    price: { fontSize: 18, fontWeight: 700 },
    pSub: { fontSize: 11, color: '#7a7a72' },
    label: { fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
      textTransform: 'uppercase', marginTop: 8, marginBottom: 8,
      display: 'flex', justifyContent: 'space-between' },
    labelMeta: { fontSize: 10, color: '#7a7a72',
      letterSpacing: '0.04em', textTransform: 'none' },
    swRow: { display: 'flex', gap: 6 },
    sw: (c, a) => ({ width: 26, height: 26, borderRadius: '50%',
      background: c, cursor: 'pointer',
      boxShadow: a ? '0 0 0 1.5px #1a1a22, inset 0 0 0 2px #eef0ed' : 'inset 0 0 0 1px rgba(0,0,0,0.1)' }),
    sizes: { display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 5 },
    size: (a, sold) => ({ padding: '10px 0', textAlign: 'center',
      border: a ? '1.5px solid #1a1a22' : '1px solid #d8d4cc',
      borderRadius: 2, fontSize: 12, fontWeight: a ? 700 : 500,
      background: a ? '#1a1a22' : '#fff',
      color: sold ? '#a8a8a0' : (a ? '#fff' : '#1a1a22'),
      textDecoration: sold ? 'line-through' : 'none',
      cursor: sold ? 'not-allowed' : 'pointer' }),
    addBtn: { background: '#1a1a22', color: '#fff',
      padding: '16px 0', borderRadius: 2, fontSize: 13,
      fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
      textAlign: 'center', marginTop: 6 },
    secBtn: { border: '1px solid #1a1a22', color: '#1a1a22',
      padding: '14px 0', borderRadius: 2, fontSize: 13,
      fontWeight: 600, textAlign: 'center' },
    feat: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 10, marginTop: 4 },
    f: { background: '#fff', padding: 12, fontSize: 12,
      borderRadius: 2, border: '1px solid #eaeae0' },
    fH: { fontWeight: 700, fontSize: 12, marginBottom: 3 },
    fS: { fontSize: 11, color: '#5a5a52', lineHeight: 1.4 },
    acc: { padding: '12px 0', borderBottom: '1px solid rgba(0,0,0,0.08)',
      display: 'flex', justifyContent: 'space-between', fontSize: 13,
      fontWeight: 500 },
  };
  return (
    <div style={s.root}>
      <div style={s.top}>
        <div style={s.brand}>ATELIER FORM</div>
        <div style={s.nav}>
          <span>Women</span><span>Men</span><span>Home</span><span>Journal</span><span>Stockists</span>
        </div>
        <div style={s.iconRow}><span>⌕</span><span>♡</span><span>Bag (2)</span></div>
      </div>
      <div style={s.crumb}>Women / Outerwear / Coats / Cropped Wool</div>
      <div style={s.body}>
        <div style={s.thumbs}>
          <div style={s.th('linear-gradient(160deg, #1f2418, #4a4f3a)', true)}></div>
          <div style={s.th('linear-gradient(160deg, #4a4f3a, #1f2418)')}></div>
          <div style={s.th('linear-gradient(160deg, #2a2a20, #5a5a4a)')}></div>
          <div style={s.th('linear-gradient(160deg, #060a14, #1f2418)')}></div>
          <div style={s.th('linear-gradient(180deg, #c8d8d0, #5a8a5a)')}></div>
        </div>
        <div style={s.main}>
          <div style={s.img}>
            <div style={s.imgTag}>SS26 · NEW</div>
            <div style={s.imgPager}>02 / 05 · zoom +</div>
          </div>
        </div>
        <div style={s.right}>
          <div style={s.eb}>Atelier Form · SS26</div>
          <h1 style={s.name}>The Cropped Wool Coat</h1>
          <div style={s.priceRow}>
            <div style={s.price}>€ 480</div>
            <div style={s.pSub}>incl. VAT · free EU shipping</div>
          </div>
          <p style={{ fontSize: 13, lineHeight: 1.55, color: '#3a3a32', margin: 0 }}>
            Boxy collarless coat in 100% Italian virgin wool. Hand-stitched
            lapels, horn buttons, half-lined in cupro. Cut to sit just above
            the hip. Designed in Paris, made in Biella.
          </p>
          <div style={s.label}>Colour · Loden<span style={s.labelMeta}>3 available</span></div>
          <div style={s.swRow}>
            <div style={s.sw('#1f2418', true)}></div>
            <div style={s.sw('#3a5066')}></div>
            <div style={s.sw('#c8d8d0')}></div>
          </div>
          <div style={s.label}>Size · UK<span style={s.labelMeta}>Fits true · sample 38</span></div>
          <div style={s.sizes}>
            <div style={s.size(false, true)}>32</div>
            <div style={s.size(false, false)}>34</div>
            <div style={s.size(false, false)}>36</div>
            <div style={s.size(true, false)}>38</div>
            <div style={s.size(false, false)}>40</div>
            <div style={s.size(false, true)}>42</div>
          </div>
          <div style={s.addBtn}>Add to bag — € 480</div>
          <div style={s.secBtn}>Reserve in Paris boutique</div>
          <div style={s.feat}>
            <div style={s.f}><div style={s.fH}>↻ 30-day returns</div><div style={s.fS}>Free, no questions</div></div>
            <div style={s.f}><div style={s.fH}>✦ Lifetime tailoring</div><div style={s.fS}>Madder &amp; up</div></div>
          </div>
          <div style={s.acc}><span>Composition &amp; care</span><span>+</span></div>
          <div style={s.acc}><span>Made in Biella · the story</span><span>+</span></div>
          <div style={s.acc}><span>Shipping &amp; returns</span><span>+</span></div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 7. FURNITURE PDP — kotona, lounge chair detail
// ─────────────────────────────────────────────────────────────────────────────
function FurniturePDP() {
  const s = {
    root: { width: GW, height: GH, background: '#f4f5f1', color: '#1a1a22',
      fontFamily: '"Inter Tight", system-ui, sans-serif',
      display: 'flex', flexDirection: 'column' },
    top: { padding: '20px 40px', display: 'flex',
      justifyContent: 'space-between', alignItems: 'center',
      borderBottom: '1px solid #eaeae0' },
    brand: { fontSize: 22, fontWeight: 700, letterSpacing: '-0.04em' },
    nav: { display: 'flex', gap: 26, fontSize: 13, fontWeight: 500 },
    body: { flex: 1, display: 'grid', gridTemplateColumns: '1.4fr 1fr',
      gap: 28, padding: '32px 40px', minHeight: 0 },
    gal: { display: 'grid', gridTemplateColumns: '1.4fr 1fr',
      gridTemplateRows: '1fr 1fr', gap: 8, minHeight: 0 },
    big: { gridRow: 'span 2',
      background: 'linear-gradient(180deg, #d8d2c4 0%, #a8957a 40%, #5a4a2a 100%)',
      borderRadius: 6, position: 'relative' },
    small: (g) => ({ background: g, borderRadius: 6, position: 'relative' }),
    bigLbl: { position: 'absolute', bottom: 16, left: 16,
      fontFamily: '"Playfair Display", serif',
      fontStyle: 'italic', fontSize: 16, color: 'rgba(255,255,255,0.9)' },
    swatchCorner: { position: 'absolute', top: 12, right: 12,
      background: 'rgba(255,255,255,0.95)',
      padding: '4px 8px', borderRadius: 999, fontSize: 11, fontWeight: 600 },
    right: { display: 'flex', flexDirection: 'column',
      gap: 14, overflowY: 'auto', minHeight: 0 },
    eb: { fontSize: 10, color: '#6a6a5a', letterSpacing: '0.18em',
      textTransform: 'uppercase', fontWeight: 600 },
    name: { fontFamily: '"Playfair Display", serif',
      fontSize: 44, fontWeight: 400, letterSpacing: '-0.02em',
      lineHeight: 1.0, margin: '4px 0' },
    nameI: { fontStyle: 'italic', display: 'block', fontSize: 24,
      color: '#6a6a5a', marginTop: 6 },
    designer: { fontSize: 13, color: '#5a5a4a',
      paddingBottom: 14, borderBottom: '1px solid #eaeae0' },
    priceRow: { display: 'flex', alignItems: 'baseline',
      justifyContent: 'space-between', paddingBottom: 14,
      borderBottom: '1px solid #eaeae0' },
    price: { fontFamily: '"Playfair Display", serif', fontSize: 32 },
    pSub: { fontSize: 11, color: '#6a6a5a', letterSpacing: '0.1em',
      textTransform: 'uppercase' },
    label: { fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
      textTransform: 'uppercase', color: '#6a6a5a', marginTop: 4 },
    optRow: { display: 'flex', gap: 8 },
    opt: (a) => ({ flex: 1, padding: '14px 12px',
      border: a ? '1.5px solid #1a1a22' : '1px solid #d8d2c4',
      borderRadius: 4, fontSize: 12, cursor: 'pointer',
      background: a ? '#fff' : 'transparent',
      display: 'flex', flexDirection: 'column', gap: 4 }),
    optN: { fontWeight: 700 },
    optS: { fontSize: 10, color: '#6a6a5a' },
    qtyRow: { display: 'flex', gap: 12, alignItems: 'center' },
    qty: { display: 'flex', alignItems: 'center', gap: 0,
      border: '1px solid #1a1a22', borderRadius: 4, width: 'fit-content' },
    qBtn: { padding: '8px 14px', fontSize: 14 },
    qN: { padding: '8px 16px', borderLeft: '1px solid #1a1a22',
      borderRight: '1px solid #1a1a22', fontWeight: 600 },
    eta: { fontSize: 12, color: '#5a5a4a' },
    addBtn: { background: '#1a1a22', color: '#fff',
      padding: '16px 0', borderRadius: 4, fontSize: 13,
      fontWeight: 600, letterSpacing: '0.04em', textAlign: 'center' },
    specs: { paddingTop: 14, borderTop: '1px solid #eaeae0' },
    specT: { display: 'flex', justifyContent: 'space-between',
      padding: '8px 0', fontSize: 12, color: '#3a3a32',
      borderBottom: '1px solid #eaeae0' },
  };
  return (
    <div style={s.root}>
      <div style={s.top}>
        <div style={s.brand}>kotona</div>
        <div style={s.nav}>
          <span>Living</span><span>Bedroom</span><span>Kitchen</span><span>Bath</span><span>Lookbook</span>
        </div>
        <div style={s.nav}><span>⌕</span><span>Account</span><span>Bag (1)</span></div>
      </div>
      <div style={s.body}>
        <div style={s.gal}>
          <div style={s.big}>
            <div style={s.swatchCorner}>Oak · oiled</div>
            <div style={s.bigLbl}>Kallio · in oak</div>
          </div>
          <div style={s.small('linear-gradient(135deg, #4a4540, #1a1714)')}>
            <div style={s.bigLbl}>In walnut</div>
          </div>
          <div style={s.small('linear-gradient(135deg, #c8c0b0, #6a6050)')}>
            <div style={s.bigLbl}>Side view · oak</div>
          </div>
        </div>
        <div style={s.right}>
          <div style={s.eb}>Living · Lounge chairs · in stock</div>
          <h1 style={s.name}>Kallio<span style={s.nameI}>Lounge Chair · 2024</span></h1>
          <div style={s.designer}>Designed by Aino Vainio · made in Lahti, Finland</div>
          <div style={s.priceRow}>
            <div>
              <div style={s.pSub}>From</div>
              <div style={s.price}>£ 1,240</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={s.pSub}>Lead time</div>
              <div style={{ fontSize: 14, fontWeight: 600, marginTop: 2 }}>4 — 6 weeks</div>
            </div>
          </div>
          <div style={s.label}>Wood</div>
          <div style={s.optRow}>
            <div style={s.opt(true)}><span style={s.optN}>● Oak</span><span style={s.optS}>Oiled · natural</span></div>
            <div style={s.opt()}><span style={s.optN}>● Walnut</span><span style={s.optS}>+ £ 220</span></div>
            <div style={s.opt()}><span style={s.optN}>● Black ash</span><span style={s.optS}>+ £ 180</span></div>
          </div>
          <div style={s.label}>Upholstery</div>
          <div style={s.optRow}>
            <div style={s.opt(true)}><span style={s.optN}>Boucle · Sand</span><span style={s.optS}>Kvadrat · in stock</span></div>
            <div style={s.opt()}><span style={s.optN}>Wool · Slate</span><span style={s.optS}>+ £ 80 · 4 wk</span></div>
            <div style={s.opt()}><span style={s.optN}>Leather · Cognac</span><span style={s.optS}>+ £ 340 · 8 wk</span></div>
          </div>
          <div style={s.qtyRow}>
            <div style={s.qty}>
              <span style={s.qBtn}>−</span>
              <span style={s.qN}>1</span>
              <span style={s.qBtn}>+</span>
            </div>
            <div style={s.eta}>Delivered week of <b>Jun 24</b> · white-glove £ 60</div>
          </div>
          <div style={s.addBtn}>Add to bag — £ 1,240 →</div>
          <div style={s.specs}>
            <div style={s.specT}><span>Dimensions</span><span>H 78 · W 72 · D 84 cm · seat 42</span></div>
            <div style={s.specT}><span>Frame</span><span>Solid European oak · oiled</span></div>
            <div style={s.specT}><span>Cover</span><span>Removable · dry-clean</span></div>
            <div style={s.specT}><span>Warranty</span><span>10 years · frame</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 8. TECH PDP — bold dark, audio brand
// ─────────────────────────────────────────────────────────────────────────────
function TechPDP() {
  const s = {
    root: { width: GW, height: GH, background: '#0a0a0d', color: '#fff',
      fontFamily: '"Archivo", "Inter Tight", sans-serif',
      display: 'flex', flexDirection: 'column' },
    top: { display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', padding: '18px 40px',
      borderBottom: '1px solid rgba(255,255,255,0.06)' },
    brand: { fontFamily: '"Archivo Black", sans-serif',
      fontSize: 20, letterSpacing: '-0.04em' },
    nav: { display: 'flex', gap: 28, fontSize: 12, fontWeight: 600,
      letterSpacing: '0.08em', textTransform: 'uppercase' },
    cta: { background: '#7a5af8', color: '#fff', padding: '8px 14px',
      fontSize: 12, fontWeight: 700, letterSpacing: '0.06em',
      textTransform: 'uppercase' },
    body: { flex: 1, display: 'grid', gridTemplateColumns: '1.5fr 1fr',
      gap: 0, minHeight: 0 },
    galSide: { padding: 32, display: 'flex', flexDirection: 'column',
      gap: 12, borderRight: '1px solid rgba(255,255,255,0.06)' },
    bigImg: { flex: 1, minHeight: 0,
      background: 'radial-gradient(ellipse at 50% 50%, rgba(255,93,46,0.2), transparent 60%), linear-gradient(180deg, #1a1a1f 0%, #0a0a0d 100%)',
      borderRadius: 6, position: 'relative', overflow: 'hidden' },
    pCircle: { position: 'absolute', left: '50%', top: '50%',
      transform: 'translate(-50%, -50%)',
      width: '60%', aspectRatio: 1, borderRadius: '50%',
      background: 'radial-gradient(circle at 35% 30%, #4a4a52 0%, #1a1a1d 60%, #0a0a0d 100%)',
      boxShadow: 'inset 0 0 80px rgba(0,0,0,0.6), 0 30px 80px rgba(0,0,0,0.5)' },
    pCircleInner: { position: 'absolute', left: '50%', top: '50%',
      transform: 'translate(-50%, -50%)',
      width: '36%', aspectRatio: 1, borderRadius: '50%',
      background: 'radial-gradient(circle at 50% 50%, #7a5af8 0%, #c63a14 70%, #5a1a0a 100%)' },
    pNum: { position: 'absolute', top: 16, left: 16,
      fontFamily: 'ui-monospace, monospace', fontSize: 11,
      color: 'rgba(255,255,255,0.5)' },
    pTag: { position: 'absolute', bottom: 16, right: 16,
      background: 'rgba(255,255,255,0.06)',
      border: '1px solid rgba(255,255,255,0.12)',
      padding: '6px 12px', borderRadius: 999, fontSize: 11 },
    thRow: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 8, height: 80, flex: 'none' },
    th: (g, a) => ({ background: g, borderRadius: 4,
      border: a ? '1.5px solid #7a5af8' : '1px solid rgba(255,255,255,0.08)' }),
    right: { padding: 32, display: 'flex', flexDirection: 'column',
      gap: 14, overflowY: 'auto', minHeight: 0 },
    eb: { fontSize: 10, color: '#7a5af8', letterSpacing: '0.22em',
      textTransform: 'uppercase', fontWeight: 700 },
    name: { fontFamily: '"Archivo Black", sans-serif',
      fontSize: 44, fontWeight: 900, letterSpacing: '-0.03em',
      lineHeight: 1.0, margin: '4px 0' },
    sub: { fontSize: 14, color: '#a0a0a8', lineHeight: 1.45 },
    rating: { display: 'flex', gap: 12, alignItems: 'center',
      paddingBottom: 14, borderBottom: '1px solid rgba(255,255,255,0.08)' },
    stars: { fontSize: 13, color: '#c8ff42' },
    rateN: { fontSize: 12, color: '#a0a0a8' },
    price: { display: 'flex', alignItems: 'baseline', gap: 12 },
    priceN: { fontFamily: '"Archivo Black", sans-serif', fontSize: 36,
      letterSpacing: '-0.03em' },
    priceOld: { fontSize: 16, color: '#7a7a82',
      textDecoration: 'line-through' },
    save: { background: '#7a5af8', color: '#fff', padding: '3px 8px',
      fontSize: 11, fontWeight: 700,
      letterSpacing: '0.06em', textTransform: 'uppercase' },
    label: { fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
      textTransform: 'uppercase', color: '#7a7a82' },
    colorRow: { display: 'flex', gap: 10 },
    cBtn: (c, a) => ({ width: 38, height: 38, borderRadius: '50%',
      background: c, cursor: 'pointer',
      boxShadow: a ? '0 0 0 2px #7a5af8, inset 0 0 0 3px #0a0a0d' : 'inset 0 0 0 1px rgba(255,255,255,0.1)' }),
    feats: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 8, paddingTop: 10 },
    feat: { background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.06)',
      borderRadius: 6, padding: 12 },
    featN: { fontFamily: '"Archivo Black", sans-serif',
      fontSize: 20, color: '#7a5af8', letterSpacing: '-0.02em' },
    featL: { fontSize: 10, color: '#7a7a82',
      letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: 4 },
    cta2: { background: '#7a5af8', color: '#fff',
      padding: '18px 0', borderRadius: 6, fontSize: 14,
      fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase',
      textAlign: 'center', marginTop: 4 },
    fin: { fontSize: 11, color: '#7a7a82', textAlign: 'center' },
  };
  return (
    <div style={s.root}>
      <div style={s.top}>
        <div style={s.brand}>NØRR / AUDIO</div>
        <div style={s.nav}>
          <span>Headphones</span><span>Speakers</span><span>Streamers</span><span>Stories</span>
        </div>
        <div style={s.cta}>Pre-order →</div>
      </div>
      <div style={s.body}>
        <div style={s.galSide}>
          <div style={s.bigImg}>
            <div style={s.pNum}>NA-P3 · Studio Headphone · 2026</div>
            <div style={s.pCircle}></div>
            <div style={s.pCircleInner}></div>
            <div style={s.pTag}>360° spin · drag to rotate</div>
          </div>
          <div style={s.thRow}>
            <div style={s.th('radial-gradient(circle at 40% 40%, #4a4a52, #0a0a0d)', true)}></div>
            <div style={s.th('linear-gradient(135deg, #1a1a1f, #4a4a52)')}></div>
            <div style={s.th('linear-gradient(135deg, #1a2230, #2a4a44)')}></div>
            <div style={s.th('linear-gradient(135deg, #1f2418, #4a4f3a)')}></div>
          </div>
        </div>
        <div style={s.right}>
          <div style={s.eb}>◉ Just launched · ships May 28</div>
          <h1 style={s.name}>NA-P3<br/>STUDIO.</h1>
          <p style={s.sub}>
            Reference-grade open-back headphones. Planar magnetic drivers,
            beryllium voice coils. Made in Stavanger, tuned by hand.
          </p>
          <div style={s.rating}>
            <span style={s.stars}>★★★★★</span>
            <span style={s.rateN}>4.8 · 482 reviews · 96% recommend</span>
          </div>
          <div style={s.price}>
            <span style={s.priceN}>€ 1,490</span>
            <span style={s.priceOld}>€ 1,690</span>
            <span style={s.save}>Save € 200</span>
          </div>
          <div style={s.label}>Colour · Graphite</div>
          <div style={s.colorRow}>
            <div style={s.cBtn('linear-gradient(135deg, #4a4a52, #0a0a0d)', true)}></div>
            <div style={s.cBtn('linear-gradient(135deg, #1a1a1f, #4a4a52)')}></div>
            <div style={s.cBtn('linear-gradient(135deg, #2a4a44, #1a2230)')}></div>
            <div style={s.cBtn('linear-gradient(135deg, #4a4f3a, #1f2418)')}></div>
          </div>
          <div style={s.feats}>
            <div style={s.feat}><div style={s.featN}>40h</div><div style={s.featL}>Battery</div></div>
            <div style={s.feat}><div style={s.featN}>4Hz–48k</div><div style={s.featL}>Response</div></div>
            <div style={s.feat}><div style={s.featN}>−42dB</div><div style={s.featL}>ANC</div></div>
          </div>
          <div style={s.cta2}>Add to cart — € 1,490</div>
          <div style={s.fin}>Or 12× € 124 · 0% with Klarna · 30-day audition · free shipping &amp; returns</div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 9. PRINT PDP — Marais Editions, art print
// ─────────────────────────────────────────────────────────────────────────────
function PrintPDP() {
  const s = {
    root: { width: GW, height: GH, background: '#fff', color: '#1a1a1a',
      fontFamily: '"Inter Tight", system-ui, sans-serif',
      display: 'flex', flexDirection: 'column' },
    top: { display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '22px 48px', borderBottom: '0.5px solid #e0e0e0' },
    brand: { fontFamily: '"Fraunces", serif', fontSize: 24,
      fontStyle: 'italic', fontWeight: 500 },
    nav: { display: 'flex', gap: 26, fontSize: 13, fontWeight: 500 },
    iconRow: { display: 'flex', gap: 14 },
    body: { flex: 1, display: 'grid', gridTemplateColumns: '1.4fr 1fr',
      gap: 48, padding: '40px 48px', minHeight: 0 },
    left: { display: 'flex', flexDirection: 'column', gap: 14, minHeight: 0 },
    frame: { flex: 1,
      background: 'linear-gradient(180deg, #eef0eb 0%, #dde0d8 100%)',
      borderRadius: 2, padding: 56, display: 'flex',
      alignItems: 'center', justifyContent: 'center',
      position: 'relative' },
    print: { width: '70%', aspectRatio: '0.78',
      background: 'linear-gradient(180deg, #c0d0e8, #5a4a7a 50%, #0e1820)',
      boxShadow: '0 20px 50px rgba(0,0,0,0.18), 0 0 0 12px #fff',
      position: 'relative' },
    edition: { position: 'absolute', bottom: 16, right: 16,
      fontFamily: '"Fraunces", serif', fontStyle: 'italic',
      fontSize: 13, color: '#5a5a52' },
    thRow: { display: 'flex', gap: 10, flex: 'none' },
    th: (g, a) => ({ width: 64, height: 80, background: g,
      border: a ? '1.5px solid #1a1a1a' : '1px solid #e0e0e0',
      padding: 8 }),
    thInner: (g) => ({ width: '100%', height: '100%', background: g }),
    right: { display: 'flex', flexDirection: 'column', gap: 16,
      overflowY: 'auto', minHeight: 0 },
    eb: { fontSize: 11, color: '#888', letterSpacing: '0.16em',
      textTransform: 'uppercase' },
    name: { fontFamily: '"Fraunces", serif', fontSize: 44,
      fontWeight: 400, fontStyle: 'italic', letterSpacing: '-0.01em',
      lineHeight: 1.0, margin: '4px 0' },
    artist: { fontSize: 15, color: '#3a3a3a',
      paddingBottom: 16, borderBottom: '0.5px solid #e0e0e0' },
    artistA: { textDecoration: 'underline', textUnderlineOffset: 3 },
    bullet: { display: 'flex', gap: 6, fontSize: 13, color: '#5a5a52',
      flexWrap: 'wrap' },
    desc: { fontSize: 14, lineHeight: 1.6, color: '#3a3a3a' },
    label: { fontSize: 10, fontWeight: 700, letterSpacing: '0.18em',
      textTransform: 'uppercase', color: '#888' },
    sizeRow: { display: 'flex', flexDirection: 'column', gap: 6 },
    sizeOpt: (a, sold) => ({ display: 'flex', justifyContent: 'space-between',
      padding: '12px 16px',
      border: a ? '1.5px solid #1a1a1a' : '1px solid #e0e0e0',
      borderRadius: 2, fontSize: 13,
      color: sold ? '#a8a8a0' : '#1a1a1a',
      cursor: sold ? 'not-allowed' : 'pointer',
      background: a ? '#eef0eb' : '#fff' }),
    sizeN: { fontWeight: 600 },
    sizeRight: { display: 'flex', gap: 12, alignItems: 'center' },
    sizePr: { fontFamily: '"Fraunces", serif', fontSize: 17 },
    sizeMeta: { fontSize: 11, color: '#888', fontStyle: 'italic' },
    frameRow: { display: 'flex', gap: 6 },
    frameOpt: (a) => ({ flex: 1, padding: '10px',
      border: a ? '1.5px solid #1a1a1a' : '1px solid #e0e0e0',
      borderRadius: 2, fontSize: 11, textAlign: 'center', fontWeight: 600,
      letterSpacing: '0.06em', textTransform: 'uppercase' }),
    cta: { background: '#1a1a1a', color: '#fff',
      padding: '16px 0', textAlign: 'center', fontSize: 13,
      fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
      marginTop: 4 },
    footer: { display: 'flex', gap: 24, fontSize: 12, color: '#888',
      paddingTop: 14, borderTop: '0.5px solid #e0e0e0', marginTop: 4 },
  };
  return (
    <div style={s.root}>
      <div style={s.top}>
        <div style={s.brand}>Marais Editions</div>
        <div style={s.nav}><span>Prints</span><span>Artists</span><span>Editions</span><span>Journal</span><span>Visit</span></div>
        <div style={s.iconRow}>⌕ ♡ Cart</div>
      </div>
      <div style={s.body}>
        <div style={s.left}>
          <div style={s.frame}>
            <div style={s.print}>
              <div style={s.edition}>2 / 50</div>
            </div>
          </div>
          <div style={s.thRow}>
            <div style={s.th('#eef0eb', true)}><div style={s.thInner('linear-gradient(180deg, #c0d0e8, #5a4a7a 50%, #0e1820)')}></div></div>
            <div style={s.th('#eef0eb')}><div style={s.thInner('linear-gradient(135deg, #c0d0e8, #0e1820)')}></div></div>
            <div style={s.th('#1a1a1a')}><div style={s.thInner('linear-gradient(180deg, #c0d0e8, #5a4a7a 50%, #0e1820)')}></div></div>
            <div style={s.th('linear-gradient(180deg, #c0d0e8, #5a4a7a 50%, #0e1820)')}><div></div></div>
          </div>
        </div>
        <div style={s.right}>
          <div style={s.eb}>The Spring Editions · 042</div>
          <h1 style={s.name}>Long Afternoon</h1>
          <div style={s.artist}>by <span style={s.artistA}>Maria Eklöf</span> · Stockholm · b. 1984</div>
          <div style={s.bullet}>
            <span>◇ Edition of 50</span><span>·</span>
            <span>Giclée print, Hahnemühle 308gsm</span><span>·</span>
            <span>Signed &amp; numbered</span>
          </div>
          <p style={s.desc}>
            "Long Afternoon" was made in Comporta in August 2024, the last
            print in Eklöf's three-year cycle on low light and stillness.
            Each print is hand-signed in pencil and shipped flat in a
            cotton-wrapped tube from our Marais studio.
          </p>
          <div>
            <div style={s.label}>Paper size</div>
            <div style={{ ...s.sizeRow, marginTop: 8 }}>
              <div style={s.sizeOpt(false, false)}>
                <span style={s.sizeN}>A3 · 297 × 420 mm</span>
                <span style={s.sizeRight}>
                  <span style={s.sizeMeta}>Ed. of 50</span>
                  <span style={s.sizePr}>£ 145</span>
                </span>
              </div>
              <div style={s.sizeOpt(true, false)}>
                <span style={s.sizeN}>A2 · 420 × 594 mm</span>
                <span style={s.sizeRight}>
                  <span style={s.sizeMeta}>Ed. of 50 · 12 remain</span>
                  <span style={s.sizePr}>£ 220</span>
                </span>
              </div>
              <div style={s.sizeOpt(false, true)}>
                <span style={s.sizeN}>A1 · 594 × 841 mm</span>
                <span style={s.sizeRight}>
                  <span style={s.sizeMeta}>Sold out</span>
                  <span style={s.sizePr}>—</span>
                </span>
              </div>
            </div>
          </div>
          <div>
            <div style={s.label}>Framing · + £ 80</div>
            <div style={{ ...s.frameRow, marginTop: 8 }}>
              <div style={s.frameOpt(true)}>Unframed</div>
              <div style={s.frameOpt()}>Natural oak</div>
              <div style={s.frameOpt()}>Black ash</div>
            </div>
          </div>
          <div style={s.cta}>Add to cart — £ 220</div>
          <div style={s.footer}>
            <span>Ships in 5 — 7 days</span>
            <span>·</span>
            <span>Certificate of authenticity</span>
            <span>·</span>
            <span>Free UK shipping</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 10. PROPERTY DETAIL — Henley & Wayne, full listing page
// ─────────────────────────────────────────────────────────────────────────────
function PropertyDetail() {
  const s = {
    root: { width: GW, height: GH, background: '#0e1116', color: '#e8e8ec',
      fontFamily: '"Inter Tight", system-ui, sans-serif',
      display: 'flex', flexDirection: 'column' },
    top: { display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '18px 36px', borderBottom: '1px solid rgba(255,255,255,0.06)' },
    brand: { fontFamily: '"Cormorant Garamond", serif', fontSize: 22,
      fontWeight: 500, letterSpacing: '0.18em', color: '#c8aa6c' },
    nav: { display: 'flex', gap: 30, fontSize: 12, color: '#a0a08f',
      letterSpacing: '0.12em', textTransform: 'uppercase' },
    cta: { color: '#c8aa6c', borderBottom: '1px solid #c8aa6c',
      paddingBottom: 3, fontSize: 11, letterSpacing: '0.14em',
      textTransform: 'uppercase' },
    body: { flex: 1, display: 'grid', gridTemplateColumns: '1.6fr 1fr',
      minHeight: 0 },
    galCol: { padding: 32, borderRight: '1px solid rgba(255,255,255,0.06)',
      display: 'flex', flexDirection: 'column', gap: 12, minHeight: 0 },
    bigImg: { flex: 1.6,
      background: 'linear-gradient(180deg, #4a4030 0%, #2a1f14 50%, #06080c 100%)',
      borderRadius: 4, position: 'relative', overflow: 'hidden' },
    bigLbl: { position: 'absolute', top: 16, left: 16,
      color: '#c8aa6c', fontSize: 10, letterSpacing: '0.3em',
      textTransform: 'uppercase' },
    pager: { position: 'absolute', bottom: 16, right: 16,
      background: 'rgba(0,0,0,0.5)', padding: '5px 12px',
      borderRadius: 2, fontSize: 11, fontFamily: 'ui-monospace, monospace' },
    thRow: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 10, height: 90, flex: 'none' },
    th: (g, a) => ({ background: g, borderRadius: 2,
      border: a ? '1.5px solid #c8aa6c' : '1px solid rgba(255,255,255,0.06)' }),
    right: { padding: 32, display: 'flex', flexDirection: 'column',
      gap: 18, overflowY: 'auto', minHeight: 0 },
    eb: { fontSize: 10, color: '#c8aa6c', letterSpacing: '0.3em',
      textTransform: 'uppercase' },
    name: { fontFamily: '"Cormorant Garamond", serif',
      fontSize: 38, fontWeight: 400, letterSpacing: '-0.015em',
      lineHeight: 1.05, color: '#f3eee2', margin: '8px 0 0' },
    addr: { fontSize: 13, color: '#a0a08f', marginTop: 6,
      fontStyle: 'italic', fontFamily: '"Cormorant Garamond", serif' },
    priceRow: { display: 'flex', justifyContent: 'space-between',
      alignItems: 'baseline', paddingBottom: 18,
      borderBottom: '1px solid rgba(255,255,255,0.08)' },
    priceL: { fontSize: 10, color: '#7a7a82',
      letterSpacing: '0.2em', textTransform: 'uppercase' },
    priceN: { fontFamily: '"Cormorant Garamond", serif',
      fontSize: 36, color: '#c8aa6c', marginTop: 4 },
    monthly: { fontSize: 11, color: '#7a7a82', marginTop: 2,
      fontFamily: 'ui-monospace, monospace' },
    specs: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 0, paddingBottom: 18,
      borderBottom: '1px solid rgba(255,255,255,0.08)' },
    spec: { padding: '0 0 0 14px',
      borderLeft: '1px solid rgba(255,255,255,0.06)' },
    specV: { fontFamily: '"Cormorant Garamond", serif',
      fontSize: 22, color: '#f3eee2' },
    specL: { fontSize: 9, letterSpacing: '0.2em',
      textTransform: 'uppercase', color: '#7a7a82', marginTop: 2 },
    desc: { fontSize: 13, color: '#c0c0c4', lineHeight: 1.7 },
    feats: { fontSize: 12, color: '#a0a08f', display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)', gap: '6px 16px' },
    f: { display: 'flex', gap: 8 },
    fDot: { color: '#c8aa6c' },
    agent: { display: 'flex', gap: 14, padding: '16px 0',
      borderTop: '1px solid rgba(255,255,255,0.08)' },
    agentAv: { width: 50, height: 50, borderRadius: '50%',
      background: 'linear-gradient(135deg, #c8aa6c, #6a5a3a)',
      flex: 'none' },
    agentMain: { flex: 1 },
    agentN: { fontFamily: '"Cormorant Garamond", serif',
      fontSize: 17, color: '#f3eee2' },
    agentR: { fontSize: 11, color: '#7a7a82',
      letterSpacing: '0.06em' },
    actions: { display: 'flex', flexDirection: 'column', gap: 8 },
    bookBtn: { background: '#c8aa6c', color: '#0e1116',
      padding: '12px 0', textAlign: 'center', fontSize: 11,
      letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700 },
    callBtn: { border: '1px solid rgba(255,255,255,0.14)',
      padding: '12px 0', textAlign: 'center', fontSize: 11,
      letterSpacing: '0.18em', textTransform: 'uppercase',
      color: '#c8aa6c' },
  };
  return (
    <div style={s.root}>
      <div style={s.top}>
        <div style={s.brand}>HENLEY &amp; WAYNE</div>
        <div style={s.nav}><span>Buy</span><span>Let</span><span>Sell</span><span>Journal</span><span>About</span></div>
        <div style={s.cta}>Book a viewing</div>
      </div>
      <div style={s.body}>
        <div style={s.galCol}>
          <div style={s.bigImg}>
            <div style={s.bigLbl}>Listing 042 · Mayfair</div>
            <div style={s.pager}>03 / 24 · view floorplan ⌗</div>
          </div>
          <div style={s.thRow}>
            <div style={s.th('linear-gradient(135deg, #6a5a3a, #2a1a0a)', true)}></div>
            <div style={s.th('linear-gradient(135deg, #4a4030, #1f1410)')}></div>
            <div style={s.th('linear-gradient(135deg, #8a7a5a, #1a2230)')}></div>
            <div style={s.th('linear-gradient(135deg, #2a3040, #0a141a)')}></div>
          </div>
        </div>
        <div style={s.right}>
          <div>
            <div style={s.eb}>Mayfair · W1J · For sale</div>
            <h1 style={s.name}>The Belgravia<br/>Mews House</h1>
            <div style={s.addr}>14 Belgravia Mews North, London W1J 8GL</div>
          </div>
          <div style={s.priceRow}>
            <div>
              <div style={s.priceL}>Guide price</div>
              <div style={s.priceN}>£ 8,400,000</div>
              <div style={s.monthly}>Stamp duty est. £ 1,043,750</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={s.priceL}>Tenure</div>
              <div style={{ fontFamily: '"Cormorant Garamond", serif',
                fontSize: 22, color: '#f3eee2', marginTop: 4 }}>Freehold</div>
            </div>
          </div>
          <div style={s.specs}>
            <div style={s.spec}><div style={s.specV}>4</div><div style={s.specL}>Beds</div></div>
            <div style={s.spec}><div style={s.specV}>3</div><div style={s.specL}>Baths</div></div>
            <div style={s.spec}><div style={s.specV}>248</div><div style={s.specL}>m² · 2,670 sq ft</div></div>
            <div style={s.spec}><div style={s.specV}>B</div><div style={s.specL}>EPC rating</div></div>
          </div>
          <p style={s.desc}>
            A four-bedroom mews house on a gated cobbled lane just off
            Curzon Street. Refurbished in 2024 by Henley &amp; Wayne Interiors
            to a turnkey specification. Discreet parking for two cars, a
            walled garden, and a third-floor study with views over the
            mews chimneys.
          </p>
          <div style={s.feats}>
            <div style={s.f}><span style={s.fDot}>◆</span> Refurbished 2024</div>
            <div style={s.f}><span style={s.fDot}>◆</span> Gated mews · 24h</div>
            <div style={s.f}><span style={s.fDot}>◆</span> Two-car parking</div>
            <div style={s.f}><span style={s.fDot}>◆</span> Walled south garden</div>
            <div style={s.f}><span style={s.fDot}>◆</span> Underfloor heating</div>
            <div style={s.f}><span style={s.fDot}>◆</span> Lutron throughout</div>
          </div>
          <div style={s.agent}>
            <div style={s.agentAv}></div>
            <div style={s.agentMain}>
              <div style={s.agentN}>Edward Wayne</div>
              <div style={s.agentR}>Partner · Mayfair office</div>
              <div style={{ fontSize: 11, color: '#7a7a82', marginTop: 4 }}>+44 (0)20 7491 0042 · ew@henley-wayne.co.uk</div>
            </div>
          </div>
          <div style={s.actions}>
            <div style={s.bookBtn}>Book a private viewing →</div>
            <div style={s.callBtn}>Request a brochure</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 11. VEHICLE DETAIL — Null Point, 911 GT3 listing
// ─────────────────────────────────────────────────────────────────────────────
function VehicleDetail() {
  const s = {
    root: { width: GW, height: GH, background: '#0a0a0d', color: '#fff',
      fontFamily: '"Archivo", "Inter Tight", sans-serif',
      display: 'flex', flexDirection: 'column' },
    top: { display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '18px 36px', borderBottom: '1px solid rgba(255,255,255,0.06)' },
    brand: { fontFamily: '"Archivo Black", sans-serif', fontSize: 20,
      letterSpacing: '-0.04em' },
    nav: { display: 'flex', gap: 28, fontSize: 12, fontWeight: 600,
      letterSpacing: '0.08em', textTransform: 'uppercase' },
    cta: { background: '#c8ff42', color: '#0a0a0d',
      padding: '8px 14px', fontSize: 12, fontWeight: 700,
      letterSpacing: '0.06em', textTransform: 'uppercase' },
    crumb: { padding: '12px 36px', fontSize: 11,
      letterSpacing: '0.16em', textTransform: 'uppercase',
      color: '#7a7a82' },
    body: { flex: 1, display: 'grid', gridTemplateColumns: '1.5fr 1fr',
      gap: 0, padding: '0 36px 24px', minHeight: 0 },
    galCol: { display: 'flex', flexDirection: 'column', gap: 10,
      paddingRight: 24, minHeight: 0 },
    bigImg: { flex: 1, minHeight: 0,
      background: 'radial-gradient(ellipse at 50% 75%, rgba(255,234,77,0.18), transparent 60%), linear-gradient(180deg, #1a1a20 0%, #0a0a0d 60%, #2a2a30 100%)',
      borderRadius: 4, position: 'relative', overflow: 'hidden' },
    car: { position: 'absolute', left: '50%', top: '55%',
      transform: 'translate(-50%, -50%)',
      width: '78%', height: '42%',
      background: 'linear-gradient(180deg, #6a6a74 0%, #2a2a30 70%, #1a1a1d 100%)',
      borderRadius: '40% 12% 8% 12% / 60% 30% 20% 30%',
      boxShadow: '0 40px 80px rgba(0,0,0,0.7)' },
    carShadow: { position: 'absolute', left: '12%', right: '12%', bottom: '20%',
      height: 40, background: 'radial-gradient(ellipse, rgba(0,0,0,0.7), transparent 70%)',
      filter: 'blur(10px)' },
    imgEyebrow: { position: 'absolute', top: 16, left: 16,
      color: '#c8ff42', fontSize: 10, letterSpacing: '0.24em',
      textTransform: 'uppercase' },
    imgPager: { position: 'absolute', bottom: 16, left: 16,
      display: 'flex', gap: 4, alignItems: 'center', fontSize: 11,
      color: 'rgba(255,255,255,0.7)',
      fontFamily: 'ui-monospace, monospace' },
    thRow: { display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)',
      gap: 6, flex: 'none', height: 78 },
    th: (g, a) => ({ background: g, borderRadius: 3,
      border: a ? '1.5px solid #c8ff42' : '1px solid rgba(255,255,255,0.06)' }),
    right: { display: 'flex', flexDirection: 'column', gap: 16,
      overflowY: 'auto', minHeight: 0 },
    eb: { fontSize: 10, color: '#c8ff42', letterSpacing: '0.24em',
      textTransform: 'uppercase' },
    name: { fontFamily: '"Archivo Black", sans-serif',
      fontSize: 42, fontWeight: 900, letterSpacing: '-0.04em',
      lineHeight: 0.95, margin: '4px 0 0' },
    sub: { fontSize: 12, color: '#a0a0a8',
      fontFamily: 'ui-monospace, monospace', marginTop: 8 },
    priceRow: { display: 'flex', justifyContent: 'space-between',
      alignItems: 'baseline', paddingBottom: 14,
      borderBottom: '1px solid rgba(255,255,255,0.08)' },
    priceL: { fontSize: 9, color: '#7a7a82',
      letterSpacing: '0.18em', textTransform: 'uppercase' },
    priceN: { fontFamily: '"Archivo Black", sans-serif',
      fontSize: 36, letterSpacing: '-0.03em', marginTop: 4 },
    priceR: { fontSize: 11, color: '#a0a0a8',
      fontFamily: 'ui-monospace, monospace', marginTop: 4 },
    statRow: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 0 },
    statB: { borderLeft: '2px solid #c8ff42', paddingLeft: 12 },
    statV: { fontFamily: '"Archivo Black", sans-serif',
      fontSize: 22, letterSpacing: '-0.02em' },
    statL: { fontSize: 9, color: '#7a7a82', letterSpacing: '0.18em',
      textTransform: 'uppercase' },
    notes: { fontSize: 12, lineHeight: 1.6, color: '#c0c0c8' },
    spec: { display: 'flex', justifyContent: 'space-between',
      padding: '8px 0', fontSize: 12,
      borderBottom: '1px solid rgba(255,255,255,0.06)' },
    specL2: { color: '#7a7a82', fontFamily: 'ui-monospace, monospace' },
    specV2: { fontWeight: 600 },
    actions: { display: 'flex', gap: 8 },
    actBtn: { flex: 1, padding: '14px 0', textAlign: 'center',
      fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
      textTransform: 'uppercase' },
    primeAct: { background: '#c8ff42', color: '#0a0a0d' },
    secAct: { background: 'transparent',
      border: '1px solid rgba(255,255,255,0.14)', color: '#fff' },
  };
  return (
    <div style={s.root}>
      <div style={s.top}>
        <div style={s.brand}>★ NULL POINT</div>
        <div style={s.nav}><span>Inventory</span><span>Auctions</span><span>Concierge</span><span>Journal</span></div>
        <div style={s.cta}>Sell your car →</div>
      </div>
      <div style={s.crumb}>Inventory / Porsche / 911 / 991.1 GT3 · 2014</div>
      <div style={s.body}>
        <div style={s.galCol}>
          <div style={s.bigImg}>
            <div style={s.imgEyebrow}>NP-LOT-042 · Sussex consignment</div>
            <div style={s.carShadow}></div>
            <div style={s.car}></div>
            <div style={s.imgPager}>
              <span style={{ width: 18, height: 2, background: '#c8ff42' }}></span>
              <span style={{ width: 18, height: 2, background: 'rgba(255,255,255,0.2)' }}></span>
              <span style={{ width: 18, height: 2, background: 'rgba(255,255,255,0.2)' }}></span>
              <span style={{ marginLeft: 8 }}>01 / 86 · video tour ▷</span>
            </div>
          </div>
          <div style={s.thRow}>
            <div style={s.th('linear-gradient(135deg, #4a5a6a, #1a2a3a)', true)}></div>
            <div style={s.th('linear-gradient(135deg, #3a4050, #0a141a)')}></div>
            <div style={s.th('linear-gradient(135deg, #1a1a1f, #4a4a52)')}></div>
            <div style={s.th('linear-gradient(135deg, #5a5a64, #1a1a1d)')}></div>
            <div style={s.th('linear-gradient(135deg, #2a2a32, #06060a)')}></div>
          </div>
        </div>
        <div style={s.right}>
          <div>
            <div style={s.eb}>2014 · UK · 32,000 mi</div>
            <h1 style={s.name}>911 GT3<br/>991.1</h1>
            <div style={s.sub}>VIN · WP0ZZZ99ZES182042 · PDK · Carrara White</div>
          </div>
          <div style={s.priceRow}>
            <div>
              <div style={s.priceL}>Offers over</div>
              <div style={s.priceN}>£ 148,000</div>
              <div style={s.priceR}>Listing 042 · live · 14 watching</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={s.priceL}>Reserve</div>
              <div style={{ fontFamily: '"Archivo Black", sans-serif',
                fontSize: 16, marginTop: 4, color: '#c8ff42' }}>● Met</div>
            </div>
          </div>
          <div style={s.statRow}>
            <div style={s.statB}><div style={s.statV}>32k</div><div style={s.statL}>Miles</div></div>
            <div style={s.statB}><div style={s.statV}>475</div><div style={s.statL}>BHP</div></div>
            <div style={s.statB}><div style={s.statV}>3.4s</div><div style={s.statL}>0—60</div></div>
            <div style={s.statB}><div style={s.statV}>198</div><div style={s.statL}>Top mph</div></div>
          </div>
          <p style={s.notes}>
            Single-owner UK car from new. Full Porsche main-dealer history,
            most recent service Apr 2026. Carrara White over Black leather,
            PCCB ceramics, lift kit, sports chrono, Bose. Fresh MOT, two
            keys, original books and tools.
          </p>
          <div>
            <div style={s.spec}><span style={s.specL2}>Transmission</span><span style={s.specV2}>7-spd PDK</span></div>
            <div style={s.spec}><span style={s.specL2}>Engine</span><span style={s.specV2}>3.8 flat-six · naturally aspirated</span></div>
            <div style={s.spec}><span style={s.specL2}>Drive</span><span style={s.specV2}>RWD</span></div>
            <div style={s.spec}><span style={s.specL2}>Owners</span><span style={s.specV2}>1 from new</span></div>
            <div style={s.spec}><span style={s.specL2}>Location</span><span style={s.specV2}>Sussex · viewings by appointment</span></div>
          </div>
          <div style={s.actions}>
            <div style={{ ...s.actBtn, ...s.primeAct }}>Make an offer →</div>
            <div style={{ ...s.actBtn, ...s.secAct }}>Add to watch list</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 12. APP DETAIL — App Store style, Tide meditation
// ─────────────────────────────────────────────────────────────────────────────
function AppDetail() {
  const s = {
    root: { width: GW, height: GH, background: '#fff', color: '#0a0a0a',
      fontFamily: '"Inter Tight", system-ui, sans-serif',
      display: 'flex', flexDirection: 'column' },
    top: { display: 'flex', alignItems: 'center', gap: 24,
      padding: '12px 32px', borderBottom: '0.5px solid #ececea' },
    sideNav: { display: 'flex', gap: 18, fontSize: 13, color: '#5a5a52' },
    search: { marginLeft: 'auto', background: '#f3f3f0',
      borderRadius: 8, padding: '6px 14px', fontSize: 13,
      color: '#7a7a72', width: 240 },
    body: { flex: 1, display: 'grid', gridTemplateColumns: '220px 1fr',
      minHeight: 0 },
    cats: { padding: '24px 16px 24px 32px',
      borderRight: '0.5px solid #ececea',
      display: 'flex', flexDirection: 'column', gap: 4 },
    catH: { fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
      textTransform: 'uppercase', color: '#7a7a72',
      margin: '12px 8px 6px' },
    cat: (a) => ({ padding: '7px 10px', borderRadius: 7, fontSize: 13,
      color: a ? '#0a0a0a' : '#3a3a32', fontWeight: a ? 600 : 400,
      background: a ? '#eef4fc' : 'transparent' }),
    main: { padding: '24px 36px', overflowY: 'auto',
      display: 'flex', flexDirection: 'column', gap: 24 },
    hero: { display: 'grid', gridTemplateColumns: '160px 1fr auto',
      gap: 24, alignItems: 'center',
      paddingBottom: 24, borderBottom: '0.5px solid #ececea' },
    icon: { width: 160, height: 160, borderRadius: 36,
      background: 'linear-gradient(160deg, #4cc8ff 0%, #1a6fa8 70%, #06324a 100%)',
      boxShadow: '0 14px 40px rgba(28,90,140,0.3)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: '"Fraunces", serif', color: '#fff',
      fontSize: 72, fontStyle: 'italic', fontWeight: 500 },
    h1: { fontSize: 32, fontWeight: 700, margin: 0, letterSpacing: '-0.02em',
      lineHeight: 1.1 },
    h2: { fontSize: 15, color: '#5a5a52', marginTop: 4 },
    badges: { display: 'flex', gap: 18, marginTop: 10, fontSize: 11,
      color: '#5a5a52' },
    badge: { display: 'flex', flexDirection: 'column', gap: 1 },
    badgeN: { fontSize: 14, fontWeight: 700, color: '#0a0a0a' },
    starRow: { display: 'flex', gap: 4, alignItems: 'center', marginTop: 1 },
    starsBlue: { color: '#1a6fa8', fontSize: 13 },
    install: { background: '#1a6fa8', color: '#fff',
      padding: '11px 28px', borderRadius: 999, fontSize: 14,
      fontWeight: 700 },
    installS: { fontSize: 11, color: '#7a7a72', marginTop: 6,
      textAlign: 'center' },
    sect: { display: 'flex', flexDirection: 'column', gap: 12 },
    sectH: { display: 'flex', justifyContent: 'space-between',
      alignItems: 'baseline' },
    sectT: { fontSize: 17, fontWeight: 700, letterSpacing: '-0.01em' },
    sectM: { fontSize: 13, color: '#1a6fa8', fontWeight: 500 },
    shotsRow: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 14 },
    shot: (g) => ({ width: '100%', aspectRatio: '0.46', background: g,
      borderRadius: 18, position: 'relative', overflow: 'hidden',
      border: '1px solid #ececea' }),
    shotInner: { position: 'absolute', inset: 14, borderRadius: 8,
      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
      padding: 16, color: '#fff' },
    shotT: { fontFamily: '"Fraunces", serif', fontStyle: 'italic',
      fontSize: 17, letterSpacing: '-0.01em', lineHeight: 1.15 },
    shotS: { fontSize: 10, opacity: 0.85, marginTop: 4 },
    desc: { fontSize: 14, lineHeight: 1.65, color: '#3a3a32',
      maxWidth: 720 },
    reviewsGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 14 },
    review: { padding: 16, background: '#f7faff',
      border: '1px solid #e2ecf6', borderRadius: 12 },
    revH: { display: 'flex', justifyContent: 'space-between',
      alignItems: 'baseline', marginBottom: 6 },
    revT: { fontWeight: 700, fontSize: 13 },
    revA: { fontSize: 11, color: '#5a5a52' },
    revB: { fontSize: 13, lineHeight: 1.5, color: '#1a1a22' },
  };
  return (
    <div style={s.root}>
      <div style={s.top}>
        <div style={{ fontWeight: 700, fontSize: 16, letterSpacing: '-0.02em' }}>📂 Atelier Apps</div>
        <div style={s.sideNav}>
          <span>Today</span><span>Apps</span><span>Arcade</span><span>Stories</span>
        </div>
        <div style={s.search}>⌕ &nbsp; Search</div>
      </div>
      <div style={s.body}>
        <div style={s.cats}>
          <div style={s.cat(true)}><b>↪ Editor's choice</b></div>
          <div style={s.catH}>Categories</div>
          <div style={s.cat()}>Health &amp; mindful</div>
          <div style={s.cat()}>Productivity</div>
          <div style={s.cat()}>Photo</div>
          <div style={s.cat()}>Travel</div>
          <div style={s.cat()}>Reading</div>
          <div style={s.cat()}>Music</div>
          <div style={s.cat()}>Games</div>
          <div style={s.catH}>Trends</div>
          <div style={s.cat()}>Slow tech</div>
          <div style={s.cat()}>Hand-drawn</div>
          <div style={s.cat()}>Indies under £5</div>
        </div>
        <div style={s.main}>
          <div style={s.hero}>
            <div style={s.icon}>t</div>
            <div>
              <h1 style={s.h1}>Tide — meditation &amp; sleep</h1>
              <div style={s.h2}>By Tide Labs · Sleep, focus, breath, quiet music.</div>
              <div style={s.badges}>
                <div style={s.badge}>
                  <span style={s.badgeN}>4.9</span>
                  <span style={s.starRow}><span style={s.starsBlue}>★★★★★</span></span>
                  <span>184k ratings</span>
                </div>
                <div style={s.badge}>
                  <span style={s.badgeN}>#1</span>
                  <span>Health &amp; mindful</span>
                  <span>Editor's choice · 2024</span>
                </div>
                <div style={s.badge}>
                  <span style={s.badgeN}>12+</span>
                  <span>Age</span>
                  <span>Tide Labs</span>
                </div>
                <div style={s.badge}>
                  <span style={s.badgeN}>FREE</span>
                  <span>Offers in-app</span>
                  <span>Pro · £6/mo</span>
                </div>
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={s.install}>Install</div>
              <div style={s.installS}>184MB · iPhone &amp; iPad</div>
              <div style={{ ...s.installS, color: '#1a6fa8', marginTop: 8 }}>↗ Share &nbsp;&nbsp; ♡ Wishlist</div>
            </div>
          </div>
          <div style={s.sect}>
            <div style={s.sectH}>
              <div style={s.sectT}>Preview</div>
              <div style={s.sectM}>iPhone · iPad · Watch</div>
            </div>
            <div style={s.shotsRow}>
              <div style={s.shot('linear-gradient(160deg, #4cc8ff 0%, #1a6fa8 100%)')}>
                <div style={s.shotInner}>
                  <div style={s.shotT}>"Quiet rain in a wooden room."</div>
                  <div style={s.shotS}>4h · loop · downloadable</div>
                </div>
              </div>
              <div style={s.shot('linear-gradient(160deg, #1a3a5a 0%, #06141a 100%)')}>
                <div style={s.shotInner}>
                  <div style={s.shotT}>Wind down</div>
                  <div style={s.shotS}>Sleep cycle · 8 weeks</div>
                </div>
              </div>
              <div style={s.shot('linear-gradient(160deg, #c0d0e8 0%, #5a4a7a 100%)')}>
                <div style={s.shotInner}>
                  <div style={s.shotT}>Today, breathe.</div>
                  <div style={s.shotS}>4-7-8 · 3 minutes</div>
                </div>
              </div>
              <div style={s.shot('linear-gradient(160deg, #c8e8c4 0%, #2a5a4a 100%)')}>
                <div style={s.shotInner}>
                  <div style={s.shotT}>Focus, gently.</div>
                  <div style={s.shotS}>25/5 · ambient piano</div>
                </div>
              </div>
            </div>
          </div>
          <div style={s.sect}>
            <div style={s.sectT}>About</div>
            <p style={s.desc}>
              Tide is a meditation, sleep, and focus app built around one idea:
              the quiet things help. 1,200+ guided sessions, 240 ambient
              soundscapes, and the most-requested feature in 2026 — Quiet Mode,
              a single tap that silences your phone and starts a session.
              No streaks. No notifications. Just slow.
            </p>
          </div>
          <div style={s.sect}>
            <div style={s.sectH}>
              <div style={s.sectT}>Ratings &amp; reviews</div>
              <div style={s.sectM}>See all 184,208 →</div>
            </div>
            <div style={s.reviewsGrid}>
              <div style={s.review}>
                <div style={s.revH}>
                  <div style={s.revT}>The only one I kept</div>
                  <div style={s.revA}>★★★★★ · Anya I.</div>
                </div>
                <div style={s.revB}>Tried six. Deleted five. Tide is the only one that doesn't try to fix me.</div>
              </div>
              <div style={s.review}>
                <div style={s.revH}>
                  <div style={s.revT}>Wind down works</div>
                  <div style={s.revA}>★★★★★ · V. Lev</div>
                </div>
                <div style={s.revB}>Two weeks in and I'm asleep before the second track. The ambient mixes are unusually good — they didn't cheap out on the audio.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Canvas
// ─────────────────────────────────────────────────────────────────────────────
function ProfilesApp() {
  return (
    <DesignCanvas>
      <DCSection id="profiles" title="Profile pages"
        subtitle="Five takes on who-is-this — social, editorial portfolio, customer account, sport tracker, music creator.">
        <DCArtboard id="p-social"    label="01 · Social profile (Threads-ish)" width={GW} height={GH}><SocialProfile /></DCArtboard>
        <DCArtboard id="p-port"      label="02 · Designer portfolio"           width={GW} height={GH}><PortfolioProfile /></DCArtboard>
        <DCArtboard id="p-account"   label="03 · Customer account · Atelier"   width={GW} height={GH}><CustomerAccount /></DCArtboard>
        <DCArtboard id="p-athlete"   label="04 · Athlete · Pace//Form"         width={GW} height={GH}><AthleteProfile /></DCArtboard>
        <DCArtboard id="p-creator"   label="05 · Creator · music profile"      width={GW} height={GH}><CreatorProfile /></DCArtboard>
      </DCSection>
      <DCSection id="pdp-commerce" title="Product detail · commerce"
        subtitle="Four PDPs across categories — apparel, furniture, audio hardware, fine-art prints.">
        <DCArtboard id="p-fashion"   label="06 · Fashion PDP · Atelier Form"   width={GW} height={GH}><FashionPDP /></DCArtboard>
        <DCArtboard id="p-furn"      label="07 · Furniture PDP · kotona"       width={GW} height={GH}><FurniturePDP /></DCArtboard>
        <DCArtboard id="p-tech"      label="08 · Tech PDP · Nørr Audio"        width={GW} height={GH}><TechPDP /></DCArtboard>
        <DCArtboard id="p-print"     label="09 · Print PDP · Marais Editions"  width={GW} height={GH}><PrintPDP /></DCArtboard>
      </DCSection>
      <DCSection id="pdp-listings" title="Detail pages · listings"
        subtitle="Three listing detail views — property, vehicle, and an app store entry.">
        <DCArtboard id="p-property"  label="10 · Property detail · Henley &amp; Wayne" width={GW} height={GH}><PropertyDetail /></DCArtboard>
        <DCArtboard id="p-vehicle"   label="11 · Vehicle detail · Null Point"        width={GW} height={GH}><VehicleDetail /></DCArtboard>
        <DCArtboard id="p-app"       label="12 · App detail · App Store-ish"         width={GW} height={GH}><AppDetail /></DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

const profilesRoot = ReactDOM.createRoot(document.getElementById('root'));
profilesRoot.render(<ProfilesApp />);
