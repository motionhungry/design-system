import { defineProperties } from '@vanilla-extract/sprinkles';

import { styleVars } from '../contract.css';

export const spaceProps = defineProperties({
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
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingTop', 'paddingBottom'],
  },
});
