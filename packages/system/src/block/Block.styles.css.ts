import { createVar, style } from '@vanilla-extract/css';
import { sprinkles } from '@/box/Box.sprinkles.css';
import { screenSizes } from '@/style';
import { globalVars } from '@/style/contract.css';

export const minHeight = createVar();

export const className = style([
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

export const headingClass = style({
  paddingBottom: globalVars.space.lg,
  '@media': {
    [`screen and (min-width: ${screenSizes.tablet})`]: {
      paddingBottom: globalVars.space.xl,
    },
  },
});
