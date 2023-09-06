import { assignInlineVars } from '@vanilla-extract/dynamic';
import { BackgroundMedia } from '@/bg-media';
import { Container } from '@/container';
import { FlexBox } from '@/flexbox';
import type { Sprinkles as FlexBoxSprinkles } from '@/flexbox/FlexBox.sprinkles.css';
import type { Sprinkles as BoxSprinkles } from '@/box/Box.sprinkles.css';
import { className, minHeight } from './Block.styles.css';

type BlockProps = {
  backgroundImageSrc?: string;
  backgroundVideoSrc?: string;
  backgroundTintColor?: BoxSprinkles['backgroundColor'];
  backgroundTintOpacity?: BoxSprinkles['opacity'];
  children: React.ReactNode;
  fullHeight?: boolean;
  justifyContent?: FlexBoxSprinkles['justifyContent'];
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
  justifyContent,
}: BlockProps): JSX.Element => {
  // Prevent the background color from being overlayed on-top of video or image.
  const showBgColor = !backgroundImageSrc && !backgroundVideoSrc;
  return (
    <FlexBox
      backgroundColor={showBgColor ? backgroundColor : undefined}
      bgColor={showBgColor ? bgColor : undefined}
      className={className}
      color={color}
      style={assignInlineVars({
        [minHeight]: fullHeight ? '100vh' : 'auto',
      })}
      flexDirection="column"
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
      <Container justifyContent={justifyContent}>{children}</Container>
    </FlexBox>
  );
};

Block.displayName = 'Block';

export { Block };
