import { assignInlineVars } from '@vanilla-extract/dynamic';
import { BackgroundMedia } from '@/bg-media';
import { Box } from '@/box';
import { Container } from '@/container';
import type { Sprinkles as BoxSprinkles } from '@/box/Box.sprinkles.css';
import { className, minHeight } from './Block.styles.css';

type BlockProps = {
  backgroundImageSrc?: string;
  backgroundVideoSrc?: string;
  backgroundTintColor?: BoxSprinkles['backgroundColor'];
  backgroundTintOpacity: BoxSprinkles['opacity'];
  children: React.ReactNode;
  fullHeight?: boolean;
} & Pick<BoxSprinkles, 'backgroundColor' | 'bgColor' | 'color'>;

const Block = ({
  backgroundColor,
  backgroundTintColor,
  backgroundTintOpacity,
  bgColor,
  backgroundImageSrc,
  backgroundVideoSrc,
  children,
  color,
  fullHeight = false,
}: BlockProps): JSX.Element => {
  console.log({ backgroundColor });
  return (
    <Box
      className={className}
      color={color}
      style={assignInlineVars({
        [minHeight]: fullHeight ? '100vh' : 'auto',
      })}
    >
      {
        <BackgroundMedia
          backgroundColor={backgroundColor}
          bgColor={bgColor}
          imageSrc={backgroundImageSrc}
          tintColor={backgroundTintColor}
          tintOpacity={backgroundTintOpacity}
          videoSrc={backgroundVideoSrc}
        />
      }
      <Container>{children}</Container>
    </Box>
  );
};

Block.displayName = 'Block';

export { Block };
