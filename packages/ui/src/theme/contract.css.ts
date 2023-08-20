import { createThemeContract } from '@vanilla-extract/css';

const typography = {
  fontSize: null,
  fontWeight: null,
  lineHeight: null,
};

const buttonState = {
  background: null,
  color: null,
};

const button = {
  default: { ...buttonState },
  hover: { ...buttonState },
  active: { ...buttonState },
};

export const themeVars = createThemeContract({
  borderRadius: {
    small: null,
    medium: null,
    large: null,
  },
  elevation: {
    low: null,
    mid: null,
    high: null,
  },
  fontFamily: null,
  palette: {
    neutral: {
      black: null,
      white: null,
    },
    purple: {
      0: null,
      50: null,
      100: null,
    },
    pink: {
      0: null,
      50: null,
      100: null,
    },
  },
  space: {
    0: null,
    [0.5]: null,
    1: null,
    [1.5]: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,
    10: null,
    15: null,
    20: null,
    25: null,
    30: null,
    40: null,
    50: null,
  },
  typography: {
    button: {
      small: { ...typography },
      medium: { ...typography },
      large: { ...typography },
    },
  },
  components: {
    button: {
      primary: { ...button },
    },
  },
});
