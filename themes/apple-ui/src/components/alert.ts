export const alert = {
  '.alert': {
    borderRadius: 12,
    backgroundColor: 'rgba(var(--fill-purple-secondary))',
    borderColor: 'rgba(var(--fill-purple))',
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-start',
    padding: '1rem',
    borderWidth: 1,
  },
  '.alert-success': {
    backgroundColor: 'rgba(var(--fill-green-secondary))',
    borderColor: 'rgba(var(--fill-green))',
  },
  '.alert-warning': {
    backgroundColor: 'rgba(var(--fill-orange-secondary))',
    borderColor: 'rgba(var(--fill-orange))',
  },
  '.alert-highlight': {
    backgroundColor: 'rgba(var(--fill-yellow-secondary))',
    borderColor: 'rgba(var(--fill-yellow))',
  },
  '.alert-error': {
    backgroundColor: 'rgba(var(--fill-red-secondary))',
    borderColor: 'rgba(var(--fill-red))',
  },
  '.alert-toast': {
    position: 'absolute',
    bottom: '2rem',
    right: '2rem',
  },
  '.alert-content': {
    flex: '1 1 0%',
    lineHeight: '1.5rem',
  },
  '.alert-close + .alert-content': {
    paddingRight: '2rem',
  },
  '.alert-content > p': {
    marginBottom: '0.75rem',
  },
  '.alert-content > p:last-child': {
    marginBottom: '0',
  },
  '.alert-full': {
    width: '100%',
    borderTopWidth: '0',
    borderLeftWidth: '0',
    borderRightWidth: '0',
    borderRadius: '0',
  },
  '.alert::before': {
    fontFamily: '"SF Pro Icons"',
    color: 'rgba(var(--glyph-purple))',
    display: 'inline-block',
    marginRight: '0.5rem',
    content: '""',
    lineHeight: 1,
    fontSize: '1.25rem',
    height: '1.25rem',
    marginTop: 4,
  },
  '.alert-success::before': {
    color: 'rgba(var(--glyph-green))',
    content: '""',
  },
  '.alert-highlight::before': {
    color: 'rgba(var(--glyph-yellow))',
    content: '""',
  },
  '.alert-warning::before': {
    color: 'rgba(var(--glyph-orange))',
    content: '""',
  },
  '.alert-error::before': {
    color: 'rgba(var(--glyph-red))',
    content: '""',
  },
  '.alert-close': {
    color: 'rgba(var(--glyph-gray))',
    opacity: '.4',
    fontSize: '1.25rem',
    width: '1.25rem',
    height: '1.25rem',
    position: 'absolute',
    zIndex: '50',
    display: 'flex',
    padding: '0',
    margin: '0',
    overflow: 'hidden',
    lineHeight: '1',
    borderRadius: 4,
    cursor: 'pointer',
    right: '1rem',
    marginTop: 2,
  },
  '.alert-close:hover': {
    opacity: '.6',
  },
  '.alert-close:active': {
    opacity: '.7',
  },
  '.alert-close:focus-visible': {
    boxShadow: '0 0 0 3px rgba(var(--fill-primary, var(--primary)), 0.35)',
  },
  '.alert-close::after': {
    fontFamily: '"SF Pro Icons"',
    padding: '0',
    content: '""',
    marginTop: '2px',
  },
  '.alert-close svg': {
    width: '1rem',
    height: '1rem',
    fill: 'currentColor',
  },
};
