import { palette } from './palette';

export const components = {
  button: {
    primary: {
      default: {
        background: `linear-gradient(135deg, ${palette.purple[100]} 0%, ${palette.pink[100]} 100%)`,
        color: palette.neutral.white,
      },
      disabled: {
        background: `linear-gradient(135deg, ${palette.purple[50]} 0%, ${palette.pink[50]} 100%)`,
        color: palette.neutral.white,
      },
      hover: {
        background: `linear-gradient(135deg, ${palette.purple[100]} 0%, ${palette.pink[100]} 70%)`,
        color: palette.neutral.white,
      },
      active: {
        background: `linear-gradient(135deg, ${palette.purple[100]} 30%, ${palette.pink[100]} 100%)`,
        color: palette.neutral.white,
      },
    },
  },
};
