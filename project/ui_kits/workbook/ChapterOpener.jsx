// ChapterOpener.jsx — Sovereign Stillness Workbook UI Kit

const ChapterOpener = ({ number = "01", title = "The Still Point", subtitle = "Where sovereignty begins — not as an achievement, but as a remembering." }) => {
  return (
    <div style={chStyles.page}>
      <div style={chStyles.numBadge}>{number}</div>
      <div style={chStyles.label}>Chapter</div>
      <h2 style={chStyles.title}>{title}</h2>
      <div style={chStyles.rule}></div>
      <p style={chStyles.subtitle}>{subtitle}</p>
    </div>
  );
};

const chStyles = {
  page: {
    width: '100%', height: '100%',
    background: '#1A1A1A',
    display: 'flex', flexDirection: 'column',
    justifyContent: 'center', alignItems: 'center',
    textAlign: 'center', padding: '64px 56px',
    position: 'relative',
  },
  numBadge: {
    width: '56px', height: '56px', borderRadius: '50%',
    background: '#C8B89A',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '24px', fontWeight: 400, color: '#fff',
    marginBottom: '32px',
  },
  label: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '9px', letterSpacing: '0.28em',
    textTransform: 'uppercase', color: '#8A8A8A',
    marginBottom: '16px',
  },
  title: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 'clamp(28px, 4vw, 52px)',
    fontWeight: 300, fontStyle: 'italic',
    color: '#C8B89A', lineHeight: 1.15,
    margin: 0,
  },
  rule: {
    width: '40px', height: '0.5px',
    background: '#C8B89A', margin: '28px auto',
  },
  subtitle: {
    fontFamily: "'DM Sans', serif",
    fontSize: 'clamp(12px, 1.3vw, 15px)',
    fontWeight: 400, fontStyle: 'italic',
    color: '#8A8A8A', lineHeight: 1.7,
    maxWidth: '380px', margin: 0,
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
  },
};

Object.assign(window, { ChapterOpener });
