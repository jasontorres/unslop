// Eight more directions for the dedicated SaaS category: four marketing
// landings (enterprise trust, AI copilot, vertical suite, social proof) and
// four consoles (revenue desk, experiments, onboarding rollouts, API ops).
// Also mounts the whole SaaS canvas from the shared sections.

const SW2 = 1280;
const SH2 = 800;

// ─────────────────────────────────────────────────────────────────────────────
// 05. ENTERPRISE TRUST — formal GRC platform: navy + ivory, serif display,
//     compliance chips, trust-report document, enterprise wordmarks.
// ─────────────────────────────────────────────────────────────────────────────
function SaasEntrust() {
  const navy = '#142A47';
  const s = {
    root: { width: SW2, height: SH2, background: '#FFFFFF', color: navy,
      fontFamily: '"Public Sans", "Inter Tight", sans-serif', display: 'flex',
      flexDirection: 'column', overflow: 'hidden' },
    nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '20px 56px', borderBottom: '1px solid #E3E8EF' },
    brand: { fontFamily: '"DM Serif Display", serif', fontSize: 24,
      letterSpacing: '0.01em' },
    links: { display: 'flex', gap: 30, fontSize: 13, fontWeight: 600,
      color: '#4A5B70' },
    navCta: { background: navy, color: '#fff', padding: '12px 22px',
      fontSize: 13, fontWeight: 700, cursor: 'pointer' },
    main: { flex: 1, display: 'grid', gridTemplateColumns: '1.25fr 1fr',
      gap: 56, padding: '38px 56px 0', minHeight: 0 },
    eyebrow: { fontSize: 11.5, fontWeight: 700, letterSpacing: '0.24em',
      textTransform: 'uppercase', color: '#8A6D3B', marginBottom: 16 },
    h1: { fontFamily: '"DM Serif Display", serif', fontSize: 64,
      lineHeight: 1.04, margin: 0, fontWeight: 400, letterSpacing: '-0.005em' },
    ital: { fontStyle: 'italic' },
    sub: { fontSize: 16, lineHeight: 1.65, color: '#4A5B70', maxWidth: 520,
      marginTop: 16 },
    ctas: { display: 'flex', gap: 16, marginTop: 24 },
    btnNavy: { background: navy, color: '#fff', padding: '15px 26px',
      fontWeight: 700, fontSize: 14, cursor: 'pointer' },
    btnGhost: { background: 'transparent', border: `1.5px solid ${navy}`,
      color: navy, padding: '15px 24px', fontWeight: 700, fontSize: 14,
      cursor: 'pointer' },
    badges: { display: 'flex', gap: 10, marginTop: 26, flexWrap: 'wrap',
      maxWidth: 520 },
    badge: { border: '1px solid #C7D1DE', padding: '8px 14px', fontSize: 10.5,
      fontWeight: 700, letterSpacing: '0.14em', color: '#42526A',
      display: 'flex', gap: 7, alignItems: 'center' },
    reportCard: { border: '1px solid #DCE3EC', boxShadow:
      '0 24px 60px rgba(20,42,71,0.14)', padding: 0, alignSelf: 'center',
      width: 420 },
    reportHead: { background: navy, color: '#fff', padding: '16px 22px' },
    reportTitle: { fontFamily: '"DM Serif Display", serif', fontSize: 18 },
    reportSub: { fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase',
      opacity: 0.7, marginTop: 3 },
    reportRow: { display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', padding: '13px 22px',
      borderBottom: '1px solid #EDF1F6', fontSize: 13.5 },
    check: { color: '#1E7B4F', fontWeight: 800 },
    reportFoot: { padding: '13px 22px', fontSize: 11, color: '#7A8899',
      display: 'flex', justifyContent: 'space-between',
      fontFamily: '"IBM Plex Mono", monospace' },
    logos: { display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', padding: '20px 56px', color: '#9AA7B6',
      fontSize: 12, letterSpacing: '0.22em', fontWeight: 700 },
    statBand: { background: navy, color: '#fff', display: 'flex' },
    statCell: { flex: 1, padding: '18px 40px' },
    statNum: { fontFamily: '"DM Serif Display", serif', fontSize: 27 },
    statLbl: { fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
      opacity: 0.65, marginTop: 3 },
  };
  return (
    <div style={s.root}>
      <div style={s.nav}>
        <div style={s.brand}>Northwall</div>
        <div style={s.links}><span>Platform</span><span>Controls</span><span>Auditors</span><span>Pricing</span></div>
        <button style={s.navCta}>Book a briefing</button>
      </div>
      <div style={s.main}>
        <div>
          <div style={s.eyebrow}>Governance, risk &amp; compliance OS</div>
          <h1 style={s.h1}>
            The system of record<br/>for <span style={s.ital}>enterprise trust.</span>
          </h1>
          <p style={s.sub}>
            Northwall maps every control, evidence artifact, and vendor risk in
            one auditable ledger — so audits become retrieval, not archaeology.
          </p>
          <div style={s.ctas}>
            <button style={s.btnNavy}>Request a security review</button>
            <button style={s.btnGhost}>Read the framework →</button>
          </div>
          <div style={s.badges}>
            {['SOC 2 TYPE II', 'ISO 27001', 'GDPR', 'HIPAA', 'FEDRAMP HIGH'].map(b => (
              <span key={b} style={s.badge}>🛡 {b}</span>
            ))}
          </div>
        </div>
        <div style={s.reportCard}>
          <div style={s.reportHead}>
            <div style={s.reportTitle}>Q3 Trust Review</div>
            <div style={s.reportSub}>Northwind Logistics · Prepared 12 Aug</div>
          </div>
          {[
            ['Access reviews completed', '42 / 42'],
            ['Vendor risks cleared', '18 of 19'],
            ['Pen-test findings open', '0'],
            ['Evidence artifacts current', '1,204'],
          ].map(([k, v]) => (
            <div key={k} style={s.reportRow}>
              <span>{k}</span>
              <span style={s.check}>✓ {v}</span>
            </div>
          ))}
          <div style={s.reportFoot}>
            <span>SHA-256 · f3ac…9e21</span>
            <span>AUDITOR-READY</span>
          </div>
        </div>
      </div>
      <div style={s.logos}>
        <span>COLTMAN &amp; CO</span><span>BLUECREST</span><span>OTTOWAY</span>
        <span>FERNBANK</span><span>GLAS TRUST</span><span>HODGE &amp; LANE</span>
      </div>
      <div style={s.statBand}>
        <div style={s.statCell}><div style={s.statNum}>99.99%</div><div style={s.statLbl}>Platform uptime</div></div>
        <div style={s.statCell}><div style={s.statNum}>214</div><div style={s.statLbl}>Controls automated</div></div>
        <div style={s.statCell}><div style={s.statNum}>38</div><div style={s.statLbl}>Audits passed ’25</div></div>
        <div style={{...s.statCell}}><div style={s.statNum}>4.9/5</div><div style={s.statLbl}>CSO rating</div></div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 06. AI COPILOT GLOW — dark-indigo AI-native landing: glowing field, fake
//     ask-anything input, chat proof card with citation chips.
// ─────────────────────────────────────────────────────────────────────────────
function SaasCopilotGlow() {
  const s = {
    root: { width: SW2, height: SH2, background: '#0D0A1E', color: '#EFEDEA',
      fontFamily: '"Plus Jakarta Sans", "Inter Tight", sans-serif',
      display: 'flex', flexDirection: 'column', position: 'relative',
      overflow: 'hidden' },
    glowA: { position: 'absolute', width: 900, height: 620, left: -180,
      top: -240, borderRadius: '50%',
      background: 'radial-gradient(closest-side, rgba(124,92,255,0.4), transparent)',
      pointerEvents: 'none' },
    glowB: { position: 'absolute', width: 760, height: 560, right: -160,
      bottom: -220, borderRadius: '50%',
      background: 'radial-gradient(closest-side, rgba(56,189,248,0.22), transparent)',
      pointerEvents: 'none' },
    nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '22px 48px', zIndex: 3 },
    brand: { fontWeight: 800, fontSize: 19, display: 'flex', gap: 9,
      alignItems: 'center' },
    brandMark: { width: 24, height: 24, borderRadius: 8,
      background: 'linear-gradient(135deg,#7C5CFF,#38BDF8)' },
    links: { display: 'flex', gap: 26, fontSize: 13.5, color: '#A49FBE' },
    navCta: { background: '#fff', color: '#171225', borderRadius: 999,
      padding: '10px 20px', fontWeight: 800, fontSize: 13, cursor: 'pointer' },
    main: { flex: 1, display: 'grid', gridTemplateColumns: '1.15fr 1fr',
      gap: 48, padding: '30px 48px 0', minHeight: 0, zIndex: 2,
      alignItems: 'center' },
    chip: { display: 'inline-flex', gap: 8, alignItems: 'center',
      border: '1px solid rgba(168,150,255,0.4)', borderRadius: 999,
      padding: '7px 14px', fontSize: 11, fontWeight: 700,
      letterSpacing: '0.12em', color: '#C9BFFF', marginBottom: 20 },
    h1: { fontSize: 72, fontWeight: 800, lineHeight: 1.02,
      letterSpacing: '-0.04em', margin: 0 },
    grad: { background: 'linear-gradient(90deg,#A78BFA,#38BDF8)',
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
    sub: { fontSize: 16, lineHeight: 1.65, color: '#A49FBE', maxWidth: 460,
      marginTop: 16 },
    askBar: { marginTop: 26, display: 'flex', alignItems: 'center', gap: 12,
      background: 'rgba(255,255,255,0.06)', border:
      '1px solid rgba(168,150,255,0.35)', borderRadius: 999,
      padding: '10px 12px 10px 22px', maxWidth: 520 },
    askText: { flex: 1, fontSize: 14.5, color: '#8F89AB' },
    askBtn: { background: 'linear-gradient(90deg,#7C5CFF,#38BDF8)', color: '#0D0A1E',
      fontWeight: 800, borderRadius: 999, padding: '11px 20px', fontSize: 13.5,
      cursor: 'pointer' },
    micro: { fontSize: 12, color: '#7A7495', marginTop: 12,
      fontFamily: '"JetBrains Mono", monospace' },
    chatCard: { background: 'rgba(255,255,255,0.045)', border:
      '1px solid rgba(168,150,255,0.25)', borderRadius: 18, padding: '20px 22px',
      backdropFilter: 'blur(6px)', maxWidth: 460, justifySelf: 'end' },
    bubbleQ: { background: 'rgba(255,255,255,0.08)', borderRadius: '14px 14px 4px 14px',
      padding: '12px 16px', fontSize: 14, width: 'fit-content',
      marginLeft: 'auto', maxWidth: 360 },
    bubbleA: { background: 'linear-gradient(135deg,rgba(124,92,255,0.35),rgba(56,189,248,0.16))',
      borderRadius: '14px 14px 14px 4px', padding: '14px 16px', fontSize: 13.5,
      lineHeight: 1.55, marginTop: 12, maxWidth: 380 },
    citeRow: { display: 'flex', gap: 8, marginTop: 12, flexWrap: 'wrap' },
    cite: { fontFamily: '"JetBrains Mono", monospace', fontSize: 10.5,
      border: '1px solid rgba(168,150,255,0.45)', color: '#C9BFFF',
      borderRadius: 6, padding: '4px 8px' },
    suggestRow: { display: 'flex', gap: 8, marginTop: 14 },
    suggest: { fontSize: 11.5, color: '#8F89AB', border:
      '1px dashed rgba(168,150,255,0.35)', borderRadius: 999,
      padding: '6px 12px' },
    floatChip: { position: 'absolute', top: 138, right: 56,
      background: '#171225', border: '1px solid rgba(168,150,255,0.4)',
      borderRadius: 999, padding: '8px 14px', fontSize: 11, color: '#C9BFFF',
      fontFamily: '"JetBrains Mono", monospace', zIndex: 4 },
    bentoFoot: { display: 'flex', gap: 30, justifyContent: 'center',
      padding: '22px 0 26px', fontSize: 12, color: '#7A7495', zIndex: 2,
      fontFamily: '"JetBrains Mono", monospace' },
  };
  return (
    <div style={s.root}>
      <div style={s.glowA}></div>
      <div style={s.glowB}></div>
      <div style={s.nav}>
        <div style={s.brand}><span style={s.brandMark}></span> tandem</div>
        <div style={s.links}><span>Product</span><span>Changelog</span><span>Docs</span><span>Pricing</span></div>
        <button style={s.navCta}>Try the beta</button>
      </div>
      <div style={s.main}>
        <div>
          <div style={s.chip}>✦ TANDEM FOR TEAMS — NOW IN BETA</div>
          <h1 style={s.h1}>
            Ask your company<br/><span style={s.grad}>anything.</span>
          </h1>
          <p style={s.sub}>
            Tandem sits in every call, doc, and thread, then answers with the
            receipt — who said it, when, and where it lives.
          </p>
          <div style={s.askBar}>
            <span style={s.askText}>Where did we land on pricing v3…</span>
            <button style={s.askBtn}>Ask ↵</button>
          </div>
          <div style={s.micro}>SOURCES CITED · NOTHING LEAVES YOUR WORKSPACE</div>
        </div>
        <div style={s.chatCard}>
          <div style={s.bubbleQ}>What did we promise Acme in the Q3 call?</div>
          <div style={s.bubbleA}>
            You committed to SSO on the enterprise tier by Oct 1, a 14-day
            pilot of the audit API, and founder office hours twice a month.
            The discount was left “pending legal” — no number was agreed.
          </div>
          <div style={s.citeRow}>
            <span style={s.cite}>#q3-acme</span><span style={s.cite}>#pricing</span>
            <span style={s.cite}>call · 05.12 · 41:08</span>
          </div>
          <div style={s.suggestRow}>
            <span style={s.suggest}>Draft the follow-up email →</span>
            <span style={s.suggest}>Who owns SSO?</span>
          </div>
        </div>
      </div>
      <div style={s.floatChip}>12,400 answers this week</div>
      <div style={s.bentoFoot}>
        <span>SOC 2 TYPE II</span><span>·</span><span>SSO / SCIM</span><span>·</span>
        <span>RETENTION YOU CONTROL</span><span>·</span><span>42 EDGE REGIONS</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 07. VERTICAL SUITE — warm booking OS for local studios: mini week calendar,
//     next-opening card, SMS reminder bubble, vertical chips.
// ─────────────────────────────────────────────────────────────────────────────
function SaasSlotwise() {
  const ink = '#33261A';
  const terra = '#C4552D';
  const sage = '#7C8B6F';
  const s = {
    root: { width: SW2, height: SH2, background: '#FAF3E8', color: ink,
      fontFamily: '"Outfit", "DM Sans", sans-serif', display: 'flex',
      flexDirection: 'column', overflow: 'hidden', position: 'relative' },
    blob: { position: 'absolute', right: -140, top: -160, width: 480,
      height: 480, borderRadius: '50%', background: '#F1E2CC' },
    nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '24px 52px', zIndex: 3 },
    brand: { fontWeight: 800, fontSize: 21, display: 'flex', gap: 9,
      alignItems: 'center' },
    brandDot: { width: 14, height: 14, borderRadius: '50%', background: terra },
    links: { display: 'flex', gap: 26, fontSize: 14.5, fontWeight: 600,
      color: '#6B5A48' },
    navCta: { background: ink, color: '#FAF3E8', borderRadius: 12,
      padding: '11px 20px', fontWeight: 700, fontSize: 14, cursor: 'pointer' },
    main: { flex: 1, display: 'grid', gridTemplateColumns: '1.1fr 1fr',
      gap: 48, padding: '18px 52px 0', minHeight: 0, zIndex: 2 },
    eyebrow: { fontSize: 12, fontWeight: 800, letterSpacing: '0.2em',
      textTransform: 'uppercase', color: terra, marginBottom: 14 },
    h1: { fontSize: 76, fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.03em',
      margin: 0 },
    underline: { position: 'relative', display: 'inline-block' },
    sub: { fontSize: 16.5, lineHeight: 1.6, color: '#6B5A48', maxWidth: 460,
      marginTop: 18 },
    vertChips: { display: 'flex', gap: 10, marginTop: 20, flexWrap: 'wrap' },
    vchip: { background: '#fff', borderRadius: 999, padding: '8px 16px',
      fontSize: 13, fontWeight: 700, color: '#6B5A48',
      border: '1px solid #E8DAC4' },
    ctas: { display: 'flex', gap: 14, marginTop: 24, alignItems: 'center' },
    btnTerra: { background: terra, color: '#fff', borderRadius: 12,
      padding: '15px 26px', fontWeight: 800, fontSize: 15, cursor: 'pointer' },
    btnGhost: { background: 'transparent', border: `1.5px solid ${ink}`,
      color: ink, borderRadius: 12, padding: '15px 22px', fontWeight: 700,
      fontSize: 14, cursor: 'pointer' },
    calCol: { position: 'relative', zIndex: 2 },
    calCard: { background: '#fff', borderRadius: 18, padding: '20px 22px',
      boxShadow: '0 24px 54px rgba(80,55,20,0.16)', width: 470 },
    calHead: { display: 'flex', justifyContent: 'space-between',
      alignItems: 'baseline', marginBottom: 14 },
    calTitle: { fontWeight: 800, fontSize: 17 },
    calSub: { fontSize: 12, color: '#A08B72' },
    weekRow: { display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 8 },
    dayCol: { display: 'flex', flexDirection: 'column', gap: 6 },
    dayLbl: { fontSize: 10.5, fontWeight: 800, color: '#A08B72',
      textAlign: 'center', letterSpacing: '0.06em' },
    slot: (c, h) => ({ height: h, borderRadius: 7, background: c, opacity: 0.92 }),
    slotFree: { height: 16, borderRadius: 7, border: '1.5px dashed #D9C9AF' },
    nextCard: { position: 'absolute', left: -34, bottom: 96,
      background: ink, color: '#FAF3E8', borderRadius: 14,
      padding: '14px 18px', display: 'flex', gap: 14, alignItems: 'center',
      boxShadow: '0 16px 40px rgba(51,38,26,0.35)' },
    nextTime: { fontWeight: 800, fontSize: 18 },
    nextLbl: { fontSize: 10.5, letterSpacing: '0.12em', textTransform: 'uppercase',
      opacity: 0.7 },
    nextBtn: { background: terra, color: '#fff', borderRadius: 9,
      padding: '9px 13px', fontWeight: 800, fontSize: 12, cursor: 'pointer' },
    smsBubble: { position: 'absolute', right: 8, top: -22,
      background: '#fff', borderRadius: '16px 16px 4px 16px',
      padding: '12px 16px', fontSize: 12.5, color: '#4E4132',
      boxShadow: '0 12px 30px rgba(80,55,20,0.18)', maxWidth: 300 },
    smsMeta: { fontSize: 10, color: '#A08B72', marginTop: 5,
      letterSpacing: '0.08em' },
  };
  return (
    <div style={s.root}>
      <div style={s.blob}></div>
      <div style={s.nav}>
        <div style={s.brand}><span style={s.brandDot}></span> slotwise</div>
        <div style={s.links}><span>Calendar</span><span>Clients</span><span>Payments</span><span>Pricing</span></div>
        <button style={s.navCta}>Start free</button>
      </div>
      <div style={s.main}>
        <div>
          <div style={s.eyebrow}>For studios, salons &amp; specialists</div>
          <h1 style={s.h1}>
            The <span style={s.underline}>front desk<span style={{ position: 'absolute', left: 0, right: 0, bottom: -8 }}>
              <svg width="100%" height="12" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path d="M2 8 C 40 2, 80 11, 120 6 S 180 3, 198 7" fill="none" stroke={terra} strokeWidth="4" strokeLinecap="round"/>
              </svg></span></span> your<br/>studio deserved.
          </h1>
          <p style={s.sub}>
            Bookings, reminders, no-show fees, and payouts in one friendly
            calendar. Set up between clients — most do it in 20 minutes.
          </p>
          <div style={s.vertChips}>
            <span style={s.vchip}>💈 Barbershops</span>
            <span style={s.vchip}>🧘 Yoga studios</span>
            <span style={s.vchip}>📚 Tutors</span>
            <span style={s.vchip}>🦷 Clinics</span>
          </div>
          <div style={s.ctas}>
            <button style={s.btnTerra}>Try 30 days free</button>
            <button style={s.btnGhost}>▶ Watch a demo</button>
          </div>
        </div>
        <div style={s.calCol}>
          <div style={s.smsBubble}>
            Reminder: Acrylics w/ Dana — Thu 10:00. Reply <b>R</b> to confirm.
            <div style={s.smsMeta}>SENT AUTOMATICALLY · 24H BEFORE</div>
          </div>
          <div style={s.calCard}>
            <div style={s.calHead}>
              <span style={s.calTitle}>This week · Dana’s chair</span>
              <span style={s.calSub}>14 bookings · 2 gaps to fill</span>
            </div>
            <div style={s.weekRow}>
              {[['MON',[['#C4552D',26],['#7C8B6F',16]]],
                ['TUE',[['#E8B84B',16],['#C4552D',26]]],
                ['WED',[['#7C8B6F',26]]],
                ['THU',[['#C4552D',16],['#E8B84B',26]]],
                ['FRI',[['#7C8B6F',16],['#C4552D',16]]],
                ['SAT',[['#C4552D',26],['#7C8B6F',16],['#E8B84B',16]]]].map(([d, slots]) => (
                <div key={d} style={s.dayCol}>
                  <div style={s.dayLbl}>{d}</div>
                  {slots.map(([c, h], i) => <div key={i} style={{ ...s.slot(c, h) }}></div>)}
                  <div style={s.slotFree}></div>
                </div>
              ))}
            </div>
          </div>
          <div style={s.nextCard}>
            <div>
              <div style={s.nextLbl}>Next opening</div>
              <div style={s.nextTime}>Today · 15:30</div>
            </div>
            <button style={s.nextBtn}>Fill gap →</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 08. SOCIAL PROOF WALL — testimonial-first landing: avatar stack, centered
//     claim, masonry wall of praise cards with a pinned highlight.
// ─────────────────────────────────────────────────────────────────────────────
function SaasKudos() {
  const blue = '#2F6BFF';
  const s = {
    root: { width: SW2, height: SH2, background: '#F4F6F9', color: '#171C26',
      fontFamily: '"Inter Tight", "Public Sans", sans-serif', display: 'flex',
      flexDirection: 'column', overflow: 'hidden' },
    nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '18px 44px', fontSize: 13.5 },
    brand: { fontWeight: 800, fontSize: 18, letterSpacing: '-0.02em' },
    links: { display: 'flex', gap: 24, color: '#5A6474', fontWeight: 600 },
    navCta: { background: blue, color: '#fff', borderRadius: 999,
      padding: '9px 18px', fontWeight: 700, fontSize: 13, cursor: 'pointer' },
    hero: { textAlign: 'center', padding: '16px 0 6px' },
    avatarRow: { display: 'flex', justifyContent: 'center', marginBottom: 12 },
    avatar: (c, i) => ({ width: 30, height: 30, borderRadius: '50%',
      background: c, border: '2.5px solid #F4F6F9', marginLeft: i ? -9 : 0,
      color: '#fff', fontSize: 11, fontWeight: 800, display: 'grid',
      placeItems: 'center' }),
    h1: { fontSize: 62, fontWeight: 800, letterSpacing: '-0.04em',
      lineHeight: 1.02, margin: 0 },
    gradInk: { color: blue },
    sub: { fontSize: 16, color: '#5A6474', maxWidth: 520, margin: '12px auto 0',
      lineHeight: 1.55 },
    ctas: { display: 'flex', gap: 12, justifyContent: 'center', marginTop: 20,
      alignItems: 'center' },
    ctaPrimary: { background: '#171C26', color: '#fff', borderRadius: 999,
      padding: '13px 24px', fontWeight: 700, fontSize: 14, cursor: 'pointer' },
    ctaGhost: { background: 'transparent', border: '1px solid #C9D1DC',
      color: '#171C26', borderRadius: 999, padding: '13px 20px',
      fontWeight: 700, fontSize: 14, cursor: 'pointer' },
    stars: { fontSize: 12.5, color: '#5A6474', marginTop: 12 },
    star: { color: '#F5A623' },
    wall: { flex: 1, minHeight: 0, display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)', gap: 14,
      padding: '18px 44px 30px', alignContent: 'start' },
    card: { background: '#fff', borderRadius: 14, padding: '16px 18px',
      boxShadow: '0 8px 24px rgba(23,28,38,0.06)',
      display: 'flex', flexDirection: 'column', gap: 8 },
    cardTop: { display: 'flex', gap: 10, alignItems: 'center' },
    cAvatar: (c) => ({ width: 34, height: 34, borderRadius: '50%',
      background: c, color: '#fff', fontWeight: 800, fontSize: 12,
      display: 'grid', placeItems: 'center' }),
    cName: { fontSize: 13, fontWeight: 800 },
    cHandle: { fontSize: 11.5, color: '#8A94A4' },
    cText: { fontSize: 13.5, lineHeight: 1.5, color: '#333B49' },
    cFoot: { fontSize: 11.5, color: '#8A94A4', display: 'flex', gap: 16 },
    pinned: { border: `1.5px solid ${blue}`, background: '#F0F4FF' },
    pinTag: { fontSize: 9.5, fontWeight: 800, letterSpacing: '0.14em',
      color: blue },
  };
  const cards = [
    ['MK', 'Mara Kessler', '@marabuilds', 'Kudos turned our support inbox into a marketing channel. Screenshot the wall into every board deck now.', '#7C5CFF', '♥ 342'],
    ['JO', 'Jon Okafor', '@jonokafor', 'Set up on a Tuesday, first wall shipped Thursday. The Slack praise sync is stupidly good.', '#2F6BFF', '♥ 218'],
    ['AL', 'Ana Lisboa', '@anal_dp', 'Our candidates mention the testimonial wall in interviews. It closed two senior hires for us.', '#E0509A', '♥ 187'],
    ['TW', 'Theo Waltz', '@theowaltz', 'Replaced a Notion page, a Zapier loop, and someone’s Friday. Worth it for the Friday alone.', '#12946A', '♥ 156'],
    ['PS', 'Priya Shah', '@priyaships', 'The “kind word → case study” pipeline is the unsexy superpower every team needs.', '#F5A623', '♥ 141'],
    ['DM', 'Diego Marín', '@dmarin', 'We pin customer wins to the wall in retro. Morale metric went up and to the right.', '#C4552D', '♥ 98'],
  ];
  return (
    <div style={s.root}>
      <div style={s.nav}>
        <div style={s.brand}>kudos</div>
        <div style={s.links}><span>Product</span><span>Walls</span><span>Integrations</span><span>Pricing</span></div>
        <button style={s.navCta}>Start collecting</button>
      </div>
      <div style={s.hero}>
        <div style={s.avatarRow}>
          {['#7C5CFF', '#E0509A', '#12946A', '#F5A623', '#2F6BFF'].map((c, i) => (
            <span key={i} style={s.avatar(c, i)}>{['M', 'J', 'A', 'T', 'P'][i]}</span>
          ))}
        </div>
        <h1 style={s.h1}>
          Every kind word,<br/><span style={s.gradInk}>on one wall.</span>
        </h1>
        <p style={s.sub}>
          Kudos catches praise from Slack, email, and support, gets permission
          automatically, and turns it into a wall your prospects stalk.
        </p>
        <div style={s.ctas}>
          <button style={s.ctaPrimary}>Build your wall — free</button>
          <button style={s.ctaGhost}>See a live wall →</button>
        </div>
        <div style={s.stars}>
          <span style={s.star}>★★★★★</span> 4.9 across 800+ reviews · G2 “Best ROI” ’26
        </div>
      </div>
      <div style={s.wall}>
        {cards.map(([init, name, handle, text, color, likes], i) => (
          <div key={handle} style={{ ...s.card, ...(i === 1 ? s.pinned : {}) }}>
            {i === 1 ? <span style={s.pinTag}>📌 PINNED</span> : null}
            <div style={s.cardTop}>
              <span style={s.cAvatar(color)}>{init}</span>
              <span><span style={s.cName}>{name}</span><br/>
                <span style={s.cHandle}>{handle}</span></span>
            </div>
            <div style={s.cText}>{text}</div>
            <div style={s.cFoot}><span>{likes}</span><span>via Slack</span><span>↗ wall / social-proof</span></div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 17. TALLYLINE · REVENUE DESK — warm-light finance console: KPI row, MRR
//     waterfall, forecast table, renewals list.
// ─────────────────────────────────────────────────────────────────────────────
function SaasTallyline() {
  const ink = '#241F18';
  const s = {
    root: { width: SW2, height: SH2, background: '#FAF9F6', color: ink,
      fontFamily: '"Manrope", "Inter Tight", sans-serif', display: 'flex',
      overflow: 'hidden' },
    side: { width: 228, flexShrink: 0, background: '#FFFFFF',
      borderRight: '1px solid #E9E4DA', display: 'flex', flexDirection: 'column',
      padding: '20px 14px' },
    brand: { fontWeight: 800, fontSize: 17, display: 'flex', gap: 9,
      alignItems: 'center', padding: '0 10px 18px' },
    bMark: { width: 22, height: 22, borderRadius: 7, background: '#C4552D' },
    navLbl: { fontSize: 9.5, fontWeight: 800, letterSpacing: '0.16em',
      color: '#A39A8B', padding: '0 10px', margin: '12px 0 6px' },
    navItem: (active) => ({ padding: '8px 10px', borderRadius: 8,
      fontSize: 13, fontWeight: active ? 800 : 600,
      background: active ? '#F4EDE1' : 'transparent',
      color: active ? ink : '#6E655A', marginBottom: 2 }),
    user: { marginTop: 'auto', display: 'flex', gap: 10, alignItems: 'center',
      padding: '10px', borderTop: '1px solid #E9E4DA' },
    uAvatar: { width: 30, height: 30, borderRadius: '50%', background: '#C4552D',
      color: '#fff', fontSize: 11, fontWeight: 800, display: 'grid',
      placeItems: 'center' },
    main: { flex: 1, padding: '22px 26px', display: 'flex',
      flexDirection: 'column', minWidth: 0 },
    head: { display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', marginBottom: 16 },
    title: { fontSize: 21, fontWeight: 800, letterSpacing: '-0.02em' },
    titleSub: { fontSize: 12, color: '#8C8271', marginTop: 2 },
    headBtns: { display: 'flex', gap: 8 },
    chipBtn: { background: '#fff', border: '1px solid #E3DCCC',
      borderRadius: 9, padding: '8px 14px', fontSize: 12, fontWeight: 700,
      color: '#6E655A', cursor: 'pointer' },
    chipBtnDark: { background: ink, color: '#FAF9F6', border: `1px solid ${ink}`,
      borderRadius: 9, padding: '8px 14px', fontSize: 12, fontWeight: 700,
      cursor: 'pointer' },
    kpiRow: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 },
    kpi: { background: '#fff', border: '1px solid #E9E4DA', borderRadius: 12,
      padding: '13px 16px' },
    kpiLbl: { fontSize: 10, fontWeight: 800, letterSpacing: '0.12em',
      color: '#8C8271', textTransform: 'uppercase' },
    kpiVal: { fontSize: 22, fontWeight: 800, letterSpacing: '-0.02em',
      marginTop: 4, fontFamily: '"IBM Plex Mono", monospace' },
    kpiDelta: (good) => ({ fontSize: 11, fontWeight: 800, marginTop: 3,
      color: good ? '#1E7B4F' : '#B03A2E' }),
    grid: { flex: 1, display: 'grid',
      gridTemplateColumns: '1.5fr 1fr', gap: 12, marginTop: 12, minHeight: 0 },
    panel: { background: '#fff', border: '1px solid #E9E4DA',
      borderRadius: 12, padding: '14px 16px', display: 'flex',
      flexDirection: 'column', minWidth: 0 },
    panelHead: { display: 'flex', justifyContent: 'space-between',
      fontSize: 11, fontWeight: 800, letterSpacing: '0.1em',
      textTransform: 'uppercase', color: '#8C8271', marginBottom: 10 },
    waterfall: { height: 210, display: 'flex', alignItems: 'flex-end', gap: 14,
      borderBottom: '1px solid #EFE9DE', paddingBottom: 2 },
    wcol: { flex: 1, display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'flex-end', gap: 6,
      alignSelf: 'stretch' },
    wbar: (h, c) => ({ width: '100%', height: h, borderRadius: 6,
      background: c, flexShrink: 0 }),
    wlbl: { fontSize: 10, fontWeight: 700, color: '#8C8271' },
    wval: (pos) => ({ fontSize: 10.5, fontWeight: 800,
      color: pos ? '#1E7B4F' : '#B03A2E', fontFamily: '"IBM Plex Mono", monospace' }),
    fRow: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr',
      padding: '9px 0', borderBottom: '1px solid #F1ECE1', fontSize: 12.5,
      fontWeight: 600, alignItems: 'center' },
    fHead: { fontSize: 9.5, fontWeight: 800, letterSpacing: '0.12em',
      color: '#A39A8B', textTransform: 'uppercase' },
    fNum: { fontFamily: '"IBM Plex Mono", monospace', fontWeight: 700 },
    mover: { display: 'flex', justifyContent: 'space-between', fontSize: 12.5,
      padding: '8px 0', borderBottom: '1px solid #F1ECE1' },
  };
  return (
    <div style={s.root}>
      <div style={s.side}>
        <div style={s.brand}><span style={s.bMark}></span> Tallyline</div>
        <div style={s.navLbl}>REVENUE</div>
        <div style={s.navItem(true)}>Revenue desk</div>
        <div style={s.navItem()}>Pipeline</div>
        <div style={s.navItem()}>Renewals</div>
        <div style={s.navLbl}>ANALYZE</div>
        <div style={s.navItem()}>Churn cohorts</div>
        <div style={s.navItem()}>Forecasts</div>
        <div style={s.navItem()}>Reports</div>
        <div style={s.user}>
          <span style={s.uAvatar}>RH</span>
          <span><div style={{ fontSize: 12, fontWeight: 800 }}>Rosa Herrán</div>
            <div style={{ fontSize: 10.5, color: '#8C8271' }}>VP Finance</div></span>
        </div>
      </div>
      <div style={s.main}>
        <div style={s.head}>
          <div><div style={s.title}>Revenue desk</div>
            <div style={s.titleSub}>Q3 · Jul 1 — Sep 30 · commit basis</div></div>
          <div style={s.headBtns}>
            <button style={s.chipBtn}>Compare…</button>
            <button style={s.chipBtn}>Export</button>
            <button style={s.chipBtnDark}>Close quarter</button>
          </div>
        </div>
        <div style={s.kpiRow}>
          <div style={s.kpi}><div style={s.kpiLbl}>ARR</div>
            <div style={s.kpiVal}>$48.2M</div>
            <div style={s.kpiDelta(true)}>▲ 18% YoY</div></div>
          <div style={s.kpi}><div style={s.kpiLbl}>Net revenue retention</div>
            <div style={s.kpiVal}>114%</div>
            <div style={s.kpiDelta(true)}>▲ 2pts QoQ</div></div>
          <div style={s.kpi}><div style={s.kpiLbl}>Pipeline coverage</div>
            <div style={s.kpiVal}>3.4×</div>
            <div style={s.kpiDelta(false)}>▼ target 4.0×</div></div>
          <div style={s.kpi}><div style={s.kpiLbl}>Q3 forecast</div>
            <div style={s.kpiVal}>$12.9M</div>
            <div style={s.kpiDelta(true)}>± 4% band</div></div>
        </div>
        <div style={s.grid}>
          <div style={s.panel}>
            <div style={s.panelHead}><span>MRR waterfall · August</span><span>+$467k net</span></div>
            <div style={s.waterfall}>
              {[['New', 150, '#1E7B4F', '+412k', true],
                ['Expansion', 96, '#5FA97C', '+268k', true],
                ['Recovery', 28, '#A9C9B4', '+58k', true],
                ['Base', 186, '#E4DCCB', '2,890k', null],
                ['Churn', 70, '#D98E85', '−194k', false],
                ['Downgrade', 34, '#EBC0BA', '−77k', false]].map(([lbl, h, c, v, pos]) => (
                <div key={lbl} style={s.wcol}>
                  <span style={pos === null ? { ...s.wval(true), color: ink } : s.wval(pos)}>{v}</span>
                  <div style={{ ...s.wbar(h, c), flex: 'none' }}></div>
                  <span style={s.wlbl}>{lbl}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minHeight: 0 }}>
            <div style={s.panel}>
              <div style={s.panelHead}><span>Forecast · commit vs best</span></div>
              {[['Jul', '$3.9M', '$4.1M'], ['Aug', '$4.2M', '$4.5M'],
                ['Sep', '$4.8M', '$5.3M']].map(([m, c, b]) => (
                <div key={m} style={s.fRow}>
                  <span>{m}</span><span style={s.fNum}>{c}</span>
                  <span style={s.fHead}>best</span><span style={s.fNum}>{b}</span>
                </div>
              ))}
            </div>
            <div style={{ ...s.panel, flex: 1 }}>
              <div style={s.panelHead}><span>Renewals · next 30d</span><span>$1.8M</span></div>
              {[['Bluecrest Health', '$412k'], ['Fernbank Group', '$268k'],
                ['Ottoway Retail', '$190k']].map(([n, v]) => (
                <div key={n} style={s.mover}><span>{n}</span>
                  <span style={s.fNum}>{v}</span></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 18. SPLITRUN · EXPERIMENT BOARD — dark testing console: variant duel bars,
//     significance meter, guardrails, allocation strip.
// ─────────────────────────────────────────────────────────────────────────────
function SaasSplitrun() {
  const s = {
    root: { width: SW2, height: SH2, background: '#0F1013', color: '#E8EAF0',
      fontFamily: '"Plus Jakarta Sans", sans-serif', display: 'flex',
      overflow: 'hidden' },
    side: { width: 228, flexShrink: 0, background: '#0A0B0E',
      borderRight: '1px solid #1E2027', display: 'flex', flexDirection: 'column',
      padding: '20px 14px' },
    brand: { fontWeight: 800, fontSize: 17, display: 'flex', gap: 9,
      alignItems: 'center', padding: '0 10px 18px' },
    bMark: { width: 22, height: 22, borderRadius: 7,
      background: 'linear-gradient(135deg,#55C7FF,#8B7CFF)' },
    navLbl: { fontSize: 9.5, fontWeight: 800, letterSpacing: '0.16em',
      color: '#5E6372', padding: '0 10px', margin: '12px 0 6px' },
    navItem: (active) => ({ padding: '8px 10px', borderRadius: 8,
      fontSize: 13, fontWeight: active ? 800 : 600,
      background: active ? '#171A21' : 'transparent',
      color: active ? '#E8EAF0' : '#8A90A0', marginBottom: 2 }),
    main: { flex: 1, padding: '22px 26px', display: 'flex',
      flexDirection: 'column', minWidth: 0 },
    head: { display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', marginBottom: 14 },
    title: { fontSize: 20, fontWeight: 800, letterSpacing: '-0.02em' },
    sub: { fontSize: 12, color: '#8A90A0', marginTop: 2 },
    pill: (c, bg) => ({ fontSize: 10.5, fontWeight: 800, color: c,
      background: bg, borderRadius: 999, padding: '5px 12px',
      letterSpacing: '0.08em' }),
    grid: { flex: 1, display: 'grid', gridTemplateColumns: '1fr 1.5fr',
      gap: 14, minHeight: 0 },
    panel: { background: '#14161C', border: '1px solid #232630',
      borderRadius: 14, padding: '16px 18px', display: 'flex',
      flexDirection: 'column', minWidth: 0 },
    expRow: (active) => ({ padding: '12px 12px', borderRadius: 10,
      background: active ? '#1B1E27' : 'transparent',
      border: active ? '1px solid #2A2E3B' : '1px solid transparent',
      marginBottom: 6 }),
    expName: { fontSize: 13.5, fontWeight: 800, display: 'flex',
      justifyContent: 'space-between', alignItems: 'center' },
    expMeta: { fontSize: 11, color: '#8A90A0', marginTop: 3 },
    variantRow: { marginBottom: 16 },
    vHead: { display: 'flex', justifyContent: 'space-between', fontSize: 12,
      fontWeight: 700, marginBottom: 6 },
    vTrack: { height: 18, borderRadius: 9, background: '#1E212B',
      position: 'relative', overflow: 'hidden' },
    vFill: (w, c) => ({ position: 'absolute', left: 0, top: 0, bottom: 0,
      width: `${w}%`, borderRadius: 9, background: c }),
    liftBadge: { display: 'inline-flex', alignItems: 'center', gap: 8,
      background: 'rgba(85,199,255,0.12)', border: '1px solid rgba(85,199,255,0.4)',
      color: '#55C7FF', fontWeight: 800, borderRadius: 10,
      padding: '10px 14px', fontSize: 14 },
    sigLbl: { display: 'flex', justifyContent: 'space-between', fontSize: 11,
      color: '#8A90A0', margin: '6px 0 6px' },
    sigTrack: { height: 10, borderRadius: 5, background: '#1E212B',
      position: 'relative' },
    sigFill: { position: 'absolute', left: 0, top: 0, bottom: 0, width: '97%',
      borderRadius: 5, background: 'linear-gradient(90deg,#8B7CFF,#55C7FF)' },
    sigMark: { position: 'absolute', left: '95%', top: -4, bottom: -4,
      width: 2, background: '#4A4F60' },
    guard: { display: 'flex', justifyContent: 'space-between', fontSize: 12.5,
      padding: '9px 0', borderBottom: '1px solid #1E212B' },
    good: { color: '#5EE39A', fontWeight: 800 },
    bad: { color: '#FF8A8A', fontWeight: 800 },
    alloc: { display: 'flex', height: 26, borderRadius: 8, overflow: 'hidden',
      marginTop: 'auto' },
    shipBtn: { background: '#55C7FF', color: '#0A0B0E', fontWeight: 800,
      borderRadius: 10, padding: '13px 20px', fontSize: 13.5, cursor: 'pointer',
      border: 'none', marginTop: 12 },
  };
  return (
    <div style={s.root}>
      <div style={s.side}>
        <div style={s.brand}><span style={s.bMark}></span> Splitrun</div>
        <div style={s.navLbl}>TESTING</div>
        <div style={s.navItem(true)}>Experiments</div>
        <div style={s.navItem()}>Feature flags</div>
        <div style={s.navItem()}>Audiences</div>
        <div style={s.navLbl}>RESULTS</div>
        <div style={s.navItem()}>Scorecards</div>
        <div style={s.navItem()}>Metrics hub</div>
      </div>
      <div style={s.main}>
        <div style={s.head}>
          <div><div style={s.title}>Experiments · Checkout funnel</div>
            <div style={s.sub}>84,412 sessions · 19 days running · updated 4 min ago</div></div>
          <span style={s.pill('#55C7FF', 'rgba(85,199,255,0.12)')}>RUNNING · DAY 19 / 21</span>
        </div>
        <div style={s.grid}>
          <div style={s.panel}>
            <div style={{ ...s.panelHead, marginBottom: 12 }}><span>All experiments</span></div>
            {[['checkout · 3-step vs one-page', 'Mara K. · funnel', true],
              ['pricing · anchor tiers', 'Jon O. · pricing', false],
              ['onboarding · checklist v4', 'Priya S. · growth', false],
              ['upgrade · annual nudge', 'Theo W. · billing', false]].map(([n, m, act]) => (
              <div key={n} style={s.expRow(act)}>
                <div style={s.expName}><span>{n}</span>
                  {act ? <span style={{ ...s.pill('#5EE39A', 'rgba(94,227,154,0.12)') }}>LIVE</span>
                    : <span style={{ ...s.pill('#8A90A0', '#1B1E27') }}>QUEUED</span>}</div>
                <div style={s.expMeta}>{m}</div>
              </div>
            ))}
          </div>
          <div style={s.panel}>
            <div style={s.panelHead}><span>checkout-3step · paid conversion / session</span></div>
            <div style={s.variantRow}>
              <div style={s.vHead}><span>A · one-page (control)</span><span>2.31%</span></div>
              <div style={s.vTrack}><div style={s.vFill(58, '#3A3F52')}></div></div>
            </div>
            <div style={s.variantRow}>
              <div style={s.vHead}><span>B · 3-step w/ progress</span><span style={{ color: '#55C7FF' }}>2.60%</span></div>
              <div style={s.vTrack}><div style={s.vFill(65, 'linear-gradient(90deg,#8B7CFF,#55C7FF)')}></div></div>
            </div>
            <div style={s.liftBadge}>▲ +12.4% relative lift</div>
            <div style={{ marginTop: 14 }}>
              <div style={s.sigLbl}><span>Significance (Bayesian)</span><span>97% — winner likely</span></div>
              <div style={s.sigTrack}><div style={s.sigFill}></div><div style={s.sigMark}></div></div>
            </div>
            <div style={{ marginTop: 12 }}>
              <div style={s.panelHead}><span>Guardrails</span></div>
              <div style={s.guard}><span>Refund rate</span><span className={s.good}>−0.08pts ✓</span></div>
              <div style={{ ...s.guard, borderBottom: 'none' }}>
                <span>Support tickets / 1k</span><span className={s.good}>−3% ✓</span></div>
            </div>
            <div style={{ marginTop: 10 }}>
              <div style={s.sigLbl}><span>Traffic allocation</span><span>50 / 50</span></div>
              <div style={s.alloc}>
                <div style={{ width: '50%', background: '#3A3F52' }}></div>
                <div style={{ width: '50%', background: 'linear-gradient(90deg,#8B7CFF,#55C7FF)' }}></div>
              </div>
            </div>
            <div style={{ ...s.panelHead, marginTop: 'auto', marginBottom: 6 }}>
              <span>DECISION LOG</span><span>2 SLOTS OPEN FRI</span></div>
            {[['pricing · anchor tiers', 'queued for review'],
              ['upgrade · annual nudge', 'waits on checkout-3step']].map(([n, m]) => (
              <div key={n} style={{ ...s.guard, borderBottom: 'none', padding: '6px 0' }}>
                <span style={{ color: '#8A90A0' }}>{n}</span>
                <span>{m}</span></div>
            ))}
            <button style={{ ...s.shipBtn, marginTop: 10 }}>Ship variant B to 100% →</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 19. STAGELINE · ONBOARDING ROLLOUT — light indigo delivery board: stage
//     columns with customer cards, blocker flags, completion ring.
// ─────────────────────────────────────────────────────────────────────────────
function SaasStageline() {
  const indigo = '#4F46E5';
  const s = {
    root: { width: SW2, height: SH2, background: '#F6F7FB', color: '#1B1D2A',
      fontFamily: '"Plus Jakarta Sans", sans-serif', display: 'flex',
      overflow: 'hidden' },
    side: { width: 228, flexShrink: 0, background: '#FFFFFF',
      borderRight: '1px solid #E4E6F0', display: 'flex', flexDirection: 'column',
      padding: '20px 14px' },
    brand: { fontWeight: 800, fontSize: 17, display: 'flex', gap: 9,
      alignItems: 'center', padding: '0 10px 18px' },
    bMark: { width: 22, height: 22, borderRadius: 7, background: indigo },
    navLbl: { fontSize: 9.5, fontWeight: 800, letterSpacing: '0.16em',
      color: '#9A9DB4', padding: '0 10px', margin: '12px 0 6px' },
    navItem: (active) => ({ padding: '8px 10px', borderRadius: 8,
      fontSize: 13, fontWeight: active ? 800 : 600,
      background: active ? '#EEEDFC' : 'transparent',
      color: active ? '#1B1D2A' : '#6E7288', marginBottom: 2 }),
    main: { flex: 1, padding: '20px 24px', display: 'flex',
      flexDirection: 'column', minWidth: 0 },
    head: { display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', marginBottom: 12 },
    title: { fontSize: 20, fontWeight: 800, letterSpacing: '-0.02em' },
    sub: { fontSize: 12, color: '#6E7288', marginTop: 2 },
    alert: { display: 'flex', alignItems: 'center', gap: 10,
      background: '#FFF4E5', border: '1px solid #F0D9B5', borderRadius: 10,
      padding: '10px 14px', fontSize: 12.5, fontWeight: 700, color: '#7A5210',
      marginBottom: 12 },
    alertBtn: { marginLeft: 'auto', background: '#7A5210', color: '#fff',
      borderRadius: 8, padding: '7px 12px', fontSize: 11.5, fontWeight: 800,
      cursor: 'pointer' },
    ringRow: { display: 'flex', gap: 12, marginBottom: 12 },
    ringCard: { background: '#fff', border: '1px solid #E4E6F0',
      borderRadius: 12, padding: '12px 16px', display: 'flex', gap: 12,
      alignItems: 'center', flex: 1 },
    ringLbl: { fontSize: 10, fontWeight: 800, letterSpacing: '0.1em',
      color: '#9A9DB4', textTransform: 'uppercase' },
    ringVal: { fontSize: 17, fontWeight: 800 },
    cols: { flex: 1, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 12, minHeight: 0 },
    col: { background: '#EDEFF6', borderRadius: 12, padding: 10,
      display: 'flex', flexDirection: 'column', gap: 8, minWidth: 0 },
    colHead: { display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', fontSize: 11, fontWeight: 800,
      textTransform: 'uppercase', letterSpacing: '0.06em', color: '#4A4E63',
      padding: '2px 4px' },
    colCount: { background: '#fff', borderRadius: 999, padding: '2px 8px',
      fontSize: 10.5 },
    card: { background: '#fff', borderRadius: 10, padding: '10px 12px',
      border: '1px solid #E4E6F0' },
    cName: { fontSize: 12.5, fontWeight: 800, display: 'flex',
      justifyContent: 'space-between', alignItems: 'center' },
    cOwner: { width: 22, height: 22, borderRadius: '50%', color: '#fff',
      fontSize: 9, fontWeight: 800, display: 'grid', placeItems: 'center' },
    cMeta: { fontSize: 10.5, color: '#6E7288', marginTop: 4 },
    cBarTrack: { height: 5, borderRadius: 3, background: '#E4E6F0',
      marginTop: 8 },
    cBar: (w, c) => ({ height: '100%', borderRadius: 3, width: `${w}%`,
      background: c || indigo }),
    blocker: { display: 'inline-block', fontSize: 9.5, fontWeight: 800,
      color: '#B03A2E', background: '#FBE9E7', borderRadius: 5,
      padding: '2px 7px', marginTop: 7 },
    eta: { fontSize: 10, color: '#9A9DB4', marginTop: 6,
      fontFamily: '"IBM Plex Mono", monospace' },
  };
  const cols = [
    ['KICKOFF', '2', [
      ['Halcyon Banks', 'JR', '#4F46E5', 25, null, 'GO-LIVE OCT 14'],
      ['Petra Foods', 'AM', '#12946A', 40, null, 'GO-LIVE OCT 21']]],
    ['DATA MIGRATION', '3', [
      ['Copperline', 'JR', '#4F46E5', 60, null, 'GO-LIVE OCT 7'],
      ['Vela Insurance', 'TK', '#E0509A', 30, 'API rate limits', 'GO-LIVE OCT 28'],
      ['Northwind 3PL', 'AM', '#F5A623', 75, null, 'GO-LIVE OCT 3']]],
    ['TRAINING', '2', [
      ['Bluecrest Health', 'TK', '#E0509A', 85, null, 'GO-LIVE SEP 30'],
      ['Glas Trust', 'JR', '#4F46E5', 55, 'SME on leave', 'GO-LIVE OCT 10']]],
    ['GO-LIVE', '1', [
      ['Ottoway Retail', 'AM', '#F5A623', 100, null, 'LIVE ✓ SEP 12']]],
  ];
  return (
    <div style={s.root}>
      <div style={s.side}>
        <div style={s.brand}><span style={s.bMark}></span> Stageline</div>
        <div style={s.navLbl}>DELIVERY</div>
        <div style={s.navItem(true)}>Rollout board</div>
        <div style={s.navItem()}>Customers</div>
        <div style={s.navItem()}>Templates</div>
        <div style={s.navLbl}>INSIGHT</div>
        <div style={s.navItem()}>Cycle report</div>
        <div style={s.navItem()}>Blockers</div>
      </div>
      <div style={s.main}>
        <div style={s.head}>
          <div><div style={s.title}>Rollouts · Enterprise cohort Q3</div>
            <div style={s.sub}>8 accounts in flight · 2 CSMs · updated 11:42</div></div>
          <button style={{ ...s.alertBtn, margin: 0, background: indigo }}>+ New rollout</button>
        </div>
        <div style={s.alert}>
          ⚠ 2 critical blockers this week — Vela Insurance (API limits) and
          Glas Trust (training SME on leave)
          <button style={s.alertBtn}>View blockers</button>
        </div>
        <div style={s.ringRow}>
          {[['Cohort completion', '68%'], ['Avg time to go-live', '41 days'],
            ['Tasks blocked', '2 of 47'], ['CSAT after handoff', '4.8']].map(([lbl, val]) => (
            <div key={lbl} style={s.ringCard}>
              <svg width="40" height="40" viewBox="0 0 40 40">
                <circle cx="20" cy="20" r="16" fill="none" stroke="#E4E6F0" strokeWidth="5"/>
                <circle cx="20" cy="20" r="16" fill="none" stroke={indigo} strokeWidth="5"
                  strokeDasharray="100.5" strokeDashoffset={100.5 * (1 - 0.68)}
                  strokeLinecap="round" transform="rotate(-90 20 20)"/>
              </svg>
              <span><div style={s.ringLbl}>{lbl}</div>
                <div style={s.ringVal}>{val}</div></span>
            </div>
          ))}
        </div>
        <div style={s.cols}>
          {cols.map(([stage, count, cards]) => (
            <div key={stage} style={s.col}>
              <div style={s.colHead}><span>{stage}</span>
                <span style={s.colCount}>{count}</span></div>
              {cards.map(([name, owner, color, prog, blocker, eta]) => (
                <div key={name} style={s.card}>
                  <div style={s.cName}><span>{name}</span>
                    <span style={{ ...s.cOwner, background: color }}>{owner}</span></div>
                  <div style={s.cMeta}>{blocker ? 'Blocked at step 3' : 'On track'}</div>
                  <div style={s.cBarTrack}><div style={s.cBar(prog)}></div></div>
                  {blocker ? <span style={s.blocker}>⚠ {blocker}</span> : null}
                  <div style={s.eta}>{eta}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 20. TOLLGATE · API CONSOLE — dark-slate developer ops: endpoint latency
//     table, quota gauges, masked keys, curl snippet.
// ─────────────────────────────────────────────────────────────────────────────
function SaasTollgate() {
  const emerald = '#34D399';
  const s = {
    root: { width: SW2, height: SH2, background: '#0B1220', color: '#E5EDF5',
      fontFamily: '"IBM Plex Sans", sans-serif', display: 'flex',
      overflow: 'hidden' },
    side: { width: 228, flexShrink: 0, background: '#0E1626',
      borderRight: '1px solid #1B2A41', display: 'flex', flexDirection: 'column',
      padding: '20px 14px' },
    brand: { fontWeight: 800, fontSize: 17, display: 'flex', gap: 9,
      alignItems: 'center', padding: '0 10px 18px',
      fontFamily: '"JetBrains Mono", monospace' },
    bMark: { width: 22, height: 22, borderRadius: 7, background: emerald,
      color: '#0B1220', fontWeight: 800, fontSize: 13, display: 'grid',
      placeItems: 'center' },
    navLbl: { fontSize: 9.5, fontWeight: 800, letterSpacing: '0.16em',
      color: '#51637F', padding: '0 10px', margin: '12px 0 6px',
      fontFamily: '"JetBrains Mono", monospace' },
    navItem: (active) => ({ padding: '8px 10px', borderRadius: 8,
      fontSize: 13, fontWeight: active ? 800 : 600,
      background: active ? '#16233A' : 'transparent',
      color: active ? '#E5EDF5' : '#7E8CA3', marginBottom: 2 }),
    main: { flex: 1, padding: '20px 24px', display: 'flex',
      flexDirection: 'column', minWidth: 0 },
    head: { display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', marginBottom: 14 },
    title: { fontSize: 20, fontWeight: 800, letterSpacing: '-0.02em' },
    envRow: { display: 'flex', gap: 8 },
    envChip: (active) => ({ fontFamily: '"JetBrains Mono", monospace',
      fontSize: 11.5, fontWeight: 700, borderRadius: 7,
      padding: '6px 12px', cursor: 'pointer',
      background: active ? emerald : 'transparent',
      color: active ? '#0B1220' : '#7E8CA3',
      border: `1px solid ${active ? emerald : '#1B2A41'}` }),
    grid: { flex: 1, display: 'grid', gridTemplateColumns: '1.6fr 1fr',
      gap: 14, minHeight: 0 },
    panel: { background: '#0E1626', border: '1px solid #1B2A41',
      borderRadius: 12, padding: '14px 16px', display: 'flex',
      flexDirection: 'column', minWidth: 0 },
    panelHead: { display: 'flex', justifyContent: 'space-between', fontSize: 10.5,
      fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase',
      color: '#51637F', marginBottom: 10,
      fontFamily: '"JetBrains Mono", monospace' },
    epRow: { display: 'grid',
      gridTemplateColumns: '64px 1fr 60px 60px 60px', gap: 8,
      alignItems: 'center', padding: '9px 0',
      borderBottom: '1px solid #14203366', fontSize: 12.5,
      fontFamily: '"JetBrains Mono", monospace' },
    epHead: { fontSize: 9.5, fontWeight: 800, color: '#51637F',
      letterSpacing: '0.1em' },
    method: (m) => ({ fontSize: 10, fontWeight: 800, borderRadius: 5,
      padding: '3px 0', textAlign: 'center',
      background: m === 'GET' ? 'rgba(52,211,153,0.14)' : m === 'POST' ? 'rgba(245,166,35,0.14)' : 'rgba(255,138,138,0.14)',
      color: m === 'GET' ? emerald : m === 'POST' ? '#F5A623' : '#FF8A8A' }),
    path: { color: '#C6D4E4' },
    num: { textAlign: 'right', color: '#7E8CA3' },
    err: { textAlign: 'right', color: emerald },
    quotaRow: { marginBottom: 12 },
    quotaHead: { display: 'flex', justifyContent: 'space-between', fontSize: 11.5,
      marginBottom: 5, color: '#C6D4E4' },
    quotaTrack: { height: 8, borderRadius: 4, background: '#142033' },
    quotaFill: (w, c) => ({ height: '100%', borderRadius: 4, width: `${w}%`,
      background: c }),
    keyRow: { display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', padding: '9px 0',
      borderBottom: '1px solid #14203366', fontSize: 12 },
    keyTok: { fontFamily: '"JetBrains Mono", monospace', color: '#C6D4E4' },
    scope: { fontSize: 9.5, fontWeight: 800, borderRadius: 5,
      padding: '2px 7px', marginLeft: 6, background: '#16233A',
      color: '#7E8CA3', fontFamily: '"JetBrains Mono", monospace' },
    revoke: { color: '#FF8A8A', cursor: 'pointer', fontSize: 11,
      fontWeight: 700 },
    code: { background: '#0A0F1A', border: '1px solid #1B2A41',
      borderRadius: 10, padding: '12px 14px', fontSize: 11.5, lineHeight: 1.7,
      fontFamily: '"JetBrains Mono", monospace', marginTop: 'auto' },
    cG: { color: emerald }, cD: { color: '#51637F' }, cP: { color: '#C6D4E4' },
  };
  return (
    <div style={s.root}>
      <div style={s.side}>
        <div style={s.brand}><span style={s.bMark}>💂</span> tollgate</div>
        <div style={s.navLbl}>OPERATE</div>
        <div style={s.navItem(true)}>API console</div>
        <div style={s.navItem()}>Webhooks</div>
        <div style={s.navItem()}>Logs · 24h</div>
        <div style={s.navLbl}>ACCESS</div>
        <div style={s.navItem()}>Keys &amp; scopes</div>
        <div style={s.navItem()}>IP allowlist</div>
      </div>
      <div style={s.main}>
        <div style={s.head}>
          <div><div style={s.title}>API console</div>
            <div style={{ fontSize: 12, color: '#51637F', marginTop: 2 }}>acme-prod · region iad1 · v2026-08</div></div>
          <div style={s.envRow}>
            <button style={s.envChip(true)}>PROD</button>
            <button style={s.envChip()}>STAGING</button>
            <button style={s.envChip()}>SANDBOX</button>
          </div>
        </div>
        <div style={s.grid}>
          <div style={s.panel}>
            <div style={s.panelHead}><span>Endpoints · rolling 1h</span><span>p50 / p99 / err</span></div>
            {[['GET', '/v2/charges', '18ms', '61ms', '0.00%'],
              ['POST', '/v2/charges', '44ms', '128ms', '0.02%'],
              ['GET', '/v2/customers/:id', '12ms', '47ms', '0.00%'],
              ['POST', '/v2/refunds', '39ms', '154ms', '0.01%'],
              ['POST', '/v2/webhooks/test', '9ms', '22ms', '0.00%'],
              ['DELETE', '/v2/keys/:id', '11ms', '30ms', '0.00%']].map(([m, p, p50, p99, e]) => (
              <div key={p} style={s.epRow}>
                <span style={s.method(m)}>{m}</span>
                <span style={s.path}>{p}</span>
                <span style={s.num}>{p50}</span>
                <span style={s.num}>{p99}</span>
                <span style={s.err}>{e}</span>
              </div>
            ))}
            <div style={{ ...s.panelHead, marginTop: 'auto', marginBottom: 6 }}>
              <span>QUOTAS · AUG</span><span>RESETS SEP 1</span></div>
            {[['Requests · 4.2M / 6M', 70, emerald],
              ['Bandwidth · 310G / 750G', 41, '#55C7FF'],
              ['Webhooks · 0.9M / 8M', 12, '#8B7CFF']].map(([lbl, w, c]) => (
              <div key={lbl} style={s.quotaRow}>
                <div style={s.quotaHead}><span>{lbl.split(' · ')[0]}</span>
                  <span>{lbl.split(' · ')[1]}</span></div>
                <div style={s.quotaTrack}><div style={s.quotaFill(w, c)}></div></div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, minHeight: 0 }}>
            <div style={s.panel}>
              <div style={s.panelHead}><span>Keys</span><span>3 ACTIVE</span></div>
              {[['sk_live_…f3ac', 'FULL'], ['sk_live_…91bd', 'READ'], ['sk_test_…02c4', 'SANDBOX']].map(([k, sc]) => (
                <div key={k} style={s.keyRow}>
                  <span style={s.keyTok}>{k}<span style={s.scope}>{sc}</span></span>
                  <span style={s.revoke}>revoke</span>
                </div>
              ))}
            </div>
            <div style={s.code}>
              <div><span style={s.cD}>$</span> <span style={s.cG}>curl</span> <span style={s.cP}>https://api.tollgate.dev/v2/charges \</span></div>
              <div>{'  '}-H <span style={s.cG}>"Authorization: Bearer sk_live_…f3ac"</span> \</div>
              <div>{'  '}-d amount=4200 -d currency=usd</div>
              <div style={{ marginTop: 6 }}>
              <span style={s.cD}>{'{ "id": "ch_9x2", "status": '}</span>
              <span style={s.cG}>"succeeded"</span>
              <span style={s.cD}>{', "latency_ms": 44 }'}</span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

function SaasLandMoreSection() {
  return (
    <DCSection id="saas-land-more" title="SaaS — More Landings"
      subtitle="Four further marketing archetypes: enterprise trust, AI copilot glow, vertical suite, and a social-proof wall.">
      <DCArtboard id="s-entrust" label="05 · Enterprise Trust" width={SW2} height={SH2}>
        <SaasEntrust />
      </DCArtboard>
      <DCArtboard id="s-copilotglow" label="06 · AI Copilot Glow" width={SW2} height={SH2}>
        <SaasCopilotGlow />
      </DCArtboard>
      <DCArtboard id="s-slotwise" label="07 · Vertical Suite" width={SW2} height={SH2}>
        <SaasSlotwise />
      </DCArtboard>
      <DCArtboard id="s-kudos" label="08 · Social Proof Wall" width={SW2} height={SH2}>
        <SaasKudos />
      </DCArtboard>
    </DCSection>
  );
}

function SaasDashMoreSection() {
  return (
    <DCSection id="saas-dash-more" title="SaaS — More Dashboards"
      subtitle="Four fresh consoles: revenue desk, experiment board, onboarding rollouts, and an API operations desk.">
      <DCArtboard id="s-tallyline" label="17 · Tallyline · Revenue Desk" width={SW2} height={SH2}>
        <SaasTallyline />
      </DCArtboard>
      <DCArtboard id="s-splitrun" label="18 · Splitrun · Experiment Board" width={SW2} height={SH2}>
        <SaasSplitrun />
      </DCArtboard>
      <DCArtboard id="s-stageline" label="19 · Stageline · Onboarding Rollout" width={SW2} height={SH2}>
        <SaasStageline />
      </DCArtboard>
      <DCArtboard id="s-tollgate" label="20 · Tollgate · API Console" width={SW2} height={SH2}>
        <SaasTollgate />
      </DCArtboard>
    </DCSection>
  );
}

function SaasCanvas() {
  return (
    <DesignCanvas>
      {window.SaasLandSection ? <window.SaasLandSection /> : null}
      <SaasLandMoreSection />
      {window.DashSaasProductSection ? <window.DashSaasProductSection /> : null}
      {window.DashSaasPlatformSection ? <window.DashSaasPlatformSection /> : null}
      <SaasDashMoreSection />
    </DesignCanvas>
  );
}

window.SaasLandMoreSection = SaasLandMoreSection;
window.SaasDashMoreSection = SaasDashMoreSection;

const saasRoot = ReactDOM.createRoot(document.getElementById('root'));
saasRoot.render(<SaasCanvas />);
