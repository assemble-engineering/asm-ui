export declare const stacks: {
    '.stack-v, .stack-h': {
        display: string;
        'align-items': string;
        'justify-content': string;
    };
    '.stack-v': {
        'flex-direction': string;
    };
    '.stack-v.stack-leading': {
        'align-items': string;
    };
    '.stack-v.stack-trailing': {
        'align-items': string;
    };
    '.stack-v.stack-top': {
        'justify-content': string;
    };
    '.stack-v.stack-bottom': {
        'justify-content': string;
    };
    '.stack-v.stack-reverse': {
        'flex-direction': string;
    };
    '.stack-v.stack-reverse.stack-bottom': {
        'justify-content': string;
    };
    '.stack-v.stack-reverse.stack-top': {
        'justify-content': string;
    };
    '.stack-h.stack-leading': {
        'justify-content': string;
    };
    '.stack-h.stack-trailing': {
        'justify-content': string;
    };
    '.stack-h.stack-top': {
        'align-items': string;
    };
    '.stack-h.stack-bottom': {
        'align-items': string;
    };
    '.stack-h.stack-reverse': {
        'flex-direction': string;
    };
    '.stack-h.stack-leading.stack-reverse': {
        'justify-content': string;
    };
    '.stack-h.stack-trailing.stack-reverse': {
        'justify-content': string;
    };
    '.stack-v.stack-spacer, .stack-h.stack-vfill': {
        'align-items': string;
    };
    '.stack-v.stack-hfill, .stack-h.stack-vfill': {
        'align-items': string;
    };
    '.stack-v.stack-vfill > *, .stack-h.stack-hfill > *': {
        'flex-grow': string;
    };
    '.stack-v-max:is(.stack-v, .stack-h)': {
        height: string;
    };
    '.stack-h-max:is(.stack-v, .stack-h)': {
        width: string;
    };
    ':is(.stack-v, .stack-h) .stack-spacer': {
        'flex-grow': string;
    };
    '.stack-max': {
        height: string;
        width: string;
    };
    '.stack-divider': {
        gap: string;
    };
    '.stack-distribute': {
        'justify-content': string;
    };
};
