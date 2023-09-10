import { styleVars } from '@motionhungry/ui/contract.css';
import { defaultTokens } from '@motionhungry/ui/tokens';

import { createTheme } from '@vanilla-extract/css';

/* eslint-disable @typescript-eslint/no-unsafe-argument */
export const lightTheme = createTheme(styleVars, defaultTokens);
export const darkTheme = createTheme(styleVars, defaultTokens);
/* eslint-enable @typescript-eslint/no-unsafe-argument */
