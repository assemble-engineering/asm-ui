export declare const tooltip: {
    '.tooltip': {
        position: string;
    };
    '.tooltip:hover::before,\n.tooltip:hover::after': {
        '@apply visible': boolean;
        opacity: number;
        transition: string;
    };
    '.tooltip::before,\n.tooltip::after': {
        '@apply absolute invisible opacity-0': boolean;
        transition: string;
    };
    '.tooltip::before': {
        '@apply block w-0 h-0': boolean;
        content: string;
        border: string;
    };
    '.tooltip::after': {
        '@apply text-subheadline inline-block px-3 py-2 font-normal text-white rounded-lg': boolean;
        backgroundColor: string;
        content: string;
        zIndex: number;
        wordWrap: string;
        whiteSpace: string;
    };
    '.tooltip-t::before, .tooltip-tl::before, .tooltip-tr::before': {
        borderTopColor: string;
        transform: string;
    };
    '.tooltip-t::before': {
        right: string;
        bottom: string;
        transform: string;
    };
    '.tooltip-t::after': {
        textAlign: string;
        right: string;
        bottom: string;
        transform: string;
    };
    '.tooltip-tl::before': {
        left: string;
        bottom: string;
    };
    '.tooltip-tl::after': {
        left: string;
        right: string;
        bottom: string;
        transform: string;
    };
    '.tooltip-tr::before': {
        right: string;
        bottom: string;
    };
    '.tooltip-tr::after': {
        right: string;
        bottom: string;
        transform: string;
    };
    '.tooltip-b::before,\n.tooltip-bl::before,\n.tooltip-br::before': {
        borderBottomColor: string;
        transform: string;
    };
    '.tooltip-b::before': {
        right: string;
        top: string;
        transform: string;
    };
    '.tooltip-b::after': {
        textAlign: string;
        right: string;
        top: string;
        transform: string;
    };
    '.tooltip-bl::before': {
        left: string;
        top: string;
    };
    '.tooltip-bl::after': {
        left: string;
        top: string;
        transform: string;
    };
    '.tooltip-br::before': {
        right: string;
        top: string;
    };
    '.tooltip-br::after': {
        right: string;
        top: string;
        transform: string;
    };
    '.tooltip.tooltip-multiline::after': {
        display: string;
        whiteSpace: string;
        borderCollapse: string;
        width: string;
        maxWidth: number;
    };
};
