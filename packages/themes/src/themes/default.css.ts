import {
  createGlobalTheme,
  createTheme,
  globalStyle,
} from '@vanilla-extract/css';
import { themeVars, globalVars } from '@veer-ui/system/contract.css';
import { defaultTokens, defaultGlobalTokens, defaultPalette } from '@/tokens';

export const globalTheme = createGlobalTheme(':root', globalVars, {
  ...defaultGlobalTokens,
  palette: defaultPalette,
});

export const lightTheme = createTheme(themeVars, defaultTokens);
export const darkTheme = createTheme(themeVars, defaultTokens);

globalStyle('body', {
  fontFamily: globalVars.font.fontFamily,
});
