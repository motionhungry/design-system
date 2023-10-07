import { assignInlineVars } from '@vanilla-extract/dynamic';
import type { ElementType } from 'react';
import { BackgroundMedia } from '@/bg-media';
import { Container } from '@/container';
import { FlexBox } from '@/flexbox';
import { Text } from '@/text';
import type { Sprinkles as FlexBoxSprinkles } from '@/flexbox/FlexBox.sprinkles.css';
import type { Sprinkles as BoxSprinkles } from '@/box/Box.sprinkles.css';
import { block, minHeight } from './Block.styles.css';

type BlockProps = {
  as?: ElementType;
  backgroundColor?: BoxSprinkles['backgroundColor'];
  backgroundImageSrc?: string;
  backgroundVideoSrc?: string;
  backgroundTintColor?: BoxSprinkles['backgroundColor'];
  backgroundTintOpacity?: BoxSprinkles['opacity'];
  children: React.ReactNode;
  fullHeight?: boolean;
  heading?: string;
  justifyContent?: FlexBoxSprinkles['justifyContent'];
};

const Block = ({
  as,
  backgroundColor,
  backgroundTintOpacity,
  backgroundImageSrc,
  backgroundVideoSrc,
  backgroundTintColor,
  children,
  fullHeight = false,
  heading,
  justifyContent,
}: BlockProps): JSX.Element => {
  // Prevent the background color from being overlayed on top of video or image.
  const showBgColor = !backgroundImageSrc && !backgroundVideoSrc;

  return (
    <FlexBox
      as={as}
      backgroundColor={showBgColor ? backgroundColor : undefined}
      className={block}
      style={assignInlineVars({
        [minHeight]: fullHeight ? '100vh' : 'auto',
      })}
      flexDirection="column"
    >
      <BackgroundMedia
        backgroundColor={backgroundColor}
        imageSrc={backgroundImageSrc}
        tintColor={backgroundTintColor}
        tintOpacity={backgroundTintOpacity}
        videoSrc={backgroundVideoSrc}
      />
      <Container justifyContent={justifyContent}>
        {heading && <Text variant="h2">{heading}</Text>}
        {children}
      </Container>
    </FlexBox>
  );
};

Block.displayName = 'Block';

export { Block };
