import { createSlice } from "@reduxjs/toolkit";
import { fetchData, getFullProductInfo } from "./productsOps";

const initialState = {
  items: [],
  error: null,
  isLoading: false,
  currentProduct: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.items = action.payload.products;
        console.log(state.items);
      })
      .addCase(getFullProductInfo.fulfilled, (state, action) => {
        state.currentProduct = action.payload;
        console.log(state.currentProduct);
      });
  },
});

export default productsSlice.reducer;
