import {
  createThemeContract,
  createGlobalThemeContract,
} from '@vanilla-extract/css';

import { defaultTokens } from './tokens';

export const globalVars = createGlobalThemeContract({
  font: {
    fontFamily: 'font-family',
    size: 'font-size',
  },
  layout: {
    maxWidth: 'layout-max-width',
    containerMargin: {
      small: 'container-margin-small',
      mobile: 'container-margin-mobile',
      tablet: 'container-margin-tablet',
      desktop: 'container-margin-desktop',
    },
  },
  space: {
    xxl: 'space-xxl',
    xl: 'space-xl',
    lg: 'space-lg',
    md: 'space-md',
    sm: 'space-sm',
    xs: 'space-xs',
    xxs: 'space-xxs',
  },
  typography: {
    fontSize: {
      h1: 'font-size-h1',
      h2: 'font-size-h2',
      h3: 'font-size-h3',
      h4: 'font-size-h4',
      h5: 'font-size-h5',
      bodyXL: 'font-size-body-xl',
      bodyLG: 'font-size-body-lg',
      bodyMD: 'font-size-body-md',
      bodySM: 'font-size-body-sm',
      bodyXS: 'font-size-body-xs',
    },
    lineHeight: {
      h1: 'line-height-h1',
      h2: 'line-height-h2',
      h3: 'line-height-h3',
      h4: 'line-height-h4',
      h5: 'line-height-h5',
      bodyXL: 'line-height-body-xl',
      bodyLG: 'line-height-body-lg',
      bodyMD: 'line-height-body-md',
      bodySM: 'line-height-body-sm',
      bodyXS: 'line-height-body-xs',
    },
    fontWeight: {
      light: 'font-weight-light',
      normal: 'font-weight-normal',
      medium: 'font-weight-medium',
      semiBold: 'font-weight-semi-bold',
      bold: 'font-weight-bold',
    },
  },
});

export const styleVars = createThemeContract(defaultTokens);
