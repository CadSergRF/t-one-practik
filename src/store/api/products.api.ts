import { instantsApi } from "./instants.api";

import {
  TGetProductsRequest,
  TGetSearchProductsResponse,
} from "../../Types/api.types";
import { TProductFull } from "../../Types/products.type";

export const productsApi = instantsApi.injectEndpoints({
  endpoints: (builder) => ({
    getSearchProducts: builder.query<
      TGetSearchProductsResponse,
      TGetProductsRequest
    >({
      query: (reqParams) => ({
        url: `/products/search?q=${reqParams.q}&limit=${reqParams.limit}&skip=${reqParams.skip}`,
        method: "GET",
      }),
    }),
    getSingleProduct: builder.query<TProductFull, string>({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: "GET",
      }),
    }),
  }),
});
