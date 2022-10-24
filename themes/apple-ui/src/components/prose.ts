export const prose = {
  '.prose': {
    color: 'rgba(var(--glyph-gray))',
    maxWidth: '68ch',
    fontSize: '1rem',
    lineHeight: '1.75',
  },
  '.prose [class~=lead]': {
    color: 'rgba(var(--glyph-gray-secondary))',
    fontSize: '1.25em',
    lineHeight: '1.6',
    marginTop: '1.2em',
    marginBottom: '1.2em',
  },
  '.prose a': {
    color: 'rgba(var(--glyph-primary, var(--primary)))',
    textDecoration: 'none',
  },
  '.prose a:hover': {
    textDecoration: 'underline',
  },
  '.prose kbd': {
    fontSize: '0.9em',
    fontWeight: '500',
    padding: '1px 6px',
    background: 'rgba(var(--fill))',
    borderRadius: 6,
    color: 'rgba(var(--glyph-gray))',
    border: '1px solid rgba(var(--fill-gray-tertiary))',
    boxShadow: '0 2px 0 rgba(var(--fill-gray-tertiary), 0.7)',
  },
  '.prose mark': {
    background: 'rgba(var(--ios-yellow))',
    padding: '0 2px',
  },
  '.prose strong': {
    color: 'rgba(var(--glyph-gray))',
    fontWeight: '600',
  },
  '.prose ol': {
    counterReset: 'list-counter',
    marginTop: '1.25em',
    marginBottom: '1.25em',
  },
  '.prose ol > li': {
    position: 'relative',
    counterIncrement: 'list-counter',
    paddingLeft: '1.75em',
  },
  '.prose ol > li::before': {
    content: 'counter(list-counter) "."',
    position: 'absolute',
    fontWeight: '400',
    color: 'rgba(var(--glyph-gray-tertiary))',
    left: '0',
  },
  '.prose ul > li': {
    position: 'relative',
    paddingLeft: '1.75em',
  },
  '.prose ul > li::before': {
    content: '""',
    position: 'absolute',
    backgroundColor: 'rgba(var(--fill-gray-tertiary))',
    borderRadius: '50%',
    width: '0.375em',
    height: '0.375em',
    top: '0.6875em',
    left: '0.25em',
  },
  '.prose hr': {
    borderColor: 'rgba(var(--fill-gray-quaternary))',
    borderTopWidth: 1,
    marginTop: '3em',
    marginBottom: '3em',
  },
  '.prose blockquote': {
    fontWeight: '500',
    fontStyle: 'italic',
    color: 'rgba(var(--glyph-gray))',
    borderLeftWidth: '0.25rem',
    borderLeftColor: 'rgba(var(--fill-gray-quaternary))',
    quotes: '"\\201C""\\201D""\\2018""\\2019"',
    marginTop: '1.6em',
    marginBottom: '1.6em',
    paddingLeft: '1em',
  },
  '.prose blockquote p:first-of-type::before': {
    content: 'open-quote',
  },
  '.prose blockquote p:last-of-type::after': {
    content: 'close-quote',
  },
  '.prose h1': {
    color: 'rgba(var(--glyph-gray))',
    fontWeight: '800',
    fontSize: '2.25em',
    marginTop: '0',
    marginBottom: '0.8888889em',
    lineHeight: '1.1111111',
  },
  '.prose h2': {
    color: 'rgba(var(--glyph-gray))',
    fontWeight: '700',
    fontSize: '1.5em',
    marginTop: '2em',
    marginBottom: '1em',
    lineHeight: '1.3333333',
  },
  '.prose h3': {
    fontSize: '1.25em',
    marginTop: '1.6em',
    marginBottom: '0.6em',
    lineHeight: '1.6',
  },
  '.prose h3, .prose h4': {
    color: 'rgba(var(--glyph-gray))',
    fontWeight: '600',
  },
  '.prose h4': {
    marginTop: '1.5em',
    marginBottom: '0.5em',
    lineHeight: '1.5',
  },
  '.prose figure figcaption': {
    color: 'rgba(var(--glyph-gray-tertiary))',
    fontSize: '0.875em',
    lineHeight: '1.4285714',
    marginTop: '0.8571429em',
  },
  '.prose code': {
    color: 'rgba(var(--glyph-gray))',
    fontWeight: '600',
    fontSize: '0.875em',
  },
  '.prose code::after, .prose code::before': {
    content: '"`"',
  },
  '.prose pre': {
    color: 'rgba(var(--fill-gray-quaternary))',
    backgroundColor: '#2d3748',
    overflowX: 'auto',
    fontSize: '0.875em',
    lineHeight: '1.7142857',
    marginTop: '1.7142857em',
    marginBottom: '1.7142857em',
    borderRadius: '0.375rem',
    padding: '0.8571429em 1.1428571em',
  },
  '.prose pre code': {
    backgroundColor: 'transparent',
    borderWidth: '0',
    borderRadius: '0',
    padding: '0',
    fontWeight: '400',
    color: 'inherit',
    fontSize: 'inherit',
    fontFamily: 'inherit',
    lineHeight: 'inherit',
  },
  '.prose pre code::after, .prose pre code::before': {
    content: '""',
  },
  '.prose table': {
    width: '100%',
    tableLayout: 'auto',
    textAlign: 'left',
    marginTop: '2em',
    marginBottom: '2em',
    fontSize: '0.875em',
    lineHeight: '1.7142857',
  },
  '.prose thead': {
    color: 'rgba(var(--glyph-gray))',
    fontWeight: '600',
    borderBottomWidth: 1,
    borderBottomColor: '#cbd5e0',
  },
  '.prose thead th': {
    verticalAlign: 'bottom',
    paddingRight: '0.5714286em',
    paddingBottom: '0.5714286em',
    paddingLeft: '0.5714286em',
  },
  '.prose tbody tr': {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(var(--fill-gray-quaternary))',
  },
  '.prose tbody tr:last-child': {
    borderBottomWidth: '0',
  },
  '.prose tbody td': {
    verticalAlign: 'top',
    padding: '0.5714286em',
  },
  '.prose p': {
    marginTop: '1.25em',
    marginBottom: '1.25em',
  },
  '.prose figure, .prose img': {
    marginTop: '2em',
    marginBottom: '2em',
  },
  '.prose figure > *': {
    marginTop: '0',
    marginBottom: '0',
  },
  '.prose h2 code': {
    fontSize: '0.875em',
  },
  '.prose h3 code': {
    fontSize: '0.9em',
  },
  '.prose ul': {
    marginTop: '1.25em',
    marginBottom: '1.25em',
  },
  '.prose li': {
    marginTop: '0.5em',
    marginBottom: '0.5em',
  },
  '.prose > ul > li p': {
    marginTop: '0.75em',
    marginBottom: '0.75em',
  },
  '.prose > ul > li > :first-child': {
    marginTop: '1.25em',
  },
  '.prose > ul > li > :last-child': {
    marginBottom: '1.25em',
  },
  '.prose > ol > li > :first-child': {
    marginTop: '1.25em',
  },
  '.prose > ol > li > :last-child': {
    marginBottom: '1.25em',
  },
  '.prose ol ol, .prose ol ul, .prose ul ol, .prose ul ul': {
    marginTop: '0.75em',
    marginBottom: '0.75em',
  },
  '.prose h2 + *, .prose h3 + *, .prose h4 + *, .prose hr + *': {
    marginTop: '0',
  },
  '.prose thead th:first-child': {
    paddingLeft: '0',
  },
  '.prose thead th:last-child': {
    paddingRight: '0',
  },
  '.prose tbody td:first-child': {
    paddingLeft: '0',
  },
  '.prose tbody td:last-child': {
    paddingRight: '0',
  },
  '.prose > :first-child': {
    marginTop: '0',
  },
  '.prose > :last-child': {
    marginBottom: '0',
  },
  '.prose-sm': {
    fontSize: '0.875rem',
    lineHeight: '1.7142857',
  },
  '.prose-sm p': {
    marginTop: '1.1428571em',
    marginBottom: '1.1428571em',
  },
  '.prose-sm [class~=lead]': {
    fontSize: '1.2857143em',
    lineHeight: '1.5555556',
    marginTop: '0.8888889em',
    marginBottom: '0.8888889em',
  },
  '.prose-sm blockquote': {
    marginTop: '1.3333333em',
    marginBottom: '1.3333333em',
    paddingLeft: '1.1111111em',
  },
  '.prose-sm h1': {
    fontSize: '2.1428571em',
    marginTop: '0',
    marginBottom: '0.8em',
    lineHeight: '1.2',
  },
  '.prose-sm h2': {
    fontSize: '1.4285714em',
    marginTop: '1.6em',
    marginBottom: '0.8em',
    lineHeight: '1.4',
  },
  '.prose-sm h3': {
    fontSize: '1.2857143em',
    marginTop: '1.5555556em',
    marginBottom: '0.4444444em',
    lineHeight: '1.5555556',
  },
  '.prose-sm h4': {
    marginTop: '1.4285714em',
    marginBottom: '0.5714286em',
    lineHeight: '1.4285714',
  },
  '.prose-sm figure, .prose-sm img': {
    marginTop: '1.7142857em',
    marginBottom: '1.7142857em',
  },
  '.prose-sm figure > *': {
    marginTop: '0',
    marginBottom: '0',
  },
  '.prose-sm figure figcaption': {
    fontSize: '0.8571429em',
    lineHeight: '1.3333333',
    marginTop: '0.6666667em',
  },
  '.prose-sm code': {
    fontSize: '0.8571429em',
  },
  '.prose-sm h2 code': {
    fontSize: '0.9em',
  },
  '.prose-sm h3 code': {
    fontSize: '0.8888889em',
  },
  '.prose-sm pre': {
    fontSize: '0.8571429em',
    lineHeight: '1.6666667',
    marginTop: '1.6666667em',
    marginBottom: '1.6666667em',
    borderRadius: '0.25rem',
    padding: '0.6666667em 1em',
  },
  '.prose-sm ol, .prose-sm ul': {
    marginTop: '1.1428571em',
    marginBottom: '1.1428571em',
  },
  '.prose-sm li': {
    marginTop: '0.2857143em',
    marginBottom: '0.2857143em',
  },
  '.prose-sm ol > li': {
    paddingLeft: '1.5714286em',
  },
  '.prose-sm ol > li::before': {
    left: '0',
  },
  '.prose-sm ul > li': {
    paddingLeft: '1.5714286em',
  },
  '.prose-sm ul > li::before': {
    height: '0.3571429em',
    width: '0.3571429em',
    top: '0.67857em',
    left: '0.2142857em',
  },
  '.prose-sm > ul > li p': {
    marginTop: '0.5714286em',
    marginBottom: '0.5714286em',
  },
  '.prose-sm > ul > li > :first-child': {
    marginTop: '1.1428571em',
  },
  '.prose-sm > ul > li > :last-child': {
    marginBottom: '1.1428571em',
  },
  '.prose-sm > ol > li > :first-child': {
    marginTop: '1.1428571em',
  },
  '.prose-sm > ol > li > :last-child': {
    marginBottom: '1.1428571em',
  },
  '.prose-sm ol ol, .prose-sm ol ul, .prose-sm ul ol, .prose-sm ul ul': {
    marginTop: '0.5714286em',
    marginBottom: '0.5714286em',
  },
  '.prose-sm hr': {
    marginTop: '2.8571429em',
    marginBottom: '2.8571429em',
  },
  '.prose-sm h2 + *, .prose-sm h3 + *, .prose-sm h4 + *, .prose-sm hr + *': {
    marginTop: '0',
  },
  '.prose-sm table': {
    fontSize: '0.8571429em',
    lineHeight: '1.5',
  },
  '.prose-sm thead th': {
    paddingRight: '1em',
    paddingBottom: '0.6666667em',
    paddingLeft: '1em',
  },
  '.prose-sm thead th:first-child': {
    paddingLeft: '0',
  },
  '.prose-sm thead th:last-child': {
    paddingRight: '0',
  },
  '.prose-sm tbody td': {
    padding: '0.6666667em 1em',
  },
  '.prose-sm tbody td:first-child': {
    paddingLeft: '0',
  },
  '.prose-sm tbody td:last-child': {
    paddingRight: '0',
  },
  '.prose-sm > :first-child': {
    marginTop: '0',
  },
  '.prose-sm > :last-child': {
    marginBottom: '0',
  },
  '@media (min-width: 640px)': {
    '.sm\\:prose': {
      color: 'rgba(var(--glyph-gray))',
      maxWidth: '68ch',
      fontSize: '1rem',
      lineHeight: '1.7777778',
    },
    '.sm\\:prose [class~=lead]': {
      color: 'rgba(var(--glyph-gray-secondary))',
      fontSize: '1.25em',
      lineHeight: '1.6',
      marginTop: '1.2em',
      marginBottom: '1.2em',
    },
    '.sm\\:prose a': {
      color: 'rgba(var(--glyph-primary, var(--primary)))',
      textDecoration: 'none',
    },
    '.sm\\:prose strong': {
      color: 'rgba(var(--glyph-gray))',
      fontWeight: '600',
    },
    '.sm\\:prose ol': {
      counterReset: 'list-counter',
      marginTop: '1.25em',
      marginBottom: '1.25em',
    },
    '.sm\\:prose ol > li': {
      position: 'relative',
      counterIncrement: 'list-counter',
      paddingLeft: '1.75em',
    },
    '.sm\\:prose ol > li::before': {
      content: 'counter(list-counter) "."',
      position: 'absolute',
      fontWeight: '400',
      color: 'rgba(var(--glyph-gray-tertiary))',
      left: '0',
    },
    '.sm\\:prose ul > li': {
      position: 'relative',
      paddingLeft: '1.75em',
    },
    '.sm\\:prose ul > li::before': {
      content: '""',
      position: 'absolute',
      backgroundColor: 'rgba(var(--fill-gray-tertiary))',
      borderRadius: '50%',
      width: '0.375em',
      height: '0.375em',
      top: '0.6875em',
      left: '0.25em',
    },
    '.sm\\:prose hr': {
      borderColor: 'rgba(var(--fill-gray-quaternary))',
      borderTopWidth: 1,
      marginTop: '3em',
      marginBottom: '3em',
    },
    '.sm\\:prose blockquote': {
      fontWeight: '500',
      fontStyle: 'italic',
      color: 'rgba(var(--glyph-gray))',
      borderLeftWidth: '0.25rem',
      borderLeftColor: 'rgba(var(--fill-gray-quaternary))',
      quotes: '"\\201C""\\201D""\\2018""\\2019"',
      marginTop: '1.6em',
      marginBottom: '1.6em',
      paddingLeft: '1em',
    },
    '.sm\\:prose blockquote p:first-of-type::before': {
      content: 'open-quote',
    },
    '.sm\\:prose blockquote p:last-of-type::after': {
      content: 'close-quote',
    },
    '.sm\\:prose h1': {
      color: 'rgba(var(--glyph-gray))',
      fontWeight: '800',
      fontSize: '2.25em',
      marginTop: '0',
      marginBottom: '0.8888889em',
      lineHeight: '1.1111111',
    },
    '.sm\\:prose h2': {
      color: 'rgba(var(--glyph-gray))',
      fontWeight: '700',
      fontSize: '1.5em',
      marginTop: '2em',
      marginBottom: '1em',
      lineHeight: '1.3333333',
    },
    '.sm\\:prose h3': {
      fontSize: '1.25em',
      marginTop: '1.6em',
      marginBottom: '0.6em',
      lineHeight: '1.6',
    },
    '.sm\\:prose h3, .sm\\:prose h4': {
      color: 'rgba(var(--glyph-gray))',
      fontWeight: '600',
    },
    '.sm\\:prose h4': {
      marginTop: '1.5em',
      marginBottom: '0.5em',
      lineHeight: '1.5',
    },
    '.sm\\:prose figure figcaption': {
      color: 'rgba(var(--glyph-gray-tertiary))',
      fontSize: '0.875em',
      lineHeight: '1.4285714',
      marginTop: '0.8571429em',
    },
    '.sm\\:prose code': {
      color: 'rgba(var(--glyph-gray))',
      fontWeight: '600',
      fontSize: '0.875em',
    },
    '.sm\\:prose code::after, .sm\\:prose code::before': {
      content: '"`"',
    },
    '.sm\\:prose pre': {
      color: 'rgba(var(--fill-gray-quaternary))',
      backgroundColor: '#2d3748',
      overflowX: 'auto',
      fontSize: '0.875em',
      lineHeight: '1.7142857',
      marginTop: '1.7142857em',
      marginBottom: '1.7142857em',
      borderRadius: '0.375rem',
      padding: '0.8571429em 1.1428571em',
    },
    '.sm\\:prose pre code': {
      backgroundColor: 'transparent',
      borderWidth: '0',
      borderRadius: '0',
      padding: '0',
      fontWeight: '400',
      color: 'inherit',
      fontSize: 'inherit',
      fontFamily: 'inherit',
      lineHeight: 'inherit',
    },
    '.sm\\:prose pre code::after, .sm\\:prose pre code::before': {
      content: '""',
    },
    '.sm\\:prose table': {
      width: '100%',
      tableLayout: 'auto',
      textAlign: 'left',
      marginTop: '2em',
      marginBottom: '2em',
      fontSize: '0.875em',
      lineHeight: '1.7142857',
    },
    '.sm\\:prose thead': {
      color: 'rgba(var(--glyph-gray))',
      fontWeight: '600',
      borderBottomWidth: 1,
      borderBottomColor: '#cbd5e0',
    },
    '.sm\\:prose thead th': {
      verticalAlign: 'bottom',
      paddingRight: '0.5714286em',
      paddingBottom: '0.5714286em',
      paddingLeft: '0.5714286em',
    },
    '.sm\\:prose tbody tr': {
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(var(--fill-gray-quaternary))',
    },
    '.sm\\:prose tbody tr:last-child': {
      borderBottomWidth: '0',
    },
    '.sm\\:prose tbody td': {
      verticalAlign: 'top',
      padding: '0.5714286em',
    },
    '.sm\\:prose p': {
      marginTop: '1.25em',
      marginBottom: '1.25em',
    },
    '.sm\\:prose figure, .sm\\:prose img': {
      marginTop: '2em',
      marginBottom: '2em',
    },
    '.sm\\:prose figure > *': {
      marginTop: '0',
      marginBottom: '0',
    },
    '.sm\\:prose h2 code': {
      fontSize: '0.875em',
    },
    '.sm\\:prose h3 code': {
      fontSize: '0.9em',
    },
    '.sm\\:prose ul': {
      marginTop: '1.25em',
      marginBottom: '1.25em',
    },
    '.sm\\:prose li': {
      marginTop: '0.5em',
      marginBottom: '0.5em',
    },
    '.sm\\:prose > ul > li p': {
      marginTop: '0.75em',
      marginBottom: '0.75em',
    },
    '.sm\\:prose > ul > li > :first-child': {
      marginTop: '1.25em',
    },
    '.sm\\:prose > ul > li > :last-child': {
      marginBottom: '1.25em',
    },
    '.sm\\:prose > ol > li > :first-child': {
      marginTop: '1.25em',
    },
    '.sm\\:prose > ol > li > :last-child': {
      marginBottom: '1.25em',
    },
    '.sm\\:prose ol ol, .sm\\:prose ol ul, .sm:prose ul ol, .sm:prose ul ul': {
      marginTop: '0.75em',
      marginBottom: '0.75em',
    },
    '.sm\\:prose h2 + *, .sm\\:prose h3 + *, .sm:prose h4 + *, .sm:prose hr + *':
      {
        marginTop: '0',
      },
    '.sm\\:prose thead th:first-child': {
      paddingLeft: '0',
    },
    '.sm\\:prose thead th:last-child': {
      paddingRight: '0',
    },
    '.sm\\:prose tbody td:first-child': {
      paddingLeft: '0',
    },
    '.sm\\:prose tbody td:last-child': {
      paddingRight: '0',
    },
    '.sm\\:prose > :first-child': {
      marginTop: '0',
    },
    '.sm\\:prose > :last-child': {
      marginBottom: '0',
    },
    '.sm\\:flex': {
      display: 'flex',
    },
    '.sm\\:items-center': {
      alignItems: 'center',
    },
    '.sm\\:justify-between': {
      justifyContent: 'space-between',
    },
    '.sm\\:h-8': {
      height: '2rem',
    },
    '.sm\\:px-6': {
      paddingLeft: '1.5rem',
      paddingRight: '1.5rem',
    },
    '.sm\\:py-12': {
      paddingTop: '3rem',
      paddingBottom: '3rem',
    },
  },
  '@media (min-width: 1024px)': {
    '.lg\\:prose-lg': {
      fontSize: '1.125rem',
      lineHeight: '1.65',
    },
    '.lg\\:prose-lg p': {
      marginTop: '1.3333333em',
      marginBottom: '1.3333333em',
    },
    '.lg\\:prose-lg [class~=lead]': {
      fontSize: '1.2222222em',
      lineHeight: '1.4545455',
      marginTop: '1.0909091em',
      marginBottom: '1.0909091em',
    },
    '.lg\\:prose-lg blockquote': {
      marginTop: '1.6666667em',
      marginBottom: '1.6666667em',
      paddingLeft: '1em',
    },
    '.lg\\:prose-lg h1': {
      fontSize: '2.6666667em',
      marginTop: '0',
      marginBottom: '0.8333333em',
      lineHeight: '1',
    },
    '.lg\\:prose-lg h2': {
      fontSize: '1.6666667em',
      marginTop: '1.8666667em',
      marginBottom: '1.0666667em',
      lineHeight: '1.3333333',
    },
    '.lg\\:prose-lg h3': {
      fontSize: '1.3333333em',
      marginTop: '1.6666667em',
      marginBottom: '0.6666667em',
      lineHeight: '1.5',
    },
    '.lg\\:prose-lg h4': {
      marginTop: '1.7777778em',
      marginBottom: '0.4444444em',
      lineHeight: '1.5555556',
    },
    '.lg\\:prose-lg figure, .lg\\:prose-lg img': {
      marginTop: '1.7777778em',
      marginBottom: '1.7777778em',
    },
    '.lg\\:prose-lg figure > *': {
      marginTop: '0',
      marginBottom: '0',
    },
    '.lg\\:prose-lg figure figcaption': {
      fontSize: '0.8888889em',
      lineHeight: '1.5',
      marginTop: '1em',
    },
    '.lg\\:prose-lg code': {
      fontSize: '0.8888889em',
    },
    '.lg\\:prose-lg h2 code': {
      fontSize: '0.8666667em',
    },
    '.lg\\:prose-lg h3 code': {
      fontSize: '0.875em',
    },
    '.lg\\:prose-lg pre': {
      fontSize: '0.8888889em',
      lineHeight: '1.7777778',
      marginTop: '2em',
      marginBottom: '2em',
      borderRadius: '0.375rem',
      padding: '1em 1.5em',
    },
    '.lg\\:prose-lg ol, .lg\\:prose-lg ul': {
      marginTop: '1.3333333em',
      marginBottom: '1.3333333em',
    },
    '.lg\\:prose-lg li': {
      marginTop: '0.6666667em',
      marginBottom: '0.6666667em',
    },
    '.lg\\:prose-lg ol > li': {
      paddingLeft: '1.6666667em',
    },
    '.lg\\:prose-lg ol > li::before': {
      left: '0',
    },
    '.lg\\:prose-lg ul > li': {
      paddingLeft: '1.6666667em',
    },
    '.lg\\:prose-lg ul > li::before': {
      width: '0.3333333em',
      height: '0.3333333em',
      top: '0.72222em',
      left: '0.2222222em',
    },
    '.lg\\:prose-lg > ul > li p': {
      marginTop: '0.8888889em',
      marginBottom: '0.8888889em',
    },
    '.lg\\:prose-lg > ul > li > :first-child': {
      marginTop: '1.3333333em',
    },
    '.lg\\:prose-lg > ul > li > :last-child': {
      marginBottom: '1.3333333em',
    },
    '.lg\\:prose-lg > ol > li > :first-child': {
      marginTop: '1.3333333em',
    },
    '.lg\\:prose-lg > ol > li > :last-child': {
      marginBottom: '1.3333333em',
    },
    '.lg\\:prose-lg ol ol, .lg\\:prose-lg ol ul, .lg\\:prose-lg ul ol, .lg:prose-lg ul ul':
      {
        marginTop: '0.8888889em',
        marginBottom: '0.8888889em',
      },
    '.lg\\:prose-lg hr': {
      marginTop: '3.1111111em',
      marginBottom: '3.1111111em',
    },
    '.lg\\:prose-lg h2 + *, .lg\\:prose-lg h3 + *, .lg:prose-lg h4 + *, .lg:prose-lg hr + *':
      {
        marginTop: '0',
      },
    '.lg\\:prose-lg table': {
      fontSize: '0.8888889em',
      lineHeight: '1.5',
    },
    '.lg\\:prose-lg thead th': {
      paddingRight: '0.75em',
      paddingBottom: '0.75em',
      paddingLeft: '0.75em',
    },
    '.lg\\:prose-lg thead th:first-child': {
      paddingLeft: '0',
    },
    '.lg\\:prose-lg thead th:last-child': {
      paddingRight: '0',
    },
    '.lg\\:prose-lg tbody td': {
      padding: '0.75em',
    },
    '.lg\\:prose-lg tbody td:first-child': {
      paddingLeft: '0',
    },
    '.lg\\:prose-lg tbody td:last-child': {
      paddingRight: '0',
    },
    '.lg\\:prose-lg > :first-child': {
      marginTop: '0',
    },
    '.lg\\:prose-lg > :last-child': {
      marginBottom: '0',
    },
    '.lg\\:max-w-4xl': {
      maxWidth: '56rem',
    },
    '.lg\\:px-8': {
      paddingLeft: '2rem',
      paddingRight: '2rem',
    },
    '.lg\\:py-16': {
      paddingTop: '4rem',
      paddingBottom: '4rem',
    },
  },
};
