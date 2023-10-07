import { style } from '@vanilla-extract/css';
import vars from '@veer-ui/system/contract.css';

export const containerClass = style({
  position: 'relative',
});

export const menuContainerClass = style({
  position: 'absolute',
  right: vars.space.lg,
  top: vars.space.lg,
  bottom: 0,
});
