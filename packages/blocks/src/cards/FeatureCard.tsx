import { Box, Text } from '@veer-ui/system';
import { featureCard, featureCardPhoto } from './FeatureCard.styles.css';

export type FeatureCardProps = {
  imageComponent: React.ReactNode;
  title: string;
  body: string;
  cardLayout: keyof typeof featureCard;
};

export const FeatureCard = ({
  body,
  cardLayout,
  imageComponent,
  title,
}: FeatureCardProps) => {
  return (
    <Box className={featureCard[cardLayout]}>
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
