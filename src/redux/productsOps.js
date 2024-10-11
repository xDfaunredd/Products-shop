import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("fetchData", async (_, thunkAPI) => {
  try {
    const { data } = await axios.get("https://dummyjson.com/products");

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getFullProductInfo = createAsyncThunk(
  "getFullProductInfo",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`https://dummyjson.com/products/${id}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
