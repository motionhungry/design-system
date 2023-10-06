import { Block, Text } from '@veer-ui/system';

type TextBlockProps = {
  heading?: string;
  body: string;
};

export const TextBlock = ({ heading, body }: TextBlockProps) => {
  return (
    <Block heading={heading}>
      <Text variant="bodyXL">{body}</Text>
    </Block>
  );
};
