import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { colorProps, breakpoints } from '@/style';
import { globalVars } from '@/style/contract.css';

const textProperties = defineProperties({
  conditions: breakpoints,
  defaultCondition: 'small',
  properties: {
    fontSize: globalVars.typography.fontSize,
    lineHeight: globalVars.typography.lineHeight,
    textAlign: ['left', 'center', 'right', 'justify'],
    textTransform: ['uppercase', 'lowercase', 'capitalize'],
  },
  shorthands: {
    align: ['textAlign'],
    transform: ['textTransform'],
  },
});

export const sprinkles = createSprinkles(colorProps, textProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
