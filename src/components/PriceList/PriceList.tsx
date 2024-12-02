import styles from './PriceList.module.scss';
import cn from 'classnames';
import { PriceListProps } from './PriceList.props';

function PriceList({ totalPrice, deliveryPrice, className }: PriceListProps) {
  return (
    <ul className={cn(styles['price-list'], className)}>
      <li className={styles['price-list__item']}>
        <p className={styles['price-list__name']}>Сумма</p>
        <div className={cn(styles['price-list__value'], styles['price-value'])}>
          <span className={styles['price-value__sum']}>{totalPrice}</span>
          &nbsp;
          <span className={styles['price-value__currency']}>₽</span>
        </div>
      </li>
      <li className={styles['price-list__item']}>
        <p className={styles['price-list__name']}>Доставка</p>
        <div className={cn(styles['price-list__value'], styles['price-value'])}>
          <span className={styles['price-value__sum']}>{deliveryPrice}</span>
          &nbsp;
          <span className={styles['price-value__currency']}>₽</span>
        </div>
      </li>
      <li className={styles['price-list__item']}>
        <p className={styles['price-list__name']}>Всего</p>
        <div className={cn(styles['price-list__value'], styles['price-value'])}>
          <span className={styles['price-value__sum']}>
            {totalPrice + deliveryPrice}
          </span>
          &nbsp;
          <span className={styles['price-value__currency']}>₽</span>
        </div>
      </li>
    </ul>
  );
}

export default PriceList;
