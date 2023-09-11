import { styles } from './styles.css';
import type { ButtonBaseProps } from './types';

type LinkButtonProps = ButtonBaseProps & { href: string };

type LinkButton = {
  href: string;
};

export const LinkButton = ({
  elevation = 'low',
  disabled = false,
  href,
  label,
  size = 'medium',
}: LinkButtonProps): JSX.Element => (
  <a
    href={href}
    className={styles({
      elevation,
      disabled,
      size,
    })}
  >
    {label}
  </a>
);
