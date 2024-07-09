import { CartSVGIcon } from "../Icons/CartSVGIcon";

import styles from "./CartIcon.module.css";

type Props = {
  counter: number;
};

const CartIcon = ({ counter }: Props) => {
  return (
    <div className={styles.cart} data-count={counter}>
      <CartSVGIcon />
    </div>
  );
};

export { CartIcon };
