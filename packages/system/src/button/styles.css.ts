import vars from '@/style/contract.css';
import { recipe } from '@vanilla-extract/recipes';

const { button: buttonVars } = vars.components;

const insetShadow = '0px 0px 0px 2px rgba(255, 255, 255, 0.15) inset';

export const styles = recipe({
  base: {
    border: 0,
    borderRadius: vars.borderRadius.medium,
    color: buttonVars.primary.default.color,
    display: 'inline-block',
    fontFamily: vars.font.fontFamily,
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
        boxShadow: `${insetShadow}, ${vars.elevation.low}`,
      },
      mid: {
        boxShadow: `${insetShadow}, ${vars.elevation.mid}`,
      },
      high: {
        boxShadow: `${insetShadow}, ${vars.elevation.high}`,
      },
    },
    size: {
      small: {
        fontSize: buttonVars.typography.small.fontSize,
        height: '40px',
        lineHeight: '40px',
        padding: `0 ${vars.space.xs}`,
      },
      medium: {
        fontSize: buttonVars.typography.medium.fontSize,
        height: vars.space.xl,
        lineHeight: vars.space.xl,
        padding: `0 ${vars.space.sm}`,
      },
      large: {
        borderRadius: vars.borderRadius.medium,
        fontSize: buttonVars.typography.large.fontSize,
        height: '56px',
        lineHeight: '56px',
        padding: `0 ${vars.space.md}`,
      },
    },
  },
});
