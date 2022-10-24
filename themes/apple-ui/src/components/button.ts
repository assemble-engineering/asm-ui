export const button = {
  '.btn': {
    fontSize: '1rem',
    backgroundColor: 'rgba(var(--fill-primary, var(--primary)))',
    display: 'inline-flex',
    justifyContent: 'center',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    lineHeight: '1.25rem',
    borderRadius: 9999,
    color: '#fff',
    transition: 'var(--fade)',
    whiteSpace: 'nowrap',
    userSelect: 'none',
  },
  '.btn:focus-visible': {
    boxShadow: '0 0 0 3px rgba(var(--fill-primary, var(--primary)), 0.5)',
    outline: '0',
  },
  '.btn:disabled, .btn:hover:disabled, .btn:focus-visible:disabled, .btn.disabled, .btn.disabled:hover, .btn.disabled:focus-visible':
    {
      opacity: '.4',
      cursor: 'not-allowed',
      boxShadow: 'none',
      backgroundColor: 'rgba(var(--fill-primary, var(--primary)))',
      filter: 'none',
      pointerEvents: 'none',
      userSelect: 'none',
    },
  '.btn:hover': {
    filter: 'brightness(108%) hue-rotate(1deg)',
    textDecoration: 'none',
  },
  '.btn:active': {
    filter: 'brightness(92%) hue-rotate(1deg)',
  },
  '.btn.btn-lg': {
    minWidth: '0',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    paddingTop: '0.75rem',
    paddingBottom: '0.75rem',
    fontWeight: '500',
    lineHeight: '1.25rem',
  },
  '.btn.btn-sm': {
    fontSize: '0.75rem',
    minWidth: '0',
    paddingLeft: '0.75rem',
    paddingRight: '0.75rem',
    paddingTop: '0.25rem',
    paddingBottom: '0.25rem',
    fontWeight: '500',
    lineHeight: '1rem',
  },
  '.btn-outline, .btn-outline.btn-destructive': {
    borderColor: 'rgba(var(--fill-primary, var(--primary)))',
    color: 'rgba(var(--glyph-primary, var(--primary)))',
    backgroundColor: 'transparent',
    borderWidth: 1,
    paddingTop: 7,
    paddingBottom: 7,
  },
  '.btn-outline.btn-lg': {
    paddingTop: 11,
    paddingBottom: 11,
  },
  '.btn-outline.btn-sm': {
    paddingTop: 3,
    paddingBottom: 3,
  },
  '.btn-outline:hover, .btn-outline.btn-destructive:hover': {
    backgroundColor: 'rgba(var(--fill-primary, var(--primary)), 0.08)',
  },
  '.btn-outline:active, .btn-outline.btn-destructive:active': {
    backgroundColor: 'rgba(var(--glyph-primary, var(--primary)), 0.16)',
  },
  '.btn.btn-outline:disabled, .btn.btn-outline:hover:disabled, .btn.btn-outline:focus-visible:disabled, .btn.btn-outline.disabled, .btn.btn-outline.disabled:hover, .btn.btn-outline.disabled:focus-visible':
    {
      backgroundColor: 'transparent',
    },
  '.btn-secondary, .btn-secondary.btn-destructive': {
    backgroundColor: 'rgba(var(--fill-gray-quaternary))',
    color: 'rgba(var(--glyph-gray))',
  },
  '.btn-secondary:hover, .btn-secondary.btn-destructive:hover': {
    filter: 'brightness(96%) hue-rotate(1deg)',
    backgroundColor: 'rgba(var(--fill-gray-quaternary))',
  },
  '.btn-secondary:active, .btn-secondary.btn-destructive:active': {
    filter: 'brightness(90%) hue-rotate(1deg)',
    backgroundColor: 'rgba(var(--fill-gray-quaternary))',
  },
  '.btn.btn-secondary:disabled, .btn.btn-secondary:hover:disabled, .btn.btn-secondary:focus-visible:disabled, .btn.btn-secondary.disabled, .btn.btn-secondary.disabled:hover, .btn.btn-secondary.disabled:focus-visible':
    {
      backgroundColor: 'rgba(var(--fill-gray-quaternary))',
      filter: 'none',
    },
  '.btn-tertiary, .btn-tertiary.btn-destructive': {
    color: 'rgba(var(--glyph-primary, var(--primary)))',
    backgroundColor: 'transparent',
  },
  '.btn-tertiary:hover': {
    backgroundColor: 'transparent',
    filter: 'brightness(90%) hue-rotate(1deg)',
  },
  '.btn-tertiary:active': {
    backgroundColor: 'rgba(var(--glyph-primary, var(--primary)), 0.08)',
  },
  '.btn.btn-tertiary:disabled, .btn.btn-tertiary:hover:disabled, .btn.btn-tertiary:focus-visible:disabled, .btn.btn-tertiary.disabled, .btn.btn-tertiary.disabled:hover, .btn.btn-tertiary.disabled:focus-visible':
    {
      backgroundColor: 'transparent',
      filter: 'none',
    },
  '.btn-destructive': {
    backgroundColor: 'rgba(var(--fill-red))',
  },
  '.btn.btn-destructive:disabled, .btn.btn-destructive:hover:disabled, .btn.btn-destructive:focus-visible:disabled, .btn.btn-destructive.disabled, .btn.btn-destructive.disabled:hover, .btn.btn-destructive.disabled:focus-visible':
    {
      backgroundColor: 'rgba(var(--fill-red))',
    },
  '.btn-secondary.btn-destructive': {
    color: 'rgba(var(--glyph-red))',
    backgroundColor: 'rgba(var(--fill-gray-quaternary)) !important',
  },
  '.btn-tertiary.btn-destructive': {
    color: 'rgba(var(--glyph-red))',
    backgroundColor: 'transparent !important',
  },
  '.btn-tertiary.btn-destructive:active': {
    backgroundColor: 'rgba(var(--fill-red-secondary))',
  },
  '.btn-destructive:focus-visible': {
    boxShadow: '0 0 0 3px rgba(227, 0, 0, 0.35)',
  },
  '.btn-link': {
    fontSize: '1rem',
    color: 'rgba(var(--glyph-primary, var(--primary)))',
    minWidth: '0',
    padding: '0',
    backgroundColor: 'transparent',
    borderRadius: 2,
  },
  '.btn-link.btn-destructive': {
    color: 'rgba(var(--glyph-red))',
    backgroundColor: 'transparent',
  },
  '.btn-link:hover': {
    backgroundColor: 'transparent',
    textDecoration: 'underline',
  },
  '.btn-link:active': {
    backgroundColor: 'transparent',
    filter: 'brightness(80%) hue-rotate(1deg)',
  },
  '.btn-link:disabled, .btn-link:hover:disabled, .btn-link:focus-visible:disabled, .btn-link.disabled, .btn-link.disabled:hover, .btn-link.disabled:focus-visible':
    {
      opacity: '.4',
      cursor: 'not-allowed',
      textDecoration: 'none',
      filter: 'none',
      pointerEvents: 'none',
    },
};
