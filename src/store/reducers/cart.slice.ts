import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { TCart, TCarts, TChangeCart } from "./../../Types/cart.type";

import { BASE_URL } from "../../utils/constants/main.constants";
import { RootState } from "../store";
import { resChangeCartArray } from "../../utils/helpers/resChangeCartArray.helper";

interface MyKnownError {
  errorMessage: string;
}

export const fetchCartByUserId = createAsyncThunk<
  TCarts,
  number,
  { rejectValue: MyKnownError }
>("userCart/fetchCartByUserId", async (userId: number, thunkApi) => {
  const response = await fetch(`${BASE_URL}/carts/user/${userId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    }
  });
  if (response.status === 400) {
    return thunkApi.rejectWithValue((await response.json()) as MyKnownError);
  }
  return (await response.json()) as TCarts;
});

export const fetchChangeCart = createAsyncThunk<
  TCart,
  TChangeCart,
  { rejectValue: MyKnownError, state: RootState }
>("userCart/fetchChangeCart", async (newArray: TChangeCart, thunkApi) => {
  const state = thunkApi.getState();
  const cartForChange = resChangeCartArray(state.cartStore.cart.products);
  console.log(cartForChange)
  if (newArray.changeMethod === 'AddToCart') {
    cartForChange.push(newArray.newData) 
  } else if (newArray.changeMethod === 'ChangeQuantity') {
    cartForChange.forEach((item) => {
      if (item.id === newArray.newData.id) {
        item.quantity = newArray.newData.quantity
      }
    })
  }
  console.log('change res', cartForChange)
  const cartId = state.cartStore.cart.id;
  console.log('id cart ', cartId)
  const response = await fetch(`${BASE_URL}/carts/${cartId}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      merge: true,
      products: cartForChange,
    })
  });
  const res = await response.json()
  console.log('res ', res)
  if (response.status === 400) {
    return thunkApi.rejectWithValue((await response.json()) as MyKnownError);
  }
  return res;
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
      })
      .addCase(fetchChangeCart.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(fetchChangeCart.fulfilled, (state, action) => {
        state.status = "Done";
        state.cart.products = action.payload.products;
        state.cart.discountedTotal = action.payload.discountedTotal;
        state.cart.total = action.payload.total;
        state.cart.totalProducts = action.payload.totalProducts;
        state.cart.totalQuantity = action.payload.totalQuantity;        
      })
      .addCase(fetchChangeCart.rejected, (state, action) => {
        console.log(action.error)
        state.status = "Error";
      });
  },
});

export default cartSlice.reducer;
