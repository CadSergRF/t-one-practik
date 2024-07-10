import { combineReducers, configureStore } from '@reduxjs/toolkit';

import cartSlice from './reducers/cart.slice';
import { instantsApi } from './api/instants.api';
import productSlice from './reducers/product.slice';

const rootReducer = combineReducers({
  productView: productSlice,
  cartStore: cartSlice,
  [instantsApi.reducerPath]: instantsApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(instantsApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];