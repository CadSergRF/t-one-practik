import { MouseEvent, useRef } from "react";
import { HashLink } from "react-router-hash-link";

import { useAppDispatch, useAppSelector } from "../../../hooks/redux.hooks";

import { clearStatusError } from "../../../store/reducers/cart.slice";

import styles from "./ButtonLF.module.css";

type Props = {
  text: string;
  actionTo: string | ((evt: MouseEvent<HTMLButtonElement>) => void);
};

const ButtonLF = ({ text, actionTo }: Props) => {
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
    typeof actionTo !== "string" && actionTo(evt);
  };

  if (typeof actionTo == "string") {
    return (
      <HashLink smooth to={actionTo} className={styles.button}>
        {text}
      </HashLink>
    );
  } else {
    return (
      <button
        className={styles.button}
        onClick={handleClick}
        ref={buttonRef}
        disabled={storeStatus === "ChangeQuantityError"}
      >
        {text}
        {storeStatus === "ChangeQuantityError" && (
          <p className={styles.error}>Error adding to cart</p>
        )}
      </button>
    );
  }
};

export { ButtonLF };
