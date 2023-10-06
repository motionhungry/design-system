import {
  createGlobalTheme,
  createTheme,
  globalStyle,
} from '@vanilla-extract/css';
import { styleVars, globalVars } from '@veer-ui/system/contract.css';
import { defaultTokens, defaultGlobalTokens } from '@veer-ui/system/tokens';

export const globalTheme = createGlobalTheme(':root', globalVars, {
  ...defaultGlobalTokens,
});

globalStyle('body', {
  fontFamily: globalVars.font.fontFamily,
});

export const lightTheme = createTheme(styleVars, defaultTokens);
export const darkTheme = createTheme(styleVars, defaultTokens);
