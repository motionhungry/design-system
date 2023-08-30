import clsx from 'clsx';
import { ElementType } from 'react';

import { baseReset, elementResets } from './reset.css';
import { Sprinkles, sprinkles } from './sprinkles.css';

export type Atoms = {
  reset?: ElementType;
  className?: string | string[];
} & Sprinkles;

export const atoms = ({ reset, className, ...props }: Atoms) => {
  const sprinklesClassNames = sprinkles(props);
  return clsx(
    sprinklesClassNames,
    className,
    reset
      ? [baseReset, elementResets[reset as keyof JSX.IntrinsicElements]]
      : null
  );
};
