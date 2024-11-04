import styles from './Nav.module.scss';
import cn from 'classnames';
import { NavProps } from './Nav.props';
import { NavLink } from 'react-router-dom';

function Nav({ className }: NavProps) {
  return (
    <nav className={cn(styles['nav'], className)}>
      <ul className={styles['nav__list']}>
        <li className={styles['nav__item']}>
          <NavLink
            className={({ isActive }) =>
              cn(styles['nav-link'], {
                [styles['nav-link_active']]: isActive
              })
            }
            to="/"
          >
            <div className={styles['nav-link__icon']}>
              <img src="/menu-icon.svg" alt="Иконка меню" />
            </div>
            <div className={styles['nav-link__title']}>Меню</div>
          </NavLink>
        </li>
        <li className={styles['nav__item']}>
          <NavLink
            className={({ isActive }) =>
              cn(styles['nav-link'], {
                [styles['nav-link_active']]: isActive
              })
            }
            to="/cart"
          >
            <div className={styles['nav-link__icon']}>
              <img src="/cart-icon.svg" alt="Иконка корзины" />
            </div>
            <div className={styles['nav-link__title']}>Корзина</div>
            <div className={styles['nav-link__counter']}>2</div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
