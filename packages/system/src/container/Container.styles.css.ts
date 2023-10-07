import { style } from '@vanilla-extract/css';
import { screenSizes } from '@/style';
import vars from '@/style/contract.css';

export const className = style([
  {
    flexGrow: 1,
    margin: '0 auto',
    maxWidth: vars.layout.maxWidth,
    paddingLeft: vars.layout.containerMargin.small,
    paddingRight: vars.layout.containerMargin.small,
    position: 'relative',
    width: '100%',

    '@media': {
      [`screen and (min-width: ${screenSizes.mobile})`]: {
        paddingLeft: vars.layout.containerMargin.mobile,
        paddingRight: vars.layout.containerMargin.mobile,
      },
      [`screen and (min-width: ${screenSizes.tablet})`]: {
        paddingLeft: vars.layout.containerMargin.tablet,
        paddingRight: vars.layout.containerMargin.tablet,
      },
      [`screen and (min-width: ${screenSizes.desktop})`]: {
        paddingLeft: vars.layout.containerMargin.desktop,
        paddingRight: vars.layout.containerMargin.desktop,
      },
    },
  },
]);
