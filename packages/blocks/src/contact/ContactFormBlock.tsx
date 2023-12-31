'use client';

import { Block, Box, FlexBox, Text } from '@veer-ui/system';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  contactForm,
  contactFormCol,
  contactFormOfficeCol,
  colContainer,
  input,
  button,
} from './ContactFormBlock.styles.css';

export type ContactFormInput = {
  name: string;
  company: string;
  email: string;
  phone: string;
  comments: string;
};

export type ContactFormBlockProps = {
  heading?: string;
  placeholderName: string;
  placeholderCompany: string;
  placeholderEmail: string;
  placeholderPhone: string;
  placeholderComments: string;
  successHeading: string;
  successBody: string | null;
  formHeading: string;
  formBody: string;
  officeCompany: string;
  officeHeading: string;
  officeAddress: string;
  officePhone: string;
  officeEmail: string;
  buttonLabel: string | null;
  buttonLabelSubmitting: string | null;
  onSubmit: (data: ContactFormInput) => Promise<void>;
};

export const ContactFormBlock = ({
  heading,
  placeholderName = 'Name',
  placeholderCompany = 'Company Name',
  placeholderEmail = 'Email',
  placeholderPhone = 'Phone',
  placeholderComments = 'Comments',
  onSubmit: fwdOnSubmit,
  successHeading,
  successBody,
  formHeading,
  formBody,
  officeCompany,
  officeAddress,
  officePhone,
  officeEmail,
  officeHeading,
  buttonLabel,
  buttonLabelSubmitting,
}: ContactFormBlockProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { isSubmitting, isSubmitSuccessful, errors },
  } = useForm<ContactFormInput>();
  const onSubmit: SubmitHandler<ContactFormInput> = async (data) => {
    clearErrors();
    try {
      await fwdOnSubmit(data);
    } catch {
      setError('root.serverError', {
        type: 'serverError',
        message: 'An error occurred. Please try again.',
      });
    }
  };

  const submitButtonLabel = isSubmitting
    ? buttonLabelSubmitting ?? 'Submitting...'
    : buttonLabel ?? 'Submit';

  return (
    <section className={contactForm}>
      <Block heading={heading}>
        <FlexBox className={colContainer}>
          {isSubmitSuccessful ? (
            <Box className={contactFormCol}>
              <Text variant="h4">{successHeading}</Text>
              {!!successBody && (
                <Text variant="bodyXS" as="p">
                  {successBody}
                </Text>
              )}
            </Box>
          ) : (
            <Box className={contactFormCol}>
              <Box pb="md">
                <Text variant="h4">{formHeading}</Text>
              </Box>
              <Box pb="sm">
                <Text variant="bodyXS" as="p">
                  {formBody}
                </Text>
                {errors.root && !!errors.root.message && (
                  <Text variant="bodyXS" as="p">
                    {errors.root.message}
                  </Text>
                )}
              </Box>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box pb="sm">
                  <input
                    className={input}
                    placeholder={`${placeholderName}*`}
                    {...register('name', { required: true, maxLength: 50 })}
                  />
                </Box>
                <Box pb="sm">
                  <input
                    className={input}
                    placeholder={`${placeholderCompany}*`}
                    {...register('company', {
                      required: true,
                      maxLength: 50,
                    })}
                  />
                </Box>
                <Box pb="sm">
                  <input
                    className={input}
                    placeholder={`${placeholderEmail}*`}
                    {...register('email', {
                      required: true,
                      maxLength: 100,
                      pattern:
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    })}
                  />
                </Box>
                <Box pb="sm">
                  <input
                    className={input}
                    placeholder={placeholderPhone}
                    {...register('phone', { required: true, maxLength: 15 })}
                  />
                </Box>
                <Box pb="sm">
                  <textarea
                    className={input}
                    placeholder={`${placeholderComments}*`}
                    rows={5}
                    {...register('comments', {
                      required: true,
                      maxLength: 2000,
                    })}
                  />
                </Box>
                <Box pb="sm">
                  <input
                    className={button}
                    type="submit"
                    disabled={isSubmitting}
                    value={submitButtonLabel}
                  />
                </Box>
              </form>
            </Box>
          )}
          <Box className={contactFormOfficeCol}>
            <Box pb="md">
              <Text variant="h4">{officeHeading}</Text>
            </Box>
            <Text variant="h5">{officeCompany}</Text>
            <Box pb="md">
              <Text variant="bodyXS">{officeAddress}</Text>
            </Box>
            <Box>
              <Text variant="bodyXS">{officePhone}</Text>
            </Box>
            <Box>
              <Text variant="bodyXS">{officeEmail}</Text>
            </Box>
          </Box>
        </FlexBox>
      </Block>
    </section>
  );
};
