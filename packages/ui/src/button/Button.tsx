import { styles } from './styles.css';
import { ButtonBaseProps } from './types';

type ButtonProps = ButtonBaseProps & { onClick?: () => {} };

export const Button = ({
  label,
  onClick,
  size = 'medium',
  variant = 'primary',
}: ButtonProps) => (
  <button
    className={styles({
      size,
    })}
    onClick={onClick}
  >
    {label}
  </button>
);
