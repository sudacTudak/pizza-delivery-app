import styles from './ErrorPage.module.scss';
import cn from 'classnames';
import { AxiosError } from 'axios';
import { Link, useRouteError } from 'react-router-dom';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Heading from '../../components/Heading/Heading';

function ErrorPage() {
  const error = useRouteError();
  const errMessage =
    error instanceof Error || error instanceof AxiosError
      ? error.message
      : JSON.stringify(error);

  return (
    <div className={styles['error-page']}>
      <div className={cn(styles['error-page__header'], styles['header'])}>
        <div className={cn(styles['header__container'], 'container')}>
          <Heading className={styles['header__title']}>
            Произошла ошибка
          </Heading>
          <Link className={styles['header__link']} to="/">
            На главную
          </Link>
        </div>
      </div>
      <div className={styles['error-page__info']}>
        <div className="container">
          <ErrorMessage message={errMessage} />
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
