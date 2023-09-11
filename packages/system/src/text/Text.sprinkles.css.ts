import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { colorProps } from '@/style';
import { styleVars } from '@/style/contract.css';
import { breakpoints } from '@/style/breakpoints';

const textProperties = defineProperties({
  conditions: breakpoints,
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

export const sprinkles = createSprinkles(colorProps, textProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
