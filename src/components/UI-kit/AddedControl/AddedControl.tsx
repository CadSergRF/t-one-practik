import { MouseEvent } from "react";

import { CartIcon } from "../CartIcon/CartIcon";

import styles from "./AddedControl.module.css";

type Props = {
  quantity: number;
};

const AddedControl = ({ quantity }: Props) => {
  const handleMinusQuantity = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.stopPropagation();
    console.log("Количество товара уменьшено на 1");
  };

  const handlePlusQuantity = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.stopPropagation();
    console.log("Количество товара увеличено на 1");
  };
  return (
    <div className={styles.group__quantity}>
      <button className={styles.button} onClick={handleMinusQuantity}>
        <CartIcon location="MinusButton" />
      </button>
      <p className={styles.quantity}>{quantity} item</p>
      <button className={styles.button} onClick={handlePlusQuantity}>
        <CartIcon location="PlusButton" />
      </button>
    </div>
  );
};

export { AddedControl };
