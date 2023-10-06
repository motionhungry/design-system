import { atoms } from '@/style/atoms';
import type { TextProps } from './Text.types';
import { sprinkles } from './Text.sprinkles.css';
import { className as textClassName } from './Text.styles.css';
import { getResponsiveVariant } from './utils';

export const Text = ({
  as,
  variant = 'bodyMD',
  children,
  color = 'neutral.950',
  ...props
}: TextProps): JSX.Element => {
  const Component = as
    ? as
    : ['h1', 'h2', 'h3', 'h4', 'h5'].includes(variant)
    ? (variant as React.ElementType)
    : 'span';

  const responsiveVariant = getResponsiveVariant(variant);

  const className = atoms({
    className: [textClassName[variant]],
    reset: Component,
    sprinklesClassName: sprinkles({
      color,
      fontSize: responsiveVariant,
      lineHeight: responsiveVariant,
      ...props,
    }),
  });

  return <Component className={className}>{children}</Component>;
};
