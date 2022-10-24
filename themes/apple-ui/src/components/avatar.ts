export const avatar = {
  '.avatar': {
    color: 'rgba(var(--glyph-gray))',
    backgroundColor: 'rgba(var(--fill-gray-quaternary))',
    fontSize: '0.8125rem',
    flex: 'none',
    display: 'inline-block',
    width: '2rem',
    height: '2rem',
    fontWeight: '400',
    lineHeight: '1.25rem',
    textAlign: 'center',
    borderRadius: 9999,
  },
  '.avatar-text': {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '2rem',
    height: '2rem',
  },
  '.avatar-stack': {
    display: 'flex',
  },
  '.avatar-stack .avatar + .avatar': {
    marginLeft: -3,
    boxShadow: '0 0 0 1px #fff',
  },
  '.avatar-md': {
    fontSize: '0.875rem',
    width: '2.5rem',
    height: '2.5rem',
  },
  '.avatar-md .avatar-text': {
    width: '2.5rem',
    height: '2.5rem',
  },
  '.avatar-lg': {
    fontSize: '1.125rem',
    width: '3rem',
    height: '3rem',
    lineHeight: '1.25rem',
  },
  '.avatar-lg .avatar-text': {
    width: '3rem',
    height: '3rem',
  },
  '.avatar-blue, .avatar-green, .avatar-indigo, .avatar-pink, .avatar-purple, .avatar-red':
    {
      color: '#fff',
    },
  '.avatar-yellow, .avatar-teal, .avatar-orange': {
    color: '#1d1d1f',
  },
  '.avatar-blue': {
    backgroundColor: 'rgba(var(--ios-blue))',
  },
  '.avatar-green': {
    backgroundColor: 'rgba(var(--ios-green))',
  },
  '.avatar-indigo': {
    backgroundColor: 'rgba(var(--ios-indigo))',
  },
  '.avatar-pink': {
    backgroundColor: 'rgba(var(--ios-pink))',
  },
  '.avatar-purple': {
    backgroundColor: 'rgba(var(--ios-purple))',
  },
  '.avatar-red': {
    backgroundColor: 'rgba(var(--ios-red))',
  },
  '.avatar-orange': {
    backgroundColor: 'rgba(var(--ios-orange))',
  },
  '.avatar-teal': {
    backgroundColor: 'rgba(var(--ios-teal))',
  },
  '.avatar-yellow': {
    backgroundColor: 'rgba(var(--ios-yellow))',
  },
};
