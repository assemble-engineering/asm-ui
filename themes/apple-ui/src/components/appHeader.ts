export const appHeader = {
  '.app-header': {
    '--nav-bg-fill': 'rgba(var(--fill))',
    borderColor: 'rgba(var(--fill-gray-quaternary))',
    position: 'sticky',
    top: '0',
    zIndex: '50',
    display: 'block',
    borderBottomWidth: 1,
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    backgroundColor: 'var(--nav-bg-fill)',
  },
  '.app-header-container': {
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '1.25rem',
    paddingRight: '1.25rem',
    gridTemplateColumns: '1fr 600px 1fr',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
  },
  '.app-header-org': {
    fontSize: '1rem',
    display: 'block',
    width: '100%',
    paddingLeft: '1.25rem',
    paddingRight: '1.25rem',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    lineHeight: '1.25rem',
    color: 'rgba(var(--fill))',
    backgroundColor: 'rgba(var(--glyph))',
  },
  '.app-header-title': {
    color: 'rgba(var(--glyph-gray))',
    fontSize: '1.25rem',
    fontWeight: '400',
    lineHeight: '1.5rem',
    justifySelf: 'flex-start',
  },
  '.app-name': {
    fontWeight: '600',
  },
  '.app-header-title:hover': {
    textDecoration: 'none',
  },
  '.app-header-nav': {
    fontSize: '0.875rem',
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: '0.75rem',
    paddingRight: '0.75rem',
    lineHeight: '1.25rem',
  },
  '.app-header-nav * + *': {
    marginLeft: '4rem',
  },
  '.app-header-nav-item': {
    color: 'rgba(var(--glyph-gray))',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    borderRadius: 6,
  },
  '.app-header-user:hover, .app-header-nav-item:not(.active):hover': {
    opacity: '.8',
    textDecoration: 'none',
  },
  '.app-header-nav-item.active': {
    backgroundColor: 'rgba(var(--fill-gray-quaternary))',
    textDecoration: 'none',
  },
  '.app-header-user-container': {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  '.app-header-user-container > .dropdown-menu': {
    right: '0',
  },
  '.app-header-user': {
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    borderRadius: 4,
  },
  '.app-header-user > .user-icon': {
    width: 24,
    height: 24,
    display: 'none',
    maxWidth: 'none',
    maxHeight: 'none',
  },
  '.app-header-nav-mobile': {
    display: 'none',
  },

  '@media (max-width: 1279px)': {
    '.app-header-container': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    '.app-header-nav * + *': {
      marginLeft: '1.25rem',
    },
  },
  '@media (max-width: 1023px)': {
    '.app-header-container': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    '.app-header-nav': {
      justifyContent: 'flex-end',
      flexGrow: '1',
    },
    '.app-header-nav * + *': {
      marginLeft: '0.5rem',
    },
    '.app-header-user > .user-icon': {
      width: 24,
      height: 24,
      display: 'block',
    },
    '.app-header-user > .user-name': {
      display: 'none',
    },
    '.app-header-user::after': {
      display: 'none',
    },
  },
  '@media (max-width: 720px)': {
    '.app-header-container': {
      paddingTop: 18,
      paddingBottom: 18,
    },
    '.app-header-nav': {
      display: 'none',
    },
    '.app-header-nav-mobile': {
      display: 'flex',
      order: '-9999',
    },
    '.app-header-user-container': {
      flexGrow: '1',
    },
  },
  '.nav-mobile-icon': {
    display: 'block',
    position: 'relative',
    width: '1.5rem',
    height: '1.5rem',
    marginRight: '0.75rem',
    '--transformRotate': '0',
    borderRadius: 4,
    cursor: 'pointer',
  },
  '.nav-mobile-icon::before, .nav-mobile-icon::after': {
    backgroundColor: 'rgba(var(--fill-gray))',
    position: 'absolute',
    left: '0',
    display: 'block',
    width: '100%',
    '--transformRotate': '0',
    opacity: '1',
    borderRadius: 100,
    content: '""',
    transition: '.1596s cubic-bezier(0.52, 0.16, 0.52, 0.84) .1008s',
    height: 2,
  },
  '.nav-mobile-icon::before': {
    top: 5,
    transformOrigin: 'left center',
  },
  '.nav-mobile-icon::after': {
    bottom: 5,
    transformOrigin: 'left center',
  },
  '.nav-mobile-icon.active::before': {
    transform: 'rotate(45deg)',
    top: 2,
    left: 4,
  },
  '.nav-mobile-icon.active::after': {
    transform: 'rotate(-45deg)',
    bottom: 3,
    left: 4,
  },
};
