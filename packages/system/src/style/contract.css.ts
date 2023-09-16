import {
  createThemeContract,
  createGlobalThemeContract,
} from '@vanilla-extract/css';

import { defaultTokens } from './tokens';

export const globalVars = createGlobalThemeContract({
  font: {
    body: 'font-body',
  },
});

export const styleVars = createThemeContract(defaultTokens);
