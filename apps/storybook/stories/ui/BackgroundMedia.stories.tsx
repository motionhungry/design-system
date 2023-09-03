import { BackgroundMedia, Box, Text } from '@motionhungry/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BackgroundMedia> = {
  title: 'ui/BackgroundMedia',
  component: BackgroundMedia,
  decorators: [
    (Story) => (
      <Box
        p={4}
        style={{ position: 'relative', width: '800px', height: '600px' }}
      >
        <Story />
        <Text align="center" color="bw.0" variant="h1">
          Background Media
        </Text>
      </Box>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    imageSrc: {
      control: { type: 'text' },
    },
    videoSrc: {
      control: { type: 'text' },
    },
    videoZoom: {
      control: { type: 'number', min: 0, max: 400, step: 10 },
    },
  },
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Image: Story = {
  args: {
    imageSrc: '/images/angkorwat.webp',
    videoZoom: 0,
  },
};

export const Video: Story = {
  args: {
    imageSrc: '/images/angkorwat.webp',
    videoSrc: 'https://player.vimeo.com/video/319326066?background=1&muted=1',
    videoZoom: 0,
  },
};
