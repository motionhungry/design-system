type ColorDegree =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 950;

export type Color = Record<ColorDegree, string>;

export type Palette = {
  primary: Color;
  secondary: Color;
  neutral: Color;
  bw: {
    0: string;
    1000: string;
  };
};

export const palette = {
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

/**
 * TODO: Refactor Button and remove this
 */
export const legacyPalette = {
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
