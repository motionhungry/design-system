import { createTheme } from '@vanilla-extract/css';
import { styleVars } from '@veer/system/contract.css';
import { defaultTokens } from '@veer/system/tokens';

export const lightTheme = createTheme(styleVars, defaultTokens);
export const darkTheme = createTheme(styleVars, defaultTokens);
