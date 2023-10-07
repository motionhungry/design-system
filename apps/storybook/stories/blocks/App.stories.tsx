import { App } from '@veer-ui/blocks';
import { Box, Block, Text } from '@veer-ui/system';
import { Calendar, Lightning } from '@veer-ui/icons';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof App> = {
  title: 'blocks/App',
  component: App,
  decorators: [
    (Story) => (
      <Box>
        <Block justifyContent="center" backgroundColor="black" fullHeight>
          <Text textAlign="center" variant="h1" color="white">
            Start
          </Text>
        </Block>
        <Story />
        <Block justifyContent="center" backgroundColor="black" fullHeight>
          <Text textAlign="center" variant="h1" color="white">
            End
          </Text>
        </Block>
      </Box>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    screens: { control: 'object' },
  },
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    screens: [
      {
        imageSrc: '/images/waterfall.jpg',
        icon: <Calendar color="black" />,
      },
      {
        videoSrc: '/videos/lightning.mp4',
        icon: <Lightning color="black" />,
      },
      {
        imageSrc: '/images/waterfall.jpg',
        icon: <Calendar color="black" />,
      },
      {
        videoSrc: '/videos/lightning.mp4',
        icon: <Lightning color="black" />,
      },
    ],
  },
};
