import { forwardRef } from 'react';

import { IconBase } from './IconBase';
import type { Icon } from './types';

const Calendar: Icon = forwardRef((props, ref) => {
  const { color, ...rest } = props;

  return (
    <IconBase ref={ref} {...rest}>
      <rect
        x="3"
        y="6"
        width="18"
        height="15"
        rx="2"
        stroke={color}
        stroke-width="2"
      />
      <path
        d="M4 11H20"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M9 16H15"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M8 3L8 7"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M16 3L16 7"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
    </IconBase>
  );
});

Calendar.displayName = 'Calendar';

export { Calendar };
