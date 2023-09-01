import { createSprinkles } from '@vanilla-extract/sprinkles';

import { spaceProps, colorProps } from '@/style';

export const sprinkles = createSprinkles(colorProps, spaceProps);

export type Sprinkles = Parameters<typeof sprinkles>[0];
