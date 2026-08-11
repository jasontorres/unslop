// 12 article / editorial layouts — long-form reading, editorial indexes,
// and specialized content formats (docs, recipe, dev blog, review, podcast).

const AW = 1280;
const AH = 800;

// ─────────────────────────────────────────────────────────────────────────────
// 1. ESSAY READER — The Quiet Times, slow-media, single-col big serif
// ─────────────────────────────────────────────────────────────────────────────
function EssayReader() {
  const s = {
    root: { width: AW, height: AH, background: '#eaeeeb', color: '#0c1816',
      fontFamily: '"Inter Tight", system-ui, sans-serif',
      display: 'grid', gridTemplateColumns: '1fr 720px 1fr', overflow: 'hidden' },
    rail: { padding: '32px 24px', display: 'flex', flexDirection: 'column',
      gap: 18, borderRight: '1px solid #c8d2cc' },
    railR: { padding: '32px 24px', display: 'flex', flexDirection: 'column',
      gap: 28, borderLeft: '1px solid #c8d2cc', fontSize: 12, color: '#5a6a64' },
    brand: { fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
      fontSize: 22, color: '#0e4a3a', letterSpacing: '-0.01em' },
    meta: { fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase',
      color: '#5a6a64' },
    prog: { display: 'flex', flexDirection: 'column', gap: 6, marginTop: 4 },
    progBar: { height: 2, background: '#c8d2cc', position: 'relative' },
    progFill: { position: 'absolute', left: 0, top: 0, height: '100%',
      background: '#0e4a3a', width: '42%' },
    chapH: { fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
      color: '#5a6a64', marginTop: 16 },
    chap: (a) => ({ fontFamily: '"Cormorant Garamond", serif',
      fontSize: 14, fontStyle: a ? 'italic' : 'normal',
      color: a ? '#0e4a3a' : '#1a2a26', padding: '6px 0',
      borderTop: '1px solid #cfd8d2', lineHeight: 1.3 }),
    article: { padding: '38px 56px 0', overflow: 'hidden',
      display: 'flex', flexDirection: 'column' },
    issueLine: { display: 'flex', justifyContent: 'space-between',
      fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase',
      color: '#5a6a64', paddingBottom: 28, borderBottom: '1px solid #c8d2cc' },
    eyebrow: { fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
      fontSize: 16, color: '#0e4a3a', marginTop: 24 },
    h: { fontFamily: '"EB Garamond", serif', fontSize: 52, fontWeight: 500,
      lineHeight: 1.05, letterSpacing: '-0.015em', margin: '12px 0 18px',
      color: '#0c1816' },
    standfirst: { fontFamily: '"EB Garamond", serif', fontStyle: 'italic',
      fontSize: 19, lineHeight: 1.4, color: '#1a2a26', maxWidth: 580,
      margin: '0 0 22px' },
    by: { fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
      color: '#5a6a64', paddingBottom: 22, borderBottom: '1px solid #c8d2cc' },
    body: { fontFamily: '"EB Garamond", serif', fontSize: 16,
      lineHeight: 1.62, color: '#0c1816', marginTop: 20, columnCount: 1 },
    drop: { fontFamily: '"EB Garamond", serif', fontSize: 64, float: 'left',
      lineHeight: 0.92, padding: '6px 8px 0 0', fontWeight: 500,
      color: '#0e4a3a' },
    pull: { fontFamily: '"EB Garamond", serif', fontStyle: 'italic',
      fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase',
      color: '#0e4a3a', marginTop: 6 },
    sideMeta: { display: 'flex', flexDirection: 'column', gap: 6 },
    smH: { fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
      fontSize: 15, color: '#0c1816' },
    smT: { fontSize: 12, lineHeight: 1.5, color: '#1a2a26' },
  };
  return (
    <div style={s.root}>
      <div style={s.rail}>
        <div style={s.brand}>The Quiet Times</div>
        <div style={s.meta}>Issue 042 · Reader</div>
        <div style={s.prog}>
          <div style={s.progBar}><div style={s.progFill}></div></div>
          <div style={{ fontSize: 10, color: '#5a6a64' }}>11 min · page 4 of 9</div>
        </div>
        <div style={s.chapH}>In this issue</div>
        <div style={s.chap()}>Editor's letter</div>
        <div style={s.chap()}>The garden at five</div>
        <div style={s.chap()}>Bread, again</div>
        <div style={s.chap(true)}>The shape of an afternoon</div>
        <div style={s.chap()}>Letters to the editor</div>
        <div style={s.chap()}>Photo essay · Lisbon, 6pm</div>
      </div>
      <div style={s.article}>
        <div style={s.issueLine}>
          <span>The Quiet Times · No. 042</span>
          <span>Spring &nbsp;·&nbsp; Long Afternoons</span>
          <span>Aa · Aa</span>
        </div>
        <div style={s.eyebrow}>An essay</div>
        <h1 style={s.h}>The shape of an<br/>afternoon</h1>
        <div style={s.standfirst}>
          On returning to a city after years away, and learning
          that the hours you used to keep there have kept on without you.
        </div>
        <div style={s.by}>
          By Anya Iqbal &nbsp;·&nbsp; Photographs by Maria Eklöf &nbsp;·&nbsp; 11 min
        </div>
        <div style={s.body}>
          <span style={s.drop}>T</span>he afternoon I arrived back in Lisbon
          it was raining — the soft, slanted kind that smudges the pavement
          before it wets it. I walked from Cais do Sodré up through Bica
          carrying a bag that I did not remember packing this heavy, and
          stopped at the corner where, in another year, I used to buy
          oranges from a woman who never gave me a bag.
          <div style={s.pull}>· · ·</div>
          She was not there. The shop was a café now — a good café, the kind
          that uses heavy cups — and the man behind the counter nodded as
          though we had agreed on something.
        </div>
      </div>
      <div style={s.railR}>
        <div style={s.sideMeta}>
          <div style={{ fontSize: 10, letterSpacing: '0.22em',
            textTransform: 'uppercase', color: '#5a6a64' }}>Pull quote</div>
          <div style={s.smH}>"Cities still know us,<br/>when we let them."</div>
        </div>
        <div style={s.sideMeta}>
          <div style={{ fontSize: 10, letterSpacing: '0.22em',
            textTransform: 'uppercase', color: '#5a6a64' }}>From the editors</div>
          <div style={s.smT}>This essay appears in print on pages 38–47 of
            the Spring issue, alongside Maria Eklöf's photographs.</div>
        </div>
        <div style={s.sideMeta}>
          <div style={{ fontSize: 10, letterSpacing: '0.22em',
            textTransform: 'uppercase', color: '#5a6a64' }}>Also reading</div>
          <div style={s.smH}>Bread, again</div>
          <div style={s.smT}>Aanya R. on returning to sourdough as
            a practice, not a project.</div>
          <div style={{ ...s.smH, marginTop: 8 }}>The garden at five</div>
          <div style={s.smT}>Toma writes from her allotment in May.</div>
        </div>
        <div style={{ marginTop: 'auto', fontSize: 10,
          letterSpacing: '0.22em', textTransform: 'uppercase',
          color: '#5a6a64' }}>↑ Top &nbsp; Save &nbsp; Print</div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. MAGAZINE FEATURE — dark teal, full-bleed hero, drop cap, sidebar pull
// ─────────────────────────────────────────────────────────────────────────────
function MagazineFeature() {
  const s = {
    root: { width: AW, height: AH, background: '#0e2027', color: '#ecebe2',
      fontFamily: '"Inter Tight", system-ui, sans-serif',
      display: 'flex', flexDirection: 'column', overflow: 'hidden' },
    top: { display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', padding: '18px 40px',
      borderBottom: '1px solid rgba(236,235,226,0.16)', fontSize: 11,
      letterSpacing: '0.2em', textTransform: 'uppercase' },
    brand: { fontFamily: '"DM Serif Display", serif', fontSize: 22,
      letterSpacing: '0.04em', fontStyle: 'italic' },
    nav: { display: 'flex', gap: 28, color: 'rgba(236,235,226,0.7)' },
    hero: { flex: 1, display: 'grid', gridTemplateColumns: '1.05fr 1fr',
      minHeight: 0 },
    heroL: { padding: '46px 48px 30px', display: 'flex',
      flexDirection: 'column', gap: 14, minHeight: 0 },
    kicker: { fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase',
      color: '#e6c4d0' },
    h: { fontFamily: '"DM Serif Display", serif', fontSize: 78,
      lineHeight: 0.96, letterSpacing: '-0.02em', margin: '4px 0 4px',
      fontWeight: 400 },
    hI: { fontStyle: 'italic', color: '#e6c4d0' },
    standfirst: { fontFamily: '"Spectral", serif', fontStyle: 'italic',
      fontSize: 19, lineHeight: 1.45, color: 'rgba(236,235,226,0.86)',
      maxWidth: 520, fontWeight: 300 },
    by: { fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase',
      color: 'rgba(236,235,226,0.7)', marginTop: 4 },
    bodyRow: { display: 'grid', gridTemplateColumns: '1fr 220px', gap: 28,
      marginTop: 'auto', paddingTop: 16,
      borderTop: '1px solid rgba(236,235,226,0.18)' },
    body: { fontFamily: '"Spectral", serif', fontSize: 14, lineHeight: 1.62,
      color: 'rgba(236,235,226,0.9)' },
    drop: { fontFamily: '"DM Serif Display", serif', fontSize: 52,
      float: 'left', lineHeight: 0.9, padding: '4px 8px 0 0',
      color: '#e6c4d0' },
    pull: { fontFamily: '"DM Serif Display", serif', fontStyle: 'italic',
      fontSize: 18, lineHeight: 1.25, color: '#e6c4d0',
      borderLeft: '1px solid #e6c4d0', paddingLeft: 14 },
    heroR: { position: 'relative',
      background: 'linear-gradient(160deg, #1a3a44 0%, #38635c 35%, #b8889a 80%, #e6c4d0 100%)' },
    heroRImg: { position: 'absolute', inset: 0,
      background: 'radial-gradient(ellipse at 30% 70%, rgba(14,32,39,0.6), transparent 60%)' },
    folio: { position: 'absolute', right: 24, bottom: 22, fontSize: 10,
      letterSpacing: '0.3em', textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.85)', textAlign: 'right' },
  };
  return (
    <div style={s.root}>
      <div style={s.top}>
        <span style={s.brand}>Werner Quarterly</span>
        <span style={s.nav}>
          <span>Features</span><span>Reviews</span><span>Photo</span>
          <span>Index</span><span>Subscribe</span>
        </span>
        <span>Issue 14 · Spring 26</span>
      </div>
      <div style={s.hero}>
        <div style={s.heroL}>
          <div style={s.kicker}>Feature · 4,200 words</div>
          <h1 style={s.h}>
            The long<br/>
            <span style={s.hI}>commute</span><br/>
            home.
          </h1>
          <div style={s.standfirst}>
            A century after the Werner Institute opened its doors, the building
            is closing for two years of restoration. The director on what
            stays, what goes, and what a museum is for.
          </div>
          <div style={s.by}>
            By Maya Khanna · Photographs by V. Lev
          </div>
          <div style={s.bodyRow}>
            <div style={s.body}>
              <span style={s.drop}>D</span>r. Lehmann arrives at the
              Werner before the cleaners do. She walks the long gallery
              with her hands behind her back, the way her father once did
              in his own museum, and stops in front of a small bronze that
              has been on this plinth since 1962. "It will go into storage
              on the fourteenth," she says. "And we will see what we are
              without it."
            </div>
            <div style={s.pull}>
              "A museum is the only public room that asks you to be quiet
              and look."
            </div>
          </div>
        </div>
        <div style={s.heroR}>
          <div style={s.heroRImg}></div>
          <div style={s.folio}>
            Photograph · The Werner, west gallery<br/>
            V. Lev for Werner Quarterly · 2026
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. PHOTO ESSAY — minimal white, big captioned images, monospace nav
// ─────────────────────────────────────────────────────────────────────────────
function PhotoEssay() {
  const s = {
    root: { width: AW, height: AH, background: '#fbfbfa', color: '#0a0a0a',
      fontFamily: '"Inter Tight", system-ui, sans-serif',
      display: 'grid', gridTemplateRows: '46px 1fr 36px', overflow: 'hidden' },
    top: { display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', padding: '0 24px',
      borderBottom: '1px solid #e6e4de',
      fontFamily: '"IBM Plex Mono", monospace', fontSize: 11,
      letterSpacing: '0.04em' },
    topMid: { color: '#7a7a72' },
    body: { display: 'grid', gridTemplateColumns: '300px 1fr', minHeight: 0 },
    intro: { padding: '38px 28px', borderRight: '1px solid #e6e4de',
      display: 'flex', flexDirection: 'column', gap: 18 },
    kicker: { fontFamily: '"IBM Plex Mono", monospace', fontSize: 10,
      letterSpacing: '0.16em', textTransform: 'uppercase', color: '#1a3a52' },
    title: { fontFamily: '"DM Serif Display", serif', fontSize: 36,
      lineHeight: 1, letterSpacing: '-0.01em', margin: 0 },
    titleI: { fontStyle: 'italic', color: '#6a4a3a' },
    lede: { fontFamily: '"Spectral", serif', fontSize: 14, lineHeight: 1.55,
      color: '#3a3a32' },
    by: { fontFamily: '"IBM Plex Mono", monospace', fontSize: 10,
      letterSpacing: '0.14em', textTransform: 'uppercase', color: '#7a7a72',
      paddingTop: 12, borderTop: '1px solid #e6e4de', marginTop: 'auto' },
    plate: { padding: '24px 28px', display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr', gridTemplateRows: '1fr 1fr',
      gap: 14, minHeight: 0 },
    p: (g, sp) => ({ background: g, ...(sp || {}),
      position: 'relative', overflow: 'hidden' }),
    cap: { position: 'absolute', left: 12, bottom: 10,
      fontFamily: '"IBM Plex Mono", monospace', fontSize: 9,
      letterSpacing: '0.12em', textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.92)',
      textShadow: '0 1px 2px rgba(0,0,0,0.4)' },
    capDark: { color: '#0a0a0a', textShadow: 'none' },
    foot: { display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', padding: '0 24px',
      borderTop: '1px solid #e6e4de',
      fontFamily: '"IBM Plex Mono", monospace', fontSize: 10,
      letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7a7a72' },
  };
  return (
    <div style={s.root}>
      <div style={s.top}>
        <span style={{ fontFamily: '"DM Serif Display", serif',
          fontSize: 16, letterSpacing: '0.02em' }}>Werner Quarterly</span>
        <span style={s.topMid}>photo&nbsp;essay&nbsp;/&nbsp;06&nbsp;of&nbsp;14</span>
        <span>about &nbsp; index &nbsp; subscribe</span>
      </div>
      <div style={s.body}>
        <div style={s.intro}>
          <div style={s.kicker}>03 · Photo essay</div>
          <h1 style={s.title}>
            Lisbon,<br/>
            <span style={s.titleI}>6 p.m.</span>
          </h1>
          <div style={s.lede}>
            Fourteen photographs made between Bica and Alfama on a single
            evening in April, when the light turned the limestone the color
            of cooled bread.
          </div>
          <div style={s.lede} >
            Scroll, or press <b>→</b> to advance one frame at a time.
            Captions are placed where the photographer asked them to be.
          </div>
          <div style={s.by}>
            Photographs · Maria Eklöf<br/>
            Text · Anya Iqbal<br/>
            10 April 2026
          </div>
        </div>
        <div style={s.plate}>
          <div style={s.p('linear-gradient(170deg, #c8d4e0 0%, #5a6a7a 50%, #1a2230 100%)',
            { gridRow: 'span 2' })}>
            <div style={s.cap}>01 · Rua da Bica · 17:42</div>
          </div>
          <div style={s.p('linear-gradient(160deg, #0e1418, #3a4a44 60%, #88c4b8)')}>
            <div style={s.cap}>02 · A. has lit the stove</div>
          </div>
          <div style={s.p('linear-gradient(160deg, #c8d8d4, #3a5a52)')}>
            <div style={{ ...s.cap, ...s.capDark }}>03 · Doorway, Alfama</div>
          </div>
          <div style={s.p('linear-gradient(180deg, #c4cca8, #5a7042)')}>
            <div style={{ ...s.cap, ...s.capDark }}>04 · Oranges, 80¢/kg</div>
          </div>
          <div style={s.p('linear-gradient(160deg, #dde6e0, #5a7a72 60%, #0e1a16)')}>
            <div style={s.cap}>05 · The boy with the cat</div>
          </div>
        </div>
      </div>
      <div style={s.foot}>
        <span>← prev · 05 / 14 · next →</span>
        <span>↓ save the set · share</span>
        <span>scroll for the captions</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. INTERVIEW — sage tinted, Q&A alternating, color-coded names
// ─────────────────────────────────────────────────────────────────────────────
function InterviewArticle() {
  const s = {
    root: { width: AW, height: AH, background: '#e9ede2', color: '#1f2a1c',
      fontFamily: '"Inter Tight", system-ui, sans-serif',
      display: 'grid', gridTemplateColumns: '440px 1fr', overflow: 'hidden' },
    left: { background: '#1f2a1c', color: '#e9ede2', padding: '38px 36px',
      display: 'flex', flexDirection: 'column', gap: 18, position: 'relative' },
    kicker: { fontFamily: '"JetBrains Mono", monospace', fontSize: 10,
      letterSpacing: '0.22em', textTransform: 'uppercase',
      color: '#c4cc9e' },
    h: { fontFamily: '"Playfair Display", serif', fontSize: 56,
      lineHeight: 0.98, letterSpacing: '-0.02em', margin: '0 0 4px',
      fontWeight: 500 },
    hI: { fontStyle: 'italic', color: '#c4cc9e', fontWeight: 400 },
    sub: { fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
      fontSize: 18, lineHeight: 1.45, color: 'rgba(233,237,226,0.86)',
      fontWeight: 400 },
    portrait: { marginTop: 'auto', width: '100%', aspectRatio: '1.3',
      background: 'linear-gradient(155deg, #c4cc9e 0%, #5a6a3e 55%, #1f2a1c 100%)',
      borderRadius: 2 },
    pCap: { fontFamily: '"JetBrains Mono", monospace', fontSize: 9,
      letterSpacing: '0.16em', textTransform: 'uppercase',
      color: 'rgba(233,237,226,0.7)', marginTop: 10 },
    right: { padding: '38px 48px', overflow: 'hidden',
      display: 'flex', flexDirection: 'column', gap: 12 },
    intro: { fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
      fontSize: 15, lineHeight: 1.55, color: '#3a4a36', maxWidth: 560,
      paddingBottom: 16, borderBottom: '1px solid #c4d0b8' },
    qRow: { display: 'grid', gridTemplateColumns: '64px 1fr',
      gap: 16, alignItems: 'baseline' },
    speaker: (c) => ({ fontFamily: '"JetBrains Mono", monospace',
      fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase',
      color: c, fontWeight: 600, paddingTop: 4 }),
    line: { fontFamily: '"Spectral", serif', fontSize: 15, lineHeight: 1.55,
      color: '#1f2a1c' },
    em: { fontStyle: 'italic', color: '#5a6a3e' },
    foot: { marginTop: 'auto', paddingTop: 16, fontSize: 11,
      letterSpacing: '0.16em', textTransform: 'uppercase',
      borderTop: '1px solid #c4d0b8', color: '#5a6a3e',
      display: 'flex', justifyContent: 'space-between' },
  };
  return (
    <div style={s.root}>
      <div style={s.left}>
        <div style={s.kicker}>The Quiet Times · Interview · No. 042</div>
        <h1 style={s.h}>"You can't<br/>
          <span style={s.hI}>rush</span> bread,<br/>
          or anything<br/>
          worth doing."</h1>
        <div style={s.sub}>A conversation with Aanya Rao about her
          second book, the death of the side hustle, and
          why she fired her optimisation coach.</div>
        <div style={s.portrait}></div>
        <div style={s.pCap}>Photograph by Maria Eklöf · Brooklyn · February</div>
      </div>
      <div style={s.right}>
        <div style={s.intro}>
          Aanya Rao's kitchen is the size of a hallway. We meet there on a
          Tuesday, the proofing basket on the counter, the radio at a volume
          you have to lean in to hear. The interview has been condensed and
          edited for clarity.
        </div>
        <div style={s.qRow}>
          <div style={s.speaker('#5a6a3e')}>AI</div>
          <div style={s.line}>You start the new book with a chapter about
            <em style={s.em}> failing</em> your sourdough for nine months.
            Why open there?</div>
        </div>
        <div style={s.qRow}>
          <div style={s.speaker('#7a3a1f')}>AR</div>
          <div style={s.line}>Because I think we have lost permission to be
            bad at things. The first book was about getting good. This one
            had to start with the part of getting good that nobody puts
            on Instagram, which is the long stretch where it doesn't work.</div>
        </div>
        <div style={s.qRow}>
          <div style={s.speaker('#5a6a3e')}>AI</div>
          <div style={s.line}>You mention firing your optimisation coach.</div>
        </div>
        <div style={s.qRow}>
          <div style={s.speaker('#7a3a1f')}>AR</div>
          <div style={s.line}>I had a man on Zoom telling me I was leaving
            forty minutes on the table every morning. I thought: forty minutes
            of <em style={s.em}>what</em>. Forty minutes of looking at a tree.</div>
        </div>
        <div style={s.qRow}>
          <div style={s.speaker('#5a6a3e')}>AI</div>
          <div style={s.line}>And so?</div>
        </div>
        <div style={s.qRow}>
          <div style={s.speaker('#7a3a1f')}>AR</div>
          <div style={s.line}>And so I let him keep the forty minutes.</div>
        </div>
        <div style={s.foot}>
          <span>Continued on page 28</span>
          <span>11,400 words · 38 min read</span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 5. NEWS BROADSHEET — dense multi-column, condensed serif masthead
// ─────────────────────────────────────────────────────────────────────────────
function NewsBroadsheet() {
  const s = {
    root: { width: AW, height: AH, background: '#ebede4', color: '#181410',
      fontFamily: '"PT Serif", Georgia, serif', overflow: 'hidden',
      display: 'flex', flexDirection: 'column' },
    masthead: { padding: '14px 28px 6px', textAlign: 'center',
      borderBottom: '3px double #181410' },
    mastT: { fontFamily: '"Playfair Display", serif', fontWeight: 800,
      fontSize: 56, letterSpacing: '-0.01em', lineHeight: 1,
      margin: 0, fontStyle: 'italic' },
    mastSub: { display: 'flex', justifyContent: 'space-between',
      fontFamily: '"Inter Tight", sans-serif', fontSize: 10,
      letterSpacing: '0.18em', textTransform: 'uppercase',
      color: '#3a3028', paddingTop: 6 },
    tabs: { display: 'flex', justifyContent: 'center', gap: 24,
      padding: '8px 0', borderBottom: '1px solid #181410',
      fontFamily: '"Inter Tight", sans-serif', fontSize: 11,
      letterSpacing: '0.18em', textTransform: 'uppercase' },
    tabA: { borderBottom: '2px solid #181410', paddingBottom: 4 },
    body: { flex: 1, display: 'grid',
      gridTemplateColumns: '1fr 1.6fr 1fr', gap: 0, minHeight: 0 },
    col: { padding: '18px 22px', borderRight: '1px solid #181410',
      overflow: 'hidden', minHeight: 0 },
    colLast: { borderRight: 'none' },
    cKick: { fontFamily: '"Inter Tight", sans-serif', fontSize: 9,
      letterSpacing: '0.22em', textTransform: 'uppercase', color: '#1a2f4a',
      fontWeight: 700 },
    cH: { fontFamily: '"Playfair Display", serif', fontWeight: 700,
      fontSize: 22, lineHeight: 1.05, margin: '6px 0 8px',
      letterSpacing: '-0.005em' },
    cHBig: { fontFamily: '"Playfair Display", serif', fontWeight: 800,
      fontSize: 38, lineHeight: 1, margin: '6px 0 10px',
      letterSpacing: '-0.015em', fontStyle: 'italic' },
    cDeck: { fontSize: 13, lineHeight: 1.45, color: '#181410',
      fontStyle: 'italic', paddingBottom: 10,
      borderBottom: '1px solid #bfc4b8', marginBottom: 10 },
    cBy: { fontFamily: '"Inter Tight", sans-serif', fontSize: 9,
      letterSpacing: '0.2em', textTransform: 'uppercase',
      color: '#3a3028', marginBottom: 8 },
    cText: { fontSize: 12.5, lineHeight: 1.5, columnCount: 1 },
    cText2: { fontSize: 12.5, lineHeight: 1.5, columnCount: 2,
      columnGap: 14, columnRule: '1px solid #cfd2c8' },
    cImg: (g) => ({ width: '100%', height: 130, background: g,
      marginBottom: 8 }),
    side: { fontFamily: '"Inter Tight", sans-serif', fontSize: 11,
      lineHeight: 1.4, paddingBottom: 8, borderBottom: '1px dotted #181410',
      marginBottom: 8 },
    sideH: { fontFamily: '"Playfair Display", serif', fontWeight: 700,
      fontSize: 14, marginBottom: 2 },
    weather: { background: '#181410', color: '#ebede4', padding: 10,
      fontFamily: '"Inter Tight", sans-serif', fontSize: 11,
      marginTop: 6, display: 'flex', justifyContent: 'space-between' },
  };
  return (
    <div style={s.root}>
      <div style={s.masthead}>
        <div style={s.mastSub}>
          <span>Vol. 184 · No. 11,402</span>
          <span>Friday, 8 May 2026</span>
          <span>$4.50 · €4</span>
        </div>
        <h1 style={s.mastT}>The Standard</h1>
        <div style={{ ...s.mastSub, paddingTop: 0 }}>
          <span>Established 1842</span>
          <span>All the news that has the patience to keep</span>
          <span>standard.press</span>
        </div>
      </div>
      <div style={s.tabs}>
        <span style={s.tabA}>Front page</span>
        <span>World</span><span>Capitals</span><span>Business</span>
        <span>Culture</span><span>Sport</span><span>Letters</span>
        <span>Crossword</span>
      </div>
      <div style={s.body}>
        <div style={s.col}>
          <div style={s.cKick}>Capitals</div>
          <div style={s.cH}>Council votes 9–4 to keep<br/>the Bica funicular running</div>
          <div style={s.cBy}>By A. Iqbal · Lisbon</div>
          <div style={s.cText}>The 134-year-old line will be subsidised for
            a further decade after a tied technical report split the
            engineers from the accountants. Riders cheered from the platform
            as the result was announced shortly after nine.</div>
          <div style={{ ...s.cKick, marginTop: 14 }}>Business</div>
          <div style={s.cH}>Halid raises €60m to expand<br/>treasury tools to SMBs</div>
          <div style={s.cBy}>By M. Hassan · Berlin</div>
          <div style={s.cText}>The Berlin fintech said the round, led by an
            unnamed sovereign fund, would let it hire across product and
            credit, and finally ship the long-promised invoicing module.</div>
          <div style={{ ...s.cKick, marginTop: 14 }}>Culture · brief</div>
          <div style={s.side}>
            <div style={s.sideH}>Werner closes for two years</div>
            The Paris museum begins its long-planned restoration in
            November. Director Lehmann interviewed inside — p.18.
          </div>
          <div style={s.side}>
            <div style={s.sideH}>Atelier Form SS26</div>
            The house shows at the Tuileries on Tuesday. Coverage in
            our weekend edition.
          </div>
        </div>
        <div style={s.col}>
          <div style={s.cKick}>Lead story · Cities</div>
          <h2 style={s.cHBig}>The afternoon, slow but stubborn, returns to the centre of town.</h2>
          <div style={s.cDeck}>Four years after the chains arrived and the rents
            tripled, the small shops of Bica are reopening, one careful
            doorway at a time. A dispatch.</div>
          <div style={s.cBy}>By Anya Iqbal · Photographs by Maria Eklöf · Lisbon</div>
          <div style={s.cImg('linear-gradient(160deg, #c8d4dc 0%, #5a7088 55%, #18243a 100%)')}></div>
          <div style={s.cText2}>The fishmonger on Rua da Bica reopened in March,
            after eleven months dark. He sells the same fish he sold in 2019,
            at prices his old customers have written down on the back of
            envelopes so they remember when they have been overcharged elsewhere.
            "I missed them," he said, gesturing at no one in particular.
            "I am not above missing people." A short walk uphill, the orange
            woman has not returned, but the café where her stall stood now
            keeps a basket of oranges by the door, free for children, and a
            sign asks customers to leave their phones in a wooden box if they
            want a 10% discount on the cake.</div>
        </div>
        <div style={{ ...s.col, ...s.colLast }}>
          <div style={s.cKick}>Op-ed</div>
          <div style={s.cH}>Against the productivity stack</div>
          <div style={s.cBy}>Aanya Rao · 1,400 words</div>
          <div style={s.cText}>The most radical thing you can do, in 2026,
            is to stop measuring yourself in fifteen-minute increments.
            A reply to last Sunday's leader.</div>
          <div style={{ ...s.cKick, marginTop: 14 }}>Listings</div>
          <div style={s.side}>
            <div style={s.sideH}>Maison Calva · this week</div>
            New tasting menu, six courses. Reservations Wed–Sat. Bar walk-ins.
          </div>
          <div style={s.side}>
            <div style={s.sideH}>Press &amp; Pulp · open studio</div>
            Saturday 11–4, Greenpoint. Riso demos on the hour.
          </div>
          <div style={s.side}>
            <div style={s.sideH}>Pace//Form · Sunday long</div>
            Meet 7:30 at the Pulaski entrance. 16km easy, coffee after.
          </div>
          <div style={s.weather}>
            <span>Lisbon · 19° drizzle</span>
            <span>London · 11° cloudy</span>
            <span>Berlin · 8° clear</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 6. NEWSLETTER INDEX — Substack-ish, dark, card grid
// ─────────────────────────────────────────────────────────────────────────────
function NewsletterIndex() {
  const s = {
    root: { width: AW, height: AH, background: '#0f0f12', color: '#ecece4',
      fontFamily: '"Inter Tight", system-ui, sans-serif',
      display: 'flex', flexDirection: 'column', overflow: 'hidden' },
    top: { display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', padding: '16px 36px',
      borderBottom: '1px solid rgba(255,255,255,0.08)' },
    brand: { display: 'flex', alignItems: 'center', gap: 10 },
    logo: { width: 28, height: 28, borderRadius: 6,
      background: 'linear-gradient(135deg, #7a5af8, #d8456e)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: '"Fraunces", serif', fontWeight: 600,
      color: '#0f0f12', fontSize: 16 },
    brandT: { fontFamily: '"Fraunces", serif', fontStyle: 'italic',
      fontSize: 20, fontWeight: 500 },
    nav: { display: 'flex', gap: 24, fontSize: 13, color: 'rgba(236,236,228,0.7)' },
    cta: { padding: '8px 16px', background: '#ecece4', color: '#0f0f12',
      borderRadius: 999, fontSize: 12, fontWeight: 600 },
    hero: { padding: '38px 36px 18px', display: 'grid',
      gridTemplateColumns: '1.4fr 1fr', gap: 36, alignItems: 'end',
      borderBottom: '1px solid rgba(255,255,255,0.08)' },
    eyebrow: { fontFamily: '"JetBrains Mono", monospace', fontSize: 11,
      letterSpacing: '0.16em', textTransform: 'uppercase', color: '#d8456e' },
    title: { fontFamily: '"Fraunces", serif', fontSize: 52, fontWeight: 500,
      lineHeight: 1, letterSpacing: '-0.02em', margin: '6px 0 8px' },
    titleI: { fontStyle: 'italic', color: '#d8456e' },
    desc: { fontSize: 14, color: 'rgba(236,236,228,0.78)', maxWidth: 480,
      lineHeight: 1.5 },
    sub: { display: 'flex', gap: 8, marginTop: 14 },
    input: { flex: 1, padding: '11px 14px', background: 'transparent',
      border: '1px solid rgba(255,255,255,0.18)', borderRadius: 8,
      color: 'rgba(236,236,228,0.55)', fontSize: 13 },
    btn: { padding: '11px 18px', background: '#d8456e', color: '#0f0f12',
      borderRadius: 8, fontSize: 13, fontWeight: 700 },
    statsRow: { display: 'flex', gap: 28, alignItems: 'baseline',
      justifyContent: 'flex-end' },
    statN: { fontFamily: '"Fraunces", serif', fontSize: 38,
      fontWeight: 500, fontStyle: 'italic' },
    statL: { fontSize: 11, color: 'rgba(236,236,228,0.6)',
      letterSpacing: '0.1em', textTransform: 'uppercase' },
    feed: { flex: 1, padding: '20px 36px', display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr', gap: 18, minHeight: 0,
      overflow: 'hidden' },
    card: { display: 'flex', flexDirection: 'column', gap: 10,
      padding: 18, borderRadius: 14, background: '#191921',
      border: '1px solid rgba(255,255,255,0.06)' },
    cardImg: (g) => ({ width: '100%', aspectRatio: '1.5', borderRadius: 8,
      background: g }),
    cardK: { fontFamily: '"JetBrains Mono", monospace', fontSize: 10,
      letterSpacing: '0.14em', textTransform: 'uppercase' },
    cardH: { fontFamily: '"Fraunces", serif', fontSize: 19, fontWeight: 500,
      lineHeight: 1.18, letterSpacing: '-0.01em' },
    cardD: { fontSize: 12.5, color: 'rgba(236,236,228,0.7)',
      lineHeight: 1.5 },
    cardM: { marginTop: 'auto', display: 'flex',
      justifyContent: 'space-between', fontSize: 11,
      color: 'rgba(236,236,228,0.55)' },
  };
  const posts = [
    ['#d8456e', 'Field notes', 'linear-gradient(140deg, #7a5af8, #d8456e)',
      'The week the optimisation industry quietly imploded.',
      'A short field report on what is replacing the productivity stack — patience, mostly. Plus: a reading list.',
      '12 min', '4,201 reads'],
    ['#6aa8ff', 'Essay', 'linear-gradient(140deg, #6aa8ff, #2a3aaa)',
      'On returning to the same café for nine years.',
      'You can learn more about a city from one waiter than from all of its monuments. A piece about being a regular.',
      '8 min', '12.8k reads'],
    ['#7ad8a0', 'Interview', 'linear-gradient(140deg, #7ad8a0, #2a6a4a)',
      'Aanya Rao on the death of the side hustle.',
      'The cookbook author on her second book, firing her coach, and why she does the dishes by hand on purpose.',
      '22 min', '8,140 reads'],
  ];
  return (
    <div style={s.root}>
      <div style={s.top}>
        <div style={s.brand}>
          <div style={s.logo}>q</div>
          <div style={s.brandT}>quires</div>
          <span style={{ marginLeft: 18, fontSize: 11,
            color: 'rgba(236,236,228,0.5)' }}>BY ANYA IQBAL</span>
        </div>
        <div style={s.nav}>
          <span>Latest</span><span>Archive</span><span>Reading list</span>
          <span>About</span>
        </div>
        <div style={s.cta}>Subscribe</div>
      </div>
      <div style={s.hero}>
        <div>
          <div style={s.eyebrow}>· · · weekly · since 2021 · issue 142</div>
          <h1 style={s.title}>A newsletter about <span style={s.titleI}>slow things</span>, posted on Sundays.</h1>
          <div style={s.desc}>Cities, kitchens, the people in them. Three pieces a month,
            one short photo essay, and a reading list you'll actually read.</div>
          <div style={s.sub}>
            <div style={s.input}>your@email.com</div>
            <div style={s.btn}>Subscribe — free</div>
          </div>
        </div>
        <div style={s.statsRow}>
          <div>
            <div style={s.statN}>18.4k</div>
            <div style={s.statL}>subscribers</div>
          </div>
          <div>
            <div style={s.statN}>142</div>
            <div style={s.statL}>issues</div>
          </div>
          <div>
            <div style={s.statN}>4.9</div>
            <div style={s.statL}>★ rating</div>
          </div>
        </div>
      </div>
      <div style={s.feed}>
        {posts.map((p, i) => (
          <div key={i} style={s.card}>
            <div style={s.cardImg(p[2])}></div>
            <div style={{ ...s.cardK, color: p[0] }}>{p[1]}</div>
            <div style={s.cardH}>{p[3]}</div>
            <div style={s.cardD}>{p[4]}</div>
            <div style={s.cardM}><span>{p[5]} read</span><span>{p[6]}</span></div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 7. RISO ZINE — Press & Pulp, hot pink + electric blue, zine cover
// ─────────────────────────────────────────────────────────────────────────────
function RisoZine() {
  const s = {
    root: { width: AW, height: AH, background: '#e6ecf2', color: '#1a1f3a',
      fontFamily: '"Inter Tight", system-ui, sans-serif', overflow: 'hidden',
      position: 'relative', display: 'grid',
      gridTemplateColumns: '1.4fr 1fr' },
    pinkBlob: { position: 'absolute', width: 520, height: 520,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(232,77,140,0.75) 0%, rgba(232,77,140,0.4) 50%, transparent 75%)',
      left: -120, top: -160, mixBlendMode: 'multiply', filter: 'blur(0.3px)' },
    blueBlob: { position: 'absolute', width: 480, height: 480,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(30,80,200,0.75) 0%, rgba(30,80,200,0.45) 50%, transparent 75%)',
      right: -100, bottom: -180, mixBlendMode: 'multiply', filter: 'blur(0.3px)' },
    left: { padding: '40px 44px', display: 'flex', flexDirection: 'column',
      gap: 14, position: 'relative', zIndex: 2 },
    top: { display: 'flex', justifyContent: 'space-between',
      fontFamily: '"JetBrains Mono", monospace', fontSize: 11,
      letterSpacing: '0.16em', textTransform: 'uppercase', color: '#1a1f3a' },
    issue: { fontFamily: '"Archivo Black", sans-serif', fontSize: 11,
      letterSpacing: '0.24em', color: '#e84d8c' },
    title: { fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 800,
      fontSize: 132, lineHeight: 0.86, letterSpacing: '-0.04em',
      margin: '6px 0 0', color: '#1a1f3a' },
    titleP: { color: '#e84d8c' },
    titleB: { color: '#1e50c8' },
    sub: { fontSize: 16, lineHeight: 1.45, color: '#1a1f3a',
      maxWidth: 460, fontWeight: 500 },
    contents: { marginTop: 'auto', display: 'grid',
      gridTemplateColumns: '32px 1fr 64px', rowGap: 6,
      fontFamily: '"JetBrains Mono", monospace', fontSize: 12,
      letterSpacing: '0.04em', borderTop: '2px solid #1a1f3a',
      paddingTop: 14 },
    cN: { color: '#e84d8c', fontWeight: 700 },
    cT: { color: '#1a1f3a' },
    cP: { color: '#1e50c8', textAlign: 'right' },
    right: { padding: '40px 36px', position: 'relative', zIndex: 2,
      display: 'flex', flexDirection: 'column', gap: 14 },
    feature: { padding: '14px 16px', background: '#fff',
      border: '2px solid #1a1f3a',
      transform: 'rotate(1.2deg)',
      boxShadow: '6px 6px 0 #1e50c8' },
    feaK: { fontFamily: '"JetBrains Mono", monospace', fontSize: 10,
      letterSpacing: '0.2em', textTransform: 'uppercase', color: '#e84d8c',
      fontWeight: 700 },
    feaT: { fontFamily: '"Bricolage Grotesque", sans-serif',
      fontWeight: 700, fontSize: 24, lineHeight: 1.06, margin: '4px 0',
      letterSpacing: '-0.015em' },
    feaD: { fontSize: 12, lineHeight: 1.45, color: '#3a3f5a' },
    flyer: { padding: '18px 20px', background: '#1e50c8', color: '#e6ecf2',
      transform: 'rotate(-2deg)', marginTop: 16,
      border: '2px solid #1a1f3a', boxShadow: '6px 6px 0 #e84d8c' },
    flyT: { fontFamily: '"Archivo Black", sans-serif', fontSize: 32,
      lineHeight: 0.95, letterSpacing: '-0.02em' },
    flyD: { fontFamily: '"JetBrains Mono", monospace', fontSize: 11,
      letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 6 },
    star: { position: 'absolute', right: 24, top: 24,
      fontFamily: '"Archivo Black", sans-serif', fontSize: 22,
      color: '#e84d8c', transform: 'rotate(8deg)' },
  };
  return (
    <div style={s.root}>
      <div style={s.pinkBlob}></div>
      <div style={s.blueBlob}></div>
      <div style={s.left}>
        <div style={s.top}>
          <span>Press &amp; Pulp · Brooklyn</span>
          <span>No. 09 / Spring 2026</span>
        </div>
        <div style={s.issue}>★ ZINE NO. NINE ★ FREE TO TAKE ★</div>
        <h1 style={s.title}>
          <span style={s.titleP}>HOT</span><br/>
          <span style={s.titleB}>INK</span><br/>
          <span>SLOW</span><br/>
          <span style={s.titleP}>WEEK</span>
        </h1>
        <div style={s.sub}>A riso zine on the studios, presses and
          printers keeping ink on paper in a city that keeps trying
          to put it on screens.</div>
        <div style={s.contents}>
          <span style={s.cN}>01</span><span style={s.cT}>Editor's note · why we still smell of solvent</span><span style={s.cP}>p.02</span>
          <span style={s.cN}>02</span><span style={s.cT}>Inside the press at Pulpit, Bushwick</span><span style={s.cP}>p.06</span>
          <span style={s.cN}>03</span><span style={s.cT}>A conversation with Toma</span><span style={s.cP}>p.14</span>
          <span style={s.cN}>04</span><span style={s.cT}>Pantone bootleg · pulled by hand</span><span style={s.cP}>p.22</span>
          <span style={s.cN}>05</span><span style={s.cT}>Show listings &amp; classifieds</span><span style={s.cP}>p.30</span>
        </div>
      </div>
      <div style={s.right}>
        <div style={s.star}>★ NEW ★</div>
        <div style={s.feature}>
          <div style={s.feaK}>Feature · 06</div>
          <div style={s.feaT}>The 4-color machine that runs on grit and surplus paper.</div>
          <div style={s.feaD}>Inside Pulpit, the Bushwick studio printing
            posters for run clubs, wine bars, and the occasional
            small revolution.</div>
        </div>
        <div style={s.feature} >
          <div style={s.feaK}>Talk · 14</div>
          <div style={s.feaT}>"I have ruined more paper than most printers will see."</div>
          <div style={s.feaD}>Toma, 32, on apprenticing under a man who
            refused to teach her until she could fix the registration
            with one hand.</div>
        </div>
        <div style={s.flyer}>
          <div style={s.flyT}>OPEN<br/>STUDIO<br/>SAT 11–4</div>
          <div style={s.flyD}>Press &amp; Pulp · 184 Meserole · Greenpoint<br/>Riso demos · cake · cheap prints</div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Canvas — Section 1 (reading) + Section 2 (indexes); Section 3 from articles-2.jsx
// ─────────────────────────────────────────────────────────────────────────────
function ArticlesApp() {
  return (
    <DesignCanvas>
      <DCSection id="art-reading" title="Long-form reading"
        subtitle="Four takes on the article itself — the slow-media essay, the magazine feature, the photo essay, and the Q&A.">
        <DCArtboard id="a-essay"      label="01 · Essay reader · The Quiet Times"  width={AW} height={AH}><EssayReader /></DCArtboard>
        <DCArtboard id="a-magfeature" label="02 · Magazine feature · Werner Q."     width={AW} height={AH}><MagazineFeature /></DCArtboard>
        <DCArtboard id="a-photo"      label="03 · Photo essay · Lisbon 6pm"         width={AW} height={AH}><PhotoEssay /></DCArtboard>
        <DCArtboard id="a-interview"  label="04 · Interview · Q&A layout"           width={AW} height={AH}><InterviewArticle /></DCArtboard>
      </DCSection>
      <DCSection id="art-indexes" title="Editorial homepages &amp; indexes"
        subtitle="Three ways to land — broadsheet front page, dark newsletter index, and a riso-printed zine cover.">
        <DCArtboard id="a-broadsheet" label="05 · News broadsheet · The Standard"   width={AW} height={AH}><NewsBroadsheet /></DCArtboard>
        <DCArtboard id="a-newsletter" label="06 · Newsletter index · quires"        width={AW} height={AH}><NewsletterIndex /></DCArtboard>
        <DCArtboard id="a-riso"       label="07 · Riso zine · Press &amp; Pulp"     width={AW} height={AH}><RisoZine /></DCArtboard>
      </DCSection>
      {window.ArticleFormatsSection ? <window.ArticleFormatsSection /> : null}
    </DesignCanvas>
  );
}

const articlesRoot = ReactDOM.createRoot(document.getElementById('root'));
articlesRoot.render(<ArticlesApp />);
