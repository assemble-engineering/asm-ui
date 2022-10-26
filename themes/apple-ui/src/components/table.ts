export const table = {
  '.gridjs-footer button, .gridjs-head button': {
    cursor: 'pointer',
    backgroundImage: 'none',
    padding: '0',
    margin: '0',
    border: 'none',
    outline: 'none',
  },
  '.gridjs-head': {
    marginBottom: 5,
    padding: '5px 1px',
  },
  '.gridjs-head::after': {
    content: '""',
    display: 'block',
    clear: 'both',
  },
  '.gridjs-head:empty': {
    padding: '0',
    border: 'none',
  },
  '.gridjs-container': {
    overflow: 'hidden',
    display: 'inline-block',
    padding: 2,
    color: 'rgba(var(--glyph-gray))',
    position: 'relative',
    zIndex: '0',
    fontSize: 14,
  },
  '.gridjs-footer': {
    display: 'block',
    position: 'relative',
    zIndex: '5',
    borderColor: 'rgba(var(--fill-gray-quaternary))',
    borderTop: '1px solid rgba(var(--fill-gray-quaternary))',
    paddingTop: 20,
  },
  '.gridjs-footer:empty': {
    padding: '0',
    border: 'none',
  },
  'input.gridjs-input': {
    fontSize: '1rem',
    color: 'rgba(var(--glyph-gray))',
    position: 'relative',
    display: 'block',
    width: '100%',
    paddingLeft: '0.75rem',
    paddingRight: '0.75rem',
    lineHeight: '1.25rem',
    backgroundColor: 'rgba(var(--fill))',
    borderWidth: 1,
    borderRadius: 6,
    appearance: 'none',
    paddingTop: 7,
    paddingBottom: 7,
    marginBottom: 12,
  },
  'input.gridjs-input:focus': {
    borderColor: 'rgba(var(--fill-primary, var(--primary)))',
    boxShadow: '0 0 0 3px rgba(var(--fill-primary, var(--primary)), 0.5)',
    outline: '0',
  },
  '.gridjs-pagination': {
    color: 'rgba(var(--fill-gray-secondary-alt))',
  },
  '.gridjs-pagination::after': {
    content: '""',
    display: 'block',
    clear: 'both',
  },
  '.gridjs-pagination .gridjs-summary': {
    float: 'left',
    marginTop: 5,
  },
  '.gridjs-pagination .gridjs-pages': {
    float: 'right',
  },
  '.gridjs-pagination .gridjs-pages button': {
    padding: '5px 14px',
    border: '1px solid rgba(var(--fill-gray-quaternary))',
    borderRight: 'none',
    outline: 'none',
    webkitUserSelect: 'none',
    mozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
  },
  '.gridjs-pagination .gridjs-pages button:focus': {
    boxShadow: '0 0 0 2px rgba(149, 189, 243, 0.5)',
  },
  '.gridjs-pagination .gridjs-pages button:hover': {
    backgroundColor: 'rgba(var(--fill-secondary))',
    color: 'rgba(var(--glyph-gray))',
    outline: 'none',
  },
  '.gridjs-pagination .gridjs-pages button:disabled, .gridjs-pagination .gridjs-pages button:hover:disabled, .gridjs-pagination .gridjs-pages button[disabled]':
    {
      cursor: 'default',
      color: 'rgba(var(--glyph-gray-tertiary))',
    },
  '.gridjs-pagination .gridjs-pages button.gridjs-spread': {
    cursor: 'default',
    boxShadow: 'none',
  },
  '.gridjs-pagination .gridjs-pages button.gridjs-currentPage': {
    backgroundColor: 'rgba(var(--fill-gray-quaternary))',
    color: 'rgba(var(--glyph-gray))',
    fontWeight: '600',
  },
  '.gridjs-pagination .gridjs-pages button:last-child': {
    borderBottomRightRadius: 6,
    borderTopRightRadius: 6,
    borderRight: '1px solid rgba(var(--fill-gray-quaternary))',
  },
  '.gridjs-pagination .gridjs-pages button:first-child': {
    borderBottomLeftRadius: 6,
    borderTopLeftRadius: 6,
  },
  'button.gridjs-sort': {
    float: 'right',
    height: 24,
    width: 16,
    backgroundRepeat: 'no-repeat',
  },
  'button.gridjs-sort-asc': {
    paddingBottom: 6,
    backgroundImage: `url('data:image/svg+xml,%3Csvg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"%3E%3Cpath d="M1.08941997,28.0982341 C0.510350201,28.6433271 0.169675781,29.4268155 0.169675781,30.312583 C0.169675781,32.0839783 1.49825718,33.4125597 3.26965253,33.4125597 C4.15541997,33.4125597 4.97295486,33.1060016 5.48400137,32.526862 L29.7731177,7.7266992 L54.0281875,32.526862 C54.5732806,33.1060016 55.3908852,33.4125597 56.2425364,33.4125597 C58.0139317,33.4125597 59.3425131,32.0839783 59.3425131,30.312583 C59.3425131,29.4268155 59.0018387,28.6433271 58.4227689,28.0982341 L32.0555596,1.11790853 C31.4764201,0.470606196 30.6247689,0.0958852655 29.7731177,0.0958852655 C28.88742,0.0958852655 28.0698154,0.470606196 27.4566293,1.11790853 L1.08941997,28.0982341 Z" transform="translate(2 15.256)"%3E%3C/path%3E%3C/svg%3E')`,
    backgroundPositionY: 'center',
  },
  'button.gridjs-sort-desc': {
    paddingTop: 6,
    backgroundImage: `url('data:image/svg+xml,%3Csvg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"%3E%3Cpath d="M29.7731177,33.4834295 C30.6247689,33.4834295 31.4764201,33.142769 32.0555596,32.4955364 L58.4227689,5.48109458 C59.0018387,4.90195504 59.3425131,4.15251318 59.3425131,3.30086202 C59.3425131,1.5293969 58.0139317,0.166768987 56.2425364,0.166768987 C55.3908852,0.166768987 54.6073271,0.507443406 54.0281875,1.05246666 L29.7731177,25.8526295 L5.48400137,1.05246666 C4.93890835,0.507443406 4.15541997,0.166768987 3.26965253,0.166768987 C1.49825718,0.166768987 0.169675781,1.5293969 0.169675781,3.30086202 C0.169675781,4.15251318 0.510350201,4.90195504 1.08941997,5.51514109 L27.4566293,32.4955364 C28.1038619,33.142769 28.88742,33.4834295 29.7731177,33.4834295 Z" transform="translate(2 15.256)"%3E%3C/path%3E%3C/svg%3E')`,
    backgroundPositionY: 'center',
  },
  'button.gridjs-sort:focus': {
    outline: 'none',
  },
  '.gridjs-table': {
    maxWidth: '100%',
    borderCollapse: 'collapse',
    textAlign: 'left',
    display: 'table',
    margin: '0',
    padding: '0',
    overflow: 'auto',
    tableLayout: 'fixed',
    width: '100%',
  },
  '.gridjs-table tbody tr:hover': {
    '@apply bg-gray-tertiary bg-opacity-10': '',
  },
  '.gridjs-table td': {
    border: '1px solid rgba(var(--fill-gray-quaternary))',
    padding: '12px 24px',
    boxSizing: 'content-box',
    borderLeft: 'none',
    borderRight: 'none',
  },
  '.gridjs-table td:first-child': {
    borderLeft: 'none',
    paddingLeft: 12,
  },
  '.gridjs-table td:last-child': {
    borderRight: 'none',
    paddingRight: 12,
  },
  '.gridjs-table td.gridjs-message': {
    textAlign: 'center',
  },
  '.gridjs-table th': {
    color: 'rgba(var(--glyph-gray-tertiary))',
    border: '1px solid rgba(var(--fill-gray-quaternary))',
    borderTop: 'none',
    padding: '10px 24px',
    userSelect: 'none',
    boxSizing: 'content-box',
    whiteSpace: 'nowrap',
    outline: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    fontWeight: '500',
  },
  '.gridjs-table th.gridjs-th-sort': {
    cursor: 'pointer',
  },
  '.gridjs-table th.gridjs-th-sort:focus, .gridjs-table th.gridjs-th-sort:hover':
    {
      '@apply bg-gray-tertiary bg-opacity-10': '',
    },
  '.gridjs-table th.gridjs-th-fixed': {
    top: '0',
    position: 'sticky',
    boxShadow: '0 1px 0 0 rgba(var(--fill-gray-quaternary))',
  },
  '.gridjs-table th:first-child': {
    borderLeft: 'none',
    paddingLeft: 12,
  },
  '.gridjs-table th:last-child': {
    borderRight: 'none',
    paddingRight: 12,
  },
  '.gridjs-table thead tr': {
    border: 'none',
  },
  '.gridjs-table tr:last-child td': {
    borderBottom: '0',
  },
  '.gridjs *, .gridjs ::after, .gridjs ::before': {
    boxSizing: 'border-box',
  },
  '.gridjs-wrapper': {
    position: 'relative',
    zIndex: '1',
    overflow: 'auto',
    display: 'block',
    borderTopWidth: 1,
    borderColor: 'rgba(var(--fill-gray-quaternary))',
  },
  '.gridjs-wrapper:last-of-type': {
    borderBottomWidth: 1,
  },
  '.gridjs-search': {
    float: 'left',
  },
  '.gridjs-search-input': {
    width: 250,
  },
  '.gridjs-loading-bar': {
    zIndex: '10',
    opacity: '0.5',
  },
  '.gridjs-loading-bar, .gridjs-loading-bar::after': {
    position: 'absolute',
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
  },
  '.gridjs-loading-bar::after': {
    transform: 'translateX(-100%)',
    backgroundImage:
      'linear-gradient(90deg, hsla(0, 0%, 80%, 0), hsla(0, 0%, 80%, 0.2) 20%, hsla(0, 0%, 80%, 0.5) 60%, hsla(0, 0%, 80%, 0))',
    animation: 'shimmer 2s infinite',
    content: '""',
  },
  '@keyframes shimmer': {
    to: {
      transform: 'translateX(100%)',
    },
  },
  '.dark button.gridjs-sort': {
    filter: 'invert(1)',
  },
  '.data-table': {
    fontSize: '0.875rem',
    borderColor: 'rgba(var(--fill-gray-quaternary))',
    position: 'relative',
    width: '100%',
    textAlign: 'left',
    borderWidth: 1,
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    borderCollapse: 'collapse',
    borderSpacing: '0',
  },
  '.data-table td, .data-table th': {
    paddingLeft: '0.75rem',
    paddingRight: '0.75rem',
    paddingTop: '1rem',
    paddingBottom: '1rem',
  },
  '.data-table td': {
    borderColor: 'rgba(var(--fill-gray-quaternary))',
    borderBottomWidth: 1,
  },
  '.data-table tr:last-child': {
    borderBottomWidth: '0',
  },
  '.data-table th': {
    borderColor: 'rgba(var(--fill-gray-quaternary))',
    zIndex: '10',
    fontWeight: '600',
    borderBottomWidth: 1,
  },
  '.data-table th a': {
    color: 'rgba(var(--glyph-gray))',
  },
  '.data-table tbody tr:hover, .data-table tbody tr:nth-of-type(odd):hover': {
    '@apply bg-gray-tertiary bg-opacity-10': '',
  },
  '.data-table.data-table-striped tbody tr:nth-of-type(odd)': {
    background: 'rgba(var(--table-striped))',
  },
  '@media only screen and (max-width: 1100px)': {
    '.data-table': {
      display: 'block',
      paddingBottom: '1rem',
      overflowX: 'auto',
      whiteSpace: 'nowrap',
    },
  },
};
