import { style } from '@vanilla-extract/css';
import { styleVars } from '@motionhungry/ui-core';

export const className = style({
  margin: '0 auto',
  maxWidth: styleVars.layout.maxWidth,
});
