import { style } from '@vanilla-extract/css';
import vars from '@/style/contract.css';

export const containerClassName = style({
  height: '100%',
  left: 0,
  overflow: 'hidden',
  position: 'absolute',
  top: 0,
  width: '100%',
  zIndex: vars.zIndex.backgroundImage,
});

export const videoClassName = style({
  height: '100%',
  objectFit: 'cover',
  position: 'relative',
  width: '100%',
});

export const tintClassName = style({
  height: '100%',
  left: 0,
  position: 'absolute',
  objectFit: 'cover',
  top: 0,
  width: '100%',
});
