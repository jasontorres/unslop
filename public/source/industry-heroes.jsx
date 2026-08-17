// Industry landing heroes — science and motion: a spinning DNA helix,
// a warp-speed racing HUD, a surgical path tracer, and a radar sweep.
// Each artboard is a complete 1280×800 desktop landing. Helper names are
// Ih-prefixed so they never collide with dashboards or the Animation set.

const IhW = 1280;
const IhH = 800;

function IhCanvas({ paint, seed }) {
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

function ihPaintHelix(ctx, w, h, t) {
  ctx.fillStyle = '#05080d';
  ctx.fillRect(0, 0, w, h);
  ctx.save();
  ctx.strokeStyle = 'rgba(94,234,212,0.055)';
  ctx.lineWidth = 1;
  for (let x = 40; x < w; x += 48) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
  }
  for (let y = 20; y < h; y += 48) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
  }
  ctx.restore();

  const glow = ctx.createRadialGradient(w * 0.72, h * 0.5, 20, w * 0.72, h * 0.5, 340);
  glow.addColorStop(0, 'rgba(45,212,191,0.22)');
  glow.addColorStop(0.45, 'rgba(244,63,94,0.10)');
  glow.addColorStop(1, 'rgba(5,8,13,0)');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, w, h);

  const cx = w * 0.71;
  const cy = h * 0.50;
  const turns = 5.4;
  const amp = 92;
  const len = h * 0.78;
  const rot = t * 0.042;
  const steps = 120;
  const rungs = [];
  const strandA = [];
  const strandB = [];

  for (let i = 0; i <= steps; i++) {
    const p = i / steps;
    const y = cy - len / 2 + p * len;
    const a = p * Math.PI * 2 * turns + rot;
    const zA = Math.sin(a);
    const zB = Math.sin(a + Math.PI);
    const xA = cx + Math.cos(a) * amp;
    const xB = cx + Math.cos(a + Math.PI) * amp;
    strandA.push({ x: xA, y, z: zA });
    strandB.push({ x: xB, y, z: zB });
    if (i % 4 === 0) rungs.push({ xA, xB, y, zA, zB });
  }

  rungs.forEach((r) => {
    const depth = (r.zA + r.zB) * 0.5;
    const alpha = 0.18 + (depth + 1) * 0.28;
    ctx.beginPath();
    ctx.moveTo(r.xA, r.y);
    ctx.lineTo(r.xB, r.y);
    ctx.strokeStyle = `rgba(196,181,253,${alpha})`;
    ctx.lineWidth = 2.2;
    ctx.stroke();
  });

  const strokeStrand = (pts, rgb) => {
    ctx.beginPath();
    pts.forEach((p, i) => (i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)));
    ctx.strokeStyle = `rgb(${rgb})`;
    ctx.lineWidth = 3.6;
    ctx.shadowColor = `rgba(${rgb},0.55)`;
    ctx.shadowBlur = 12;
    ctx.stroke();
    ctx.shadowBlur = 0;
    pts.forEach((p, i) => {
      if (i % 3 !== 0) return;
      const r = 3.2 + p.z * 1.6;
      ctx.beginPath();
      ctx.arc(p.x, p.y, Math.max(1.6, r), 0, Math.PI * 2);
      ctx.fillStyle = `rgb(${rgb})`;
      ctx.fill();
    });
  };
  strokeStrand(strandA, '94,234,212');
  strokeStrand(strandB, '251,113,133');

  ctx.font = '11px "IBM Plex Mono", monospace';
  ctx.fillStyle = 'rgba(94,234,212,0.7)';
  ctx.fillText('chr17 · BRCA1', cx - amp - 78, cy - len * 0.28);
  ctx.fillStyle = 'rgba(251,113,133,0.75)';
  ctx.fillText('bp 43,044,295', cx + amp + 16, cy + len * 0.18);
}

function ihPaintSlip(ctx, w, h, t, state) {
  if (!state.ready) {
    state.streaks = Array.from({ length: 140 }, (_, i) => ({
      a: Math.random() * Math.PI * 2,
      z: Math.random(),
      spd: 0.016 + Math.random() * 0.034,
      len: 0.05 + Math.random() * 0.16,
      wt: 1 + Math.random() * 2.6,
      c: i % 6 === 0 ? '#facc15' : (i % 3 === 0 ? '#67e8f9' : '#e2e8f0'),
    }));
    state.ready = true;
  }
  ctx.fillStyle = '#03050a';
  ctx.fillRect(0, 0, w, h);

  const vpX = w * 0.62;
  const vpY = h * 0.48;
  const maxR = Math.hypot(w, h) * 0.78;

  ctx.save();
  ctx.strokeStyle = 'rgba(103,232,249,0.12)';
  ctx.lineWidth = 1;
  for (let i = 1; i <= 6; i++) {
    const r = 40 + i * 70;
    ctx.beginPath();
    ctx.ellipse(vpX, vpY, r * 1.35, r * 0.72, 0, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.restore();

  state.streaks.forEach((s) => {
    s.z += s.spd;
    if (s.z > 1) {
      s.z -= 1;
      s.a = Math.random() * Math.PI * 2;
    }
    const z0 = s.z;
    const z1 = Math.min(1.05, s.z + s.len);
    const r0 = z0 * z0 * maxR;
    const r1 = z1 * z1 * maxR;
    const x0 = vpX + Math.cos(s.a) * r0;
    const y0 = vpY + Math.sin(s.a) * r0 * 0.58;
    const x1 = vpX + Math.cos(s.a) * r1;
    const y1 = vpY + Math.sin(s.a) * r1 * 0.58;
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.strokeStyle = s.c;
    ctx.globalAlpha = 0.2 + z0 * 0.8;
    ctx.lineWidth = s.wt * (0.25 + z0 * 1.55);
    ctx.stroke();
    ctx.globalAlpha = 1;
  });

  const pulse = 0.55 + Math.sin(t * 0.12) * 0.45;
  ctx.beginPath();
  ctx.arc(vpX, vpY, 7 + pulse * 4, 0, Math.PI * 2);
  ctx.fillStyle = '#facc15';
  ctx.fill();
  ctx.beginPath();
  ctx.arc(vpX, vpY, 22 + pulse * 10, 0, Math.PI * 2);
  ctx.strokeStyle = `rgba(250,204,21,${0.35 + pulse * 0.35})`;
  ctx.lineWidth = 2;
  ctx.stroke();
}

function ihPaintSuture(ctx, w, h, t, state) {
  if (!state.ready) {
    const pts = [];
    const n = 90;
    for (let i = 0; i <= n; i++) {
      const p = i / n;
      const x = 90 + p * (w - 180);
      const y = h * 0.52
        + Math.sin(p * Math.PI * 2.2) * 118
        + Math.sin(p * Math.PI * 5.1) * 36;
      pts.push({ x, y });
    }
    state.pts = pts;
    state.lens = [0];
    for (let i = 1; i < pts.length; i++) {
      const dx = pts[i].x - pts[i - 1].x;
      const dy = pts[i].y - pts[i - 1].y;
      state.lens.push(state.lens[i - 1] + Math.hypot(dx, dy));
    }
    state.total = state.lens[state.lens.length - 1];
    state.ready = true;
  }

  ctx.fillStyle = '#071614';
  ctx.fillRect(0, 0, w, h);

  ctx.save();
  ctx.strokeStyle = 'rgba(125,211,252,0.07)';
  ctx.lineWidth = 1;
  for (let x = 0; x < w; x += 36) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
  for (let y = 0; y < h; y += 36) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }
  ctx.restore();

  const organX = w * 0.62;
  const organY = h * 0.50;
  ctx.beginPath();
  ctx.ellipse(organX, organY, 210, 168, -0.2, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(14, 48, 44, 0.85)';
  ctx.fill();
  ctx.strokeStyle = 'rgba(45,212,191,0.35)';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(organX - 40, organY - 10, 70, 90, 0.4, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(125,211,252,0.25)';
  ctx.stroke();

  const marks = [
    [organX - 120, organY - 70], [organX + 30, organY - 110],
    [organX + 140, organY - 20], [organX + 80, organY + 90],
    [organX - 90, organY + 80], [organX - 10, organY + 20],
  ];
  marks.forEach((m, i) => {
    const ping = (Math.sin(t * 0.08 + i) + 1) / 2;
    ctx.beginPath();
    ctx.arc(m[0], m[1], 4, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(250,204,21,${0.45 + ping * 0.55})`;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(m[0], m[1], 10 + ping * 6, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(250,204,21,${0.15 + ping * 0.25})`;
    ctx.stroke();
  });

  const cycle = 280;
  const drawn = ((t % cycle) / cycle) * state.total;
  const pts = state.pts;
  ctx.beginPath();
  ctx.moveTo(pts[0].x, pts[0].y);
  let tip = pts[0];
  for (let i = 1; i < pts.length; i++) {
    if (state.lens[i] > drawn) {
      const span = state.lens[i] - state.lens[i - 1];
      const u = span ? (drawn - state.lens[i - 1]) / span : 0;
      tip = {
        x: pts[i - 1].x + (pts[i].x - pts[i - 1].x) * u,
        y: pts[i - 1].y + (pts[i].y - pts[i - 1].y) * u,
      };
      ctx.lineTo(tip.x, tip.y);
      break;
    }
    ctx.lineTo(pts[i].x, pts[i].y);
    tip = pts[i];
  }
  ctx.strokeStyle = '#5eead4';
  ctx.lineWidth = 3.2;
  ctx.shadowColor = 'rgba(94,234,212,0.7)';
  ctx.shadowBlur = 14;
  ctx.stroke();
  ctx.shadowBlur = 0;

  ctx.beginPath();
  ctx.arc(tip.x, tip.y, 7, 0, Math.PI * 2);
  ctx.fillStyle = '#f8fafc';
  ctx.fill();
  ctx.beginPath();
  ctx.arc(tip.x, tip.y, 16, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(248,250,252,0.45)';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.strokeStyle = 'rgba(94,234,212,0.35)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(tip.x - 28, tip.y - 48);
  ctx.lineTo(tip.x - 8, tip.y - 10);
  ctx.stroke();
  ctx.fillStyle = '#99f6e4';
  ctx.font = '11px "IBM Plex Mono", monospace';
  ctx.fillText('TOOL · L1  0.4 mm', tip.x - 36, tip.y - 56);
}

function ihPaintRadar(ctx, w, h, t, state) {
  if (!state.ready) {
    state.blips = [
      { r: 0.42, a: 0.6, name: 'MV CINDER', rng: '2.1 nm' },
      { r: 0.68, a: 2.2, name: 'BALTIC STAR', rng: '4.8 nm' },
      { r: 0.31, a: 4.1, name: 'PILOT 04', rng: '1.4 nm' },
      { r: 0.78, a: 5.4, name: 'TUG ORION', rng: '5.6 nm' },
      { r: 0.55, a: 3.3, name: 'HNL 220', rng: '3.2 nm' },
      { r: 0.22, a: 1.4, name: 'BERTH 12', rng: '0.7 nm' },
    ];
    state.hits = state.blips.map(() => 0);
    state.ready = true;
  }
  ctx.fillStyle = '#03110f';
  ctx.fillRect(0, 0, w, h);

  const cx = w * 0.62;
  const cy = h * 0.52;
  const R = Math.min(w, h) * 0.42;
  const sweep = (t * 0.028) % (Math.PI * 2);

  ctx.save();
  ctx.strokeStyle = 'rgba(52,211,153,0.08)';
  ctx.lineWidth = 1;
  for (let x = 0; x < w; x += 28) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
  for (let y = 0; y < h; y += 28) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }
  ctx.restore();

  ctx.beginPath();
  ctx.arc(cx, cy, R + 8, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(4, 22, 18, 0.92)';
  ctx.fill();

  ctx.strokeStyle = 'rgba(52,211,153,0.28)';
  ctx.lineWidth = 1.4;
  for (let i = 1; i <= 4; i++) {
    ctx.beginPath();
    ctx.arc(cx, cy, (R / 4) * i, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.beginPath();
  ctx.moveTo(cx - R, cy); ctx.lineTo(cx + R, cy);
  ctx.moveTo(cx, cy - R); ctx.lineTo(cx, cy + R);
  ctx.stroke();

  ctx.save();
  ctx.translate(cx, cy);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.arc(0, 0, R, sweep - 0.02, sweep + 0.7, false);
  ctx.closePath();
  const g = ctx.createRadialGradient(0, 0, 0, 0, 0, R);
  g.addColorStop(0, 'rgba(52,211,153,0.38)');
  g.addColorStop(1, 'rgba(52,211,153,0.02)');
  ctx.fillStyle = g;
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(Math.cos(sweep) * R, Math.sin(sweep) * R);
  ctx.strokeStyle = '#6ee7b7';
  ctx.lineWidth = 2.4;
  ctx.shadowColor = '#34d399';
  ctx.shadowBlur = 16;
  ctx.stroke();
  ctx.restore();

  ctx.fillStyle = 'rgba(110,231,183,0.55)';
  ctx.font = '10px "IBM Plex Mono", monospace';
  ctx.fillText('N', cx - 3, cy - R - 10);
  ctx.fillText('E', cx + R + 8, cy + 3);
  ctx.fillText('S', cx - 3, cy + R + 16);
  ctx.fillText('W', cx - R - 16, cy + 3);

  state.blips.forEach((b, i) => {
    let d = Math.abs(b.a - sweep);
    if (d > Math.PI) d = Math.PI * 2 - d;
    if (d < 0.12) state.hits[i] = 1;
    else state.hits[i] *= 0.965;
    const x = cx + Math.cos(b.a) * b.r * R;
    const y = cy + Math.sin(b.a) * b.r * R;
    const a = 0.22 + state.hits[i] * 0.78;
    ctx.beginPath();
    ctx.arc(x, y, 4.5, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(190,242,100,${a})`;
    ctx.fill();
    if (state.hits[i] > 0.35) {
      ctx.beginPath();
      ctx.arc(x, y, 11, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(190,242,100,${state.hits[i] * 0.6})`;
      ctx.stroke();
      ctx.fillStyle = `rgba(236,253,245,${state.hits[i]})`;
      ctx.font = '11px "IBM Plex Mono", monospace';
      ctx.fillText(`${b.name}  ${b.rng}`, x + 12, y - 8);
    }
  });
}

function IhNav({ brand, mark, links, cta, ink, muted, ctaBg, ctaInk, font }) {
  return (
    <nav style={{ display: 'flex', alignItems: 'center', gap: 28, padding: '24px 56px', position: 'relative', zIndex: 3, fontSize: 13.5, fontWeight: 600, color: ink, fontFamily: font }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 800, fontSize: 18, letterSpacing: '-0.03em', marginRight: 'auto' }}>
        {mark}
        {brand}
      </div>
      {links.map((l) => <span key={l} style={{ color: muted }}>{l}</span>)}
      <span style={{ padding: '10px 18px', borderRadius: 999, background: ctaBg, color: ctaInk, fontWeight: 750, fontSize: 13 }}>{cta}</span>
    </nav>
  );
}

function HeroHelix() {
  const ink = '#ecfeff';
  return (
    <div style={{ width: IhW, height: IhH, background: '#05080d', color: ink, position: 'relative', overflow: 'hidden', fontFamily: '"IBM Plex Sans", sans-serif', display: 'flex', flexDirection: 'column' }}>
      <IhCanvas paint={ihPaintHelix} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, #05080d 0%, rgba(5,8,13,0.92) 38%, rgba(5,8,13,0.18) 68%, transparent 100%)', pointerEvents: 'none', zIndex: 1 }} />
      <IhNav brand="Helix" mark={<span style={{ width: 22, height: 22, borderRadius: 6, background: 'linear-gradient(135deg,#5eead4,#fb7185)' }} />}
        links={['Platform', 'Pipeline', 'Papers', 'Contact']} cta="Book a walkthrough"
        ink={ink} muted="rgba(236,254,255,0.62)" ctaBg="#5eead4" ctaInk="#042f2e" font='"IBM Plex Sans", sans-serif' />
      <div style={{ position: 'relative', zIndex: 2, flex: 1, display: 'flex', alignItems: 'center', padding: '0 56px 48px', maxWidth: 720 }}>
        <div>
          <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 11.5, letterSpacing: '0.22em', color: '#5eead4', marginBottom: 18 }}>SEQUENCE · STRUCTURE · SYNTHESIS</div>
          <h1 style={{ margin: 0, fontSize: 64, lineHeight: 1.04, fontWeight: 700, letterSpacing: '-0.04em' }}>
            Read the genome.<br />Write the next one.
          </h1>
          <p style={{ margin: '22px 0 0', maxWidth: 460, fontSize: 17, lineHeight: 1.55, color: 'rgba(236,254,255,0.7)' }}>
            Helix is the operating layer for labs that sequence, design, and ship
            molecules — without a spreadsheet in the critical path.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 32 }}>
            <span style={{ padding: '14px 24px', borderRadius: 999, background: '#5eead4', color: '#042f2e', fontWeight: 750 }}>See a live run</span>
            <span style={{ padding: '14px 24px', borderRadius: 999, border: '1px solid rgba(94,234,212,0.35)', fontWeight: 650 }}>Read the paper</span>
          </div>
          <div style={{ display: 'flex', gap: 28, marginTop: 40, fontFamily: '"IBM Plex Mono", monospace', fontSize: 12, letterSpacing: '0.06em', color: 'rgba(236,254,255,0.55)' }}>
            <span><b style={{ color: ink, fontSize: 16 }}>48h</b> turnaround</span>
            <span><b style={{ color: ink, fontSize: 16 }}>12</b> countries</span>
            <span><b style={{ color: ink, fontSize: 16 }}>CLIA</b> ready</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroSlipstream() {
  const ink = '#f8fafc';
  return (
    <div style={{ width: IhW, height: IhH, background: '#03050a', color: ink, position: 'relative', overflow: 'hidden', fontFamily: 'Archivo, sans-serif', display: 'flex', flexDirection: 'column' }}>
      <style>{`
        @keyframes ih-slip-tach { 0%,100% { transform: rotate(-18deg); } 50% { transform: rotate(42deg); } }
        @keyframes ih-slip-blink { 0%,70% { opacity: 1; } 71%,100% { opacity: 0.15; } }
      `}</style>
      <IhCanvas paint={ihPaintSlip} seed={() => ({})} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(3,5,10,0.88) 0%, rgba(3,5,10,0.45) 46%, transparent 70%)', zIndex: 1, pointerEvents: 'none' }} />
      <IhNav brand="SLIPSTREAM" mark={<span style={{ width: 10, height: 22, background: '#facc15', transform: 'skewX(-16deg)' }} />}
        links={['Calendar', 'Teams', 'Telemetry', 'Tickets']} cta="Enter the paddock"
        ink={ink} muted="rgba(248,250,252,0.6)" ctaBg="#facc15" ctaInk="#111827" font="Archivo, sans-serif" />
      <div style={{ position: 'relative', zIndex: 2, flex: 1, display: 'grid', gridTemplateColumns: '1fr 340px', padding: '12px 56px 40px', minHeight: 0 }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 12, letterSpacing: '0.28em', color: '#67e8f9', marginBottom: 16 }}>FIA FORMULA E · ROUND 11 · BERLIN</div>
          <h1 style={{ margin: 0, fontSize: 68, lineHeight: 0.92, fontWeight: 900, fontStyle: 'italic', letterSpacing: '-0.045em', textTransform: 'uppercase' }}>
            The grid is<br />a data product.
          </h1>
          <p style={{ margin: '22px 0 0', maxWidth: 480, fontSize: 17, lineHeight: 1.5, color: 'rgba(248,250,252,0.7)' }}>
            Live aero, tire, and energy models for every car on the circuit —
            broadcast to the pit before the next braking zone.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 30 }}>
            <span style={{ padding: '14px 26px', background: '#facc15', color: '#111827', fontWeight: 800, fontStyle: 'italic', letterSpacing: '0.02em' }}>WATCH QUALI</span>
            <span style={{ padding: '14px 26px', border: '1px solid rgba(103,232,249,0.45)', color: '#67e8f9', fontWeight: 700, fontFamily: '"JetBrains Mono", monospace', fontSize: 13 }}>OPEN HUD</span>
          </div>
        </div>
        <div style={{ alignSelf: 'center', border: '1px solid rgba(103,232,249,0.28)', background: 'rgba(3,5,10,0.55)', padding: 22, fontFamily: '"JetBrains Mono", monospace' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, letterSpacing: '0.16em', color: '#67e8f9' }}>
            <span>CAR 07 · VESPER</span>
            <span style={{ color: '#facc15', animation: 'ih-slip-blink 1.1s steps(1) infinite' }}>LIVE</span>
          </div>
          <div style={{ fontSize: 52, fontWeight: 800, letterSpacing: '-0.06em', marginTop: 8 }}>312<span style={{ fontSize: 16, marginLeft: 6, opacity: 0.6 }}>km/h</span></div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 14, fontSize: 12, color: 'rgba(248,250,252,0.7)' }}>
            <div>LAP <b style={{ color: ink, fontSize: 18 }}>18</b></div>
            <div>DELTA <b style={{ color: '#4ade80', fontSize: 18 }}>−0.14</b></div>
            <div>ENERGY <b style={{ color: ink, fontSize: 18 }}>61%</b></div>
            <div>G-FORCE <b style={{ color: ink, fontSize: 18 }}>3.8</b></div>
          </div>
          <div style={{ marginTop: 18, height: 8, background: 'rgba(248,250,252,0.08)', overflow: 'hidden' }}>
            <div style={{ width: '72%', height: '100%', background: 'linear-gradient(90deg,#67e8f9,#facc15)', animation: 'ih-slip-tach 2.4s ease-in-out infinite' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroSuture() {
  const ink = '#e7fff8';
  return (
    <div style={{ width: IhW, height: IhH, background: '#071614', color: ink, position: 'relative', overflow: 'hidden', fontFamily: '"Newsreader", serif', display: 'flex', flexDirection: 'column' }}>
      <IhCanvas paint={ihPaintSuture} seed={() => ({})} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(7,22,20,0.55) 0%, rgba(7,22,20,0.15) 40%, rgba(7,22,20,0.7) 100%)', zIndex: 1, pointerEvents: 'none' }} />
      <nav style={{ display: 'flex', alignItems: 'center', gap: 26, padding: '24px 56px', position: 'relative', zIndex: 3, fontFamily: '"Inter Tight", sans-serif', fontSize: 13.5, fontWeight: 600 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 800, fontSize: 20, letterSpacing: '-0.03em', marginRight: 'auto', fontFamily: '"Newsreader", serif' }}>
          <span style={{ width: 26, height: 26, borderRadius: '50%', border: '1.5px solid #5eead4', display: 'grid', placeItems: 'center' }}>
            <span style={{ width: 8, height: 8, borderRadius: 4, background: '#5eead4' }} />
          </span>
          Suture
        </div>
        <span style={{ opacity: 0.7 }}>Systems</span>
        <span style={{ opacity: 0.7 }}>Outcomes</span>
        <span style={{ opacity: 0.7 }}>Surgeons</span>
        <span style={{ opacity: 0.7 }}>Safety</span>
        <span style={{ padding: '10px 18px', borderRadius: 999, background: '#ecfdf5', color: '#064e3b', fontWeight: 750, fontFamily: '"Inter Tight", sans-serif', fontSize: 13 }}>Request a theatre demo</span>
      </nav>
      <div style={{ position: 'relative', zIndex: 2, padding: '28px 56px 0', maxWidth: 640 }}>
        <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 11.5, letterSpacing: '0.22em', color: '#5eead4' }}>ROBOTIC MICROSURGERY · OR-4</div>
        <h1 style={{ margin: '16px 0 0', fontSize: 58, lineHeight: 1.06, fontWeight: 550, letterSpacing: '-0.03em' }}>
          A millimetre, rehearsed<br />a thousand times.
        </h1>
        <p style={{ margin: '18px 0 0', maxWidth: 470, fontSize: 18, lineHeight: 1.5, color: 'rgba(231,255,248,0.72)', fontFamily: '"Inter Tight", sans-serif' }}>
          Suture plans, traces, and verifies every instrument path before steel
          meets tissue — then follows the line in the theatre.
        </p>
        <div style={{ display: 'flex', gap: 14, marginTop: 28, fontFamily: '"Inter Tight", sans-serif' }}>
          <span style={{ padding: '13px 22px', borderRadius: 999, background: '#ecfdf5', color: '#064e3b', fontWeight: 700 }}>Watch a case</span>
          <span style={{ padding: '13px 22px', borderRadius: 999, border: '1px solid rgba(94,234,212,0.35)', fontWeight: 650 }}>FDA 510(k) · CE</span>
        </div>
      </div>
    </div>
  );
}

function HeroHarborline() {
  const ink = '#ecfdf5';
  return (
    <div style={{ width: IhW, height: IhH, background: '#03110f', color: ink, position: 'relative', overflow: 'hidden', fontFamily: '"Space Grotesk", sans-serif', display: 'flex', flexDirection: 'column' }}>
      <IhCanvas paint={ihPaintRadar} seed={() => ({})} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, #03110f 0%, rgba(3,17,15,0.88) 36%, rgba(3,17,15,0.2) 64%, transparent 100%)', zIndex: 1, pointerEvents: 'none' }} />
      <IhNav brand="Harborline" mark={<span style={{ width: 22, height: 22, borderRadius: '50%', border: '2px solid #34d399', boxShadow: '0 0 0 4px rgba(52,211,153,0.2)' }} />}
        links={['Ports', 'AIS', 'Weather', 'Docs']} cta="Port login"
        ink={ink} muted="rgba(236,253,245,0.62)" ctaBg="#34d399" ctaInk="#022c22" font='"Space Grotesk", sans-serif' />
      <div style={{ position: 'relative', zIndex: 2, flex: 1, display: 'flex', alignItems: 'center', padding: '0 56px 40px', maxWidth: 640 }}>
        <div>
          <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 11.5, letterSpacing: '0.22em', color: '#6ee7b7', marginBottom: 16 }}>TERMINAL CONTROL · ROTTERDAM</div>
          <h1 style={{ margin: 0, fontSize: 58, lineHeight: 1.05, fontWeight: 700, letterSpacing: '-0.04em' }}>
            Every berth, every<br />heading, one glass.
          </h1>
          <p style={{ margin: '20px 0 0', maxWidth: 440, fontSize: 17, lineHeight: 1.55, color: 'rgba(236,253,245,0.7)' }}>
            Harborline fuses AIS, radar, and tide into a single picture for
            pilots and berth planners working the night watch.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 30 }}>
            <span style={{ padding: '13px 22px', borderRadius: 10, background: '#34d399', color: '#022c22', fontWeight: 750 }}>Open the board</span>
            <span style={{ padding: '13px 22px', borderRadius: 10, border: '1px solid rgba(52,211,153,0.4)', fontWeight: 650 }}>Tide + 1.4 m</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function IndustryHeroes() {
  return (
    <DesignCanvas>
      <DCSection id="ih-science" title="Industry Heroes — Science & Motion"
        subtitle="Landing heroes built around a single unmissable animation: a rotating double helix, warp-speed racing streaks, a surgical path tracer, and a phosphor radar sweep.">
        <DCArtboard id="ih-helix" label="01 · Helix · DNA Spin" width={IhW} height={IhH}><HeroHelix /></DCArtboard>
        <DCArtboard id="ih-slipstream" label="02 · Slipstream · Racing HUD" width={IhW} height={IhH}><HeroSlipstream /></DCArtboard>
        <DCArtboard id="ih-suture" label="03 · Suture · Path Trace" width={IhW} height={IhH}><HeroSuture /></DCArtboard>
        <DCArtboard id="ih-harborline" label="04 · Harborline · Radar Sweep" width={IhW} height={IhH}><HeroHarborline /></DCArtboard>
      </DCSection>
      {window.IhPlaceSection ? <window.IhPlaceSection /> : null}
    </DesignCanvas>
  );
}

const industryHeroesRoot = ReactDOM.createRoot(document.getElementById('root'));
industryHeroesRoot.render(<IndustryHeroes />);
