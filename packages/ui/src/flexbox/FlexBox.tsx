import { atoms } from '@/style';

import { sprinkles } from './FlexBox.sprinkles.css';
import type { Sprinkles } from './FlexBox.sprinkles.css';

export type FlexBoxProps = {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
} & Sprinkles;

export const FlexBox = ({
  alignItems = 'stretch',
  as: Component = 'div',
  children,
  className: fwdClassName,
  display = 'flex',
  flexDirection = 'row',
  flexWrap = 'nowrap',
  justifyContent = 'flex-start',
  ...props
}: FlexBoxProps): JSX.Element => {
  const className = atoms({
    className: fwdClassName,
    reset: Component,
    sprinklesClassName: sprinkles({
      alignItems,
      flexDirection,
      flexWrap,
      display,
      justifyContent,
      ...props,
    }),
  });

  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
};
