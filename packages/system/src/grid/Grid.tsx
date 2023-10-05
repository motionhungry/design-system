import { assignInlineVars } from '@vanilla-extract/dynamic';
import type { ScreenSize } from '@/style/types';
import { useMemo } from 'react';
import {
  className,
  templateColsXSmall,
  templateColsSmall,
  templateColsMedium,
  templateColsLarge,
  templateColsXLarge,
  templateColsXXLarge,
  rowGapXSmall,
  rowGapSmall,
  rowGapMedium,
  rowGapLarge,
  rowGapXLarge,
  rowGapXXLarge,
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
    const colXSmall = fwdCols?.xsmall ?? 'auto';
    const colSmall = fwdCols?.small ?? colXSmall;
    const colMedium = fwdCols?.medium ?? colSmall;
    const colLarge = fwdCols?.large ?? colMedium;
    const colXLarge = fwdCols?.xlarge ?? colLarge;
    const colXXLarge = fwdCols?.xxlarge ?? colXLarge;

    const gXSmall = fwdGap?.xsmall ?? '0';
    const gSmall = fwdGap?.small ?? rowGapXSmall;
    const gMedium = fwdGap?.medium ?? rowGapSmall;
    const gLarge = fwdGap?.large ?? rowGapMedium;
    const gXLarge = fwdGap?.xlarge ?? rowGapLarge;
    const gXXLarge = fwdGap?.xxlarge ?? rowGapXLarge;

    return assignInlineVars({
      [templateColsXSmall]: colXSmall,
      [templateColsSmall]: colSmall,
      [templateColsMedium]: colMedium,
      [templateColsLarge]: colLarge,
      [templateColsXLarge]: colXLarge,
      [templateColsXXLarge]: colXXLarge,
      [rowGapXSmall]: gXSmall,
      [rowGapSmall]: gSmall,
      [rowGapMedium]: gMedium,
      [rowGapLarge]: gLarge,
      [rowGapXLarge]: gXLarge,
      [rowGapXXLarge]: gXXLarge,
    });
  };

  const columns = useMemo(assignScreenSizeVars, [fwdCols, fwdGap]);

  return (
    <Component className={className} style={columns}>
      {children}
    </Component>
  );
};
