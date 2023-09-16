import { createTheme } from '@vanilla-extract/css';
import { styleVars } from '@veer-ui/system/contract.css';
import { defaultTokens } from '@veer-ui/system/tokens';

export const lightTheme = createTheme(styleVars, defaultTokens);
export const darkTheme = createTheme(styleVars, defaultTokens);
