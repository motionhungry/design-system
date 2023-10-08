import { BioBlock } from '@veer-ui/blocks';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BioBlock> = {
  title: 'blocks/BioBlock',
  component: BioBlock,
  tags: ['autodocs'],
  argTypes: {
    bios: { control: 'object' },
  },
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    bios: [
      {
        title: 'Test Name',
        subtitle: 'CEO',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imageComponent: <img src="https://picsum.photos/282" />,
      },
      {
        title: 'Test Name',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imageComponent: <img src="https://picsum.photos/501/282" />,
      },
    ],
  },
};
