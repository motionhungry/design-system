import { assignInlineVars } from '@vanilla-extract/dynamic';
import { BackgroundMedia } from '@/bg-media';
import { Box } from '@/box';
import { Container } from '@/container';
import type { Sprinkles } from '@/box/Box.sprinkles.css';
import { className, minHeight } from './Block.styles.css';

type BlockProps = {
  backgroundImageSrc?: string;
  backgroundVideoSrc?: string;
  backgroundVideoZoom?: number;
  children: React.ReactNode;
  fullHeight?: boolean;
} & Pick<Sprinkles, 'backgroundColor' | 'bgColor' | 'color'>;

const Block = ({
  backgroundImageSrc,
  backgroundVideoSrc,
  backgroundVideoZoom = 0,
  children,
  fullHeight = false,
  ...props
}: BlockProps): JSX.Element => {
  return (
    <Box
      className={className}
      style={assignInlineVars({
        [minHeight]: fullHeight ? '100vh' : 'auto',
      })}
      {...props}
    >
      {(!!backgroundImageSrc || !!backgroundVideoSrc) && (
        <BackgroundMedia
          imageSrc={backgroundImageSrc}
          videoSrc={backgroundVideoSrc}
          videoZoom={backgroundVideoZoom}
        />
      )}
      <Container>{children}</Container>
    </Box>
  );
};

Block.displayName = 'Block';

export { Block };
