import { createSprinkles } from '@vanilla-extract/sprinkles';

import { flexProps, spaceProps } from '@/style';

export const sprinkles = createSprinkles(spaceProps, flexProps);

export type Sprinkles = Parameters<typeof sprinkles>[0];
