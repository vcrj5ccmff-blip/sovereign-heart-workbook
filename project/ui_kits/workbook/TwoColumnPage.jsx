// TwoColumnPage.jsx — Sovereign Stillness Workbook UI Kit

const TwoColumnPage = ({
  eyebrow = "Written by Victoria Avery",
  heading = "The Discipline of\nSelf-Sovereignty",
  body = [
    "Sovereignty is not something you acquire. It is something you stop betraying. Every time you override your own knowing — to keep the peace, to avoid discomfort, to seem agreeable — you widen the distance between the woman you are and the woman you live as.",
    "The work here is not to become someone new. It is to stop performing someone smaller. This is the discipline. Not dramatic. Not loud. Just the daily choice to stay aligned with what you already know to be true.",
    "That alignment is the stillness. It has nothing to do with silence or ease. You can be fully in motion — building, deciding, acting — and still be sovereign. Sovereignty is the quality of the ground you move from.",
  ],
}) => {
  return (
    <div style={tcStyles.page}>
      {/* Left cream col */}
      <div style={tcStyles.left}>
        <div style={tcStyles.eyebrow}>{eyebrow}</div>
        <h2 style={tcStyles.heading}>{heading.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}</h2>
      </div>
      {/* Right dark col */}
      <div style={tcStyles.right}>
        {body.map((p, i) => <p key={i} style={tcStyles.para}>{p}</p>)}
      </div>
    </div>
  );
};

const tcStyles = {
  page: {
    width: '100%', height: '100%',
    display: 'flex',
  },
  left: {
    width: '50%', background: '#F5F0E8',
    padding: '56px 40px',
    display: 'flex', flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  right: {
    width: '50%', background: '#2D2D2D',
    padding: '56px 44px',
    display: 'flex', flexDirection: 'column',
    justifyContent: 'center',
    overflowY: 'auto',
  },
  eyebrow: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '8px', letterSpacing: '0.2em',
    textTransform: 'uppercase', color: '#8A8A8A',
    marginBottom: '16px',
  },
  heading: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 'clamp(22px, 2.8vw, 36px)',
    fontWeight: 400, color: '#1A1A1A',
    lineHeight: 1.2, margin: 0,
  },
  para: {
    fontFamily: "'DM Sans', serif",
    fontSize: 'clamp(10px, 1.1vw, 13px)',
    lineHeight: 1.8, color: '#F5F0E8',
    marginBottom: '16px', margin: '0 0 16px 0',
    textAlign: 'justify',
  },
};

Object.assign(window, { TwoColumnPage });
