import { styleVars, globalVars } from '@/style/contract.css';
import { recipe } from '@vanilla-extract/recipes';

const { button: buttonVars } = styleVars.components;

const insetShadow = '0px 0px 0px 2px rgba(255, 255, 255, 0.15) inset';

export const styles = recipe({
  base: {
    border: 0,
    borderRadius: styleVars.borderRadius.medium,
    color: styleVars.legacyPalette.neutral.white,
    display: 'inline-block',
    fontFamily: globalVars.font.fontFamily,
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
        height: '40px',
        lineHeight: '40px',
        padding: `0 ${globalVars.space.xs}`,
      },
      medium: {
        fontSize: styleVars.typography.button.medium.fontSize,
        fontWeight: styleVars.typography.button.medium.fontWeight,
        height: globalVars.space.xl,
        lineHeight: globalVars.space.xl,
        padding: `0 ${globalVars.space.sm}`,
      },
      large: {
        borderRadius: styleVars.borderRadius.medium,
        fontSize: styleVars.typography.button.large.fontSize,
        fontWeight: styleVars.typography.button.large.fontWeight,
        height: '56px',
        lineHeight: '56px',
        padding: `0 ${globalVars.space.md}`,
      },
    },
  },
});
