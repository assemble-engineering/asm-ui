export const toggleSwitch = {
  '.switch': {
    '--toggle-fill': 'rgba(var(--fill))',
    '--toggle-track': '#e3e3e4',
    position: 'relative',
    display: 'inline-block',
    height: '1.5rem',
    verticalAlign: 'middle',
    cursor: 'pointer',
    userSelect: 'none',
    minWidth: '2.75rem',
    borderRadius: '1.5rem',
    backgroundColor: 'var(--toggle-track)',
    transition: 'all 0.15s ease-in',
  },
  '.switch-wrap': {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  '.switch-disabled': {
    opacity: '.4',
    cursor: 'not-allowed',
    pointerEvents: 'none',
  },
  '.switch-disabled .switch::after': {
    cursor: 'not-allowed',
  },
  '.switch-wrap input[type="checkbox"]': {
    position: 'absolute',
    left: '0',
    outline: '0',
    opacity: '0',
    pointerEvents: 'none',
    zIndex: '-1',
  },
  '.switch-wrap input[type="checkbox"]:focus-visible + .switch': {
    boxShadow: '0 0 0 3px rgba(var(--fill-primary, var(--primary)), 0.35)',
  },
  '.switch-wrap input[type="checkbox"]:focus-visible + .switch.switch-success':
    {
      boxShadow: '0 0 0 3px rgba(3, 161, 14, 0.35)',
    },
  '.switch-wrap.switch-disabled input[type="checkbox"]:focus-visible + .switch':
    {
      boxShadow: 'none',
    },
  '.switch::after': {
    position: 'absolute',
    display: 'block',
    width: '1.25rem',
    height: '1.25rem',
    borderRadius: 9999,
    cursor: 'pointer',
    transition: 'all 0.3s',
    content: '""',
    left: 2,
    top: 2,
    backgroundColor: 'var(--toggle-fill)',
    boxShadow:
      '0 3px 8px 0 rgba(0, 0, 0, 0.15), 0 3px 1px 0 rgba(0, 0, 0, 0.06)',
  },
  '.switch-label': {
    color: 'rgba(var(--glyph-gray))',
    fontSize: '1rem',
    paddingLeft: '0.75rem',
    lineHeight: '1.25rem',
    userSelect: 'none',
  },
  '.switch-label:empty': {
    display: 'none',
  },
  '.switch-lg': {
    minWidth: '4.5rem',
    height: '2.25rem',
    borderRadius: '2.25rem',
  },
  '.switch-lg::after': {
    left: 2,
    top: 2,
    width: '2rem',
    height: '2rem',
  },
  '.switch-wrap input[type="checkbox"]:checked + .switch': {
    backgroundColor: 'rgba(var(--fill-primary, var(--primary)))',
  },
  '.switch-wrap input[type="checkbox"]:checked + .switch::after': {
    left: '100%',
    marginLeft: '-1.375rem',
  },
  '.switch-wrap input[type="checkbox"]:checked + .switch-lg::after': {
    marginLeft: '-2.125rem',
  },
  '.switch-wrap input[type="checkbox"]:checked + .switch.switch-success': {
    backgroundColor: 'rgba(var(--fill-green))',
  },
};
