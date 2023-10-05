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
} from './Grid.styles.css';

type TemplateColumns = Partial<Record<ScreenSize, string>>;

export type GridProps = {
  as?: React.ElementType;
  children: React.ReactNode;
  templateColumns?: TemplateColumns;
};

export const Grid = ({
  as: Component = 'div',
  children,
  templateColumns: fwdCols,
}: GridProps): JSX.Element => {
  const assignTemplateColumns = () => {
    const xsmall = fwdCols?.xsmall ?? 'auto';
    const small = fwdCols?.small ?? xsmall;
    const medium = fwdCols?.medium ?? small;
    const large = fwdCols?.large ?? medium;
    const xlarge = fwdCols?.xlarge ?? large;
    const xxlarge = fwdCols?.xxlarge ?? xlarge;

    return assignInlineVars({
      [templateColsXSmall]: xsmall,
      [templateColsSmall]: small,
      [templateColsMedium]: medium,
      [templateColsLarge]: large,
      [templateColsXLarge]: xlarge,
      [templateColsXXLarge]: xxlarge,
    });
  };

  const columns = useMemo(assignTemplateColumns, [fwdCols]);

  return (
    <Component className={className} style={columns}>
      {children}
    </Component>
  );
};
