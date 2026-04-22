// BodyPage.jsx — Sovereign Stillness Workbook UI Kit

const BodyPage = ({
  eyebrow = "Day 01",
  heading = "Morning Inquiry",
  subheading = "Begin before the world asks anything of you.",
  body = [
    "The woman who governs herself does not begin her day reacting. She begins by listening — not to the noise outside, but to the signal within. This is the practice.",
    "Before you check your phone, before the inbox, before the asks: five minutes with these questions. Not to perform reflection. To actually reflect.",
    "What is already true in you today? What do you already know, but are moving away from? What would it mean to act from that knowing — fully, without apology?",
  ],
  prompt = "What is the one thing I keep circling back to that I haven't yet acted on?",
}) => {
  return (
    <div style={bpStyles.page}>
      <div style={bpStyles.eyebrow}>{eyebrow}</div>
      <h2 style={bpStyles.heading}>{heading}</h2>
      <p style={bpStyles.subheading}>{subheading}</p>
      <div style={bpStyles.rule}></div>
      <div style={bpStyles.bodyText}>
        {body.map((p, i) => <p key={i} style={bpStyles.para}>{p}</p>)}
      </div>
      {prompt && (
        <div style={bpStyles.promptBlock}>
          <div style={bpStyles.promptLabel}>Reflection Prompt</div>
          <div style={bpStyles.promptText}>"{prompt}"</div>
        </div>
      )}
    </div>
  );
};

const bpStyles = {
  page: {
    width: '100%', height: '100%',
    background: '#F5F0E8',
    padding: '56px',
    display: 'flex', flexDirection: 'column',
    overflowY: 'auto',
  },
  eyebrow: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '9px', letterSpacing: '0.22em',
    textTransform: 'uppercase', color: '#C8B89A',
    marginBottom: '12px',
  },
  heading: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 'clamp(24px, 3vw, 38px)',
    fontWeight: 400, color: '#1A1A1A',
    lineHeight: 1.15, margin: 0, marginBottom: '10px',
  },
  subheading: {
    fontFamily: "'DM Sans', serif",
    fontSize: 'clamp(12px, 1.3vw, 15px)',
    fontStyle: 'italic', color: '#4A4A4A',
    margin: 0, lineHeight: 1.6,
  },
  rule: {
    width: '40px', height: '0.5px',
    background: '#C8B89A', margin: '24px 0',
  },
  bodyText: {
    flex: 1,
  },
  para: {
    fontFamily: "'DM Sans', serif",
    fontSize: 'clamp(11px, 1.2vw, 14px)',
    lineHeight: 1.8, color: '#1A1A1A',
    marginBottom: '16px', margin: '0 0 16px 0',
    textAlign: 'justify',
  },
  promptBlock: {
    marginTop: '28px',
    borderTop: '0.5px solid #C8B89A',
    paddingTop: '20px',
  },
  promptLabel: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '8px', letterSpacing: '0.22em',
    textTransform: 'uppercase', color: '#C8B89A',
    marginBottom: '8px',
  },
  promptText: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 'clamp(14px, 1.8vw, 18px)',
    fontStyle: 'italic', color: '#1A1A1A',
    lineHeight: 1.5,
  },
};

Object.assign(window, { BodyPage });
