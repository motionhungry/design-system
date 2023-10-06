import { FeatureCard } from '@veer-ui/blocks';
import { Box } from '@veer-ui/system';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FeatureCard> = {
  title: 'blocks/FeatureCard',
  component: FeatureCard,
  decorators: [
    (Story) => (
      <Box style={{ maxWidth: '200px' }}>
        <Story />
      </Box>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    alignment: {
      control: 'select',
      options: ['left', 'center'],
    },
    title: { control: 'text' },
  },
};

type Story = StoryObj<typeof meta>;

export default meta;

/*export const Default: Story = {
  args: {
    imageComponent: (
      <Box
        backgroundColor="neutral.400"
        style={{ height: '100px', width: '100px' }}
      />
    ),
    title: 'Feature Card',
    body: 'Body text goes here.',
    alignment: 'center',
  },
};*/
