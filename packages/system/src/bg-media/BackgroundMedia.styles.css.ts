import { style } from '@vanilla-extract/css';
import { zIndex } from '@/style/z-index';

export const backgroundMedia = style({
  height: '100%',
  left: 0,
  overflow: 'hidden',
  position: 'absolute',
  top: 0,
  width: '100%',
  zIndex: zIndex.backgroundMedia,
});

export const backgroundMediaVideo = style({
  height: '100%',
  objectFit: 'cover',
  position: 'relative',
  width: '100%',
});

export const backgroundMediaTint = style({
  height: '100%',
  left: 0,
  position: 'absolute',
  objectFit: 'cover',
  top: 0,
  width: '100%',
});
