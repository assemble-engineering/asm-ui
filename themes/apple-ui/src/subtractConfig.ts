import plugin from 'tailwindcss/plugin';
import { base, colorVariable, variables } from './base';


const subtractBase = { ...base, ...variables };

const tailwindConfig = {
  theme: {
    fontFamily: {
      sans: [
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Helvetica Neue"',
        '"Helvetica"',
        'Arial',
        'sans-serif',
      ],
      serif: [
        '"New York Small"',
        'ui-serif',
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif',
      ],
      'serif-sm': [
        '"New York Small"',
        'ui-serif',
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif',
      ],
      'serif-md': [
        '"New York Medium"',
        'ui-serif',
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif',
      ],
      'serif-lg': [
        '"New York Large"',
        'ui-serif',
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif',
      ],
      mono: [
        '"SF Mono"',
        'ui-monospace',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
      icons: ['"SF Pro Icons"'],
    },
    fontSize: {
      'caption-2': ['0.6875rem', '0.8125rem'],
      'caption-1': ['0.75rem', '1rem'],
      footnote: ['0.8125rem', '1.125rem'],
      subheadline: ['0.875rem', '1.25rem'],
      callout: ['0.9375rem', '1.25rem'],
      body: ['1rem', '1.5rem'],
      headline: ['1.125rem', '1.5rem'],
      'title-3': ['1.25rem', '1.75rem'],
      'title-2': ['1.375rem', '1.75rem'],
      'title-1': ['1.75rem', '2.125rem'],
      'title-lg': ['2.125rem', '2.5rem'],
      'title-xl': ['2.5rem', '2.75rem'],
      'title-2xl': ['3rem', '3.25rem'],
      'title-3xl': ['3.5rem', '3.625rem'],
    },
    colors: {
      max: '#DF0C00',
      critical: '#F48F00',
      high: '#FFCC00',
      moderate: '#6696B4',
      low: '#97BFD8',
      informational: '#D1D1D1',
      transparent: 'transparent',
      current: 'currentColor',
      'static-white': '#fff',
      'static-black': '#000',
      white: colorVariable('--fill'),
      black: colorVariable('--glyph'),
      'ios-blue': colorVariable('--ios-blue'),
      'ios-green': colorVariable('--ios-green'),
      'ios-indigo': colorVariable('--ios-indigo'),
      'ios-orange': colorVariable('--ios-orange'),
      'ios-pink': colorVariable('--ios-pink'),
      'ios-purple': colorVariable('--ios-purple'),
      'ios-red': colorVariable('--ios-red'),
      'ios-teal': colorVariable('--ios-teal'),
      'ios-yellow': colorVariable('--ios-yellow'),
    },
    textColor: ({ theme }: any) => ({
      ...theme('colors'),
      primary: colorVariable('--glyph-primary, var(--primary)'),
      gray: colorVariable('--glyph-gray'),
      'gray-secondary': colorVariable('--glyph-gray-secondary'),
      'gray-secondary-alt': colorVariable('--glyph-gray-secondary-alt'),
      'gray-tertiary': colorVariable('--glyph-gray-tertiary'),
      blue: colorVariable('--glyph-blue'),
      red: colorVariable('--glyph-red'),
      orange: colorVariable('--glyph-orange'),
      yellow: colorVariable('--glyph-yellow'),
      green: colorVariable('--glyph-green'),
      purple: colorVariable('--glyph-purple'),
    }),
    backgroundColor: ({ theme }: any) => ({
      ...theme('colors'),
      primary: colorVariable('--fill-primary, var(--primary)'),
      secondary: colorVariable('--fill-secondary'),
      tertiary: colorVariable('--fill-tertiary'),
      gray: colorVariable('--fill-gray'),
      'gray-secondary': colorVariable('--fill-gray-secondary'),
      'gray-tertiary': colorVariable('--fill-gray-tertiary'),
      'gray-quaternary': colorVariable('--fill-gray-quaternary'),
      blue: colorVariable('--fill-blue'),
      orange: colorVariable('--fill-orange'),
      red: colorVariable('--fill-red'),
      green: colorVariable('--fill-green'),
      yellow: colorVariable('--fill-yellow'),
      purple: colorVariable('--fill-purple'),
      'blue-secondary': colorVariable('--fill-blue-secondary'),
      'orange-secondary': colorVariable('--fill-orange-secondary'),
      'red-secondary': colorVariable('--fill-red-secondary'),
      'green-secondary': colorVariable('--fill-green-secondary'),
      'yellow-secondary': colorVariable('--fill-yellow-secondary'),
      'purple-secondary': colorVariable('--fill-purple-secondary'),
    }),
    borderColor: ({ theme }: any) => ({
      ...theme('backgroundColor'),
      DEFAULT: theme('backgroundColor.gray-tertiary', 'currentColor'),
    }),
    fill: ({ theme }: any) => ({
      ...theme('textColor'),
      DEFAULT: theme('textColor.gray', 'currentColor'),
    }),
    divideColor: ({ theme }: any) => theme('borderColor'),
    ringColor: ({ theme }: any) => ({
      DEFAULT: 'rgba(0, 113, 227, 0.35)',
      ...theme('backgroundColor'),
    }),
    ringOffsetColor: ({ theme }: any) => theme('backgroundColor'),
    extend: {
      cursor: {
        help: 'help',
      },
      screens: {
        '3xl': '1792px',
      },
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        17: '4.25rem',
        18: '4.5rem',
        19: '4.75rem',
        21: '5.25rem',
        22: '5.5rem',
        23: '5.75rem',
        25: '6.25rem',
        26: '6.5rem',
        27: '6.75rem',
        128: '32rem',
        144: '36rem',
      },
    },
  },
  plugins: [
    plugin(
      ({
        addBase,
        // addComponents,
      }: {
        addBase: (base: any) => void;
        // addComponents: (components: any) => void;
      }) => {
        console.log("adding base", subtractBase)
        addBase(subtractBase);
        // addComponents(subtractComponents);
      }
    ),
  ],
};

export default tailwindConfig;
