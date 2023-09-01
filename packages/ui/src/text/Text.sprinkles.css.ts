import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { styleVars } from '@/style';
import { transformBreakpoints } from '@/style/utils';

const textProperties = defineProperties({
  conditions: transformBreakpoints(),
  defaultCondition: 'xsmall',
  properties: {
    textAlign: ['left', 'center', 'right', 'justify'],
    fontSize: styleVars.typography.fontSize,
    fontWeight: styleVars.typography.fontWeight,
    textTransform: ['uppercase', 'lowercase', 'capitalize'],
  },
  shorthands: {
    align: ['textAlign'],
    transform: ['textTransform'],
  },
});

export const sprinkles = createSprinkles(textProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
