import { Box } from '@/box';
import { Image } from '@/image';
import { containerClassName } from './BackgroundMedia.styles.css';

export type BackgroundMedia = {
  imageSrc?: string;
  videoSrc?: string;
  videoZoom?: number;
};

const BackgroundMedia = ({
  imageSrc,
  videoSrc,
  videoZoom = 0,
}: BackgroundMedia): JSX.Element => {
  const topLeft = videoZoom > 0 ? `-${videoZoom / 2}%` : undefined;
  const widthHeight = `${100 + videoZoom}%`;
  return (
    <Box className={containerClassName}>
      {videoSrc && (
        <iframe
          allow="autoplay; fullscreen"
          allowFullScreen
          src={videoSrc}
          title="video"
          width={widthHeight}
          height={widthHeight}
          style={{
            position: 'absolute',
            width: widthHeight,
            height: widthHeight,
            top: topLeft,
            left: topLeft,
          }}
        />
      )}
      {imageSrc && <Image alt="" src={imageSrc} />}
    </Box>
  );
};

export { BackgroundMedia };
