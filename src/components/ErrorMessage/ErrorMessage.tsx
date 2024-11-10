import styles from './ErrorMessage.module.scss';
import cn from 'classnames';
import { ErrorMessageProps } from './ErrorMessage.props';

function ErrorMessage({ message, className }: ErrorMessageProps) {
  return (
    <div className={cn(styles['error'], className)}>
      <p className={styles['error__text']}>
        <span className={styles['error__label']}>Ошибка:&nbsp;</span>
        {message || 'Произошла неизвестная ошибка'}
      </p>
    </div>
  );
}

export default ErrorMessage;
