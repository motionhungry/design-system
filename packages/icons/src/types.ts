import type { ComponentPropsWithRef } from 'react';

export interface IconProps extends ComponentPropsWithRef<'svg'> {
  alt?: string;
  color?: string;
  size?: string | number;
}

export type Icon = React.ForwardRefExoticComponent<IconProps>;
