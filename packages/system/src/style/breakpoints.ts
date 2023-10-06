import type { ScreenSize } from './types';

export const screenSizes: Record<ScreenSize, string> = {
  small: '0px',
  mobile: '480px',
  tablet: '768px',
  desktop: '1280px',
};

export const breakpoints = ((): Record<string, Record<'@media', string>> =>
  Object.entries(screenSizes).reduce(
    (prev, [key, value]) => ({
      ...prev,
      [key]: { '@media': `screen and (min-width: ${value})` },
    }),
    {},
  ))();
