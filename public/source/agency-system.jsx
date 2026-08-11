// ─────────────────────────────────────────────────────────────────────────────
// FIELD — shared design system for the software-agency page set.
// One brand, one type system (Archivo + JetBrains Mono), one cobalt accent.
// Loaded first; every page file reads window.FIELD and the shared chrome below.
// ─────────────────────────────────────────────────────────────────────────────
window.FIELD = {
  W: 1280,
  H: 800,
  // light surfaces
  paper: '#f4f2ec',
  ink: '#17150f',
  sub: '#6e695d',
  faint: '#9a9488',
  line: '#e2dfd5',
  lineInk: '#17150f',
  // dark surfaces
  night: '#100f0c',
  panel: '#1a1813',
  nightLine: 'rgba(240,237,228,0.11)',
  cream: '#f0ede4',
  creamSub: '#98928759',
  creamSoft: '#9b958a',
  // brand accent (single cobalt across light + dark)
  accent: '#2f49d6',
  accentSoft: '#5d72e6',
  signal: '#cdf24a', // sparing "live" lime on dark surfaces only
  // type
  mono: '"JetBrains Mono","IBM Plex Mono",ui-monospace,monospace',
  sans: '"Archivo","Inter Tight",system-ui,sans-serif',
  serif: '"Newsreader",Georgia,serif',
};

const F = window.FIELD;

// Striped image placeholder — no hand-drawn art, just a labelled block.
function Slot({ label = 'IMAGE', dark = false, style = {}, accent = false }) {
  const stripe = dark
    ? 'repeating-linear-gradient(45deg, transparent 0 13px, rgba(240,237,228,0.05) 13px 14px)'
    : 'repeating-linear-gradient(45deg, transparent 0 13px, rgba(23,21,15,0.05) 13px 14px)';
  return (
    <div style={{
      backgroundColor: dark ? '#16140f' : '#ece9e0',
      backgroundImage: stripe,
      border: `1px solid ${dark ? F.nightLine : F.line}`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: F.mono, fontSize: 10.5, letterSpacing: '0.18em',
      textTransform: 'uppercase', color: accent ? F.accent : (dark ? F.creamSoft : F.faint),
      ...style,
    }}>{label}</div>
  );
}

// Wordmark — "Field" + filled square dot.
function Mark({ dark = false, size = 19 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 9,
      fontFamily: F.sans, fontWeight: 800, fontSize: size,
      letterSpacing: '-0.03em', color: dark ? F.cream : F.ink }}>
      <span style={{ width: size * 0.46, height: size * 0.46, background: F.accent,
        display: 'inline-block', borderRadius: 1, marginTop: 1 }}></span>
      Field
    </div>
  );
}

// Shared top nav. `active` highlights the current section; `dark` flips theme.
function Nav({ dark = false, active = '', pad = '22px 48px' }) {
  const ink = dark ? F.cream : F.ink;
  const soft = dark ? F.creamSoft : F.sub;
  const links = ['Work', 'Services', 'Studio', 'Journal'];
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: pad, fontFamily: F.sans,
      borderBottom: `1px solid ${dark ? F.nightLine : F.line}` }}>
      <Mark dark={dark} />
      <div style={{ display: 'flex', gap: 30, fontSize: 13, fontWeight: 500, letterSpacing: '-0.01em' }}>
        {links.map((l) => (
          <span key={l} style={{ color: l === active ? ink : soft,
            borderBottom: l === active ? `1.5px solid ${F.accent}` : '1.5px solid transparent',
            paddingBottom: 3 }}>{l}</span>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        <span style={{ fontFamily: F.mono, fontSize: 11, letterSpacing: '0.06em', color: soft }}>
          BK / LX
        </span>
        <span style={{ background: dark ? F.cream : F.ink, color: dark ? F.ink : F.paper,
          padding: '9px 16px', borderRadius: 2, fontSize: 12.5, fontWeight: 600,
          letterSpacing: '-0.01em' }}>Start a project →</span>
      </div>
    </div>
  );
}

// Mono eyebrow label with a leading rule.
function Eyebrow({ children, dark = false, color }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 11,
      fontFamily: F.mono, fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase',
      color: color || (dark ? F.creamSoft : F.sub) }}>
      <span style={{ width: 18, height: 1, background: color || F.accent, display: 'inline-block' }}></span>
      {children}
    </div>
  );
}

// Footer — thin mono ledger row.
function Footer({ dark = false, pad = '20px 48px' }) {
  const soft = dark ? F.creamSoft : F.sub;
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: pad, borderTop: `1px solid ${dark ? F.nightLine : F.line}`,
      fontFamily: F.mono, fontSize: 11, letterSpacing: '0.04em', color: soft }}>
      <span>FIELD STUDIO © 2026</span>
      <span style={{ display: 'flex', gap: 24 }}>
        <span>Brooklyn 40.7°N</span><span>Lisbon 38.7°N</span><span>hello@field.studio</span>
      </span>
    </div>
  );
}

Object.assign(window, { Slot, Mark, Nav, Eyebrow, Footer });
