import { defineProperties } from '@vanilla-extract/sprinkles';

import { breakpoints } from '@/style/breakpoints';
import { globalVars } from '@/style/contract.css';

export const spaceProps = defineProperties({
  conditions: breakpoints,
  defaultCondition: 'small',
  properties: {
    paddingTop: globalVars.space,
    paddingRight: globalVars.space,
    paddingBottom: globalVars.space,
    paddingLeft: globalVars.space,
  },
  shorthands: {
    padding: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
    p: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
    pt: ['paddingTop'],
    pr: ['paddingRight'],
    pb: ['paddingBottom'],
    pl: ['paddingLeft'],
    paddingX: ['paddingLeft', 'paddingRight'],
    px: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    py: ['paddingTop', 'paddingBottom'],
  },
});
