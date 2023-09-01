import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { spaceProps, colorProps } from '@/style';

const boxProps = defineProperties({
  properties: {
    display: ['block', 'inline-block'],
  },
});

export const sprinkles = createSprinkles(boxProps, colorProps, spaceProps);

export type Sprinkles = Parameters<typeof sprinkles>[0];
