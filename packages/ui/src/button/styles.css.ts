import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '../theme';

const { button: buttonVars } = themeVars.components;

const insetShadow = '0px 0px 0px 2px rgba(255, 255, 255, 0.15) inset';

export const styles = recipe({
  base: {
    background: buttonVars.primary.default.background,
    border: 0,
    borderRadius: themeVars.borderRadius.medium,
    color: themeVars.palette.neutral.white,
    display: 'inline-block',
    fontFamily: themeVars.fontFamily,
    textDecoration: 'none',

    ':hover': {
      background: buttonVars.primary.hover.background,
    },

    ':active': {
      background: buttonVars.primary.active.background,
    },
  },
  variants: {
    elevation: {
      none: {
        boxShadow: `${insetShadow}`,
      },
      low: {
        boxShadow: `${insetShadow}, ${themeVars.elevation.low}`,
      },
      mid: {
        boxShadow: `${insetShadow}, ${themeVars.elevation.mid}`,
      },
      high: {
        boxShadow: `${insetShadow}, ${themeVars.elevation.high}`,
      },
    },
    size: {
      small: {
        fontSize: themeVars.typography.button.small.fontSize,
        fontWeight: themeVars.typography.button.small.fontWeight,
        height: themeVars.space[5],
        lineHeight: themeVars.space[5],
        padding: `0 ${themeVars.space['1.5']}`,
      },
      medium: {
        fontSize: themeVars.typography.button.medium.fontSize,
        fontWeight: themeVars.typography.button.medium.fontWeight,
        height: themeVars.space[6],
        lineHeight: themeVars.space[6],
        padding: `0 ${themeVars.space[2]}`,
      },
      large: {
        borderRadius: themeVars.borderRadius.medium,
        fontSize: themeVars.typography.button.large.fontSize,
        fontWeight: themeVars.typography.button.large.fontWeight,
        height: themeVars.space[7],
        lineHeight: themeVars.space[7],
        padding: `0 ${themeVars.space[3]}`,
      },
    },
  },
});
