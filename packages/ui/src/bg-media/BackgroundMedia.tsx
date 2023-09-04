import { Box } from '@/box';
import type { Sprinkles as BoxSprinkles } from '@/box/Box.sprinkles.css';
import { Image } from '@/image';
import {
  containerClassName,
  tintClassName,
  videoClassName,
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
  return (
    <Box className={containerClassName} {...props}>
      {!!videoSrc && (
        <video
          aria-hidden="true"
          autoPlay
          className={videoClassName}
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
          className={tintClassName}
          opacity={tintOpacity}
        />
      )}
    </Box>
  );
};

export { BackgroundMedia };
