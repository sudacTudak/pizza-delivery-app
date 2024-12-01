import styles from './CartItem.module.scss';
import cn from 'classnames';
import { CartItemProps } from './CartItem.props';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { cartActions } from '../../store/cart/cart.slice';
import IconButton from '../IconButton/IconButton';

function CartItem({ className, ...itemData }: CartItemProps) {
  const { productId, count, image, name, price } = itemData;
  const dispatch = useAppDispatch();

  const handleIncrease = () => {
    dispatch(cartActions.addItem({ id: productId }));
  };

  const handleDecrease = () => {
    dispatch(cartActions.removeItem({ id: productId }));
  };

  const handleRemove = () => {
    dispatch(cartActions.deleteItem({ id: productId }));
  };

  return (
    <div className={cn(styles['cart-item'], className)}>
      <div className={styles['cart-item__image']}>
        <img src={image} alt={name} />
      </div>
      <div className={styles['cart-item__body']}>
        <div className={styles['cart-item__info']}>
          <p className={styles['cart-item__name']}>{name}</p>
          <div className={styles['cart-item__price-tag']}>
            <span className={styles['cart-item__price']}>{price}</span>
            &nbsp;
            <span className={styles['cart-item__currency']}>₽</span>
          </div>
        </div>
        <div className={cn(styles['cart-item__actions'], styles['actions'])}>
          <div className={cn(styles['actions__counter'], styles['counter'])}>
            <IconButton
              size="small"
              appearance="outlined"
              iconSrc="./minus-icon.svg"
              iconAlt="Уменьшить количество товара"
              onClick={handleDecrease}
              className={cn(
                styles['counter__btn'],
                styles['counter__btn_stroke']
              )}
            />
            <div className={styles['counter__count']}>
              {count < 10 ? `0${count}` : count}
            </div>
            <IconButton
              size="small"
              appearance="filled"
              iconSrc="./plus-icon.svg"
              iconAlt="Увеличить количество товара"
              onClick={handleIncrease}
              className={cn(
                styles['counter__btn'],
                styles['counter__btn_fill']
              )}
            />
          </div>
          <div className={styles['actions__remove']}>
            <IconButton
              size="small"
              appearance="text"
              iconSrc="./close-icon.svg"
              iconAlt="Убрать товар из корзины"
              onClick={handleRemove}
              className={styles['actions__remove-btn']}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
