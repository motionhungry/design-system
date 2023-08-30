import { createTheme } from '@vanilla-extract/css';

import { styleVars } from '../contract.css';
import {
  borderRadius,
  components,
  elevation,
  fontFamily,
  palette,
  space,
  typography,
} from '../tokens';

export const lightTheme = createTheme(styleVars, {
  borderRadius,
  components,
  elevation,
  fontFamily,
  palette,
  space,
  typography,
});
