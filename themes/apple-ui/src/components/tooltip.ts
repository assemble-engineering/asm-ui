export const tooltip = {
  '.tooltip': {
    position: 'relative',
  },
  '.tooltip:hover::before,\n.tooltip:hover::after': {
    '@apply visible': true,
    opacity: 1,
    transition: 'var(--fade)',
  },
  '.tooltip::before,\n.tooltip::after': {
    '@apply absolute invisible opacity-0': true,
    transition: 'var(--fade)',
  },
  '.tooltip::before': {
    '@apply block w-0 h-0': true,
    content: "''",
    border: '8px solid transparent',
  },
  '.tooltip::after': {
    '@apply text-subheadline inline-block px-3 py-2 font-normal text-white rounded-lg':
      true,
    backgroundColor: 'rgba(var(--fill-gray))',
    content: 'attr(aria-label)',
    zIndex: 500,
    wordWrap: 'break-word',
    whiteSpace: 'pre',
  },
  '.tooltip-t::before, .tooltip-tl::before, .tooltip-tr::before': {
    borderTopColor: 'rgba(var(--fill-gray))',
    transform: 'translateY(8px)',
  },
  '.tooltip-t::before': {
    right: '50%',
    bottom: '100%',
    transform: 'translate(8px, 8px)',
  },
  '.tooltip-t::after': {
    textAlign: 'center',
    right: '50%',
    bottom: '100%',
    transform: 'translate(50%, -8px)',
  },
  '.tooltip-tl::before': { left: '20px', bottom: '100%' },
  '.tooltip-tl::after': {
    left: '0',
    right: 'auto',
    bottom: '100%',
    transform: 'translateY(-8px)',
  },
  '.tooltip-tr::before': { right: '20px', bottom: '100%' },
  '.tooltip-tr::after': {
    right: '0',
    bottom: '100%',
    transform: 'translateY(-8px)',
  },
  '.tooltip-b::before,\n.tooltip-bl::before,\n.tooltip-br::before': {
    borderBottomColor: 'rgba(var(--fill-gray))',
    transform: 'translateY(-8px)',
  },
  '.tooltip-b::before': {
    right: '50%',
    top: '100%',
    transform: 'translate(8px, -8px)',
  },
  '.tooltip-b::after': {
    textAlign: 'center',
    right: '50%',
    top: '100%',
    transform: 'translate(50%, 8px)',
  },
  '.tooltip-bl::before': { left: '20px', top: '100%' },
  '.tooltip-bl::after': {
    left: '0',
    top: '100%',
    transform: 'translateY(8px)',
  },
  '.tooltip-br::before': { right: '20px', top: '100%' },
  '.tooltip-br::after': {
    right: '0',
    top: '100%',
    transform: 'translateY(8px)',
  },
  '.tooltip.tooltip-multiline::after': {
    display: 'table-cell',
    whiteSpace: 'pre-line',
    borderCollapse: 'separate',
    width: 'var(--tooltip-width, max-content)',
    maxWidth: 320,
  },
};
