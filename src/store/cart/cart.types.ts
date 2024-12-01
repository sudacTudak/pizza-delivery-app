export interface CartItem {
  productId: number;
  count: number;
}

export interface CartState {
  items: CartItem[];
  totalCount: number;
}

export type CartPersistentState = Pick<CartState, 'items' | 'totalCount'>;
