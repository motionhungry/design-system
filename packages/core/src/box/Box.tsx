import type { ElementType } from 'react';
import { forwardRef } from 'react';

import { atoms, Sprinkles } from '../style';

type BoxProps = {
  as?: ElementType;
  children: React.ReactNode;
  className?: string;
} & Sprinkles;

const Box = forwardRef(
  ({ as: Component = 'div', children, className, ...props }: BoxProps, ref) => {
    const newClassName = atoms({
      className,
      reset: Component,
      ...props,
    });

    return (
      <Component className={newClassName} ref={ref}>
        {children}
      </Component>
    );
  }
);

Box.displayName = 'Box';

export { Box };
