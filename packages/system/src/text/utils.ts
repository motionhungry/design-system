import type { TextVariant } from './Text.types';
import type { ScreenSize } from '@/style/types';

const large: Record<TextVariant, TextVariant> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  bodyXL: 'bodyXL',
  bodyLG: 'bodyLG',
  bodyMD: 'bodyMD',
  bodySM: 'bodySM',
  bodyXS: 'bodyXS',
};

const small: Record<TextVariant, TextVariant> = {
  h1: 'h2',
  h2: 'h3',
  h3: 'h4',
  h4: 'h5',
  h5: 'h5',
  bodyXL: 'bodyLG',
  bodyLG: 'bodyMD',
  bodyMD: 'bodySM',
  bodySM: 'bodySM',
  bodyXS: 'bodyXS',
};

export const getResponsiveVariant = (
  variant: TextVariant,
): Record<ScreenSize, TextVariant> => ({
  small: small[variant],
  mobile: small[variant],
  tablet: large[variant],
  desktop: large[variant],
});
