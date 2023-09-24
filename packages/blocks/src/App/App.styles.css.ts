import { style } from '@vanilla-extract/css';
import { styleVars } from '@veer-ui/system/contract.css';

export const containerClass = style({
  position: 'relative',
});

export const menuContainerClass = style({
  position: 'absolute',
  right: styleVars.space[5],
  top: styleVars.space[5],
  bottom: 0,
});
