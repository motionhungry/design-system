import { Block } from '@veer-ui/system';
import { defaultPalette } from '@veer-ui/themes';
import type { Meta, StoryObj } from '@storybook/react';

const colors = Object.keys(defaultPalette);

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
    justifyContent: {
      control: 'select',
      options: [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
        'stretch',
      ],
    },
    backgroundImageSrc: { control: { type: 'text' } },
    backgroundTintColor: { control: 'select', options: colors },
    backgroundTintOpacity: {
      control: { type: 'number', min: 0, max: 100, step: 1 },
    },
    backgroundVideoSrc: { control: { type: 'text' } },
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
    backgroundTintOpacity: 0,
  },
};

export const FullHeight: Story = {
  args: {
    children: 'Block',
    fullHeight: true,
    backgroundTintOpacity: 0,
  },
};

export const WithBackgroundMedia: Story = {
  args: {
    children: 'Block',
    fullHeight: true,
    backgroundImageSrc: '/images/waterfall.jpg',
    backgroundVideoSrc: '/videos/lightning.mp4',
    backgroundTintOpacity: 0,
  },
};
