import { ContactFormBlock } from '@veer-ui/blocks';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ContactFormBlock> = {
  title: 'blocks/ContactFormBlock',
  component: ContactFormBlock,
  tags: ['autodocs'],
  argTypes: {},
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    heading: 'Contact Us',
    placeholderName: 'Name',
    placeholderComments: 'Comments',
    placeholderEmail: 'Email',
    placeholderPhone: 'Phone Number',
    placeholderCompany: 'Company 2',
    successHeading: 'Thank you',
    successBody: 'We have received your message.',
    formHeading: 'Send Us a Message',
    formBody:
      'Send us a message to learn how we can help you with your next project.',
    officeHeading: 'Our Office',
    officeCompany: 'Company Name',
    officeAddress: '1234 Fifth St.',
    officeEmail: 'social@imajineer.io',
    officePhone: '+855 55 123 456',
    buttonLabel: 'Send',
    buttonLabelSubmitting: 'Sending...',
  },
};
