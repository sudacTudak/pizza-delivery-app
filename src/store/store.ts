import { configureStore } from '@reduxjs/toolkit';
import { JWT_PERSISTENT_STATE_KEY, userReducer } from './user/user.slice';
import { saveState } from '../helpers/storage';
import { UserPersistentState } from './user/user.types';
import { CART_PERSISTENT_STATE_KEY, cartReducer } from './cart/cart.slice';
import { CartPersistentState } from './cart/cart.types';

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer
  },
  devTools: import.meta.env.MODE === 'development'
});

store.subscribe(() => {
  const state = store.getState();
  saveState<UserPersistentState>(
    { jwt: state.user.jwt },
    JWT_PERSISTENT_STATE_KEY
  );
  saveState<CartPersistentState>(state.cart, CART_PERSISTENT_STATE_KEY);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
