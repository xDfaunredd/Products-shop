import { createSelector } from "@reduxjs/toolkit";

export const selectProducts = (state) => state.products.items;
export const selectCurrentProduct = (state) => state.products.currentProduct;
export const selectCart = (state) => state.cart.items;
export const selectAmount = createSelector([selectCart], (cart) => {
  return cart.reduce((acc, item) => {
    acc += item.price * item.count;
    return acc;
  }, 0);
});
