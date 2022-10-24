export const pagination = {
  '.pagination': {
    display: 'flex',
  },
  '.pagination-item': {
    borderColor: 'rgba(var(--fill-gray-quaternary))',
    position: 'relative',
    display: 'block',
    overflow: 'hidden',
    lineHeight: '1',
    backgroundColor: 'rgba(var(--fill))',
    borderWidth: 1,
    borderRightWidth: '0',
    transition: 'var(--fade)',
  },
  '.pagination-item > a': {
    color: 'rgba(var(--glyph-gray))',
    display: 'block',
    height: '100%',
    paddingLeft: '0.75rem',
    paddingRight: '0.75rem',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    margin: '0',
    textDecoration: 'none',
  },
  '.pagination-item > a:hover': {
    backgroundColor: 'rgba(var(--fill-tertiary))',
  },
  '.pagination-item > a:focus': {
    boxShadow: 'inset 0 0 0 3px rgba(var(--primary), 0.35)',
  },
  '.pagination-item.active > a': {
    backgroundColor: 'rgba(var(--fill-gray-quaternary))',
    color: 'rgba(var(--glyph-gray))',
  },
  '.pagination-item:first-child': {
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  '.pagination-item:last-child': {
    borderRightWidth: 1,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
  },
};
