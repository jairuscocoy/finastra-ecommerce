import { createSlice } from '@reduxjs/toolkit';
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
    add: (state) => {
      state.count += 1;
    },
  },
});

export const { add } = cartSlice.actions;
export default cartSlice.reducer;
