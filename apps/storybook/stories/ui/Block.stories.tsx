import { Block } from '@veer-ui/system';
import { defaultPalette } from '@veer-ui/themes';
import type { Meta, StoryObj } from '@storybook/react';
import { content, outer } from './style/Block.css';

const colors = Object.keys(defaultPalette);

const meta: Meta<typeof Block> = {
  title: 'ui/Block',
  component: Block,
  decorators: [
    (Story) => (
      <div className={outer}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
    },
    backgroundColor: {
      control: 'select',
      options: colors,
    },
    fullHeight: {},
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
  },
};

type Story = StoryObj<typeof meta>;

export default meta;

const Content = () => (
  <div className={content}>
    <span>Some content</span>
  </div>
);

export const Default: Story = {
  args: {
    children: <Content />,
    fullHeight: false,
    backgroundTintOpacity: 0,
  },
};

export const FullHeight: Story = {
  args: {
    children: <Content />,
    fullHeight: true,
    backgroundTintOpacity: 0,
  },
};

export const WithHeading: Story = {
  args: {
    children: <Content />,
    heading: 'Block',
    fullHeight: false,
    backgroundTintOpacity: 0,
  },
};

export const WithBackgroundMedia: Story = {
  args: {
    children: <Content />,
    fullHeight: true,
    backgroundImageSrc: '/images/waterfall.jpg',
    backgroundVideoSrc: '/videos/lightning.mp4',
    backgroundTintOpacity: 0,
  },
};
