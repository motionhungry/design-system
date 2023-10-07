import { style } from '@vanilla-extract/css';
import vars from '@veer-ui/system/contract.css';

export const outer = style({
  width: '100%',
  zIndex: '-10000',
});

export const content = style({
  backgroundColor: vars.palette['neutral.300'],
});
