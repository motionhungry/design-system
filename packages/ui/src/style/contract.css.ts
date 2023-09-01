import { createThemeContract } from '@vanilla-extract/css';

import {
  borderRadius,
  components,
  elevation,
  fontFamily,
  layout,
  legacyPalette,
  palette,
  space,
  typography,
} from './tokens';

export const styleVars = createThemeContract({
  borderRadius,
  components,
  elevation,
  fontFamily,
  layout,
  legacyPalette,
  palette,
  space,
  typography,
});
