import { style } from '@vanilla-extract/css';
import vars from '@veer-ui/system/contract.css';

export const cardBlock = style({});

export const container = style({
  flexDirection: 'column',
  alignItems: 'center',
  gap: vars.space.lg,

  '@media': {
    [`screen and (min-width: 768px)`]: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: `${vars.space.lg} ${vars.space.md}`,
      justifyContent: 'center',
    },
  },
});
