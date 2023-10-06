import { globalVars } from '@/style/contract.css';
import { styleVariants } from '@vanilla-extract/css';

export const className = styleVariants({
  h1: {
    fontWeight: globalVars.typography.fontWeight.bold,
  },
  h2: {
    fontWeight: globalVars.typography.fontWeight.bold,
  },
  h3: {
    fontWeight: globalVars.typography.fontWeight.bold,
  },
  h4: {
    fontWeight: globalVars.typography.fontWeight.bold,
  },
  h5: {
    fontWeight: globalVars.typography.fontWeight.bold,
  },
  bodyXL: {
    fontWeight: globalVars.typography.fontWeight.light,
  },
  bodyLG: {
    fontWeight: globalVars.typography.fontWeight.light,
  },
  bodyMD: {
    fontWeight: globalVars.typography.fontWeight.normal,
  },
  bodySM: {
    fontWeight: globalVars.typography.fontWeight.medium,
  },
  bodyXS: {
    fontWeight: globalVars.typography.fontWeight.medium,
  },
});
