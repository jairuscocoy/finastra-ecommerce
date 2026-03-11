import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { TProduct } from '../../types/product-types';

interface ICountCart {
  count: number;
  items: TProduct[];
}

const initialState: ICountCart = {
  count: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: 'addToCart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<TProduct>) => {
      const product = action.payload;
       if (!product) return;
       state.items = state.items || [];
console.log('test: ', product)
      const existingIndex = state.items.findIndex(
        (item) =>
          item.id === product.id &&
          item.color === product.color &&
          item.size === product.size,
      );

      if (existingIndex >= 0) {
        if (state.items[existingIndex].quantity) {
          state.items[existingIndex].quantity! += 1;
        } else {
          state.items[existingIndex].quantity = 2;
        }
      } else {
        state.items.push({ ...product, quantity: 1 });
      }

      state.count = state.items.reduce(
        (total, item) => total + (item.quantity || 1),
        0,
      );
    },
    removeFromCart: (state, action: PayloadAction<TProduct>) => {
      state.items = state.items.filter(
        (item) =>
          !(
            item.id === action.payload.id &&
            item.color === action.payload.color &&
            item.size === action.payload.size
          )
      );
      // Recalculate total count
      state.count = state.items.reduce(
        (total, item) => total + (item.quantity || 1),
        0
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
