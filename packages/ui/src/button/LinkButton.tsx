import { styles } from './styles.css';
import { ButtonBaseProps } from './types';

type LinkButtonProps = ButtonBaseProps & { href: string };

type LinkButton = {
  href: string;
};

export const LinkButton = ({
  elevation = 'low',
  href,
  label,
  size = 'medium',
  variant = 'primary',
}: LinkButtonProps) => (
  <a
    href={href}
    className={styles({
      elevation,
      size,
    })}
  >
    {label}
  </a>
);
