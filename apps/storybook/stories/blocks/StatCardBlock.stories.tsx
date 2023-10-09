import { StatCardBlock } from '@veer-ui/blocks';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof StatCardBlock> = {
  title: 'blocks/StatCardBlock',
  component: StatCardBlock,
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
        body: 'Some text goes here',
        value: 100,
        title: 'Title',
      },
    ],
  },
};

export const WithPrefix: Story = {
  args: {
    cards: [
      {
        body: 'Some text goes here',
        value: 100,
        title: 'Title',
        prefix: '$',
      },
    ],
  },
};

export const WithSuffix: Story = {
  args: {
    cards: [
      {
        body: 'Some text goes here',
        value: 100,
        title: 'Title',
        suffix: 'M',
      },
    ],
  },
};

export const WithPercentSuffix: Story = {
  args: {
    cards: [
      {
        body: 'Some text goes here',
        value: 100,
        title: 'Title',
        suffix: '%',
      },
    ],
  },
};
