import { styles } from './styles.css';
import { ButtonBaseProps } from './types';

type ButtonProps = ButtonBaseProps & { onClick?: () => {} };

export const Button = ({
  elevation = 'none',
  label,
  onClick,
  size = 'medium',
  variant = 'primary',
}: ButtonProps) => (
  <button
    className={styles({
      elevation,
      size,
    })}
    onClick={onClick}
  >
    {label}
  </button>
);
