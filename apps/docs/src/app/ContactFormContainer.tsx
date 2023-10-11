'use client';

import {
  ContactFormBlock,
  ContactFormBlockProps,
  ContactFormInput,
} from '@veer-ui/blocks';

type ContactFormContainerProps = Omit<ContactFormBlockProps, 'onSubmit'>;

export const ContactFormContainer = (props: ContactFormContainerProps) => {
  return (
    <ContactFormBlock
      {...props}
      onSubmit={async (data: ContactFormInput) => {
        return new Promise((res) => setTimeout(() => res(), 2000));
      }}
    />
  );
};
