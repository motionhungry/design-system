import { style } from '@vanilla-extract/css';
import { styleVars } from '@veer-ui/system/contract.css';

export const className = style({
  position: 'sticky',
  top: styleVars.space[5],
});
