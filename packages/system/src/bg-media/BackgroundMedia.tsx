import { Box } from '@/box';
import type { Sprinkles as BoxSprinkles } from '@/box/Box.sprinkles.css';
import { Image } from '@/image';
import {
  backgroundMedia,
  backgroundMediaTint,
  backgroundMediaVideo,
} from './BackgroundMedia.styles.css';

export type BackgroundMedia = {
  imageSrc?: string;
  videoSrc?: string;
  tintColor?: BoxSprinkles['backgroundColor'];
  tintOpacity?: BoxSprinkles['opacity'];
} & Pick<BoxSprinkles, 'backgroundColor' | 'bgColor'>;

const BackgroundMedia = ({
  imageSrc,
  tintColor,
  tintOpacity = 0,
  videoSrc,
  ...props
}: BackgroundMedia): JSX.Element => {
  if (!videoSrc && !imageSrc) {
    return <></>;
  }

  return (
    <Box className={backgroundMedia} {...props}>
      {!!videoSrc && (
        <video
          aria-hidden="true"
          autoPlay
          className={backgroundMediaVideo}
          loop
          muted
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
      {!!imageSrc && <Image alt="" src={imageSrc} />}
      {!!tintColor && (
        <Box
          backgroundColor={tintColor}
          className={backgroundMediaTint}
          opacity={tintOpacity}
        />
      )}
    </Box>
  );
};

export { BackgroundMedia };
