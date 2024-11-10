import styles from './ProductPage.module.scss';
import { Await, useLoaderData } from 'react-router-dom';
import { Product } from '../../interfaces/product.interface';
import Loader from '../../components/Loader/Loader';
import { Suspense } from 'react';

function ProductPage() {
  const data = useLoaderData() as { data: Product };

  return (
    <Suspense fallback={<Loader />}>
      <Await resolve={data.data}>
        {({ data }: { data: Product }) => {
          return (
            <main className={styles['product-page']}>
              Product Name: {data.name}
            </main>
          );
        }}
      </Await>
    </Suspense>
  );
}

export default ProductPage;
