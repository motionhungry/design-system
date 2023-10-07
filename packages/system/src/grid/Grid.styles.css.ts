import { style, createVar } from '@vanilla-extract/css';
import { screenSizes } from '@/style';
import vars from '@/style/contract.css';

export const templateColsSmall = createVar();
export const templateColsMobile = createVar();
export const templateColsTablet = createVar();
export const templateColsDesktop = createVar();

export const rowGapSmall = createVar();
export const rowGapMobile = createVar();
export const rowGapTablet = createVar();
export const rowGapDesktop = createVar();

export const className = style({
  display: 'grid',
  columnGap: vars.grid.columnGap,
  gridTemplateColumns: templateColsSmall,
  rowGap: rowGapSmall,

  '@media': {
    [`screen and (min-width: ${screenSizes.mobile})`]: {
      gridTemplateColumns: templateColsMobile,
      rowGap: rowGapMobile,
    },
    [`screen and (min-width: ${screenSizes.tablet})`]: {
      gridTemplateColumns: templateColsTablet,
      rowGap: rowGapTablet,
    },
    [`screen and (min-width: ${screenSizes.desktop})`]: {
      gridTemplateColumns: templateColsDesktop,
      rowGap: rowGapDesktop,
    },
  },
});
