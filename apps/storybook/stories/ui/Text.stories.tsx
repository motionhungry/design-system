import { Text, typography } from '@motionhungry/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Text> = {
  title: 'core/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    variant: {
      control: 'select',
      options: Object.keys(typography.fontSize),
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
