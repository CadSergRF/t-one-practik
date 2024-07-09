import { FormEvent } from "react";

import { CartItem } from "../../molecules/CartItem/CartItem";

import styles from "./CartItemsView.module.css";

import { mockCart } from "../../../mock/mock.cart";

const CartItemsView = () => {
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <ul className={styles.form__list}>
        {mockCart.map((item) => (
          <CartItem key={item.item.id} {...item} />
        ))}
      </ul>
    </form>
  );
};

export { CartItemsView };
