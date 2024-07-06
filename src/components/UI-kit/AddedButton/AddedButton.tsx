import { MouseEvent } from "react";
import clsx from "clsx";

import styles from "./AddedButton.module.css";

type Props = {
  location: "AddButton" | "MinusButton" | "PlusButton";
  handler: (evt: MouseEvent<HTMLButtonElement>) => void;
};

const AddedButton = ({ location, handler }: Props) => {

  let ariaText: string;
  if (location === "AddButton") {
    ariaText = "Add an item to the shopping cart"
  } else if (location === "MinusButton") {
    ariaText = "Reduce the number of items in the cart by 1"
  } else {
    ariaText = "Increase the number of items in the cart by 1"
  }

  return (
    <button className={styles.button} onClick={handler} aria-label={ariaText}>
    <div
      className={clsx({
        [styles.addButton]: location === "AddButton",
        [styles.quantityBtn]:
          location === "MinusButton" || location === "PlusButton",
      })}
    >
      {location === "AddButton" && (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className={styles.image}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 7.14286H16.6038L13.0359 0.34668C12.8589 0.00908289 12.475 -0.101141 12.1784 0.10185C11.8823 0.304841 11.7865 0.743572 11.9641 1.08189L15.1461 7.14286H4.85388L8.03587 1.08184C8.21348 0.743524 8.11767 0.304793 7.82164 0.101802C7.52439 -0.101189 7.14173 0.00903482 6.96411 0.346631L3.39617 7.14281H0V8.57139H1.35651L2.94432 18.2512C3.11033 19.2648 3.88547 20 4.78761 20H15.2124C16.1145 20 16.8896 19.2648 17.055 18.252L18.6434 8.57139H20C20 8.57139 20 7.14286 20 7.14286ZM15.8264 17.989C15.7715 18.3266 15.5133 18.5715 15.2124 18.5715H4.78761C4.4867 18.5715 4.22854 18.3266 4.173 17.9883L2.62789 8.57139H17.3721L15.8264 17.989Z"
            fill="white"
          />
        </svg>
      )}
      {location === "MinusButton" && (
        <svg
          width="30"
          height="2"
          viewBox="0 0 30 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29 2L1 2C0.447715 2 0 1.55228 0 1C0 0.447715 0.447716 0 1 0L29 0C29.5523 0 30 0.447715 30 1C30 1.55228 29.5523 2 29 2Z"
            fill="white"
          />
        </svg>
      )}
      {location === "PlusButton" && (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.0323 15.9678L0.967741 15.9678C0.433273 15.9678 0 15.5345 0 15C0 14.4656 0.433272 14.0323 0.967741 14.0323L29.0323 14.0323C29.5667 14.0323 30 14.4656 30 15C30 15.5345 29.5667 15.9678 29.0323 15.9678Z"
            fill="white"
          />
          <path
            d="M14.0322 29.0323L14.0322 0.967741C14.0322 0.433273 14.4655 0 15 0C15.5344 0 15.9677 0.433272 15.9677 0.967741L15.9677 29.0323C15.9677 29.5667 15.5344 30 15 30C14.4655 30 14.0322 29.5667 14.0322 29.0323Z"
            fill="white"
          />
        </svg>
      )}
    </div>
    </button>
  );
};

export { AddedButton };
