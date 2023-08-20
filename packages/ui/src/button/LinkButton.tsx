import { styles } from './styles.css';
import { ButtonBaseProps } from './types';

type LinkButtonProps = ButtonBaseProps & { href: string };

type LinkButton = {
  href: string;
};

export const LinkButton = ({
  href,
  label,
  size = 'medium',
  variant = 'primary',
}: LinkButtonProps) => (
  <a
    href={href}
    className={styles({
      size,
    })}
  >
    {label}
  </a>
);
