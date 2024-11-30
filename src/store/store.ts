import { configureStore } from '@reduxjs/toolkit';
import { JWT_PERSISTENT_STATE, userReducer } from './user/user.slice';
import { saveState } from '../helpers/storage';
import { UserPersistentState } from './user/user.types';
import { cartReducer } from './cart/cart.slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer
  },
  devTools: import.meta.env.MODE === 'development'
});

store.subscribe(() => {
  saveState<UserPersistentState>(
    { jwt: store.getState().user.jwt },
    JWT_PERSISTENT_STATE
  );
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
