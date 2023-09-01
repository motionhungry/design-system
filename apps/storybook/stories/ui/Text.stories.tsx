import { Text, palette, typography } from '@motionhungry/ui';
import type { Meta, StoryObj } from '@storybook/react';

const colors = Object.keys(palette);

const meta: Meta<typeof Text> = {
  title: 'ui/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    as: {
      control: 'select',
      options: ['span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    variant: {
      control: 'select',
      options: Object.keys(typography.fontSize),
    },
    fontWeight: {
      control: 'select',
      options: ['bold', 'semi-bold', 'medium', 'normal', 'light'],
    },
    textAlign: {
      control: 'select',
      options: ['center', 'left', 'right'],
    },
    backgroundColor: {
      control: 'select',
      options: colors,
    },
    color: {
      control: 'select',
      options: colors,
    },
  },
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Heading1: Story = {
  args: {
    children: 'Text',
    variant: 'h1',
  },
};

export const Heading2: Story = {
  args: {
    children: 'Text',
    variant: 'h2',
  },
};

export const Heading3: Story = {
  args: {
    children: 'Text',
    variant: 'h3',
  },
};

export const Heading4: Story = {
  args: {
    children: 'Text',
    variant: 'h4',
  },
};

export const BodyLarge: Story = {
  args: {
    children: 'Text',
    variant: 'body-large',
  },
};

export const BodyMedium: Story = {
  args: {
    children: 'Text',
    variant: 'body-medium',
  },
};

export const BodySmall: Story = {
  args: {
    children: 'Text',
    variant: 'body-small',
  },
};
