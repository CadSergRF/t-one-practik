import { instantsApi } from "./instants.api";

import {
  TGetProductsRequest,
  TGetSearchProductsResponse,
} from "../../Types/api.types";

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
  }),
});
