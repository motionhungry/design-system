import { Block, Text } from '@veer-ui/system';
import { textBlock } from './TextBlock.styles.css';

type TextBlockProps = {
  body: string;
  heading?: string;
  variant?: 'bodyXL' | 'bodyLG' | 'bodyMD' | 'bodySM' | 'bodyXS';
};

export const TextBlock = ({
  body,
  heading,
  variant = 'bodyXL',
}: TextBlockProps) => {
  return (
    <section className={textBlock}>
      <Block heading={heading}>
        <Text variant={variant}>{body}</Text>
      </Block>
    </section>
  );
};
