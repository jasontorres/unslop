// 16 social media post examples — varied platforms, formats, aesthetics.

// ─────────────────────────────────────────────────────────────────────────────
// Shared post chrome — handle, like row, etc.
// ─────────────────────────────────────────────────────────────────────────────
function IGHeader({ name, handle, av, dark }) {
  const s = {
    row: { display: 'flex', alignItems: 'center', gap: 10,
      padding: '10px 12px', background: dark ? '#0a0a0a' : '#fff',
      color: dark ? '#fff' : '#000' },
    av: { width: 32, height: 32, borderRadius: '50%', background: av,
      flex: 'none', position: 'relative',
      boxShadow: '0 0 0 1.5px #fff, 0 0 0 3px #ff5e6c' },
    nameWrap: { fontSize: 13, fontWeight: 600, flex: 1 },
    handle: { fontSize: 11, color: dark ? '#aaa' : '#888', fontWeight: 400 },
    more: { fontSize: 16, color: dark ? '#fff' : '#000' },
  };
  return (
    <div style={s.row}>
      <div style={s.av}></div>
      <div style={s.nameWrap}>{name}<div style={s.handle}>{handle}</div></div>
      <span style={s.more}>···</span>
    </div>
  );
}

function IGActions({ likes, dark }) {
  const s = {
    row: { display: 'flex', gap: 14, padding: '8px 12px 6px',
      background: dark ? '#0a0a0a' : '#fff',
      color: dark ? '#fff' : '#000', fontSize: 22 },
    likes: { padding: '0 12px 8px', fontSize: 13, fontWeight: 600,
      background: dark ? '#0a0a0a' : '#fff', color: dark ? '#fff' : '#000' },
    save: { marginLeft: 'auto' },
  };
  return (
    <>
      <div style={s.row}>
        <span>♡</span><span>💬</span><span>↗</span>
        <span style={s.save}>⌒</span>
      </div>
      <div style={s.likes}>{likes}</div>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 1. INSTAGRAM POST — Editorial quote (cream + serif)
// ─────────────────────────────────────────────────────────────────────────────
function S1_QuotePost() {
  const s = {
    root: { width: 540, background: '#fff', overflow: 'hidden',
      borderRadius: 12, boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
      fontFamily: '-apple-system, system-ui, sans-serif' },
    post: { width: 540, height: 540, background: '#f4ede0', color: '#1f1c14',
      padding: '56px 52px', display: 'flex', flexDirection: 'column',
      justifyContent: 'space-between', position: 'relative' },
    quoteMark: { fontFamily: '"Playfair Display", serif',
      fontSize: 160, lineHeight: 0.6, color: '#1f1c14', opacity: 0.15,
      position: 'absolute', top: 36, left: 36 },
    quote: { fontFamily: '"Playfair Display", Georgia, serif',
      fontSize: 32, lineHeight: 1.2, fontWeight: 400, letterSpacing: '-0.01em',
      position: 'relative', zIndex: 2 },
    italic: { fontStyle: 'italic' },
    foot: { display: 'flex', justifyContent: 'space-between',
      alignItems: 'flex-end', position: 'relative', zIndex: 2 },
    author: { fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase',
      fontWeight: 600 },
    handle: { fontFamily: '"Playfair Display", serif', fontSize: 14,
      fontStyle: 'italic', opacity: 0.7 },
    caption: { padding: '8px 12px 12px', fontSize: 13, lineHeight: 1.45 },
    capName: { fontWeight: 700 },
  };
  return (
    <div style={s.root}>
      <IGHeader name="thequiettimes" handle="Sponsored" av="linear-gradient(135deg, #c39a4d, #6a3a14)" />
      <div style={s.post}>
        <div style={s.quoteMark}>"</div>
        <div style={s.quote}>
          The thing about reading slowly is that you start <span style={s.italic}>believing</span> you have all the time in the world.
        </div>
        <div style={s.foot}>
          <div style={s.author}>— Anya Iqbal</div>
          <div style={s.handle}>The Quiet Times</div>
        </div>
      </div>
      <IGActions likes="2,408 likes" />
      <div style={s.caption}>
        <span style={s.capName}>thequiettimes</span> Ep 142 with @anyaiqbal is out now. Link in bio. <span style={{ color: '#888' }}>more</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. INSTAGRAM POST — Product launch (bold magenta)
// ─────────────────────────────────────────────────────────────────────────────
function S2_ProductPost() {
  const s = {
    root: { width: 540, background: '#fff', overflow: 'hidden',
      borderRadius: 12, boxShadow: '0 8px 24px rgba(0,0,0,0.08)' },
    post: { width: 540, height: 540, background: '#e6004a', color: '#fff',
      position: 'relative', overflow: 'hidden',
      fontFamily: '"Archivo", "Inter Tight", sans-serif' },
    bigType: { position: 'absolute', left: -10, top: 20,
      fontFamily: '"Archivo Black", sans-serif',
      fontSize: 220, fontWeight: 900, letterSpacing: '-0.06em',
      lineHeight: 0.86, color: '#fff', textTransform: 'uppercase' },
    bigType2: { position: 'absolute', left: -10, top: 200,
      fontFamily: '"Archivo Black", sans-serif',
      fontSize: 220, fontWeight: 900, letterSpacing: '-0.06em',
      lineHeight: 0.86, color: 'transparent', WebkitTextStroke: '3px #fff',
      textTransform: 'uppercase' },
    product: { position: 'absolute', right: 40, top: 60,
      width: 200, height: 260,
      background: 'linear-gradient(160deg, #ffb8a0, #d8806a 50%, #5a2030)',
      borderRadius: 8, transform: 'rotate(8deg)',
      boxShadow: '0 20px 40px rgba(0,0,0,0.4)' },
    sticker: { position: 'absolute', right: 30, top: 280,
      background: '#0a0a0a', color: '#fff',
      width: 92, height: 92, borderRadius: '50%',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexDirection: 'column',
      transform: 'rotate(-12deg)', fontWeight: 800, fontSize: 11,
      letterSpacing: '0.06em', textTransform: 'uppercase',
      textAlign: 'center', lineHeight: 1.2 },
    bottom: { position: 'absolute', bottom: 28, left: 36, right: 36 },
    cta: { display: 'inline-block', background: '#fff', color: '#e6004a',
      padding: '12px 22px', fontWeight: 800, fontSize: 14,
      letterSpacing: '0.12em', textTransform: 'uppercase' },
    caption: { padding: '8px 12px 12px', fontSize: 13, lineHeight: 1.45 },
    capName: { fontWeight: 700 },
  };
  return (
    <div style={s.root}>
      <IGHeader name="haushaus" handle="2h" av="linear-gradient(135deg, #e6004a, #0a0a0a)" />
      <div style={s.post}>
        <div style={s.bigType}>OUT</div>
        <div style={s.bigType2}>NOW.</div>
        <div style={s.product}></div>
        <div style={s.sticker}>SS26<br/>★★★<br/>05.24</div>
        <div style={s.bottom}>
          <div style={s.cta}>SHOP THE DROP →</div>
        </div>
      </div>
      <IGActions likes="12,408 likes" />
      <div style={s.caption}>
        <span style={s.capName}>haushaus</span> SS26 is here. 12 looks. Cardholders see it first. <span style={{ color: '#888' }}>more</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. INSTAGRAM STORY — Sale / countdown (vibrant)
// ─────────────────────────────────────────────────────────────────────────────
function S3_SaleStory() {
  const s = {
    root: { width: 360, height: 640, color: '#0a0a2e',
      background: 'linear-gradient(135deg, #6c4cff 0%, #ff6b9d 50%, #ffc04c 100%)',
      fontFamily: '"Bricolage Grotesque", "Inter Tight", sans-serif',
      borderRadius: 16, overflow: 'hidden', position: 'relative',
      boxShadow: '0 8px 24px rgba(0,0,0,0.15)' },
    bar: { position: 'absolute', top: 12, left: 12, right: 12, height: 3,
      background: 'rgba(255,255,255,0.4)', borderRadius: 2, zIndex: 5 },
    barFill: { width: '46%', height: '100%', background: '#fff', borderRadius: 2 },
    head: { padding: '32px 16px 0', display: 'flex', alignItems: 'center', gap: 8,
      fontSize: 12, color: '#0a0a2e', fontWeight: 600,
      position: 'relative', zIndex: 4 },
    av: { width: 32, height: 32, borderRadius: '50%', background: '#0a0a2e',
      color: '#ffc04c', display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontWeight: 800, fontSize: 14 },
    handle: { fontWeight: 700 },
    time: { color: 'rgba(10,10,46,0.6)' },
    body: { padding: '48px 24px 0', position: 'relative', zIndex: 3 },
    sticker: { display: 'inline-block', background: '#0a0a2e', color: '#ffc04c',
      padding: '6px 14px', borderRadius: 999, fontSize: 12, fontWeight: 700,
      transform: 'rotate(-3deg)' },
    h: { fontSize: 76, lineHeight: 0.86, fontWeight: 800, letterSpacing: '-0.05em',
      marginTop: 18, color: '#0a0a2e' },
    outline: { color: 'transparent', WebkitTextStroke: '2px #0a0a2e' },
    yellow: { color: '#0a0a2e', background: '#ffc04c', padding: '0 6px',
      display: 'inline-block', transform: 'rotate(-2deg)',
      boxShadow: '4px 4px 0 #0a0a2e' },
    countdown: { display: 'flex', gap: 8, marginTop: 24 },
    box: { flex: 1, background: '#0a0a2e', color: '#ffc04c',
      borderRadius: 10, padding: '10px 0', textAlign: 'center' },
    boxN: { fontSize: 22, fontWeight: 800,
      fontFamily: '"JetBrains Mono", ui-monospace, monospace', lineHeight: 1 },
    boxL: { fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase',
      marginTop: 3, color: 'rgba(255,192,76,0.7)' },
    cta: { position: 'absolute', bottom: 28, left: 24, right: 24,
      background: '#0a0a2e', color: '#fff', padding: '14px 0',
      borderRadius: 999, fontSize: 14, fontWeight: 700, textAlign: 'center',
      letterSpacing: '0.06em' },
    shape: { position: 'absolute', width: 120, height: 120, borderRadius: '50%',
      background: '#4cf0e8', mixBlendMode: 'screen',
      right: -30, top: 200, opacity: 0.7 },
    stars: { position: 'absolute', fontSize: 22, color: '#fff',
      textShadow: '0 0 8px #fff', zIndex: 2 },
  };
  return (
    <div style={s.root}>
      <div style={s.bar}><div style={s.barFill}></div></div>
      <div style={s.shape}></div>
      <div style={{ ...s.stars, top: 80, right: 30 }}>✦</div>
      <div style={{ ...s.stars, top: 240, left: 24, fontSize: 16 }}>✦</div>
      <div style={s.head}>
        <div style={s.av}>P</div>
        <span style={s.handle}>popshop</span>
        <span style={s.time}>· 2h</span>
      </div>
      <div style={s.body}>
        <div style={s.sticker}>★ FRIDAY ONLY</div>
        <div style={s.h}>
          <span style={s.yellow}>50%</span><br/>
          off <span style={s.outline}>everything</span>
        </div>
        <div style={s.countdown}>
          <div style={s.box}><div style={s.boxN}>00</div><div style={s.boxL}>Day</div></div>
          <div style={s.box}><div style={s.boxN}>14</div><div style={s.boxL}>Hr</div></div>
          <div style={s.box}><div style={s.boxN}>22</div><div style={s.boxL}>Min</div></div>
          <div style={s.box}><div style={s.boxN}>08</div><div style={s.boxL}>Sec</div></div>
        </div>
      </div>
      <div style={s.cta}>Swipe up to shop ↑</div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. INSTAGRAM STORY — BTS warm photo + sticker
// ─────────────────────────────────────────────────────────────────────────────
function S4_BTSStory() {
  const s = {
    root: { width: 360, height: 640, color: '#fff',
      background: 'linear-gradient(135deg, #d8806a 0%, #6a3a2a 60%, #2a1408 100%)',
      fontFamily: '"Inter Tight", sans-serif',
      borderRadius: 16, overflow: 'hidden', position: 'relative',
      boxShadow: '0 8px 24px rgba(0,0,0,0.15)' },
    photo: { position: 'absolute', inset: 0,
      backgroundImage: 'radial-gradient(circle at 30% 40%, rgba(255,200,140,0.4), transparent 50%), radial-gradient(circle at 70% 70%, rgba(40,20,10,0.5), transparent 50%)',
      mixBlendMode: 'screen' },
    grain: { position: 'absolute', inset: 0, opacity: 0.15, pointerEvents: 'none',
      backgroundImage: 'radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)',
      backgroundSize: '3px 3px' },
    bar: { position: 'absolute', top: 12, left: 12, right: 12, height: 3,
      background: 'rgba(255,255,255,0.3)', borderRadius: 2, zIndex: 5 },
    barFill: { width: '78%', height: '100%', background: '#fff', borderRadius: 2 },
    head: { padding: '32px 16px 0', display: 'flex', alignItems: 'center', gap: 8,
      fontSize: 12, color: '#fff', position: 'relative', zIndex: 4 },
    av: { width: 32, height: 32, borderRadius: '50%',
      background: 'linear-gradient(135deg, #e85a4f, #6a2030)' },
    handle: { fontWeight: 700 },
    time: { color: 'rgba(255,255,255,0.6)' },
    handwritten: { position: 'absolute', top: 92, left: 24, right: 24,
      fontFamily: '"Kalam", "Caveat", cursive', fontSize: 34,
      lineHeight: 1.1, transform: 'rotate(-2deg)',
      textShadow: '2px 2px 8px rgba(0,0,0,0.4)' },
    poll: { position: 'absolute', bottom: 100, left: 24, right: 24,
      background: 'rgba(255,255,255,0.95)', borderRadius: 14, padding: 14,
      color: '#1f1c14',
      boxShadow: '0 8px 24px rgba(0,0,0,0.2)' },
    pollQ: { fontSize: 14, fontWeight: 700, marginBottom: 10 },
    pollRow: { display: 'flex', gap: 6, marginBottom: 6 },
    pollOpt: (active, pct) => ({ flex: 1, padding: '10px 12px', borderRadius: 10,
      background: active ? 'linear-gradient(90deg, #e85a4f ' + pct + '%, #f5e8e2 ' + pct + '%)' : '#f5e8e2',
      color: active ? '#fff' : '#1f1c14', fontWeight: 600, fontSize: 13,
      display: 'flex', justifyContent: 'space-between' }),
    sticker: { position: 'absolute', top: 200, right: 24,
      background: '#ffd14a', color: '#1f1c14',
      width: 88, height: 88, borderRadius: '50%',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexDirection: 'column', transform: 'rotate(10deg)',
      fontWeight: 800, fontSize: 10, letterSpacing: '0.08em',
      textTransform: 'uppercase', textAlign: 'center', lineHeight: 1.3,
      boxShadow: '0 4px 12px rgba(0,0,0,0.3)' },
    location: { position: 'absolute', bottom: 50, left: 24,
      background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.3)',
      padding: '6px 12px', borderRadius: 999,
      fontSize: 11, fontWeight: 600,
      display: 'flex', alignItems: 'center', gap: 4 },
  };
  return (
    <div style={s.root}>
      <div style={s.photo}></div>
      <div style={s.grain}></div>
      <div style={s.bar}><div style={s.barFill}></div></div>
      <div style={s.head}>
        <div style={s.av}></div>
        <span style={s.handle}>maisoncalva</span>
        <span style={s.time}>· 4h</span>
      </div>
      <div style={s.handwritten}>
        prepping the menu<br/>for tonight ✿
      </div>
      <div style={s.sticker}>Sat<br/>5/17<br/>★ 19h30</div>
      <div style={s.poll}>
        <div style={s.pollQ}>Asparagus or artichoke first?</div>
        <div style={s.pollRow}>
          <div style={s.pollOpt(true, 64)}><span>Asparagus</span><span>64%</span></div>
        </div>
        <div style={s.pollRow}>
          <div style={s.pollOpt(false, 36)}><span>Artichoke</span><span>36%</span></div>
        </div>
      </div>
      <div style={s.location}>📍 Maison Calva</div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 5. TWITTER / X — text post, dark mode
// ─────────────────────────────────────────────────────────────────────────────
function S5_TwitterText() {
  const s = {
    root: { width: 560, background: '#000', color: '#e7e9ea',
      fontFamily: '"Inter Tight", system-ui, sans-serif',
      padding: '14px 16px', borderRadius: 12,
      border: '1px solid #2f3336', display: 'flex', gap: 12 },
    av: { width: 40, height: 40, borderRadius: '50%',
      background: 'linear-gradient(135deg, #7c5cff, #4cc8ff)', flex: 'none' },
    main: { flex: 1, minWidth: 0 },
    head: { display: 'flex', alignItems: 'center', gap: 4, fontSize: 14 },
    name: { fontWeight: 700, color: '#fff' },
    verified: { color: '#1d9bf0', fontSize: 14 },
    handle: { color: '#71767b' },
    body: { fontSize: 17, lineHeight: 1.4, marginTop: 4, color: '#e7e9ea' },
    bold: { fontWeight: 700 },
    link: { color: '#1d9bf0' },
    actions: { display: 'flex', justifyContent: 'space-between',
      marginTop: 14, color: '#71767b', fontSize: 13, maxWidth: 440 },
    act: { display: 'flex', alignItems: 'center', gap: 6 },
    time: { fontSize: 13, color: '#71767b', marginTop: 12, paddingTop: 12,
      borderTop: '1px solid #2f3336' },
    bigNum: { color: '#e7e9ea', fontWeight: 600 },
  };
  return (
    <div style={s.root}>
      <div style={s.av}></div>
      <div style={s.main}>
        <div style={s.head}>
          <span style={s.name}>The Quiet Times</span>
          <span style={s.verified}>✓</span>
          <span style={s.handle}>@thequiettimes · 2h</span>
        </div>
        <div style={s.body}>
          Unpopular thesis: <span style={s.bold}>the people who read most carefully are usually the slowest writers</span>, and we should let them be. A 2,000-word essay that took 3 weeks is worth ten that took an afternoon.
          <br/><br/>
          New issue out today → <span style={s.link}>quiettimes.co/142</span>
        </div>
        <div style={s.actions}>
          <span style={s.act}>💬 240</span>
          <span style={s.act}>↻ 1.2k</span>
          <span style={s.act}>♡ 8.4k</span>
          <span style={s.act}>👁 142k</span>
          <span style={s.act}>↗</span>
        </div>
        <div style={s.time}>
          4:24 PM · May 17, 2026 · <span style={s.bigNum}>142k</span> Views
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 6. TWITTER / X — with link card preview
// ─────────────────────────────────────────────────────────────────────────────
function S6_TwitterCard() {
  const s = {
    root: { width: 560, background: '#fff', color: '#0f1419',
      fontFamily: '"Inter Tight", system-ui, sans-serif',
      padding: '14px 16px', borderRadius: 12,
      border: '1px solid #eff3f4', display: 'flex', gap: 12 },
    av: { width: 40, height: 40, borderRadius: '50%',
      background: '#0d5e6e', color: '#7be3a8', display: 'flex',
      alignItems: 'center', justifyContent: 'center', fontWeight: 800,
      fontSize: 14, flex: 'none' },
    main: { flex: 1, minWidth: 0 },
    head: { display: 'flex', alignItems: 'center', gap: 4, fontSize: 14 },
    name: { fontWeight: 700 },
    verified: { color: '#1d9bf0' },
    handle: { color: '#536471' },
    body: { fontSize: 15, lineHeight: 1.45, marginTop: 4 },
    card: { marginTop: 12, border: '1px solid #cfd9de', borderRadius: 16,
      overflow: 'hidden' },
    cardImg: { width: '100%', height: 240,
      background: 'linear-gradient(135deg, #0d5e6e 0%, #053643 50%, #7be3a8 100%)',
      position: 'relative', display: 'flex', alignItems: 'center',
      justifyContent: 'center', color: '#7be3a8',
      fontFamily: '"Inter Tight", sans-serif', fontSize: 36, fontWeight: 700,
      letterSpacing: '-0.03em' },
    cardLabel: { position: 'absolute', bottom: 12, left: 12,
      background: 'rgba(0,0,0,0.4)', color: '#fff',
      padding: '4px 10px', borderRadius: 4, fontSize: 12, fontWeight: 600 },
    cardBody: { padding: '10px 14px' },
    cardHost: { fontSize: 13, color: '#536471' },
    cardTitle: { fontSize: 15, fontWeight: 500, marginTop: 1,
      letterSpacing: '-0.01em' },
    cardDesc: { fontSize: 13, color: '#536471', marginTop: 4 },
    actions: { display: 'flex', justifyContent: 'space-between',
      marginTop: 12, color: '#536471', fontSize: 13, maxWidth: 440 },
  };
  return (
    <div style={s.root}>
      <div style={s.av}>HA</div>
      <div style={s.main}>
        <div style={s.head}>
          <span style={s.name}>Halid Finance</span>
          <span style={s.verified}>✓</span>
          <span style={s.handle}>@halid · 4h</span>
        </div>
        <div style={s.body}>
          We just released our annual report on how mid-market companies are closing their books in 2026. <b>83% still use spreadsheets at month-end.</b> The full data is free →
        </div>
        <div style={s.card}>
          <div style={s.cardImg}>
            HALID · State of Close 2026
            <div style={s.cardLabel}>PDF · 42 pages</div>
          </div>
          <div style={s.cardBody}>
            <div style={s.cardHost}>halid.com</div>
            <div style={s.cardTitle}>State of Close 2026 — what 1,400 finance teams told us</div>
            <div style={s.cardDesc}>The full benchmark report on close timelines, automation, and team structure across mid-market finance.</div>
          </div>
        </div>
        <div style={s.actions}>
          <span>💬 84</span>
          <span>↻ 408</span>
          <span>♡ 2.1k</span>
          <span>👁 28k</span>
          <span>↗</span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 7. LINKEDIN — professional announcement
// ─────────────────────────────────────────────────────────────────────────────
function S7_LinkedIn() {
  const s = {
    root: { width: 560, background: '#fff',
      fontFamily: '"Inter Tight", "Source Sans Pro", system-ui, sans-serif',
      color: '#000', borderRadius: 8,
      boxShadow: '0 0 0 1px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)',
      overflow: 'hidden' },
    head: { display: 'flex', gap: 8, padding: '12px 16px 4px' },
    av: { width: 48, height: 48, borderRadius: '50%', background: '#0a66c2',
      color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontWeight: 700, fontSize: 18, flex: 'none' },
    namewrap: { flex: 1 },
    name: { fontSize: 14, fontWeight: 700 },
    title: { fontSize: 12, color: 'rgba(0,0,0,0.6)' },
    time: { fontSize: 12, color: 'rgba(0,0,0,0.6)' },
    more: { color: 'rgba(0,0,0,0.6)' },
    body: { padding: '8px 16px 12px', fontSize: 14, lineHeight: 1.5 },
    bold: { fontWeight: 700 },
    hashtag: { color: '#0a66c2', fontWeight: 600 },
    image: { width: '100%', aspectRatio: '1.91/1',
      background: 'linear-gradient(135deg, #0d5e6e 0%, #053643 50%, #7be3a8 100%)',
      position: 'relative', display: 'flex',
      alignItems: 'center', justifyContent: 'center' },
    imageCard: { background: 'rgba(255,255,255,0.95)', padding: '18px 24px',
      borderRadius: 8, textAlign: 'center', color: '#0d5e6e' },
    imageH: { fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em' },
    imageSub: { fontSize: 12, color: 'rgba(13,94,110,0.7)', marginTop: 4,
      letterSpacing: '0.06em', textTransform: 'uppercase' },
    reactBar: { display: 'flex', justifyContent: 'space-between',
      padding: '8px 16px', fontSize: 12, color: 'rgba(0,0,0,0.6)' },
    reacts: { display: 'flex', alignItems: 'center', gap: 4 },
    reactDot: (c) => ({ width: 16, height: 16, borderRadius: '50%', background: c,
      border: '1.5px solid #fff', marginLeft: -3,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      color: '#fff', fontSize: 9 }),
    actions: { display: 'flex', borderTop: '1px solid rgba(0,0,0,0.08)',
      padding: '4px 0' },
    act: { flex: 1, padding: '10px 0', textAlign: 'center', fontSize: 13,
      fontWeight: 600, color: 'rgba(0,0,0,0.6)' },
  };
  return (
    <div style={s.root}>
      <div style={s.head}>
        <div style={s.av}>MK</div>
        <div style={s.namewrap}>
          <div style={s.name}>Maya Khanna · 1st</div>
          <div style={s.title}>Co-founder &amp; CFO at Halid · ex-Stripe</div>
          <div style={s.time}>2d · 🌐</div>
        </div>
        <span style={s.more}>···</span>
      </div>
      <div style={s.body}>
        Excited to share what we've been working on for 18 months:<br/><br/>
        <span style={s.bold}>Halid raised $42M Series B</span> to keep building the finance stack we always wished we had at Stripe. Led by @Index, with @Sequoia, @Founders Fund, and a handful of CFOs joining the round.<br/><br/>
        We're hiring across product, engineering, and design. If you've ever closed a month and thought "there has to be a better way" — talk to us 👇<br/><br/>
        <span style={s.hashtag}>#hiring</span> <span style={s.hashtag}>#fintech</span> <span style={s.hashtag}>#startups</span>
      </div>
      <div style={s.image}>
        <div style={s.imageCard}>
          <div style={s.imageSub}>Halid · Series B</div>
          <div style={s.imageH}>$42M · led by Index</div>
        </div>
      </div>
      <div style={s.reactBar}>
        <span style={s.reacts}>
          <span style={s.reactDot('#0a66c2')}>👍</span>
          <span style={s.reactDot('#e3534e')}>♥</span>
          <span style={s.reactDot('#f5b342')}>🎉</span>
          <span style={{ marginLeft: 6 }}>Anya, Toma and <b>1,408 others</b></span>
        </span>
        <span>184 comments · 42 reposts</span>
      </div>
      <div style={s.actions}>
        <span style={s.act}>👍 Like</span>
        <span style={s.act}>💬 Comment</span>
        <span style={s.act}>↻ Repost</span>
        <span style={s.act}>➤ Send</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 8. CAROUSEL SLIDE — Bold stat infographic
// ─────────────────────────────────────────────────────────────────────────────
function S8_CarouselStat() {
  const s = {
    root: { width: 540, height: 540, background: '#0d5e6e', color: '#fff',
      fontFamily: '"Inter Tight", system-ui, sans-serif',
      padding: 36, position: 'relative', overflow: 'hidden',
      borderRadius: 12, boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
    accent: { position: 'absolute', right: -100, top: -100, width: 280, height: 280,
      borderRadius: '50%', background: '#7be3a8', opacity: 0.9 },
    accent2: { position: 'absolute', right: -100, top: -100, width: 140, height: 140,
      borderRadius: '50%', background: '#053643' },
    top: { display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', position: 'relative', zIndex: 2 },
    eyebrow: { fontSize: 11, color: '#7be3a8', letterSpacing: '0.16em',
      textTransform: 'uppercase', fontWeight: 700 },
    num: { fontSize: 13, color: 'rgba(255,255,255,0.6)' },
    body: { position: 'relative', zIndex: 2 },
    label: { fontSize: 14, color: 'rgba(255,255,255,0.7)',
      letterSpacing: '0.04em', marginBottom: 10 },
    bigStat: { fontSize: 168, lineHeight: 0.86, fontWeight: 700,
      letterSpacing: '-0.05em', color: '#7be3a8',
      fontFamily: '"Inter Tight", system-ui' },
    pct: { fontSize: 80, marginLeft: 4 },
    sub: { fontSize: 22, lineHeight: 1.25, fontWeight: 500, marginTop: 12,
      letterSpacing: '-0.01em', maxWidth: 380 },
    foot: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      position: 'relative', zIndex: 2 },
    src: { fontSize: 11, color: 'rgba(255,255,255,0.5)',
      letterSpacing: '0.08em', textTransform: 'uppercase' },
    swipe: { fontSize: 12, color: '#7be3a8', fontWeight: 700,
      display: 'flex', alignItems: 'center', gap: 6 },
  };
  return (
    <div style={s.root}>
      <div style={s.accent}></div>
      <div style={s.accent2}></div>
      <div style={s.top}>
        <div style={s.eyebrow}>State of Close · 2026</div>
        <div style={s.num}>02 / 09</div>
      </div>
      <div style={s.body}>
        <div style={s.label}>Of mid-market finance teams</div>
        <div style={s.bigStat}>83<span style={s.pct}>%</span></div>
        <div style={s.sub}>
          still rely on spreadsheets at month-end — even after adopting a "modern" finance stack.
        </div>
      </div>
      <div style={s.foot}>
        <div style={s.src}>Source: Halid · n=1,408</div>
        <div style={s.swipe}>Swipe →</div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 9. CAROUSEL COVER — "Save this" tutorial
// ─────────────────────────────────────────────────────────────────────────────
function S9_CarouselCover() {
  const s = {
    root: { width: 540, height: 540, background: '#fff4ec', color: '#3a2418',
      fontFamily: '"DM Sans", "Plus Jakarta Sans", system-ui, sans-serif',
      padding: 36, position: 'relative', overflow: 'hidden',
      borderRadius: 12, boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
    blob: { position: 'absolute', borderRadius: '50%',
      width: 320, height: 320, background: '#ffd9b8',
      right: -80, bottom: -100, filter: 'blur(2px)' },
    blob2: { position: 'absolute', borderRadius: '50%',
      width: 180, height: 180, background: '#ffb3c4',
      left: -40, top: -40, filter: 'blur(2px)' },
    top: { display: 'flex', alignItems: 'center', gap: 8, position: 'relative', zIndex: 2 },
    av: { width: 36, height: 36, borderRadius: '50%',
      background: '#ff7a45', color: '#fff', display: 'flex',
      alignItems: 'center', justifyContent: 'center', fontWeight: 800 },
    name: { fontWeight: 700, fontSize: 14 },
    handle: { fontSize: 12, color: 'rgba(58,36,24,0.6)' },
    body: { position: 'relative', zIndex: 2 },
    sticker: { display: 'inline-flex', alignItems: 'center', gap: 6,
      background: '#3a2418', color: '#fff4ec',
      padding: '6px 12px', borderRadius: 999, fontSize: 11, fontWeight: 700,
      letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 },
    h: { fontFamily: '"Fraunces", "DM Serif Display", serif',
      fontSize: 64, lineHeight: 0.95, fontWeight: 400,
      letterSpacing: '-0.025em', color: '#3a2418', margin: 0 },
    italic: { fontStyle: 'italic', color: '#ff7a45' },
    underline: { textDecoration: 'underline',
      textDecorationStyle: 'wavy', textDecorationColor: '#ff7a45',
      textUnderlineOffset: 10 },
    sub: { fontSize: 16, marginTop: 16, lineHeight: 1.5, maxWidth: 380,
      color: '#5c3d2c' },
    foot: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      position: 'relative', zIndex: 2 },
    saveBtn: { background: '#3a2418', color: '#fff4ec',
      padding: '12px 18px', borderRadius: 999,
      fontSize: 13, fontWeight: 700, display: 'flex',
      alignItems: 'center', gap: 8 },
    dots: { display: 'flex', gap: 5 },
    dot: (active) => ({ width: active ? 18 : 6, height: 6, borderRadius: 3,
      background: active ? '#3a2418' : 'rgba(58,36,24,0.3)' }),
  };
  return (
    <div style={s.root}>
      <div style={s.blob}></div>
      <div style={s.blob2}></div>
      <div style={s.top}>
        <div style={s.av}>m</div>
        <div>
          <div style={s.name}>milkpath</div>
          <div style={s.handle}>@milkpath · followed by 24k</div>
        </div>
      </div>
      <div style={s.body}>
        <div style={s.sticker}>★ Save this · 6 steps</div>
        <h1 style={s.h}>
          The one-pan dinner <span style={s.italic}>everyone</span> at the table will{' '}
          <span style={s.underline}>actually finish.</span>
        </h1>
        <div style={s.sub}>
          22 minutes, 6 ingredients, no chopping. Swipe for the full method →
        </div>
      </div>
      <div style={s.foot}>
        <div style={s.saveBtn}>⌒ &nbsp;Save</div>
        <div style={s.dots}>
          <div style={s.dot(true)}></div>
          <div style={s.dot(false)}></div>
          <div style={s.dot(false)}></div>
          <div style={s.dot(false)}></div>
          <div style={s.dot(false)}></div>
          <div style={s.dot(false)}></div>
          <div style={s.dot(false)}></div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 10. TIKTOK COVER — Reaction style
// ─────────────────────────────────────────────────────────────────────────────
function S10_TikTokCover() {
  const s = {
    root: { width: 360, height: 640,
      background: 'linear-gradient(180deg, #1a0030 0%, #4a0a4a 40%, #0a0014 100%)',
      color: '#fff', fontFamily: '"Archivo", "Inter Tight", sans-serif',
      borderRadius: 16, overflow: 'hidden', position: 'relative',
      boxShadow: '0 8px 24px rgba(0,0,0,0.2)' },
    bg: { position: 'absolute', inset: 0,
      backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(255,180,200,0.4), transparent 50%), radial-gradient(circle at 80% 60%, rgba(140,80,200,0.4), transparent 50%)' },
    person: { position: 'absolute', right: 20, top: 80, bottom: 200, width: 160,
      borderRadius: 16,
      background: 'linear-gradient(180deg, #ffc8a8 0%, #b87858 60%, #2a1408 100%)',
      mixBlendMode: 'screen',
      filter: 'blur(0.5px)' },
    captionWrap: { position: 'absolute', left: 16, right: 16, top: 70,
      zIndex: 4 },
    caption: { display: 'inline-block', background: '#fff',
      color: '#000', padding: '8px 12px',
      fontWeight: 800, fontSize: 22, letterSpacing: '-0.02em',
      lineHeight: 1.05, transform: 'rotate(-2deg)',
      boxShadow: '4px 4px 0 #ff3b6f' },
    captionBig: { display: 'block', background: '#ff3b6f',
      color: '#fff', padding: '8px 12px', marginTop: 8,
      fontWeight: 800, fontSize: 30, letterSpacing: '-0.03em',
      lineHeight: 1, transform: 'rotate(1deg)', width: 'fit-content',
      boxShadow: '4px 4px 0 #000' },
    arrow: { position: 'absolute', left: '52%', bottom: '40%',
      fontFamily: '"Kalam", "Caveat", cursive', color: '#ffea4d',
      fontSize: 20, fontWeight: 700, transform: 'rotate(-15deg)' },
    arrowSvg: { position: 'absolute', left: '60%', bottom: '36%', width: 60, height: 50,
      transform: 'rotate(-10deg)' },
    leftBar: { position: 'absolute', left: 12, bottom: 100,
      display: 'flex', flexDirection: 'column', gap: 8,
      fontSize: 11, color: '#fff' },
    user: { display: 'flex', alignItems: 'center', gap: 6 },
    av: { width: 28, height: 28, borderRadius: '50%',
      background: 'linear-gradient(135deg, #ff5e6c, #c44fb5)',
      border: '1.5px solid #fff' },
    handle: { fontWeight: 700, fontSize: 13 },
    desc: { fontSize: 12, lineHeight: 1.4, fontWeight: 500, maxWidth: 240,
      textShadow: '0 1px 2px rgba(0,0,0,0.6)' },
    tag: { color: '#fff', fontWeight: 700 },
    rightCol: { position: 'absolute', right: 12, bottom: 100,
      display: 'flex', flexDirection: 'column', gap: 18, alignItems: 'center' },
    rIcon: { textAlign: 'center', color: '#fff', fontSize: 11, fontWeight: 700 },
    rGlyph: { fontSize: 26, marginBottom: 2 },
    sound: { position: 'absolute', left: 12, bottom: 38,
      display: 'flex', alignItems: 'center', gap: 6,
      fontSize: 11, color: '#fff', fontWeight: 600 },
    soundIcon: { width: 24, height: 24, borderRadius: 4,
      background: '#fff', color: '#000',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 11, fontWeight: 800 },
  };
  return (
    <div style={s.root}>
      <div style={s.bg}></div>
      <div style={s.person}></div>
      <div style={s.captionWrap}>
        <div style={s.caption}>I'm a CFO and</div>
        <div style={s.captionBig}>THIS IS THE TRUTH 😳</div>
      </div>
      <div style={s.arrow}>← watch this</div>
      <svg style={s.arrowSvg} viewBox="0 0 60 50">
        <path d="M 56 24 Q 30 4, 4 26 L 8 22 M 4 26 L 10 30"
          stroke="#ffea4d" strokeWidth="2.5" fill="none"
          strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <div style={s.leftBar}>
        <div style={s.user}>
          <div style={s.av}></div>
          <span style={s.handle}>@mayakhanna</span>
          <span style={{ background: '#fff', color: '#000',
            padding: '2px 8px', borderRadius: 4, fontSize: 11,
            fontWeight: 700, marginLeft: 4 }}>Follow</span>
        </div>
        <div style={s.desc}>
          83% of finance teams are still doing this in 2026 and it's wild 😅<br/>
          <span style={s.tag}>#finance #fintech #startup #cfo</span>
        </div>
      </div>
      <div style={s.rightCol}>
        <div style={s.rIcon}><div style={s.rGlyph}>♥</div>208k</div>
        <div style={s.rIcon}><div style={s.rGlyph}>💬</div>4,208</div>
        <div style={s.rIcon}><div style={s.rGlyph}>⌒</div>14k</div>
        <div style={s.rIcon}><div style={s.rGlyph}>↗</div>Share</div>
      </div>
      <div style={s.sound}>
        <div style={s.soundIcon}>♫</div>
        original sound · @mayakhanna
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 11. YOUTUBE THUMBNAIL — bold, big face arrow, "clickbait"
// ─────────────────────────────────────────────────────────────────────────────
function S11_YouTubeThumb() {
  const s = {
    root: { width: 640, height: 360,
      background: 'linear-gradient(135deg, #1a0a4a 0%, #4a0a4a 50%, #0a0a14 100%)',
      color: '#fff', fontFamily: '"Archivo", sans-serif',
      borderRadius: 12, overflow: 'hidden', position: 'relative',
      boxShadow: '0 8px 24px rgba(0,0,0,0.2)' },
    bg: { position: 'absolute', inset: 0,
      background: 'radial-gradient(circle at 70% 50%, rgba(255,80,140,0.5), transparent 50%)' },
    face: { position: 'absolute', right: 0, bottom: 0, width: 280, height: '100%',
      background: 'linear-gradient(180deg, #ffc8a8 0%, #b87858 60%, #2a1408 100%)',
      clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)' },
    arrow: { position: 'absolute', right: 240, top: 80, width: 80, height: 80,
      transform: 'rotate(20deg)' },
    leftCol: { position: 'absolute', left: 0, top: 0, bottom: 0, width: '60%',
      padding: 28, display: 'flex', flexDirection: 'column',
      justifyContent: 'space-between', zIndex: 2 },
    sticker: { display: 'inline-block', background: '#ff3b6f', color: '#fff',
      padding: '6px 14px', fontSize: 12, fontWeight: 800,
      letterSpacing: '0.06em', textTransform: 'uppercase',
      transform: 'rotate(-3deg)', alignSelf: 'flex-start',
      borderRadius: 4 },
    title: { fontFamily: '"Archivo Black", sans-serif',
      fontSize: 56, lineHeight: 0.9, fontWeight: 900, letterSpacing: '-0.04em',
      textTransform: 'uppercase',
      textShadow: '3px 3px 0 #000' },
    titleAccent: { color: '#ffea4d' },
    titleStrike: { color: '#aa3050', textDecoration: 'line-through',
      fontSize: 36, fontWeight: 800 },
    bottomBar: { display: 'flex', alignItems: 'center', gap: 10,
      fontSize: 13, color: 'rgba(255,255,255,0.85)', fontWeight: 600 },
    av: { width: 30, height: 30, borderRadius: '50%',
      background: '#0d5e6e' },
    duration: { position: 'absolute', right: 12, bottom: 12,
      background: 'rgba(0,0,0,0.85)', color: '#fff',
      padding: '3px 6px', fontSize: 12, fontWeight: 700,
      borderRadius: 4, fontFamily: 'ui-monospace, monospace' },
    sticker2: { position: 'absolute', right: 16, top: 16,
      background: '#ffea4d', color: '#000',
      width: 80, height: 80, borderRadius: '50%',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexDirection: 'column', fontWeight: 800, fontSize: 12,
      letterSpacing: '0.04em', textAlign: 'center', lineHeight: 1.2,
      transform: 'rotate(15deg)',
      boxShadow: '0 4px 0 #000', zIndex: 5 },
  };
  return (
    <div style={s.root}>
      <div style={s.bg}></div>
      <div style={s.face}></div>
      <div style={s.sticker2}>I QUIT<br/>MY JOB</div>
      <svg style={s.arrow} viewBox="0 0 80 80">
        <path d="M 70 70 Q 30 60, 20 20 L 26 28 M 20 20 L 28 14"
          stroke="#ffea4d" strokeWidth="5" fill="none"
          strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <div style={s.leftCol}>
        <div style={s.sticker}>★ EPISODE 142</div>
        <div>
          <div style={s.titleStrike}>HOW TO RAISE $1M</div>
          <div style={s.title}>
            I RAISED<br/>
            <span style={s.titleAccent}>$42M</span><br/>
            ALONE.
          </div>
        </div>
        <div style={s.bottomBar}>
          <div style={s.av}></div>
          <span><b>Maya Khanna</b> · 248k subscribers</span>
        </div>
      </div>
      <div style={s.duration}>14:08</div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 12. PINTEREST PIN — Tall recipe / lifestyle
// ─────────────────────────────────────────────────────────────────────────────
function S12_PinterestPin() {
  const s = {
    root: { width: 360, height: 540, borderRadius: 16, overflow: 'hidden',
      background: '#fff', position: 'relative',
      boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
      fontFamily: '"Inter Tight", system-ui, sans-serif' },
    photo: { position: 'absolute', inset: 0,
      background: 'linear-gradient(180deg, #d4b890 0%, #b89058 30%, #6a3a20 70%, #2a1408 100%)' },
    photoGrain: { position: 'absolute', inset: 0, opacity: 0.1,
      backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1.5px)',
      backgroundSize: '3px 3px' },
    overlay: { position: 'absolute', bottom: 0, left: 0, right: 0,
      background: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.7))',
      height: '50%' },
    topBar: { position: 'absolute', top: 12, left: 12, right: 12, zIndex: 3,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    badge: { background: 'rgba(0,0,0,0.5)', color: '#fff',
      padding: '5px 10px', borderRadius: 14, fontSize: 11,
      backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', gap: 4 },
    saveBtn: { background: '#e60023', color: '#fff', padding: '8px 14px',
      borderRadius: 999, fontSize: 13, fontWeight: 700,
      boxShadow: '0 2px 6px rgba(0,0,0,0.2)' },
    titleCard: { position: 'absolute', bottom: 16, left: 16, right: 16,
      background: '#fff8ee', padding: '18px 20px',
      borderRadius: 12, zIndex: 3,
      boxShadow: '0 8px 24px rgba(0,0,0,0.2)' },
    titleLbl: { fontSize: 10, color: '#a07560', fontWeight: 700,
      letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 6 },
    title: { fontFamily: '"Fraunces", serif', fontSize: 22, fontWeight: 500,
      letterSpacing: '-0.02em', lineHeight: 1.15, color: '#3a2418' },
    pinFoot: { display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', marginTop: 12, fontSize: 12, color: '#7a5a4a' },
    av: { display: 'flex', alignItems: 'center', gap: 6 },
    avDot: { width: 22, height: 22, borderRadius: '50%',
      background: '#e85a4f', color: '#fff', display: 'flex',
      alignItems: 'center', justifyContent: 'center',
      fontSize: 10, fontWeight: 700 },
    saves: { fontWeight: 700, color: '#3a2418' },
    chips: { position: 'absolute', top: 60, left: 12, display: 'flex',
      flexDirection: 'column', gap: 6, zIndex: 3 },
    chip: { background: 'rgba(255,255,255,0.95)', color: '#3a2418',
      padding: '5px 12px', borderRadius: 999, fontSize: 11, fontWeight: 600,
      width: 'fit-content' },
  };
  return (
    <div style={s.root}>
      <div style={s.photo}></div>
      <div style={s.photoGrain}></div>
      <div style={s.overlay}></div>
      <div style={s.topBar}>
        <div style={s.badge}>★ 4.9 · 124 saved this week</div>
        <div style={s.saveBtn}>Save</div>
      </div>
      <div style={s.chips}>
        <div style={s.chip}>22 min · easy</div>
        <div style={s.chip}>6 ingredients</div>
      </div>
      <div style={s.titleCard}>
        <div style={s.titleLbl}>One-pan dinner</div>
        <div style={s.title}>Brown butter orecchiette with greens and lemon</div>
        <div style={s.pinFoot}>
          <div style={s.av}>
            <div style={s.avDot}>M</div>
            <span>milkpath.com</span>
          </div>
          <span style={s.saves}>2.4k saves</span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 13. THREADS / X — casual text reply chain
// ─────────────────────────────────────────────────────────────────────────────
function S13_Threads() {
  const s = {
    root: { width: 560, background: '#fff', color: '#000',
      fontFamily: '-apple-system, system-ui, sans-serif',
      borderRadius: 18, overflow: 'hidden',
      border: '1px solid #dcdcdc' },
    post: { padding: '14px 16px', display: 'flex', gap: 10,
      position: 'relative' },
    line: { position: 'absolute', left: 31, top: 52, bottom: 0, width: 2,
      background: '#dcdcdc' },
    av: { width: 36, height: 36, borderRadius: '50%', flex: 'none', zIndex: 2 },
    main: { flex: 1, minWidth: 0 },
    head: { display: 'flex', alignItems: 'center', gap: 6, fontSize: 14 },
    name: { fontWeight: 700 },
    handle: { color: '#999' },
    body: { fontSize: 15, lineHeight: 1.4, marginTop: 2 },
    image: { width: '100%', aspectRatio: '1', borderRadius: 12, marginTop: 10,
      background: 'linear-gradient(135deg, #4a1820 0%, #2a0e14 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#f3e8d8', fontFamily: '"Playfair Display", serif',
      fontSize: 22, padding: 24, textAlign: 'center', lineHeight: 1.3,
      fontStyle: 'italic' },
    actions: { display: 'flex', gap: 18, marginTop: 12, color: '#666',
      fontSize: 14 },
    metaRow: { padding: '4px 16px 14px 60px', fontSize: 13, color: '#999' },
    avRow: { display: 'flex', marginRight: 6 },
    avSm: (c, i) => ({ width: 18, height: 18, borderRadius: '50%', background: c,
      border: '2px solid #fff', marginLeft: i === 0 ? 0 : -8 }),
  };
  return (
    <div style={s.root}>
      <div style={s.post}>
        <div style={s.line}></div>
        <div style={{ ...s.av, background: 'linear-gradient(135deg, #c39a4d, #6a3a14)' }}></div>
        <div style={s.main}>
          <div style={s.head}>
            <span style={s.name}>anyaiqbal</span>
            <span style={s.handle}>· 4h</span>
          </div>
          <div style={s.body}>
            unpopular but here we go: <b>reading slowly is the entire point</b>. you're not reading to get through it. you're reading to be changed.
          </div>
          <div style={s.actions}>
            <span>♡ 1.2k</span>
            <span>💬 84</span>
            <span>↻ 240</span>
            <span>↗</span>
          </div>
        </div>
      </div>
      <div style={s.metaRow}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={s.avRow}>
            <div style={s.avSm('#7c5cff', 0)}></div>
            <div style={s.avSm('#22a06b', 1)}></div>
            <div style={s.avSm('#e85a4f', 2)}></div>
          </div>
          84 replies · 1,208 likes
        </div>
      </div>
      <div style={{ ...s.post, borderTop: '1px solid #dcdcdc' }}>
        <div style={{ ...s.av, background: 'linear-gradient(135deg, #7c5cff, #4cc8ff)' }}></div>
        <div style={s.main}>
          <div style={s.head}>
            <span style={s.name}>thequiettimes</span>
            <span style={s.handle}>· 2h</span>
          </div>
          <div style={s.body}>
            Anya's episode goes deep on this. 58 minutes of slow joy.
          </div>
          <div style={s.image}>
            "you start believing you have all the time in the world."
          </div>
          <div style={s.actions}>
            <span>♡ 408</span>
            <span>💬 22</span>
            <span>↻ 86</span>
            <span>↗</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 14. INSTAGRAM REEL COVER — full-bleed lifestyle
// ─────────────────────────────────────────────────────────────────────────────
function S14_ReelCover() {
  const s = {
    root: { width: 360, height: 640, color: '#fff',
      background: 'linear-gradient(180deg, #d4f000 0%, #80a000 50%, #2a4014 100%)',
      fontFamily: '"Inter Tight", sans-serif',
      borderRadius: 16, overflow: 'hidden', position: 'relative',
      boxShadow: '0 8px 24px rgba(0,0,0,0.2)' },
    photo: { position: 'absolute', inset: 0,
      background: 'radial-gradient(ellipse at 50% 40%, rgba(220,255,80,0.3), transparent 50%), linear-gradient(180deg, transparent 40%, rgba(10,15,10,0.7) 100%)',
      mixBlendMode: 'normal' },
    silhouette: { position: 'absolute', left: '50%', top: '40%',
      transform: 'translate(-50%, -50%)', width: 160, height: 200,
      background: 'linear-gradient(180deg, #1a2208 0%, #0a0f0a 100%)',
      clipPath: 'polygon(30% 0, 70% 0, 80% 30%, 90% 70%, 75% 100%, 25% 100%, 10% 70%, 20% 30%)',
      filter: 'blur(0.5px)' },
    topBar: { position: 'absolute', top: 16, left: 16, right: 16,
      display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', fontSize: 13, color: '#fff', zIndex: 3 },
    reel: { display: 'flex', alignItems: 'center', gap: 6, fontWeight: 700 },
    bigText: { position: 'absolute', left: 16, right: 16, top: '40%',
      fontFamily: '"Archivo Black", sans-serif',
      fontSize: 64, lineHeight: 0.86, fontWeight: 900, letterSpacing: '-0.05em',
      textTransform: 'uppercase', zIndex: 3,
      textShadow: '0 4px 20px rgba(0,0,0,0.6)' },
    accent: { color: '#d4f000', textShadow: '0 0 30px rgba(212,240,0,0.6)' },
    info: { position: 'absolute', bottom: 50, left: 16, right: 64, zIndex: 3 },
    chip: { display: 'inline-flex', alignItems: 'center', gap: 6,
      background: '#d4f000', color: '#0a0f0a',
      padding: '4px 10px', borderRadius: 999, fontSize: 11, fontWeight: 800,
      letterSpacing: '0.08em', textTransform: 'uppercase' },
    sub: { fontSize: 13, lineHeight: 1.4, marginTop: 10, fontWeight: 500,
      textShadow: '0 1px 2px rgba(0,0,0,0.4)' },
    user: { fontSize: 13, fontWeight: 700, marginTop: 10 },
    rightCol: { position: 'absolute', right: 12, bottom: 100,
      display: 'flex', flexDirection: 'column', gap: 18, alignItems: 'center',
      zIndex: 4 },
    rIcon: { textAlign: 'center', color: '#fff', fontSize: 11, fontWeight: 700 },
    rGlyph: { fontSize: 26, marginBottom: 2 },
    av: { width: 36, height: 36, borderRadius: '50%',
      background: '#0a0f0a', border: '2px solid #d4f000' },
    plus: { position: 'absolute', bottom: -6, right: -6, width: 18, height: 18,
      background: '#d4f000', borderRadius: '50%', color: '#0a0f0a',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 12, fontWeight: 700, border: '2px solid #fff' },
  };
  return (
    <div style={s.root}>
      <div style={s.photo}></div>
      <div style={s.silhouette}></div>
      <div style={s.topBar}>
        <div>‹</div>
        <div style={s.reel}>📹 Reels</div>
        <div>⌕</div>
      </div>
      <div style={s.bigText}>
        Day 84 of<br/>
        <span style={s.accent}>5 km</span><br/>
        before dawn
      </div>
      <div style={s.info}>
        <div style={s.chip}>● PACE//FORM · Spring training</div>
        <div style={s.sub}>
          200 cities, 5 am, no app. Just runners.
          Find yours in bio ↑
        </div>
        <div style={s.user}>@paceform · 248k followers</div>
      </div>
      <div style={s.rightCol}>
        <div style={{ position: 'relative' }}>
          <div style={s.av}></div>
          <div style={s.plus}>+</div>
        </div>
        <div style={s.rIcon}><div style={s.rGlyph}>♡</div>48k</div>
        <div style={s.rIcon}><div style={s.rGlyph}>💬</div>1,208</div>
        <div style={s.rIcon}><div style={s.rGlyph}>↗</div>Share</div>
        <div style={s.rIcon}><div style={s.rGlyph}>♫</div></div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 15. SPOTIFY SHARE — Now playing card
// ─────────────────────────────────────────────────────────────────────────────
function S15_SpotifyShare() {
  const s = {
    root: { width: 360, height: 640, color: '#fff',
      background: 'linear-gradient(180deg, #1db954 0%, #0a3d20 60%, #050a08 100%)',
      fontFamily: '"Inter Tight", sans-serif',
      borderRadius: 16, overflow: 'hidden', position: 'relative',
      padding: 24, display: 'flex', flexDirection: 'column',
      boxShadow: '0 8px 24px rgba(0,0,0,0.2)' },
    top: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      marginBottom: 14, fontSize: 12 },
    spotify: { display: 'flex', alignItems: 'center', gap: 6, fontWeight: 700 },
    spDot: { width: 18, height: 18, borderRadius: '50%', background: '#0a3d20',
      color: '#1db954', display: 'flex', alignItems: 'center',
      justifyContent: 'center', fontSize: 12, fontWeight: 900 },
    cover: { width: '100%', aspectRatio: '1', borderRadius: 12,
      background: 'linear-gradient(135deg, #ff3b6b 0%, #c44fb5 50%, #4c6cff 100%)',
      boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
      position: 'relative', overflow: 'hidden',
      display: 'flex', alignItems: 'center', justifyContent: 'center' },
    coverShape: { position: 'absolute', width: '78%', aspectRatio: '1', borderRadius: '50%',
      border: '2px solid rgba(255,255,255,0.25)' },
    coverShape2: { position: 'absolute', width: '50%', aspectRatio: '1', borderRadius: '50%',
      background: 'rgba(255,255,255,0.18)' },
    info: { marginTop: 20 },
    track: { fontSize: 24, fontWeight: 700, letterSpacing: '-0.02em' },
    artist: { fontSize: 15, color: 'rgba(255,255,255,0.7)', marginTop: 4 },
    progress: { marginTop: 20 },
    bar: { height: 3, background: 'rgba(255,255,255,0.2)', borderRadius: 2 },
    barFill: { width: '38%', height: '100%', background: '#fff', borderRadius: 2 },
    times: { display: 'flex', justifyContent: 'space-between', marginTop: 8,
      fontSize: 11, color: 'rgba(255,255,255,0.6)',
      fontFeatureSettings: '"tnum"' },
    code: { marginTop: 14, padding: '14px 16px',
      background: 'rgba(0,0,0,0.3)', borderRadius: 8,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
    codeLeft: { display: 'flex', alignItems: 'center', gap: 10 },
    codeIcon: { width: 24, height: 24, borderRadius: 6,
      background: '#1db954', color: '#000',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontWeight: 900, fontSize: 14 },
    codeLines: { display: 'flex', gap: 1.5, height: 24, alignItems: 'flex-end' },
    bar2: (h) => ({ width: 2.5, height: h, background: '#fff', borderRadius: 1 }),
    user: { position: 'absolute', bottom: 24, left: 24, right: 24,
      display: 'flex', alignItems: 'center', gap: 8, fontSize: 12 },
    av: { width: 28, height: 28, borderRadius: '50%',
      background: 'linear-gradient(135deg, #ff5e6c, #c44fb5)',
      border: '2px solid #fff' },
  };
  const ws = [8,16,22,10,18,24,14,20,8,12,16,22,10,18,24,14,20,8,12,16,22,10,18,8,16,22,10,18];
  return (
    <div style={s.root}>
      <div style={s.top}>
        <div style={s.spotify}><div style={s.spDot}>♫</div> Spotify</div>
        <div style={{ color: 'rgba(255,255,255,0.6)' }}>···</div>
      </div>
      <div style={s.cover}>
        <div style={s.coverShape}></div>
        <div style={s.coverShape2}></div>
      </div>
      <div style={s.info}>
        <div style={s.track}>Slow Wave</div>
        <div style={s.artist}>Nora &amp; the Quiet · Late Spring Mix</div>
      </div>
      <div style={s.progress}>
        <div style={s.bar}><div style={s.barFill}></div></div>
        <div style={s.times}><span>2:18</span><span>−3:02</span></div>
      </div>
      <div style={s.code}>
        <div style={s.codeLeft}>
          <div style={s.codeIcon}>♪</div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)' }}>
            <div style={{ fontWeight: 700, color: '#fff' }}>Scan to listen</div>
            <div>open.spotify.com</div>
          </div>
        </div>
        <div style={s.codeLines}>
          {ws.map((w, i) => <div key={i} style={s.bar2(w)}></div>)}
        </div>
      </div>
      <div style={s.user}>
        <div style={s.av}></div>
        <span><b>Maya</b> is listening</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 16. EVENT ANNOUNCEMENT — Square poster
// ─────────────────────────────────────────────────────────────────────────────
function S16_EventSquare() {
  const s = {
    root: { width: 540, background: '#fff', overflow: 'hidden',
      borderRadius: 12, boxShadow: '0 8px 24px rgba(0,0,0,0.08)' },
    post: { width: 540, height: 540, background: '#1a3cd9', color: '#fff',
      position: 'relative', overflow: 'hidden',
      fontFamily: '"Inter Tight", system-ui, sans-serif',
      padding: '36px 32px', display: 'flex', flexDirection: 'column',
      justifyContent: 'space-between' },
    grid: { position: 'absolute', inset: 0, opacity: 0.12, pointerEvents: 'none',
      backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
      backgroundSize: '36px 36px' },
    top: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
      position: 'relative', zIndex: 2 },
    crest: { width: 44, height: 44, borderRadius: '50%',
      border: '1.5px solid #fff', display: 'flex', alignItems: 'center',
      justifyContent: 'center', fontFamily: '"Playfair Display", serif',
      fontSize: 22, fontWeight: 500 },
    when: { textAlign: 'right', fontSize: 11, letterSpacing: '0.18em',
      textTransform: 'uppercase', lineHeight: 1.6 },
    middle: { position: 'relative', zIndex: 2 },
    eyebrow: { fontSize: 11, color: 'rgba(255,255,255,0.7)',
      letterSpacing: '0.3em', textTransform: 'uppercase',
      marginBottom: 18 },
    h: { fontFamily: '"Playfair Display", Georgia, serif',
      fontSize: 64, lineHeight: 0.98, fontWeight: 400,
      letterSpacing: '-0.02em', margin: 0 },
    speaker: { marginTop: 24, display: 'flex', alignItems: 'center', gap: 12 },
    avPhoto: { width: 56, height: 56, borderRadius: '50%',
      background: 'linear-gradient(135deg, #ffd6a8, #b87858)',
      border: '2px solid #fff', flex: 'none' },
    speakerInfo: { fontSize: 13, lineHeight: 1.5 },
    speakerName: { fontFamily: '"Playfair Display", serif', fontSize: 18,
      fontWeight: 500, letterSpacing: '-0.01em' },
    foot: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
      position: 'relative', zIndex: 2 },
    cta: { background: '#fff', color: '#1a3cd9', padding: '12px 22px',
      fontSize: 13, fontWeight: 600, letterSpacing: '0.06em',
      textTransform: 'uppercase' },
    venue: { fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.7)', textAlign: 'right', lineHeight: 1.6 },
    caption: { padding: '8px 12px 12px', fontSize: 13, lineHeight: 1.45 },
    capName: { fontWeight: 700 },
  };
  return (
    <div style={s.root}>
      <IGHeader name="wernerinstitute" handle="3d" av="linear-gradient(135deg, #1a3cd9, #0a1a8a)" />
      <div style={s.post}>
        <div style={s.grid}></div>
        <div style={s.top}>
          <div style={s.crest}>W</div>
          <div style={s.when}>Tue · May 24<br/>19h00 — 21h00</div>
        </div>
        <div style={s.middle}>
          <div style={s.eyebrow}>A public lecture · No. 042</div>
          <h1 style={s.h}>
            The Reader<br/>
            Reconsidered.
          </h1>
          <div style={s.speaker}>
            <div style={s.avPhoto}></div>
            <div style={s.speakerInfo}>
              <div style={s.speakerName}>Anya Iqbal</div>
              <div style={{ color: 'rgba(255,255,255,0.7)' }}>Critic-in-residence · The Quiet Times</div>
            </div>
          </div>
        </div>
        <div style={s.foot}>
          <div style={s.cta}>Reserve a seat →</div>
          <div style={s.venue}>14 Rue de Sèvres<br/>Paris VIIe · Free</div>
        </div>
      </div>
      <IGActions likes="842 likes" />
      <div style={s.caption}>
        <span style={s.capName}>wernerinstitute</span> RSVP via link in bio. Limited seats.
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Canvas
// ─────────────────────────────────────────────────────────────────────────────
function SocialApp() {
  return (
    <DesignCanvas>
      <DCSection id="ig-posts" title="Instagram Posts (Square)"
        subtitle="Editorial quote · Bold product launch · Carousel stat · Carousel cover · Event poster.">
        <DCArtboard id="s-quote"   label="01 · Editorial quote"   width={540} height={680}><S1_QuotePost /></DCArtboard>
        <DCArtboard id="s-product" label="02 · Product launch"    width={540} height={680}><S2_ProductPost /></DCArtboard>
        <DCArtboard id="s-carstat" label="08 · Carousel · Stat"   width={540} height={540}><S8_CarouselStat /></DCArtboard>
        <DCArtboard id="s-carcvr"  label="09 · Carousel · Cover"  width={540} height={540}><S9_CarouselCover /></DCArtboard>
        <DCArtboard id="s-event"   label="16 · Event poster"      width={540} height={680}><S16_EventSquare /></DCArtboard>
      </DCSection>
      <DCSection id="ig-stories" title="Vertical Stories &amp; Reels (9:16)"
        subtitle="Sale countdown · BTS handwritten · TikTok reaction · Reel cover · Pinterest pin · Spotify share.">
        <DCArtboard id="s-sale"    label="03 · IG Story · Sale"     width={360} height={640}><S3_SaleStory /></DCArtboard>
        <DCArtboard id="s-bts"     label="04 · IG Story · BTS"      width={360} height={640}><S4_BTSStory /></DCArtboard>
        <DCArtboard id="s-tiktok"  label="10 · TikTok · Reaction"   width={360} height={640}><S10_TikTokCover /></DCArtboard>
        <DCArtboard id="s-reel"    label="14 · IG Reel · Lifestyle" width={360} height={640}><S14_ReelCover /></DCArtboard>
        <DCArtboard id="s-pin"     label="12 · Pinterest pin"       width={360} height={540}><S12_PinterestPin /></DCArtboard>
        <DCArtboard id="s-spotify" label="15 · Spotify share card"  width={360} height={640}><S15_SpotifyShare /></DCArtboard>
      </DCSection>
      <DCSection id="text-platforms" title="Text Platforms"
        subtitle="X/Twitter posts · Threads · LinkedIn announcement · YouTube thumbnail.">
        <DCArtboard id="s-twdark"  label="05 · X · text post"          width={560} height={340}><S5_TwitterText /></DCArtboard>
        <DCArtboard id="s-twcard"  label="06 · X · with link card"     width={560} height={620}><S6_TwitterCard /></DCArtboard>
        <DCArtboard id="s-thread"  label="13 · Threads · chain"        width={560} height={540}><S13_Threads /></DCArtboard>
        <DCArtboard id="s-linked"  label="07 · LinkedIn · announce"    width={560} height={760}><S7_LinkedIn /></DCArtboard>
        <DCArtboard id="s-yt"      label="11 · YouTube thumbnail"      width={640} height={360}><S11_YouTubeThumb /></DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

const socialRoot = ReactDOM.createRoot(document.getElementById('root'));
socialRoot.render(<SocialApp />);
