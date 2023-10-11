import { Box } from '@veer-ui/system';
import type { Screen } from '../types';
import { buttonClass, iconClass } from './MenuButton.styles.css';

type MenuButtonProps = {
  isActive: boolean;
  onMenuButtonClick: () => void;
  screen: Screen;
};

export const MenuButton = ({
  isActive,
  onMenuButtonClick,
  screen,
}: MenuButtonProps): JSX.Element => {
  const className = isActive ? buttonClass.active : buttonClass.inactive;
  return (
    <Box as="li">
      <Box as="button" className={className} onClick={onMenuButtonClick}>
        <Box className={iconClass}>{screen.icon}</Box>
      </Box>
    </Box>
  );
};
