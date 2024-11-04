import styles from './MenuPage.module.scss';
import Headling from '../../components/Headling/Headling';
import Search from '../../components/Search/Search';
import { PRODUCTS_DATA_MOCK } from '../../mock/productsData.mock';
import ProductCard from '../../components/ProductCard/ProductCard';
import cn from 'classnames';

function MenuPage() {
  return (
    <>
      <div className={styles['header']}>
        <div className={cn(styles['header__container'], 'container')}>
          <Headling className={styles['header__search']}>Меню</Headling>
          <Search />
        </div>
      </div>
      <main className={styles['main']}>
        <div className="container">
          <ul className={styles['product-list']}>
            {PRODUCTS_DATA_MOCK.map((product) => (
              <li key={product.id} className={styles['product-list__item']}>
                <ProductCard
                  productData={product}
                  className={styles['product-list__product']}
                />
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

export default MenuPage;
