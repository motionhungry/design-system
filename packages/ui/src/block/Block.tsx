import { assignInlineVars } from '@vanilla-extract/dynamic';
import { Box } from '@/box';
import { Container } from '@/container';

import { className, minHeight } from './Block.styles.css';

type BlockProps = {
  backgroundImage?: string;
  children: React.ReactNode;
  fullHeight?: boolean;
};

const Block = ({ children, fullHeight = false }: BlockProps): JSX.Element => {
  return (
    <Box
      className={className}
      style={assignInlineVars({
        [minHeight]: fullHeight ? '100vh' : 'auto',
      })}
    >
      <Container>{children}</Container>
    </Box>
  );
};

Block.displayName = 'Block';

export { Block };
