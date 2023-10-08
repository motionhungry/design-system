import { createVar, style, globalStyle } from '@vanilla-extract/css';
import { sprinkles } from '@/box/Box.sprinkles.css';
import { screenSizes } from '@/style/breakpoints';

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
    minHeight,
    position: 'relative',
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
