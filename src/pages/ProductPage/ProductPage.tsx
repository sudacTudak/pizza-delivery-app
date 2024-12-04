import styles from './ProductPage.module.scss';
import { Await, Link, useLoaderData } from 'react-router-dom';
import { Product } from '../../interfaces/product.interface';
import Loader from '../../components/Loader/Loader';
import { Suspense } from 'react';
import Heading from '../../components/Heading/Heading';
import Button from '../../components/Button/Button';
import cn from 'classnames';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { cartActions } from '../../store/cart/cart.slice';
import RatingTag from '../../components/RatingTag/RatingTag';
import ProductComposition from '../../components/ProductComposition/ProductComposition';

function ProductPage() {
  const data = useLoaderData() as { data: Product };
  const dispatch = useAppDispatch();

  const handleAddToCart = (id: number) => {
    dispatch(
      cartActions.addItem({
        id
      })
    );
  };

  return (
    <Suspense fallback={<Loader />}>
      <Await resolve={data.data}>
        {({ data }: { data: Product }) => {
          const { id, image, ingredients, name, price, rating } = data;

          return (
            <div className={styles['product-page']}>
              <div
                className={cn(styles['product-page__header'], styles['header'])}
              >
                <div className={cn(styles['header__container'], 'container')}>
                  <div className={styles['header__title']}>
                    <Link to="/" className={styles['header__back-link']}>
                      <img src="/arrow-left-icon.png" alt="Вернуться к меню" />
                    </Link>
                    <Heading>{name}</Heading>
                  </div>
                  <Button
                    iconSrc="/cart.svg"
                    iconAlt="Добавить в корзину"
                    onClick={() => {
                      handleAddToCart(id);
                    }}
                  >
                    В корзину
                  </Button>
                </div>
              </div>
              <main className={styles['product-page__content']}>
                <div
                  className={cn(styles['product-page__container'], 'container')}
                >
                  <div className={styles['product-page__image']}>
                    <img src={image} alt={name} />
                  </div>
                  <div
                    className={cn(styles['product-page__info'], styles['info'])}
                  >
                    <ul className={styles['info__list']}>
                      <li className={styles['info__item']}>
                        <span className={styles['info__label']}>Цена</span>
                        <span className={styles['info__price']}>
                          {price}&nbsp;
                          <span className={styles['info__currency']}>₽</span>
                        </span>
                      </li>
                      <li className={styles['info__item']}>
                        <span className={styles['info__label']}>Рейтинг</span>
                        <RatingTag rating={rating} />
                      </li>
                    </ul>
                    <ProductComposition ingredients={ingredients} />
                  </div>
                </div>
              </main>
            </div>
          );
        }}
      </Await>
    </Suspense>
  );
}

export default ProductPage;
