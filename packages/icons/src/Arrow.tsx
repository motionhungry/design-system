import { forwardRef } from 'react';

import { IconBase } from './IconBase';
import type { Icon } from './types';

const Arrow: Icon = forwardRef((props, ref) => {
  const { color, ...rest } = props;

  return (
    <IconBase ref={ref} {...rest}>
      <path
        d="M17 12H3"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21.7152 11.7966L16.265 7.90356C15.7355 7.52535 15 7.90385 15 8.55455V15.4454C15 16.0961 15.7355 16.4746 16.265 16.0964L21.7152 12.2034C21.8548 12.1037 21.8548 11.8963 21.7152 11.7966Z"
        fill={color}
      />
    </IconBase>
  );
});

Arrow.displayName = 'Arrow';

export { Arrow };
