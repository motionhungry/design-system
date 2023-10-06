import type { Sprinkles } from './Text.sprinkles.css';

export type TextComponent = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span';

export type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'bodyXL'
  | 'bodyLG'
  | 'bodyMD'
  | 'bodySM'
  | 'bodyXS';

export type TextProps = {
  as?: TextComponent;
  variant?: TextVariant;
  children: string;
} & Omit<Sprinkles, 'fontSize' | 'lineHeight'>;
