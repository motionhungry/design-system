import { atoms } from '@/style';

import { sprinkles } from './FlexBox.sprinkles.css';
import type { Sprinkles } from './FlexBox.sprinkles.css';
import { className } from './FlexBox.styles.css';

export type FlexBoxProps = {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
} & Sprinkles;

export const FlexBox = ({
  as: Component = 'div',
  children,
  flexDirection = 'row',
  flexWrap = 'nowrap',
  justifyContent = 'flex-start',
  ...props
}: FlexBoxProps): JSX.Element => {
  const sprinklesClassName = sprinkles({
    flexDirection,
    flexWrap,
    justifyContent,
    ...props,
  });
  const newClassName = atoms({
    sprinklesClassName,
    className,
    reset: Component,
  });

  return (
    <Component className={newClassName} {...props}>
      {children}
    </Component>
  );
};
