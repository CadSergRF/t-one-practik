import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TGetSearchProductsResponse } from "../../Types/api.types";
import { TProductFull } from "../../Types/products.type";

type TProductSlice = {
    products: TProductFull[];
}

export const initialState: TProductSlice = {
  products: [],
};

const productSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    refreshProductState(state) {
      state.products = [];
    },
    addCards(state, action: PayloadAction<TGetSearchProductsResponse>) {
      state.products = [...state.products, ...action.payload.products];
    },
  },
});

export const { refreshProductState, addCards  } = productSlice.actions;
export default productSlice.reducer;
