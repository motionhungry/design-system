import { Box, space } from '@motionhungry/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Box> = {
  title: 'ui/Box',
  component: Box,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    padding: {
      control: 'select',
      options: Object.keys(space),
    },
  },
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    children: 'Box',
    padding: 0,
  },
};
