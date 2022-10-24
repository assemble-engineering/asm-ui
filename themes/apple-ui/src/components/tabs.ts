export const tabs = {
  '.tab-nav': {
    borderColor: 'rgba(var(--fill-gray-quaternary))',
    display: 'flex',
    width: '100%',
    borderBottomWidth: 1,
  },
  '.tab-nav::-webkit-scrollbar': {
    display: 'none',
  },
  '.tab-item': {
    paddingLeft: '0',
    paddingRight: '0',
    paddingTop: '1.25rem',
    paddingBottom: '1.25rem',
  },
  '.tab-nav-item': {
    fontSize: '1rem',
    color: 'rgba(var(--glyph-gray-tertiary))',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    position: 'relative',
    display: 'block',
    paddingBottom: '.75rem',
    marginRight: '4rem',
    fontWeight: '500',
    lineHeight: '1.25rem',
    textAlign: 'center',
    textDecoration: 'none',
    listStyleType: 'none',
    borderBottomWidth: 1,
    borderColor: 'transparent',
    cursor: 'pointer',
    transition: 'var(--fade)',
    bottom: -1,
  },
  '.tab-nav-item:last-child': {
    marginRight: '0',
  },
  '.tab-nav-item:hover': {
    color: 'rgba(var(--glyph-primary, var(--primary)))',
  },
  '.tab-nav-item-active, .tab-nav-item-active:hover': {
    color: 'rgba(var(--glyph-gray))',
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderColor: 'rgba(var(--glyph))',
  },
  '.tab-nav-item:active, .tab-nav-item:focus': {
    outline: '0',
  },
  '.tab-nav-item:focus-visible': {
    boxShadow: '0 0 0 3px rgba(var(--fill-primary, var(--primary)), 0.35)',
    zIndex: '50',
    outline: '0',
  },
  '.tab-nav-item[disabled], .tab-nav-item[disabled]:hover': {
    opacity: '.4',
    color: 'rgba(var(--glyph-gray))',
    cursor: 'not-allowed',
  },
};
