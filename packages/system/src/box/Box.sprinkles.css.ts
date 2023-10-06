import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { spaceProps, colorProps, breakpoints } from '@/style';

const boxProps = defineProperties({
  conditions: breakpoints,
  defaultCondition: 'small',
  properties: {
    display: ['block', 'inline-block'],
  },
});

export const sprinkles = createSprinkles(boxProps, colorProps, spaceProps);

export type Sprinkles = Parameters<typeof sprinkles>[0];
