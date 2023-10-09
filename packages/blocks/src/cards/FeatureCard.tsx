import { Box, Text } from '@veer-ui/system';
import { card, featureCardPhoto } from './Card.styles.css';

export type FeatureCardProps = {
  imageComponent: React.ReactNode;
  title: string;
  body: string;
  cardLayout: keyof typeof card;
};

export const FeatureCard = ({
  body,
  cardLayout,
  imageComponent,
  title,
}: FeatureCardProps) => {
  return (
    <Box className={card[cardLayout]}>
      <Box className={featureCardPhoto}>{imageComponent}</Box>
      <Text variant="h5">{title}</Text>
      <Box>
        <Text as="p" variant="bodyXS">
          {body}
        </Text>
      </Box>
    </Box>
  );
};
