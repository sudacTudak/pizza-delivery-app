import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { AppDispatch, RootState } from '../store';
import { API_HOST } from '../../helpers/API';
import { cartActions } from './cart.slice';

export const makeOrder = createAsyncThunk<
  Boolean | undefined,
  void,
  { state: RootState; dispatch: AppDispatch }
>('@@cart/makeOrder', async (_, thunkApi) => {
  try {
    const state = thunkApi.getState();
    const dispatch = thunkApi.dispatch;
    const jwt = state.user.jwt;
    const cartItems = state.cart.items;
    const { data } = await axios.post(
      `${API_HOST}/order`,
      {
        products: cartItems
      },
      { headers: { Authorization: `Bearer ${jwt}` } }
    );
    dispatch(cartActions.clearCart());
    console.log('data: ', data);
    return true;
  } catch (err) {
    if (err instanceof AxiosError) {
      throw new Error(err.response?.data.message);
    }
  }
});
