import styles from './Input.module.scss';
import cn from 'classnames';
import { InputProps } from './Input.props';
import { forwardRef } from 'react';

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { isValid = true, className, ...props },
  ref
) {
  return (
    <input
      className={cn(styles['input'], className, {
        [styles['invalid']]: !isValid
      })}
      ref={ref}
      {...props}
    />
  );
});

export default Input;
