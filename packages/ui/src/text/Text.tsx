import type { TextProps } from './Text.types';

import { sprinkles } from './Text.sprinkles.css';
import { responsiveFontSize, responsiveFontWeight } from './utils';

export const Text = ({
  as: Component = 'span',
  variant = 'body-medium',
  children,
  fontWeight: fontWeightOverride,
}: TextProps): JSX.Element => {
  const fontSize = responsiveFontSize(variant);
  const fontWeight = fontWeightOverride ?? responsiveFontWeight(variant);

  return (
    <Component className={sprinkles({ fontSize, fontWeight })}>
      {children}
    </Component>
  );
};
