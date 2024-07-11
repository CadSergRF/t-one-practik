export type TCardProduct = {
  id: number;
  title: string;
  price: number;
  quantity?: number;
  discountPercentage: number;
  thumbnail: string;
};

type TProductReviews = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

type TProductMeta = {
  createdAt: string;
  updatedAt: string;
  barcode: number;
  qrCode: string;
};

type TProductDimensions = {
  width: number;
  height: number;
  depth: number;
};

export type TProductFull = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: TProductDimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: TProductReviews[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: TProductMeta;
  thumbnail: string;
  images: string[];
};
