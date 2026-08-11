// 12 grid-based data layouts — marketplace, listings, catalog, cart variations.

const GW = 1280;
const GH = 800;

// ─────────────────────────────────────────────────────────────────────────────
// 1. STAYS GRID — Airbnb-style, photo cards, mixed gradients as photo stubs
// ─────────────────────────────────────────────────────────────────────────────
function StaysGrid() {
  const s = {
    root: { width: GW, height: GH, background: '#fff', color: '#222',
      fontFamily: '"Inter Tight", system-ui, sans-serif',
      display: 'flex', flexDirection: 'column' },
    top: { display: 'flex', alignItems: 'center', gap: 16,
      padding: '20px 40px', borderBottom: '1px solid #ebebeb' },
    brand: { fontFamily: '"Bricolage Grotesque", sans-serif',
      fontWeight: 800, fontSize: 22, color: '#ff385c', letterSpacing: '-0.02em' },
    searchBar: { display: 'flex', alignItems: 'center', gap: 0,
      background: '#fff', border: '1px solid #ddd', borderRadius: 999,
      padding: 4, marginInline: 'auto', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' },
    sCell: { padding: '10px 18px', fontSize: 13, fontWeight: 600,
      borderRight: '1px solid #ebebeb' },
    sCellLight: { padding: '10px 18px', fontSize: 13, color: '#717171',
      borderRight: '1px solid #ebebeb' },
    sBtn: { width: 36, height: 36, borderRadius: '50%',
      background: '#ff385c', color: '#fff', display: 'flex',
      alignItems: 'center', justifyContent: 'center', fontSize: 14, marginLeft: 6 },
    profile: { display: 'flex', alignItems: 'center', gap: 8,
      padding: 6, border: '1px solid #ddd', borderRadius: 999,
      fontSize: 12, marginLeft: 'auto' },
    av: { width: 26, height: 26, borderRadius: '50%', background: '#717171' },
    chipRow: { display: 'flex', gap: 28, padding: '14px 40px 14px',
      overflowX: 'auto', borderBottom: '1px solid #ebebeb' },
    chip: (active) => ({ display: 'flex', flexDirection: 'column',
      alignItems: 'center', gap: 6,
      fontSize: 12, color: active ? '#222' : '#717171',
      fontWeight: 500, paddingBottom: 10, whiteSpace: 'nowrap',
      borderBottom: active ? '2px solid #222' : '2px solid transparent',
      cursor: 'pointer' }),
    chipIcon: { fontSize: 20, opacity: 0.8 },
    grid: { padding: '20px 40px', display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, overflowY: 'auto', flex: 1 },
    card: { cursor: 'pointer' },
    cover: (g) => ({ width: '100%', aspectRatio: '1.05', borderRadius: 12,
      background: g, position: 'relative', overflow: 'hidden' }),
    badge: { position: 'absolute', top: 10, left: 10,
      background: '#fff', color: '#222', padding: '4px 8px', borderRadius: 4,
      fontSize: 11, fontWeight: 700 },
    heart: { position: 'absolute', top: 10, right: 10, color: '#fff',
      fontSize: 18, textShadow: '0 1px 2px rgba(0,0,0,0.4)' },
    dots: { position: 'absolute', bottom: 10, left: 0, right: 0,
      display: 'flex', gap: 4, justifyContent: 'center' },
    dot: (active) => ({ width: 6, height: 6, borderRadius: '50%',
      background: active ? '#fff' : 'rgba(255,255,255,0.5)' }),
    meta: { padding: '10px 2px' },
    row1: { display: 'flex', justifyContent: 'space-between',
      alignItems: 'baseline' },
    place: { fontSize: 14, fontWeight: 600, letterSpacing: '-0.01em' },
    rating: { fontSize: 13, color: '#222', display: 'flex', alignItems: 'center', gap: 3 },
    sub: { fontSize: 13, color: '#717171', marginTop: 2 },
    price: { fontSize: 13, marginTop: 6, color: '#222' },
    priceBold: { fontWeight: 700, textDecoration: 'underline' },
  };
  const listings = [
    ['linear-gradient(135deg, #d4a373, #6a3a14)', 'Asilah, Morocco', 4.92, 'Riad with terrace · 2 beds', 'Guest favourite'],
    ['linear-gradient(135deg, #a8d5e8, #2a607a)', 'Lofoten, Norway', 4.96, 'Cabin by the fjord · 4 beds', 'Rare find'],
    ['linear-gradient(135deg, #f4d6a8, #c48a3a)', 'Comporta, Portugal', 4.87, 'Beach house · sleeps 6', null],
    ['linear-gradient(135deg, #6a8a4a, #2a3a18)', 'Nara, Japan', 4.95, 'Tea house · garden access', 'Guest favourite'],
    ['linear-gradient(135deg, #c8a8d8, #5a3a6a)', 'Trentino, Italy', 4.84, 'Mountain studio · views', null],
    ['linear-gradient(135deg, #d6b8a8, #6a3a2a)', 'Tulum, Mexico', 4.90, 'Jungle bungalow · pool', 'Superhost'],
    ['linear-gradient(135deg, #b8d8b8, #2a5a3a)', 'Sintra, Portugal', 4.93, 'Forest retreat · 3 beds', null],
    ['linear-gradient(135deg, #d8c8a8, #6a4a2a)', 'Marfa, Texas', 4.88, 'Adobe cabin · stargazing', 'Superhost'],
  ];
  return (
    <div style={s.root}>
      <div style={s.top}>
        <div style={s.brand}>◯ airbnb</div>
        <div style={s.searchBar}>
          <div style={s.sCell}>Anywhere</div>
          <div style={s.sCell}>Any week</div>
          <div style={s.sCellLight}>Add guests</div>
          <div style={s.sBtn}>⌕</div>
        </div>
        <div style={s.profile}>
          <span>≡</span><div style={s.av}></div>
        </div>
      </div>
      <div style={s.chipRow}>
        {['Cabins','Beach','Tropical','Treehouses','Trending','Riads','Tiny homes','Off-grid','Skiing','Castles','Vineyards','Yurts','Design'].map((c, i) => (
          <div key={c} style={s.chip(i === 4)}>
            <span style={s.chipIcon}>{['🏚','🏖','🌴','🌳','★','🕌','🏠','◐','⛷','🏰','🍷','⛺','◆'][i]}</span>
            {c}
          </div>
        ))}
      </div>
      <div style={s.grid}>
        {listings.map((l, i) => (
          <div key={i} style={s.card}>
            <div style={s.cover(l[0])}>
              {l[4] && <div style={s.badge}>{l[4]}</div>}
              <div style={s.heart}>♡</div>
              <div style={s.dots}>
                {[0,1,2,3,4].map(d => <div key={d} style={s.dot(d === 0)}></div>)}
              </div>
            </div>
            <div style={s.meta}>
              <div style={s.row1}>
                <div style={s.place}>{l[1]}</div>
                <div style={s.rating}>★ {l[2]}</div>
              </div>
              <div style={s.sub}>{l[3]}</div>
              <div style={s.price}><span style={s.priceBold}>${(140 + i * 28)}</span> &nbsp;night</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. REAL ESTATE — Premium dark, big photos, two-column hero + list
// ─────────────────────────────────────────────────────────────────────────────
function RealEstateGrid() {
  const s = {
    root: { width: GW, height: GH, background: '#0e1116', color: '#e8e8ec',
      fontFamily: '"Inter Tight", system-ui, sans-serif',
      display: 'flex', flexDirection: 'column' },
    top: { display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '18px 36px', borderBottom: '1px solid rgba(255,255,255,0.06)' },
    brand: { fontFamily: '"Cormorant Garamond", serif', fontSize: 24,
      fontWeight: 500, letterSpacing: '0.18em', color: '#c8aa6c' },
    nav: { display: 'flex', gap: 32, fontSize: 12, color: '#a0a08f',
      letterSpacing: '0.12em', textTransform: 'uppercase' },
    cta: { color: '#c8aa6c', borderBottom: '1px solid #c8aa6c',
      paddingBottom: 3, fontSize: 11, letterSpacing: '0.14em',
      textTransform: 'uppercase' },
    main: { flex: 1, display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 0,
      minHeight: 0 },
    hero: { padding: 36, borderRight: '1px solid rgba(255,255,255,0.06)',
      display: 'flex', flexDirection: 'column' },
    heroImg: { flex: 1,
      background: 'linear-gradient(180deg, #2a3040 0%, #1a1f2a 50%, #060a14 100%)',
      borderRadius: 4, position: 'relative', overflow: 'hidden' },
    heroLabel: { position: 'absolute', top: 16, left: 16,
      color: '#c8aa6c', fontSize: 10, letterSpacing: '0.3em',
      textTransform: 'uppercase' },
    heroPager: { position: 'absolute', bottom: 16, right: 16,
      background: 'rgba(0,0,0,0.5)', color: '#e8e8ec',
      padding: '4px 10px', borderRadius: 2, fontSize: 11,
      fontFamily: 'ui-monospace, monospace' },
    heroBody: { paddingTop: 20, display: 'grid',
      gridTemplateColumns: '1.4fr 1fr', gap: 20, alignItems: 'end' },
    heroEyebrow: { fontSize: 10, color: '#c8aa6c',
      letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 12 },
    heroH: { fontFamily: '"Cormorant Garamond", serif',
      fontSize: 38, fontWeight: 400, lineHeight: 1.05,
      letterSpacing: '-0.01em', color: '#f3eee2' },
    heroSub: { fontSize: 12, color: '#7a7a82', marginTop: 8,
      letterSpacing: '0.04em' },
    heroPrice: { fontFamily: '"Cormorant Garamond", serif',
      fontSize: 36, color: '#c8aa6c', textAlign: 'right',
      fontWeight: 400, letterSpacing: '-0.01em' },
    heroPriceLbl: { fontSize: 10, letterSpacing: '0.2em',
      textTransform: 'uppercase', color: '#7a7a82', textAlign: 'right' },
    specRow: { display: 'flex', gap: 24, marginTop: 16,
      paddingTop: 14, borderTop: '1px solid rgba(255,255,255,0.06)',
      fontSize: 12, color: '#a8a8b0' },
    spec: { display: 'flex', gap: 6, alignItems: 'center' },
    list: { padding: '24px 28px', display: 'flex', flexDirection: 'column',
      gap: 0, overflow: 'hidden' },
    listH: { display: 'flex', justifyContent: 'space-between',
      alignItems: 'baseline', marginBottom: 16 },
    listT: { fontFamily: '"Cormorant Garamond", serif', fontSize: 24,
      fontWeight: 400, letterSpacing: '-0.01em' },
    listN: { fontSize: 10, letterSpacing: '0.2em',
      textTransform: 'uppercase', color: '#7a7a82' },
    listing: { display: 'grid', gridTemplateColumns: '80px 1fr auto',
      gap: 14, padding: '12px 0',
      borderBottom: '1px solid rgba(255,255,255,0.06)' },
    thumb: (g) => ({ width: 80, height: 70, borderRadius: 2, background: g }),
    listMain: { display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
    listP: { fontFamily: '"Cormorant Garamond", serif', fontSize: 16,
      fontWeight: 400, color: '#f3eee2', letterSpacing: '-0.005em' },
    listMeta: { fontSize: 11, color: '#7a7a82', marginTop: 2 },
    listPrice: { fontFamily: '"Cormorant Garamond", serif', fontSize: 18,
      color: '#c8aa6c', textAlign: 'right' },
    listSpecs: { fontSize: 10, color: '#7a7a82', textAlign: 'right',
      marginTop: 2, letterSpacing: '0.06em' },
  };
  const lst = [
    ['linear-gradient(135deg, #6a5a3a, #2a1a0a)', 'Belgravia Mews', 'Mayfair · refurbished 2024', '£8.4M', '4 bd · 3 ba · 248m²'],
    ['linear-gradient(135deg, #4a5a6a, #0a1a2a)', 'Holland Park Garden Flat', 'Kensington · garden access', '£3.2M', '2 bd · 2 ba · 148m²'],
    ['linear-gradient(135deg, #8a6a5a, #2a1a14)', 'Notting Hill Townhouse', 'W11 · five-storey · 1862', '£12.8M', '5 bd · 4 ba · 380m²'],
    ['linear-gradient(135deg, #5a6a5a, #1a2a1a)', 'Chelsea Riverside', 'SW3 · Thames frontage', '£14.2M', '4 bd · 4 ba · 304m²'],
    ['linear-gradient(135deg, #6a4a5a, #2a0a1a)', 'Marylebone Penthouse', 'W1 · roof terrace', '£9.6M', '3 bd · 3 ba · 220m²'],
  ];
  return (
    <div style={s.root}>
      <div style={s.top}>
        <div style={s.brand}>HENLEY &amp; WAYNE</div>
        <div style={s.nav}><span>Buy</span><span>Let</span><span>Sell</span><span>Journal</span><span>About</span></div>
        <div style={s.cta}>Book a viewing</div>
      </div>
      <div style={s.main}>
        <div style={s.hero}>
          <div style={s.heroImg}>
            <div style={s.heroLabel}>Featured · Listing 042</div>
            <div style={s.heroPager}>01 / 24</div>
          </div>
          <div style={s.heroBody}>
            <div>
              <div style={s.heroEyebrow}>Mayfair · W1J</div>
              <div style={s.heroH}>The Belgravia<br/>Mews House</div>
              <div style={s.heroSub}>Refurbished 2024 · gated cobbled mews · two-car parking</div>
              <div style={s.specRow}>
                <div style={s.spec}>⌂ 4 bd</div>
                <div style={s.spec}>⌬ 3 ba</div>
                <div style={s.spec}>□ 248 m²</div>
                <div style={s.spec}>EPC · B</div>
              </div>
            </div>
            <div>
              <div style={s.heroPriceLbl}>Guide</div>
              <div style={s.heroPrice}>£ 8,400,000</div>
            </div>
          </div>
        </div>
        <div style={s.list}>
          <div style={s.listH}>
            <div style={s.listT}>Selected properties</div>
            <div style={s.listN}>24 active</div>
          </div>
          {lst.map((p, i) => (
            <div key={i} style={s.listing}>
              <div style={s.thumb(p[0])}></div>
              <div style={s.listMain}>
                <div>
                  <div style={s.listP}>{p[1]}</div>
                  <div style={s.listMeta}>{p[2]}</div>
                </div>
              </div>
              <div>
                <div style={s.listPrice}>{p[3]}</div>
                <div style={s.listSpecs}>{p[4]}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. FASHION GRID — Editorial, light, hover-feel
// ─────────────────────────────────────────────────────────────────────────────
function FashionGrid() {
  const s = {
    root: { width: GW, height: GH, background: '#f7f5f0', color: '#1a1a1a',
      fontFamily: '"Inter Tight", system-ui, sans-serif',
      display: 'flex', flexDirection: 'column' },
    top: { display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '20px 36px', borderBottom: '1px solid #1a1a1a' },
    brand: { fontFamily: '"Archivo Black", sans-serif', fontSize: 22,
      letterSpacing: '-0.02em' },
    nav: { display: 'flex', gap: 28, fontSize: 12, fontWeight: 600,
      letterSpacing: '0.08em', textTransform: 'uppercase' },
    iconRow: { display: 'flex', gap: 14, fontSize: 14, fontWeight: 600 },
    sub: { display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '20px 36px 14px' },
    crumb: { fontSize: 11, color: '#7a7a72', letterSpacing: '0.1em',
      textTransform: 'uppercase' },
    h1: { fontFamily: '"Playfair Display", serif', fontSize: 32,
      fontWeight: 500, letterSpacing: '-0.015em', margin: 0, marginTop: 4 },
    filters: { display: 'flex', gap: 6 },
    pill: { background: '#fff', border: '1px solid #1a1a1a',
      padding: '6px 14px', borderRadius: 999, fontSize: 12, fontWeight: 600,
      display: 'flex', alignItems: 'center', gap: 6 },
    side: { display: 'grid', gridTemplateColumns: '180px 1fr',
      flex: 1, minHeight: 0 },
    filtersCol: { padding: '0 24px 0 36px',
      borderRight: '1px solid rgba(0,0,0,0.06)' },
    filterH: { fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
      textTransform: 'uppercase', marginTop: 16, marginBottom: 8,
      paddingBottom: 6, borderBottom: '1px solid rgba(0,0,0,0.06)' },
    filt: { display: 'flex', justifyContent: 'space-between',
      padding: '4px 0', fontSize: 12, color: '#3a3a3a' },
    filtActive: { fontWeight: 700, color: '#1a1a1a' },
    grid: { padding: '0 36px 32px 24px', display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)', gap: 18, overflowY: 'auto' },
    card: { position: 'relative' },
    img: (g) => ({ width: '100%', aspectRatio: '0.78', background: g,
      position: 'relative', overflow: 'hidden' }),
    imgTag: { position: 'absolute', top: 10, left: 10,
      background: '#1a1a1a', color: '#fff', padding: '3px 8px',
      fontSize: 10, fontWeight: 700, letterSpacing: '0.08em',
      textTransform: 'uppercase' },
    heart: { position: 'absolute', top: 10, right: 10, color: '#1a1a1a',
      fontSize: 16, background: '#fff', width: 28, height: 28, borderRadius: '50%',
      display: 'flex', alignItems: 'center', justifyContent: 'center' },
    qShop: { position: 'absolute', left: 8, right: 8, bottom: 8,
      background: '#fff', padding: '8px 0', textAlign: 'center',
      fontSize: 11, fontWeight: 700, letterSpacing: '0.06em',
      textTransform: 'uppercase' },
    meta: { padding: '10px 0' },
    name: { fontSize: 13, fontWeight: 500, letterSpacing: '-0.01em' },
    brandSub: { fontSize: 11, color: '#7a7a72', marginTop: 2 },
    priceRow: { display: 'flex', gap: 8, alignItems: 'baseline', marginTop: 4 },
    price: { fontSize: 13, fontWeight: 600 },
    old: { fontSize: 11, color: '#a0a098', textDecoration: 'line-through' },
    swatch: { display: 'flex', gap: 4, marginTop: 6 },
    sw: (c) => ({ width: 12, height: 12, borderRadius: '50%', background: c,
      border: '1px solid rgba(0,0,0,0.1)' }),
  };
  const F = [
    ['linear-gradient(160deg, #ecdfcc, #b89058)', 'Linen Pleat Trouser', 'Atelier Form', 215, null, 'NEW', ['#ecdfcc','#1a1a1a','#5a4a3a']],
    ['linear-gradient(160deg, #1f2418, #4a4f3a)', 'Cropped Wool Coat', 'Atelier Form', 480, 540, '-12%', ['#1f2418','#7a4a3a','#1a1a1a']],
    ['linear-gradient(160deg, #d8c8a8, #6a3a2a)', 'Knit Polo · Sand', 'Atelier Form', 165, null, null, ['#d8c8a8','#1a1a1a','#3a4f3a']],
    ['linear-gradient(160deg, #c8a8d8, #5a3a6a)', 'Silk Slip Dress', 'Atelier Form', 320, null, 'NEW', ['#c8a8d8','#1a1a1a','#ecdfcc']],
    ['linear-gradient(160deg, #4a5a6a, #1a2a3a)', 'Wide-Leg Denim', 'Atelier Form', 245, null, null, ['#4a5a6a','#1a1a1a']],
    ['linear-gradient(160deg, #6a4a3a, #2a1a14)', 'Leather Tote · Bark', 'Atelier Form', 580, null, 'LAST 2', ['#6a4a3a','#1a1a1a']],
    ['linear-gradient(160deg, #1a1a1a, #3a3a3a)', 'Cashmere Crew · Ink', 'Atelier Form', 290, null, null, ['#1a1a1a','#ecdfcc','#7a4a3a','#3a4f3a']],
    ['linear-gradient(160deg, #b8a8d8, #6a4a8a)', 'Wool Skirt · Heather', 'Atelier Form', 195, null, null, ['#b8a8d8','#1a1a1a']],
  ];
  return (
    <div style={s.root}>
      <div style={s.top}>
        <div style={s.brand}>ATELIER FORM</div>
        <div style={s.nav}>
          <span>Women</span><span>Men</span><span>Home</span><span>Journal</span><span>Stockists</span>
        </div>
        <div style={s.iconRow}>
          <span>⌕</span><span>♡</span><span>Bag (2)</span>
        </div>
      </div>
      <div style={s.sub}>
        <div>
          <div style={s.crumb}>SS26 · Women</div>
          <h1 style={s.h1}>The Spring Collection</h1>
        </div>
        <div style={s.filters}>
          <span style={s.pill}>Sort: Newest ▾</span>
          <span style={s.pill}>Size ▾</span>
          <span style={s.pill}>Colour ▾</span>
          <span style={s.pill}>Price ▾</span>
        </div>
      </div>
      <div style={s.side}>
        <div style={s.filtersCol}>
          <div style={s.filterH}>Category</div>
          <div style={{ ...s.filt, ...s.filtActive }}><span>All</span><span>248</span></div>
          <div style={s.filt}><span>Tops</span><span>62</span></div>
          <div style={s.filt}><span>Knitwear</span><span>34</span></div>
          <div style={s.filt}><span>Dresses</span><span>28</span></div>
          <div style={s.filt}><span>Trousers</span><span>41</span></div>
          <div style={s.filt}><span>Outerwear</span><span>22</span></div>
          <div style={s.filt}><span>Accessories</span><span>61</span></div>
          <div style={s.filterH}>Material</div>
          <div style={s.filt}><span>Linen</span><span>32</span></div>
          <div style={s.filt}><span>Wool</span><span>48</span></div>
          <div style={s.filt}><span>Silk</span><span>22</span></div>
          <div style={s.filt}><span>Cotton</span><span>84</span></div>
        </div>
        <div style={s.grid}>
          {F.map((f, i) => (
            <div key={i} style={s.card}>
              <div style={s.img(f[0])}>
                {f[5] && <div style={s.imgTag}>{f[5]}</div>}
                <div style={s.heart}>♡</div>
                {i < 2 && <div style={s.qShop}>Quick add →</div>}
              </div>
              <div style={s.meta}>
                <div style={s.brandSub}>{f[2]}</div>
                <div style={s.name}>{f[1]}</div>
                <div style={s.priceRow}>
                  <span style={s.price}>£{f[3]}</span>
                  {f[4] && <span style={s.old}>£{f[4]}</span>}
                </div>
                <div style={s.swatch}>
                  {f[6].map((c, ci) => <div key={ci} style={s.sw(c)}></div>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. FURNITURE CATALOG — Editorial, muji-esque, big detail card
// ─────────────────────────────────────────────────────────────────────────────
function FurnitureGrid() {
  const s = {
    root: { width: GW, height: GH, background: '#fafaf6', color: '#1a1a14',
      fontFamily: '"Inter Tight", system-ui, sans-serif',
      display: 'flex', flexDirection: 'column' },
    top: { padding: '20px 40px', display: 'flex',
      justifyContent: 'space-between', alignItems: 'center' },
    brand: { fontSize: 22, fontWeight: 700, letterSpacing: '-0.04em' },
    nav: { display: 'flex', gap: 26, fontSize: 13, fontWeight: 500 },
    body: { flex: 1, display: 'grid', gridTemplateColumns: '1.4fr 1fr',
      padding: '0 40px 40px', gap: 24, minHeight: 0 },
    feature: { background: '#ecebe2', borderRadius: 8, padding: 28,
      display: 'flex', flexDirection: 'column', gap: 16, position: 'relative',
      overflow: 'hidden' },
    featureLbl: { fontSize: 11, color: '#6a6a5a', letterSpacing: '0.16em',
      textTransform: 'uppercase', fontWeight: 600 },
    featureH: { fontFamily: '"Playfair Display", serif', fontSize: 42,
      fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.02em' },
    featureImg: { flex: 1, borderRadius: 6,
      background: 'linear-gradient(180deg, #d8d2c4 0%, #b8b0a0 50%, #6a5a3a 100%)',
      position: 'relative', minHeight: 280 },
    featureMeta: { display: 'flex', justifyContent: 'space-between',
      alignItems: 'flex-end' },
    swatches: { display: 'flex', gap: 6, marginTop: 8 },
    sw: (c, active) => ({ width: 24, height: 24, borderRadius: '50%', background: c,
      border: active ? '2px solid #1a1a14' : '1px solid rgba(0,0,0,0.1)',
      outlineOffset: 2 }),
    addBtn: { background: '#1a1a14', color: '#fff', padding: '12px 22px',
      borderRadius: 4, fontSize: 13, fontWeight: 600,
      letterSpacing: '0.04em', cursor: 'pointer' },
    price: { fontFamily: '"Playfair Display", serif', fontSize: 28,
      fontWeight: 400 },
    side: { display: 'grid', gridTemplateRows: 'repeat(3, 1fr)', gap: 14,
      minHeight: 0 },
    item: { background: '#ecebe2', borderRadius: 8, padding: 14,
      display: 'grid', gridTemplateColumns: '100px 1fr auto', gap: 14,
      alignItems: 'center' },
    itemImg: (g) => ({ width: 100, height: 100, borderRadius: 4, background: g }),
    itemMain: { display: 'flex', flexDirection: 'column', gap: 4 },
    itemLbl: { fontSize: 10, color: '#6a6a5a', letterSpacing: '0.14em',
      textTransform: 'uppercase' },
    itemH: { fontFamily: '"Playfair Display", serif', fontSize: 18,
      fontWeight: 500, letterSpacing: '-0.01em' },
    itemSub: { fontSize: 12, color: '#6a6a5a' },
    itemR: { textAlign: 'right' },
    itemP: { fontFamily: '"Playfair Display", serif', fontSize: 20,
      fontWeight: 400 },
    plus: { display: 'inline-block', marginTop: 8,
      width: 28, height: 28, borderRadius: '50%', background: '#1a1a14',
      color: '#fff', textAlign: 'center', lineHeight: '28px', fontSize: 16 },
  };
  const items = [
    ['linear-gradient(135deg, #a8957a, #5a4a2a)', 'Aino · Side Table', 'Solid oak · oiled finish', 280],
    ['linear-gradient(135deg, #c8c0b0, #6a6050)', 'Tomi · Bedside Lamp', 'Mouth-blown glass · brass', 240],
    ['linear-gradient(135deg, #6a5a4a, #2a1a14)', 'Saari · Floor Cushion', 'Linen · undyed', 95],
  ];
  return (
    <div style={s.root}>
      <div style={s.top}>
        <div style={s.brand}>kotona</div>
        <div style={s.nav}>
          <span>Living</span><span>Bedroom</span><span>Kitchen</span><span>Bath</span><span>Lookbook</span>
        </div>
        <div style={s.nav}><span>⌕</span><span>Bag (1)</span></div>
      </div>
      <div style={s.body}>
        <div style={s.feature}>
          <div>
            <div style={s.featureLbl}>Featured · Spring</div>
            <div style={s.featureH}>The Kallio<br/>Lounge Chair.</div>
          </div>
          <div style={s.featureImg}></div>
          <div style={s.featureMeta}>
            <div>
              <div style={s.itemLbl}>3 colours</div>
              <div style={s.swatches}>
                <div style={s.sw('#a8957a', true)}></div>
                <div style={s.sw('#3a3a3a')}></div>
                <div style={s.sw('#c8c0b0')}></div>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={s.itemLbl}>From</div>
              <div style={s.price}>£ 1,240</div>
            </div>
            <div style={s.addBtn}>Add to bag →</div>
          </div>
        </div>
        <div style={s.side}>
          {items.map((it, i) => (
            <div key={i} style={s.item}>
              <div style={s.itemImg(it[0])}></div>
              <div style={s.itemMain}>
                <div style={s.itemLbl}>{['Tables · Side','Lighting','Living'][i]}</div>
                <div style={s.itemH}>{it[1]}</div>
                <div style={s.itemSub}>{it[2]}</div>
              </div>
              <div style={s.itemR}>
                <div style={s.itemP}>£ {it[3]}</div>
                <div style={s.plus}>+</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 5. PRINT / ART MARKETPLACE — minimal white, masonry-ish
// ─────────────────────────────────────────────────────────────────────────────
function PrintsGrid() {
  const s = {
    root: { width: GW, height: GH, background: '#fff', color: '#1a1a1a',
      fontFamily: '"Inter Tight", system-ui, sans-serif',
      display: 'flex', flexDirection: 'column' },
    top: { display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '20px 40px', borderBottom: '0.5px solid #e0e0e0' },
    brand: { fontFamily: '"Fraunces", serif', fontSize: 24, fontStyle: 'italic',
      fontWeight: 500 },
    nav: { display: 'flex', gap: 26, fontSize: 13, fontWeight: 500 },
    iconRow: { display: 'flex', gap: 14 },
    bar: { padding: '16px 40px', display: 'flex',
      justifyContent: 'space-between', alignItems: 'center',
      borderBottom: '0.5px solid #e0e0e0' },
    h1: { fontFamily: '"Fraunces", serif', fontSize: 28, margin: 0,
      letterSpacing: '-0.02em', fontWeight: 400 },
    filters: { display: 'flex', gap: 6, fontSize: 12, fontWeight: 500 },
    chip: (active) => ({ padding: '6px 14px', borderRadius: 999,
      border: '1px solid #1a1a1a',
      background: active ? '#1a1a1a' : 'transparent',
      color: active ? '#fff' : '#1a1a1a' }),
    masonry: { padding: 40, display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)', gap: 20, overflowY: 'auto', flex: 1 },
    cell: { display: 'flex', flexDirection: 'column' },
    print: (g, h) => ({ width: '100%', height: h, background: '#f5f3ee',
      padding: 14, position: 'relative', display: 'flex',
      alignItems: 'center', justifyContent: 'center' }),
    printInner: (g) => ({ width: '100%', height: '100%', background: g,
      position: 'relative' }),
    edition: { position: 'absolute', top: 8, right: 8,
      background: 'rgba(255,255,255,0.95)',
      padding: '2px 7px', fontSize: 9, fontWeight: 600,
      letterSpacing: '0.06em' },
    meta: { padding: '8px 0' },
    title: { fontFamily: '"Fraunces", serif', fontSize: 14,
      fontStyle: 'italic', letterSpacing: '-0.01em' },
    artist: { fontSize: 11, color: '#888', marginTop: 1 },
    price: { fontSize: 13, marginTop: 4, fontWeight: 500 },
  };
  const prints = [
    ['linear-gradient(45deg, #ff6e3e, #1a1f3a)', 220, 'Two Suns', 'Yuki Tanaka', 145],
    ['linear-gradient(180deg, #f4d6a8, #c48a3a 50%, #1a1408)', 280, 'Long Afternoon', 'Maria Eklöf', 220],
    ['radial-gradient(circle at 30% 30%, #6a3a14, #2a1a08)', 200, 'Vessel No. 4', 'P. K. Mensah', 95],
    ['linear-gradient(135deg, #c8e8c4, #2a5a4a, #06141a)', 240, 'Greenhouse', 'L. Sandberg', 180],
    ['linear-gradient(180deg, #2a4070 0%, #6890c8 50%, #f4dca0 100%)', 260, 'Coast, Slow', 'A. Iqbal', 165],
    ['radial-gradient(circle at 60% 40%, #ffd6a8, #ff5e6c, #4a0a4a)', 220, 'Soft Glow', 'N. Bardot', 124],
    ['linear-gradient(135deg, #f5f3ee 0%, #b8aa8a 30%, #4a3a14 100%)', 260, 'Letterpress 04', 'Press & Pulp', 65],
    ['repeating-linear-gradient(45deg, #1a1a1a 0 6px, #ecebe2 6px 12px)', 200, 'Field, March', 'D. Wessel', 88],
    ['linear-gradient(180deg, #fff 0%, #ffe0e8 50%, #a04a6a 100%)', 240, 'Petal Study', 'M. Khanna', 145],
    ['linear-gradient(135deg, #4cc8ff, #1a3cd9 60%, #2a0a4a)', 220, 'Atlas', 'V. Lev', 195],
  ];
  return (
    <div style={s.root}>
      <div style={s.top}>
        <div style={s.brand}>Marais Editions</div>
        <div style={s.nav}><span>Prints</span><span>Artists</span><span>Editions</span><span>Journal</span><span>Visit</span></div>
        <div style={s.iconRow}>⌕ ♡ Cart</div>
      </div>
      <div style={s.bar}>
        <h1 style={s.h1}>The Spring Editions</h1>
        <div style={s.filters}>
          <span style={s.chip(true)}>All</span>
          <span style={s.chip()}>Photography</span>
          <span style={s.chip()}>Letterpress</span>
          <span style={s.chip()}>Risograph</span>
          <span style={s.chip()}>Original</span>
          <span style={s.chip()}>Under £100</span>
        </div>
      </div>
      <div style={s.masonry}>
        {prints.map((p, i) => (
          <div key={i} style={s.cell}>
            <div style={s.print(p[0], p[1])}>
              <div style={s.printInner(p[0])}></div>
              <div style={s.edition}>Ed. of 50</div>
            </div>
            <div style={s.meta}>
              <div style={s.title}>{p[2]}</div>
              <div style={s.artist}>{p[3]}</div>
              <div style={s.price}>£ {p[4]}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 6. MARKETPLACE (secondhand) — dense, Vinted-feel
// ─────────────────────────────────────────────────────────────────────────────
function MarketplaceGrid() {
  const s = {
    root: { width: GW, height: GH, background: '#f4f1ec', color: '#1a1a1a',
      fontFamily: '"Inter Tight", system-ui, sans-serif',
      display: 'flex', flexDirection: 'column' },
    top: { background: '#1a3a2a', color: '#fff', padding: '14px 40px',
      display: 'flex', alignItems: 'center', gap: 16 },
    brand: { fontWeight: 800, fontSize: 22, letterSpacing: '-0.02em' },
    search: { flex: 1, background: '#fff', color: '#1a1a1a',
      padding: '10px 18px', borderRadius: 999, fontSize: 13,
      display: 'flex', alignItems: 'center', gap: 8 },
    topR: { display: 'flex', gap: 18, fontSize: 13, alignItems: 'center' },
    sellBtn: { background: '#7be3a8', color: '#0a1a0a',
      padding: '8px 16px', borderRadius: 999, fontWeight: 700, fontSize: 13 },
    sub: { padding: '14px 40px', display: 'flex', justifyContent: 'space-between',
      alignItems: 'center' },
    crumb: { fontSize: 12, color: '#7a7a72' },
    h1: { fontSize: 22, fontWeight: 700, margin: 0, marginTop: 3,
      letterSpacing: '-0.02em' },
    bar: { padding: '0 40px 14px', display: 'flex', gap: 8,
      overflowX: 'auto' },
    chip: { background: '#fff', border: '1px solid #d8d4cc',
      padding: '7px 14px', borderRadius: 999, fontSize: 12,
      fontWeight: 600, whiteSpace: 'nowrap', display: 'flex',
      alignItems: 'center', gap: 6 },
    chipActive: { background: '#1a3a2a', color: '#fff', border: 'none' },
    grid: { padding: '0 40px 32px', display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)', gap: 14, overflowY: 'auto', flex: 1 },
    card: { background: '#fff', borderRadius: 10, overflow: 'hidden',
      display: 'flex', flexDirection: 'column' },
    cover: (g) => ({ width: '100%', aspectRatio: '0.84', background: g,
      position: 'relative' }),
    coverBadge: { position: 'absolute', top: 6, left: 6,
      background: '#1a3a2a', color: '#7be3a8',
      padding: '2px 6px', fontSize: 9, fontWeight: 800,
      letterSpacing: '0.06em', textTransform: 'uppercase', borderRadius: 3 },
    heart: { position: 'absolute', top: 6, right: 6,
      background: 'rgba(255,255,255,0.95)', borderRadius: '50%',
      width: 24, height: 24, display: 'flex',
      alignItems: 'center', justifyContent: 'center', fontSize: 12 },
    meta: { padding: '8px 10px' },
    brandLbl: { fontSize: 11, fontWeight: 700 },
    sub2: { fontSize: 11, color: '#7a7a72', marginTop: 1 },
    priceRow: { display: 'flex', justifyContent: 'space-between',
      alignItems: 'baseline', marginTop: 4 },
    price: { fontSize: 13, fontWeight: 700, color: '#1a3a2a' },
    seller: { fontSize: 10, color: '#7a7a72' },
  };
  const items = [
    ['linear-gradient(135deg, #ecdfcc, #b89058)', 'Acne Studios', 'Wool coat · 38', 84],
    ['linear-gradient(135deg, #1f2418, #4a4f3a)', 'Cos', 'Knit cardigan · M', 32],
    ['linear-gradient(135deg, #d8c8a8, #6a3a2a)', 'Sézane', 'Linen shirt · S', 28],
    ['linear-gradient(135deg, #c8a8d8, #5a3a6a)', 'Ganni', 'Silk slip · 36', 65],
    ['linear-gradient(135deg, #4a5a6a, #1a2a3a)', 'Levis', '501 vintage · 30/32', 42],
    ['linear-gradient(135deg, #6a4a3a, #2a1a14)', 'A.P.C.', 'Leather tote', 124],
    ['linear-gradient(135deg, #1a1a1a, #3a3a3a)', 'Carhartt', 'Cargo pants · 32', 38],
    ['linear-gradient(135deg, #b8a8d8, #6a4a8a)', 'Other Stories', 'Wool skirt · 36', 22],
    ['linear-gradient(135deg, #d8e0e8, #5a7090)', 'Patagonia', 'Fleece · L · vintage', 58],
    ['linear-gradient(135deg, #2a4f3a, #0a1f1a)', 'Stüssy', 'Hoodie · M · 1998', 145],
    ['linear-gradient(135deg, #ffd6a8, #b87858)', 'Birkenstock', 'Arizona · 38', 32],
    ['linear-gradient(135deg, #d6f0a8, #6aae42)', 'Veja', 'V-12 sneakers · 41', 48],
  ];
  return (
    <div style={s.root}>
      <div style={s.top}>
        <div style={s.brand}>cycle.</div>
        <div style={s.search}>⌕ &nbsp; Search 4.2M items…</div>
        <div style={s.topR}>
          <span>♡</span>
          <span>💬 3</span>
          <span>👤</span>
          <span style={s.sellBtn}>+ Sell</span>
        </div>
      </div>
      <div style={s.sub}>
        <div>
          <div style={s.crumb}>Women / Vintage &amp; Pre-loved</div>
          <h1 style={s.h1}>Spring closet swap · 14,208 listings</h1>
        </div>
        <div style={{ fontSize: 12, color: '#7a7a72' }}>Sort: <b>Newest</b> ▾</div>
      </div>
      <div style={s.bar}>
        <span style={{ ...s.chip, ...s.chipActive }}>● Live now</span>
        <span style={s.chip}>Free shipping</span>
        <span style={s.chip}>Under £30</span>
        <span style={s.chip}>Verified seller</span>
        <span style={s.chip}>Size ▾</span>
        <span style={s.chip}>Brand ▾</span>
        <span style={s.chip}>Condition ▾</span>
        <span style={s.chip}>Colour ▾</span>
        <span style={s.chip}>+ More</span>
      </div>
      <div style={s.grid}>
        {items.map((it, i) => (
          <div key={i} style={s.card}>
            <div style={s.cover(it[0])}>
              {i % 3 === 0 && <div style={s.coverBadge}>★ Top seller</div>}
              <div style={s.heart}>♡</div>
            </div>
            <div style={s.meta}>
              <div style={s.brandLbl}>{it[1]}</div>
              <div style={s.sub2}>{it[2]}</div>
              <div style={s.priceRow}>
                <div style={s.price}>£{it[3]}</div>
                <div style={s.seller}>★ 4.9</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 7. JOB BOARD — clean SaaS, search + filters + cards
// ─────────────────────────────────────────────────────────────────────────────
function JobBoardGrid() {
  const s = {
    root: { width: GW, height: GH, background: '#f7f6f3', color: '#0e1116',
      fontFamily: '"Inter Tight", system-ui, sans-serif',
      display: 'flex', flexDirection: 'column' },
    top: { padding: '20px 36px', display: 'flex',
      justifyContent: 'space-between', alignItems: 'center',
      background: '#fff', borderBottom: '1px solid #eaeaea' },
    brand: { fontWeight: 700, fontSize: 19, letterSpacing: '-0.03em',
      display: 'flex', alignItems: 'center', gap: 8 },
    bMark: { width: 22, height: 22, background: '#0e1116', borderRadius: 6 },
    nav: { display: 'flex', gap: 28, fontSize: 13, fontWeight: 500 },
    topR: { display: 'flex', gap: 12, alignItems: 'center' },
    btn: { background: '#0e1116', color: '#fff', padding: '8px 16px',
      borderRadius: 8, fontSize: 13, fontWeight: 500 },
    hero: { padding: '24px 36px 0' },
    h1: { fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: '-0.02em' },
    sub: { fontSize: 14, color: '#5a5a52', marginTop: 4 },
    search: { display: 'flex', gap: 0, marginTop: 14,
      background: '#fff', border: '1px solid #eaeaea',
      borderRadius: 10, padding: 6,
      boxShadow: '0 2px 6px rgba(0,0,0,0.04)' },
    sField: { display: 'flex', alignItems: 'center', gap: 8,
      padding: '8px 16px', borderRight: '1px solid #eaeaea',
      fontSize: 13, color: '#5a5a52', flex: 1 },
    sBtn: { background: '#0e1116', color: '#fff',
      padding: '10px 20px', borderRadius: 6, fontWeight: 600,
      fontSize: 13, marginLeft: 'auto' },
    body: { padding: '20px 36px 32px', display: 'grid',
      gridTemplateColumns: '180px 1fr', gap: 24, flex: 1, minHeight: 0 },
    side: { fontSize: 13 },
    sideH: { fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
      textTransform: 'uppercase', color: '#5a5a52', marginTop: 16,
      marginBottom: 8 },
    sideF: { display: 'flex', justifyContent: 'space-between',
      padding: '4px 0', color: '#3a3a32' },
    list: { display: 'flex', flexDirection: 'column', gap: 10,
      overflowY: 'auto' },
    listH: { display: 'flex', justifyContent: 'space-between',
      alignItems: 'baseline', marginBottom: 6 },
    listN: { fontSize: 14, fontWeight: 600 },
    job: { background: '#fff', borderRadius: 12, padding: 18,
      border: '1px solid #eaeaea',
      display: 'grid', gridTemplateColumns: '52px 1fr auto', gap: 16,
      alignItems: 'start' },
    jobLogo: (c) => ({ width: 52, height: 52, borderRadius: 12, background: c,
      color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontWeight: 700, fontSize: 18, flex: 'none' }),
    jobMain: { minWidth: 0 },
    jobCo: { fontSize: 12, color: '#5a5a52', fontWeight: 500 },
    jobT: { fontSize: 16, fontWeight: 600, letterSpacing: '-0.01em', marginTop: 2 },
    jobMeta: { display: 'flex', gap: 8, marginTop: 8, fontSize: 12, flexWrap: 'wrap' },
    jobTag: (bg, c) => ({ background: bg, color: c, padding: '2px 8px',
      borderRadius: 999, fontWeight: 500 }),
    jobR: { textAlign: 'right' },
    jobSalary: { fontSize: 14, fontWeight: 700, letterSpacing: '-0.01em' },
    jobTime: { fontSize: 11, color: '#7a7a72', marginTop: 3 },
    saveBtn: { fontSize: 16, color: '#7a7a72', cursor: 'pointer', marginTop: 6 },
  };
  const jobs = [
    ['#7c5cff', 'L', 'Linear', 'Staff Product Designer', ['Remote · Worldwide', 'Full-time', 'Stripe stripe.com'], '$220k – $280k + eq.', '2h ago', ['#eeedfd','#4f46e5','★ New']],
    ['#0d5e6e', 'H', 'Halid', 'Senior Frontend Engineer', ['London · Hybrid', 'Full-time', 'React · TypeScript'], '£140k – £180k + eq.', '4h ago', ['#dcefe4','#1a4a2a','✓ Featured']],
    ['#e85a4f', 'P', 'Pavilion', 'Product Manager · Pipeline', ['New York · Hybrid', 'Full-time'], '$180k – $220k', '1d ago', null],
    ['#1a3cd9', 'W', 'Werner Inst.', 'Communications Director', ['Paris · On-site', 'Full-time'], '€72k – €90k', '2d ago', null],
    ['#22a06b', 'T', 'Tide', 'iOS Engineer · Health', ['Remote · EU', 'Full-time', 'Swift'], '€90k – €130k', '3d ago', null],
  ];
  return (
    <div style={s.root}>
      <div style={s.top}>
        <div style={s.brand}><span style={s.bMark}></span> Pith</div>
        <div style={s.nav}>
          <span>Jobs</span><span>Companies</span><span>Career advice</span><span>Salaries</span>
        </div>
        <div style={s.topR}>
          <span style={{ fontSize: 13 }}>Sign in</span>
          <span style={s.btn}>Post a job</span>
        </div>
      </div>
      <div style={s.hero}>
        <h1 style={s.h1}>Designer &amp; engineer roles, at quiet companies.</h1>
        <div style={s.sub}>1,408 active · updated daily</div>
        <div style={s.search}>
          <div style={s.sField}>⌕ &nbsp; "product designer"</div>
          <div style={s.sField}>📍 &nbsp; Remote, EU</div>
          <div style={s.sField}>💰 &nbsp; £100k+</div>
          <div style={s.sBtn}>Find roles →</div>
        </div>
      </div>
      <div style={s.body}>
        <div style={s.side}>
          <div style={s.sideH}>Role</div>
          <div style={s.sideF}><span><b>Design</b></span><span>248</span></div>
          <div style={s.sideF}><span>Engineering</span><span>624</span></div>
          <div style={s.sideF}><span>Product</span><span>184</span></div>
          <div style={s.sideF}><span>Marketing</span><span>92</span></div>
          <div style={s.sideF}><span>Ops &amp; Finance</span><span>62</span></div>
          <div style={s.sideH}>Company size</div>
          <div style={s.sideF}><span>1–10</span><span>184</span></div>
          <div style={s.sideF}><span>11–50</span><span>312</span></div>
          <div style={s.sideF}><span>51–200</span><span>284</span></div>
          <div style={s.sideF}><span>200+</span><span>628</span></div>
        </div>
        <div style={s.list}>
          <div style={s.listH}>
            <div style={s.listN}>248 results · Design</div>
            <div style={{ fontSize: 12, color: '#5a5a52' }}>Sort: <b>Most relevant</b> ▾</div>
          </div>
          {jobs.map((j, i) => (
            <div key={i} style={s.job}>
              <div style={s.jobLogo(j[0])}>{j[1]}</div>
              <div style={s.jobMain}>
                <div style={s.jobCo}>{j[2]}</div>
                <div style={s.jobT}>{j[3]}</div>
                <div style={s.jobMeta}>
                  {j[4].map((m, mi) => (
                    <span key={mi} style={s.jobTag('#f3f1ec', '#3a3a32')}>{m}</span>
                  ))}
                  {j[7] && <span style={s.jobTag(j[7][0], j[7][1])}>{j[7][2]}</span>}
                </div>
              </div>
              <div style={s.jobR}>
                <div style={s.jobSalary}>{j[5]}</div>
                <div style={s.jobTime}>{j[6]}</div>
                <div style={s.saveBtn}>♡</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 8. VEHICLES — dark premium, big specs
// ─────────────────────────────────────────────────────────────────────────────
function VehiclesGrid() {
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
    cta: { background: '#ffea4d', color: '#0a0a0d', padding: '8px 14px',
      fontSize: 12, fontWeight: 700, letterSpacing: '0.06em',
      textTransform: 'uppercase' },
    bar: { padding: '20px 36px', display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)', gap: 8,
      borderBottom: '1px solid rgba(255,255,255,0.06)' },
    filt: { background: 'rgba(255,255,255,0.04)', padding: '10px 14px',
      borderRadius: 4, fontSize: 12,
      border: '1px solid rgba(255,255,255,0.08)',
      display: 'flex', justifyContent: 'space-between' },
    filtL: { color: '#7a7a82', fontSize: 10,
      letterSpacing: '0.1em', textTransform: 'uppercase' },
    filtV: { fontWeight: 600 },
    main: { flex: 1, display: 'grid', gridTemplateColumns: '1.4fr 1fr',
      gap: 0, minHeight: 0 },
    feat: { padding: 28, borderRight: '1px solid rgba(255,255,255,0.06)',
      display: 'flex', flexDirection: 'column', gap: 18 },
    featImg: { flex: 1, minHeight: 280, position: 'relative',
      background: 'radial-gradient(ellipse at 50% 80%, rgba(255,234,77,0.15), transparent 60%), linear-gradient(180deg, #1a1a20 0%, #0a0a0d 60%, #2a2a30 100%)',
      borderRadius: 4, overflow: 'hidden' },
    car: { position: 'absolute', left: '50%', top: '50%',
      transform: 'translate(-50%, -50%)',
      width: '70%', height: '40%',
      background: 'linear-gradient(180deg, #5a5a64 0%, #1a1a1d 100%)',
      borderRadius: '40% 12% 8% 12% / 60% 30% 20% 30%',
      boxShadow: '0 30px 60px rgba(0,0,0,0.6)' },
    carShadow: { position: 'absolute', left: '15%', right: '15%', bottom: '20%',
      height: 30, background: 'radial-gradient(ellipse, rgba(0,0,0,0.6), transparent 70%)',
      filter: 'blur(8px)' },
    featPager: { position: 'absolute', bottom: 16, left: 16,
      display: 'flex', gap: 6, alignItems: 'center', fontSize: 11,
      color: 'rgba(255,255,255,0.6)' },
    featBody: { display: 'flex', justifyContent: 'space-between',
      alignItems: 'flex-end' },
    featLbl: { fontSize: 10, color: '#ffea4d', letterSpacing: '0.16em',
      textTransform: 'uppercase' },
    featH: { fontFamily: '"Archivo Black", sans-serif',
      fontSize: 42, fontWeight: 900, letterSpacing: '-0.04em',
      lineHeight: 1, marginTop: 6 },
    featSub: { fontSize: 13, color: '#a0a0a8', marginTop: 8 },
    statRow: { display: 'flex', gap: 28, marginTop: 14 },
    stat: { borderLeft: '2px solid #ffea4d', paddingLeft: 10 },
    statN: { fontFamily: '"Archivo Black", sans-serif', fontSize: 22,
      fontWeight: 900 },
    statL: { fontSize: 9, color: '#7a7a82', letterSpacing: '0.16em',
      textTransform: 'uppercase' },
    featPrice: { textAlign: 'right' },
    featPriceN: { fontFamily: '"Archivo Black", sans-serif', fontSize: 32,
      letterSpacing: '-0.03em' },
    featPriceLbl: { fontSize: 10, color: '#7a7a82',
      letterSpacing: '0.16em', textTransform: 'uppercase' },
    list: { padding: '20px 28px', display: 'flex', flexDirection: 'column',
      gap: 0, overflowY: 'auto' },
    listH: { display: 'flex', justifyContent: 'space-between',
      paddingBottom: 12, borderBottom: '1px solid rgba(255,255,255,0.08)',
      marginBottom: 8 },
    listT: { fontSize: 12, fontWeight: 700, letterSpacing: '0.16em',
      textTransform: 'uppercase' },
    listN: { fontSize: 11, color: '#7a7a82', letterSpacing: '0.1em' },
    car2: { display: 'grid', gridTemplateColumns: '100px 1fr auto',
      gap: 14, padding: '12px 0',
      borderBottom: '1px solid rgba(255,255,255,0.04)' },
    car2Img: (g) => ({ width: 100, height: 64, borderRadius: 4, background: g }),
    car2Main: { display: 'flex', flexDirection: 'column', gap: 4 },
    car2Y: { fontSize: 10, color: '#ffea4d', letterSpacing: '0.16em',
      textTransform: 'uppercase' },
    car2N: { fontFamily: '"Archivo Black", sans-serif', fontSize: 14,
      fontWeight: 900, letterSpacing: '-0.02em' },
    car2S: { fontSize: 11, color: '#7a7a82',
      fontFamily: 'ui-monospace, monospace' },
    car2R: { textAlign: 'right' },
    car2P: { fontFamily: '"Archivo Black", sans-serif', fontSize: 16,
      letterSpacing: '-0.02em' },
    car2M: { fontSize: 10, color: '#7a7a82', marginTop: 3 },
  };
  const cars = [
    ['linear-gradient(135deg, #4a5a6a, #1a2a3a)', '2014', 'Porsche 911 GT3', '32k mi · manual', '£148,000', 'Sussex'],
    ['linear-gradient(135deg, #5a3a3a, #1a0a0a)', '1991', 'BMW E30 M3', '78k mi · Cecotto Ed.', '£186,000', 'Munich'],
    ['linear-gradient(135deg, #d4c8a8, #6a5a3a)', '1972', 'Lancia Fulvia 1.6 HF', '64k mi · concours', '£82,000', 'Milan'],
    ['linear-gradient(135deg, #2a5a4a, #06141a)', '1965', 'Mercedes 230SL', '88k mi · pagoda', '£94,000', 'Stuttgart'],
  ];
  return (
    <div style={s.root}>
      <div style={s.top}>
        <div style={s.brand}>★ NULL POINT</div>
        <div style={s.nav}><span>Inventory</span><span>Auctions</span><span>Concierge</span><span>Journal</span></div>
        <div style={s.cta}>Sell your car →</div>
      </div>
      <div style={s.bar}>
        <div style={s.filt}><div><div style={s.filtL}>Make</div><div style={s.filtV}>Porsche</div></div><span>▾</span></div>
        <div style={s.filt}><div><div style={s.filtL}>Model</div><div style={s.filtV}>911</div></div><span>▾</span></div>
        <div style={s.filt}><div><div style={s.filtL}>Year</div><div style={s.filtV}>1990 — 2024</div></div><span>▾</span></div>
        <div style={s.filt}><div><div style={s.filtL}>Mileage</div><div style={s.filtV}>Under 50k</div></div><span>▾</span></div>
        <div style={s.filt}><div><div style={s.filtL}>Drive</div><div style={s.filtV}>Manual</div></div><span>▾</span></div>
        <div style={s.filt}><div><div style={s.filtL}>Price</div><div style={s.filtV}>£100k – 200k</div></div><span>▾</span></div>
      </div>
      <div style={s.main}>
        <div style={s.feat}>
          <div style={s.featImg}>
            <div style={s.carShadow}></div>
            <div style={s.car}></div>
            <div style={s.featPager}>
              <span style={{ width: 16, height: 2, background: '#ffea4d' }}></span>
              <span style={{ width: 16, height: 2, background: 'rgba(255,255,255,0.2)' }}></span>
              <span style={{ width: 16, height: 2, background: 'rgba(255,255,255,0.2)' }}></span>
              <span style={{ width: 16, height: 2, background: 'rgba(255,255,255,0.2)' }}></span>
              <span style={{ marginLeft: 6 }}>01 / 24</span>
            </div>
          </div>
          <div style={s.featBody}>
            <div>
              <div style={s.featLbl}>Featured · 2014 · UK</div>
              <div style={s.featH}>911 GT3</div>
              <div style={s.featSub}>Pristine PDK · single owner · full Porsche history</div>
              <div style={s.statRow}>
                <div style={s.stat}><div style={s.statN}>32k</div><div style={s.statL}>Miles</div></div>
                <div style={s.stat}><div style={s.statN}>475</div><div style={s.statL}>BHP</div></div>
                <div style={s.stat}><div style={s.statN}>3.4s</div><div style={s.statL}>0—60</div></div>
              </div>
            </div>
            <div style={s.featPrice}>
              <div style={s.featPriceLbl}>Offers over</div>
              <div style={s.featPriceN}>£148,000</div>
            </div>
          </div>
        </div>
        <div style={s.list}>
          <div style={s.listH}>
            <div style={s.listT}>Selected inventory</div>
            <div style={s.listN}>24 active</div>
          </div>
          {cars.map((c, i) => (
            <div key={i} style={s.car2}>
              <div style={s.car2Img(c[0])}></div>
              <div style={s.car2Main}>
                <div style={s.car2Y}>{c[1]} · {c[5]}</div>
                <div style={s.car2N}>{c[2]}</div>
                <div style={s.car2S}>{c[3]}</div>
              </div>
              <div style={s.car2R}>
                <div style={s.car2P}>{c[4]}</div>
                <div style={s.car2M}>VIEW →</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 9. CART — Full page (line items + summary)
// ─────────────────────────────────────────────────────────────────────────────
function CartFull() {
  const s = {
    root: { width: GW, height: GH, background: '#fafaf6', color: '#1a1a14',
      fontFamily: '"Inter Tight", system-ui, sans-serif',
      display: 'flex', flexDirection: 'column' },
    top: { padding: '20px 40px', display: 'flex',
      justifyContent: 'space-between', alignItems: 'center',
      borderBottom: '1px solid #eaeae0' },
    brand: { fontSize: 22, fontWeight: 700, letterSpacing: '-0.03em' },
    crumbs: { fontSize: 13, color: '#7a7a72' },
    iconRow: { fontSize: 14, color: '#1a1a14' },
    body: { flex: 1, display: 'grid',
      gridTemplateColumns: '1.6fr 1fr', gap: 28,
      padding: '28px 40px', minHeight: 0 },
    left: { display: 'flex', flexDirection: 'column', minHeight: 0 },
    leftH: { display: 'flex', alignItems: 'baseline',
      justifyContent: 'space-between',
      paddingBottom: 14, borderBottom: '1px solid #eaeae0', marginBottom: 8 },
    leftH1: { fontFamily: '"Playfair Display", serif',
      fontSize: 28, fontWeight: 500, letterSpacing: '-0.02em', margin: 0 },
    leftN: { fontSize: 12, color: '#7a7a72' },
    items: { display: 'flex', flexDirection: 'column', overflowY: 'auto', flex: 1 },
    item: { display: 'grid', gridTemplateColumns: '90px 1fr auto',
      gap: 20, padding: '20px 0', borderBottom: '1px solid #eaeae0',
      alignItems: 'center' },
    itemImg: (g) => ({ width: 90, height: 110, borderRadius: 4, background: g }),
    itemMain: { display: 'flex', flexDirection: 'column', gap: 6 },
    itemBrand: { fontSize: 11, color: '#7a7a72',
      letterSpacing: '0.1em', textTransform: 'uppercase' },
    itemT: { fontFamily: '"Playfair Display", serif', fontSize: 18,
      fontWeight: 500, letterSpacing: '-0.01em', margin: 0 },
    itemSub: { fontSize: 12, color: '#7a7a72' },
    qtyRow: { display: 'flex', gap: 16, marginTop: 6, alignItems: 'center',
      fontSize: 12 },
    qty: { display: 'flex', alignItems: 'center', gap: 0,
      border: '1px solid #1a1a14', borderRadius: 4 },
    qtyBtn: { padding: '6px 12px', fontSize: 14, lineHeight: 1, color: '#1a1a14' },
    qtyN: { padding: '6px 14px', borderLeft: '1px solid #1a1a14',
      borderRight: '1px solid #1a1a14', fontWeight: 600 },
    remove: { color: '#7a7a72', textDecoration: 'underline',
      textUnderlineOffset: 3, fontSize: 12 },
    itemR: { textAlign: 'right' },
    itemP: { fontFamily: '"Playfair Display", serif', fontSize: 20 },
    summary: { background: '#fff', borderRadius: 8, padding: 24,
      display: 'flex', flexDirection: 'column', gap: 14,
      border: '1px solid #eaeae0', height: 'fit-content' },
    summH: { fontFamily: '"Playfair Display", serif', fontSize: 20,
      fontWeight: 500, margin: 0, marginBottom: 6 },
    promoRow: { display: 'flex', gap: 8 },
    promo: { flex: 1, background: '#f3f1ec', padding: '10px 14px',
      border: 'none', borderRadius: 4, fontSize: 13 },
    promoBtn: { background: '#1a1a14', color: '#fff',
      padding: '10px 18px', borderRadius: 4, fontSize: 13, fontWeight: 600 },
    sumRow: { display: 'flex', justifyContent: 'space-between',
      fontSize: 13, color: '#3a3a34' },
    sumRowDiscount: { color: '#22a06b', fontWeight: 600 },
    divider: { height: 1, background: '#eaeae0', margin: '4px 0' },
    sumTotal: { display: 'flex', justifyContent: 'space-between',
      alignItems: 'baseline', fontSize: 18, fontWeight: 600 },
    sumTotalN: { fontFamily: '"Playfair Display", serif', fontSize: 26 },
    checkout: { background: '#1a1a14', color: '#fff',
      padding: '16px 0', borderRadius: 4, textAlign: 'center',
      fontWeight: 600, fontSize: 14, letterSpacing: '0.04em',
      marginTop: 6 },
    pay: { display: 'flex', justifyContent: 'center', gap: 8,
      fontSize: 11, color: '#7a7a72' },
    payBtn: { padding: '6px 10px', background: '#f3f1ec',
      borderRadius: 4, fontSize: 11, fontWeight: 700 },
    info: { fontSize: 12, color: '#7a7a72', textAlign: 'center',
      borderTop: '1px solid #eaeae0', paddingTop: 12, marginTop: 4 },
  };
  const items = [
    ['linear-gradient(160deg, #1f2418, #4a4f3a)', 'Atelier Form', 'Cropped Wool Coat', 'Loden · 38', 480],
    ['linear-gradient(160deg, #ecdfcc, #b89058)', 'Atelier Form', 'Linen Pleat Trouser', 'Sand · 36', 215],
    ['linear-gradient(160deg, #6a4a3a, #2a1a14)', 'Atelier Form', 'Leather Tote · Bark', 'Bark', 580],
  ];
  return (
    <div style={s.root}>
      <div style={s.top}>
        <div style={s.brand}>ATELIER FORM</div>
        <div style={s.crumbs}>Bag → Shipping → Payment → Confirm</div>
        <div style={s.iconRow}>JL ▾</div>
      </div>
      <div style={s.body}>
        <div style={s.left}>
          <div style={s.leftH}>
            <h1 style={s.leftH1}>Your bag</h1>
            <span style={s.leftN}>3 pieces · ships from Paris</span>
          </div>
          <div style={s.items}>
            {items.map((it, i) => (
              <div key={i} style={s.item}>
                <div style={s.itemImg(it[0])}></div>
                <div style={s.itemMain}>
                  <div style={s.itemBrand}>{it[1]}</div>
                  <h3 style={s.itemT}>{it[2]}</h3>
                  <div style={s.itemSub}>{it[3]}</div>
                  <div style={s.qtyRow}>
                    <div style={s.qty}>
                      <span style={s.qtyBtn}>−</span>
                      <span style={s.qtyN}>1</span>
                      <span style={s.qtyBtn}>+</span>
                    </div>
                    <span style={s.remove}>Remove</span>
                    <span style={s.remove}>Save for later</span>
                  </div>
                </div>
                <div style={s.itemR}>
                  <div style={s.itemP}>£ {it[4]}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={s.summary}>
          <h2 style={s.summH}>Order summary</h2>
          <div style={s.promoRow}>
            <input style={s.promo} placeholder="Promo code" />
            <span style={s.promoBtn}>Apply</span>
          </div>
          <div style={s.sumRow}><span>Subtotal · 3 items</span><span>£ 1,275</span></div>
          <div style={s.sumRow}><span>Shipping · DHL Express</span><span>Free</span></div>
          <div style={{ ...s.sumRow, ...s.sumRowDiscount }}><span>SPRING10 applied</span><span>− £ 127.50</span></div>
          <div style={s.sumRow}><span>VAT included</span><span>£ 191.25</span></div>
          <div style={s.divider}></div>
          <div style={s.sumTotal}><span>Total</span><span style={s.sumTotalN}>£ 1,147.50</span></div>
          <div style={s.checkout}>CHECKOUT SECURELY →</div>
          <div style={s.pay}>
            <span style={s.payBtn}>VISA</span>
            <span style={s.payBtn}>MC</span>
            <span style={s.payBtn}>AMEX</span>
            <span style={s.payBtn}>PAY</span>
            <span style={s.payBtn}>G PAY</span>
            <span style={s.payBtn}>KLA.</span>
          </div>
          <div style={s.info}>
            Free returns within 30 days · Carbon-neutral shipping
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 10. CART DRAWER — Sidebar variant, behind a dimmed background
// ─────────────────────────────────────────────────────────────────────────────
function CartDrawer() {
  const s = {
    root: { width: GW, height: GH, position: 'relative',
      background: '#f7f5f0', overflow: 'hidden',
      fontFamily: '"Inter Tight", system-ui, sans-serif', color: '#1a1a14' },
    bg: { position: 'absolute', inset: 0, padding: 40, opacity: 0.5,
      pointerEvents: 'none', filter: 'blur(0.5px)' },
    bgTop: { display: 'flex', justifyContent: 'space-between',
      borderBottom: '1px solid #1a1a14', paddingBottom: 14 },
    bgGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16, marginTop: 24 },
    bgItem: (g) => ({ width: '100%', aspectRatio: '0.78', background: g,
      borderRadius: 4 }),
    dim: { position: 'absolute', inset: 0,
      background: 'rgba(10,10,14,0.5)' },
    drawer: { position: 'absolute', top: 0, right: 0, bottom: 0,
      width: 460, background: '#fff', display: 'flex', flexDirection: 'column',
      boxShadow: '-20px 0 60px rgba(0,0,0,0.2)' },
    drawerTop: { padding: '20px 24px', display: 'flex',
      justifyContent: 'space-between', alignItems: 'center',
      borderBottom: '1px solid #eaeae0' },
    drawerH: { fontFamily: '"Playfair Display", serif', fontSize: 22,
      margin: 0, fontWeight: 500, letterSpacing: '-0.01em',
      display: 'flex', alignItems: 'center', gap: 10 },
    badge: { background: '#1a1a14', color: '#fff',
      width: 22, height: 22, borderRadius: '50%',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 11, fontWeight: 700 },
    close: { fontSize: 22 },
    free: { background: '#dcefe4', color: '#1a4a2a',
      padding: '10px 16px', fontSize: 12, fontWeight: 500,
      display: 'flex', alignItems: 'center', gap: 8 },
    progress: { flex: 1, height: 3, background: 'rgba(26,74,42,0.2)',
      borderRadius: 2, position: 'relative' },
    progressFill: { width: '78%', height: '100%', background: '#1a4a2a' },
    items: { flex: 1, overflowY: 'auto' },
    item: { display: 'grid', gridTemplateColumns: '70px 1fr auto',
      gap: 14, padding: '16px 24px',
      borderBottom: '1px solid #eaeae0', alignItems: 'flex-start' },
    iImg: (g) => ({ width: 70, height: 86, borderRadius: 4, background: g }),
    iMain: { minWidth: 0 },
    iBrand: { fontSize: 10, color: '#7a7a72',
      letterSpacing: '0.1em', textTransform: 'uppercase' },
    iT: { fontFamily: '"Playfair Display", serif', fontSize: 15,
      fontWeight: 500, letterSpacing: '-0.01em', margin: '3px 0' },
    iSub: { fontSize: 11, color: '#7a7a72' },
    iQty: { display: 'flex', gap: 0, alignItems: 'center',
      border: '1px solid #d8d4cc', borderRadius: 4, marginTop: 8,
      width: 'fit-content', fontSize: 12 },
    iQtyBtn: { padding: '3px 9px', color: '#1a1a14' },
    iQtyN: { padding: '3px 9px', borderLeft: '1px solid #d8d4cc',
      borderRight: '1px solid #d8d4cc' },
    iR: { textAlign: 'right' },
    iP: { fontSize: 14, fontWeight: 600 },
    iRemove: { fontSize: 11, color: '#7a7a72', marginTop: 8,
      textDecoration: 'underline' },
    upsell: { padding: '12px 24px',
      background: '#f7f5f0', borderTop: '1px solid #eaeae0',
      borderBottom: '1px solid #eaeae0' },
    upH: { fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
      textTransform: 'uppercase', marginBottom: 10, color: '#7a7a72' },
    upRow: { display: 'flex', gap: 10, overflowX: 'auto' },
    upTile: { display: 'flex', gap: 8, padding: 8, background: '#fff',
      borderRadius: 6, minWidth: 200, alignItems: 'center' },
    upImg: (g) => ({ width: 40, height: 50, borderRadius: 3, background: g }),
    upT: { fontSize: 12, fontWeight: 500 },
    upP: { fontSize: 11, color: '#7a7a72' },
    upBtn: { background: '#1a1a14', color: '#fff',
      width: 26, height: 26, borderRadius: '50%',
      textAlign: 'center', lineHeight: '26px', fontSize: 16,
      marginLeft: 'auto' },
    foot: { padding: '20px 24px', display: 'flex',
      flexDirection: 'column', gap: 10,
      borderTop: '1px solid #eaeae0' },
    footRow: { display: 'flex', justifyContent: 'space-between',
      fontSize: 13 },
    footTotal: { display: 'flex', justifyContent: 'space-between',
      alignItems: 'baseline' },
    footTLbl: { fontSize: 14, fontWeight: 600 },
    footTN: { fontFamily: '"Playfair Display", serif', fontSize: 24 },
    checkout: { background: '#1a1a14', color: '#fff',
      padding: '14px 0', borderRadius: 4, textAlign: 'center',
      fontWeight: 600, fontSize: 14, letterSpacing: '0.04em' },
  };
  const items = [
    ['linear-gradient(160deg, #1f2418, #4a4f3a)', 'Atelier Form', 'Cropped Wool Coat', 'Loden · 38', 480, 1],
    ['linear-gradient(160deg, #ecdfcc, #b89058)', 'Atelier Form', 'Linen Pleat Trouser', 'Sand · 36', 215, 2],
  ];
  const bgItems = [
    'linear-gradient(160deg, #ecdfcc, #b89058)',
    'linear-gradient(160deg, #1f2418, #4a4f3a)',
    'linear-gradient(160deg, #d8c8a8, #6a3a2a)',
    'linear-gradient(160deg, #c8a8d8, #5a3a6a)',
  ];
  return (
    <div style={s.root}>
      <div style={s.bg}>
        <div style={s.bgTop}>
          <div style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 20 }}>ATELIER FORM</div>
          <div style={{ display: 'flex', gap: 26, fontSize: 12, fontWeight: 600,
            letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            <span>Women</span><span>Men</span><span>Home</span><span>Journal</span>
          </div>
        </div>
        <div style={s.bgGrid}>
          {bgItems.map((b, i) => <div key={i} style={s.bgItem(b)}></div>)}
        </div>
      </div>
      <div style={s.dim}></div>
      <div style={s.drawer}>
        <div style={s.drawerTop}>
          <h2 style={s.drawerH}>Your bag <span style={s.badge}>3</span></h2>
          <div style={s.close}>×</div>
        </div>
        <div style={s.free}>
          <div style={s.progress}><div style={s.progressFill}></div></div>
          <span>£89 from <b>free DHL Express</b></span>
        </div>
        <div style={s.items}>
          {items.map((it, i) => (
            <div key={i} style={s.item}>
              <div style={s.iImg(it[0])}></div>
              <div style={s.iMain}>
                <div style={s.iBrand}>{it[1]}</div>
                <h3 style={s.iT}>{it[2]}</h3>
                <div style={s.iSub}>{it[3]}</div>
                <div style={s.iQty}>
                  <span style={s.iQtyBtn}>−</span>
                  <span style={s.iQtyN}>{it[5]}</span>
                  <span style={s.iQtyBtn}>+</span>
                </div>
              </div>
              <div style={s.iR}>
                <div style={s.iP}>£ {it[4] * it[5]}</div>
                <div style={s.iRemove}>Remove</div>
              </div>
            </div>
          ))}
        </div>
        <div style={s.upsell}>
          <div style={s.upH}>You may also like</div>
          <div style={s.upRow}>
            <div style={s.upTile}>
              <div style={s.upImg('linear-gradient(160deg, #c8a8d8, #5a3a6a)')}></div>
              <div>
                <div style={s.upT}>Silk Slip Dress</div>
                <div style={s.upP}>£ 320</div>
              </div>
              <div style={s.upBtn}>+</div>
            </div>
            <div style={s.upTile}>
              <div style={s.upImg('linear-gradient(160deg, #4a5a6a, #1a2a3a)')}></div>
              <div>
                <div style={s.upT}>Wide-Leg Denim</div>
                <div style={s.upP}>£ 245</div>
              </div>
              <div style={s.upBtn}>+</div>
            </div>
          </div>
        </div>
        <div style={s.foot}>
          <div style={s.footRow}><span style={{ color: '#7a7a72' }}>Subtotal</span><span>£ 910</span></div>
          <div style={s.footRow}><span style={{ color: '#7a7a72' }}>Shipping</span><span>Free</span></div>
          <div style={s.footTotal}>
            <span style={s.footTLbl}>Total</span>
            <span style={s.footTN}>£ 910</span>
          </div>
          <div style={s.checkout}>CHECKOUT · £910 →</div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 11. CART DENSE TABLE — admin/B2B / restock
// ─────────────────────────────────────────────────────────────────────────────
function CartTable() {
  const s = {
    root: { width: GW, height: GH, background: '#f6f6f9', color: '#0e1116',
      fontFamily: '"Inter Tight", system-ui, sans-serif',
      display: 'flex', flexDirection: 'column' },
    top: { padding: '16px 32px', display: 'flex',
      alignItems: 'center', justifyContent: 'space-between',
      background: '#fff', borderBottom: '1px solid #eaeaea' },
    brand: { fontWeight: 700, fontSize: 18, letterSpacing: '-0.03em',
      display: 'flex', alignItems: 'center', gap: 8 },
    bMark: { width: 22, height: 22, background: '#0a4a8a', borderRadius: 4,
      transform: 'rotate(45deg)' },
    nav: { display: 'flex', gap: 24, fontSize: 13, fontWeight: 500 },
    profile: { display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 },
    av: { width: 30, height: 30, borderRadius: '50%', background: '#0a4a8a',
      color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontWeight: 700, fontSize: 12 },
    sub: { padding: '20px 32px 12px', display: 'flex',
      justifyContent: 'space-between', alignItems: 'baseline' },
    crumb: { fontSize: 12, color: '#5a5a62' },
    h1: { fontSize: 24, fontWeight: 700, margin: 0, marginTop: 2,
      letterSpacing: '-0.02em' },
    actions: { display: 'flex', gap: 8 },
    btn: { padding: '8px 14px', background: '#fff', border: '1px solid #d8d8e0',
      borderRadius: 6, fontSize: 13, fontWeight: 500 },
    btnPrime: { background: '#0a4a8a', color: '#fff', border: 'none' },
    body: { flex: 1, padding: '0 32px 24px', display: 'grid',
      gridTemplateColumns: '1fr 320px', gap: 16, minHeight: 0 },
    panel: { background: '#fff', borderRadius: 10,
      border: '1px solid #eaeaea', display: 'flex', flexDirection: 'column',
      minHeight: 0 },
    panelH: { padding: '12px 18px',
      borderBottom: '1px solid #eaeaea',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    panelT: { fontSize: 13, fontWeight: 600 },
    table: { flex: 1, overflowY: 'auto' },
    th: { display: 'grid',
      gridTemplateColumns: '24px 60px 1.6fr 1fr 80px 90px 100px 60px',
      gap: 14, padding: '10px 18px',
      borderBottom: '1px solid #eaeaea',
      fontSize: 11, fontWeight: 700, letterSpacing: '0.08em',
      textTransform: 'uppercase', color: '#7a7a82', alignItems: 'center' },
    tr: { display: 'grid',
      gridTemplateColumns: '24px 60px 1.6fr 1fr 80px 90px 100px 60px',
      gap: 14, padding: '12px 18px',
      borderBottom: '1px solid #f3f3f6',
      fontSize: 13, alignItems: 'center' },
    check: { width: 16, height: 16, borderRadius: 4,
      border: '1.5px solid #c8c8d0', background: '#fff',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 12, color: '#fff' },
    checkA: { background: '#0a4a8a', border: 'none' },
    pImg: (g) => ({ width: 48, height: 48, borderRadius: 6, background: g }),
    pT: { fontWeight: 600, fontSize: 13 },
    pSku: { fontSize: 11, color: '#7a7a82',
      fontFamily: 'ui-monospace, monospace', marginTop: 2 },
    qty: { display: 'flex', alignItems: 'center', gap: 0,
      border: '1px solid #d8d8e0', borderRadius: 4, width: 'fit-content' },
    qBtn: { padding: '3px 8px', fontSize: 14, color: '#5a5a62' },
    qN: { padding: '3px 10px', borderLeft: '1px solid #d8d8e0',
      borderRight: '1px solid #d8d8e0', fontWeight: 600 },
    stock: (level) => ({ display: 'flex', alignItems: 'center', gap: 6,
      fontSize: 12,
      color: level === 'in' ? '#22a06b' : level === 'low' ? '#d97706' : '#dc2626' }),
    stockDot: (level) => ({ width: 7, height: 7, borderRadius: '50%',
      background: level === 'in' ? '#22a06b' : level === 'low' ? '#d97706' : '#dc2626' }),
    tot: { fontWeight: 700, textAlign: 'right' },
    side: { display: 'flex', flexDirection: 'column', gap: 16 },
    sCard: { background: '#fff', borderRadius: 10,
      border: '1px solid #eaeaea', padding: 18 },
    sH: { fontSize: 13, fontWeight: 600, marginBottom: 12 },
    sRow: { display: 'flex', justifyContent: 'space-between',
      padding: '6px 0', fontSize: 13 },
    sLbl: { color: '#5a5a62' },
    sNet: { borderTop: '1px solid #eaeaea', paddingTop: 10, marginTop: 6,
      fontWeight: 700, fontSize: 16 },
    sBtn: { background: '#0a4a8a', color: '#fff',
      padding: '12px 0', textAlign: 'center', borderRadius: 6,
      fontWeight: 600, fontSize: 13, marginTop: 14 },
    sInfo: { background: '#f3f6fc', borderRadius: 8,
      padding: 14, fontSize: 12, lineHeight: 1.5,
      color: '#0a4a8a',
      border: '1px solid #d8e0f0' },
  };
  const rows = [
    [true,'linear-gradient(135deg,#f5f3ee,#b8a890)','Premium A4 Card · 250gsm','SKU-PAP-A4-250','24','in','£18.00','£432.00'],
    [true,'linear-gradient(135deg,#ff6e3e,#1a1f3a)','Risograph Orange · F · 1000ml','SKU-INK-ORG-1L','3','low','£42.00','£126.00'],
    [true,'linear-gradient(135deg,#1a1f3a,#4a5a6a)','Risograph Navy · S · 1000ml','SKU-INK-NVY-1L','4','low','£42.00','£168.00'],
    [false,'linear-gradient(135deg,#d4f000,#80a000)','Riso Lemon · F · 1000ml','SKU-INK-LMN-1L','0','out','£42.00','—'],
    [true,'linear-gradient(135deg,#ecdfcc,#b89058)','Bone Folder · Acrylic','SKU-TOOL-BF-01','8','in','£8.00','£64.00'],
    [true,'linear-gradient(135deg,#1a1a14,#3a3a32)','Master Sheet Pack · 50','SKU-PRT-MS-50','6','in','£28.00','£168.00'],
  ];
  return (
    <div style={s.root}>
      <div style={s.top}>
        <div style={s.brand}><span style={s.bMark}></span> Press &amp; Pulp · Studio</div>
        <div style={s.nav}>
          <span>Dashboard</span><span>Catalog</span><span>Orders</span><span>Suppliers</span><span>Reports</span>
        </div>
        <div style={s.profile}>
          <span style={{ color: '#5a5a62' }}>Brooklyn studio</span>
          <span style={s.av}>JL</span>
        </div>
      </div>
      <div style={s.sub}>
        <div>
          <div style={s.crumb}>Suppliers / Atlas Paper Co. / Restock cart</div>
          <h1 style={s.h1}>Restock cart · 6 items</h1>
        </div>
        <div style={s.actions}>
          <span style={s.btn}>Export CSV</span>
          <span style={s.btn}>Save as draft</span>
          <span style={{ ...s.btn, ...s.btnPrime }}>Send PO →</span>
        </div>
      </div>
      <div style={s.body}>
        <div style={s.panel}>
          <div style={s.panelH}>
            <div style={s.panelT}>Atlas Paper Co. · supplier PO-04218</div>
            <div style={{ fontSize: 12, color: '#5a5a62' }}>Min. order £150 met ✓</div>
          </div>
          <div style={s.th}>
            <span></span><span></span><span>Item</span><span>SKU</span><span>Qty</span><span>Stock</span><span>Unit</span><span>Total</span>
          </div>
          <div style={s.table}>
            {rows.map((r, i) => (
              <div key={i} style={s.tr}>
                <div style={{ ...s.check, ...(r[0] ? s.checkA : {}) }}>{r[0] && '✓'}</div>
                <div style={s.pImg(r[1])}></div>
                <div>
                  <div style={s.pT}>{r[2]}</div>
                  <div style={s.pSku}>{r[3]}</div>
                </div>
                <div style={{ fontSize: 11, fontFamily: 'ui-monospace, monospace',
                  color: '#5a5a62' }}>{r[3]}</div>
                <div style={s.qty}>
                  <span style={s.qBtn}>−</span>
                  <span style={s.qN}>{r[4]}</span>
                  <span style={s.qBtn}>+</span>
                </div>
                <div style={s.stock(r[5])}>
                  <span style={s.stockDot(r[5])}></span>
                  {r[5] === 'in' ? 'In stock' : r[5] === 'low' ? 'Low · 5d' : 'Backorder'}
                </div>
                <div>{r[6]}</div>
                <div style={s.tot}>{r[7]}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={s.side}>
          <div style={s.sCard}>
            <div style={s.sH}>Order summary</div>
            <div style={s.sRow}><span style={s.sLbl}>Subtotal · 5 of 6</span><span>£ 958.00</span></div>
            <div style={s.sRow}><span style={s.sLbl}>Trade discount · 12%</span><span style={{ color: '#22a06b' }}>− £ 114.96</span></div>
            <div style={s.sRow}><span style={s.sLbl}>Shipping · ground</span><span>£ 22.00</span></div>
            <div style={s.sRow}><span style={s.sLbl}>VAT · 20%</span><span>£ 173.00</span></div>
            <div style={{ ...s.sRow, ...s.sNet }}><span>Net payable</span><span>£ 1,038.04</span></div>
            <div style={s.sBtn}>Send purchase order →</div>
          </div>
          <div style={s.sInfo}>
            <b>Heads up:</b> Riso Lemon is on 14-day backorder.
            Uncheck or split shipment to keep this PO on schedule.
          </div>
          <div style={s.sCard}>
            <div style={s.sH}>Delivery</div>
            <div style={s.sRow}><span style={s.sLbl}>To</span><span>Brooklyn studio</span></div>
            <div style={s.sRow}><span style={s.sLbl}>ETA</span><span>Tue, May 26</span></div>
            <div style={s.sRow}><span style={s.sLbl}>Service</span><span>Ground · signed</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 12. RESTAURANT GRID — Food delivery feel, warm
// ─────────────────────────────────────────────────────────────────────────────
function RestaurantGrid() {
  const s = {
    root: { width: GW, height: GH, background: '#fffaf3', color: '#2a1f1c',
      fontFamily: '"Inter Tight", system-ui, sans-serif',
      display: 'flex', flexDirection: 'column' },
    top: { padding: '16px 36px', display: 'flex',
      alignItems: 'center', justifyContent: 'space-between',
      background: '#fff', borderBottom: '1px solid #f4ead8' },
    brand: { fontWeight: 800, fontSize: 22, letterSpacing: '-0.02em',
      color: '#e85a4f', display: 'flex', alignItems: 'center', gap: 6 },
    bDot: { width: 12, height: 12, borderRadius: '50%', background: '#e85a4f' },
    loc: { fontSize: 13, color: '#5a4a40', display: 'flex',
      alignItems: 'center', gap: 6 },
    search: { flex: 0.5, background: '#fff8f0',
      border: '1px solid #f4ead8', borderRadius: 999,
      padding: '8px 16px', fontSize: 13, color: '#a09084',
      display: 'flex', alignItems: 'center', gap: 10 },
    topR: { display: 'flex', alignItems: 'center', gap: 14, fontSize: 13 },
    bag: { background: '#e85a4f', color: '#fff', padding: '8px 14px',
      borderRadius: 999, fontWeight: 700, fontSize: 12 },
    chips: { display: 'flex', gap: 8, padding: '14px 36px 8px',
      overflowX: 'auto' },
    chip: (active) => ({ background: active ? '#2a1f1c' : '#fff',
      color: active ? '#fff' : '#2a1f1c', padding: '7px 16px',
      borderRadius: 999, fontSize: 12, fontWeight: 600,
      boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }),
    banner: { margin: '0 36px', background: '#e85a4f', color: '#fff',
      borderRadius: 14, padding: 20, position: 'relative', overflow: 'hidden',
      display: 'flex', alignItems: 'center' },
    bannerArt: { position: 'absolute', right: -20, top: 0, bottom: 0,
      width: 280,
      background: 'radial-gradient(circle at 40% 50%, #ffd6a8, transparent 70%)' },
    bannerH: { fontSize: 24, fontWeight: 700, letterSpacing: '-0.02em',
      lineHeight: 1.1 },
    bannerS: { fontSize: 13, marginTop: 4, opacity: 0.92 },
    bannerCta: { background: '#fff', color: '#e85a4f',
      padding: '8px 16px', borderRadius: 999, fontSize: 12, fontWeight: 700,
      marginTop: 12, display: 'inline-block' },
    sectionH: { padding: '20px 36px 8px', display: 'flex',
      justifyContent: 'space-between', alignItems: 'baseline' },
    sH: { fontSize: 18, fontWeight: 700, margin: 0, letterSpacing: '-0.01em' },
    sSub: { fontSize: 13, color: '#e85a4f', fontWeight: 600 },
    grid: { padding: '0 36px 28px', display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, overflowY: 'auto', flex: 1 },
    rest: { background: '#fff', borderRadius: 14, overflow: 'hidden',
      boxShadow: '0 2px 6px rgba(0,0,0,0.05)' },
    rImg: (g) => ({ width: '100%', aspectRatio: '4/3', background: g,
      position: 'relative' }),
    rTag: { position: 'absolute', top: 10, left: 10,
      background: '#fff', color: '#2a1f1c',
      padding: '4px 10px', borderRadius: 999,
      fontSize: 11, fontWeight: 700,
      display: 'flex', alignItems: 'center', gap: 4 },
    rPromo: { position: 'absolute', bottom: 10, left: 10,
      background: '#22a06b', color: '#fff', padding: '3px 8px',
      borderRadius: 4, fontSize: 10, fontWeight: 700,
      letterSpacing: '0.04em', textTransform: 'uppercase' },
    rHeart: { position: 'absolute', top: 10, right: 10,
      background: 'rgba(255,255,255,0.9)', borderRadius: '50%',
      width: 30, height: 30, display: 'flex',
      alignItems: 'center', justifyContent: 'center', fontSize: 14 },
    rBody: { padding: '12px 14px' },
    rT: { fontSize: 15, fontWeight: 700, letterSpacing: '-0.01em' },
    rMeta: { fontSize: 12, color: '#7a685e', marginTop: 4 },
    rRow: { display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', marginTop: 8, fontSize: 12 },
    rRat: { display: 'flex', alignItems: 'center', gap: 4,
      fontWeight: 700 },
    rEta: { color: '#7a685e' },
  };
  const R = [
    ['linear-gradient(135deg, #ffd6a8, #e85a4f)', 'Maison Calva', 'French · €€€', 4.9, '18 min', 'FREE'],
    ['linear-gradient(135deg, #d4f0a8, #6aae42)', 'Pebble Bowl', 'Plant · €€', 4.7, '22 min', null],
    ['linear-gradient(135deg, #ffb8c8, #8a4a6a)', 'Tonkotsu &amp; Co', 'Ramen · €€', 4.8, '26 min', '−20%'],
    ['linear-gradient(135deg, #f4e6c4, #c9a060)', 'Northstar Coffee', 'Café · €', 4.9, '14 min', 'FREE'],
    ['linear-gradient(135deg, #d6c4a8, #6a4a2a)', 'Bakery 14', 'Bakery · €', 4.8, '12 min', null],
    ['linear-gradient(135deg, #c8b8d8, #5a3a6a)', 'Wine &amp; Time', 'Wine bar · €€€', 4.6, '32 min', null],
    ['linear-gradient(135deg, #ffd5d5, #c44a4a)', 'Mama Rosa', 'Italian · €€', 4.7, '28 min', '−10%'],
    ['linear-gradient(135deg, #d4dde0, #5a7080)', 'Yui Sushi', 'Sushi · €€€', 4.9, '36 min', null],
  ];
  return (
    <div style={s.root}>
      <div style={s.top}>
        <div style={s.brand}><span style={s.bDot}></span>nibbl</div>
        <div style={s.loc}>📍 <b>14 Rue de Verneuil, Paris</b> ▾</div>
        <div style={s.search}>⌕ &nbsp; Search "ramen", "coffee"…</div>
        <div style={s.topR}>
          <span>♡ Saved</span>
          <span style={s.bag}>🛍 Bag · 3</span>
        </div>
      </div>
      <div style={s.chips}>
        <span style={s.chip(true)}>All</span>
        <span style={s.chip()}>Under 30 min</span>
        <span style={s.chip()}>Free delivery</span>
        <span style={s.chip()}>Plant-based</span>
        <span style={s.chip()}>Late night</span>
        <span style={s.chip()}>Café</span>
        <span style={s.chip()}>Asian</span>
        <span style={s.chip()}>Italian</span>
        <span style={s.chip()}>Sushi</span>
        <span style={s.chip()}>Bakery</span>
        <span style={s.chip()}>Healthy</span>
      </div>
      <div style={s.banner}>
        <div style={s.bannerArt}></div>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={s.bannerH}>First 3 orders, free delivery.</div>
          <div style={s.bannerS}>Welcome to the neighbourhood ◡ ◡ ◡</div>
          <div style={s.bannerCta}>Claim it →</div>
        </div>
      </div>
      <div style={s.sectionH}>
        <h3 style={s.sH}>Loved nearby · 32 places</h3>
        <span style={s.sSub}>See all →</span>
      </div>
      <div style={s.grid}>
        {R.map((r, i) => (
          <div key={i} style={s.rest}>
            <div style={s.rImg(r[0])}>
              <div style={s.rTag}>{r[4]} · free</div>
              {r[5] && <div style={s.rPromo}>{r[5]}</div>}
              <div style={s.rHeart}>♡</div>
            </div>
            <div style={s.rBody}>
              <div style={s.rT} dangerouslySetInnerHTML={{ __html: r[1] }}></div>
              <div style={s.rMeta}>{r[2]}</div>
              <div style={s.rRow}>
                <span style={s.rRat}>★ {r[3]}</span>
                <span style={s.rEta}>{r[4]} delivery</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Canvas
// ─────────────────────────────────────────────────────────────────────────────
function GridsApp() {
  return (
    <DesignCanvas>
      <DCSection id="listings" title="Marketplace &amp; Listings"
        subtitle="Stays, real estate, fashion, marketplace, vehicles — different densities and brand voices.">
        <DCArtboard id="g-stays"     label="01 · Stays grid (Airbnb)"     width={GW} height={GH}><StaysGrid /></DCArtboard>
        <DCArtboard id="g-property"  label="02 · Real estate (premium)"  width={GW} height={GH}><RealEstateGrid /></DCArtboard>
        <DCArtboard id="g-fashion"   label="03 · Fashion (editorial)"    width={GW} height={GH}><FashionGrid /></DCArtboard>
        <DCArtboard id="g-market"    label="06 · Marketplace (resale)"   width={GW} height={GH}><MarketplaceGrid /></DCArtboard>
        <DCArtboard id="g-cars"      label="08 · Vehicles (dark prem.)"  width={GW} height={GH}><VehiclesGrid /></DCArtboard>
      </DCSection>
      <DCSection id="catalogs" title="Catalogs &amp; Boards"
        subtitle="Furniture, prints, jobs, food delivery — varied editorial directions.">
        <DCArtboard id="g-furniture" label="04 · Furniture catalog"      width={GW} height={GH}><FurnitureGrid /></DCArtboard>
        <DCArtboard id="g-prints"    label="05 · Art &amp; prints"       width={GW} height={GH}><PrintsGrid /></DCArtboard>
        <DCArtboard id="g-jobs"      label="07 · Job board"              width={GW} height={GH}><JobBoardGrid /></DCArtboard>
        <DCArtboard id="g-food"      label="12 · Food delivery grid"     width={GW} height={GH}><RestaurantGrid /></DCArtboard>
      </DCSection>
      <DCSection id="carts" title="Cart Variations"
        subtitle="Three takes — full-page checkout, slide-out drawer, and a B2B restock table.">
        <DCArtboard id="g-cart-full"   label="09 · Cart · full page"   width={GW} height={GH}><CartFull /></DCArtboard>
        <DCArtboard id="g-cart-drawer" label="10 · Cart · slide drawer" width={GW} height={GH}><CartDrawer /></DCArtboard>
        <DCArtboard id="g-cart-table"  label="11 · Cart · B2B restock"  width={GW} height={GH}><CartTable /></DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

const gridsRoot = ReactDOM.createRoot(document.getElementById('root'));
gridsRoot.render(<GridsApp />);
