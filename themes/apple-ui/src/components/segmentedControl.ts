export const segmentedControl = {
  '.segmented-control': {
    '--segmented-control-btn-active': 'var(--fill)',
    backgroundColor: 'rgba(var(--fill-tertiary))',
    borderRadius: 12,
    fontSize: '1rem',
    display: 'flex',
    width: '100%',
    padding: 1,
    lineHeight: '1.25rem',
  },
  '.segmented-control-btn::before': {
    backgroundColor: 'rgba(var(--fill-gray-tertiary))',
    position: 'absolute',
    left: '0',
    display: 'inline-block',
    content: '""',
    width: 1,
    top: '15%',
    height: '70%',
  },
  '.segmented-control-btn:first-child::before, .segmented-control-btn.active::before, .segmented-control-btn.active + .segmented-control-btn::before':
    {
      display: 'none',
    },
  '.segmented-control-btn': {
    borderRadius: 12,
    color: 'rgba(var(--glyph-gray))',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontWeight: '500',
    transitionProperty: 'none',
    borderWidth: 1,
    borderColor: 'transparent',
    cursor: 'pointer',
    padding: '6px 8px',
  },
  '.segmented-control-btn:hover': {
    textDecoration: 'none',
  },
  '.segmented-control-btn.active': {
    borderColor: 'rgba(var(--fill-gray-quaternary))',
    borderWidth: 1,
    boxShadow:
      '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    background: 'rgba(var(--segmented-control-btn-active))',
  },
  '.segmented-control-btn:active, .segmented-control-btn:focus': {
    outline: '0',
  },
  '.segmented-control-btn:focus-visible': {
    boxShadow: '0 0 0 3px rgba(var(--primary), 0.35)',
    zIndex: '50',
    outline: '0',
  },
};
