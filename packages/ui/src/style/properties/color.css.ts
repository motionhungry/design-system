import { defineProperties } from '@vanilla-extract/sprinkles';

import { styleVars } from '@/style';

const opacity = Array(101)
  .fill(null)
  .map((_, idx) => idx)
  .reduce(
    (prev, current) => ({
      ...prev,
      [current]: current / 100,
    }),
    {},
  );

export const colorProps = defineProperties({
  properties: {
    backgroundColor: styleVars.palette,
    color: styleVars.palette,
    opacity,
  },
  shorthands: {
    bgColor: ['backgroundColor'],
  },
});
