import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState } from './cart.types';

const initialState: CartState = {
  items: [],
  totalCount: 0,
  totalCost: 0
};

export const cartSlice = createSlice({
  name: '@@cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<{ id: number }>) => {
      const productId = action.payload.id;
      const existedItem = state.items.find(
        (item) => item.productId === productId
      );

      if (!existedItem) {
        state.items.push({ productId, count: 1 });
      } else {
        state.items.forEach((item) => {
          if (item.productId === productId) {
            item.count += 1;
          }
        });
      }

      state.totalCount += 1;
    },
    removeItem: (state, action: PayloadAction<{ id: number }>) => {
      const productId = action.payload.id;
      const existedItem = state.items.find(
        (item) => item.productId === productId
      );

      if (!existedItem) {
        return state;
      }

      if (existedItem.count === 1) {
        return {
          ...state,
          items: state.items.filter((item) => item.productId !== productId),
          totalCount: state.totalCount - 1
        };
      }

      const newItems = state.items.map((item) => {
        if (item.productId === productId) {
          return {
            ...item,
            count: item.count - 1
          };
        }

        return item;
      });

      return { ...state, items: newItems, totalCount: state.totalCount - 1 };
    },
    clearCart: () => {
      return initialState;
    }
  },
  extraReducers: (builder) => {}
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
