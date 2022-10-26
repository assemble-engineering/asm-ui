declare const tailwindConfig: {
    theme: {
        fontFamily: {
            sans: string[];
            serif: string[];
            'serif-sm': string[];
            'serif-md': string[];
            'serif-lg': string[];
            mono: string[];
            icons: string[];
        };
        fontSize: {
            'caption-2': string[];
            'caption-1': string[];
            footnote: string[];
            subheadline: string[];
            callout: string[];
            body: string[];
            headline: string[];
            'title-3': string[];
            'title-2': string[];
            'title-1': string[];
            'title-lg': string[];
            'title-xl': string[];
            'title-2xl': string[];
            'title-3xl': string[];
        };
        colors: {
            max: string;
            critical: string;
            high: string;
            moderate: string;
            low: string;
            informational: string;
            transparent: string;
            current: string;
            'static-white': string;
            'static-black': string;
            white: ({ opacityVariable, opacityValue, }: {
                opacityVariable?: string | undefined;
                opacityValue?: string | undefined;
            }) => string;
            black: ({ opacityVariable, opacityValue, }: {
                opacityVariable?: string | undefined;
                opacityValue?: string | undefined;
            }) => string;
            'ios-blue': ({ opacityVariable, opacityValue, }: {
                opacityVariable?: string | undefined;
                opacityValue?: string | undefined;
            }) => string;
            'ios-green': ({ opacityVariable, opacityValue, }: {
                opacityVariable?: string | undefined;
                opacityValue?: string | undefined;
            }) => string;
            'ios-indigo': ({ opacityVariable, opacityValue, }: {
                opacityVariable?: string | undefined;
                opacityValue?: string | undefined;
            }) => string;
            'ios-orange': ({ opacityVariable, opacityValue, }: {
                opacityVariable?: string | undefined;
                opacityValue?: string | undefined;
            }) => string;
            'ios-pink': ({ opacityVariable, opacityValue, }: {
                opacityVariable?: string | undefined;
                opacityValue?: string | undefined;
            }) => string;
            'ios-purple': ({ opacityVariable, opacityValue, }: {
                opacityVariable?: string | undefined;
                opacityValue?: string | undefined;
            }) => string;
            'ios-red': ({ opacityVariable, opacityValue, }: {
                opacityVariable?: string | undefined;
                opacityValue?: string | undefined;
            }) => string;
            'ios-teal': ({ opacityVariable, opacityValue, }: {
                opacityVariable?: string | undefined;
                opacityValue?: string | undefined;
            }) => string;
            'ios-yellow': ({ opacityVariable, opacityValue, }: {
                opacityVariable?: string | undefined;
                opacityValue?: string | undefined;
            }) => string;
        };
        textColor: ({ theme }: any) => any;
        backgroundColor: ({ theme }: any) => any;
        borderColor: ({ theme }: any) => any;
        fill: ({ theme }: any) => any;
        divideColor: ({ theme }: any) => any;
        ringColor: ({ theme }: any) => any;
        ringOffsetColor: ({ theme }: any) => any;
        extend: {
            cursor: {
                help: string;
            };
            screens: {
                '3xl': string;
            };
            spacing: {
                13: string;
                15: string;
                17: string;
                18: string;
                19: string;
                21: string;
                22: string;
                23: string;
                25: string;
                26: string;
                27: string;
                128: string;
                144: string;
            };
        };
    };
    plugins: {
        handler: import("tailwindcss/types/config").PluginCreator;
        config?: Partial<import("tailwindcss/types/config").Config> | undefined;
    }[];
};
export default tailwindConfig;
