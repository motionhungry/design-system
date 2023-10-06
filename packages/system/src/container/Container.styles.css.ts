import { style } from '@vanilla-extract/css';
import { screenSizes } from '@/style';
import { globalVars } from '@/style/contract.css';

export const className = style([
  {
    flexGrow: 1,
    margin: '0 auto',
    maxWidth: globalVars.layout.maxWidth,
    paddingLeft: globalVars.layout.containerMargin.small,
    paddingRight: globalVars.layout.containerMargin.small,
    position: 'relative',
    width: '100%',

    '@media': {
      [`screen and (min-width: ${screenSizes.mobile})`]: {
        paddingLeft: globalVars.layout.containerMargin.mobile,
        paddingRight: globalVars.layout.containerMargin.mobile,
      },
      [`screen and (min-width: ${screenSizes.tablet})`]: {
        paddingLeft: globalVars.layout.containerMargin.tablet,
        paddingRight: globalVars.layout.containerMargin.tablet,
      },
      [`screen and (min-width: ${screenSizes.desktop})`]: {
        paddingLeft: globalVars.layout.containerMargin.desktop,
        paddingRight: globalVars.layout.containerMargin.desktop,
      },
    },
  },
]);
