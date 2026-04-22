// CTAPage.jsx — Sovereign Stillness Workbook UI Kit

const CTAPage = ({
  eyebrow = "Get Ready To",
  heading = "Unlock the Full Course",
  body = "You've completed the workbook. What follows is the live practice — a guided immersion into everything this workbook has prepared you for. This is where the work becomes embodied.",
  cta = "Register Now",
  onCta = () => {},
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div style={ctaStyles.page}>
      <div style={ctaStyles.eyebrow}>{eyebrow}</div>
      <h2 style={ctaStyles.heading}>{heading}</h2>
      <div style={ctaStyles.rule}></div>
      <p style={ctaStyles.body}>{body}</p>
      <button
        style={{ ...ctaStyles.btn, background: hovered ? '#A89070' : '#C8B89A' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={onCta}
      >
        {cta}
      </button>
    </div>
  );
};

const ctaStyles = {
  page: {
    width: '100%', height: '100%',
    background: '#F5F0E8',
    display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center',
    textAlign: 'center', padding: '64px 72px',
  },
  eyebrow: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '9px', letterSpacing: '0.25em',
    textTransform: 'uppercase', color: '#8A8A8A',
    marginBottom: '16px',
  },
  heading: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 'clamp(26px, 3.5vw, 44px)',
    fontWeight: 400, color: '#C8B89A',
    lineHeight: 1.2, margin: 0,
  },
  rule: {
    width: '40px', height: '0.5px',
    background: '#C8B89A', margin: '28px auto',
  },
  body: {
    fontFamily: "'DM Sans', serif",
    fontSize: 'clamp(12px, 1.3vw, 15px)',
    fontStyle: 'italic', color: '#4A4A4A',
    lineHeight: 1.75, maxWidth: '400px',
    margin: '0 0 40px',
  },
  btn: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '10px', letterSpacing: '0.22em',
    textTransform: 'uppercase', color: '#fff',
    border: 'none', padding: '14px 48px',
    cursor: 'pointer', transition: 'background 0.2s ease',
  },
};

Object.assign(window, { CTAPage });
