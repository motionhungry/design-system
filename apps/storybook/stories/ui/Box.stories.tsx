import { Box } from '@veer-ui/system';
import { defaultPalette, defaultGlobalTokens } from '@veer-ui/themes';

import type { Meta, StoryObj } from '@storybook/react';

const colors = Object.keys(defaultPalette);

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
      options: Object.keys(defaultGlobalTokens.space),
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
    padding: undefined,
  },
};
