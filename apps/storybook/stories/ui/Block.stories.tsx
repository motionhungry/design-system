import { Block, palette } from '@motionhungry/ui';
import type { Meta, StoryObj } from '@storybook/react';

const colors = Object.keys(palette);

const meta: Meta<typeof Block> = {
  title: 'ui/Block',
  component: Block,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    fullHeight: {},
    backgroundColor: {
      control: 'select',
      options: colors,
    },
    color: {
      control: 'select',
      options: colors,
    },
  },
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    children: 'Block',
    fullHeight: false,
  },
};

export const FullHeight: Story = {
  args: {
    children: 'Block',
    fullHeight: true,
  },
};
