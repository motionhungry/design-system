import { Block, Box, FlexBox } from '@veer-ui/system';
import { FeatureCard } from './FeatureCard';
import type { FeatureCardProps } from './FeatureCard';
import { cardBlock, container } from './CardBlock.styles.css';

type CardBlockProps = {
  cards: FeatureCardProps[];
  heading?: string;
};

export const CardBlock = ({ cards, heading }: CardBlockProps): JSX.Element => (
  <section className={cardBlock}>
    <Block heading={heading}>
      <FlexBox className={container}>
        {cards.map((card) => (
          <FeatureCard
            body={card.body}
            title={card.title}
            imageComponent={card.imageComponent}
          />
        ))}
      </FlexBox>
    </Block>
  </section>
);
