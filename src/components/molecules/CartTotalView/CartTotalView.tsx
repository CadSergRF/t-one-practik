import clsx from "clsx";

import styles from "./CartTotalView.module.css";

type Props = {
  cartQuantity: number;
};

const CartTotalView = ({ cartQuantity }: Props) => {
  const priceWord = cartQuantity > 1 ? "items" : "item";

  return (
    <div className={styles.total}>
      <div className={styles.total__item}>
        <p className={styles.total__count}>Total count</p>
        <p className={clsx(styles.total__count, styles.total__count_value)}>
          {cartQuantity}&#160;{priceWord}
        </p>
      </div>
      <div className={clsx(styles.total__item, styles.total__item_style)}>
        <p className={styles.total__brutto}>Price without discount</p>
        <p className={clsx(styles.total__brutto, styles.total__brutto_value)}>
          700&#36;
        </p>
      </div>
      <div className={styles.total__item}>
        <p className={styles.total__netto}>Total price</p>
        <p className={clsx(styles.total__netto, styles.total__netto_value)}>
          590&#36;
        </p>
      </div>
    </div>
  );
};

export { CartTotalView };
