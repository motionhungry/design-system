import {
  createGlobalTheme,
  createTheme,
  globalStyle,
} from '@vanilla-extract/css';
import { themeVars, globalVars } from '@veer-ui/system/contract.css';
import { bioBlock } from '@veer-ui/blocks/style.css';
import { defaultTokens, defaultGlobalTokens } from '@/tokens';

export const globalTheme = createGlobalTheme(':root', globalVars, {
  ...defaultGlobalTokens,
  font: {
    ...defaultGlobalTokens.font,
    fontFamily: 'Montserrat',
  },
  typography: {
    ...defaultGlobalTokens.typography,
    fontSize: {
      h1: '4.20875rem',
      h2: '3.1575rem',
      h3: '2.36875rem',
      h4: '1.77688rem',
      h5: '1.33313rem',
      bodyXL: '3.1575rem',
      bodyLG: '2.36875rem',
      bodyMD: '1.77688rem',
      bodySM: '1.33313rem',
      bodyXS: '1rem',
    },
    lineHeight: {
      h1: '5.5rem',
      h2: '4rem',
      h3: '3rem',
      h4: '2.25rem',
      h5: '1.75rem',
      bodyXL: '5.5rem',
      bodyLG: '4rem',
      bodyMD: '3rem',
      bodySM: '2.25rem',
      bodyXS: '1.75rem',
    },
  },
  palette: {
    'secondary.50': '#f0f9ff',
    'secondary.100': '#e0f2fe',
    'secondary.200': '#bae6fd',
    'secondary.300': '#7dd3fc',
    'secondary.400': '#38bdf8',
    'secondary.500': '#0ea5e9',
    'secondary.600': '#0284c7',
    'secondary.700': '#0369a1',
    'secondary.800': '#075985',
    'secondary.900': '#0c4a6e',
    'secondary.950': '#082f49',
    'primary.50': '#fff7ed',
    'primary.100': '#ffedd5',
    'primary.200': '#fed7aa',
    'primary.300': '#fdba74',
    'primary.400': '#fb923c',
    'primary.500': '#f97316',
    'primary.600': '#ea580c',
    'primary.700': '#c2410c',
    'primary.800': '#9a3412',
    'primary.900': '#7c2d12',
    'primary.950': '#431407',
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
    white: '#ffffff',
    black: '#000000',
  },
});

export const lightTheme = createTheme(themeVars, {
  ...defaultTokens,
  headingColor: globalVars.palette['primary.600'],
  textColor: globalVars.palette['neutral.950'],
});

export const darkTheme = createTheme(themeVars, {
  ...defaultTokens,
  backgroundColor: globalVars.palette['neutral.950'],
  headingColor: globalVars.palette['primary.500'],
  textColor: globalVars.palette['white'],
});

globalStyle('body', {
  fontFamily: globalVars.font.fontFamily,
});

globalStyle(`${bioBlock} h3`, {
  color: globalVars.palette['secondary.700'],
});

globalStyle(`${bioBlock} h4`, {
  color: themeVars.textColor,
});
