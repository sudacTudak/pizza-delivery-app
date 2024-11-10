import styles from './MainLayout.module.scss';
import cn from 'classnames';
import Nav from '../Nav/Nav';
import { Outlet, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';

function Layout() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('jwt');
    navigate('/auth/login');
  };

  return (
    <div className={styles['layout']}>
      <div className={cn(styles['layout__sidebar'], styles['sidebar'])}>
        <div className={styles['sidebar__top']}>
          <div className={cn(styles['sidebar__user'], styles['user'])}>
            <div className={styles['user__avatar-block']}>
              <img
                className={styles['user__avatar']}
                src="/no-user-avatar.png"
                alt="Аватар пользователя"
              />
            </div>
            <div className={styles['user__info']}>
              <span className={styles['user__name']}>Судаков Вячеслав</span>
              <span className={styles['user__email']}>
                sudactudak.webdev@gmail.com
              </span>
            </div>
          </div>
          <Nav className={styles['sidebar__nav']} />
        </div>
        <div className={styles['sidebar__bottom']}>
          <Button
            iconSrc="/exit-icon.svg"
            iconAlt="Иконка выхода"
            onClick={logout}
          >
            Выйти
          </Button>
        </div>
      </div>
      <div className={styles['layout__content']}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
