import { style } from '@vanilla-extract/css';
import vars from '@veer-ui/system/contract.css';

export const contactForm = style({});

export const colContainer = style({
  gap: vars.space.lg,
  textAlign: 'center',
  flexDirection: 'column',
  maxWidth: '43rem',
  margin: '0 auto',

  '@media': {
    'screen and (min-width: 1280px)': {
      gap: vars.space.md,
      flexDirection: 'row-reverse',
      maxWidth: 'none',
      margin: 'auto',
      textAlign: 'left',
    },
  },
});

export const contactFormOfficeCol = style({
  flex: 1,
});

export const contactFormCol = style({
  flex: 1,
});

const {
  backgroundColor,
  borderColor,
  borderWidth,
  borderColorFocus,
  padding,
  placeholderColor,
  fontSize,
  lineHeight,
  color,
} = vars.input;

export const input = style({
  resize: 'none',
  backgroundColor,
  borderColor,
  borderWidth,
  boxSizing: 'border-box',
  padding: padding,
  lineHeight,
  fontSize,
  outlineWidth: 0,
  borderStyle: 'solid',
  fontFamily: 'inherit',
  width: '100%',
  color,

  ':focus': {
    borderColor: borderColorFocus,
  },
  '::placeholder': {
    color: placeholderColor,
  },
});

export const button = style({
  borderStyle: 'solid',
  cursor: 'pointer',
  fontFamily: 'inherit',
  borderWidth: vars.button.base.borderWidth,
  fontSize: vars.button.base.fontSize,
  fontWeight: vars.button.base.fontWeight,
  lineHeight: vars.button.base.lineHeight,
  padding: vars.button.base.padding,
  backgroundColor: vars.button.default.backgroundColor,
  borderColor: vars.button.default.borderColor,
  color: vars.button.default.color,
  width: '100%',

  ':hover': {
    backgroundColor: vars.button.hover.backgroundColor,
    borderColor: vars.button.hover.borderColor,
    color: vars.button.hover.color,
  },
  ':active': {
    backgroundColor: vars.button.active.backgroundColor,
    borderColor: vars.button.active.borderColor,
    color: vars.button.active.color,
  },
  ':disabled': {
    backgroundColor: vars.button.disabled.backgroundColor,
    borderColor: vars.button.disabled.borderColor,
    color: vars.button.disabled.color,
    cursor: 'default',
  },

  '@media': {
    'screen and (min-width: 1280px)': {
      width: 'auto',
    },
  },
});
