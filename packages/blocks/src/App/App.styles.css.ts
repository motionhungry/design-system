import { style } from '@vanilla-extract/css';
import { globalVars } from '@veer-ui/system/contract.css';

export const containerClass = style({
  position: 'relative',
});

export const menuContainerClass = style({
  position: 'absolute',
  right: globalVars.space.lg,
  top: globalVars.space.lg,
  bottom: 0,
});
