import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://67093697af1a3998baa0c453.mockapi.io/";

export const fetchCart = createAsyncThunk("fetchCart", async (_, thunkAPI) => {
  try {
    const { data } = await axios.get("/products");
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addCart = createAsyncThunk(
  "addCart",
  async (product, thunkAPI) => {
    try {
      const { data } = await axios.post("/products", { ...product, count: 1 });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteCart = createAsyncThunk(
  "deleteCart",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/products/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const increase = createAsyncThunk(
  "increase",
  async (product, thunkAPI) => {
    try {
      const { data } = await axios.put(`/products/${product.id}`, {
        ...product,
        count: product.count + 1,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const decrease = createAsyncThunk(
  "decrease",
  async (product, thunkAPI) => {
    try {
      const { data } = await axios.put(`/products/${product.id}`, {
        ...product,
        count: product.count - 1,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
