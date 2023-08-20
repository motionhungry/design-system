import { createTheme } from '@vanilla-extract/css';

import { themeVars } from './contract.css';
import { defaultPalette, defaultSpace } from './defaults';

const shadowColor = '0deg 0% 0%';

export const lightThemeClass = createTheme(themeVars, {
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '12px',
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
  fontFamily: 'Gotham',
  palette: { ...defaultPalette },
  space: { ...defaultSpace },
  typography: {
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
  components: {
    button: {
      primary: {
        default: {
          background: `linear-gradient(135deg, ${defaultPalette.purple[100]} 0%, ${defaultPalette.pink[100]} 70%)`,
          color: defaultPalette.neutral.white,
        },
        hover: {
          background: `linear-gradient(135deg, ${defaultPalette.purple[100]} 0%, ${defaultPalette.pink[100]} 100%)`,
          color: defaultPalette.neutral.white,
        },
        active: {
          background: `linear-gradient(135deg, ${defaultPalette.purple[100]} 30%, ${defaultPalette.pink[100]} 100%)`,
          color: defaultPalette.neutral.white,
        },
      },
    },
  },
});
