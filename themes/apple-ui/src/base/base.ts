export const base = {
  body: {
    fontSize: '1rem',
    color: 'rgba(var(--glyph-gray))',
    '-webkitFontSmoothing': 'antialiased',
    '-mozOsxFontSmoothing': 'grayscale',
    backgroundColor: 'rgba(var(--fill))',
  },
  hr: {
    borderTopWidth: 1,
  },
  'a, summary': {
    color: 'rgba(var(--glyph-primary, var(--primary)))',
  },
  'a, summary, button': {
    transition: 'all 200ms cubic-bezier(0.4, 0, 1, 1)',
  },
  summary: {
    cursor: 'pointer',
  },
  'a:hover': {
    textDecoration: 'underline',
  },
  'a:focus, button:focus, summary:focus': {
    outline: '0',
  },
  'a:focus-visible, button:focus-visible, summary:focus-visible': {
    boxShadow: '0 0 0 3px rgba(var(--primary), 0.35)',
    outline: '0',
  },
  '.keyboard-focus a:focus, .keyboard-focus button:focus, .keyboard-focus summary:focus':
  {
    boxShadow: '0 0 0 3px rgba(var(--primary), 0.35)',
    outline: '0',
  },
  'pre, code': {
    fontSize: '0.875rem',
    fontFamily:
      '"SF Mono", ui-monospace, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  pre: {
    backgroundColor: 'rgba(var(--fill-tertiary))',
    color: 'rgba(var(--glyph-gray))',
    borderColor: 'rgba(var(--fill-gray-quaternary))',
    display: 'block',
    padding: '0.75rem',
    overflowX: 'scroll',
    borderWidth: 1,
    borderRadius: 2,
  },
  code: {
    display: 'inline',
    color: 'rgba(var(--ios-indigo))',
  },
  'pre code': {
    color: 'inherit',
  },
  'code p': {
    fontSize: 'inherit',
    lineHeight: 'inherit',
    letterSpacing: 'inherit',
  },
  '@media screen and (prefers-reduced-motion)': {
    ':root': {
      '--fade': 'none 0s',
    },
  },
  '[x-cloak]': {
    display: 'none',
  },
};
