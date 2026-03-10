import { createSlice } from '@reduxjs/toolkit';

type TCart = {
  name: string;
  description: string;
  size: 'S' | 'M' | 'L';
};
interface ICountCart {
  count: number;
  items: TCart[];
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
