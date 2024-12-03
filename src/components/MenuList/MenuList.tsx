import styles from './MenuList.module.scss';
import cn from 'classnames';
import { MenuListProps } from './MenuList.props';
import ProductCard from '../ProductCard/ProductCard';

function MenuList({ products, className, ...props }: MenuListProps) {
  return (
    <ul className={cn(styles['menu-list'], className)} {...props}>
      {products.map((product) => (
        <li key={product.id} className={styles['menu-list__item']}>
          <ProductCard productData={product} />
        </li>
      ))}
    </ul>
  );
}

export default MenuList;
