import { TCardProduct } from "../../Types/products.type";

export const resChangeCartArray = (products: TCardProduct[]) => {
    const resArray = products.map((item) => {return {id: item.id, quantity: item.quantity}})
    return resArray;
}