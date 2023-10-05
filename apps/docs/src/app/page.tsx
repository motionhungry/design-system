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
      <Block>
        <Text variant="h2">Grid</Text>
        <Grid
          templateColumns={{
            medium: 'repeat(2, 1fr)',
            large: 'repeat(3, 1fr)',
            xlarge: 'repeat(4, 1fr)',
            xxlarge: 'repeat(8, 1fr)',
          }}
          rowGap={{
            xxlarge: '48px',
            xlarge: '32px',
            large: '16px',
            medium: '8px',
            small: '4px',
          }}
        >
          <Box backgroundColor="secondary.50">1</Box>
          <Box backgroundColor="secondary.200">2</Box>
          <Box backgroundColor="secondary.300">3</Box>
          <Box backgroundColor="secondary.400">4</Box>
          <Box backgroundColor="secondary.400">5</Box>
          <Box backgroundColor="secondary.400">6</Box>
          <Box backgroundColor="secondary.400">7</Box>
          <Box backgroundColor="secondary.400">8</Box>
        </Grid>
      </Block>
    </Box>
  );
}
