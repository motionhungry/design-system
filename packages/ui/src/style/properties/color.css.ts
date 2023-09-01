import { defineProperties } from '@vanilla-extract/sprinkles';

import { styleVars } from '@/style';

export const colorProps = defineProperties({
  properties: {
    backgroundColor: styleVars.palette,
    color: styleVars.palette,
  },
  shorthands: {
    bgColor: ['backgroundColor'],
  },
});
