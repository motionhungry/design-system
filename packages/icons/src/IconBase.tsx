import { forwardRef } from 'react';

import type { IconProps } from './types';

const IconBase = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { alt, size, children, ...rest } = props;
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox={`0 0 24 24`}
      {...rest}
    >
      {!!alt && <title>{alt}</title>}
      {children}
    </svg>
  );
});

IconBase.displayName = 'Icon';

export { IconBase };
