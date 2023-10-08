import { Box, FlexBox, Block, Text } from '@veer-ui/system';
import { bioBlock, bioBlockRow, photoCol } from './BioBlock.styles.css';

type BioBlock = {
  heading?: string;
  bios: {
    title: string;
    subtitle?: string;
    body: string;
    imageComponent: React.ReactNode;
  }[];
};

export const BioBlock = ({ bios, heading }: BioBlock) => {
  return (
    <section className={bioBlock}>
      <Block heading={heading}>
        <Box>
          {bios.map((bio) => (
            <FlexBox className={bioBlockRow}>
              {bio.imageComponent && (
                <Box className={photoCol}>{bio.imageComponent}</Box>
              )}
              <Box>
                <Text variant="h3">{bio.title}</Text>
                {!!bio.subtitle && <Text variant="h4">{bio.subtitle}</Text>}
                <Text as="p" variant="bodySM">
                  {bio.body}
                </Text>
              </Box>
            </FlexBox>
          ))}
        </Box>
      </Block>
    </section>
  );
};
