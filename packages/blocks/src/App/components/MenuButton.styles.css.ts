import { style, styleVariants } from '@vanilla-extract/css';
import { styleVars } from '@veer-ui/system/contract.css';

export const iconClass = style({
  width: 24,
  height: 24,
});

const buttonBaseClass = style({
  padding: styleVars.space[3],
});

export const buttonClass = styleVariants({
  inactive: [
    buttonBaseClass,
    {
      background: `color-mix(in srgb, ${styleVars.palette['bw.0']}, transparent 20%)`,
      ':active': {
        background: `color-mix(in srgb, ${styleVars.palette['bw.0']}, transparent 40%)`,
      },
    },
  ],
  active: [
    buttonBaseClass,
    {
      background: `color-mix(in srgb, ${styleVars.palette['primary.300']}, transparent 20%)`,
      ':active': {
        background: `color-mix(in srgb, ${styleVars.palette['primary.300']}, transparent 40%)`,
      },
    },
  ],
});
