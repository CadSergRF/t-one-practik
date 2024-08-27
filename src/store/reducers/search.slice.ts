import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { apiCardsLimit } from "./../../utils/constants/main.constants";

type TSearchSlice = {
  total: number;
  skip: number;
  limit: number;
  searchQuery: string;
};

export const initialState: TSearchSlice = {
  total: 0,
  skip: 0,
  limit: apiCardsLimit,
  searchQuery: "",
};

const searchSlice = createSlice({
  name: "searchStore",
  initialState,
  reducers: {
    refreshSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
      state.skip = 0;
    },
    refreshSearchSkipState(state, action: PayloadAction<number>) {
      state.skip = action.payload;
    },
    refreshSearchTotalState(state, action: PayloadAction<number>) {
      state.total = action.payload;
    },
  },
});

export const {
  refreshSearchQuery,
  refreshSearchSkipState,
  refreshSearchTotalState,
} = searchSlice.actions;
export default searchSlice.reducer;
