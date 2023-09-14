import { Image } from '@veer/system';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Image> = {
  title: 'ui/Image',
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    imageSrc: {
      control: { type: 'text' },
    },
  },
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    src: '/images/lightbulb.jpeg',
    alt: 'Image',
    width: 400,
    height: 500,
  },
};
