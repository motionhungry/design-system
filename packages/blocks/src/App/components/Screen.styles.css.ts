import { style } from '@vanilla-extract/css';

export const outerContainerClass = style({
  height: '150vh',
});

export const innerContainerClass = style({
  position: 'sticky',
  height: '100vh',
  top: '0',
});
