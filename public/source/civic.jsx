// Civic tech & data transparency landings — eight directions.
// Riffs on the gov.uk family of values (high contrast, plain language,
// data-forward) but in eight distinct visual systems. All 1280×800.

const W = 1280;
const H = 800;

// ─────────────────────────────────────────────────────────────────────────────
// 1. PLAIN SERVICE — modern, no-nonsense, high contrast.
//    Black bar, mono crest, big sans display, vertical link list grouped by topic.
//    The accessible "everything you need is on this page" archetype.
// ─────────────────────────────────────────────────────────────────────────────
function CivicPlainService() {
  const ink = '#0a0a0a';
  const accent = '#0b6b2d';   // deep service green
  const muted = '#5a5a58';
  const rule = '#0a0a0a';
  const s = {
    root: { width: W, height: H, background: '#ffffff', color: ink,
      fontFamily: '"Bricolage Grotesque", "Inter Tight", system-ui, sans-serif',
      display: 'flex', flexDirection: 'column' },
    topbar: { background: '#0a0a0a', color: '#fff', padding: '14px 56px',
      display: 'flex', alignItems: 'center', gap: 16,
      fontFamily: '"IBM Plex Mono", monospace', fontSize: 12,
      letterSpacing: '0.08em', textTransform: 'uppercase' },
    crest: { width: 22, height: 22, border: '1.5px solid #fff',
      display: 'grid', placeItems: 'center', fontSize: 11, fontWeight: 700 },
    nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
      padding: '20px 56px 14px', borderBottom: '1px solid ' + rule },
    brand: { display: 'flex', alignItems: 'baseline', gap: 10,
      fontSize: 22, fontWeight: 700, letterSpacing: '-0.015em' },
    navLinks: { display: 'flex', gap: 28, fontSize: 14, fontWeight: 500 },
    phase: { display: 'inline-flex', alignItems: 'center', gap: 10,
      padding: '10px 56px', background: '#f4f3ee',
      borderBottom: '1px solid #e3e1d8', fontSize: 13 },
    phaseTag: { background: accent, color: '#fff', padding: '2px 8px',
      fontFamily: '"IBM Plex Mono", monospace', fontWeight: 700,
      fontSize: 11, letterSpacing: '0.06em' },
    main: { flex: 1, display: 'grid', gridTemplateColumns: '1.1fr 1fr',
      borderBottom: '1px solid ' + rule },
    left: { padding: '52px 56px', borderRight: '1px solid ' + rule,
      display: 'flex', flexDirection: 'column', gap: 28 },
    eyebrow: { fontFamily: '"IBM Plex Mono", monospace', fontSize: 11,
      letterSpacing: '0.16em', textTransform: 'uppercase', color: muted },
    h1: { fontSize: 64, lineHeight: 1.0, fontWeight: 700,
      letterSpacing: '-0.025em', margin: 0, maxWidth: 540 },
    lede: { fontSize: 19, lineHeight: 1.5, color: '#2a2a28', maxWidth: 480, margin: 0 },
    search: { display: 'flex', border: '2px solid ' + ink, height: 56, maxWidth: 480 },
    searchInput: { flex: 1, padding: '0 16px', fontSize: 16,
      color: muted, display: 'flex', alignItems: 'center' },
    searchBtn: { background: ink, color: '#fff', padding: '0 24px',
      fontWeight: 700, fontSize: 15, display: 'flex', alignItems: 'center' },
    right: { padding: '52px 56px', display: 'grid',
      gridTemplateColumns: '1fr 1fr', gap: '28px 36px' },
    group: { display: 'flex', flexDirection: 'column', gap: 8 },
    groupTitle: { fontSize: 15, fontWeight: 700, marginBottom: 4 },
    link: { fontSize: 14.5, color: accent, textDecoration: 'underline',
      textUnderlineOffset: 3, lineHeight: 1.5 },
    foot: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '16px 56px', fontFamily: '"IBM Plex Mono", monospace',
      fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
      color: muted },
  };
  const groups = [
    ['Benefits & support', ['Apply for housing assistance', 'Energy rebate program', 'Family support payments', 'Disability services']],
    ['Records & ID', ['Birth & death records', 'Marriage certificates', 'Driver licensing', 'Voter registration']],
    ['Property & taxes', ['Pay property tax', 'Assess your property', 'Building permits', 'Tax appeals']],
    ['Health & community', ['Find a clinic', 'Vaccination records', 'Report a public health concern', 'Community programs']],
  ];
  return (
    <div style={s.root}>
      <div style={s.topbar}>
        <div style={s.crest}>M</div>
        <div>City of Meridian — Official services</div>
        <div style={{ marginLeft: 'auto' }}>EN · ES · ZH · AR</div>
      </div>
      <div style={s.nav}>
        <div style={s.brand}>meridian.gov</div>
        <div style={s.navLinks}>
          <span>Services</span><span>Records</span><span>Budget</span>
          <span>Council</span><span>Contact</span>
        </div>
      </div>
      <div style={s.phase}>
        <span style={s.phaseTag}>BETA</span>
        <span>This is a new service — <span style={{ color: accent, textDecoration: 'underline' }}>your feedback</span> will help us improve it.</span>
      </div>
      <div style={s.main}>
        <div style={s.left}>
          <div style={s.eyebrow}>Official information &middot; Updated daily</div>
          <h1 style={s.h1}>Public services and information for everyone in Meridian.</h1>
          <p style={s.lede}>
            Apply for benefits, find records, pay taxes, and access transparent
            data about how your city operates — all in one place.
          </p>
          <div style={s.search}>
            <div style={s.searchInput}>Search 240+ services and datasets…</div>
            <div style={s.searchBtn}>Search →</div>
          </div>
          <div style={{ display: 'flex', gap: 24, fontSize: 13, color: muted,
            fontFamily: '"IBM Plex Mono", monospace', letterSpacing: '0.06em',
            textTransform: 'uppercase', marginTop: 8 }}>
            <span>Popular: <span style={{ color: accent }}>Pay parking ticket</span></span>
            <span><span style={{ color: accent }}>Renew license</span></span>
            <span><span style={{ color: accent }}>Budget FY26</span></span>
          </div>
        </div>
        <div style={s.right}>
          {groups.map(([title, items]) => (
            <div key={title} style={s.group}>
              <div style={s.groupTitle}>{title}</div>
              {items.map(i => <div key={i} style={s.link}>{i}</div>)}
            </div>
          ))}
        </div>
      </div>
      <div style={s.foot}>
        <span>© City of Meridian · Open by default</span>
        <span>v2026.05 · WCAG AA</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. DATA ATLAS — open data portal led by a giant number + mono labels.
//    Datasets are first-class citizens. Mini sparkline placeholders.
// ─────────────────────────────────────────────────────────────────────────────
function CivicDataAtlas() {
  const ink = '#0c0c0c';
  const paper = '#ffffff';
  const muted = '#6a6a68';
  const sig = '#c1264a';     // signal red
  const data = '#1f4ed8';    // data blue
  const s = {
    root: { width: W, height: H, background: paper, color: ink,
      fontFamily: '"Inter Tight", system-ui, sans-serif',
      display: 'flex', flexDirection: 'column' },
    nav: { display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '20px 48px', borderBottom: '1px solid ' + ink,
      fontFamily: '"JetBrains Mono", monospace', fontSize: 12,
      letterSpacing: '0.1em', textTransform: 'uppercase' },
    brand: { display: 'flex', alignItems: 'center', gap: 10, fontWeight: 700 },
    bmark: { width: 14, height: 14, background: ink, transform: 'rotate(45deg)' },
    main: { flex: 1, display: 'grid', gridTemplateColumns: '1.4fr 1fr',
      borderBottom: '1px solid ' + ink },
    left: { padding: '52px 48px', borderRight: '1px solid ' + ink,
      display: 'flex', flexDirection: 'column', gap: 30 },
    tags: { display: 'flex', gap: 8, fontFamily: '"JetBrains Mono", monospace',
      fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase' },
    tag: { padding: '5px 10px', border: '1px solid ' + ink },
    bigNum: { fontSize: 220, lineHeight: 0.86, fontWeight: 800,
      letterSpacing: '-0.05em', margin: 0,
      fontFeatureSettings: '"tnum"' },
    bigSub: { display: 'flex', alignItems: 'baseline', gap: 16,
      fontFamily: '"JetBrains Mono", monospace', fontSize: 12,
      letterSpacing: '0.06em', textTransform: 'uppercase', color: muted },
    spark: { height: 64, border: '1px solid ' + ink, position: 'relative',
      overflow: 'hidden', background:
        'linear-gradient(to top, rgba(31,78,216,0.08), rgba(31,78,216,0))' },
    sparkLine: { position: 'absolute', inset: 0, padding: 8 },
    right: { padding: '36px 40px', display: 'flex', flexDirection: 'column', gap: 18 },
    rightH: { fontFamily: '"JetBrains Mono", monospace', fontSize: 11,
      letterSpacing: '0.16em', textTransform: 'uppercase', color: muted,
      paddingBottom: 12, borderBottom: '1px solid ' + ink },
    ds: { display: 'grid', gridTemplateColumns: '1fr auto',
      gap: '4px 16px', padding: '14px 0', borderBottom: '1px dashed #cfcfca',
      alignItems: 'baseline' },
    dsTitle: { fontSize: 17, fontWeight: 600, letterSpacing: '-0.01em' },
    dsMeta: { fontFamily: '"JetBrains Mono", monospace', fontSize: 11,
      letterSpacing: '0.08em', color: muted, textTransform: 'uppercase' },
    dsCount: { fontFamily: '"JetBrains Mono", monospace', fontSize: 13,
      fontWeight: 600 },
    foot: { display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '14px 48px', fontFamily: '"JetBrains Mono", monospace',
      fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase',
      color: muted },
    pill: { background: ink, color: paper, padding: '4px 8px' },
  };
  // sparkline as svg polyline
  const Spark = ({ data: vals, color = sig }) => {
    const w = 100, h = 100;
    const max = Math.max(...vals), min = Math.min(...vals);
    const pts = vals.map((v, i) =>
      `${(i / (vals.length - 1)) * w},${h - ((v - min) / (max - min || 1)) * h}`
    ).join(' ');
    return (
      <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none"
        style={{ width: '100%', height: '100%', display: 'block' }}>
        <polyline points={pts} fill="none" stroke={color} strokeWidth={1.6}
          vectorEffect="non-scaling-stroke" />
      </svg>
    );
  };
  return (
    <div style={s.root}>
      <div style={s.nav}>
        <div style={s.brand}><div style={s.bmark}></div> Civic Atlas · Meridian</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <span>Datasets</span><span>Maps</span><span>Charts</span>
          <span>API</span><span>About</span>
        </div>
        <div>v4.2 &middot; 1,284 datasets</div>
      </div>
      <div style={s.main}>
        <div style={s.left}>
          <div style={s.tags}>
            <div style={s.tag}>FY2026 Operating Budget</div>
            <div style={s.tag}>Updated 2 hours ago</div>
            <div style={{ ...s.tag, background: ink, color: paper }}>Open Data</div>
          </div>
          <div>
            <div style={s.bigNum}>$2.41<span style={{ color: data }}>B</span></div>
            <div style={s.bigSub}>
              <span>FY26 — All Funds</span>
              <span style={{ color: sig }}>▲ 3.8% vs FY25</span>
              <span>Per resident: $2,940</span>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
            {[
              ['Capital projects', '412M', [3,4,5,4,6,7,8,9], data],
              ['Public safety', '623M', [6,7,7,8,8,8,9,9], sig],
              ['Health & human', '388M', [5,5,6,6,7,7,7,8], data],
              ['Transit', '247M', [4,5,6,5,5,6,7,8], sig],
            ].map(([t, v, d, c]) => (
              <div key={t}>
                <div style={s.spark}><div style={s.sparkLine}><Spark data={d} color={c}/></div></div>
                <div style={{ fontSize: 11, letterSpacing: '0.08em',
                  textTransform: 'uppercase', fontFamily: '"JetBrains Mono", monospace',
                  color: muted, marginTop: 8 }}>{t}</div>
                <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em' }}>${v}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={s.right}>
          <div style={s.rightH}>Most-accessed datasets · This week</div>
          {[
            ['311 service requests', '14,208 rows · CSV/JSON', '+12%'],
            ['Building permits issued', '2,991 rows · CSV', '+04%'],
            ['Police use-of-force log', '186 rows · CSV/PDF', '+58%'],
            ['Public school enrollment', '422 rows · XLSX', '−02%'],
            ['Procurement contracts', '8,402 rows · API', '+09%'],
            ['Air quality (hourly)', '4.2M rows · API', '+21%'],
          ].map(([t, m, d]) => (
            <div key={t} style={s.ds}>
              <div>
                <div style={s.dsTitle}>{t}</div>
                <div style={s.dsMeta}>{m}</div>
              </div>
              <div style={{ ...s.dsCount, color: d.startsWith('−') ? muted : sig }}>{d}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={s.foot}>
        <span style={s.pill}>OPEN BY DEFAULT</span>
        <span>License: CC0 · Last index 14:08 UTC</span>
        <span>Get the API key →</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. THE PUBLIC RECORD — broadsheet editorial treatment for an annual
//    transparency report. Serif display, classical column grid, big dropcap.
// ─────────────────────────────────────────────────────────────────────────────
function CivicPublicRecord() {
  // Dark oxblood broadsheet — flipped so cream type sits on a warm wine bg.
  const paper = '#251618';   // bg
  const ink   = '#ede2c8';   // foreground (type + rules)
  const accent = '#d9a64b';  // burnished gold instead of red on this bg
  const muted = '#a39279';
  const s = {
    root: { width: W, height: H, background: paper, color: ink,
      fontFamily: '"Inter Tight", system-ui, sans-serif',
      display: 'flex', flexDirection: 'column', position: 'relative' },
    masthead: { padding: '28px 48px 16px', borderBottom: '3px double ' + ink,
      display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' },
    title: { fontFamily: '"Playfair Display", "Cormorant Garamond", Georgia, serif',
      fontSize: 56, fontWeight: 500, letterSpacing: '-0.02em', margin: 0,
      fontStyle: 'italic' },
    mastSub: { display: 'flex', gap: 20, fontSize: 11,
      letterSpacing: '0.14em', textTransform: 'uppercase', color: muted,
      fontFamily: '"IBM Plex Mono", monospace' },
    deck: { padding: '14px 48px 18px', borderBottom: '1px solid ' + ink,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase',
      fontFamily: '"IBM Plex Mono", monospace', color: muted },
    deckCenter: { color: accent, fontWeight: 600 },
    main: { flex: 1, display: 'grid', gridTemplateColumns: '2fr 1fr 1.1fr',
      borderBottom: '1px solid ' + ink },
    leadCol: { padding: '40px 36px 32px 48px', borderRight: '1px solid ' + ink,
      display: 'flex', flexDirection: 'column' },
    label: { fontFamily: '"IBM Plex Mono", monospace', fontSize: 11,
      letterSpacing: '0.16em', textTransform: 'uppercase', color: accent,
      marginBottom: 14 },
    head: { fontFamily: '"Playfair Display", Georgia, serif',
      fontSize: 64, lineHeight: 0.98, fontWeight: 500,
      letterSpacing: '-0.02em', margin: 0 },
    headIt: { fontStyle: 'italic', fontWeight: 400 },
    byline: { fontFamily: '"IBM Plex Mono", monospace', fontSize: 11,
      letterSpacing: '0.12em', textTransform: 'uppercase', color: muted,
      margin: '22px 0 18px' },
    cols: { columnCount: 2, columnGap: 28, fontSize: 14, lineHeight: 1.6 },
    drop: { float: 'left', fontFamily: '"Playfair Display", Georgia, serif',
      fontSize: 68, lineHeight: 0.85, fontWeight: 600, padding: '6px 8px 0 0',
      color: accent },
    midCol: { padding: '40px 28px', borderRight: '1px solid ' + ink,
      display: 'flex', flexDirection: 'column', gap: 22 },
    midH: { fontFamily: '"Playfair Display", Georgia, serif',
      fontSize: 24, lineHeight: 1.1, margin: 0, fontWeight: 500,
      letterSpacing: '-0.01em' },
    midItem: { borderBottom: '1px dotted ' + ink, paddingBottom: 16 },
    midMeta: { fontFamily: '"IBM Plex Mono", monospace', fontSize: 10,
      letterSpacing: '0.14em', textTransform: 'uppercase', color: muted,
      marginBottom: 6 },
    rightCol: { padding: '40px 36px', display: 'flex', flexDirection: 'column', gap: 18 },
    statBlock: { borderTop: '2px solid ' + ink, paddingTop: 14 },
    stat: { fontFamily: '"Playfair Display", Georgia, serif',
      fontSize: 48, lineHeight: 0.9, fontWeight: 600, letterSpacing: '-0.02em' },
    statLabel: { fontFamily: '"IBM Plex Mono", monospace', fontSize: 10,
      letterSpacing: '0.14em', textTransform: 'uppercase', color: muted,
      marginTop: 4 },
    foot: { padding: '12px 48px', display: 'flex', justifyContent: 'space-between',
      fontSize: 11, fontFamily: '"IBM Plex Mono", monospace',
      letterSpacing: '0.12em', textTransform: 'uppercase', color: muted },
  };
  return (
    <div style={s.root}>
      <div style={s.masthead}>
        <div style={s.mastSub}><span>Vol. XII · No. 04</span><span>Quarterly Transparency Report</span></div>
        <h1 style={s.title}>The Public Record</h1>
        <div style={s.mastSub}><span>Calder County</span><span>Spring 2026 · $0</span></div>
      </div>
      <div style={s.deck}>
        <span>Issued by the Office of the Auditor</span>
        <span style={s.deckCenter}>★ INDEPENDENT · NON-PARTISAN ★</span>
        <span>publicrecord.calder.gov</span>
      </div>
      <div style={s.main}>
        <div style={s.leadCol}>
          <div style={s.label}>The lead report · 18 pages</div>
          <h2 style={s.head}>
            Where the <span style={s.headIt}>county’s</span><br/>
            money went, and<br/>
            <span style={s.headIt}>who held the pen.</span>
          </h2>
          <div style={s.byline}>By the Office of the Auditor · Filed May 22, 2026</div>
          <div style={s.cols}>
            <span style={s.drop}>O</span>ver the last twelve months Calder County
            obligated $1.84 billion across 412 agencies, 87% of which appeared
            in the public ledger within twenty-four hours of disbursement. The
            remaining thirteen percent — chiefly emergency procurement and
            sealed litigation — is documented in Schedule C.
            Capital projects accounted for the year’s largest single category,
            followed by a 9% rise in human-services obligations driven by the
            new housing voucher program. Eleven contracts were flagged by the
            Inspector General and three are now in remediation.
          </div>
        </div>
        <div style={s.midCol}>
          <div>
            <div style={s.midMeta}>Also inside</div>
            <div style={s.midH}>Five contracts that drew a flag — and why.</div>
          </div>
          <div style={s.midItem}>
            <div style={s.midMeta}>Page 04 · Procurement</div>
            <div style={{ fontFamily: '"Playfair Display", serif', fontSize: 19,
              lineHeight: 1.2 }}>The bridge bid that came in eight times higher than its neighbour’s.</div>
          </div>
          <div style={s.midItem}>
            <div style={s.midMeta}>Page 09 · Audits</div>
            <div style={{ fontFamily: '"Playfair Display", serif', fontSize: 19,
              lineHeight: 1.2 }}>What the IT migration cost — and what it didn’t deliver.</div>
          </div>
          <div style={s.midItem}>
            <div style={s.midMeta}>Page 14 · Public health</div>
            <div style={{ fontFamily: '"Playfair Display", serif', fontSize: 19,
              lineHeight: 1.2 }}>Three clinics, one contract, and a question of capacity.</div>
          </div>
        </div>
        <div style={s.rightCol}>
          <div style={s.label}>The year in figures</div>
          <div style={s.statBlock}>
            <div style={s.stat}>$1.84B</div>
            <div style={s.statLabel}>Obligated · FY 2025</div>
          </div>
          <div style={s.statBlock}>
            <div style={s.stat}>87%</div>
            <div style={s.statLabel}>Published within 24h</div>
          </div>
          <div style={s.statBlock}>
            <div style={s.stat}>412</div>
            <div style={s.statLabel}>Agencies reporting</div>
          </div>
          <div style={s.statBlock}>
            <div style={s.stat}>11</div>
            <div style={s.statLabel}>Contracts flagged · IG</div>
          </div>
        </div>
      </div>
      <div style={s.foot}>
        <span>Printed on the public record</span>
        <span>Download the PDF · 4.2 MB</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. BRUTALIST OPEN RECORDS — stark mono archive. Heavy black bars, dense
//    table of records, no decoration. The "the data is the design" approach.
// ─────────────────────────────────────────────────────────────────────────────
function CivicBrutalistRecords() {
  // Inverted brutalist — paper-white type on pure black.
  const ink = '#f3f1ec';
  const paper = '#0a0a0a';
  const s = {
    root: { width: W, height: H, background: paper, color: ink,
      fontFamily: '"JetBrains Mono", "IBM Plex Mono", ui-monospace, monospace',
      display: 'flex', flexDirection: 'column',
      border: '2px solid ' + ink },
    top: { background: ink, color: paper, padding: '10px 24px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase' },
    head: { padding: '28px 24px 20px', borderBottom: '2px solid ' + ink,
      display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: 24, alignItems: 'end' },
    h1: { fontSize: 64, lineHeight: 0.9, fontWeight: 800,
      letterSpacing: '-0.04em', margin: 0, textTransform: 'uppercase',
      fontFamily: '"JetBrains Mono", monospace', gridRow: '1 / span 2',
      gridColumn: '1 / span 2' },
    stat: { borderLeft: '2px solid ' + ink, paddingLeft: 14 },
    statNum: { fontSize: 36, fontWeight: 700, letterSpacing: '-0.03em' },
    statLab: { fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase' },
    filter: { display: 'flex', padding: '14px 24px',
      borderBottom: '2px solid ' + ink, gap: 8, alignItems: 'center',
      fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase' },
    chip: { padding: '5px 10px', border: '1.5px solid ' + ink },
    chipOn: { background: ink, color: paper },
    table: { flex: 1, fontSize: 12, overflow: 'hidden' },
    thead: { display: 'grid',
      gridTemplateColumns: '90px 1fr 200px 140px 110px 90px 80px',
      padding: '10px 24px', borderBottom: '2px solid ' + ink,
      background: '#1a1a1a', fontSize: 10,
      letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700 },
    row: { display: 'grid',
      gridTemplateColumns: '90px 1fr 200px 140px 110px 90px 80px',
      padding: '11px 24px', borderBottom: '1px solid #2a2a2a',
      alignItems: 'center' },
    rowAlt: { background: 'rgba(255,255,255,0.03)' },
    bar: { background: ink, color: paper, padding: '2px 6px', display: 'inline-block' },
    foot: { background: ink, color: paper, padding: '12px 24px',
      display: 'flex', justifyContent: 'space-between',
      fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase' },
  };
  const rows = [
    ['#2026-0814', 'Police body-cam release · 14th & Bauer', 'Records · Police',  'D. Okafor',  '2026-05-21', 'CSV/MP4',  'OPEN'],
    ['#2026-0813', 'Procurement contract · IT migration phase II', 'Finance',     'Council',    '2026-05-21', 'PDF',      'OPEN'],
    ['#2026-0812', 'Inspector general — fleet maintenance audit', 'Audits',       'OIG',        '2026-05-20', 'PDF',      'OPEN'],
    ['#2026-0811', 'Council vote · Resolution 88-2026 zoning', 'Legislative',     'Clerk',      '2026-05-20', 'PDF/XML',  'OPEN'],
    ['#2026-0810', 'Emergency contract · winter storm response', 'Procurement',   'OEM',        '2026-05-19', 'PDF',      'SEALED'],
    ['#2026-0809', 'School district enrollment 2025–26', 'Education',             'BoE',        '2026-05-19', 'XLSX/CSV', 'OPEN'],
    ['#2026-0808', 'Water utility lead-line replacement log', 'Utilities',        'DPW',        '2026-05-18', 'CSV',      'OPEN'],
    ['#2026-0807', 'Use-of-force incident summary · April', 'Records · Police',   'D. Okafor',  '2026-05-18', 'CSV',      'OPEN'],
    ['#2026-0806', 'Property tax delinquency list', 'Finance',                    'Assessor',   '2026-05-17', 'CSV',      'OPEN'],
  ];
  return (
    <div style={s.root}>
      <div style={s.top}>
        <span>OPEN RECORDS · CALDER COUNTY · MMXXVI</span>
        <span>SECTION 7-A · PUBLIC RECORDS ACT</span>
        <span>LAST INDEX 14:08 UTC</span>
      </div>
      <div style={s.head}>
        <h1 style={s.h1}>Every record<br/>filed this week.</h1>
        <div style={s.stat}><div style={s.statNum}>1,284</div><div style={s.statLab}>Total records</div></div>
        <div style={s.stat}><div style={s.statNum}>97.4%</div><div style={s.statLab}>Open by default</div></div>
        <div style={s.stat}><div style={s.statNum}>6 days</div><div style={s.statLab}>Median to publish</div></div>
        <div style={s.stat}><div style={s.statNum}>34</div><div style={s.statLab}>Awaiting redaction</div></div>
      </div>
      <div style={s.filter}>
        <span>FILTER:</span>
        <span style={{ ...s.chip, ...s.chipOn }}>All</span>
        <span style={s.chip}>Police</span>
        <span style={s.chip}>Finance</span>
        <span style={s.chip}>Procurement</span>
        <span style={s.chip}>Audits</span>
        <span style={s.chip}>Council</span>
        <span style={s.chip}>Utilities</span>
        <span style={{ marginLeft: 'auto' }}>SORT:</span>
        <span style={{ ...s.chip, ...s.chipOn }}>Newest</span>
        <span style={s.chip}>Most-read</span>
      </div>
      <div style={s.table}>
        <div style={s.thead}>
          <span>ID</span><span>Record</span><span>Agency</span>
          <span>Filed by</span><span>Date</span><span>Format</span><span>Status</span>
        </div>
        {rows.map((r, i) => (
          <div key={r[0]} style={{ ...s.row, ...(i % 2 ? s.rowAlt : {}) }}>
            <span style={{ fontWeight: 700 }}>{r[0]}</span>
            <span>{r[1]}</span>
            <span style={{ textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: 11 }}>{r[2]}</span>
            <span style={{ fontSize: 11, opacity: 0.85 }}>{r[3]}</span>
            <span>{r[4]}</span>
            <span style={{ fontSize: 11 }}>{r[5]}</span>
            <span style={{ fontSize: 10 }}>
              <span style={{ ...s.bar, background: r[6] === 'OPEN' ? ink : '#a8231e' }}>{r[6]}</span>
            </span>
          </div>
        ))}
      </div>
      <div style={s.foot}>
        <span>FILE A RECORDS REQUEST →</span>
        <span>DOWNLOAD ALL · 184 MB · CSV</span>
        <span>PG 01 / 143</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Canvas
// ─────────────────────────────────────────────────────────────────────────────
function App() {
  return (
    <DesignCanvas>
      <DCSection id="service-landings" title="Civic — Service Landings"
        subtitle="Eight directions for a civic / public-service landing page. Each variant rethinks the gov.uk-style ‘everything you need is on this page’ idea in a different visual system.">
        <DCArtboard id="plain-service" label="01 · Plain Service Modern" width={W} height={H}>
          <CivicPlainService />
        </DCArtboard>
        <DCArtboard id="data-atlas" label="02 · Data Atlas" width={W} height={H}>
          <CivicDataAtlas />
        </DCArtboard>
        <DCArtboard id="public-record" label="03 · The Public Record" width={W} height={H}>
          <CivicPublicRecord />
        </DCArtboard>
        <DCArtboard id="brutalist-records" label="04 · Brutalist Open Records" width={W} height={H}>
          <CivicBrutalistRecords />
        </DCArtboard>
        {/* Heroes 5..8 are defined in civic-2.jsx and returned as a Fragment.
           We call it as a plain function (not <Component/>) so the Fragment
           element itself becomes a direct child of DCSection — dcFlatten
           unwraps React.Fragment but not custom function components. */}
        {window.CivicHeroes2 && window.CivicHeroes2({ W, H })}
      </DCSection>
      {window.CivicDetailsSection ? <window.CivicDetailsSection /> : null}
    </DesignCanvas>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
