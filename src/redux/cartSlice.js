import { createSlice } from "@reduxjs/toolkit";
import { addCart, decrease, deleteCart, fetchCart, increase } from "./cartOps";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addCart.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteCart.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(increase.fulfilled, (state, action) => {
        state.items = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, count: item.count + 1 }
            : item
        );
      })
      .addCase(decrease.fulfilled, (state, action) => {
        state.items = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, count: item.count - 1 }
            : item
        );
      });
  },
});

export default cartSlice.reducer;
