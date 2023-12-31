import { Text } from '@veer-ui/system';
import { defaultPalette, defaultGlobalTokens } from '@veer-ui/themes';
import type { Meta, StoryObj } from '@storybook/react';

const colors = Object.keys(defaultPalette);

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
      options: Object.keys(defaultGlobalTokens.typography.fontSize),
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

export const Heading5: Story = {
  args: {
    children: 'Text',
    variant: 'h5',
  },
};

export const BodyXL: Story = {
  args: {
    children: 'Text',
    variant: 'bodyXL',
  },
};

export const BodyLarge: Story = {
  args: {
    children: 'Text',
    variant: 'bodyLG',
  },
};

export const BodyMedium: Story = {
  args: {
    children: 'Text',
    variant: 'bodyMD',
  },
};

export const BodySmall: Story = {
  args: {
    children: 'Text',
    variant: 'bodySM',
  },
};

export const BodyXS: Story = {
  args: {
    children: 'Text',
    variant: 'bodyXS',
  },
};
