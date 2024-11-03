import styles from './Button.module.scss';
import cn from 'classnames';
import { ButtonProps } from './Button.props';

function Button({
  children,
  className,
  size = 'small',
  iconSrc,
  iconAlt,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        styles['button'],
        styles[size],
        {
          [styles['button_with-icon']]: iconSrc?.trim()
        },
        className
      )}
      {...props}
    >
      {iconSrc && (
        <img
          src={iconSrc}
          alt={iconAlt ?? ''}
          className={styles['button__icon']}
        />
      )}
      {children}
    </button>
  );
}

export default Button;
