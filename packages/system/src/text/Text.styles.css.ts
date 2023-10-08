import vars from '@/style/contract.css';
import { screenSizes } from '@/style/breakpoints';
import { styleVariants } from '@vanilla-extract/css';

export const className = styleVariants({
  h1: {
    color: vars.headingColor,
    fontSize: vars.typography.fontSize.h2,
    lineHeight: vars.typography.lineHeight.h2,
    fontWeight: vars.typography.fontWeight.bold,

    '@media': {
      [`screen and (min-width: ${screenSizes.tablet})`]: {
        fontSize: vars.typography.fontSize.h1,
        lineHeight: vars.typography.lineHeight.h1,
      },
    },
  },
  h2: {
    color: vars.headingColor,
    fontSize: vars.typography.fontSize.h3,
    lineHeight: vars.typography.lineHeight.h3,
    fontWeight: vars.typography.fontWeight.bold,
    paddingBottom: vars.space.lg,

    '@media': {
      [`screen and (min-width: ${screenSizes.tablet})`]: {
        fontSize: vars.typography.fontSize.h2,
        lineHeight: vars.typography.lineHeight.h2,
        paddingBottom: vars.space.xl,
      },
    },
  },
  h3: {
    color: vars.headingColor,
    fontSize: vars.typography.fontSize.h4,
    lineHeight: vars.typography.lineHeight.h4,
    fontWeight: vars.typography.fontWeight.bold,
    paddingBottom: vars.space.xs,

    '@media': {
      [`screen and (min-width: ${screenSizes.tablet})`]: {
        fontSize: vars.typography.fontSize.h3,
        lineHeight: vars.typography.lineHeight.h3,
        paddingBottom: vars.space.xs,
      },
    },
  },
  h4: {
    color: vars.headingColor,
    fontSize: vars.typography.fontSize.h5,
    lineHeight: vars.typography.lineHeight.h5,
    fontWeight: vars.typography.fontWeight.bold,
    paddingBottom: vars.space.xs,

    '@media': {
      [`screen and (min-width: ${screenSizes.tablet})`]: {
        fontSize: vars.typography.fontSize.h4,
        lineHeight: vars.typography.lineHeight.h4,
        paddingBottom: vars.space.xs,
      },
    },
  },
  h5: {
    color: vars.headingColor,
    fontSize: vars.typography.fontSize.h5,
    lineHeight: vars.typography.lineHeight.h5,
    fontWeight: vars.typography.fontWeight.bold,
    paddingBottom: vars.space.xs,
  },
  bodyXL: {
    color: vars.textColor,
    fontSize: vars.typography.fontSize.bodyLG,
    fontWeight: vars.typography.fontWeight.normal,

    '@media': {
      [`screen and (min-width: ${screenSizes.tablet})`]: {
        fontSize: vars.typography.fontSize.bodyXL,
        lineHeight: vars.typography.lineHeight.bodyXL,
      },
    },
  },
  bodyLG: {
    color: vars.textColor,
    fontSize: vars.typography.fontSize.bodyMD,
    lineHeight: vars.typography.lineHeight.bodyMD,
    fontWeight: vars.typography.fontWeight.normal,

    '@media': {
      [`screen and (min-width: ${screenSizes.tablet})`]: {
        fontSize: vars.typography.fontSize.bodyLG,
        lineHeight: vars.typography.lineHeight.bodyLG,
      },
    },
  },
  bodyMD: {
    color: vars.textColor,
    fontSize: vars.typography.fontSize.bodySM,
    lineHeight: vars.typography.lineHeight.bodySM,
    fontWeight: vars.typography.fontWeight.normal,

    '@media': {
      [`screen and (min-width: ${screenSizes.tablet})`]: {
        fontSize: vars.typography.fontSize.bodyMD,
        lineHeight: vars.typography.lineHeight.bodyMD,
      },
    },
  },
  bodySM: {
    color: vars.textColor,
    fontSize: vars.typography.fontSize.bodyXS,
    lineHeight: vars.typography.lineHeight.bodyXS,
    fontWeight: vars.typography.fontWeight.normal,

    '@media': {
      [`screen and (min-width: ${screenSizes.tablet})`]: {
        fontSize: vars.typography.fontSize.bodySM,
        lineHeight: vars.typography.lineHeight.bodySM,
      },
    },
  },
  bodyXS: {
    color: vars.textColor,
    fontSize: vars.typography.fontSize.bodyXS,
    fontWeight: vars.typography.fontWeight.normal,
  },
});
