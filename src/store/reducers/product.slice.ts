import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TGetSearchProductsResponse } from "../../Types/api.types";
import { TProductFull } from "../../Types/products.type";

type TProductSlice = {
    products: TProductFull[];
    total: number;
    skip: number;
    limit: number;
    searchQuery: string;
}

const initialState: TProductSlice = {
  products: [],
  total: 0,
  skip: 0,
  limit: 12,
  searchQuery: ''
};

const productSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    refreshSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    refreshState(state, action: PayloadAction<TGetSearchProductsResponse>) {
      state.skip = action.payload.skip;
      state.total = action.payload.total;
      state.products = []
      state.products = [...action.payload.products];
    },
    addCards(state, action: PayloadAction<TGetSearchProductsResponse>) {
      state.skip = action.payload.skip;
      state.total = action.payload.total;
      state.products = [...state.products, ...action.payload.products];
    },
  },
});

export const { refreshSearchQuery, refreshState, addCards  } = productSlice.actions;
export default productSlice.reducer;
