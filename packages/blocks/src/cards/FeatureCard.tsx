import { Text } from '@veer-ui/system';
import { CardBase } from './CardBase';

type FeatureCardProps = {
  alignment?: 'center' | 'left';
  imageComponent: React.ReactNode;
  title: string;
  body: string;
};

export const FeatureCard = ({
  alignment,
  body,
  imageComponent,
  title,
}: FeatureCardProps) => {
  return (
    <CardBase alignment={alignment}>
      {imageComponent}
      <Text variant="h3">{title}</Text>
      <Text as="p">{body}</Text>
    </CardBase>
  );
};
