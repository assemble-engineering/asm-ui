export declare const appHeader: {
    '.app-header': {
        '--nav-bg-fill': string;
        borderColor: string;
        position: string;
        top: string;
        zIndex: string;
        display: string;
        borderBottomWidth: number;
        boxShadow: string;
        backgroundColor: string;
    };
    '.app-header-container': {
        display: string;
        alignItems: string;
        justifyContent: string;
        paddingLeft: string;
        paddingRight: string;
        gridTemplateColumns: string;
        paddingTop: string;
        paddingBottom: string;
    };
    '.app-header-org': {
        fontSize: string;
        display: string;
        width: string;
        paddingLeft: string;
        paddingRight: string;
        paddingTop: string;
        paddingBottom: string;
        lineHeight: string;
        color: string;
        backgroundColor: string;
    };
    '.app-header-title': {
        color: string;
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
        justifySelf: string;
    };
    '.app-name': {
        fontWeight: string;
    };
    '.app-header-title:hover': {
        textDecoration: string;
    };
    '.app-header-nav': {
        fontSize: string;
        display: string;
        justifyContent: string;
        paddingLeft: string;
        paddingRight: string;
        lineHeight: string;
    };
    '.app-header-nav * + *': {
        marginLeft: string;
    };
    '.app-header-nav-item': {
        color: string;
        paddingLeft: string;
        paddingRight: string;
        paddingTop: string;
        paddingBottom: string;
        borderRadius: number;
    };
    '.app-header-user:hover, .app-header-nav-item:not(.active):hover': {
        opacity: string;
        textDecoration: string;
    };
    '.app-header-nav-item.active': {
        backgroundColor: string;
        textDecoration: string;
    };
    '.app-header-user-container': {
        display: string;
        justifyContent: string;
    };
    '.app-header-user-container > .dropdown-menu': {
        right: string;
    };
    '.app-header-user': {
        fontSize: string;
        lineHeight: string;
        borderRadius: number;
    };
    '.app-header-user > .user-icon': {
        width: number;
        height: number;
        display: string;
        maxWidth: string;
        maxHeight: string;
    };
    '.app-header-nav-mobile': {
        display: string;
    };
    '@media (max-width: 1279px)': {
        '.app-header-container': {
            display: string;
            alignItems: string;
            justifyContent: string;
        };
        '.app-header-nav * + *': {
            marginLeft: string;
        };
    };
    '@media (max-width: 1023px)': {
        '.app-header-container': {
            display: string;
            alignItems: string;
            justifyContent: string;
        };
        '.app-header-nav': {
            justifyContent: string;
            flexGrow: string;
        };
        '.app-header-nav * + *': {
            marginLeft: string;
        };
        '.app-header-user > .user-icon': {
            width: number;
            height: number;
            display: string;
        };
        '.app-header-user > .user-name': {
            display: string;
        };
        '.app-header-user::after': {
            display: string;
        };
    };
    '@media (max-width: 720px)': {
        '.app-header-container': {
            paddingTop: number;
            paddingBottom: number;
        };
        '.app-header-nav': {
            display: string;
        };
        '.app-header-nav-mobile': {
            display: string;
            order: string;
        };
        '.app-header-user-container': {
            flexGrow: string;
        };
    };
    '.nav-mobile-icon': {
        display: string;
        position: string;
        width: string;
        height: string;
        marginRight: string;
        '--transformRotate': string;
        borderRadius: number;
        cursor: string;
    };
    '.nav-mobile-icon::before, .nav-mobile-icon::after': {
        backgroundColor: string;
        position: string;
        left: string;
        display: string;
        width: string;
        '--transformRotate': string;
        opacity: string;
        borderRadius: number;
        content: string;
        transition: string;
        height: number;
    };
    '.nav-mobile-icon::before': {
        top: number;
        transformOrigin: string;
    };
    '.nav-mobile-icon::after': {
        bottom: number;
        transformOrigin: string;
    };
    '.nav-mobile-icon.active::before': {
        transform: string;
        top: number;
        left: number;
    };
    '.nav-mobile-icon.active::after': {
        transform: string;
        bottom: number;
        left: number;
    };
};
