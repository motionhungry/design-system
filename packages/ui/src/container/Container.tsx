import { Box } from '@motionhungry/ui-core';
import { className } from './Container.styles.css';

export type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps): JSX.Element => (
  <Box className={className}>{children}</Box>
);

Container.displayName = 'Container';

export { Container };
