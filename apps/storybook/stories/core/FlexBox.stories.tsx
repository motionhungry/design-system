import { FlexBox, space } from '@motionhungry/ui-core';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FlexBox> = {
  title: 'core/FlexBox',
  component: FlexBox,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    padding: {
      control: 'select',
      options: Object.keys(space),
    },
    flexDirection: {
      control: 'radio',
      options: ['row', 'column'],
    },
  },
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    children: 'Flex Box',
    padding: 0,
    flexDirection: 'row',
  },
};
