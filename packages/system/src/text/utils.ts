import type { TextVariant, FontWeight } from './Text.types';

const large: Record<TextVariant, TextVariant> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  'body-large': 'body-large',
  'body-medium': 'body-medium',
  'body-small': 'body-small',
};

const medium: Record<TextVariant, TextVariant> = {
  h1: 'h2',
  h2: 'h3',
  h3: 'h4',
  h4: 'body-large',
  'body-large': 'body-medium',
  'body-medium': 'body-small',
  'body-small': 'body-small',
};

const small: Record<TextVariant, TextVariant> = {
  h1: 'h3',
  h2: 'h4',
  h3: 'body-large',
  h4: 'body-medium',
  'body-large': 'body-small',
  'body-medium': 'body-small',
  'body-small': 'body-small',
};

type ResponsiveSize =
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge';

export const responsiveFontSize = (
  variant: TextVariant,
): Record<ResponsiveSize, TextVariant> => ({
  xsmall: small[variant],
  small: small[variant],
  medium: medium[variant],
  large: large[variant],
  xlarge: large[variant],
  xxlarge: large[variant],
});

const weight: Record<TextVariant, FontWeight> = {
  h1: 'bold',
  h2: 'bold',
  h3: 'bold',
  h4: 'bold',
  'body-large': 'normal',
  'body-medium': 'normal',
  'body-small': 'normal',
};

export const responsiveFontWeight = (
  variant: TextVariant,
): Record<ResponsiveSize, FontWeight> => ({
  xsmall: weight[variant],
  small: weight[variant],
  medium: weight[variant],
  large: weight[variant],
  xlarge: weight[variant],
  xxlarge: weight[variant],
});
