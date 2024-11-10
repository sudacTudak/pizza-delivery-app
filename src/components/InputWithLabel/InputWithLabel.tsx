import styles from './InputWithLabel.module.scss';
import cn from 'classnames';
import Input from '../Input/Input';
import { InputWithLabelProps } from './InputWithLabel.props';
import { forwardRef } from 'react';

const InputWithLabel = forwardRef<HTMLInputElement, InputWithLabelProps>(
  function InputWithLabel({ label, className, id, ...props }, ref) {
    return (
      <div className={cn(styles['field'], className)}>
        <label htmlFor={id} className={styles['field__label']}>
          {label}
        </label>
        <Input id={id} ref={ref} {...props} />
      </div>
    );
  }
);

export default InputWithLabel;
