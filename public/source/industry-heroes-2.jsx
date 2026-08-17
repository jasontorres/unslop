// Industry landing heroes — place and craft: stacking isometric floors,
// rising coffee steam, alpine snowfall with a gondola, and a flickering
// cinema projector. Ih2-prefixed names stay off the other canvases.

const Ih2W = 1280;
const Ih2H = 800;

function Ih2Canvas({ paint, seed }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const state = seed ? seed() : {};
    let raf = 0;
    let alive = true;
    let t = 0;
    const loop = () => {
      if (!alive) return;
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const w = canvas.clientWidth || 1;
      const h = canvas.clientHeight || 1;
      const pw = (w * dpr) | 0;
      const ph = (h * dpr) | 0;
      if (canvas.width !== pw || canvas.height !== ph) {
        canvas.width = pw;
        canvas.height = ph;
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      paint(ctx, w, h, t, state);
      t += 1;
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => { alive = false; cancelAnimationFrame(raf); };
  }, []);
  return <canvas ref={ref} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />;
}

function ih2PaintSteam(ctx, w, h, t, state) {
  if (!state.ready) {
    state.puffs = Array.from({ length: 110 }, () => ({
      x: w * 0.50 + (Math.random() - 0.5) * 52,
      y: h - 220 + Math.random() * 16,
      r: 14 + Math.random() * 26,
      vy: 0.85 + Math.random() * 1.45,
      drift: (Math.random() - 0.5) * 0.95,
      life: Math.random(),
      phase: Math.random() * Math.PI * 2,
    }));
    state.ready = true;
  }
  ctx.clearRect(0, 0, w, h);
  const mouthX = w * 0.50;
  const mouthY = h - 220;
  state.puffs.forEach((p) => {
    p.y -= p.vy;
    p.x += Math.sin(t * 0.04 + p.phase) * p.drift;
    p.life -= 0.0045;
    p.r += 0.18;
    if (p.life <= 0 || p.y < 40) {
      p.x = w * 0.50 + (Math.random() - 0.5) * 44;
      p.y = h - 220;
      p.r = 12 + Math.random() * 18;
      p.life = 0.85 + Math.random() * 0.2;
    }
    const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
    g.addColorStop(0, `rgba(255,248,240,${0.42 * p.life})`);
    g.addColorStop(0.55, `rgba(255,236,210,${0.16 * p.life})`);
    g.addColorStop(1, 'rgba(255,248,240,0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.strokeStyle = 'rgba(90, 48, 18, 0.92)';
  ctx.lineWidth = 7;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(w * 0.78, 150);
  ctx.quadraticCurveTo(w * 0.74, 280, mouthX + 8, mouthY - 8);
  ctx.stroke();
  ctx.strokeStyle = 'rgba(232, 196, 140, 1)';
  ctx.lineWidth = 3.2;
  ctx.setLineDash([12, 10]);
  ctx.lineDashOffset = -t * 1.8;
  ctx.stroke();
  ctx.setLineDash([]);
}

function ih2PaintSnow(ctx, w, h, t, state) {
  if (!state.ready) {
    state.flakes = Array.from({ length: 180 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 0.7 + Math.random() * 2.4,
      s: 0.6 + Math.random() * 2.2,
      wind: 0.15 + Math.random() * 0.55,
      phase: Math.random() * Math.PI * 2,
    }));
    state.ready = true;
  }
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = '#ffffff';
  state.flakes.forEach((f) => {
    f.y += f.s;
    f.x += Math.sin(t * 0.02 + f.phase) * f.wind + 0.25;
    if (f.y > h + 6) { f.y = -6; f.x = Math.random() * w; }
    if (f.x > w + 6) f.x = -6;
    ctx.globalAlpha = 0.35 + f.r * 0.25;
    ctx.beginPath();
    ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.globalAlpha = 1;
}

function ih2PaintGrain(ctx, w, h, t) {
  if (t % 2 !== 0) return;
  const n = 1400;
  ctx.clearRect(0, 0, w, h);
  for (let i = 0; i < n; i++) {
    const x = Math.random() * w;
    const y = Math.random() * h;
    const a = Math.random() * 0.18;
    ctx.fillStyle = `rgba(255,244,214,${a})`;
    ctx.fillRect(x, y, 1.2, 1.2);
  }
}

function HeroPlinth() {
  const ink = '#1c1917';
  const floors = [
    { z: 0, label: 'P', fill: 'rgba(214, 211, 209, 0.92)', delay: '0s' },
    { z: 54, label: 'G', fill: 'rgba(245, 245, 244, 0.95)', delay: '0.16s' },
    { z: 108, label: '1', fill: 'rgba(231, 229, 228, 0.94)', delay: '0.32s' },
    { z: 162, label: '2', fill: 'rgba(250, 250, 249, 0.96)', delay: '0.48s' },
    { z: 216, label: '3', fill: 'rgba(228, 228, 226, 0.94)', delay: '0.64s' },
    { z: 270, label: '4', fill: 'rgba(253, 186, 116, 0.88)', delay: '0.80s' },
  ];
  return (
    <div style={{ width: Ih2W, height: Ih2H, background: '#f5f0e8', color: ink, position: 'relative', overflow: 'hidden', fontFamily: '"Public Sans", sans-serif', display: 'flex', flexDirection: 'column' }}>
      <style>{`
        @keyframes ih2-plinth-spin { 0% { transform: rotateX(62deg) rotateZ(-45deg) rotateY(0deg); } 100% { transform: rotateX(62deg) rotateZ(-45deg) rotateY(360deg); } }
        @keyframes ih2-plinth-drop-0 { 0% { transform: translateZ(420px); opacity: 0; } 14%, 78% { transform: translateZ(0px); opacity: 1; } 100% { transform: translateZ(-90px); opacity: 0; } }
        @keyframes ih2-plinth-drop-1 { 0% { transform: translateZ(420px); opacity: 0; } 14%, 78% { transform: translateZ(54px); opacity: 1; } 100% { transform: translateZ(-90px); opacity: 0; } }
        @keyframes ih2-plinth-drop-2 { 0% { transform: translateZ(420px); opacity: 0; } 14%, 78% { transform: translateZ(108px); opacity: 1; } 100% { transform: translateZ(-90px); opacity: 0; } }
        @keyframes ih2-plinth-drop-3 { 0% { transform: translateZ(420px); opacity: 0; } 14%, 78% { transform: translateZ(162px); opacity: 1; } 100% { transform: translateZ(-90px); opacity: 0; } }
        @keyframes ih2-plinth-drop-4 { 0% { transform: translateZ(420px); opacity: 0; } 14%, 78% { transform: translateZ(216px); opacity: 1; } 100% { transform: translateZ(-90px); opacity: 0; } }
        @keyframes ih2-plinth-drop-5 { 0% { transform: translateZ(420px); opacity: 0; } 14%, 78% { transform: translateZ(270px); opacity: 1; } 100% { transform: translateZ(-90px); opacity: 0; } }
        @keyframes ih2-plinth-crane { 0%,100% { transform: translateY(0); } 50% { transform: translateY(18px); } }
      `}</style>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(28,25,23,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(28,25,23,0.05) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
      <nav style={{ display: 'flex', alignItems: 'center', gap: 28, padding: '26px 56px', position: 'relative', zIndex: 3, fontSize: 13.5, fontWeight: 600 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 600, letterSpacing: '-0.03em', marginRight: 'auto' }}>
          <span style={{ width: 18, height: 18, background: ink, display: 'block', transform: 'rotate(45deg) scaleY(0.7)' }} />
          Plinth
        </div>
        <span>Work</span><span>Practice</span><span>Models</span><span>Journal</span>
        <span style={{ padding: '10px 18px', background: ink, color: '#f5f0e8', fontWeight: 700, fontSize: 13 }}>Start a brief</span>
      </nav>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1.05fr', minHeight: 0, position: 'relative', zIndex: 2 }}>
        <div style={{ padding: '40px 24px 48px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 11.5, letterSpacing: '0.22em', color: '#a16207', marginBottom: 16 }}>SPATIAL PRACTICE · BASEL</div>
          <h1 style={{ margin: 0, fontFamily: 'Fraunces, serif', fontSize: 58, lineHeight: 1.06, fontWeight: 550, letterSpacing: '-0.03em' }}>
            Buildings, assembled<br />in the mind first.
          </h1>
          <p style={{ margin: '20px 0 0', maxWidth: 430, fontSize: 17, lineHeight: 1.55, color: '#57534e' }}>
            Plinth is the studio for architects who still think in section, then
            prove it in massing — floor by floor, until the volume holds.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 30 }}>
            <span style={{ padding: '13px 22px', background: ink, color: '#f5f0e8', fontWeight: 700 }}>View the massing</span>
            <span style={{ padding: '13px 22px', border: '1.5px solid #1c1917', fontWeight: 650 }}>Open a model</span>
          </div>
        </div>
        <div style={{ perspective: 1100, perspectiveOrigin: '50% 42%', display: 'grid', placeItems: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 70, width: 4, height: 220, background: '#1c1917', animation: 'ih2-plinth-crane 2.6s ease-in-out infinite' }} />
          <div style={{ width: 260, height: 260, position: 'relative', transformStyle: 'preserve-3d', transform: 'rotateX(62deg) rotateZ(-45deg)', marginTop: 40 }}>
            {floors.map((f, i) => (
              <div key={f.label} style={{
                position: 'absolute', left: 0, top: 0, width: 260, height: 260,
                background: f.fill, border: '1.5px solid #1c1917',
                boxShadow: 'inset 0 0 0 12px rgba(28,25,23,0.04)',
                transform: `translateZ(${f.z}px)`,
                animation: `ih2-plinth-drop-${i} 5.4s cubic-bezier(.2,.75,.2,1) infinite`,
                animationDelay: f.delay,
                display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end',
                padding: 12, fontFamily: '"IBM Plex Mono", monospace', fontSize: 13, fontWeight: 600,
              }}>{f.label}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroNectar() {
  const ink = '#3b2416';
  return (
    <div style={{ width: Ih2W, height: Ih2H, background: '#f3e6d4', color: ink, position: 'relative', overflow: 'hidden', fontFamily: 'Manrope, sans-serif', display: 'flex', flexDirection: 'column' }}>
      <style>{`
        @keyframes ih2-nectar-ripple { 0% { transform: scale(0.4); opacity: .55; } 100% { transform: scale(1.15); opacity: 0; } }
        @keyframes ih2-nectar-kettle { 0%,100% { transform: rotate(-28deg); } 50% { transform: rotate(-18deg); } }
      `}</style>
      <nav style={{ display: 'flex', alignItems: 'center', gap: 26, padding: '26px 56px', position: 'relative', zIndex: 3, fontSize: 13.5, fontWeight: 650 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'Newsreader, serif', fontSize: 24, fontStyle: 'italic', fontWeight: 550, marginRight: 'auto' }}>
          <span style={{ width: 18, height: 18, borderRadius: '50%', background: '#7c4a2a', boxShadow: 'inset 0 0 0 5px #f3e6d4' }} />
          Nectar
        </div>
        <span>Beans</span><span>Cafés</span><span>Subscription</span><span>Visit</span>
        <span style={{ padding: '10px 18px', borderRadius: 999, background: '#7c4a2a', color: '#f8efe4', fontWeight: 750, fontSize: 13 }}>Taste the lot</span>
      </nav>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 0, position: 'relative' }}>
        <div style={{ padding: '28px 24px 48px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 2 }}>
          <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 11.5, letterSpacing: '0.22em', color: '#a16207' }}>ROASTERY · OSAKA · CHARGE 14</div>
          <h1 style={{ margin: '14px 0 0', fontFamily: 'Newsreader, serif', fontSize: 68, lineHeight: 1.02, fontWeight: 500, letterSpacing: '-0.03em' }}>
            Steam,<br /><em style={{ fontStyle: 'italic', color: '#7c4a2a' }}>then silence.</em>
          </h1>
          <p style={{ margin: '20px 0 0', maxWidth: 420, fontSize: 17, lineHeight: 1.55, color: '#6b4a32' }}>
            Single-origin lots, roasted in small charges, poured like a ritual.
            Yirgacheffe, washed, 86.4 — in the cup this morning.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 30 }}>
            <span style={{ padding: '13px 22px', borderRadius: 999, background: '#7c4a2a', color: '#f8efe4', fontWeight: 750 }}>Find a café</span>
            <span style={{ padding: '13px 22px', borderRadius: 999, border: '1.5px solid #7c4a2a', fontWeight: 650 }}>This week’s roast</span>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <Ih2Canvas paint={ih2PaintSteam} seed={() => ({})} />
          <div style={{ position: 'absolute', right: 90, top: 110, width: 86, height: 54, border: '5px solid #3b2416', borderRadius: '0 40px 40px 0', borderLeft: 'none', transformOrigin: 'left center', animation: 'ih2-nectar-kettle 2.8s ease-in-out infinite', background: '#d7b48a' }} />
          <div style={{ position: 'absolute', left: '50%', bottom: 70, width: 220, height: 168, marginLeft: -110 }}>
            <div style={{ position: 'absolute', left: 28, right: 28, top: 0, height: 28, border: '5px solid #3b2416', borderBottom: 'none', borderRadius: '18px 18px 0 0' }} />
            <div style={{ position: 'absolute', left: 8, right: 8, top: 24, bottom: 0, background: '#7c4a2a', border: '5px solid #3b2416', borderRadius: '12px 12px 28px 28px', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', left: 18, right: 18, top: 18, height: 22, background: '#e8c48c', borderRadius: 20 }} />
              <div style={{ position: 'absolute', left: '50%', top: 22, width: 90, height: 90, marginLeft: -45, borderRadius: '50%', border: '2px solid rgba(255,248,240,0.35)', animation: 'ih2-nectar-ripple 2.2s ease-out infinite' }} />
            </div>
            <div style={{ position: 'absolute', right: -18, top: 48, width: 48, height: 78, border: '5px solid #3b2416', borderRadius: 24, borderLeft: 'none' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroRidge() {
  const ink = '#eef4fb';
  return (
    <div style={{ width: Ih2W, height: Ih2H, background: '#152033', color: ink, position: 'relative', overflow: 'hidden', fontFamily: 'Archivo, sans-serif', display: 'flex', flexDirection: 'column' }}>
      <style>{`
        @keyframes ih2-ridge-car { 0% { offset-distance: 0%; } 100% { offset-distance: 100%; } }
        .ih2-gondola {
          position: absolute; width: 54px; height: 36px; background: #e11d48;
          border: 2px solid #eef4fb; z-index: 2; box-shadow: 0 6px 16px rgba(0,0,0,0.35);
          offset-path: path("M 560 660 L 1180 160"); offset-rotate: auto;
          animation: ih2-ridge-car 7.5s linear infinite;
        }
      `}</style>
      <svg width={Ih2W} height={Ih2H} viewBox={`0 0 ${Ih2W} ${Ih2H}`} style={{ position: 'absolute', inset: 0 }}>
        <defs>
          <linearGradient id="ih2RidgeSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1d3354" />
            <stop offset="55%" stopColor="#243a58" />
            <stop offset="100%" stopColor="#8fa4c2" />
          </linearGradient>
        </defs>
        <rect width={Ih2W} height={Ih2H} fill="url(#ih2RidgeSky)" />
        <path d="M0 520 L180 340 L320 470 L470 250 L640 430 L780 300 L960 480 L1100 280 L1280 450 L1280 800 L0 800 Z" fill="#1a2a40" />
        <path d="M0 610 L140 500 L280 590 L420 430 L600 580 L760 470 L940 600 L1120 440 L1280 560 L1280 800 L0 800 Z" fill="#24344c" />
        <path d="M0 700 L220 620 L480 710 L720 600 L980 690 L1280 630 L1280 800 L0 800 Z" fill="#d9e3ef" />
        <line x1="560" y1="660" x2="1180" y2="160" stroke="rgba(238,244,251,0.7)" strokeWidth="3" />
      </svg>
      <Ih2Canvas paint={ih2PaintSnow} seed={() => ({})} />
      <div className="ih2-gondola">
        <div style={{ position: 'absolute', left: 6, right: 6, top: 6, height: 12, background: 'rgba(15,23,42,0.45)' }} />
      </div>
      <nav style={{ display: 'flex', alignItems: 'center', gap: 26, padding: '26px 56px', position: 'relative', zIndex: 3, fontSize: 13.5, fontWeight: 650 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 900, fontSize: 20, letterSpacing: '0.08em', marginRight: 'auto' }}>
          <span style={{ width: 0, height: 0, borderLeft: '9px solid transparent', borderRight: '9px solid transparent', borderBottom: '16px solid #e11d48' }} />
          RIDGE
        </div>
        <span>Passes</span><span>Huts</span><span>Snow</span><span>Book</span>
        <span style={{ padding: '10px 18px', background: '#e11d48', color: '#fff', fontWeight: 800, fontSize: 13 }}>Season pass</span>
      </nav>
      <div style={{ position: 'relative', zIndex: 3, padding: '48px 56px 0', maxWidth: 640 }}>
        <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11.5, letterSpacing: '0.22em', color: '#fda4af' }}>CHAMONIX · 2,147 m · FACE NORD</div>
        <h1 style={{ margin: '14px 0 0', fontSize: 60, lineHeight: 1.02, fontWeight: 900, letterSpacing: '-0.04em' }}>
          The mountain keeps<br />its own hours.
        </h1>
        <p style={{ margin: '18px 0 0', maxWidth: 460, fontSize: 17, lineHeight: 1.5, color: 'rgba(238,244,251,0.78)' }}>
          Live avalanche, lift, and hut status for people who actually go up —
          not the ones refreshing a webcam from the valley.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
          <span style={{ padding: '13px 22px', background: '#eef4fb', color: '#152033', fontWeight: 800 }}>Check the snow</span>
          <span style={{ padding: '13px 22px', border: '1.5px solid rgba(238,244,251,0.45)', fontWeight: 700 }}>Aiguille line · 12 min</span>
        </div>
      </div>
    </div>
  );
}

function HeroAmpersand() {
  const ink = '#fff4d6';
  const holes = Array.from({ length: 18 }, (_, i) => i);
  return (
    <div style={{ width: Ih2W, height: Ih2H, background: '#0a0705', color: ink, position: 'relative', overflow: 'hidden', fontFamily: '"DM Serif Display", serif', display: 'flex', flexDirection: 'column' }}>
      <style>{`
        @keyframes ih2-amp-roll { 0% { transform: translateY(0); } 100% { transform: translateY(-56px); } }
        @keyframes ih2-amp-flicker { 0%, 92%, 100% { opacity: 1; } 93% { opacity: 0.72; } 94% { opacity: 1; } 97% { opacity: 0.55; } 98% { opacity: 1; } }
        @keyframes ih2-amp-count { 0%,24% { content: '3'; } 25%,49% { content: '2'; } 50%,74% { content: '1'; } 75%,100% { content: '0'; } }
        @keyframes ih2-amp-spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes ih2-amp-cone { 0%,100% { opacity: 0.22; } 50% { opacity: 0.4; } }
      `}</style>
      <Ih2Canvas paint={ih2PaintGrain} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 40%, rgba(251,191,36,0.18), transparent 55%)', animation: 'ih2-amp-flicker 3.4s steps(1) infinite', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', right: 80, top: 90, width: 0, height: 0, borderLeft: '220px solid transparent', borderRight: '420px solid transparent', borderBottom: '520px solid rgba(251,191,36,0.16)', transform: 'rotate(18deg)', animation: 'ih2-amp-cone 1.8s ease-in-out infinite', pointerEvents: 'none' }} />
      {['left', 'right'].map((side) => (
        <div key={side} style={{ position: 'absolute', top: -20, [side]: 0, width: 54, height: '120%', overflow: 'hidden', background: '#111', borderRight: side === 'left' ? '1px solid #3f3f46' : 'none', borderLeft: side === 'right' ? '1px solid #3f3f46' : 'none', zIndex: 4 }}>
          <div style={{ animation: 'ih2-amp-roll 0.9s linear infinite' }}>
            {holes.concat(holes).map((_, i) => (
              <div key={i} style={{ width: 22, height: 22, margin: '18px auto', borderRadius: '50%', background: '#0a0705', boxShadow: 'inset 0 0 0 2px #a1a1aa' }} />
            ))}
          </div>
        </div>
      ))}
      <nav style={{ display: 'flex', alignItems: 'center', gap: 26, padding: '26px 88px', position: 'relative', zIndex: 5, fontFamily: '"IBM Plex Mono", sans-serif', fontSize: 12, fontWeight: 600, letterSpacing: '0.12em' }}>
        <div style={{ fontFamily: '"DM Serif Display", serif', fontSize: 26, letterSpacing: '0', marginRight: 'auto', fontWeight: 400 }}>Ampersand</div>
        <span>PROGRAMME</span><span>MEMBERS</span><span>HIRE</span><span>ABOUT</span>
        <span style={{ padding: '9px 16px', border: '1px solid #fbbf24', color: '#fbbf24' }}>BECOME A MEMBER</span>
      </nav>
      <div style={{ position: 'relative', zIndex: 5, flex: 1, display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', padding: '20px 88px 50px', minHeight: 0 }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', animation: 'ih2-amp-flicker 3.4s steps(1) infinite' }}>
          <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 11.5, letterSpacing: '0.24em', color: '#fbbf24' }}>INDEPENDENT CINEMA · LISBON · 142 SEATS</div>
          <h1 style={{ margin: '16px 0 0', fontSize: 64, lineHeight: 1.02, fontWeight: 400 }}>
            One screen.<br />No algorithm.
          </h1>
          <p style={{ margin: '18px 0 0', maxWidth: 440, fontSize: 18, lineHeight: 1.5, fontFamily: '"Public Sans", sans-serif', color: 'rgba(255,244,214,0.72)' }}>
            Ampersand is a house for films that still need a dark room and a
            crowd. Tonight: <em>The Salt Line</em> at 19:40.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 28, fontFamily: '"IBM Plex Mono", monospace', fontSize: 13 }}>
            <span style={{ padding: '13px 20px', background: '#fbbf24', color: '#0a0705', fontWeight: 700 }}>TONIGHT’S PROGRAMME</span>
            <span style={{ padding: '13px 20px', border: '1px solid rgba(251,191,36,0.5)' }}>TRAILER</span>
          </div>
        </div>
        <div style={{ display: 'grid', placeItems: 'center', position: 'relative' }}>
          <div style={{ position: 'relative', width: 210, height: 210, borderRadius: '50%', border: '10px solid #d6d3d1', boxShadow: 'inset 0 0 0 18px #0a0705, 0 0 40px rgba(251,191,36,0.25)', animation: 'ih2-amp-spin 4.2s linear infinite', display: 'grid', placeItems: 'center' }}>
            <div style={{ width: 54, height: 54, borderRadius: '50%', background: '#fbbf24' }} />
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} style={{ position: 'absolute', width: 8, height: 28, background: '#a8a29e', transform: `rotate(${i * 45}deg) translateY(-78px)` }} />
            ))}
          </div>
          <div style={{ position: 'absolute', bottom: 36, fontFamily: '"IBM Plex Mono", monospace', fontSize: 13, letterSpacing: '0.2em', color: '#fbbf24' }}>REEL 02 · 24 FPS</div>
        </div>
      </div>
    </div>
  );
}

function IhPlaceSection() {
  return (
    <DCSection id="ih-place" title="Industry Heroes — Place & Craft"
      subtitle="Landing heroes for architecture, coffee, alpine sport, and independent cinema: stacking isometric floors, rising steam, falling snow with a gondola, and a flickering projector.">
      <DCArtboard id="ih-plinth" label="05 · Plinth · Stacking Floors" width={Ih2W} height={Ih2H}><HeroPlinth /></DCArtboard>
      <DCArtboard id="ih-nectar" label="06 · Nectar · Steam Rise" width={Ih2W} height={Ih2H}><HeroNectar /></DCArtboard>
      <DCArtboard id="ih-ridge" label="07 · Ridge · Falling Snow" width={Ih2W} height={Ih2H}><HeroRidge /></DCArtboard>
      <DCArtboard id="ih-ampersand" label="08 · Ampersand · Projector Flicker" width={Ih2W} height={Ih2H}><HeroAmpersand /></DCArtboard>
    </DCSection>
  );
}

window.IhPlaceSection = IhPlaceSection;
