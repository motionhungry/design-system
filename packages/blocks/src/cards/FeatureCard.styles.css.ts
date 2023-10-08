import { style } from '@vanilla-extract/css';
import vars from '@veer-ui/system/contract.css';

export const featureCard = style({
  gap: '32px',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  selectors: {
    '&:not(:last-child)': {
      paddingBottom: vars.space.lg,
    },
  },
});

export const featureCardPhoto = style({
  paddingBottom: vars.space.xs,
});
