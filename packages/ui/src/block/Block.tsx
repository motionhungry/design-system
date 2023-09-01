import { assignInlineVars } from '@vanilla-extract/dynamic';
import { Box } from '@/box';
import { Container } from '@/container';
import { Sprinkles } from '@/box/Box.sprinkles.css';
import { className, minHeight } from './Block.styles.css';

type BlockProps = {
  backgroundImage?: string;
  children: React.ReactNode;
  fullHeight?: boolean;
} & Pick<Sprinkles, 'backgroundColor' | 'bgColor' | 'color'>;

const Block = ({
  children,
  fullHeight = false,
  ...props
}: BlockProps): JSX.Element => {
  return (
    <Box
      className={className}
      style={assignInlineVars({
        [minHeight]: fullHeight ? '100vh' : 'auto',
      })}
      {...props}
    >
      <Container>{children}</Container>
    </Box>
  );
};

Block.displayName = 'Block';

export { Block };
