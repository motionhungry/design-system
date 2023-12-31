import type { Meta, StoryObj } from '@storybook/react';
import { BackgroundMedia, Box, Text } from '@veer-ui/system';
import { defaultPalette } from '@veer-ui/themes';

const colors = Object.keys(defaultPalette);

const meta: Meta<typeof BackgroundMedia> = {
  title: 'ui/BackgroundMedia',
  component: BackgroundMedia,
  decorators: [
    (Story) => (
      <Box
        p="xl"
        style={{ position: 'relative', width: '800px', height: '600px' }}
      >
        <Story />
        <Text align="center" color="black" variant="h1">
          Background Media
        </Text>
      </Box>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    tintColor: {
      control: 'select',
      options: colors,
    },
    tintOpacity: {
      control: { type: 'number', min: 0, max: 100, step: 1 },
    },
    imageSrc: {
      control: { type: 'text' },
    },
    videoSrc: {
      control: { type: 'text' },
    },
  },
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Image: Story = {
  args: {
    imageSrc: '/images/waterfall.jpg',
    tintOpacity: 0,
  },
};

export const Video: Story = {
  args: {
    imageSrc: '/images/waterfall.jpg',
    videoSrc: '/videos/lightning.mp4',
    tintOpacity: 0,
  },
};

export const WithTint: Story = {
  args: {
    imageSrc: '/images/waterfall.jpg',
    videoSrc: '/videos/lightning.mp4',
    tintColor: 'primary.700',
    tintOpacity: 50,
  },
};
