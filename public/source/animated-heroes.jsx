// Animated heroes — ambient backdrops: aurora gradient drift, a canvas
// starfield, scrolling waveform lines, and marching contour rings.
// Each is a complete 1280×800 landing hero whose motion lives behind the copy.

const AW = 1280;
const AH = 800;

// ─────────────────────────────────────────────────────────────────────────────
// 01. SOLSTICE — AI creative studio, drifting aurora gradient blobs
// ─────────────────────────────────────────────────────────────────────────────
function HeroSolstice() {
  const blob = (c, size) => ({
    position: 'absolute', width: size, height: size, borderRadius: '50%',
    background: `radial-gradient(circle at 50% 50%, ${c}, transparent 70%)`,
    filter: 'blur(70px)', opacity: 0.55, pointerEvents: 'none',
  });
  return (
    <div style={{ width: AW, height: AH, background: '#08070f', color: '#f4f2ff', position: 'relative', overflow: 'hidden', fontFamily: 'Manrope, sans-serif', display: 'flex', flexDirection: 'column' }}>
      <style>{`
        @keyframes sol-a { 0% { transform: translate(-8%, -6%) scale(1); } 50% { transform: translate(26%, 14%) scale(1.25); } 100% { transform: translate(-8%, -6%) scale(1); } }
        @keyframes sol-b { 0% { transform: translate(10%, 20%) scale(1.15); } 50% { transform: translate(-18%, -10%) scale(0.9); } 100% { transform: translate(10%, 20%) scale(1.15); } }
        @keyframes sol-c { 0% { transform: translate(0%, 0%) scale(0.95); } 50% { transform: translate(-14%, 18%) scale(1.3); } 100% { transform: translate(0%, 0%) scale(0.95); } }
      `}</style>
      <div style={{ ...blob('#7c5cff', 640), top: -160, left: 60, animation: 'sol-a 21s ease-in-out infinite' }} />
      <div style={{ ...blob('#2dd4bf', 560), top: 220, right: -80, animation: 'sol-b 27s ease-in-out infinite' }} />
      <div style={{ ...blob('#f472b6', 520), bottom: -200, left: 380, animation: 'sol-c 24s ease-in-out infinite' }} />
      <nav style={{ display: 'flex', alignItems: 'center', gap: 34, padding: '28px 64px', position: 'relative', zIndex: 2, fontSize: 14, fontWeight: 600 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 800, fontSize: 18, letterSpacing: '-0.02em', marginRight: 'auto' }}>
          <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'conic-gradient(from 40deg, #7c5cff, #2dd4bf, #f472b6, #7c5cff)' }} />
          Solstice
        </div>
        <span style={{ opacity: .85 }}>Product</span>
        <span style={{ opacity: .85 }}>Gallery</span>
        <span style={{ opacity: .85 }}>Pricing</span>
        <span style={{ opacity: .85 }}>Docs</span>
        <span style={{ padding: '10px 20px', borderRadius: 99, background: '#f4f2ff', color: '#08070f', fontWeight: 700, fontSize: 13.5 }}>Start free</span>
      </nav>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative', zIndex: 2, padding: '0 64px 40px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '8px 16px', borderRadius: 99, border: '1px solid rgba(244,242,255,.22)', background: 'rgba(244,242,255,.06)', fontSize: 12.5, fontWeight: 600, letterSpacing: '0.04em' }}>
          <span style={{ width: 7, height: 7, borderRadius: 4, background: '#2dd4bf' }} />
          v2 is here — now generating video
        </div>
        <h1 style={{ margin: '30px 0 0', fontFamily: 'Fraunces, serif', fontWeight: 550, fontSize: 92, lineHeight: 1.02, letterSpacing: '-0.03em' }}>
          Make <em style={{ fontStyle: 'italic', background: 'linear-gradient(100deg, #a78bfa, #2dd4bf 55%, #f472b6)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>light</em> of<br />every idea.
        </h1>
        <p style={{ margin: '26px 0 0', maxWidth: 560, fontSize: 18, lineHeight: 1.6, color: 'rgba(244,242,255,.72)' }}>
          Solstice turns rough prompts into finished boards, films, and brand
          worlds — one canvas, every medium, no render queue.
        </p>
        <div style={{ display: 'flex', gap: 16, marginTop: 36 }}>
          <span style={{ padding: '15px 30px', borderRadius: 99, background: '#f4f2ff', color: '#08070f', fontWeight: 750, fontSize: 15 }}>Start creating</span>
          <span style={{ padding: '15px 30px', borderRadius: 99, border: '1px solid rgba(244,242,255,.3)', fontWeight: 650, fontSize: 15 }}>Watch the reel ↗</span>
        </div>
        <div style={{ marginTop: 58, display: 'flex', alignItems: 'center', gap: 30, fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.18em', color: 'rgba(244,242,255,.45)' }}>
          <span>TRUSTED BY TEAMS AT</span>
          <span style={{ color: 'rgba(244,242,255,.7)' }}>PENTAFOLD</span>
          <span style={{ color: 'rgba(244,242,255,.7)' }}>MOTH&nbsp;STUDIO</span>
          <span style={{ color: 'rgba(244,242,255,.7)' }}>ARRAY</span>
          <span style={{ color: 'rgba(244,242,255,.7)' }}>KILN&nbsp;&amp;&nbsp;CO</span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 02. PERIGEE — orbital imagery platform, drifting canvas starfield
// ─────────────────────────────────────────────────────────────────────────────
function PerigeeStars() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let seed = 9;
    const rand = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    const stars = Array.from({ length: 150 }, () => ({
      x: rand() * AW, y: rand() * AH,
      r: 0.4 + rand() * 1.3,
      v: 2 + rand() * 9,
      p: rand() * Math.PI * 2,
      f: 0.3 + rand() * 1.1,
    }));
    let raf, last = performance.now();
    const draw = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      ctx.clearRect(0, 0, AW, AH);
      ctx.fillStyle = '#dbe7ff';
      for (const s of stars) {
        s.x -= s.v * dt;
        if (s.x < -2) s.x = AW + 2;
        ctx.globalAlpha = 0.25 + 0.65 * Math.abs(Math.sin((now / 1000) * s.f + s.p));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, []);
  return <canvas ref={ref} width={AW} height={AH} style={{ position: 'absolute', inset: 0 }} />;
}

function HeroPerigee() {
  const blue = '#6ea8ff';
  const passes = [
    ['04:12:09', 'SVALBARD', '81°', 'NEXT'],
    ['05:47:31', 'PUNTA ARENAS', '64°', ''],
    ['07:20:58', 'FAIRBANKS', '72°', ''],
    ['08:56:14', 'AWARUA', '58°', ''],
  ];
  return (
    <div style={{ width: AW, height: AH, background: '#05070d', color: '#e8eefb', position: 'relative', overflow: 'hidden', fontFamily: '"Space Grotesk", sans-serif' }}>
      <PerigeeStars />
      <div style={{ position: 'absolute', left: '50%', top: 620, width: 1900, height: 1900, marginLeft: -950, borderRadius: '50%', background: '#0a1220', borderTop: '1px solid rgba(110,168,255,.55)', boxShadow: '0 -50px 140px rgba(110,168,255,.22)' }} />
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column' }}>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 30, padding: '26px 60px', fontFamily: '"IBM Plex Mono", monospace', fontSize: 12, letterSpacing: '0.12em' }}>
          <div style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: 19, letterSpacing: '0.06em', marginRight: 'auto' }}>PERIGEE<span style={{ color: blue }}>↑</span></div>
          <span>CONSTELLATION</span><span>TASKING</span><span>ARCHIVE</span><span>DOCS</span>
          <span style={{ border: `1px solid ${blue}`, color: blue, padding: '9px 18px', fontWeight: 600 }}>BOOK A PASS</span>
        </nav>
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 40, alignItems: 'center', padding: '0 60px 60px' }}>
          <div>
            <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 12, letterSpacing: '0.28em', color: blue, marginBottom: 20 }}>SUN-SYNC · 14 SATS · 11 CM RESOLUTION</div>
            <h1 style={{ margin: 0, fontSize: 76, lineHeight: 1.02, fontWeight: 700, letterSpacing: '-0.03em' }}>
              Ground truth,<br />from orbit.
            </h1>
            <p style={{ margin: '24px 0 0', maxWidth: 480, fontSize: 17, lineHeight: 1.6, color: 'rgba(232,238,251,.68)' }}>
              Task a satellite before lunch and hold calibrated imagery by
              dinner. Perigee flies the constellation; you write four lines
              of Python.
            </p>
            <div style={{ display: 'flex', gap: 16, marginTop: 34 }}>
              <span style={{ padding: '14px 28px', background: blue, color: '#05070d', fontWeight: 700, fontSize: 15 }}>Task a satellite</span>
              <span style={{ padding: '14px 28px', border: '1px solid rgba(232,238,251,.3)', fontWeight: 600, fontSize: 15 }}>Browse the archive</span>
            </div>
          </div>
          <div style={{ background: 'rgba(10,18,32,.72)', border: '1px solid rgba(110,168,255,.28)', backdropFilter: 'blur(6px)', padding: '22px 24px', fontFamily: '"IBM Plex Mono", monospace' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, letterSpacing: '0.2em', color: 'rgba(232,238,251,.55)', marginBottom: 16 }}>
              <span>PASS SCHEDULE · UTC</span><span>PGE-07</span>
            </div>
            {passes.map(([t, gs, el, tag]) => (
              <div key={t} style={{ display: 'grid', gridTemplateColumns: '86px 1fr 44px 52px', gap: 10, alignItems: 'baseline', padding: '10px 0', borderTop: '1px solid rgba(110,168,255,.14)', fontSize: 13 }}>
                <b style={{ color: tag ? blue : '#e8eefb' }}>{t}</b>
                <span style={{ color: 'rgba(232,238,251,.75)' }}>{gs}</span>
                <span style={{ color: 'rgba(232,238,251,.5)' }}>{el}</span>
                <span style={{ fontSize: 10, color: tag ? '#05070d' : 'transparent', background: tag ? blue : 'transparent', textAlign: 'center', padding: '2px 0', fontWeight: 700 }}>{tag || '—'}</span>
              </div>
            ))}
            <div style={{ marginTop: 14, fontSize: 11, color: 'rgba(232,238,251,.45)', letterSpacing: '0.08em' }}>DOWNLINK BUDGET · 41.2 GB REMAINING</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 03. UNDERTOW — audio mastering studio, scrolling layered waveform lines
// ─────────────────────────────────────────────────────────────────────────────
function undertowWave(amp, period, phase, mid) {
  const pts = [];
  for (let x = 0; x <= 2560; x += 8) {
    pts.push(`${x},${(mid + amp * Math.sin((x / period) * Math.PI * 2 + phase)).toFixed(1)}`);
  }
  return 'M ' + pts.join(' L ');
}

function HeroUndertow() {
  const ink = '#191512';
  const terra = '#c2543a';
  const sage = '#3e6b5c';
  return (
    <div style={{ width: AW, height: AH, background: '#f7f2e9', color: ink, position: 'relative', overflow: 'hidden', fontFamily: 'Newsreader, serif', display: 'flex', flexDirection: 'column' }}>
      <style>{`
        @keyframes und-scroll { to { transform: translateX(-1280px); } }
        @keyframes und-head { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.5); opacity: .55; } }
      `}</style>
      <nav style={{ display: 'flex', alignItems: 'baseline', padding: '30px 64px 0' }}>
        <div style={{ fontSize: 27, fontStyle: 'italic', fontWeight: 500, marginRight: 'auto' }}>Undertow</div>
        <div style={{ display: 'flex', gap: 30, fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.18em' }}>
          <span>STUDIO</span><span>MASTERING</span><span>RATES</span><span>JOURNAL</span>
        </div>
      </nav>
      <div style={{ textAlign: 'center', padding: '58px 64px 0' }}>
        <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.3em', color: terra, marginBottom: 20 }}>MASTERING FOR NARRATIVE AUDIO</div>
        <h1 style={{ margin: 0, fontSize: 84, lineHeight: 1.04, fontWeight: 500, letterSpacing: '-0.02em' }}>
          Every story has<br /><em style={{ fontStyle: 'italic', color: sage }}>a frequency.</em>
        </h1>
        <p style={{ margin: '20px auto 0', maxWidth: 520, fontSize: 18.5, lineHeight: 1.55, color: 'rgba(25,21,18,.7)' }}>
          Two engineers, one converted chapel, and eleven years of podcasts,
          radio drama, and film dialogue — mixed until the room disappears.
        </p>
      </div>
      <div style={{ flex: 1, position: 'relative', margin: '34px 0 0', minHeight: 0 }}>
        {[
          [64, 320, 0.4, sage, 2.4, 26, 0.9],
          [44, 256, 2.1, ink, 1.6, 17, 0.5],
          [82, 426.6667, 4.4, terra, 2.8, 37, 0.75],
        ].map(([amp, period, phase, color, sw, dur, op], i) => (
          <svg key={i} width={2560} height={220} viewBox="0 0 2560 220" style={{ position: 'absolute', top: '50%', left: 0, marginTop: -110, animation: `und-scroll ${dur}s linear infinite`, opacity: op }}>
            <path d={undertowWave(amp, period, phase, 110)} fill="none" stroke={color} strokeWidth={sw} />
          </svg>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '0 64px 34px' }}>
        <span style={{ width: 52, height: 52, borderRadius: '50%', background: ink, color: '#f7f2e9', display: 'grid', placeItems: 'center', fontSize: 16, flex: 'none' }}>▶</span>
        <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.14em' }}>
          <div style={{ fontWeight: 700 }}>REEL — SPRING ’26</div>
          <div style={{ color: 'rgba(25,21,18,.55)', marginTop: 3 }}>BEFORE / AFTER · 02:41</div>
        </div>
        <div style={{ flex: 1, height: 1.5, background: 'rgba(25,21,18,.2)', position: 'relative' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, width: '34%', height: '100%', background: ink }} />
          <span style={{ position: 'absolute', left: '34%', top: '50%', width: 11, height: 11, margin: '-5.5px 0 0 -5.5px', borderRadius: '50%', background: terra, animation: 'und-head 2.2s ease-in-out infinite' }} />
        </div>
        <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.14em', color: 'rgba(25,21,18,.55)' }}>00:55</span>
        <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.16em', borderBottom: `1.5px solid ${ink}`, paddingBottom: 3 }}>BOOK A SESSION →</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 04. CAIRN — trail navigation app, rotating contour rings with marching dashes
// ─────────────────────────────────────────────────────────────────────────────
function cairnRing(cx, cy, base, wobble, seed) {
  const pts = [];
  for (let i = 0; i <= 72; i++) {
    const a = (i / 72) * Math.PI * 2;
    const r = base + wobble * Math.sin(3 * a + seed) + wobble * 0.5 * Math.sin(5 * a + seed * 1.7) + wobble * 0.3 * Math.sin(8 * a + seed * 2.3);
    pts.push(`${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`);
  }
  return 'M ' + pts.join(' L ') + ' Z';
}

function HeroCairn() {
  const paper = '#e8efe6';
  const amber = '#d9a441';
  const moss = '#7fb69a';
  const rings = [52, 96, 140, 184, 228, 272, 316, 360];
  return (
    <div style={{ width: AW, height: AH, background: '#0c1f18', color: paper, position: 'relative', overflow: 'hidden', fontFamily: '"Inter Tight", sans-serif', display: 'flex', flexDirection: 'column' }}>
      <style>{`
        @keyframes crn-rotate { to { transform: rotate(360deg); } }
        @keyframes crn-march { to { stroke-dashoffset: -160; } }
        @keyframes crn-ping { 0% { transform: scale(1); opacity: .7; } 100% { transform: scale(3.2); opacity: 0; } }
      `}</style>
      <nav style={{ display: 'flex', alignItems: 'center', gap: 30, padding: '26px 60px', fontSize: 13.5, fontWeight: 600, position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, fontWeight: 800, fontSize: 18, letterSpacing: '0.06em', marginRight: 'auto' }}>
          <span style={{ color: amber, fontSize: 15 }}>▲</span> CAIRN
        </div>
        <span style={{ opacity: .85 }}>Trails</span>
        <span style={{ opacity: .85 }}>Maps</span>
        <span style={{ opacity: .85 }}>Club</span>
        <span style={{ opacity: .85 }}>Journal</span>
        <span style={{ padding: '10px 19px', borderRadius: 9, background: amber, color: '#0c1f18', fontWeight: 750, fontSize: 13 }}>Get the app</span>
      </nav>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1.05fr', alignItems: 'center', minHeight: 0 }}>
        <div style={{ position: 'relative', height: '100%' }}>
          <svg width={640} height={640} viewBox="0 0 640 640" style={{ position: 'absolute', top: '50%', left: '50%', margin: '-320px 0 0 -320px', animation: 'crn-rotate 150s linear infinite' }}>
            {rings.map((base, i) => (
              <path key={base} d={cairnRing(320, 320, base, base * 0.13, i * 1.9 + 1)} fill="none"
                stroke={i === 3 ? amber : '#4a8a6c'} strokeWidth={i === 3 ? 2 : 1.5}
                strokeDasharray="7 9" style={{ animation: `crn-march ${22 + i * 6}s linear infinite` }} />
            ))}
          </svg>
          <span style={{ position: 'absolute', top: '50%', left: '50%', width: 12, height: 12, margin: -6, borderRadius: '50%', background: amber, animation: 'crn-ping 2.6s ease-out infinite' }} />
          <span style={{ position: 'absolute', top: '50%', left: '50%', width: 12, height: 12, margin: -6, borderRadius: '50%', background: amber, border: '2.5px solid #0c1f18' }} />
          <div style={{ position: 'absolute', top: '32%', left: '62%', background: 'rgba(12,31,24,.85)', border: '1px solid #2f5847', padding: '7px 12px', fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.1em' }}>1,240 M</div>
          <div style={{ position: 'absolute', top: '66%', left: '20%', background: 'rgba(12,31,24,.85)', border: '1px solid #2f5847', padding: '7px 12px', fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.1em', color: moss }}>GRADE 4 · SCRAMBLE</div>
        </div>
        <div style={{ padding: '0 64px 0 10px' }}>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11.5, letterSpacing: '0.26em', color: moss, marginBottom: 20 }}>OFFLINE TOPO · GPX · SOS BEACON</div>
          <h1 style={{ margin: 0, fontSize: 58, lineHeight: 1.06, fontWeight: 800, letterSpacing: '-0.035em' }}>
            Know the mountain<br />before you meet it.
          </h1>
          <p style={{ margin: '22px 0 0', maxWidth: 440, fontSize: 17, lineHeight: 1.6, color: 'rgba(232,239,230,.72)' }}>
            Contour-first maps drawn from lidar, route beta from people who
            were up there on Saturday, and navigation that keeps working two
            valleys past the last bar of signal.
          </p>
          <div style={{ display: 'flex', gap: 15, marginTop: 32 }}>
            <span style={{ padding: '14px 26px', borderRadius: 10, background: paper, color: '#0c1f18', fontWeight: 750, fontSize: 15 }}>Plan a route</span>
            <span style={{ padding: '14px 26px', borderRadius: 10, border: '1.5px solid rgba(232,239,230,.35)', fontWeight: 650, fontSize: 15 }}>Browse 2,400 trails</span>
          </div>
          <div style={{ display: 'flex', gap: 34, marginTop: 40, fontFamily: '"JetBrains Mono", monospace', fontSize: 11.5, letterSpacing: '0.06em', color: 'rgba(232,239,230,.6)' }}>
            <span><b style={{ color: paper, fontSize: 16 }}>2,400</b> trails</span>
            <span><b style={{ color: paper, fontSize: 16 }}>61</b> ranges</span>
            <span><b style={{ color: paper, fontSize: 16 }}>100%</b> offline</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnimatedHeroes() {
  return (
    <DesignCanvas>
      <DCSection id="anim-ambient" title="Animation — Ambient Backdrops"
        subtitle="Motion behind the copy: drifting aurora gradients, a canvas starfield, scrolling waveform lines, and slowly rotating contour rings.">
        <DCArtboard id="an-solstice" label="01 · Solstice · Aurora Drift" width={AW} height={AH}><HeroSolstice /></DCArtboard>
        <DCArtboard id="an-perigee" label="02 · Perigee · Starfield" width={AW} height={AH}><HeroPerigee /></DCArtboard>
        <DCArtboard id="an-undertow" label="03 · Undertow · Waveform" width={AW} height={AH}><HeroUndertow /></DCArtboard>
        <DCArtboard id="an-cairn" label="04 · Cairn · Contour Lines" width={AW} height={AH}><HeroCairn /></DCArtboard>
      </DCSection>
      {window.AnimationKineticSection ? <window.AnimationKineticSection /> : null}
      {window.IhScienceSection ? <window.IhScienceSection /> : null}
      {window.IhPlaceSection ? <window.IhPlaceSection /> : null}
    </DesignCanvas>
  );
}

const animationRoot = ReactDOM.createRoot(document.getElementById('root'));
animationRoot.render(<AnimatedHeroes />);
