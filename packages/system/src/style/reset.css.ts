import { style } from '@vanilla-extract/css';

export const baseReset = style({
  margin: 0,
  padding: 0,
  border: 0,
  boxSizing: 'border-box',
});

const list = style({
  listStyle: 'none',
});

const a = style({
  textDecoration: 'none',
  color: 'inherit',
});

const button = style({
  background: 'none',
});

export const elementResets: Partial<
  Record<keyof JSX.IntrinsicElements, string>
> = {
  ul: list,
  ol: list,
  a,
  button,
};
