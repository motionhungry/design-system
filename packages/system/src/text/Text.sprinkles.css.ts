import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { breakpoints, colorProps } from '@/style';
import { styleVars } from '@/style/contract.css';

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
