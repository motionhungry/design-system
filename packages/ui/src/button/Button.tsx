import { styles } from './styles.css';
import type { ButtonBaseProps } from './types';

type ButtonProps = ButtonBaseProps & { onClick?: () => void };

export const Button = ({
  elevation = 'none',
  disabled = false,
  label,
  onClick,
  size = 'medium',
}: ButtonProps): JSX.Element => (
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
