import { Grid } from '@veer-ui/system';
import { defaultTokens } from '@veer-ui/system/tokens';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Grid> = {
  title: 'ui/Grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'text' },
    },
  },
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    children: 'Grid',
  },
};
