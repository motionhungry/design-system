import { LinkButton } from '@motionhungry/ui';

export default {
  title: 'ui/LinkButton',
  component: LinkButton,
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
    elevation: {
      options: ['none', 'low', 'mid', 'high'],
      control: { type: 'radio' },
    },
    disabled: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
};

const defaultArgs = {
  href: 'https://motionhungry.com',
  label: 'Click Me',
  variant: 'primary',
  size: 'medium',
  elevation: 'none',
  disabled: false,
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
