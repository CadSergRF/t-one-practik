import { useAppSelector } from "./redux.hooks";

export const useInCart = (productId: number) => {
  let inCart = false;
  let quantityInCart = 0;
  const cartState = useAppSelector((state) => state.cartStore.cart.products);
  const findElem = cartState.find((item) => item.id === productId);

  if (findElem !== undefined) {
    inCart = true;
    quantityInCart = findElem.quantity;
  }

  return { inCart, quantityInCart };
};
