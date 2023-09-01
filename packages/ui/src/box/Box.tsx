import type { ElementType } from 'react';
import { forwardRef } from 'react';

import { atoms } from '@/style';
import { sprinkles } from './Box.sprinkles.css';
import type { Sprinkles } from './Box.sprinkles.css';

export type BoxProps = {
  as?: ElementType;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
} & Sprinkles;

const Box = forwardRef(
  (
    {
      as: Component = 'div',
      children,
      display = 'block',
      className: fwdClassName,
      style,
      ...props
    }: BoxProps,
    ref,
  ) => {
    const className = atoms({
      className: fwdClassName,
      reset: Component,
      sprinklesClassName: sprinkles({
        display: display ?? 'block',
        ...props,
      }),
    });

    return (
      <Component className={className} style={style} ref={ref}>
        {children}
      </Component>
    );
  },
);

Box.displayName = 'Box';

export { Box };
