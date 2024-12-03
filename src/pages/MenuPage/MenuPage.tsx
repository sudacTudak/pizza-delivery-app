import styles from './MenuPage.module.scss';
import axios, { AxiosError } from 'axios';
import { ChangeEvent, useEffect, useState } from 'react';
import cn from 'classnames';
import Heading from '../../components/Heading/Heading';
import Search from '../../components/Search/Search';
import { API_HOST } from '../../helpers/API';
import { Product } from '../../interfaces/product.interface';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import MenuList from '../../components/MenuList/MenuList';

function MenuPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    getMenu(searchValue);
  }, [searchValue]);

  const getMenu = async (searchValue: string) => {
    try {
      setIsLoading(true);
      setError(undefined);
      const { data } = await axios.get<Product[]>(
        `${API_HOST}/products?limit=1000&offset=0&name=${searchValue}`
      );
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

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <div className={styles['header']}>
        <div className={cn(styles['header__container'], 'container')}>
          <Heading className={styles['header__search']}>Меню</Heading>
          <Search value={searchValue} onChange={handleChangeSearch} />
        </div>
      </div>
      <main className={styles['main']}>
        <div className={cn(styles['main__container'], 'container')}>
          {!isLoading && products.length > 0 && (
            <MenuList products={products} />
          )}
          {!isLoading && products.length === 0 && (
            <div className="not-found">Упс, не найдено блюд по запросу</div>
          )}
          {isLoading && <Loader />}
          {error && <ErrorMessage message={error} />}
        </div>
      </main>
    </>
  );
}

export default MenuPage;
