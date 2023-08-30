import { forwardRef } from 'react';

import { IconBase } from './IconBase';
import type { Icon } from './types';

const Menu: Icon = forwardRef((props, ref) => {
  const { color, ...rest } = props;

  return (
    <IconBase ref={ref} {...rest}>
      <path
        d="M5 7H19"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M5 12H19"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M5 17H19"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
    </IconBase>
  );
});

Menu.displayName = 'Menu';

export { Menu };
