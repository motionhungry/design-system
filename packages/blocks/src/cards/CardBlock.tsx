import { useMemo } from 'react';
import { Block, FlexBox } from '@veer-ui/system';
import { FeatureCard } from './FeatureCard';
import type { FeatureCardProps } from './FeatureCard';
import { cardBlock, container } from './CardBlock.styles.css';

type CardBlockProps = {
  cards: Omit<FeatureCardProps, 'cardLayout'>[];
  heading?: string;
};

export const CardBlock = ({ cards, heading }: CardBlockProps): JSX.Element => {
  const cardLayout = useMemo<'small' | 'medium' | 'large'>(() => {
    if (cards.length === 2) return 'large';
    if (cards.length % 3 === 0 || cards.length % 5 === 0) return 'medium';
    return 'small';
  }, [cards]);

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
