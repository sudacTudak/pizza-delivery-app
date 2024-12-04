import styles from './ErrorPage.module.scss';
import cn from 'classnames';
import Heading from '../../components/Heading/Heading';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { Link, useLocation } from 'react-router-dom';

function NotFoundErrorPage() {
  const location = useLocation();

  return (
    <div className={cn(styles['error-page'], styles['not-found-page'])}>
      <div className={cn(styles['error-page__header'], styles['header'])}>
        <div className={cn(styles['header__container'], 'container')}>
          <Heading className={styles['header__title']}>
            Ошибка 404: страница не найдена
          </Heading>
          <Link className={styles['header__link']} to="/">
            На главную
          </Link>
        </div>
      </div>
      <div className={styles['error-page__info']}>
        <div className="container">
          <ErrorMessage
            message={`Не найдена страница, соответствующая маршруту "${location.pathname}"`}
          />
        </div>
      </div>
    </div>
  );
}

export default NotFoundErrorPage;
