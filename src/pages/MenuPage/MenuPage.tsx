import styles from './MenuPage.module.scss';
import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import cn from 'classnames';
import Headling from '../../components/Headling/Headling';
import Search from '../../components/Search/Search';
import { API_HOST } from '../../helpers/API';
import { Product } from '../../interfaces/product.interface';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import MenuList from './MenuList/MenuList';

function MenuPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const getMenu = async () => {
    try {
      setIsLoading(true);
      setError(undefined);
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      });
      const { data } = await axios.get<Product[]>(`${API_HOST}/products`);
      setProducts(data);
      setIsLoading(false);
      return true;
    } catch (err) {
      console.error(err);
      if (err instanceof AxiosError) {
        setError(err.message);
      }
      setIsLoading(false);
      return false;
    }
  };

  useEffect(() => {
    getMenu();
  }, []);

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
          {!isLoading && <MenuList products={products} />}
          {isLoading && <Loader />}
          {error && <ErrorMessage message={error} />}
        </div>
      </main>
    </>
  );
}

export default MenuPage;
