import { Box } from '@motionhungry/ui';
import { defaultTokens } from '@motionhungry/ui/tokens';
import type { Meta, StoryObj } from '@storybook/react';

const colors = Object.keys(defaultTokens.palette);

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
      options: Object.keys(defaultTokens.space),
    },
    backgroundColor: {
      control: 'select',
      options: colors,
    },
    color: {
      control: 'select',
      options: colors,
    },
    display: {
      control: 'select',
      options: ['block', 'inline-block'],
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
