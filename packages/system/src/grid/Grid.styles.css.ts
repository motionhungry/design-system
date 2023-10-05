import { style, createVar } from '@vanilla-extract/css';
import { screenSizes } from '@/style';

export const templateColsXSmall = createVar();
export const templateColsSmall = createVar();
export const templateColsMedium = createVar();
export const templateColsLarge = createVar();
export const templateColsXLarge = createVar();
export const templateColsXXLarge = createVar();

export const className = style({
  display: 'grid',
  gridTemplateColumns: templateColsXSmall,

  '@media': {
    [`screen and (min-width: ${screenSizes.small})`]: {
      gridTemplateColumns: templateColsSmall,
    },
    [`screen and (min-width: ${screenSizes.medium})`]: {
      gridTemplateColumns: templateColsMedium,
    },
    [`screen and (min-width: ${screenSizes.large})`]: {
      gridTemplateColumns: templateColsLarge,
    },
    [`screen and (min-width: ${screenSizes.xlarge})`]: {
      gridTemplateColumns: templateColsXLarge,
    },
    [`screen and (min-width: ${screenSizes.xxlarge})`]: {
      gridTemplateColumns: templateColsXXLarge,
    },
  },
});
