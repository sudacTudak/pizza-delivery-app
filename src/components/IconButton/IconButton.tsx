import styles from './IconButton.module.scss';
import cn from 'classnames';
import { IconButtonProps } from './IconButton.props';

function IconButton({
  className,
  size = 'small',
  appearance = 'filled',
  iconSrc,
  iconAlt,
  ...props
}: IconButtonProps) {
  return (
    <button
      className={cn(
        styles['icon-button'],
        styles[appearance],
        styles[size],
        className
      )}
      {...props}
    >
      <img
        src={iconSrc}
        alt={iconAlt ?? ''}
        className={styles['icon-button__icon']}
      />
    </button>
  );
}

export default IconButton;
