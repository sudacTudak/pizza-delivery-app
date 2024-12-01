import { Product } from '../../interfaces/product.interface';
import { CartItem } from '../../store/cart/cart.types';

export interface CartListProps {
  cartProducts: Product[];
  cartItems: CartItem[];
  className?: string;
}
