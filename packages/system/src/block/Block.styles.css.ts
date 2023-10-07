import { createVar, style } from '@vanilla-extract/css';
import { sprinkles } from '@/box/Box.sprinkles.css';

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
