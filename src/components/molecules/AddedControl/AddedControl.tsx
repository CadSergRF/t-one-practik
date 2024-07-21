import { MouseEvent } from "react";

import { useAppDispatch, useAppSelector } from "../../../hooks/redux.hooks";

import { clearStatusError, fetchChangeCart } from "../../../store/reducers/cart.slice";

import { AddedButton } from "../../atoms/AddedButton/AddedButton";

import styles from "./AddedControl.module.css";

type Props = {
  id: number;
  quantity: number;
  stock?: number;
};

const AddedControl = ({ id, quantity, stock }: Props) => {
  const dispatch = useAppDispatch();
  const storeStatus = useAppSelector((state) => state.cartStore.status);

  const priceWord = quantity > 1 ? "items" : "item";

  if (storeStatus === "ChangeQuantityError") {
    setTimeout(() => {
      dispatch(clearStatusError())
    }, 2000)
  }

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
        disabled={storeStatus === ("Loading" || "ChangeQuantityError")}
      />
      <p className={styles.quantity}>
        {quantity}&#160;{priceWord}
      </p>
      <AddedButton
        location="PlusButton"
        handler={handlePlusQuantity}
        disabled={stock === quantity || storeStatus === ("Loading" || "ChangeQuantityError")}
      />
      {(storeStatus === "ChangeQuantityError") && <p className={styles.error}>Quantity change error</p>}
    </div>
  );
};

export { AddedControl };
