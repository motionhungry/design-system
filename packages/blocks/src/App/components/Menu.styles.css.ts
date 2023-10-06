import { style } from '@vanilla-extract/css';
import { globalVars } from '@veer-ui/system/contract.css';

export const className = style({
  position: 'sticky',
  top: globalVars.space.lg,
});
