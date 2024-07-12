import { combineReducers, configureStore } from "@reduxjs/toolkit";

import productSlice from "./reducers/product.slice";
import cartSlice from "./reducers/cart.slice";
import searchSlice from "./reducers/search.slice";
import { instantsApi } from "./api/instants.api";

const rootReducer = combineReducers({
  productView: productSlice,
  cartStore: cartSlice,
  searchStore: searchSlice,
  [instantsApi.reducerPath]: instantsApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(instantsApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
