import { breakpoints } from '@/style/tokens';

export const transformBreakpoints = (): Record<
  string,
  Record<'@media', string>
> =>
  Object.entries(breakpoints).reduce(
    (prev, [key, value]) => ({
      ...prev,
      [key]: { '@media': `screen and (min-width: ${value}px)` },
    }),
    {},
  );
