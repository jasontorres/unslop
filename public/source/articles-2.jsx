// Articles & Editorial — second batch: docs, recipe, dev blog, review, podcast.
// Exposes window.ArticleFormatsSection so articles.jsx picks it up.

const AW2 = 1280;
const AH2 = 800;

// ─────────────────────────────────────────────────────────────────────────────
// 8. DOCS ARTICLE — clean white with TOC sidebar, Linear-ish technical doc
// ─────────────────────────────────────────────────────────────────────────────
function DocsArticle() {
  const s = {
    root: { width: AW2, height: AH2, background: '#ffffff', color: '#0f0f14',
      fontFamily: '"Inter Tight", system-ui, sans-serif',
      display: 'grid', gridTemplateColumns: '240px 1fr 240px', overflow: 'hidden' },
    rail: { padding: '20px 18px', borderRight: '1px solid #ecebef',
      display: 'flex', flexDirection: 'column', gap: 4, fontSize: 13,
      overflow: 'hidden' },
    brand: { display: 'flex', alignItems: 'center', gap: 8,
      paddingBottom: 16, marginBottom: 6,
      borderBottom: '1px solid #ecebef' },
    logo: { width: 22, height: 22, borderRadius: 6,
      background: 'linear-gradient(135deg, #5b5bd6, #8456e9)' },
    brandT: { fontWeight: 700, fontSize: 15, letterSpacing: '-0.01em' },
    brandS: { fontSize: 11, color: '#7a7a86', marginLeft: 'auto' },
    search: { padding: '7px 10px', background: '#f5f5f7',
      borderRadius: 7, fontSize: 12, color: '#7a7a86',
      display: 'flex', justifyContent: 'space-between', marginBottom: 14 },
    grp: { fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase',
      color: '#7a7a86', fontWeight: 700, padding: '12px 8px 4px' },
    item: (a) => ({ padding: '5px 10px', borderRadius: 6, fontSize: 13,
      color: a ? '#0f0f14' : '#444452', fontWeight: a ? 600 : 400,
      background: a ? '#f0eefe' : 'transparent' }),
    nest: { padding: '5px 10px 5px 22px', fontSize: 12.5,
      color: '#444452', borderLeft: '1px solid #ecebef',
      marginLeft: 10 },
    nestA: { padding: '5px 10px 5px 22px', fontSize: 12.5,
      color: '#5b5bd6', fontWeight: 600, borderLeft: '2px solid #5b5bd6',
      marginLeft: 10 },
    main: { padding: '24px 56px', overflow: 'hidden',
      display: 'flex', flexDirection: 'column' },
    crumb: { fontSize: 12, color: '#7a7a86', marginBottom: 14 },
    crumbA: { color: '#5b5bd6' },
    h1: { fontSize: 36, fontWeight: 600, letterSpacing: '-0.02em',
      margin: '0 0 10px', lineHeight: 1.1 },
    lede: { fontSize: 16, color: '#4a4a56', lineHeight: 1.55,
      maxWidth: 620, marginBottom: 22 },
    metaRow: { display: 'flex', gap: 10, alignItems: 'center',
      fontSize: 12, color: '#7a7a86', marginBottom: 22 },
    pill: { padding: '3px 9px', background: '#f0eefe', color: '#5b5bd6',
      borderRadius: 999, fontWeight: 600, fontSize: 11 },
    h2: { fontSize: 20, fontWeight: 600, letterSpacing: '-0.01em',
      margin: '8px 0 10px' },
    p: { fontSize: 14.5, lineHeight: 1.65, color: '#1a1a22',
      maxWidth: 620, marginBottom: 14 },
    code: { fontFamily: '"JetBrains Mono", monospace', fontSize: 12.5,
      background: '#f5f5f7', color: '#1a1a22', padding: '14px 16px',
      borderRadius: 8, lineHeight: 1.6, maxWidth: 620, marginBottom: 16,
      border: '1px solid #ecebef' },
    cmd: { color: '#7a7a86' },
    kw: { color: '#8456e9', fontWeight: 600 },
    str: { color: '#0a8a4e' },
    callout: { display: 'flex', gap: 12, padding: '12px 14px',
      borderRadius: 8, background: '#fff8e6', border: '1px solid #f0d896',
      maxWidth: 620, fontSize: 13, lineHeight: 1.5, color: '#5a4218',
      marginBottom: 14 },
    cIcon: { fontSize: 16, color: '#c89238' },
    toc: { padding: '20px 18px', borderLeft: '1px solid #ecebef',
      fontSize: 12.5, overflow: 'hidden',
      display: 'flex', flexDirection: 'column', gap: 12 },
    tocH: { fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase',
      color: '#7a7a86', fontWeight: 700 },
    tocItem: { color: '#4a4a56', paddingLeft: 10,
      borderLeft: '2px solid transparent' },
    tocA: { color: '#5b5bd6', fontWeight: 600,
      paddingLeft: 10, borderLeft: '2px solid #5b5bd6' },
    feedback: { marginTop: 'auto', padding: 14, background: '#f5f5f7',
      borderRadius: 8 },
    fH: { fontSize: 12, fontWeight: 600, marginBottom: 8 },
    fB: { display: 'flex', gap: 6 },
    fBtn: { padding: '5px 10px', background: '#fff',
      border: '1px solid #ecebef', borderRadius: 6, fontSize: 11 },
  };
  return (
    <div style={s.root}>
      <div style={s.rail}>
        <div style={s.brand}>
          <div style={s.logo}></div>
          <div style={s.brandT}>Halid</div>
          <div style={s.brandS}>docs</div>
        </div>
        <div style={s.search}><span>Search docs…</span><span>⌘K</span></div>
        <div style={s.grp}>Get started</div>
        <div style={s.item()}>Introduction</div>
        <div style={s.item()}>Quickstart</div>
        <div style={s.item()}>Authentication</div>
        <div style={s.grp}>Core concepts</div>
        <div style={s.item()}>Accounts</div>
        <div style={s.item(true)}>Treasury rules</div>
        <div style={s.nest}>Overview</div>
        <div style={s.nestA}>Defining a rule</div>
        <div style={s.nest}>Testing a rule</div>
        <div style={s.nest}>Rule errors</div>
        <div style={s.item()}>Webhooks</div>
        <div style={s.grp}>API reference</div>
        <div style={s.item()}>REST</div>
        <div style={s.item()}>SDKs</div>
      </div>
      <div style={s.main}>
        <div style={s.crumb}>
          <span style={s.crumbA}>Docs</span> · Core concepts · Treasury rules
          · <b>Defining a rule</b>
        </div>
        <h1 style={s.h1}>Defining a treasury rule</h1>
        <div style={s.lede}>A treasury rule routes incoming cash across
          accounts based on conditions you set. Rules run in order, in real
          time, and roll up into a single daily ledger entry per account.</div>
        <div style={s.metaRow}>
          <span style={s.pill}>v 2.4 · stable</span>
          <span>· last updated 6 May 2026</span>
          <span>· 5 min read</span>
          <span>· Edit on GitHub ↗</span>
        </div>
        <h2 style={s.h2}>The shape of a rule</h2>
        <div style={s.p}>A rule has three required fields — <code>when</code>,
          <code> match</code>, and <code>then</code> — plus an optional
          <code> stopOnMatch</code> flag if you don't want subsequent rules to
          fire. The simplest possible rule sweeps everything above a target
          balance into a savings account at end-of-day.</div>
        <div style={s.code}>
          <span style={s.cmd}>{'// sweep-above-target.ts'}</span><br/>
          <span style={s.kw}>const</span>{' rule = halid.treasury.'}<span style={s.kw}>defineRule</span>{'({'}<br/>
          {'  when:  '}<span style={s.str}>"endOfDay"</span>,<br/>
          {'  match: { account: '}<span style={s.str}>"acc_main"</span>{', balance: { gt: 250_000 } },'}<br/>
          {'  then:  { sweepTo: '}<span style={s.str}>"acc_savings"</span>{', leave: 250_000 },'}<br/>
          {'});'}
        </div>
        <div style={s.callout}>
          <span style={s.cIcon}>◑</span>
          <div><b>Heads up.</b> Rules are evaluated in the order you registered
            them. Use <code>stopOnMatch</code> to short-circuit, or reorder
            in the dashboard — the API will reflect the change within 60s.</div>
        </div>
      </div>
      <div style={s.toc}>
        <div style={s.tocH}>On this page</div>
        <div style={s.tocItem}>The shape of a rule</div>
        <div style={s.tocA}>Required fields</div>
        <div style={s.tocItem}>Conditions</div>
        <div style={s.tocItem}>Actions</div>
        <div style={s.tocItem}>Testing locally</div>
        <div style={s.tocItem}>Errors &amp; retries</div>
        <div style={s.tocH}>Related</div>
        <div style={s.tocItem}>Webhooks</div>
        <div style={s.tocItem}>Rule errors</div>
        <div style={s.feedback}>
          <div style={s.fH}>Was this helpful?</div>
          <div style={s.fB}>
            <span style={s.fBtn}>👍 Yes</span>
            <span style={s.fBtn}>👎 No</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 9. RECIPE PAGE — milkpath, pale sage + forest green, structured steps
// ─────────────────────────────────────────────────────────────────────────────
function RecipePage() {
  const s = {
    root: { width: AW2, height: AH2, background: '#e7ede7', color: '#0e1a14',
      fontFamily: '"Inter Tight", system-ui, sans-serif', overflow: 'hidden',
      display: 'flex', flexDirection: 'column' },
    top: { display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', padding: '14px 32px',
      borderBottom: '1px solid #cfd6cd', fontSize: 13 },
    brand: { display: 'flex', alignItems: 'center', gap: 8 },
    logo: { width: 22, height: 22, borderRadius: '50%',
      background: '#2f6a4a' },
    brandT: { fontFamily: '"Fraunces", serif', fontStyle: 'italic',
      fontSize: 20, fontWeight: 500 },
    nav: { display: 'flex', gap: 22, fontSize: 12, color: '#445a50' },
    cta: { padding: '6px 14px', background: '#0e1a14', color: '#e7ede7',
      borderRadius: 999, fontSize: 12, fontWeight: 600 },
    body: { flex: 1, display: 'grid',
      gridTemplateColumns: '1fr 1fr', minHeight: 0 },
    hero: { padding: '28px 36px', display: 'flex', flexDirection: 'column',
      gap: 12, overflow: 'hidden' },
    crumb: { fontFamily: '"JetBrains Mono", monospace', fontSize: 10,
      letterSpacing: '0.16em', textTransform: 'uppercase', color: '#2f6a4a' },
    h: { fontFamily: '"Fraunces", serif', fontSize: 54, fontWeight: 500,
      lineHeight: 0.98, letterSpacing: '-0.02em', margin: '4px 0' },
    hI: { fontStyle: 'italic', color: '#2f6a4a' },
    lede: { fontFamily: '"Spectral", serif', fontSize: 15,
      lineHeight: 1.55, color: '#1a2c24', fontStyle: 'italic',
      maxWidth: 460 },
    facts: { display: 'flex', gap: 18, paddingTop: 14,
      borderTop: '1px solid #cfd6cd', marginTop: 'auto' },
    factL: { fontFamily: '"JetBrains Mono", monospace', fontSize: 9,
      letterSpacing: '0.18em', textTransform: 'uppercase', color: '#445a50' },
    factV: { fontFamily: '"Fraunces", serif', fontSize: 22,
      fontWeight: 500, marginTop: 2 },
    factI: { fontStyle: 'italic' },
    by: { display: 'flex', alignItems: 'center', gap: 10, fontSize: 12,
      color: '#445a50' },
    av: { width: 32, height: 32, borderRadius: '50%',
      background: 'linear-gradient(135deg, #a8b8a0, #1a4028)' },
    photo: { background: 'linear-gradient(160deg, #ccdac8 0%, #2f6a4a 40%, #0e3322 100%)',
      position: 'relative' },
    photoCap: { position: 'absolute', left: 18, bottom: 14,
      fontFamily: '"JetBrains Mono", monospace', fontSize: 10,
      letterSpacing: '0.14em', textTransform: 'uppercase',
      color: '#e7ede7' },
    bottom: { display: 'grid', gridTemplateColumns: '280px 1fr',
      borderTop: '1px solid #cfd6cd' },
    ing: { padding: '20px 24px', borderRight: '1px solid #cfd6cd',
      background: '#dde5dc', overflow: 'hidden' },
    ingH: { fontFamily: '"JetBrains Mono", monospace', fontSize: 10,
      letterSpacing: '0.18em', textTransform: 'uppercase', color: '#445a50',
      marginBottom: 8 },
    ingRow: { display: 'grid', gridTemplateColumns: '60px 1fr',
      gap: 8, padding: '5px 0', borderBottom: '1px dotted #bfc8bc',
      fontSize: 13 },
    ingQ: { fontFamily: '"JetBrains Mono", monospace', color: '#2f6a4a',
      fontWeight: 600 },
    steps: { padding: '20px 32px', overflow: 'hidden', display: 'flex',
      flexDirection: 'column', gap: 10 },
    stepsH: { fontFamily: '"JetBrains Mono", monospace', fontSize: 10,
      letterSpacing: '0.18em', textTransform: 'uppercase', color: '#445a50' },
    step: { display: 'grid', gridTemplateColumns: '36px 1fr',
      gap: 12, alignItems: 'baseline' },
    sN: { fontFamily: '"Fraunces", serif', fontStyle: 'italic',
      fontSize: 28, color: '#2f6a4a', fontWeight: 500, lineHeight: 1 },
    sT: { fontFamily: '"Spectral", serif', fontSize: 14, lineHeight: 1.5,
      color: '#0e1a14' },
    sTime: { fontFamily: '"JetBrains Mono", monospace', fontSize: 10,
      color: '#445a50', letterSpacing: '0.12em' },
  };
  return (
    <div style={s.root}>
      <div style={s.top}>
        <div style={s.brand}>
          <div style={s.logo}></div>
          <div style={s.brandT}>milkpath</div>
        </div>
        <div style={s.nav}>
          <span>Recipes</span><span>Pantry</span><span>Bake</span>
          <span>Slow</span><span>Saved · 24</span>
        </div>
        <div style={s.cta}>+ Add to plan</div>
      </div>
      <div style={s.body}>
        <div style={s.hero}>
          <div style={s.crumb}>Recipes · Slow · Bread &amp; ferments</div>
          <h1 style={s.h}>The <span style={s.hI}>everyday</span><br/>sourdough.</h1>
          <div style={s.lede}>A loaf you can make on a Tuesday without making
            Tuesday about the loaf. Hands-on, 25 minutes. The rest is patience
            and the kitchen taking care of itself.</div>
          <div style={s.by}>
            <div style={s.av}></div>
            <div>
              <div style={{ fontWeight: 600, color: '#0e1a14' }}>Aanya Rao</div>
              <div>Updated 4 May · tested 11 times</div>
            </div>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 6 }}>
              <span style={{ padding: '5px 10px', border: '1px solid #bfc8bc',
                borderRadius: 999, fontSize: 12 }}>♡ Save</span>
              <span style={{ padding: '5px 10px', border: '1px solid #bfc8bc',
                borderRadius: 999, fontSize: 12 }}>⎙ Print</span>
            </div>
          </div>
          <div style={s.facts}>
            <div>
              <div style={s.factL}>Hands on</div>
              <div style={s.factV}>25<span style={s.factI}> min</span></div>
            </div>
            <div>
              <div style={s.factL}>Total</div>
              <div style={s.factV}>22<span style={s.factI}> hr</span></div>
            </div>
            <div>
              <div style={s.factL}>Yield</div>
              <div style={s.factV}>1<span style={s.factI}> loaf</span></div>
            </div>
            <div>
              <div style={s.factL}>Difficulty</div>
              <div style={s.factV}>●●○</div>
            </div>
            <div>
              <div style={s.factL}>Rating</div>
              <div style={s.factV}>4.9<span style={s.factI}> · 482</span></div>
            </div>
          </div>
        </div>
        <div style={s.photo}>
          <div style={s.photoCap}>Photographed at home · A.R. · April</div>
        </div>
      </div>
      <div style={s.bottom}>
        <div style={s.ing}>
          <div style={s.ingH}>Ingredients · 1 loaf</div>
          <div style={s.ingRow}><span style={s.ingQ}>500 g</span><span>strong bread flour</span></div>
          <div style={s.ingRow}><span style={s.ingQ}>375 g</span><span>water, body-warm</span></div>
          <div style={s.ingRow}><span style={s.ingQ}>100 g</span><span>active starter</span></div>
          <div style={s.ingRow}><span style={s.ingQ}>10 g</span><span>fine sea salt</span></div>
          <div style={s.ingRow}><span style={s.ingQ}>—</span><span>rice flour, for dusting</span></div>
          <div style={{ ...s.ingH, marginTop: 14 }}>You'll need</div>
          <div style={s.ingRow}><span style={s.ingQ}>·</span><span>Dutch oven · 24 cm</span></div>
          <div style={s.ingRow}><span style={s.ingQ}>·</span><span>Banneton or a lined bowl</span></div>
        </div>
        <div style={s.steps}>
          <div style={s.stepsH}>Method · 5 steps</div>
          <div style={s.step}>
            <div style={s.sN}>i</div>
            <div>
              <div style={s.sTime}>0:00 · 10 min</div>
              <div style={s.sT}>Combine flour and water in a wide bowl with
                your hands until no dry flour remains. Cover, rest 1 hour.
                This is <em>autolyse</em>; you are letting the flour drink.</div>
            </div>
          </div>
          <div style={s.step}>
            <div style={s.sN}>ii</div>
            <div>
              <div style={s.sTime}>1:00 · 5 min + 4 hr</div>
              <div style={s.sT}>Add starter and salt. Pinch through the dough
                to incorporate, then perform 4 stretch-and-folds, 30 min apart.
                Cover between sets.</div>
            </div>
          </div>
          <div style={s.step}>
            <div style={s.sN}>iii</div>
            <div>
              <div style={s.sTime}>5:00 · 5 min</div>
              <div style={s.sT}>Pre-shape on an unfloured counter. Rest 25 min.
                Final shape with light tension, place seam-up in a banneton
                dusted with rice flour.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 10. DEV BLOG — Linear Labs engineering, dark slate, code-friendly
// ─────────────────────────────────────────────────────────────────────────────
function DevBlog() {
  const s = {
    root: { width: AW2, height: AH2, background: '#0a0c12', color: '#dadae6',
      fontFamily: '"Inter Tight", system-ui, sans-serif', overflow: 'hidden',
      display: 'flex', flexDirection: 'column' },
    top: { padding: '14px 36px', display: 'flex',
      justifyContent: 'space-between', alignItems: 'center',
      borderBottom: '1px solid #1a1d28' },
    brand: { display: 'flex', alignItems: 'center', gap: 10 },
    logo: { width: 22, height: 22, borderRadius: 5,
      background: 'linear-gradient(135deg, #6aa8ff, #8a5aff)' },
    brandT: { fontWeight: 600, fontSize: 14, letterSpacing: '-0.005em' },
    brandS: { fontSize: 11, color: '#6a6a7c', marginLeft: 4 },
    nav: { display: 'flex', gap: 22, fontSize: 13, color: '#a4a4b4' },
    cta: { padding: '6px 14px', background: '#6aa8ff', color: '#0a0c12',
      borderRadius: 6, fontSize: 12, fontWeight: 600 },
    body: { flex: 1, display: 'grid',
      gridTemplateColumns: '1fr 280px', minHeight: 0 },
    main: { padding: '30px 56px', overflow: 'hidden',
      display: 'flex', flexDirection: 'column' },
    eyebrow: { display: 'flex', gap: 10, alignItems: 'center',
      fontSize: 11, color: '#8a8aa0', marginBottom: 10 },
    tag: { padding: '3px 9px', background: 'rgba(106,168,255,0.14)',
      color: '#6aa8ff', borderRadius: 4, fontSize: 10,
      letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 700 },
    h: { fontSize: 42, fontWeight: 600, letterSpacing: '-0.02em',
      lineHeight: 1.06, margin: '4px 0 12px', color: '#f4f4fa' },
    lede: { fontSize: 16, color: '#a4a4b4', lineHeight: 1.55,
      maxWidth: 640, marginBottom: 22 },
    by: { display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20,
      paddingBottom: 18, borderBottom: '1px solid #1a1d28' },
    av: { width: 32, height: 32, borderRadius: '50%',
      background: 'linear-gradient(135deg, #6aa8ff, #2a3aaa)' },
    byT: { fontSize: 13, color: '#dadae6', fontWeight: 600 },
    byS: { fontSize: 11, color: '#6a6a7c' },
    h2: { fontSize: 20, fontWeight: 600, margin: '0 0 10px',
      color: '#f4f4fa', letterSpacing: '-0.01em' },
    p: { fontSize: 14.5, lineHeight: 1.65, color: '#bababf',
      maxWidth: 640, marginBottom: 14 },
    code: { fontFamily: '"JetBrains Mono", monospace', fontSize: 12.5,
      background: '#11131c', borderRadius: 8, padding: '14px 18px',
      lineHeight: 1.65, maxWidth: 640, marginBottom: 14,
      border: '1px solid #1a1d28', color: '#dadae6' },
    cmt: { color: '#5a6a82' },
    kw:  { color: '#c47aff' },
    fn:  { color: '#6aa8ff' },
    str: { color: '#7adcb8' },
    num: { color: '#d8456e' },
    side: { padding: '30px 28px', borderLeft: '1px solid #1a1d28',
      overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: 22 },
    sH: { fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase',
      color: '#6a6a7c', fontWeight: 700 },
    related: { display: 'flex', flexDirection: 'column', gap: 12 },
    rItem: { paddingBottom: 12, borderBottom: '1px solid #1a1d28' },
    rT: { fontSize: 13, color: '#dadae6', fontWeight: 600,
      lineHeight: 1.35, letterSpacing: '-0.005em' },
    rM: { fontSize: 11, color: '#6a6a7c', marginTop: 3 },
    metric: { background: '#11131c', border: '1px solid #1a1d28',
      borderRadius: 8, padding: 14, display: 'grid',
      gridTemplateColumns: '1fr 1fr', gap: 10 },
    mV: { fontFamily: '"JetBrains Mono", monospace', fontSize: 22,
      fontWeight: 700, color: '#7adcb8' },
    mVbad: { color: '#d8456e' },
    mL: { fontSize: 10, color: '#6a6a7c', letterSpacing: '0.1em',
      textTransform: 'uppercase' },
  };
  return (
    <div style={s.root}>
      <div style={s.top}>
        <div style={s.brand}>
          <div style={s.logo}></div>
          <div style={s.brandT}>Linear Labs</div>
          <div style={s.brandS}>/ engineering</div>
        </div>
        <div style={s.nav}>
          <span>Posts</span><span>Notes</span><span>Talks</span><span>RSS</span>
          <span>About</span>
        </div>
        <div style={s.cta}>Try Linear →</div>
      </div>
      <div style={s.body}>
        <div style={s.main}>
          <div style={s.eyebrow}>
            <span style={s.tag}>Engineering</span>
            <span>· 8 May 2026 · 14 min read</span>
          </div>
          <h1 style={s.h}>Cutting our p95 by 60% — without<br/>rewriting the database.</h1>
          <div style={s.lede}>A short retrospective on how we found a
            16-millisecond regression that had been hiding in our query path
            since November, and the read-replica routing change that finally
            put it to bed.</div>
          <div style={s.by}>
            <div style={s.av}></div>
            <div>
              <div style={s.byT}>Maya Khanna &nbsp;·&nbsp; Infrastructure</div>
              <div style={s.byS}>5th post · also wrote "Sharding without tears"</div>
            </div>
            <div style={{ marginLeft: 'auto', fontSize: 12, color: '#6a6a7c' }}>
              ↑ 482 · 💬 38 · ⌥ Save
            </div>
          </div>
          <h2 style={s.h2}>The shape of the regression</h2>
          <div style={s.p}>For most of November and December, our p95 query
            latency drifted from 38ms to 54ms with no single deploy to blame.
            The team chased shadows for two weeks. The change, in the end,
            was a single missing index hint inside one query planner cache.</div>
          <div style={s.code}>
            <span style={s.cmt}>// before — implicit plan, sometimes wrong</span><br/>
            <span style={s.kw}>const</span> rows = <span style={s.kw}>await</span> db.<span style={s.fn}>query</span>(<span style={s.str}>"SELECT * FROM issues WHERE …"</span>);<br/>
            <br/>
            <span style={s.cmt}>// after — pinned plan, +<span style={s.num}>1</span> shard hint</span><br/>
            <span style={s.kw}>const</span> rows = <span style={s.kw}>await</span> db.<span style={s.fn}>query</span>(sql, {'{'} hint: <span style={s.str}>"USE INDEX(idx_team_state)"</span>, replica: <span style={s.str}>"hot"</span> {'}'});
          </div>
        </div>
        <div style={s.side}>
          <div>
            <div style={s.sH}>Impact, end of week 2</div>
            <div style={{ ...s.metric, marginTop: 8 }}>
              <div>
                <div style={s.mV}>−60%</div>
                <div style={s.mL}>p95 latency</div>
              </div>
              <div>
                <div style={{ ...s.mV, ...s.mVbad }}>+12%</div>
                <div style={s.mL}>replica load</div>
              </div>
              <div>
                <div style={s.mV}>0</div>
                <div style={s.mL}>rollbacks</div>
              </div>
              <div>
                <div style={s.mV}>1</div>
                <div style={s.mL}>line of code</div>
              </div>
            </div>
          </div>
          <div>
            <div style={s.sH}>Related reading</div>
            <div style={{ ...s.related, marginTop: 8 }}>
              <div style={s.rItem}>
                <div style={s.rT}>Sharding without tears: a year of moving issues around.</div>
                <div style={s.rM}>M. Khanna · Feb · 22 min</div>
              </div>
              <div style={s.rItem}>
                <div style={s.rT}>What we learned moving from Heroku.</div>
                <div style={s.rM}>D. Lin · Nov · 9 min</div>
              </div>
              <div>
                <div style={s.rT}>The case for boring infrastructure.</div>
                <div style={s.rM}>Maya Khanna · Aug · 6 min</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 11. ALBUM REVIEW — Pitchfork-ish, big score, dark + warm
// ─────────────────────────────────────────────────────────────────────────────
function AlbumReview() {
  const s = {
    root: { width: AW2, height: AH2, background: '#161217', color: '#f0eae0',
      fontFamily: '"Inter Tight", system-ui, sans-serif', overflow: 'hidden',
      display: 'flex', flexDirection: 'column' },
    top: { padding: '14px 36px', display: 'flex',
      justifyContent: 'space-between', alignItems: 'center',
      borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: 11,
      letterSpacing: '0.18em', textTransform: 'uppercase' },
    brand: { fontFamily: '"Archivo Black", sans-serif', fontSize: 16,
      letterSpacing: '0.02em', color: '#d8456e' },
    nav: { display: 'flex', gap: 26, color: 'rgba(240,234,224,0.7)' },
    body: { flex: 1, display: 'grid',
      gridTemplateColumns: '1fr 1.3fr', minHeight: 0 },
    art: { padding: '32px 36px', display: 'flex', flexDirection: 'column',
      gap: 16, position: 'relative' },
    cover: { width: '100%', aspectRatio: '1',
      background: 'linear-gradient(140deg, #6a1f4a 0%, #d8456e 50%, #1a0e22 100%)',
      position: 'relative', boxShadow: '0 24px 60px rgba(0,0,0,0.5)' },
    coverT: { position: 'absolute', left: 18, bottom: 16, color: '#f0eae0',
      fontFamily: '"Archivo Black", sans-serif', fontSize: 22,
      letterSpacing: '0.06em', lineHeight: 1 },
    coverS: { position: 'absolute', right: 18, top: 16,
      fontFamily: '"JetBrains Mono", monospace', fontSize: 10,
      letterSpacing: '0.16em', color: 'rgba(240,234,224,0.7)' },
    tracks: { fontFamily: '"JetBrains Mono", monospace', fontSize: 12,
      color: 'rgba(240,234,224,0.78)' },
    tHead: { display: 'flex', justifyContent: 'space-between',
      fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase',
      color: 'rgba(240,234,224,0.5)', paddingBottom: 6,
      borderBottom: '1px solid rgba(255,255,255,0.12)' },
    tRow: { display: 'grid', gridTemplateColumns: '24px 1fr 40px',
      padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.06)',
      alignItems: 'center' },
    review: { padding: '32px 44px', overflow: 'hidden',
      display: 'flex', flexDirection: 'column', gap: 12 },
    crumb: { fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase',
      color: 'rgba(240,234,224,0.55)' },
    artist: { fontFamily: '"Archivo Black", sans-serif', fontSize: 18,
      letterSpacing: '0.04em', color: '#d8456e' },
    album: { fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
      fontWeight: 500, fontSize: 64, lineHeight: 0.96, letterSpacing: '-0.02em',
      margin: '4px 0 6px' },
    metaR: { display: 'flex', gap: 16, fontSize: 11,
      letterSpacing: '0.12em', textTransform: 'uppercase',
      color: 'rgba(240,234,224,0.6)', paddingBottom: 14,
      borderBottom: '1px solid rgba(255,255,255,0.12)' },
    scoreRow: { display: 'flex', alignItems: 'flex-end', gap: 22,
      paddingTop: 4 },
    score: { fontFamily: '"Playfair Display", serif', fontSize: 120,
      lineHeight: 0.85, fontWeight: 800, color: '#d8456e',
      letterSpacing: '-0.04em' },
    scoreL: { display: 'flex', flexDirection: 'column', gap: 6,
      paddingBottom: 8 },
    badge: { display: 'inline-block', padding: '5px 14px',
      background: '#d8456e', color: '#161217', borderRadius: 3,
      fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase',
      fontWeight: 800, alignSelf: 'flex-start' },
    standfirst: { fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
      fontSize: 18, lineHeight: 1.42, fontWeight: 400,
      color: 'rgba(240,234,224,0.92)', maxWidth: 520, marginTop: 8 },
    body2: { fontFamily: '"Spectral", serif', fontSize: 14, lineHeight: 1.62,
      color: 'rgba(240,234,224,0.82)', maxWidth: 540, marginTop: 6 },
    drop: { fontFamily: '"Playfair Display", serif', fontSize: 56,
      float: 'left', lineHeight: 0.92, padding: '2px 8px 0 0',
      color: '#d8456e', fontStyle: 'italic', fontWeight: 500 },
    byline: { fontSize: 10, letterSpacing: '0.22em',
      textTransform: 'uppercase', color: 'rgba(240,234,224,0.55)',
      marginTop: 'auto', paddingTop: 14,
      borderTop: '1px solid rgba(255,255,255,0.12)',
      display: 'flex', justifyContent: 'space-between' },
  };
  return (
    <div style={s.root}>
      <div style={s.top}>
        <span style={s.brand}>FREQUENCY</span>
        <span style={s.nav}>
          <span>News</span><span>Reviews</span><span>Best new</span>
          <span>Features</span><span>Lists</span>
        </span>
        <span style={{ color: 'rgba(240,234,224,0.6)' }}>Friday · 8 May 2026</span>
      </div>
      <div style={s.body}>
        <div style={s.art}>
          <div style={s.cover}>
            <div style={s.coverS}>LP · 2026 · 12 tracks</div>
            <div style={s.coverT}>V. LEV<br/>ATLAS</div>
          </div>
          <div style={s.tracks}>
            <div style={s.tHead}><span>Tracklist · 12 / 48:22</span><span>length</span></div>
            <div style={s.tRow}><span>01</span><span>Continents</span><span>4:42</span></div>
            <div style={s.tRow}><span>02</span><span>The wide grey thing</span><span>3:18</span></div>
            <div style={s.tRow}><span>03</span><span>Pages, lit from below</span><span>5:04</span></div>
            <div style={s.tRow}><span>04</span><span>A small fire</span><span>2:48</span></div>
            <div style={s.tRow}><span>05</span><span>Atlas, the long way</span><span>6:32</span></div>
            <div style={s.tRow}><span>06</span><span>April, again</span><span>4:14</span></div>
          </div>
        </div>
        <div style={s.review}>
          <div style={s.crumb}>Reviews · Ambient · Long-players</div>
          <div style={s.artist}>V. LEV</div>
          <h1 style={s.album}>Atlas.</h1>
          <div style={s.metaR}>
            <span>Composed: Berlin · 2024–26</span>
            <span>Label: Brume</span>
            <span>Format: LP / digital</span>
          </div>
          <div style={s.scoreRow}>
            <div style={s.score}>8.6</div>
            <div style={s.scoreL}>
              <span style={s.badge}>Best new music</span>
              <div style={{ fontSize: 11, letterSpacing: '0.16em',
                textTransform: 'uppercase', color: 'rgba(240,234,224,0.6)' }}>
                · 6 May · digital release
              </div>
            </div>
          </div>
          <div style={s.standfirst}>
            A patient, often-startling second LP from the Berlin composer —
            an hour that asks you to be in the room with it, and rewards
            you for staying.
          </div>
          <div style={s.body2}>
            <span style={s.drop}>T</span>he opening of <i>Atlas</i> is so quiet
            you can hear the room V. Lev recorded it in. Three minutes pass
            before anything you could call a melody enters; when it does,
            played on what sounds like a felted upright, you realise the
            piece has been there the whole time, behind the breath of the
            mics.
          </div>
          <div style={s.byline}>
            <span>By Aanya R. · 1,420 words</span>
            <span>Share · Save · Listen on Brume.fm</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 12. PODCAST EPISODE — show notes + transcript, pale lavender
// ─────────────────────────────────────────────────────────────────────────────
function PodcastEpisode() {
  const s = {
    root: { width: AW2, height: AH2, background: '#efebf4', color: '#1a1525',
      fontFamily: '"Inter Tight", system-ui, sans-serif', overflow: 'hidden',
      display: 'grid', gridTemplateRows: '52px 1fr' },
    top: { display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', padding: '0 32px',
      borderBottom: '1px solid #d8d2e4', fontSize: 13 },
    brand: { display: 'flex', alignItems: 'center', gap: 10 },
    logo: { width: 26, height: 26, borderRadius: 7,
      background: 'linear-gradient(135deg, #7a5af8, #f48ad8)' },
    brandT: { fontFamily: '"Fraunces", serif', fontSize: 19, fontWeight: 500,
      letterSpacing: '-0.005em' },
    nav: { display: 'flex', gap: 22, fontSize: 12.5, color: '#5a526a' },
    body: { display: 'grid', gridTemplateColumns: '1.05fr 1fr',
      minHeight: 0 },
    show: { padding: '28px 36px', borderRight: '1px solid #d8d2e4',
      display: 'flex', flexDirection: 'column', gap: 14, overflow: 'hidden' },
    crumb: { fontFamily: '"JetBrains Mono", monospace', fontSize: 10,
      letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7a5af8' },
    art: { display: 'grid', gridTemplateColumns: '120px 1fr',
      gap: 18, alignItems: 'flex-start' },
    cover: { width: 120, height: 120, borderRadius: 12,
      background: 'linear-gradient(140deg, #7a5af8 0%, #f48ad8 60%, #f4d6a8 100%)',
      boxShadow: '0 12px 28px rgba(122,90,248,0.25)',
      display: 'flex', alignItems: 'flex-end', padding: 10,
      color: '#fff', fontFamily: '"Fraunces", serif', fontWeight: 600,
      fontSize: 16, lineHeight: 1.05 },
    showT: { fontFamily: '"Fraunces", serif', fontSize: 30,
      fontWeight: 500, letterSpacing: '-0.015em', lineHeight: 1.05,
      margin: '0 0 4px' },
    showI: { fontStyle: 'italic', color: '#7a5af8' },
    epM: { fontSize: 12, color: '#5a526a' },
    desc: { fontFamily: '"Spectral", serif', fontSize: 14, lineHeight: 1.55,
      color: '#3a3346', maxWidth: 480 },
    player: { background: '#1a1525', color: '#efebf4', borderRadius: 14,
      padding: 16, display: 'flex', flexDirection: 'column', gap: 10 },
    pTop: { display: 'flex', alignItems: 'center', gap: 14 },
    play: { width: 44, height: 44, borderRadius: '50%',
      background: '#7a5af8', color: '#fff',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 16 },
    pT: { fontSize: 13, fontWeight: 600 },
    pS: { fontSize: 11, color: 'rgba(239,235,244,0.6)' },
    bar: { height: 4, background: 'rgba(239,235,244,0.18)',
      borderRadius: 2, position: 'relative' },
    barF: { position: 'absolute', left: 0, top: 0, height: '100%',
      width: '38%', background: '#7a5af8', borderRadius: 2 },
    times: { display: 'flex', justifyContent: 'space-between',
      fontFamily: '"JetBrains Mono", monospace', fontSize: 11,
      color: 'rgba(239,235,244,0.7)' },
    notesH: { fontSize: 10, letterSpacing: '0.18em',
      textTransform: 'uppercase', color: '#7a5af8', fontWeight: 700,
      marginTop: 4 },
    chap: { display: 'grid', gridTemplateColumns: '52px 1fr',
      gap: 10, padding: '5px 0', borderBottom: '1px solid #d8d2e4',
      fontSize: 13, color: '#3a3346' },
    chT: { fontFamily: '"JetBrains Mono", monospace', fontSize: 11,
      color: '#7a5af8' },
    tx: { padding: '28px 36px', overflow: 'hidden',
      display: 'flex', flexDirection: 'column', gap: 14 },
    txH: { fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase',
      color: '#5a526a', fontWeight: 700,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    search: { padding: '6px 12px', background: '#fff',
      border: '1px solid #d8d2e4', borderRadius: 999, fontSize: 12,
      color: '#7a7a8a' },
    line: { display: 'grid', gridTemplateColumns: '54px 1fr',
      gap: 12, alignItems: 'baseline' },
    ts: { fontFamily: '"JetBrains Mono", monospace', fontSize: 11,
      color: '#7a5af8' },
    sp: { fontSize: 11, fontWeight: 700, color: '#1a1525',
      letterSpacing: '0.06em', textTransform: 'uppercase' },
    body2: { fontFamily: '"Spectral", serif', fontSize: 14, lineHeight: 1.6,
      color: '#1a1525' },
    em: { fontStyle: 'italic', color: '#5a526a' },
  };
  return (
    <div style={s.root}>
      <div style={s.top}>
        <div style={s.brand}>
          <div style={s.logo}></div>
          <div style={s.brandT}>Slow Listen</div>
          <span style={{ color: '#7a7a8a', fontSize: 11,
            marginLeft: 8 }}>· a podcast about quiet things</span>
        </div>
        <div style={s.nav}>
          <span>Episodes</span><span>Series</span><span>Transcripts</span>
          <span>About</span><span>♡ 248</span>
        </div>
        <div style={{ padding: '6px 14px', background: '#1a1525',
          color: '#efebf4', borderRadius: 999, fontSize: 12,
          fontWeight: 600 }}>+ Subscribe</div>
      </div>
      <div style={s.body}>
        <div style={s.show}>
          <div style={s.crumb}>Episode 84 · Slow Listen · season III</div>
          <div style={s.art}>
            <div style={s.cover}>SLOW<br/>LISTEN</div>
            <div>
              <h1 style={s.showT}>Aanya Rao, on
                <span style={s.showI}> firing</span> her<br/>optimisation coach.</h1>
              <div style={s.epM}>74 min · published 5 May 2026 · explicit no</div>
              <div style={{ ...s.desc, marginTop: 8 }}>
                The cookbook author on patience, on what her second book is
                really about, and on the morning she chose to look at a tree
                instead of crossing things off a list.
              </div>
            </div>
          </div>
          <div style={s.player}>
            <div style={s.pTop}>
              <div style={s.play}>▶</div>
              <div style={{ flex: 1 }}>
                <div style={s.pT}>Ep. 84 · Aanya Rao on patience</div>
                <div style={s.pS}>Slow Listen · 74:08 · ⓘ 1.0×</div>
              </div>
              <div style={{ fontSize: 18, color: 'rgba(239,235,244,0.6)' }}>
                ⤓ ⤴
              </div>
            </div>
            <div style={s.bar}><div style={s.barF}></div></div>
            <div style={s.times}><span>28:14</span><span>−45:54</span></div>
          </div>
          <div>
            <div style={s.notesH}>Chapters</div>
            <div style={{ ...s.chap, paddingTop: 6 }}>
              <span style={s.chT}>00:00</span>
              <span><b>Intro.</b> Why a kitchen the size of a hallway is the right size for one cook.</span>
            </div>
            <div style={s.chap}>
              <span style={s.chT}>08:42</span>
              <span><b>The second book.</b> What it is about, and why it took five years.</span>
            </div>
            <div style={s.chap}>
              <span style={s.chT}>28:14</span>
              <span><b>Firing the coach.</b> The morning Aanya looked at a tree.</span>
            </div>
            <div style={s.chap}>
              <span style={s.chT}>41:08</span>
              <span><b>Reading list.</b> What she's reading now.</span>
            </div>
          </div>
        </div>
        <div style={s.tx}>
          <div style={s.txH}>
            <span>Transcript · auto-aligned</span>
            <span style={s.search}>⌕ Search transcript…</span>
          </div>
          <div style={s.line}>
            <span style={s.ts}>28:14</span>
            <div>
              <div style={s.sp}>Anya Iqbal (host)</div>
              <div style={s.body2}>So — you fired your optimisation coach.
                I want to start there, because half of my listeners pay
                someone to do something similar.</div>
            </div>
          </div>
          <div style={s.line}>
            <span style={s.ts}>28:31</span>
            <div>
              <div style={s.sp}>Aanya Rao (guest)</div>
              <div style={s.body2}>I did. <span style={s.em}>(laughs)</span> I had
                a man on Zoom telling me I was leaving forty minutes on the table
                every morning. And I sat there one Tuesday and thought, what
                exactly am I supposed to do with forty more minutes —</div>
            </div>
          </div>
          <div style={s.line}>
            <span style={s.ts}>28:54</span>
            <div>
              <div style={s.sp}>Anya Iqbal</div>
              <div style={s.body2}>Make more bread?</div>
            </div>
          </div>
          <div style={s.line}>
            <span style={s.ts}>28:55</span>
            <div>
              <div style={s.sp}>Aanya Rao</div>
              <div style={s.body2}>The bread already takes a day. The bread
                does not need help. <span style={s.em}>(both laugh)</span> So I
                let him keep the forty minutes. I think this is the closest
                I've come to a religious conversion in my adult life.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section · specialized content formats (exposed for articles.jsx App)
// ─────────────────────────────────────────────────────────────────────────────
function ArticleFormatsSection() {
  return (
    <DCSection id="art-formats" title="Specialized content formats"
      subtitle="Five article types that aren't just essays — technical docs, recipe, dev blog, music review, and a podcast episode page.">
      <DCArtboard id="a-docs"    label="08 · Docs article · Halid"          width={AW2} height={AH2}><DocsArticle /></DCArtboard>
      <DCArtboard id="a-recipe"  label="09 · Recipe · milkpath"             width={AW2} height={AH2}><RecipePage /></DCArtboard>
      <DCArtboard id="a-devblog" label="10 · Dev blog · Linear Labs"        width={AW2} height={AH2}><DevBlog /></DCArtboard>
      <DCArtboard id="a-review"  label="11 · Album review · Frequency"      width={AW2} height={AH2}><AlbumReview /></DCArtboard>
      <DCArtboard id="a-pod"     label="12 · Podcast episode · Slow Listen" width={AW2} height={AH2}><PodcastEpisode /></DCArtboard>
    </DCSection>
  );
}

window.ArticleFormatsSection = ArticleFormatsSection;
