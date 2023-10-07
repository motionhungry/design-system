import { assignInlineVars } from '@vanilla-extract/dynamic';
import type { ElementType } from 'react';
import { BackgroundMedia } from '@/bg-media';
import { Box } from '@/box';
import { Container } from '@/container';
import { FlexBox } from '@/flexbox';
import { Text } from '@/text';
import type { Sprinkles as FlexBoxSprinkles } from '@/flexbox/FlexBox.sprinkles.css';
import type { Sprinkles as BoxSprinkles } from '@/box/Box.sprinkles.css';
import { className, minHeight, headingClass } from './Block.styles.css';
import vars from '@/style/contract.css';

type BlockProps = {
  as?: ElementType;
  backgroundImageSrc?: string;
  backgroundVideoSrc?: string;
  backgroundTintColor?: BoxSprinkles['backgroundColor'];
  backgroundTintOpacity?: BoxSprinkles['opacity'];
  children: React.ReactNode;
  fullHeight?: boolean;
  heading?: string;
  headingPaddingBottom?: string;
  justifyContent?: FlexBoxSprinkles['justifyContent'];
} & Pick<BoxSprinkles, 'backgroundColor' | 'bgColor' | 'color'>;

const Block = ({
  as,
  backgroundColor,
  backgroundTintColor,
  backgroundTintOpacity,
  bgColor,
  backgroundImageSrc,
  backgroundVideoSrc,
  children,
  color,
  fullHeight = false,
  heading,
  justifyContent,
}: BlockProps): JSX.Element => {
  // Prevent the background color from being overlayed on-top of video or image.
  const showBgColor = !backgroundImageSrc && !backgroundVideoSrc;
  return (
    <FlexBox
      as={as}
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
      <Container justifyContent={justifyContent}>
        {heading && (
          <Box className={headingClass}>
            <Text variant="h2">{heading}</Text>
          </Box>
        )}
        {children}
      </Container>
    </FlexBox>
  );
};

Block.displayName = 'Block';

export { Block };
