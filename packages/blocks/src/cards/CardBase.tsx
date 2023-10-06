import { FlexBox } from '@veer-ui/system';

type CardProps = {
  alignment?: 'center' | 'left';
  children: React.ReactNode;
};

export const CardBase = ({ alignment = 'center', children }: CardProps) => {
  const alignItems = alignment === 'left' ? 'flex-start' : 'center';
  return (
    <FlexBox flexDirection="column" alignItems={alignItems}>
      {children}
    </FlexBox>
  );
};
