import { styles } from './styles.css';
import { ButtonBaseProps } from './types';

type ButtonProps = ButtonBaseProps & { onClick?: () => {} };

export const Button = ({
  elevation = 'none',
  disabled = false,
  label,
  onClick,
  size = 'medium',
  variant = 'primary',
}: ButtonProps) => (
  <button
    className={styles({
      elevation,
      disabled,
      size,
    })}
    onClick={disabled ? undefined : onClick}
  >
    {label}
  </button>
);
