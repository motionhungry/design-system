import { style, createVar } from '@vanilla-extract/css';
import { screenSizes } from '@/style';
import { styleVars } from '@/style/contract.css';

export const templateColsXSmall = createVar();
export const templateColsSmall = createVar();
export const templateColsMedium = createVar();
export const templateColsLarge = createVar();
export const templateColsXLarge = createVar();
export const templateColsXXLarge = createVar();

export const rowGapXSmall = createVar();
export const rowGapSmall = createVar();
export const rowGapMedium = createVar();
export const rowGapLarge = createVar();
export const rowGapXLarge = createVar();
export const rowGapXXLarge = createVar();

export const className = style({
  display: 'grid',
  gridTemplateColumns: templateColsXSmall,
  columnGap: styleVars.grid.columnGap,

  '@media': {
    [`screen and (min-width: ${screenSizes.small})`]: {
      gridTemplateColumns: templateColsSmall,
      rowGap: rowGapSmall,
    },
    [`screen and (min-width: ${screenSizes.medium})`]: {
      gridTemplateColumns: templateColsMedium,
      rowGap: rowGapMedium,
    },
    [`screen and (min-width: ${screenSizes.large})`]: {
      gridTemplateColumns: templateColsLarge,
      rowGap: rowGapLarge,
    },
    [`screen and (min-width: ${screenSizes.xlarge})`]: {
      gridTemplateColumns: templateColsXLarge,
      rowGap: rowGapXLarge,
    },
    [`screen and (min-width: ${screenSizes.xxlarge})`]: {
      gridTemplateColumns: templateColsXXLarge,
      rowGap: rowGapXXLarge,
    },
  },
});
