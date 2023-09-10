import { Box, FlexBox, Block, Text } from '@motionhungry/ui';

export default function Page(): JSX.Element {
  return (
    <Block backgroundColor="primary.50" justifyContent="center" fullHeight>
      <FlexBox alignItems="center" justifyContent="center">
        <Box>
          <Text variant="h1" color="primary.700">
            Motion Hungry
          </Text>
        </Box>
      </FlexBox>
    </Block>
  );
}
