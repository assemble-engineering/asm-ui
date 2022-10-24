export declare const toggleSwitch: {
    '.switch': {
        '--toggle-fill': string;
        '--toggle-track': string;
        position: string;
        display: string;
        height: string;
        verticalAlign: string;
        cursor: string;
        userSelect: string;
        minWidth: string;
        borderRadius: string;
        backgroundColor: string;
        transition: string;
    };
    '.switch-wrap': {
        position: string;
        display: string;
        alignItems: string;
        cursor: string;
    };
    '.switch-disabled': {
        opacity: string;
        cursor: string;
        pointerEvents: string;
    };
    '.switch-disabled .switch::after': {
        cursor: string;
    };
    '.switch-wrap input[type="checkbox"]': {
        position: string;
        left: string;
        outline: string;
        opacity: string;
        pointerEvents: string;
        zIndex: string;
    };
    '.switch-wrap input[type="checkbox"]:focus-visible + .switch': {
        boxShadow: string;
    };
    '.switch-wrap input[type="checkbox"]:focus-visible + .switch.switch-success': {
        boxShadow: string;
    };
    '.switch-wrap.switch-disabled input[type="checkbox"]:focus-visible + .switch': {
        boxShadow: string;
    };
    '.switch::after': {
        position: string;
        display: string;
        width: string;
        height: string;
        borderRadius: number;
        cursor: string;
        transition: string;
        content: string;
        left: number;
        top: number;
        backgroundColor: string;
        boxShadow: string;
    };
    '.switch-label': {
        color: string;
        fontSize: string;
        paddingLeft: string;
        lineHeight: string;
        userSelect: string;
    };
    '.switch-label:empty': {
        display: string;
    };
    '.switch-lg': {
        minWidth: string;
        height: string;
        borderRadius: string;
    };
    '.switch-lg::after': {
        left: number;
        top: number;
        width: string;
        height: string;
    };
    '.switch-wrap input[type="checkbox"]:checked + .switch': {
        backgroundColor: string;
    };
    '.switch-wrap input[type="checkbox"]:checked + .switch::after': {
        left: string;
        marginLeft: string;
    };
    '.switch-wrap input[type="checkbox"]:checked + .switch-lg::after': {
        marginLeft: string;
    };
    '.switch-wrap input[type="checkbox"]:checked + .switch.switch-success': {
        backgroundColor: string;
    };
};
