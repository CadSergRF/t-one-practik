import { MouseEvent, useRef } from "react";
import clsx from "clsx";

import { useAppDispatch, useAppSelector } from "../../../hooks/redux.hooks";

import { clearStatusError } from "../../../store/reducers/cart.slice";

import { CartSVGIcon } from "../Icons/CartSVGIcon";
import { MinusSVGIcon } from "../Icons/MinusSVGIcon";
import { PlusSVGIcon } from "../Icons/PlusSVGIcon";

import styles from "./AddedButton.module.css";

type Props = {
  id?: string;
  disabled?: boolean;
  hover?: boolean;
  location: "AddButton" | "MinusButton" | "PlusButton";
  handler: (evt: MouseEvent<HTMLButtonElement>) => void;
};

const AddedButton = ({
  location,
  handler,
  disabled = false,
  hover = false,
}: Props) => {
  const dispatch = useAppDispatch();
  const storeStatus = useAppSelector((state) => state.cartStore.status);

  const buttonRef = useRef<HTMLButtonElement>(null);

  if (storeStatus === "ChangeQuantityError") {
    setTimeout(() => {
      dispatch(clearStatusError());
    }, 2000);
  }

  const handleClick = (evt: MouseEvent<HTMLButtonElement>) => {
    buttonRef?.current?.blur(); // Убираем фокус с button после клика
    handler(evt);
  };

  let ariaText: string;
  if (location === "AddButton") {
    ariaText = "Add an item to the shopping cart";
  } else if (location === "MinusButton") {
    ariaText = "Reduce the number of items in the cart by 1";
  } else {
    ariaText = "Increase the number of items in the cart by 1";
  }

  return (
    <button
      type="button"
      className={clsx(styles.button, {
        [styles.btn__hover]: hover,
      })}
      onClick={handleClick}
      ref={buttonRef}
      disabled={disabled}
      aria-label={ariaText}
    >
      <div
        className={clsx({
          [styles.addButton]: location === "AddButton",
          [styles.quantityBtn]:
            location === "MinusButton" || location === "PlusButton",
        })}
      >
        {location === "AddButton" && <CartSVGIcon />}
        {location === "MinusButton" && <MinusSVGIcon />}
        {location === "PlusButton" && <PlusSVGIcon />}
      </div>
      {(storeStatus === "ChangeQuantityError" && (location === "AddButton")) && (
          <p className={styles.error}>Error adding to cart</p>
        )}
    </button>
  );
};

export { AddedButton };
