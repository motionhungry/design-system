import { Container } from '@veer-ui/system';
import type { Meta, StoryObj } from '@storybook/react';
import { outer, inner, content } from './style/Container.css';

const meta: Meta<typeof Container> = {
  title: 'ui/Container',
  component: Container,
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
    alignItems: {
      options: ['stretch', 'center', 'flex-end', 'flex-start', 'baseline'],
      control: {
        type: 'select',
      },
    },
  },
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    children: (
      <div className={inner}>
        <div className={content}>
          <span>This is a container.</span>
        </div>
      </div>
    ),
  },
};
