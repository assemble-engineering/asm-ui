export const icons = {
  '.svg-icon': {
    fill: 'rgba(var(--glyph-gray))',
    width: '1.25rem',
    height: '1.25rem',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  '.icon': {
    fill: 'rgba(var(--glyph-gray))',
  },
  '.icon-before, .icon-after': {
    alignItems: 'baseline',
  },
  '.icon::before, .icon::after': {
    fontFamily: '"SF Pro Icons"',
    display: 'inline-block',
    fontStyle: 'normal',
    transition: 'var(--fade)',
    lineHeight: 1,
  },
  '.icon-after::before': {
    content: '""',
    display: 'none',
  },
  '.icon-before::after': {
    content: '""',
    display: 'none',
  },
  '.icon-after::after': {
    marginLeft: '0.3em',
  },
  '.icon-before::before': {
    marginLeft: '0',
    marginRight: '0.3em',
  },
  '.icon-chevron-down::after, .icon-before.icon-chevron-down::before, .icon-after.icon-chevron-down::after':
    {
      content: '""',
    },
  '.icon-chevron-down-circle::after, .icon-before.icon-chevron-down-circle::before, .icon-after.icon-chevron-down-circle::after':
    {
      content: '""',
    },
  '.icon-chevron-left::after, .icon-before.icon-chevron-left::before, .icon-after.icon-chevron-left::after':
    {
      content: '""',
    },
  '.icon-chevron-left-circle::after, .icon-before.icon-chevron-left-circle::before, .icon-after.icon-chevron-left-circle::after':
    {
      content: '""',
    },
  '.icon-chevron-right::after, .icon-before.icon-chevron-right::before, .icon-after.icon-chevron-right::after':
    {
      content: '""',
    },
  '.icon-chevron-right-circle::after, .icon-before.icon-chevron-right-circle::before, .icon-after.icon-chevron-right-circle::after':
    {
      content: '""',
    },
  '.icon-chevron-up::after, .icon-before.icon-chevron-up::before, .icon-after.icon-chevron-up::after':
    {
      content: '""',
    },
  '.icon-chevron-up-circle::after, .icon-before.icon-chevron-up-circle::before, .icon-after.icon-chevron-up-circle::after':
    {
      content: '""',
    },
  '.icon-download-circle::after, .icon-before.icon-download-circle::before, .icon-after.icon-download-circle::after':
    {
      content: '""',
    },
  '.icon-arrow-up-circle::after, .icon-before.icon-arrow-up-circle::before, .icon-after.icon-arrow-up-circle::after':
    {
      content: '"􀁶"',
    },
  '.icon-external::after, .icon-before.icon-external::before, .icon-after.icon-external::after':
    {
      content: '""',
    },
  '.icon-share::after, .icon-before.icon-share::before, .icon-after.icon-share::after':
    {
      content: '""',
    },
  '.icon-search::after, .icon-before.icon-search::before, .icon-after.icon-search::after':
    {
      content: '""',
    },
  '.icon-checkmark::after, .icon-before.icon-checkmark::before, .icon-after.icon-checkmark::after':
    {
      content: '""',
    },
  '.icon-checkmark-circle::after, .icon-before.icon-checkmark-circle::before, .icon-after.icon-checkmark-circle::after':
    {
      content: '""',
    },
  '.icon-checkmark-solid::after, .icon-before.icon-checkmark-solid::before, .icon-after.icon-checkmark-solid::after':
    {
      content: '""',
    },
  '.icon-xmark::after, .icon-before.icon-xmark::before, .icon-after.icon-xmark::after':
    {
      content: '""',
    },
  '.icon-xmark-circle::after, .icon-before.icon-xmark-circle::before, .icon-after.icon-xmark-circle::after':
    {
      content: '""',
    },
  '.icon-xmark-solid::after, .icon-before.icon-xmark-solid::before, .icon-after.icon-xmark-solid::after':
    {
      content: '""',
    },
  '.icon-exclamationmark::after, .icon-before.icon-exclamationmark::before, .icon-after.icon-exclamationmark::after':
    {
      content: '""',
    },
  '.icon-exclamationmark-circle::after, .icon-before.icon-exclamationmark-circle::before, .icon-after.icon-exclamationmark-circle::after':
    {
      content: '""',
    },
  '.icon-exclamationmark-solid::after, .icon-before.icon-exclamationmark-solid::before, .icon-after.icon-exclamationmark-solid::after':
    {
      content: '""',
    },
  '.icon-exclamationmark-triangle::after, .icon-before.icon-exclamationmark-triangle::before, .icon-after.icon-exclamationmark-triangle::after':
    {
      content: '""',
    },
  '.icon-exclamationmark-triangle-solid::after, .icon-before.icon-exclamationmark-triangle-solid::before, .icon-after.icon-exclamationmark-triangle-solid::after':
    {
      content: '""',
    },
  '.icon-info-circle::after, .icon-before.icon-info-circle::before, .icon-after.icon-info-circle::after':
    {
      content: '""',
    },
  '.icon-info-solid::after, .icon-before.icon-info-solid::before, .icon-after.icon-info-solid::after':
    {
      content: '""',
    },
  '.icon-questionmark::after, .icon-before.icon-questionmark::before, .icon-after.icon-questionmark::after':
    {
      content: '""',
    },
  '.icon-questionmark-circle::after, .icon-before.icon-questionmark-circle::before, .icon-after.icon-questionmark-circle::after':
    {
      content: '""',
    },
  '.icon-questionmark-solid::after, .icon-before.icon-questionmark-solid::before, .icon-after.icon-questionmark-solid::after':
    {
      content: '""',
    },
  '.icon-plus::after, .icon-before.icon-plus::before, .icon-after.icon-plus::after':
    {
      content: '""',
    },
  '.icon-plus-circle::after, .icon-before.icon-plus-circle::before, .icon-after.icon-plus-circle::after':
    {
      content: '""',
    },
  '.icon-plus-solid::after, .icon-before.icon-plus-solid::before, .icon-after.icon-plus-solid::after':
    {
      content: '""',
    },
  '.icon-minus::after, .icon-before.icon-minus::before, .icon-after.icon-minus::after':
    {
      content: '""',
    },
  '.icon-minus-circle::after, .icon-before.icon-minus-circle::before, .icon-after.icon-minus-circle::after':
    {
      content: '""',
    },
  '.icon-minus-solid::after, .icon-before.icon-minus-solid::before, .icon-after.icon-minus-solid::after':
    {
      content: '""',
    },
};
