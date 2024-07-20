import { MouseEvent } from "react";

import { useAppDispatch, useAppSelector } from "../../../hooks/redux.hooks";

import { fetchChangeCart } from "../../../store/reducers/cart.slice";

import { AddedButton } from "../../atoms/AddedButton/AddedButton";

import styles from "./AddedControl.module.css";

type Props = {
  id: number;
  quantity: number;
  stock?: number;
};

const AddedControl = ({ id, quantity, stock }: Props) => {
  const dispatch = useAppDispatch();
  const isFetchLoading = useAppSelector((state) => state.cartStore.status);

  const priceWord = quantity > 1 ? "items" : "item";

  const handleMinusQuantity = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.stopPropagation();
    dispatch(
      fetchChangeCart({
        changeMethod: "ChangeQuantity",
        newData: { id: id, quantity: quantity - 1 },
      })
    );
  };

  const handlePlusQuantity = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.stopPropagation();
    dispatch(
      fetchChangeCart({
        changeMethod: "ChangeQuantity",
        newData: { id: id, quantity: quantity + 1 },
      })
    );
  };

  return (
    <div className={styles.group__quantity} data-testid="added-control">
      <AddedButton
        location="MinusButton"
        handler={handleMinusQuantity}
        disabled={isFetchLoading === "Loading"}
      />
      <p className={styles.quantity}>
        {quantity}&#160;{priceWord}
      </p>
      <AddedButton
        location="PlusButton"
        handler={handlePlusQuantity}
        disabled={stock === quantity || isFetchLoading === "Loading"}
      />
    </div>
  );
};

export { AddedControl };
