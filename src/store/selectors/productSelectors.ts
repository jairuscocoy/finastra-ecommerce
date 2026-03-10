import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '..';

const selectProducts = (state: RootState) => state.products.products;
const selectSearchProduct = (state: RootState) => state.products.searchProduct;


export const selectSearchedProducts = createSelector(
  [selectProducts, selectSearchProduct],
  (products, searchProduct) => {
    if (!searchProduct) return products;

    const term = searchProduct;

    return products.filter(
      (product) =>
        product.title.includes(term) ||
        product.category.includes(term) ||
        product.price.toString().includes(term),
    );
  },
);
