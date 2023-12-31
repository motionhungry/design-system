import { FlexBox } from '@veer-ui/system';
import { defaultPalette, defaultGlobalTokens } from '@veer-ui/themes';
import type { Meta, StoryObj } from '@storybook/react';

const colors = Object.keys(defaultPalette);

const meta: Meta<typeof FlexBox> = {
  title: 'ui/FlexBox',
  component: FlexBox,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    padding: {
      control: 'select',
      options: Object.keys(defaultGlobalTokens.space),
    },
    flexDirection: {
      control: 'radio',
      options: ['row', 'column'],
    },
    backgroundColor: {
      control: 'select',
      options: colors,
    },
    color: {
      control: 'select',
      options: colors,
    },
    display: {
      control: 'select',
      options: ['flex', 'inline-flex'],
    },
  },
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    children: 'Flex Box',
    padding: undefined,
    flexDirection: 'row',
  },
};
