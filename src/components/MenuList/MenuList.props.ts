import { HTMLAttributes } from 'react';
import { Product } from '../../interfaces/product.interface';

export interface MenuListProps extends HTMLAttributes<HTMLUListElement> {
  products: Product[];
}
