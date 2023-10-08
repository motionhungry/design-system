import { style } from '@vanilla-extract/css';

export const cardBlock = style({});

export const container = style({
  flexDirection: 'column',
  justifyContent: 'space-between',

  '@media': {
    [`screen and (min-width: 1280px)`]: {
      flexDirection: 'row',
    },
  },
});
