import { Button } from '@veer-ui/system';

export default {
  title: 'ui/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary'],
      control: { type: 'radio' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    onClick: { action: 'clicked' },
    elevation: {
      options: ['none', 'low', 'mid', 'high'],
      control: { type: 'radio' },
    },
  },
};

const defaultArgs = {
  label: 'Click Me',
  variant: 'primary',
};

export const Small = {
  args: {
    ...defaultArgs,
    size: 'small',
  },
};

export const Medium = {
  args: {
    ...defaultArgs,
    size: 'medium',
  },
};

export const Large = {
  args: {
    ...defaultArgs,
    size: 'large',
  },
};

export const WithElevation = {
  args: {
    ...defaultArgs,
    elevation: 'mid',
  },
};

export const Disabled = {
  args: {
    ...defaultArgs,
    disabled: true,
  },
};
