import { TProductFull } from "./products.type";

export type TGetProductsRequest = {
  q: string;
  limit?: number;
  skip?: number;
};

export type TGetSearchProductsResponse = {
  products: TProductFull[];
  total: number;
  skip: number;
  limit: number;
};
