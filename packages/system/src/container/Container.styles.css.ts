import { style } from '@vanilla-extract/css';
import { sprinkles } from '@/box/Box.sprinkles.css';
import { styleVars } from '@/style/contract.css';

export const className = style([
  sprinkles({
    px: {
      xsmall: 2,
      small: 4,
      medium: 4,
      large: 8,
      xlarge: 8,
      xxlarge: 8,
    },
  }),
  {
    flexGrow: 1,
    margin: '0 auto',
    maxWidth: styleVars.layout.maxWidth,
    position: 'relative',
    width: '100%',
  },
]);