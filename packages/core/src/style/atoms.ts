import clsx from 'clsx';
import type { ElementType } from 'react';

import { baseReset, elementResets } from './reset.css';

export type Atoms = {
  sprinklesClassName: string;
  className?: string | string[];
  reset?: ElementType;
};

export const atoms = ({
  sprinklesClassName,
  className,
  reset,
}: Atoms): string => {
  return clsx(
    sprinklesClassName,
    className,
    reset
      ? [baseReset, elementResets[reset as keyof JSX.IntrinsicElements]]
      : null,
  );
};
