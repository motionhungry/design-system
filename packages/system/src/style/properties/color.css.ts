import { defineProperties } from '@vanilla-extract/sprinkles';

import vars from '@/style/contract.css';

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
    backgroundColor: vars.palette,
    color: vars.palette,
    opacity,
  },
  shorthands: {
    bgColor: ['backgroundColor'],
  },
});
