import { style, globalStyle } from '@vanilla-extract/css';
import vars from '@veer-ui/system/contract.css';

const screenSizes = {
  small: '0px',
  mobile: '480px',
  tablet: '768px',
  desktop: '1280px',
};

export const bioBlock = style({});

export const bioBlockRow = style({
  gap: '32px',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  selectors: {
    '&:not(:last-child)': {
      paddingBottom: vars.space.lg,
    },
  },
  '@media': {
    [`screen and (min-width: ${screenSizes.desktop})`]: {
      flexDirection: 'row',
      gap: '24px',
      textAlign: 'left',
      selectors: {
        '&:nth-child(even)': {
          flexDirection: 'row-reverse',
        },
      },
    },
  },
});

export const photoCol = style({});

globalStyle(`${photoCol} img`, {
  maxWidth: '100%',
  maxHeight: '234px',

  '@media': {
    [`screen and (min-width: ${screenSizes.tablet})`]: {
      maxWidth: 501,
      maxHeight: '281px',
    },
  },
});
