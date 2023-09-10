const shadowColor = '0deg 0% 0%';

const legacyPalette = {
  neutral: {
    black: '#232323',
    white: '#f1f2eb',
  },
  purple: {
    0: '#f6edfd',
    50: '#d0a5f3',
    100: '#841cd9',
  },
  pink: {
    0: '#ffd6e9',
    50: '#ffadd2',
    100: '#ff0f7b',
  },
};

const palette = {
  'primary.50': '#f0f9ff',
  'primary.100': '#e0f2fe',
  'primary.200': '#bae6fd',
  'primary.300': '#7dd3fc',
  'primary.400': '#38bdf8',
  'primary.500': '#0ea5e9',
  'primary.600': '#0284c7',
  'primary.700': '#0369a1',
  'primary.800': '#075985',
  'primary.900': '#0c4a6e',
  'primary.950': '#082f49',
  'secondary.50': '#fff7ed',
  'secondary.100': '#ffedd5',
  'secondary.200': '#fed7aa',
  'secondary.300': '#fdba74',
  'secondary.400': '#fb923c',
  'secondary.500': '#f97316',
  'secondary.600': '#ea580c',
  'secondary.700': '#c2410c',
  'secondary.800': '#9a3412',
  'secondary.900': '#7c2d12',
  'secondary.950': '#431407',
  'neutral.50': '#f8fafc',
  'neutral.100': '#f1f5f9',
  'neutral.200': '#e2e8f0',
  'neutral.300': '#cbd5e1',
  'neutral.400': '#94a3b8',
  'neutral.500': '#64748b',
  'neutral.600': '#475569',
  'neutral.700': '#334155',
  'neutral.800': '#1e293b',
  'neutral.900': '#0f172a',
  'neutral.950': '#020617',
  'bw.0': '#ffffff',
  'bw.1000': '#000000',
};

export const defaultTokens = {
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '12px',
  },

  breakpoints: {
    xsmall: '0px',
    small: '576px',
    medium: '768px',
    large: '992px',
    xlarge: '1200px',
    xxlarge: '1400px',
  },

  elevation: {
    low: `0px 0.6px 0.7px hsl(${shadowColor} / 0.09),
          0px 1px 1.2px -1px hsl(${shadowColor} / 0.11),
          0px 2.4px 2.9px -2px hsl(${shadowColor} / 0.12)`,
    mid: `0px 0.6px 0.7px hsl(${shadowColor} / 0.1),
          0px 2.1px 2.5px -0.7px hsl(${shadowColor} / 0.11),
          0px 5.1px 6.1px -1.3px hsl(${shadowColor} / 0.12),
          -0.1px 12px 14.4px -2px hsl(${shadowColor} / 0.13)`,
    high: `0px 0.6px 0.7px hsl(${shadowColor} / 0.09),
           0px 4.2px 5px -0.3px hsl(${shadowColor} / 0.09),
           -0.1px 7.7px 9.2px -0.6px hsl(${shadowColor} / 0.1),
           -0.1px 12.3px 14.8px -0.9px hsl(${shadowColor} / 0.11),
           -0.1px 19px 22.8px -1.1px hsl(${shadowColor} / 0.11),
           -0.2px 28.9px 34.7px -1.4px hsl(${shadowColor} / 0.12),
           -0.3px 43.1px 51.7px -1.7px hsl(${shadowColor} / 0.12),
           -0.4px 62.6px 75.1px -2px hsl(${shadowColor} / 0.13)`,
  },

  components: {
    button: {
      primary: {
        default: {
          background: `linear-gradient(135deg, #d0a5f3 0%, #ff0f7b 100%)`,
          color: '#ffffff',
        },
        disabled: {
          background: `linear-gradient(135deg, #d0a5f3 0%, #ffadd2 100%)`,
          color: '#ffffff',
        },
        hover: {
          background: `linear-gradient(135deg, #d0a5f3 0%, #ff0f7b 70%)`,
          color: '#ffffff',
        },
        active: {
          background: `linear-gradient(135deg, #841cd9 30%, #ff0f7b 100%)`,
          color: '#ffffff',
        },
      },
    },
  },

  fontFamily: 'Gotham',

  layout: {
    maxWidth: '1400px',
  },

  legacyPalette,

  palette,

  space: {
    0: '0px',
    0.5: '4px',
    1: '8px',
    1.5: '12px',
    2: '16px',
    3: '24px',
    4: '32px',
    5: '40px',
    6: '48px',
    7: '56px',
    8: '64px',
    9: '72px',
    10: '80px',
    11: '88px',
    12: '96px',
  },

  typography: {
    fontSize: {
      h1: '72px',
      h2: '48px',
      h3: '32px',
      h4: '24px',
      'body-large': '24px',
      'body-medium': '20px',
      'body-small': '16px',
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      'semi-bold': '600',
      bold: '700',
    },
    button: {
      small: {
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '16',
      },
      medium: {
        fontSize: '18px',
        fontWeight: '500',
        lineHeight: '18px',
      },
      large: {
        fontSize: '20px',
        fontWeight: '500',
        lineHeight: '20px',
      },
    },
  },

  zIndex: {
    backgroundImage: '-10',
  },
};
