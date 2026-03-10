import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { TProduct } from '../../types/product-types';

type TProductState = {
  products: TProduct[];
  searchProduct: string | null;
  loading: boolean;
  error: string | null;
};

const initialState: TProductState = {
  products: [],
  searchProduct: '',
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data: TProduct[] = await res.json();
    return data;
  },
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchProduct: (state, action) => {
      state.searchProduct = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch products';
      });
  },
});

export const { setSearchProduct } = productSlice.actions;
export default productSlice.reducer;
