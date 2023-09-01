import { defineProperties } from '@vanilla-extract/sprinkles';

export const flexProps = defineProperties({
  properties: {
    flexDirection: ['row', 'column'],
    justifyContent: [
      'flex-start',
      'flex-end',
      'center',
      'space-between',
      'space-around',
      'space-evenly',
      'stretch',
    ],
    flexWrap: ['wrap', 'nowrap'],
  },
});
