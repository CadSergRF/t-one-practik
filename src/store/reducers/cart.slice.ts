import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { TCart, TCarts } from "./../../Types/cart.type";

import { BASE_URL } from "../../utils/constants/main.constants";

interface MyKnownError {
  errorMessage: string;
}

export const fetchCartByUserId = createAsyncThunk<
  TCarts,
  number,
  { rejectValue: MyKnownError }
>("userCart/fetchCartByUserId", async (userId: number, thunkApi) => {
  const response = await fetch(`${BASE_URL}/carts/user/${userId}`);
  if (response.status === 400) {
    return thunkApi.rejectWithValue((await response.json()) as MyKnownError);
  }
  return (await response.json()) as TCarts;
});

type TCartSlice = {
  cart: TCart;
  status: string;
  error: string;
};

const initialState: TCartSlice = {
  cart: {
    id: 0,
    products: [],
    total: 0,
    discountedTotal: 0,
    userId: 0,
    totalProducts: 0,
    totalQuantity: 0,
  },
  status: "",
  error: "",
};

const cartSlice = createSlice({
  name: "userCart",
  initialState,
  reducers: {
    // на будущее
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartByUserId.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(fetchCartByUserId.fulfilled, (state, action) => {
        state.status = "Done";
        state.cart = action.payload.carts[0];
      })
      .addCase(fetchCartByUserId.rejected, (state) => {
        state.status = "Error";
      });
  },
});

export default cartSlice.reducer;
