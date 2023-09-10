import { styleVars } from '@motionhungry/ui/contract.css';
import { defaultTokens } from '@motionhungry/ui/tokens';

import { createTheme } from '@vanilla-extract/css';

export const lightTheme = createTheme(styleVars, defaultTokens);
export const darkTheme = createTheme(styleVars, defaultTokens);
