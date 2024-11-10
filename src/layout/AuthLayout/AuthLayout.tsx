import { Outlet } from 'react-router-dom';
import styles from './AuthLayout.module.scss';

function AuthLayout() {
  return (
    <div className={styles['layout']}>
      <div className={styles['layout__logo']}>
        <img src="/logo.svg" alt="Логотип компании" />
      </div>
      <div className={styles['layout__content']}>
        <div className={styles['layout__container']}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
