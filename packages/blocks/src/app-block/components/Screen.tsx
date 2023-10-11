import { Box, Block } from '@veer-ui/system';
import { innerContainerClass, outerContainerClass } from './Screen.styles.css';
import type { Screen as TScreen } from '../types';

type ScreenProps = {
  screen: TScreen;
};

export const Screen = ({ screen }: ScreenProps): JSX.Element => (
  <Box className={outerContainerClass}>
    <Box className={innerContainerClass}>
      <Block
        backgroundImageSrc={screen.imageSrc}
        backgroundVideoSrc={screen.videoSrc}
        fullHeight
      >
        {screen.children}
      </Block>
    </Box>
  </Box>
);
