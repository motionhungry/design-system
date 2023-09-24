import { Box } from '@veer-ui/system';
import type { Screen } from '../types';
import { className } from './Menu.styles.css';
import { MenuButton } from './MenuButton';

type MenuProps = {
  activeIndex: number;
  onMenuButtonClick: (index: number) => void;
  screens: Screen[];
};

export const Menu = ({
  activeIndex,
  onMenuButtonClick,
  screens,
}: MenuProps): JSX.Element => (
  <Box as="ul" className={className}>
    {screens.map((screen, index) => {
      const isActive = index === activeIndex;
      return (
        <MenuButton
          onMenuButtonClick={(): void => onMenuButtonClick(index)}
          isActive={isActive}
          screen={screen}
        />
      );
    })}
  </Box>
);
