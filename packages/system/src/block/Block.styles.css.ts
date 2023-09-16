import { createVar, style } from '@vanilla-extract/css';
import { sprinkles } from '@/box/Box.sprinkles.css';

export const minHeight = createVar();

export const className = style([
  sprinkles({
    py: {
      xsmall: 2,
      small: 4,
      medium: 4,
      large: 8,
      xlarge: 8,
      xxlarge: 8,
    },
  }),
  {
    minHeight,
    position: 'relative',
  },
]);
