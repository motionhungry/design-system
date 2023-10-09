import { useMemo } from 'react';
import { Block, FlexBox } from '@veer-ui/system';
import { FeatureCard } from './FeatureCard';
import type { FeatureCardProps } from './FeatureCard';
import type { StatCardProps } from './StatCard';
import { StatCard } from './StatCard';
import { cardBlock, container } from './CardBlock.styles.css';

/* TODO: Refactor this to use generic types */

type FeatureCardBlockProps = {
  cards: Omit<FeatureCardProps, 'cardLayout'>[];
  heading?: string;
};

const getCardLayout = (cards: unknown[]): 'small' | 'medium' | 'large' => {
  if (cards.length === 2) return 'large';
  if (cards.length % 3 === 0 || cards.length % 5 === 0) return 'medium';
  return 'small';
};

export const FeatureCardBlock = ({
  cards,
  heading,
}: FeatureCardBlockProps): JSX.Element => {
  const cardLayout = useMemo<'small' | 'medium' | 'large'>(
    () => getCardLayout(cards),
    [cards],
  );

  return (
    <section className={cardBlock}>
      <Block heading={heading}>
        <FlexBox className={container}>
          {cards.map((card) => (
            <FeatureCard
              body={card.body}
              title={card.title}
              imageComponent={card.imageComponent}
              cardLayout={cardLayout}
            />
          ))}
        </FlexBox>
      </Block>
    </section>
  );
};

type StatCardBlockProps = {
  cards: Omit<StatCardProps, 'cardLayout'>[];
  heading?: string;
};

export const StatCardBlock = ({
  cards,
  heading,
}: StatCardBlockProps): JSX.Element => {
  const cardLayout = useMemo<'small' | 'medium' | 'large'>(
    () => getCardLayout(cards),
    [cards],
  );

  return (
    <section className={cardBlock}>
      <Block heading={heading}>
        <FlexBox className={container}>
          {cards.map((card) => (
            <StatCard
              body={card.body}
              title={card.title}
              value={card.value}
              prefix={card.prefix}
              suffix={card.suffix}
              cardLayout={cardLayout}
            />
          ))}
        </FlexBox>
      </Block>
    </section>
  );
};
