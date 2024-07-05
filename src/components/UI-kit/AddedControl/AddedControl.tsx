import { MouseEvent } from "react";

import { AddedButton } from "../AddedButton/AddedButton";

import styles from "./AddedControl.module.css";

type Props = {
  quantity: number;
};

const AddedControl = ({ quantity }: Props) => {

  const priceWord = quantity > 1 ? "items" : "item";

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
      <AddedButton location="MinusButton" handler={handleMinusQuantity} />
      <p className={styles.quantity}>{quantity}&#160;{priceWord}</p>
      <AddedButton location="PlusButton" handler={handlePlusQuantity} />
    </div>
  );
};

export { AddedControl };
