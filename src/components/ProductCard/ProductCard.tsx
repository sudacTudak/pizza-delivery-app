import styles from './ProductCard.module.scss';
import cn from 'classnames';
import { ProductCardProps } from './ProductCard.props';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { cartActions } from '../../store/cart/cart.slice';
import { MouseEvent } from 'react';

const reduceIngredientsArrayToString = (ingredients: string[]) =>
  ingredients.reduce((accum, ingr, index, array) => {
    let value: string = ingr;
    if (index === 0) {
      value = value.charAt(0).toUpperCase() + value.slice(1);
    }
    if (index < array.length) {
      value = value + ', ';
    }
    return accum + value;
  }, '');

function ProductCard({ productData, className }: ProductCardProps) {
  const { name, ingredients, price, rating, image, id } = productData;
  const dispatch = useAppDispatch();

  const addToCart = (e: MouseEvent) => {
    e.preventDefault();
    dispatch(cartActions.addItem({ id }));
  };

  return (
    <Link to={`/product/${id}`} className={styles['product']}>
      <article className={cn(styles['product__card'], className)}>
        <div className={styles['product__header']}>
          <div className={styles['product__preview']}>
            <img src={image} alt={name} />
          </div>
          <div className={styles['product__price-tag']}>
            <span className={styles['product__price']}>{price}</span>
            &nbsp;
            <span className={styles['product__currency']}>₽</span>
          </div>
          <div className={styles['product__rating-tag']}>
            <span className={styles['product__rating']}>{rating}</span>
            <img className={styles['product__rating-icon']} src="/star.svg" />
          </div>
          <button className={styles['product__cart-btn']} onClick={addToCart}>
            <img src="/cart.svg" alt="Добавить в корзину" />
          </button>
        </div>
        <div className={styles['product__body']}>
          <p className={styles['product__title']}>{name}</p>
          <p className={styles['product__ingredients']}>
            {reduceIngredientsArrayToString(ingredients)}
          </p>
        </div>
      </article>
    </Link>
  );
}

export default ProductCard;
