import { Calendar } from '@veer-ui/icons';

export default {
  title: 'icons/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Default = {
  args: {
    color: '#000',
    size: '24px',
  },
};
