import { Image } from '@motionhungry/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Image> = {
  title: 'ui/Image',
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: { type: 'text' },
    },
    alt: {
      control: { type: 'text' },
    },
    width: {
      control: { type: 'text' },
    },
    height: {
      control: { type: 'text' },
    },
  },
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1493612276216-ee3925520721',
    alt: 'Image',
    width: 400,
    height: 500,
  },
};
