import type { TextProps } from './Text.types';

import { atoms } from '@/style/atoms';
import { sprinkles } from './Text.sprinkles.css';
import { responsiveFontSize, responsiveFontWeight } from './utils';

export const Text = ({
  as,
  variant = 'body-medium',
  children,
  fontWeight: fontWeightOverride,
  ...props
}: TextProps): JSX.Element => {
  const fontSize = responsiveFontSize(variant);
  const fontWeight = fontWeightOverride ?? responsiveFontWeight(variant);

  const Component = as
    ? as
    : ['h1', 'h2', 'h3', 'h4'].includes(variant)
    ? (variant as React.ElementType)
    : 'span';

  const className = atoms({
    className: [],
    reset: Component,
    sprinklesClassName: sprinkles({ fontSize, fontWeight, ...props }),
  });

  return <Component className={className}>{children}</Component>;
};
