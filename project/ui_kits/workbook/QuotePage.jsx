// QuotePage.jsx — Sovereign Stillness Workbook UI Kit

const QuotePage = ({ quote = "You are right where you are meant to be.", attribution = "Sovereign Stillness", size = "lg" }) => {
  const isLg = size === 'lg';
  return (
    <div style={qpStyles.page}>
      <div style={{ ...qpStyles.quote, fontSize: isLg ? 'clamp(22px, 3.5vw, 40px)' : 'clamp(16px, 2.2vw, 24px)' }}>
        "{quote}"
      </div>
      <div style={qpStyles.rule}></div>
      <div style={qpStyles.attr}>{attribution}</div>
    </div>
  );
};

const qpStyles = {
  page: {
    width: '100%', height: '100%',
    background: '#F5F0E8',
    display: 'flex', flexDirection: 'column',
    justifyContent: 'center', alignItems: 'center',
    textAlign: 'center', padding: '80px 72px',
  },
  quote: {
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 300, lineHeight: 1.45,
    color: '#C8B89A', margin: 0,
  },
  rule: {
    width: '40px', height: '0.5px',
    background: '#C8B89A', margin: '28px auto',
  },
  attr: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '8px', fontWeight: 500,
    letterSpacing: '0.25em', textTransform: 'uppercase',
    color: '#4A4A4A',
  },
};

Object.assign(window, { QuotePage });
