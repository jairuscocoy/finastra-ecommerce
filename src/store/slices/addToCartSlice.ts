import { createSlice } from '@reduxjs/toolkit';

type TCart = {
  name: string;
  description: string;
  size: 'S' | 'M' | 'L';
};
interface ICountCart {
  count: number;
  cart: TCart[];
}

const initialState: ICountCart = {
  count: 0,
  cart: [],
};

export const addToCartSlice = createSlice({
  name: 'addToCart',
  initialState,
  reducers: {
    add: (state) => {
      state.count += 1;
    },
  },
});

export const { add } = addToCartSlice.actions;
export default addToCartSlice.reducer;
