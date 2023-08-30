import clsx from 'clsx';
import type { ElementType } from 'react';

import { baseReset, elementResets } from './reset.css';
import type { Sprinkles } from './sprinkles.css';
import { sprinkles } from './sprinkles.css';

export type Atoms = {
  reset?: ElementType;
  className?: string | string[];
} & Sprinkles;

export const atoms = ({ reset, className, ...props }: Atoms): string => {
  const sprinklesClassNames = sprinkles(props);
  return clsx(
    sprinklesClassNames,
    className,
    reset
      ? [baseReset, elementResets[reset as keyof JSX.IntrinsicElements]]
      : null,
  );
};
