import { styleVars } from '@/style';
import { recipe } from '@vanilla-extract/recipes';

const { button: buttonVars } = styleVars.components;

const insetShadow = '0px 0px 0px 2px rgba(255, 255, 255, 0.15) inset';

export const styles = recipe({
  base: {
    border: 0,
    borderRadius: styleVars.borderRadius.medium,
    color: styleVars.palette.neutral.white,
    display: 'inline-block',
    fontFamily: styleVars.fontFamily,
    textDecoration: 'none',
  },
  variants: {
    disabled: {
      true: {
        background: buttonVars.primary.disabled.background,
        color: buttonVars.primary.disabled.color,
        pointerEvents: 'none',
      },
      false: {
        background: buttonVars.primary.default.background,

        ':hover': {
          background: buttonVars.primary.hover.background,
        },

        ':active': {
          background: buttonVars.primary.active.background,
        },
      },
    },
    elevation: {
      none: {
        boxShadow: `${insetShadow}`,
      },
      low: {
        boxShadow: `${insetShadow}, ${styleVars.elevation.low}`,
      },
      mid: {
        boxShadow: `${insetShadow}, ${styleVars.elevation.mid}`,
      },
      high: {
        boxShadow: `${insetShadow}, ${styleVars.elevation.high}`,
      },
    },
    size: {
      small: {
        fontSize: styleVars.typography.button.small.fontSize,
        fontWeight: styleVars.typography.button.small.fontWeight,
        height: styleVars.space[5],
        lineHeight: styleVars.space[5],
        padding: `0 ${styleVars.space['1.5']}`,
      },
      medium: {
        fontSize: styleVars.typography.button.medium.fontSize,
        fontWeight: styleVars.typography.button.medium.fontWeight,
        height: styleVars.space[6],
        lineHeight: styleVars.space[6],
        padding: `0 ${styleVars.space[2]}`,
      },
      large: {
        borderRadius: styleVars.borderRadius.medium,
        fontSize: styleVars.typography.button.large.fontSize,
        fontWeight: styleVars.typography.button.large.fontWeight,
        height: styleVars.space[7],
        lineHeight: styleVars.space[7],
        padding: `0 ${styleVars.space[3]}`,
      },
    },
  },
});
