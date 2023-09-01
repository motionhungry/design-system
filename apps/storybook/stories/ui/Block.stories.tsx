import { Block } from '@motionhungry/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Block> = {
  title: 'ui/Block',
  component: Block,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    fullHeight: {},
    backgroundImage: {
      control: { type: 'text' },
    },
  },
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    backgroundImage: undefined,
    children: 'Block',
    fullHeight: false,
  },
};

export const FullHeight: Story = {
  args: {
    backgroundImage: undefined,
    children: 'Block',
    fullHeight: true,
  },
};

export const BackgroundImage: Story = {
  args: {
    backgroundImage:
      'https://images.unsplash.com/photo-1508138221679-760a23a2285b',
    children: 'Block',
    fullHeight: true,
  },
};
