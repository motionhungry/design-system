import { style } from '@vanilla-extract/css';
import { zIndex } from '@/style/tokens';

export const containerClassName = style({
  height: '100%',
  left: 0,
  overflow: 'hidden',
  position: 'absolute',
  top: 0,
  width: '100%',
  zIndex: zIndex.backgroundImage,
});
