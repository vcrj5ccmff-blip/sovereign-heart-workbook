// TableOfContents.jsx — Sovereign Stillness Workbook UI Kit

const TableOfContents = ({ sections = [
  { num: "01", title: "The Still Point", page: 4 },
  { num: "02", title: "Naming the Noise", page: 12 },
  { num: "03", title: "Reclaiming Attention", page: 20 },
  { num: "04", title: "The Sovereignty Practice", page: 30 },
  { num: "05", title: "Living from the Inside", page: 42 },
]}) => {
  return (
    <div style={tocStyles.page}>
      {/* Header band */}
      <div style={tocStyles.header}>
        <div style={tocStyles.headerTop}>Table of</div>
        <div style={tocStyles.headerTitle}>Contents</div>
      </div>

      {/* Rows */}
      <div style={tocStyles.rows}>
        {sections.map((s, i) => (
          <div key={i} style={tocStyles.row}>
            <div style={tocStyles.rowLeft}>
              <span style={tocStyles.secNum}>{s.num}</span>
              <span style={tocStyles.secTitle}>{s.title}</span>
            </div>
            <span style={tocStyles.pageNum}>{s.page}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const tocStyles = {
  page: {
    width: '100%', height: '100%',
    background: '#F5F0E8',
    display: 'flex', flexDirection: 'column',
  },
  header: {
    background: '#1A1A1A',
    padding: '40px 56px 36px',
    flexShrink: 0,
  },
  headerTop: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '10px', letterSpacing: '0.28em',
    textTransform: 'uppercase', color: '#8A8A8A',
    marginBottom: '6px',
  },
  headerTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 'clamp(32px, 5vw, 56px)',
    fontWeight: 400, color: '#C8B89A',
    letterSpacing: '0.04em', lineHeight: 1,
  },
  rows: {
    padding: '48px 56px',
    display: 'flex', flexDirection: 'column', gap: '28px',
  },
  row: {
    display: 'flex', justifyContent: 'space-between',
    alignItems: 'baseline', borderBottom: '0.5px solid #EDE6D8',
    paddingBottom: '20px',
  },
  rowLeft: {
    display: 'flex', flexDirection: 'column', gap: '4px',
  },
  secNum: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '9px', letterSpacing: '0.2em',
    textTransform: 'uppercase', color: '#8A8A8A',
  },
  secTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 'clamp(16px, 2vw, 22px)',
    fontWeight: 400, color: '#1A1A1A',
  },
  pageNum: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '20px', color: '#C8B89A',
  },
};

Object.assign(window, { TableOfContents });
