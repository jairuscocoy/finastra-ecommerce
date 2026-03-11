import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "..";

const selectProducts = (state: RootState) =>
  state.products.products;

export const selectProductById = (id: number) =>
  createSelector([selectProducts], products =>
    products.find(product => product.id === id)
  );