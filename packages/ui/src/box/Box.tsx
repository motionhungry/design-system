import type { ElementType } from 'react';
import { forwardRef } from 'react';

import { atoms } from '@/style';
import { sprinkles } from './Box.sprinkles.css';
import type { Sprinkles } from './Box.sprinkles.css';
import { className } from './Box.styles.css';

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
      className: fwdClassName,
      style,
      ...props
    }: BoxProps,
    ref,
  ) => {
    const sprinklesClassName = sprinkles(props);
    const newClassName = atoms({
      className: [className, ...(fwdClassName ? [fwdClassName] : [])],
      reset: Component,
      sprinklesClassName,
      ...props,
    });

    return (
      <Component className={newClassName} style={style} ref={ref}>
        {children}
      </Component>
    );
  },
);

Box.displayName = 'Box';

export { Box };
