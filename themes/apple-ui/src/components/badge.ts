export const badge = {
  '.badge': {
    fontSize: '0.75rem',
    color: 'rgba(var(--glyph-gray))',
    backgroundColor: 'rgba(var(--fill-gray-tertiary))',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '1.5rem',
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
    paddingTop: '0.25rem',
    paddingBottom: '0.25rem',
    fontWeight: '400',
    lineHeight: '1rem',
    whiteSpace: 'nowrap',
    borderRadius: 4,
    transition: 'var(--fade)',
  },
  '.badge-text': {
    display: 'inline-block',
    lineHeight: '1rem',
  },
  '.badge .icon': {
    position: 'relative',
    width: '0.75rem',
    height: '0.75rem',
    lineHeight: '.75rem',
    marginTop: 0,
    marginRight: 6,
  },
  '.icon-close': {
    marginLeft: '1.2rem',
  },
  '.badge-subtle': {
    color: 'rgba(var(--glyph-gray))',
    backgroundColor: 'rgba(var(--fill-secondary))',
    borderWidth: 1,
    paddingTop: '0.1875rem',
    paddingBottom: '0.1875rem',
  },
  '.badge-info': {
    backgroundColor: 'rgba(var(--fill-purple))',
    color: '#fff',
  },
  '.badge-info.badge-subtle': {
    backgroundColor: 'rgba(var(--fill-purple-secondary))',
    color: 'rgba(var(--glyph-purple))',
    borderColor: 'rgba(var(--fill-purple))',
    borderWidth: 1,
  },
  '.badge-success': {
    backgroundColor: 'rgba(var(--fill-green))',
    color: 'rgba(var(--fill-green-secondary))',
  },
  '.badge-success.badge-subtle': {
    backgroundColor: 'rgba(var(--fill-green-secondary))',
    color: 'rgba(var(--glyph-green))',
    borderColor: 'rgba(var(--fill-green))',
    borderWidth: 1,
  },
  '.badge-warning': {
    backgroundColor: 'rgba(var(--fill-orange))',
    color: 'rgba(var(--fill-orange-secondary))',
  },
  '.badge-warning.badge-subtle': {
    backgroundColor: 'rgba(var(--fill-orange-secondary))',
    color: 'rgba(var(--glyph-orange))',
    borderColor: 'rgba(var(--fill-orange))',
    borderWidth: 1,
  },
  '.badge-critical': {
    backgroundColor: 'rgba(var(--fill-red))',
    color: 'rgba(var(--fill-red-secondary))',
  },
  '.badge-critical.badge-subtle': {
    backgroundColor: 'rgba(var(--fill-red-secondary))',
    color: 'rgba(var(--glyph-red))',
    borderColor: 'rgba(var(--fill-red))',
    borderWidth: 1,
  },
  '.badge-highlight': {
    backgroundColor: 'rgba(var(--fill-yellow))',
    color: 'rgba(var(--glyph-gray))',
  },
  '.dark.badge-highlight': {
    color: 'rgba(var(--fill))',
  },
  '.badge-highlight.badge-subtle': {
    backgroundColor: 'rgba(var(--fill-yellow-secondary))',
    color: 'rgba(var(--glyph-gray))',
    borderColor: 'rgba(var(--fill-yellow))',
    borderWidth: 1,
  },
  '.dark.badge-highlight.badge-subtle': {
    color: 'rgba(var(--glyph-yellow))',
  },
};
