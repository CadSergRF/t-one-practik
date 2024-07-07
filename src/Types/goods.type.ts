export type TGoods = {
    id: number;
    name: string;
    price: number;
}

export type TGoodsItems = {
    item: TGoods;
    quantity?: number;
}