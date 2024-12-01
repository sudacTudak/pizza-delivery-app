import styles from './CartList.module.scss';
import cn from 'classnames';
import { CartListProps } from './CartList.props';
import CartItem from '../CartItem/CartItem';

function CartList({ cartProducts, cartItems, className }: CartListProps) {
  return (
    <ul className={cn(styles['cart-list'], className)}>
      {cartItems.map((item) => {
        const product = cartProducts.find(
          (product) => product.id === item.productId
        );

        if (!product) {
          return;
        }

        const { id, ingredients, rating, ...itemData } = product;

        return (
          <li key={item.productId} className={styles['cart-list__item']}>
            <CartItem
              productId={item.productId}
              count={item.count}
              {...itemData}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default CartList;
