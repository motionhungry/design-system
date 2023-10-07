import { Box } from '@/box';
import { FlexBox } from '@/flexbox';
import type { Sprinkles as FlexBoxSprinkles } from '@/flexbox/FlexBox.sprinkles.css';
import { container } from './Container.styles.css';

export type ContainerProps = {
  alignItems?: FlexBoxSprinkles['alignItems'];
  children: React.ReactNode;
  justifyContent?: FlexBoxSprinkles['justifyContent'];
};

const Container = ({
  alignItems,
  children,
  justifyContent,
}: ContainerProps): JSX.Element => {
  if (alignItems || justifyContent) {
    return (
      <FlexBox
        alignItems={alignItems}
        flexDirection="column"
        justifyContent={justifyContent}
        className={container}
      >
        {children}
      </FlexBox>
    );
  }
  return <Box className={container}>{children}</Box>;
};

Container.displayName = 'Container';

export { Container };
