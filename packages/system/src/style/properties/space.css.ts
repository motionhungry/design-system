import { defineProperties } from '@vanilla-extract/sprinkles';

import { breakpoints } from '@/style/breakpoints';
import { styleVars } from '@/style/contract.css';

export const spaceProps = defineProperties({
  conditions: breakpoints,
  defaultCondition: 'xsmall',
  properties: {
    paddingTop: styleVars.space,
    paddingRight: styleVars.space,
    paddingBottom: styleVars.space,
    paddingLeft: styleVars.space,
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
