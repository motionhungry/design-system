import { Box, Text } from '@veer-ui/system';
import { useMemo } from 'react';
import { card, statCardValue } from './Card.styles.css';

export type StatCardProps = {
  title: string;
  body: string;
  cardLayout: keyof typeof card;
  value: number;
  prefix?: string;
  suffix?: string;
};

export const StatCard = ({
  body,
  cardLayout,
  title,
  value,
  prefix,
  suffix,
}: StatCardProps) => {
  const valueComponent = useMemo<React.ReactNode>(() => {
    const formatted = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    const components = [
      <Text as="span" variant="h1">
        {`${prefix ?? ''}${formatted}${suffix && suffix !== '%' ? suffix : ''}`}
      </Text>,
    ];
    if (suffix === '%') {
      components.push(
        <Text as="span" variant="h4">
          {suffix}
        </Text>,
      );
    }
    return <Box className={statCardValue}>{components}</Box>;
  }, [value, prefix, suffix]);

  return (
    <Box className={card[cardLayout]}>
      <Text variant="h5">{title}</Text>
      {valueComponent}
      <Box>
        <Text as="p" variant="bodyXS">
          {body}
        </Text>
      </Box>
    </Box>
  );
};
