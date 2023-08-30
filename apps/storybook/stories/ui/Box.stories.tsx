import { Box } from '@motionhungry/ui';

export default {
  title: 'ui/Box',
  component: Box,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    padding: {
      control: 'select',
      options: [0, 0.5, 1, 1.5, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
  },
};

export const Default = {
  args: {
    children: 'Box',
    padding: 10,
  },
};
