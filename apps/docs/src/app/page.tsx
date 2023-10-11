import { Box, FlexBox, Grid, Block, Text } from '@veer-ui/system';
import {
  BioBlock,
  FeatureCardBlock,
  StatCardBlock,
  TextBlock,
} from '@veer-ui/blocks';
import { darkTheme, lightTheme } from '@veer-ui/themes/imajineer.css';
import { ContactFormContainer } from './ContactFormContainer';

const className = true ? darkTheme : lightTheme;

export default function Page(): JSX.Element {
  return (
    <Box>
      <Box className={className}>
        <ContactFormContainer
          heading="Contact Us"
          placeholderName="Name 1"
          placeholderComments="Comments 5"
          placeholderEmail="Email 3"
          placeholderPhone="Phone Number 4"
          placeholderCompany="Company 2"
          successHeading="Thank you"
          successBody="We have received your message."
          formHeading="Send Us a Message"
          formBody="Send us a message to learn how we can help you with your next project."
          officeHeading="Our Office"
          officeCompany="Company Name"
          officeAddress="1234 Fifth St."
          officeEmail="social@imajineer.io"
          officePhone="+855 55 123 456"
          buttonLabel="Send"
          buttonLabelSubmitting="Sending..."
        />
      </Box>
      <Box className={className}>
        <StatCardBlock
          heading="Stat Cards"
          cards={[
            {
              body: 'Some text goes here',
              value: 1000,
              title: 'Title',
            },
            {
              body: 'Some text goes here',
              value: 1.5,
              prefix: '$',
              suffix: 'M',
              title: 'Title',
            },
            {
              body: 'Some text goes here',
              value: 20,
              suffix: '%',
              title: 'Title',
            },
          ]}
        />
      </Box>
      <Box className={className}>
        <FeatureCardBlock
          heading="Feature Cards"
          cards={[
            {
              body: 'Some text goes here',
              imageComponent: <img src="https://picsum.photos/100" />,
              title: 'Title',
            },
            {
              body: 'Some text goes here',
              imageComponent: <img src="https://picsum.photos/100" />,
              title: 'Title',
            },
            {
              body: 'Some text goes here',
              imageComponent: <img src="https://picsum.photos/100" />,
              title: 'Title',
            },
            {
              body: 'Some text goes here',
              imageComponent: <img src="https://picsum.photos/100" />,
              title: 'Title',
            },
            /*{
              body: 'Some text goes here',
              imageComponent: <img src="https://picsum.photos/100" />,
              title: 'Title',
            },
            {
              body: 'Some text goes here',
              imageComponent: <img src="https://picsum.photos/100" />,
              title: 'Title',
            },
            {
              body: 'Some text goes here',
              imageComponent: <img src="https://picsum.photos/100" />,
              title: 'Title',
            },*/
          ]}
        />
      </Box>
      <Box className={className}>
        <Block
          backgroundVideoSrc="http://localhost:6006/videos/lightning.mp4"
          backgroundImageSrc="http://localhost:6006/images/waterfall.jpg"
          justifyContent="center"
          fullHeight
        >
          <FlexBox alignItems="center" justifyContent="center">
            <Box>
              <Text variant="h1" color="primary.700">
                Hero
              </Text>
            </Box>
          </FlexBox>
        </Block>
      </Box>
      <Box className={className}>
        <TextBlock
          heading="Text Block"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          variant="bodyLG"
        />
      </Box>
      <Box className={className}>
        <BioBlock
          bios={[
            {
              title: 'Test Name',
              subtitle: 'CEO',
              body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              imageComponent: (
                <img
                  src="https://picsum.photos/501/668"
                  width="501"
                  height="668"
                />
              ),
            },
            {
              title: 'Test Name',
              body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              imageComponent: (
                <img
                  src="https://picsum.photos/501/281"
                  width="501"
                  height="282"
                />
              ),
            },
          ]}
        />
      </Box>
      <Box className={className}>
        <Block heading="Grid">
          <Grid
            templateColumns={{
              mobile: 'repeat(2, 1fr)',
              tablet: 'repeat(3, 1fr)',
              desktop: 'repeat(6, 1fr)',
            }}
            rowGap={{
              desktop: '32px',
              tablet: '16px',
              mobile: '8px',
              small: '4px',
            }}
          >
            <Box backgroundColor="secondary.50">1</Box>
            <Box backgroundColor="secondary.100">2</Box>
            <Box backgroundColor="secondary.200">3</Box>
            <Box backgroundColor="secondary.300">4</Box>
            <Box backgroundColor="secondary.400">5</Box>
            <Box backgroundColor="secondary.500">6</Box>
          </Grid>
        </Block>
      </Box>
    </Box>
  );
}
