import styles from './Button.module.scss';
import cn from 'classnames';
import { ButtonProps } from './Button.props';

function Button({
  children,
  className,
  size = 'small',
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(styles['button'], styles[size], className)}
      {...props}
    >
      {/* {icon && <span className={styles['button__icon']}>{icon}</span>} */}
      {children}
    </button>
  );
}

export default Button;
