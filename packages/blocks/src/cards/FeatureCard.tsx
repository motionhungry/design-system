import { Box, Text } from '@veer-ui/system';
import { featureCard, featureCardPhoto } from './FeatureCard.styles.css';

export type FeatureCardProps = {
  imageComponent: React.ReactNode;
  title: string;
  body: string;
};

export const FeatureCard = ({
  body,
  imageComponent,
  title,
}: FeatureCardProps) => {
  return (
    <Box className={featureCard}>
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
