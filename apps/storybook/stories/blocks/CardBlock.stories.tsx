import { CardBlock } from '@veer-ui/blocks';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CardBlock> = {
  title: 'blocks/CardBlock',
  component: CardBlock,
  tags: ['autodocs'],
  argTypes: {
    cards: { control: false },
  },
};

type Story = StoryObj<typeof meta>;

export default meta;

const getCards = (count: number) =>
  Array(count)
    .fill(null)
    .map((item, index) => ({
      alignment: 'left',
      body: 'Some text goes here',
      imageComponent: <img src="https://picsum.photos/100" />,
      title: 'Title',
    }));

export const OneCard: Story = {
  args: {
    cards: getCards(1),
  },
};

export const TwoCards: Story = {
  args: {
    cards: getCards(2),
  },
};

export const ThreeCards: Story = {
  args: {
    cards: getCards(3),
  },
};

export const FourCards: Story = {
  args: {
    cards: getCards(4),
  },
};

export const FiveCards: Story = {
  args: {
    cards: getCards(5),
  },
};

export const SixCards: Story = {
  args: {
    cards: getCards(6),
  },
};
