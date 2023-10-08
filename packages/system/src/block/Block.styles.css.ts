import { createVar, style, globalStyle } from '@vanilla-extract/css';
import { sprinkles } from '@/box/Box.sprinkles.css';
import { screenSizes } from '@/style/breakpoints';
import vars from '@/style/contract.css';
import { zIndex } from '@/style/z-index';

export const minHeight = createVar();

export const block = style([
  sprinkles({
    py: {
      small: 'lg',
      mobile: 'lg',
      tablet: 'xxl',
      desktop: 'xxl',
    },
  }),
  {
    background: vars.backgroundColor,
    minHeight,
    position: 'relative',
    zIndex: zIndex.base,
  },
]);

globalStyle(`${block} h2`, {
  textAlign: 'center',

  '@media': {
    [`screen and (min-width: ${screenSizes.desktop})`]: {
      textAlign: 'left',
    },
  },
});
