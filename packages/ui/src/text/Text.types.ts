import type { Sprinkles } from './Text.sprinkles.css';

export type TextComponent = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';

export type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'body-large'
  | 'body-medium'
  | 'body-small';

export type FontWeight = 'bold' | 'semi-bold' | 'normal' | 'medium' | 'light';

export type TextProps = {
  as?: TextComponent;
  variant?: TextVariant;
  children: string;
  fontWeight?: FontWeight;
} & Omit<Sprinkles, 'fontSize'>;
