import { createSprinkles } from '@vanilla-extract/sprinkles';

import { spaceProps } from '@/style';

export const sprinkles = createSprinkles(spaceProps);

export type Sprinkles = Parameters<typeof sprinkles>[0];
