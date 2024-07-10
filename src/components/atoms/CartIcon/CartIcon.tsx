import clsx from "clsx";
import { CartSVGIcon } from "../Icons/CartSVGIcon";

import styles from "./CartIcon.module.css";

type Props = {
  counter: number;
};

const CartIcon = ({ counter }: Props) => {
  return (
    <div className={clsx(styles.cart, {
      [styles.cart__counter]: (counter > 0),
    })} data-count={counter}>
      <CartSVGIcon />
    </div>
  );
};

export { CartIcon };
