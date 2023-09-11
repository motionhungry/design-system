import { createSprinkles } from '@vanilla-extract/sprinkles';

import { colorProps, flexProps, spaceProps } from '@/style';

export const sprinkles = createSprinkles(colorProps, spaceProps, flexProps);

export type Sprinkles = Parameters<typeof sprinkles>[0];
