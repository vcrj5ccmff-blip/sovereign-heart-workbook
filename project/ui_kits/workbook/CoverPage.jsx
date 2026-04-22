// CoverPage.jsx — Sovereign Stillness Workbook UI Kit
// Shared to window for use in index.html

const CoverPage = ({ title = "Sovereign Stillness", subtitle = "A 30-Day Workbook for the Woman Who Has Decided", author = "Victoria Avery" }) => {
  return (
    <div style={coverStyles.page}>
      {/* Author byline top-right */}
      <div style={coverStyles.author}>{author}</div>

      {/* Center content */}
      <div style={coverStyles.center}>
        <div style={coverStyles.runeTop}>✦</div>
        <h1 style={coverStyles.title}>{title}</h1>
        <div style={coverStyles.rule}></div>
        <p style={coverStyles.subtitle}>{subtitle}</p>
      </div>

      {/* Decorative type watermark */}
      <div style={coverStyles.watermark}>WORKBOOK</div>
    </div>
  );
};

const coverStyles = {
  page: {
    width: '100%', height: '100%',
    background: '#F5F0E8',
    display: 'flex', flexDirection: 'column',
    justifyContent: 'center', alignItems: 'center',
    position: 'relative', overflow: 'hidden',
    padding: '56px',
  },
  author: {
    position: 'absolute', top: '48px', right: '56px',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '9px', letterSpacing: '0.22em',
    textTransform: 'uppercase', color: '#8A8A8A',
  },
  center: {
    display: 'flex', flexDirection: 'column',
    alignItems: 'center', textAlign: 'center',
    position: 'relative', zIndex: 2,
  },
  runeTop: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '14px', color: '#C8B89A',
    marginBottom: '24px', letterSpacing: '0.2em',
  },
  title: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 'clamp(36px, 5vw, 60px)',
    fontWeight: 400, letterSpacing: '0.06em',
    textTransform: 'uppercase', color: '#C8B89A',
    lineHeight: 1.05, margin: 0,
  },
  rule: {
    width: '48px', height: '0.5px',
    background: '#C8B89A', margin: '28px auto',
  },
  subtitle: {
    fontFamily: "'DM Sans', serif",
    fontSize: 'clamp(12px, 1.4vw, 16px)',
    fontWeight: 400, fontStyle: 'italic',
    color: '#4A4A4A', lineHeight: 1.6,
    maxWidth: '360px', margin: 0,
  },
  watermark: {
    position: 'absolute', bottom: '-12px', left: '50%',
    transform: 'translateX(-50%)',
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 'clamp(60px, 12vw, 120px)',
    fontWeight: 700, letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'rgba(200,184,154,0.10)',
    whiteSpace: 'nowrap', userSelect: 'none',
    lineHeight: 1,
  },
};

Object.assign(window, { CoverPage });
