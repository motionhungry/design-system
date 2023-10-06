import { assignInlineVars } from '@vanilla-extract/dynamic';
import type { ScreenSize } from '@/style/types';
import { useMemo } from 'react';
import {
  className,
  templateColsSmall,
  templateColsMobile,
  templateColsTablet,
  templateColsDesktop,
  rowGapSmall,
  rowGapMobile,
  rowGapTablet,
  rowGapDesktop,
} from './Grid.styles.css';

type ScreenSizeStyle = Partial<Record<ScreenSize, string>>;

export type GridProps = {
  as?: React.ElementType;
  children: React.ReactNode;
  templateColumns?: ScreenSizeStyle;
  rowGap?: ScreenSizeStyle;
};

export const Grid = ({
  as: Component = 'div',
  children,
  templateColumns: fwdCols,
  rowGap: fwdGap,
}: GridProps): JSX.Element => {
  const assignScreenSizeVars = () => {
    const colSmall = fwdCols?.small ?? 'auto';
    const colMobile = fwdCols?.mobile ?? colSmall;
    const colTablet = fwdCols?.tablet ?? colMobile;
    const colDesktop = fwdCols?.desktop ?? colTablet;

    const gSmall = fwdGap?.small ?? '0';
    const gMobile = fwdGap?.mobile ?? rowGapSmall;
    const gTablet = fwdGap?.tablet ?? rowGapTablet;
    const gDesktop = fwdGap?.desktop ?? rowGapTablet;

    return assignInlineVars({
      [templateColsSmall]: colSmall,
      [templateColsMobile]: colMobile,
      [templateColsTablet]: colTablet,
      [templateColsDesktop]: colDesktop,
      [rowGapSmall]: gSmall,
      [rowGapMobile]: gMobile,
      [rowGapTablet]: gTablet,
      [rowGapDesktop]: gDesktop,
    });
  };

  const columns = useMemo(assignScreenSizeVars, [fwdCols, fwdGap]);

  return (
    <Component className={className} style={columns}>
      {children}
    </Component>
  );
};
