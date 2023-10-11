import { style, styleVariants } from '@vanilla-extract/css';
import vars from '@veer-ui/system/contract.css';

export const iconClass = style({
  width: 24,
  height: 24,
});

const buttonBaseClass = style({
  padding: vars.space.md,
});

export const buttonClass = styleVariants({
  inactive: [
    buttonBaseClass,
    {
      background: `color-mix(in srgb, ${vars.palette.white}, transparent 20%)`,
      ':active': {
        background: `color-mix(in srgb, ${vars.palette.white}, transparent 40%)`,
      },
    },
  ],
  active: [
    buttonBaseClass,
    {
      background: `color-mix(in srgb, ${vars.palette['primary.300']}, transparent 20%)`,
      ':active': {
        background: `color-mix(in srgb, ${vars.palette['primary.300']}, transparent 40%)`,
      },
    },
  ],
});
