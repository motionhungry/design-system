import { Box, FlexBox, Grid, Block, Text } from '@veer-ui/system';

export default function Page(): JSX.Element {
  return (
    <Box>
      <Block backgroundColor="primary.50" justifyContent="center" fullHeight>
        <FlexBox alignItems="center" justifyContent="center">
          <Box>
            <Text variant="h1" color="primary.700">
              Hero
            </Text>
          </Box>
        </FlexBox>
      </Block>
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
  );
}
