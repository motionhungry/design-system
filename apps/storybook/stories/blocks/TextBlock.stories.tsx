import { TextBlock } from '@veer-ui/blocks';
import { Box } from '@veer-ui/system';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TextBlock> = {
  title: 'blocks/TextBlock',
  component: TextBlock,
  tags: ['autodocs'],
  argTypes: {
    heading: { control: 'text' },
    body: { control: 'text' },
  },
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    heading: 'Text Block',
  },
};
