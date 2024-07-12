import { MouseEvent } from "react";

import { AddedButton } from "../../atoms/AddedButton/AddedButton";

import styles from "./AddedControl.module.css";

type Props = {
  quantity: number;
};

const AddedControl = ({ quantity }: Props) => {
  const priceWord = quantity > 1 ? "items" : "item";

  const handleMinusQuantity = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.stopPropagation();
    console.log("The quantity of the product has been reduced by 1");
  };

  const handlePlusQuantity = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.stopPropagation();
    console.log("The quantity of the product has been increased by 1");
  };

  return (
    <div className={styles.group__quantity}>
      <AddedButton location="MinusButton" handler={handleMinusQuantity} />
      <p className={styles.quantity}>
        {quantity}&#160;{priceWord}
      </p>
      <AddedButton location="PlusButton" handler={handlePlusQuantity} />
    </div>
  );
};

export { AddedControl };
