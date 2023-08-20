import { forwardRef } from 'react';

import { IconBase } from './IconBase';
import { Icon } from './types';

const ChevronDown: Icon = forwardRef((props, ref) => {
  const { color, ...rest } = props;

  return (
    <IconBase ref={ref} {...rest}>
      <path d="M18 9L12 15L6 9" stroke={color} stroke-width="2" />
    </IconBase>
  );
});

ChevronDown.displayName = 'ChevronDown';

export { ChevronDown };
