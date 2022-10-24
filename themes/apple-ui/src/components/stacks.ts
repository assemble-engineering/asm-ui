export const stacks = {
  '.stack-v, .stack-h': {
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'center',
  },
  '.stack-v': {
    'flex-direction': 'column',
  },
  '.stack-v.stack-leading': {
    'align-items': 'flex-start',
  },
  '.stack-v.stack-trailing': {
    'align-items': 'flex-end',
  },
  '.stack-v.stack-top': {
    'justify-content': 'flex-start',
  },
  '.stack-v.stack-bottom': {
    'justify-content': 'flex-end',
  },
  '.stack-v.stack-reverse': {
    'flex-direction': 'column-reverse',
  },
  '.stack-v.stack-reverse.stack-bottom': {
    'justify-content': 'flex-start',
  },
  '.stack-v.stack-reverse.stack-top': {
    'justify-content': 'flex-end',
  },
  '.stack-h.stack-leading': {
    'justify-content': 'flex-start',
  },
  '.stack-h.stack-trailing': {
    'justify-content': 'flex-end',
  },
  '.stack-h.stack-top': {
    'align-items': 'flex-start',
  },
  '.stack-h.stack-bottom': {
    'align-items': 'flex-end',
  },
  '.stack-h.stack-reverse': {
    'flex-direction': 'row-reverse',
  },
  '.stack-h.stack-leading.stack-reverse': {
    'justify-content': 'flex-end',
  },
  '.stack-h.stack-trailing.stack-reverse': {
    'justify-content': 'flex-start',
  },
  '.stack-v.stack-spacer, .stack-h.stack-vfill': {
    'align-items': 'stretch',
  },
  '.stack-v.stack-hfill, .stack-h.stack-vfill': {
    'align-items': 'stretch',
  },
  '.stack-v.stack-vfill > *, .stack-h.stack-hfill > *': {
    'flex-grow': '1',
  },
  '.stack-v-max:is(.stack-v, .stack-h)': {
    height: '100%',
  },
  '.stack-h-max:is(.stack-v, .stack-h)': {
    width: '100%',
  },
  ':is(.stack-v, .stack-h) .stack-spacer': {
    'flex-grow': '1',
  },
  '.stack-max': {
    height: '100%',
    width: '100%',
  },
  '.stack-divider': {
    gap: '1px',
  },
  '.stack-distribute': {
    'justify-content': 'between',
  },
};
