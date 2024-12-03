import styles from './CartPage.module.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Headling from '../../components/Headling/Headling';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { selectCartState } from '../../store/cart/cart.selectors';
import { Product } from '../../interfaces/product.interface';
import { API_HOST } from '../../helpers/API';
import CartList from '../../components/CartList/CartList';
import PriceList from '../../components/PriceList/PriceList';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { makeOrder } from '../../store/cart/cart.thunks';

const DELIVERY_PRICE = 169;

function CartPage() {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const { items } = useAppSelector(selectCartState);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const totalPrice = items.reduce((acc, item) => {
    const product = cartProducts.find(
      (product) => product.id === item.productId
    );
    if (!product) {
      return acc;
    }
    return acc + item.count * product.price;
  }, 0);

  const getProduct = async (id: number) => {
    const { data } = await axios.get<Promise<Product>>(
      `${API_HOST}/products/${id}`
    );
    return data;
  };

  const loadAllProducts = async () => {
    const res = await Promise.all(
      items.map((item) => getProduct(item.productId))
    );
    setCartProducts(res);
  };

  const checkout = async () => {
    await dispatch(makeOrder());
    navigate('/success');
  };

  useEffect(() => {
    loadAllProducts();
  }, [items]);

  return (
    <div className={styles['cart']}>
      <Headling className={styles['cart__title']}>Корзина</Headling>
      <div className={styles['cart__content']}>
        {items.length === 0 && <div className="not-found">Корзина пуста</div>}
        <div className={styles['cart__container']}>
          {items.length > 0 && (
            <>
              <CartList
                cartItems={items}
                cartProducts={cartProducts}
                className={styles['cart__product-list']}
              />
              <div className={styles['cart__price-list']}>
                <PriceList
                  totalPrice={totalPrice}
                  deliveryPrice={DELIVERY_PRICE}
                  className={styles['cart__price-list']}
                />
              </div>
              <div className={styles['cart__footer']}>
                <Button size="large" onClick={checkout}>
                  Оформить
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartPage;
