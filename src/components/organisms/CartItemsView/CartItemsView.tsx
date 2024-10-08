import { FormEvent } from "react";

import { CartItem } from "../../molecules/CartItem/CartItem";

import { TCartProduct } from "../../../Types/cart.type";

import styles from "./CartItemsView.module.css";

type Props = {
  products: TCartProduct[];
};

const CartItemsView = ({ products }: Props) => {
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <ul className={styles.form__list}>
        {products.map((item) => (
          <CartItem key={item.id} product={item} />
        ))}
      </ul>
    </form>
  );
};

export { CartItemsView };
