import {
  createThemeContract,
  createGlobalThemeContract,
} from '@vanilla-extract/css';

export const globalVars = createGlobalThemeContract({
  borderRadius: {
    small: 'border-radius-small',
    medium: 'border-radius-medium',
    large: 'border-radius-large',
  },
  font: {
    fontFamily: 'font-family',
    size: 'font-size',
  },
  grid: {
    columnGap: 'grid-column-gap',
  },
  layout: {
    maxWidth: 'layout-max-width',
    containerMargin: {
      small: 'container-margin-small',
      mobile: 'container-margin-mobile',
      tablet: 'container-margin-tablet',
      desktop: 'container-margin-desktop',
    },
  },
  palette: {
    white: 'palette-white',
    black: 'palette-black',
    'primary.50': 'palette-primary50',
    'primary.100': 'palette-primary100',
    'primary.200': 'palette-primary200',
    'primary.300': 'palette-primary300',
    'primary.400': 'palette-primary400',
    'primary.500': 'palette-primary500',
    'primary.600': 'palette-primary600',
    'primary.700': 'palette-primary700',
    'primary.800': 'palette-primary800',
    'primary.900': 'palette-primary900',
    'primary.950': 'palette-primary950',
    'secondary.50': 'palette-secondary50',
    'secondary.100': 'palette-secondary100',
    'secondary.200': 'palette-secondary200',
    'secondary.300': 'palette-secondary300',
    'secondary.400': 'palette-secondary400',
    'secondary.500': 'palette-secondary500',
    'secondary.600': 'palette-secondary600',
    'secondary.700': 'palette-secondary700',
    'secondary.800': 'palette-secondary800',
    'secondary.900': 'palette-secondary900',
    'secondary.950': 'palette-secondary950',
    'neutral.50': 'palette-neutral50',
    'neutral.100': 'palette-neutral100',
    'neutral.200': 'palette-neutral200',
    'neutral.300': 'palette-neutral300',
    'neutral.400': 'palette-neutral400',
    'neutral.500': 'palette-neutral500',
    'neutral.600': 'palette-neutral600',
    'neutral.700': 'palette-neutral700',
    'neutral.800': 'palette-neutral800',
    'neutral.900': 'palette-neutral900',
    'neutral.950': 'palette-neutral950',
  },
  space: {
    xxl: 'space-xxl',
    xl: 'space-xl',
    lg: 'space-lg',
    md: 'space-md',
    sm: 'space-sm',
    xs: 'space-xs',
    xxs: 'space-xxs',
  },
  typography: {
    fontSize: {
      h1: 'font-size-h1',
      h2: 'font-size-h2',
      h3: 'font-size-h3',
      h4: 'font-size-h4',
      h5: 'font-size-h5',
      bodyXL: 'font-size-body-xl',
      bodyLG: 'font-size-body-lg',
      bodyMD: 'font-size-body-md',
      bodySM: 'font-size-body-sm',
      bodyXS: 'font-size-body-xs',
    },
    lineHeight: {
      h1: 'line-height-h1',
      h2: 'line-height-h2',
      h3: 'line-height-h3',
      h4: 'line-height-h4',
      h5: 'line-height-h5',
      bodyXL: 'line-height-body-xl',
      bodyLG: 'line-height-body-lg',
      bodyMD: 'line-height-body-md',
      bodySM: 'line-height-body-sm',
      bodyXS: 'line-height-body-xs',
    },
    fontWeight: {
      light: 'font-weight-light',
      normal: 'font-weight-normal',
      medium: 'font-weight-medium',
      semiBold: 'font-weight-semi-bold',
      bold: 'font-weight-bold',
    },
  },
  zIndex: {
    backgroundImage: 'z-index-background-image',
  },
});

export const themeVars = createThemeContract({
  components: {
    button: {
      primary: {
        default: {
          background: null,
          color: null,
        },
        disabled: {
          background: null,
          color: null,
        },
        hover: {
          background: null,
          color: null,
        },
        active: {
          background: null,
          color: null,
        },
      },
      typography: {
        small: {
          fontSize: null,
          lineHeight: null,
        },
        medium: {
          fontSize: null,
          lineHeight: null,
        },
        large: {
          fontSize: null,
          lineHeight: null,
        },
      },
    },
  },
  elevation: {
    low: null,
    mid: null,
    high: null,
  },
});

export default { ...globalVars, ...themeVars };
