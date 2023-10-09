import { style, styleVariants } from '@vanilla-extract/css';
import vars from '@veer-ui/system/contract.css';

export const base = style({
  width: 240,
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  paddingLeft: vars.space.sm,
  paddingRight: vars.space.sm,
});

export const featureCard = styleVariants({
  small: [
    base,
    {
      '@media': {
        'screen and (min-width: 1280px)': {
          width: 282,
          paddingBottom: vars.space.lg,
        },
      },
    },
  ],
  medium: [
    base,
    {
      '@media': {
        'screen and (min-width: 1280px)': {
          width: 384,
          paddingBottom: vars.space.lg,
        },
      },
    },
  ],
  large: [
    base,
    {
      '@media': {
        'screen and (min-width: 1280px)': {
          width: 588,
          paddingBottom: vars.space.lg,
        },
      },
    },
  ],
});

export const featureCardPhoto = style({
  paddingBottom: vars.space.xs,
});
