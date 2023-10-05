import type { ScreenSize } from './types';

export const screenSizes: Record<ScreenSize, string> = {
  xsmall: '0px',
  small: '576px',
  medium: '768px',
  large: '992px',
  xlarge: '1200px',
  xxlarge: '1400px',
};

export const breakpoints = ((): Record<string, Record<'@media', string>> =>
  Object.entries(screenSizes).reduce(
    (prev, [key, value]) => ({
      ...prev,
      [key]: { '@media': `screen and (min-width: ${value})` },
    }),
    {},
  ))();
