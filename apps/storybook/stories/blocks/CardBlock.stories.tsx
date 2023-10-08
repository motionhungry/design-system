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

export const Default: Story = {
  args: {
    cards: [
      {
        alignment: 'left',
        body: 'Some text goes here',
        imageComponent: <img src="https://picsum.photos/100" />,
        title: 'Title',
      },
    ],
  },
};
