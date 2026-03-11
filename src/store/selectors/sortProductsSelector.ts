import { createSelector } from '@reduxjs/toolkit';
import { selectSearchedProducts } from './searchProductSelector';
import type { RootState } from '..';
import { sortProducts } from '../../utils/productUtils';

const sortBy = (state: RootState) => state.products.sortBy;
const sortOrder = (state: RootState) => state.products.sortOrder;

export const selectSortedProducts = createSelector(
  selectSearchedProducts,
  sortBy,
  sortOrder,
  (products, sortBy, sortOrder) => sortProducts(products, sortBy, sortOrder),
);
