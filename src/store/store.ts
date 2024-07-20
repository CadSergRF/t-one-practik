import { combineReducers, configureStore } from "@reduxjs/toolkit";

import productSlice from "./reducers/product.slice";
import cartSlice from "./reducers/cart.slice";
import userSlice from "./reducers/user.slice";
import searchSlice from "./reducers/search.slice";
import { instantsApi } from "./api/instants.api";

const rootReducer = combineReducers({
  productView: productSlice,
  cartStore: cartSlice,
  userStore: userSlice,
  searchStore: searchSlice,
  [instantsApi.reducerPath]: instantsApi.reducer,
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(instantsApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
