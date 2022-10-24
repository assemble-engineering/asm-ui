export const accordion = {
  '.accordion': {
    borderColor: 'rgba(var(--fill-gray-quaternary))',
    lineHeight: '1.5rem',
    borderBottomWidth: 1,
  },
  '.accordion:first-child': {
    borderColor: 'rgba(var(--fill-gray-quaternary))',
    borderTopWidth: 1,
  },
  '.accordion-title': {
    color: 'rgba(var(--fill-gray))',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    paddingTop: '0.75rem',
    paddingBottom: '0.75rem',
    fontWeight: '500',
    borderRadius: 4,
    outline: '0',
    cursor: 'pointer',
    userSelect: 'none',
  },
  '.accordion-title:hover': {
    color: 'rgba(var(--glyph-blue))',
  },
  '.accordion-title:focus-visible': {
    boxShadow: '0 0 0 3px rgba(var(--fill-primary, var(--primary)), 0.35)',
  },
  '.accordion-title::-webkit-details-marker': {
    display: 'none',
  },
  '.accordion-title::after': {
    fontFamily: '"SF Pro Icons"',
    fontSize: '1.75rem',
    color: 'rgba(var(--glyph-gray-tertiary))',
    position: 'absolute',
    top: '0',
    right: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    order: '1',
    width: '1.5rem',
    height: '1.5rem',
    fontWeight: '300',
    lineHeight: '1',
    marginTop: 9,
    content: '""',
  },
  '.accordion[open] .accordion-title::after': {
    transform: 'rotate(45deg)',
  },
  '.accordion-content': {
    paddingBottom: '1rem',
    lineHeight: '1.5',
  },
};
