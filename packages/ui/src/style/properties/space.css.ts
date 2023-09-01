import { defineProperties } from '@vanilla-extract/sprinkles';

import { styleVars } from '@/style/contract.css';
import { breakpoints } from '@/style/tokens';

const transformBreakpoints = (): Record<string, Record<'@media', string>> =>
  Object.entries(breakpoints).reduce(
    (prev, [key, value]) => ({
      ...prev,
      [key]: { '@media': `screen and (min-width: ${value}px)` },
    }),
    {},
  );

export const spaceProps = defineProperties({
  conditions: transformBreakpoints(),
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
