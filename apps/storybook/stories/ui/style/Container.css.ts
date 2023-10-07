import { style } from '@vanilla-extract/css';
import vars from '@veer-ui/system/contract.css';

export const outer = style({
  backgroundColor: vars.palette['neutral.100'],
  width: '100%',
});

export const inner = style({});

export const content = style({
  backgroundColor: vars.palette['neutral.300'],
});
